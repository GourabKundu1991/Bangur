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

const AllocateLiftingScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');

    const [purchaseDate, setPurchaseDate] = React.useState('');
    const [contratorPhone, setContratorPhone] = React.useState('');
    const [contractorDetails, setContractorDetails] = React.useState("");
    const [contratorFound, setContratorFound] = React.useState(false);
    const [productId, setProductId] = React.useState('');
    const [productList, setProductList] = React.useState([]);
    const [MTD, setMTD] = React.useState('');
    const [stock, setStock] = React.useState('');
    const [totalBag, setTotalBag] = React.useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const [userType, setUserType] = React.useState('');

    const [successPop, setSuccessPop] = React.useState(false);

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

    const [dealerPhone, setDealerPhone] = React.useState('');
    const [dealerList, setDealerList] = React.useState([]);
    const [dealer, setDealer] = React.useState('');
    const [dealerFound, setDealerFound] = React.useState(false);

    const [preApproved, setPreApproved] = React.useState("");

    const regexNum = /^[6-9]\d{9}$/;
    const regexNumeric = /^[0-9]+$/;

    const [dissable, setDissable] = React.useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    var CryptoJS = require("crypto-js");
                    const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                    setUserType(JSON.parse(decryptData).user_type);
                    if (JSON.parse(decryptData).user_type == "Dealer" || JSON.parse(decryptData).user_type == "Retailer") {
                        getProduct(JSON.parse(decryptData).contactId);
                        setDealer(JSON.parse(decryptData).contactId);
                    } else {
                        getProduct(dealer);
                    }
                    setPurchaseMaxData(new Date(year, month, day - JSON.parse(decryptData).transaction_allowed_days_from));
                    setMiniData(new Date(year, month, day - JSON.parse(decryptData).transaction_allowed_days_upto));
                } else {
                    setLoading(false);
                }
            })

        });
        return unsubscribe;
    }, []);

    const onSelectDealer = (valdata) => {
        setLoading(true);
        getProduct(valdata);
        setDealer(valdata);
    }

    const getProduct = (dealerID) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("dealer", dealerID);
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

    const searchContractor = () => {
        if (contratorPhone.trim() == "") {
            Toast.show(t("Please enter Contartor's Mobile Number"), Toast.LONG);
        } else if (contratorPhone.length < 10) {
            Toast.show(t("Please enter 10 digit for Phone Number"), Toast.LONG);
        } else if (contratorPhone != "" && !regexNum.test(contratorPhone)) {
            Toast.show(t("Contractor Phone Number accept Only Number / Mobile No. not Valid"), Toast.LONG);
        } else {
            setLoading(true);
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    var CryptoJS = require("crypto-js");
                    const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                    let formdata = new FormData();
                    formdata.append("mobileNumber", contratorPhone);
                    formdata.append("lang_code", currentLanguage);
                    formdata.append("os_type", `${OS_TYPE}`);
                    formdata.append("app_ver", `${APP_VERSION}`);
                    fetch(`${BASE_URL}/get-influencers`, {
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
                            //console.log("Get Contractor:", responseJson);
                            if (responseJson.bstatus == 1) {
                                setContractorDetails(responseJson.details);
                                setContratorFound(true);
                            } else {
                                Toast.show(responseJson.message, Toast.LONG);
                                setContractorDetails("");
                                setContratorFound(false);
                                setContratorPhone("");
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

    const editContrator = () => {
        setContratorFound(false);
        setContractorDetails("");
        setContratorPhone("");
        setProd("");
        setProductId("");
    }

    const searchDealer = () => {
        if (dealerPhone.trim() == "") {
            Toast.show(t("Please enter Dealer Phone Number"), Toast.LONG);
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
                            //console.log("Get Dealer:", responseJson);
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
        onClose();
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("productId", pro.prod_id);
                formdata.append("InfluencerId", contractorDetails.customerId);
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                fetch(`${BASE_URL}/get-influencer-mtd`, {
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
                        //console.log("Get MTD:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setMTD(responseJson.mtd);
                            setStock(responseJson.stockInHand);
                        } else {
                            Toast.show(responseJson.message, Toast.LONG);
                            setMTD("");
                            setStock("");
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

    const onSubmit = () => {
        if (userType != "Dealer" && userType != "Retailer" && !dealerFound) {
            Toast.show(t("Please search and select Dealer"), Toast.LONG);
        } else if (dealerFound && dealer == "") {
            Toast.show(t("Please select Dealer"), Toast.LONG);
        } else if (contratorPhone.trim() == "") {
            Toast.show(t("Please enter Contractor Mobile Number & Search"), Toast.LONG);
        } else if (purchaseDate == "") {
            Toast.show(t("Please select Date"), Toast.LONG);
        } else if (productId == "") {
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
            setLoading(true);
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

    const addPurchase = (saleToken) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("InfluencerId", contractorDetails.customerId);
                formdata.append("dealerId", dealer);
                formdata.append("saleDate", (purchaseDate != '' ? moment(purchaseDate).format('YYYY-MM-DD') : ""));
                formdata.append("productId", productId);
                formdata.append("quantity", totalBag);
                formdata.append("saleToken", saleToken);
                console.log(formdata);
                fetch(`${BASE_URL}/allocate-lifting`, {
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
                        console.log("Allocate Lifting:", responseJson);
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

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={4} padding={8}>
                        {userType != "Dealer" && (
                            <Stack space={2}>
                                {userType != "Retailer" && (
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Dealer Phone Number")} <Text color={dangerColor}>*</Text></Text>
                                    <View style={MainStyle.inputbox}>
                                        <Input value={dealerPhone} readOnly={dealerFound} backgroundColor={dealerFound ? lightGrey : lightColor} fontFamily={fontRegular} size="md" variant="unstyled" onChangeText={(text) => setDealerPhone(text)} keyboardType='number-pad' maxLength={10}
                                            InputRightElement={
                                                dealerFound ?
                                                    <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: darkColor, height: 37, marginRight: 4 }]} onPress={() => editDealer()}>
                                                        <Icon name="lock" size={18} color={lightColor} />
                                                    </Button>
                                                    :
                                                    <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: warningColor, height: 37, marginRight: 4 }]} onPress={() => searchDealer()}>
                                                        <Icon name="search" size={18} color={lightColor} />
                                                    </Button>
                                            }
                                        />
                                    </View>
                                </View>
                                )}
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
                        )}
                        <View>
                            <Text style={MainStyle.lable} fontSize="xs">{t("Contractor's Mobile Number")} <Text color={dangerColor}>*</Text></Text>
                            <View style={MainStyle.inputbox}>
                                <Input value={contratorPhone} readOnly={contratorFound} backgroundColor={contratorFound ? lightGrey : lightColor} fontFamily={fontRegular} size="md" variant="unstyled" onChangeText={(text) => setContratorPhone(text)} keyboardType='number-pad' maxLength={10}
                                    InputRightElement={
                                        contratorFound ?
                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: darkColor, height: 37, marginRight: 4 }]} onPress={() => editContrator()}>
                                                <Icon name="close" size={18} color={lightColor} />
                                            </Button>
                                            :
                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: warningColor, height: 37, marginRight: 4 }]} onPress={() => searchContractor()}>
                                                <Icon name="search" size={18} color={lightColor} />
                                            </Button>
                                    }
                                />
                            </View>
                        </View>
                        {contratorFound && (
                            <VStack space={2}>
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Contrator's Name & ID")}</Text>
                                    <View style={MainStyle.inputbox}>
                                        <Input backgroundColor={lightGrey} readOnly value={contractorDetails.customerName + " (" + contractorDetails.customerCode + ") "} fontFamily={fontBold} size="md" variant="unstyled" />
                                    </View>
                                </View>
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Date")} <Text color={dangerColor}>*</Text></Text>
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
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Product")} <Text color={dangerColor}>*</Text></Text>
                                    <View style={MainStyle.inputbox}>
                                        <Pressable onPress={onOpen}>
                                            <Input size="md" readOnly variant="unstyled" value={prod.product_name}
                                                InputRightElement={<Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />}
                                                placeholder={t("Select")} />
                                        </Pressable>
                                    </View>
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
                                                        {item.product_name == prod.product_name && (
                                                            <Icon name="checkmark-circle" size={22} color={successColor} />
                                                        )}
                                                    </HStack>
                                                </TouchableOpacity>
                                            )}
                                        </ScrollView>
                                    </Actionsheet.Content>
                                </Actionsheet>

                                {/* {MTD != "" && (
                                    <View>
                                        <Text style={MainStyle.lable} fontSize="xs">{t("Last 30 Days Sale")}</Text>
                                        <View style={MainStyle.inputbox}>
                                            <Input backgroundColor={lightGrey} readOnly value={MTD + " Bag(s)"} fontFamily={fontRegular} size="md" variant="unstyled" />
                                        </View>
                                    </View>
                                )} */}
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Stock Available for Allocation")}</Text>
                                    <View style={MainStyle.inputbox}>
                                        <Input backgroundColor={lightGrey} readOnly value={stock + " Bag(s)"} fontFamily={fontRegular} size="md" variant="unstyled" />
                                    </View>
                                </View>
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Quantity (Bags)")} <Text color={dangerColor}>*</Text></Text>
                                    <View style={MainStyle.inputbox}>
                                        <Input value={totalBag} onChangeText={(text) => setTotalBag(text)} fontFamily={fontRegular} size="md" variant="unstyled" keyboardType='number-pad' maxLength={3} />
                                    </View>
                                </View>

                                <Button disabled={dissable} marginTop={5} style={MainStyle.solidbtn} onPress={() => onSubmit()}>
                                    <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Submit")}</Text>
                                </Button>
                            </VStack>
                        )}
                    </VStack>
                </ScrollView>
            </VStack>
            {successPop && (
                <View style={MainStyle.spincontainer}>
                    <VStack style={MainStyle.popbox} space={10}>
                        <Image source={require('../assets/images/check-green.gif')} style={{ width: 100, height: 100, resizeMode: 'contain', position: 'relative', marginTop: 30 }} />
                        <Image source={require('../assets/images/logo.jpg')} style={MainStyle.logo} />
                        <VStack justifyContent="center" alignItems="center">
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{t("Allocate Lifting has been Successfully done with")} <Text fontSize="sm" fontFamily={fontBold}>{officerType} {officerName}</Text></Text>
                            <HStack space={2} justifyContent="center" alignItems="center">
                                <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold}>{t("Contact No:")}</Text>
                                <Pressable onPress={() => Linking.openURL(`tel:${officerPhone}`)}>
                                    <HStack alignItems="center">
                                        <Icon name="call" size={16} color={baseColor} />
                                        <Text color={baseColor} fontSize="sm" fontFamily={fontBold}> {officerPhone}</Text>
                                    </HStack>
                                </Pressable>
                            </HStack>
                            {userType == "Dealer" && (
                                <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{preApproved == 1 ? t("& Your transaction has been auto approved") : t("& is subject to approval")}</Text>
                            )}
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

export default AllocateLiftingScreen;