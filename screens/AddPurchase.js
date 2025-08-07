import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Input, Select, useDisclose, Actionsheet } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Image, Linking, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import Toast from 'react-native-simple-toast';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import FooterComponents from '../components/Footer';

const AddPurchaseScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');

    const [purchaseDate, setPurchaseDate] = React.useState('');
    const [dealerPhone, setDealerPhone] = React.useState('');
    const [dealerList, setDealerList] = React.useState([]);
    const [dealer, setDealer] = React.useState('');
    const [dealerFound, setDealerFound] = React.useState(false);
    const [customerName, setCustomerName] = React.useState('');
    const [mobileNumber, setMobileNumber] = React.useState('');
    const [productId, setProductId] = React.useState('');
    const [productName, setProductName] = React.useState('');
    const [productList, setProductList] = React.useState([]);
    const [totalBag, setTotalBag] = React.useState('');

    const [purchaseArrya, setPurchaseArrya] = React.useState([]);

    const [step1, setStep1] = React.useState(true);
    const [step2, setStep2] = React.useState(false);
    const [step3, setStep3] = React.useState(false);

    const [successPop, setSuccessPop] = React.useState(false);

    const [actionPOP, setActionPOP] = React.useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const [officerName, setOfficerName] = React.useState('');
    const [officerPhone, setOfficerPhone] = React.useState('');
    const [officerType, setOfficerType] = React.useState('');

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const [purchaseMaxData, setPurchaseMaxData] = React.useState("");
    const [miniData, setMiniData] = React.useState("");

    const { isOpen, onOpen, onClose } = useDisclose();
    const [prod, setProd] = React.useState("");

    const [minPurchase, setMinPurchase] = React.useState("");
    const [maxPurchase, setMaxPurchase] = React.useState("");

    const [preApproved, setPreApproved] = React.useState("");

    const regexAlpha = /[^A-Za-z, ""]/g;
    const regexNum = /^[6-9]\d{9}$/;
    const regexNumeric = /^[0-9]+$/;

    const [dissable, setDissable] = React.useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    var CryptoJS = require("crypto-js");
                    const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                    setPurchaseMaxData(new Date(year, month, day - JSON.parse(decryptData).transaction_allowed_days_from));
                    setMiniData(new Date(year, month, day - JSON.parse(decryptData).transaction_allowed_days_upto));
                }
            });
        });
        return unsubscribe;
    }, []);

    const searchDealer = () => {
        if (dealerPhone.trim() == "") {
            Toast.show(t("Please enter Dealer Phone Number"), Toast.LONG);
        } else if (dealerPhone.length < 10) {
            Toast.show(t("Please enter 10 digit for Phone Number"), Toast.LONG);
        } else if (dealerPhone != "" && !regexNum.test(dealerPhone)) {
            Toast.show(t("Dealer Phone Number accept Only Number / Mobile No. not Valid"), Toast.LONG);
        } else {
            setLoading(true);
            setDealer("");
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    var CryptoJS = require("crypto-js");
                    const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                    let formdata = new FormData();
                    formdata.append("mobileNumber", dealerPhone);
                    formdata.append("lang_code", currentLanguage);
                    fetch(`${BASE_URL}/registration/get-dealer`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'accesstoken': `${AccessToken}`,
                            'Useraccesstoken': JSON.parse(decryptData).token
                        },
                        body: formdata
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {
                            setLoading(false);
                            console.log("Get Dealer:", responseJson);
                            if (responseJson.bstatus == 1) {
                                setDealerList(responseJson.details);
                                setDealerFound(true);
                                if (responseJson.details.length == 1) {
                                    setDealer(responseJson.details[0].id);
                                    setLoading(true);
                                    getProduct(responseJson.details[0].id);
                                }
                            } else {
                                Toast.show(responseJson.message, Toast.LONG);
                                setDealerList([]);
                                setDealerFound(false);
                                setDealerPhone("");
                            }
                        })
                        .catch((error) => {
                            setLoading(false);
                            //console.log("Error:", error);
                            Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                        });
                }
            })
        }
    }

    const editDealer = () => {
        setDealerFound(false);
        setDealer("");
        setDealerList([]);
        setDealerPhone("");
        setProductList([]);
    }

    const onSelectDealer = (valdata) => {
        setLoading(true);
        getProduct(valdata);
        setDealer(valdata);
    }

    const getProduct = (dealerId) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("dealer", dealerId);
                fetch(`${BASE_URL}/get-products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        //console.log("Product:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setProductList(responseJson.product_list);
                            setMinPurchase(responseJson.minimumPurchaseQuantity);
                            setMaxPurchase(responseJson.maximumPurchaseQuantity);
                        } else {
                            setLoading(false);
                            Toast.show(responseJson.message, Toast.LONG);
                            setProductList([]);
                            setMinPurchase("");
                            setMaxPurchase("");
                            if (responseJson.msg_code == "msg_0047") {
                                AsyncStorage.clear();
                                navigation.replace('Intro');
                            }
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            }
        });
    }

    const onSubmit = () => {
        if (purchaseDate == "") {
            Toast.show(t("Please select Purchase Date"), Toast.LONG);
            setStep1(true);
        } else if (!dealerFound) {
            Toast.show(t("Please search and select Dealer"), Toast.LONG);
            setStep1(true);
        } else if (dealerFound && dealer == "") {
            Toast.show(t("Please select Dealer"), Toast.LONG);
            setStep1(true);
        } else {
            setStep1(false);
            setStep2(true);
            if (customerName == "") {
                Toast.show(t("Please enter Customer Name"), Toast.LONG);
            } else if (customerName != "" && regexAlpha.test(customerName)) {
                Toast.show(t("Please enter Only Alphabet"), Toast.LONG);
            } else if (mobileNumber == "") {
                Toast.show(t("Please enter Mobile Number"), Toast.LONG);
            } else if (mobileNumber.length < 10) {
                Toast.show(t("Please enter 10 digit for Mobile Number"), Toast.LONG);
            } else if (mobileNumber != "" && !regexNum.test(mobileNumber)) {
                Toast.show(t("Cunstomer Phone Number accept Only Number / Mobile No. not Valid"), Toast.LONG);
            } else {
                setStep2(false);
                setStep3(true);
                if (purchaseArrya.length == 0) {
                    setActionPOP(true);
                    Toast.show(t("Please Add some Purchase"), Toast.LONG);
                } else {
                    setLoading(true);
                    setDissable(true);
                    AsyncStorage.getItem('userToken').then(val => {
                        if (val != null) {
                            var CryptoJS = require("crypto-js");
                            const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                            fetch(`${BASE_URL}/get-sale-token`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'accesstoken': `${AccessToken}`,
                                    'Useraccesstoken': JSON.parse(decryptData).token
                                },
                                body: ""
                            })
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    //console.log("get-sale-token:", responseJson);
                                    if (responseJson.bstatus == 1) {
                                        addPurchase(responseJson.sale_token);
                                    } else {
                                        Toast.show(responseJson.message, Toast.LONG);
                                        setLoading(false);
                                        setDissable(false);
                                    }
                                })
                                .catch((error) => {
                                    setLoading(false);
                                    //console.log("Error:", error);
                                    Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                                });
                        }
                    })
                }
            }
        }
    }

    const addPurchase = (saleToken) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("dealerId", dealer);
                formdata.append("saleDate", (purchaseDate != '' ? moment(purchaseDate).format('YYYY-MM-DD') : ""));
                formdata.append("customerName", customerName);
                formdata.append("customerMobile", mobileNumber);
                formdata.append("productDetails", JSON.stringify(purchaseArrya));
                formdata.append("saleToken", saleToken);
                fetch(`${BASE_URL}/purchase-registration`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        setLoading(false);
                        //console.log("Add Purchase:", responseJson);
                        if (responseJson.bstatus == 1) {
                            Toast.show(responseJson.message, Toast.LONG);
                            setSuccessPop(true);
                            setOfficerName(responseJson.officerName);
                            setOfficerPhone(responseJson.officerNumber);
                            setOfficerType(responseJson.officerType);
                            setPreApproved(responseJson.autoapproved);
                            setDissable(false);
                        } else {
                            Toast.show(responseJson.message, Toast.LONG);
                            setDissable(false);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            }
        })
    }

    const addPurchaseDetails = () => {
        if (productId == "") {
            Toast.show(t("Please select Product"), Toast.LONG);
        } else if (totalBag == "") {
            Toast.show(t("Please enter Total Bags"), Toast.LONG);
        } else if (totalBag != "" && !regexNumeric.test(totalBag)) {
            Toast.show(t("Total Bag accept Only Number"), Toast.LONG);
        } else if (totalBag < Number(minPurchase)) {
            Toast.show(t("Please enter Total Bags Minimum Quantity of ") + minPurchase, Toast.LONG);
        } else if (totalBag > Number(maxPurchase)) {
            Toast.show(t("Please enter Total Bags Maximum Quantity of ") + maxPurchase, Toast.LONG);
        } else {
            console.log(newArrya);
            var newArrya = purchaseArrya.concat({ "productName": productName, "saleQuantity": totalBag, "productId": productId });
            setPurchaseArrya(newArrya);
            setLoading(true);
            setActionPOP(false);
            setTimeout(() => {
                setLoading(false);
                setProductId("");
                setProductName("");
                setTotalBag("");
                setProd("");
            }, 1000)
        }
    }

    const onClear = () => {
        setActionPOP(false);
        setProductId("");
        setProductName("");
        setTotalBag("");
        setProd("")
    }

    const rmFromArrya = (indexVal) => {
        Alert.alert(
            t("Warning !"),
            t("Do you want to remove this purchase") + "?",
            [
                {
                    text: t("Cancel"),
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: t("Yes"), onPress: () => {
                        const reducedArr = purchaseArrya.filter((item, itemIndex) => {
                            return itemIndex !== indexVal
                        })
                        setPurchaseArrya(reducedArr);
                    }
                }
            ],
            { cancelable: false }
        );
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        hideDatePicker();
        setPurchaseDate(date);
    };

    const onSelectProduct = (pro) => {
        setProd(pro);
        setProductId(pro.prod_id);
        setProductName(pro.product_name);
        onClose();
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView automaticallyAdjustKeyboardInsets={true} backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={4} padding={8}>
                        <Stack space={2}>
                            <Pressable onPress={() => setStep1(!step1)}>
                                <HStack position="relative" zIndex={9}>
                                    <HStack space={2} width={35} height={55} alignSelf="center" alignItems="center" justifyContent="center" backgroundColor={darkColor} borderBottomRadius={6} borderTopLeftRadius={6}>
                                        <Text color={lightColor} fontSize="sm" fontFamily={fontBold}>01.</Text>
                                    </HStack>
                                    <Box height="18" width="10%" overflow="hidden">
                                        <Box backgroundColor={darkColor} height="60" width="25" position="absolute" right={2} top={0} style={{ transform: [{ rotate: '-45deg' }] }}></Box>
                                    </Box>
                                </HStack>
                                <HStack justifyContent="space-between" alignItems="center" backgroundColor={baseLightColor} position="relative" marginTop={-37} borderRadius={6} overflow="hidden">
                                    <Text color={darkColor} fontSize="sm" fontFamily={fontBold} marginLeft={12}>{t("Purchase Info")}</Text>
                                    <Pressable style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 36, paddingHorizontal: 12 }]} variant="unstyled">
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="2xl" lineHeight={32}>{step1 ? "-" : "+"}</Text>
                                    </Pressable>
                                </HStack>
                            </Pressable>
                            {step1 && (
                                <VStack space={2} backgroundColor={baseLightColor} borderRadius={6} overflow="hidden" padding={3}>
                                    <View>
                                        <Text style={MainStyle.lable} fontSize="xs">{t("Purchase Date")} <Text color={dangerColor}>*</Text></Text>
                                        <View style={MainStyle.inputbox}>
                                            <Pressable style={styles.inputbox} onPress={() => showDatePicker()}>
                                                <HStack style={{ paddingHorizontal: 10, height: 43 }} alignItems="center" paddingY={Platform.OS == 'ios' ? '1.5' : '2.5'} justifyContent="space-between">
                                                    <Text color={purchaseDate != '' ? '#111111' : '#999999'} fontSize="sm"> {purchaseDate != '' ? moment(purchaseDate).format('DD-MM-YYYY') : ""}</Text>
                                                    <Icon name="calendar-outline" size={18} color={darkColor} />
                                                </HStack>
                                            </Pressable>
                                        </View>
                                    </View>
                                    <DateTimePickerModal date={purchaseDate || undefined} maximumDate={purchaseMaxData} minimumDate={miniData} isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
                                    <Stack space={2}>
                                        <View>
                                            <Text style={MainStyle.lable} fontSize="xs">{t("Dealer / Retailer Phone Number")} <Text color={dangerColor}>*</Text></Text>
                                            <View style={MainStyle.inputbox}>
                                                <Input value={dealerPhone} readOnly={dealerFound} backgroundColor={dealerFound ? lightGrey : lightColor} fontFamily={fontRegular} size="md" variant="unstyled" onChangeText={(text) => setDealerPhone(text)} keyboardType='number-pad' maxLength={10}
                                                    InputRightElement={
                                                        dealerFound ?
                                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: darkColor, height: 37, marginRight: 4 }]} onPress={() => editDealer()}>
                                                                <Icon name="close" size={18} color={lightColor} />
                                                            </Button>
                                                            :
                                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: warningColor, height: 37, marginRight: 4 }]} onPress={() => searchDealer()}>
                                                                <Icon name="search" size={18} color={lightColor} />
                                                            </Button>
                                                    }
                                                />
                                            </View>
                                        </View>
                                        {dealerList.length != 0 && (
                                            <View>
                                                <Text style={MainStyle.lable} fontSize="xs">{t("Dealer")} <Text color={dangerColor}>*</Text></Text>
                                                <View style={MainStyle.inputbox}>
                                                    <Select variant="unstyled" size="md" placeholder={t("Please Select Dealer")}
                                                        selectedValue={dealer}
                                                        onValueChange={value => onSelectDealer(value)}
                                                        style={{ paddingLeft: 15 }}
                                                        fontFamily={fontRegular}
                                                        dropdownCloseIcon={<Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />}
                                                        dropdownOpenIcon={<Icon name="chevron-up-outline" style={{ marginRight: 10 }} size={20} />}
                                                        _selectedItem={{
                                                            backgroundColor: greyColor,
                                                            endIcon: <Icon name="checkmark-circle" size={20} color={successColor} style={{ right: 0, position: 'absolute' }} />
                                                        }}>
                                                        {dealerList.map((item, index) =>
                                                            <Select.Item key={index} label={item.first_name + " " + item.middle_name + " " + item.last_name + " (" + item.id_extern01 + ")"} value={item.id} />
                                                        )}
                                                    </Select>
                                                </View>
                                            </View>
                                        )}
                                    </Stack>
                                </VStack>
                            )}
                        </Stack>
                        <Stack space={2}>
                            <Pressable onPress={() => setStep2(!step2)}>
                                <HStack position="relative" zIndex={9}>
                                    <HStack space={2} width={35} height={55} alignSelf="center" alignItems="center" justifyContent="center" backgroundColor={darkColor} borderBottomRadius={6} borderTopLeftRadius={6}>
                                        <Text color={lightColor} fontSize="sm" fontFamily={fontBold}>02.</Text>
                                    </HStack>
                                    <Box height="18" width="10%" overflow="hidden">
                                        <Box backgroundColor={darkColor} height="60" width="25" position="absolute" right={2} top={0} style={{ transform: [{ rotate: '-45deg' }] }}></Box>
                                    </Box>
                                </HStack>
                                <HStack justifyContent="space-between" alignItems="center" backgroundColor={baseLightColor} position="relative" marginTop={-37} borderRadius={6} overflow="hidden">
                                    <Text color={darkColor} fontSize="sm" fontFamily={fontBold} marginLeft={12}>{t("Site Details")}</Text>
                                    <Pressable style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 36, paddingHorizontal: 12 }]} variant="unstyled">
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="2xl" lineHeight={32}>{step2 ? "-" : "+"}</Text>
                                    </Pressable>
                                </HStack>
                            </Pressable>
                            {step2 && (
                                <VStack space={2} backgroundColor={baseLightColor} borderRadius={6} overflow="hidden" padding={3}>
                                    <View>
                                        <Text style={MainStyle.lable} fontSize="xs">{t("Customer Name")} <Text color={dangerColor}>*</Text></Text>
                                        <View style={MainStyle.inputbox}>
                                            <Input value={customerName} onChangeText={(text) => setCustomerName(text)} fontFamily={fontRegular} size="md" variant="unstyled" />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={MainStyle.lable} fontSize="xs">{t("Mobile Number")} <Text color={dangerColor}>*</Text></Text>
                                        <View style={MainStyle.inputbox}>
                                            <Input value={mobileNumber} onChangeText={(text) => setMobileNumber(text)} fontFamily={fontRegular} size="md" variant="unstyled" keyboardType='number-pad' maxLength={10} />
                                        </View>
                                    </View>
                                </VStack>
                            )}
                        </Stack>
                        <Stack space={2}>
                            <Pressable onPress={() => setStep3(!step3)}>
                                <HStack position="relative" zIndex={9}>
                                    <HStack space={2} width={35} height={55} alignSelf="center" alignItems="center" justifyContent="center" backgroundColor={darkColor} borderBottomRadius={6} borderTopLeftRadius={6}>
                                        <Text color={lightColor} fontSize="sm" fontFamily={fontBold}>03.</Text>
                                    </HStack>
                                    <Box height="18" width="10%" overflow="hidden">
                                        <Box backgroundColor={darkColor} height="60" width="25" position="absolute" right={2} top={0} style={{ transform: [{ rotate: '-45deg' }] }}></Box>
                                    </Box>
                                </HStack>
                                <HStack justifyContent="space-between" alignItems="center" backgroundColor={baseLightColor} position="relative" marginTop={-37} borderRadius={6} overflow="hidden">
                                    <Text color={darkColor} fontSize="sm" fontFamily={fontBold} marginLeft={12}>{t("Add Purchase Details")}</Text>
                                    <Pressable style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 36, paddingHorizontal: 12 }]} variant="unstyled">
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="2xl" lineHeight={32}>{step3 ? "-" : "+"}</Text>
                                    </Pressable>
                                </HStack>
                            </Pressable>
                            {step3 && (
                                <VStack space={2} backgroundColor={baseLightColor} borderRadius={6} overflow="hidden" padding={3}>
                                    <VStack space={2}>
                                        {purchaseArrya.map((item, index) =>
                                            <HStack key={index} justifyContent="space-between" alignItems="center" backgroundColor={baseSemiColor} padding={3} borderRadius={5} overflow='hidden'>
                                                <Stack width="80%">
                                                    <VStack marginBottom={1}>
                                                        <Text fontFamily={fontRegular}>{t("Product Name")}:</Text>
                                                        <Text fontFamily={fontBold} color={baseColor} textTransform="capitalize">{item.productName}</Text>
                                                    </VStack>
                                                    <HStack space={3}>
                                                        <Text fontFamily={fontRegular}>{t("Total Bag")}:</Text>
                                                        <Text fontFamily={fontBold} color={baseColor}>{item.saleQuantity} {("Bag(s)")}</Text>
                                                    </HStack>
                                                </Stack>
                                                <Pressable onPress={() => rmFromArrya(index)}><Icon name="close-circle-outline" size={30} color={dangerColor} /></Pressable>
                                            </HStack>
                                        )}
                                    </VStack>
                                    {purchaseArrya.length == 0 &&
                                        <Button variant="outline" style={[MainStyle.outlinebtn, { marginTop: 20, marginBottom: 10 }]} onPress={() => setActionPOP(true)}>
                                            <Text color={baseColor} fontFamily={fontSemiBold} fontSize="sm">{t("Add Purchase")}</Text>
                                        </Button>
                                    }
                                    {/* <Button variant="outline" style={[MainStyle.outlinebtn, { marginTop: 20, marginBottom: 10 }]} onPress={() => setActionPOP(true)}>
                                        {purchaseArrya.length > 0 ?
                                            <Text color={baseColor} fontFamily={fontSemiBold} fontSize="sm">{t("Add More Purchase")}</Text>
                                            :
                                            <Text color={baseColor} fontFamily={fontSemiBold} fontSize="sm">{t("Add Purchase")}</Text>
                                        }
                                    </Button> */}
                                </VStack>
                            )}
                        </Stack>
                        <Button disabled={dissable} marginTop={5} style={MainStyle.solidbtn} onPress={() => onSubmit()}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Submit")}</Text>
                        </Button>
                    </VStack>
                </ScrollView>
            </VStack>
            {actionPOP && (
                <View style={MainStyle.spincontainer}>
                    <VStack space={3} style={{ backgroundColor: lightColor, padding: 30, borderRadius: 12, width: '85%' }}>
                        <Text color={darkColor} fontFamily={fontBold} fontSize="lg" textAlign="center" marginBottom={3}>{t("Purchase Details")}</Text>
                        <VStack space={2}>
                            <View>
                                <Text style={MainStyle.lable} fontSize="xs">{t("Product")} <Text color={dangerColor}>*</Text></Text>
                                <View style={MainStyle.inputbox}>
                                    <Pressable onPress={onOpen}>
                                        <Input size="md" readOnly variant="unstyled" value={prod.product_name}
                                            InputRightElement={<Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />}
                                            placeholder={t("Select")} />
                                    </Pressable>
                                </View>
                                <Actionsheet isOpen={isOpen} onClose={onClose}>
                                    <Actionsheet.Content>
                                        <ScrollView w="100%">
                                            {productList.map((item, index) =>
                                                <TouchableOpacity onPress={() => onSelectProduct(item)} w="100%" key={index}>
                                                    <HStack width="96%" marginX="2%" justifyContent="space-between" alignItems="center" marginY={1} backgroundColor={lightColor} borderRadius={10} padding={2} overflow="hidden" borderColor={item.product_name == prod.product_name ? successColor : lightColor} borderWidth={1}>
                                                        <HStack space={3} alignItems="center">
                                                            <Image source={item.product_image == "" ? require('../assets/images/noimage.jpg') : { uri: item.product_image }} style={{ width: 60, height: 60, resizeMode: 'cover', borderRadius: 6, borderWidth: 2, overflow: "hidden" }} borderColor={item.product_name == prod.product_name ? successColor : baseSemiColor} />
                                                            <Text fontSize="xs" textAlign="center" fontFamily={fontSemiBold}>{item.product_name}</Text>
                                                        </HStack>
                                                        <HStack paddingRight={2}>
                                                            {item.product_is_premium == true && (
                                                                <Icon name="star" size={22} color={warningColor} />
                                                            )}
                                                            {/* {item.product_name == prod.product_name && (
                                                                <Icon name="checkmark-circle" size={22} color={successColor} />
                                                            )} */}
                                                        </HStack>
                                                    </HStack>
                                                </TouchableOpacity>
                                            )}
                                        </ScrollView>
                                    </Actionsheet.Content>
                                </Actionsheet>
                            </View>
                            <View>
                                <Text style={MainStyle.lable} fontSize="xs">{t("Total Bags")} <Text color={dangerColor}>*</Text></Text>
                                <View style={MainStyle.inputbox}>
                                    <Input value={totalBag} onChangeText={(text) => setTotalBag(text)} fontFamily={fontRegular} size="md" variant="unstyled" keyboardType='number-pad' maxLength={3} />
                                </View>
                            </View>
                        </VStack>
                        <Button marginTop={6} style={MainStyle.solidbtn} onPress={() => addPurchaseDetails()}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Add Purchase")}</Text>
                        </Button>
                        <Button variant="unstyled" backgroundColor={greyColor} borderRadius={8} onPress={() => onClear()}>
                            <Text color={darkColor} fontFamily={fontSemiBold} fontSize="xs">{t("Close")}</Text>
                        </Button>
                    </VStack>
                </View>
            )}
            {successPop && (
                <View style={MainStyle.spincontainer}>
                    <VStack style={MainStyle.popbox} space={10}>
                        <Image source={require('../assets/images/check-green.gif')} style={{ width: 100, height: 100, resizeMode: 'contain', position: 'relative', marginTop: 30 }} />
                        <Image source={require('../assets/images/logo.jpg')} style={MainStyle.logo} />
                        <VStack justifyContent="center" alignItems="center">
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{t("Purchase has been sent to your")} <Text fontSize="sm" fontFamily={fontBold}>{officerType} {officerName}</Text></Text>
                            {officerPhone?.trim() !== "" && (
                                <HStack space={2} justifyContent="center" alignItems="center">
                                    <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold}>
                                        {t("Contact No:")}
                                    </Text>
                                    <Pressable onPress={() => Linking.openURL(`tel:${officerPhone}`)}>
                                        <HStack alignItems="center">
                                            <Icon name="call" size={16} color={baseColor} />
                                            <Text color={baseColor} fontSize="sm" fontFamily={fontBold}> {officerPhone}</Text>
                                        </HStack>
                                    </Pressable>
                                </HStack>
                            )}
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{preApproved == 1 ? t("& Your transaction has been auto approved") : t("& is subject to approval")}</Text>
                        </VStack>
                        <Stack width={'100%'} space={3} marginBottom={8}>
                            <Button style={MainStyle.solidbtn} onPress={() => navigation.goBack()}>
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Done")}</Text>
                            </Button>
                        </Stack>
                    </VStack>
                </View>
            )}
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
});

export default AddPurchaseScreen;