import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Image, Linking, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FooterComponents from '../components/Footer';

const TransactionApprovalsScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [approvalList, setApprovalList] = React.useState([]);
    const [searchTerms, setSearchTerms] = React.useState("");
    const [searchDate, setSearchDate] = React.useState("");

    const [actionPOP, setActionPOP] = React.useState(false);
    const [status, setStatus] = React.useState("");
    const [reason, setReason] = React.useState("");

    const { isOpen, onOpen, onClose } = useDisclose();

    const [transId, setTransId] = React.useState("");

    const [isReset, setIsReset] = React.useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const [successPop, setSuccessPop] = React.useState(false);

    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState("");
    const [userType, setUserType] = React.useState("");

    const [reasonList, setReasonList] = React.useState([]);

    const [customerName, setCustomerName] = React.useState('');
    const [customerId, setCustomerId] = React.useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData(searchDate);
        });
        return unsubscribe;
    }, []);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setLoading(true);
        getAllData(date);
        setIsReset(true);
    };

    const onReset = () => {
        setLoading(true);
        getAllData("");
        setIsReset(false);
    }

    const getAllData = (dateValue) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("page", 1);
                formdata.append("search_value", searchTerms);
                formdata.append("sale_date", (dateValue == "" ? "" : moment(dateValue).format("DD-MM-yyyy")));
                formdata.append("created_from", "");
                formdata.append("created_to", "");
                formdata.append("status", 0);
                formdata.append("data_for", "approval");
                fetch(`${BASE_URL}/purchase-approval-list`, {
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
                        // console.log("Approval:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setApprovalList(responseJson.sale_data);
                            setTotalPage(responseJson.total_pages);

                        } else {
                            setLoading(false);
                            Toast.show(responseJson.message, Toast.LONG);
                            setApprovalList([]);
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
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.replace('Intro');
            }
        });
    }

    const loadMore = () => {
        let num = pageNumber + 1;

        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("page", num);
                formdata.append("search_value", searchTerms);
                formdata.append("sale_date", (searchDate == "" ? "" : moment(searchDate).format("DD-MM-yyyy")));
                formdata.append("created_from", "");
                formdata.append("created_to", "");
                formdata.append("status", 0);
                formdata.append("data_for", "approval");
                fetch(`${BASE_URL}/purchase-approval-list`, {
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
                        //console.log("Approval:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setTotalPage(responseJson.sale_data);
                            setPageNumber(num);
                            let newArrya = approvalList.concat(responseJson.sale_data);
                            setApprovalList(newArrya);
                        } else {
                            setLoading(false);
                            setPageNumber(1);
                            setApprovalList([]);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Rewards Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Intro');
            }
        });
    };


    const onSearch = () => {
        setLoading(true);
        getAllData(searchDate);
        setPageNumber(1);
    }

    const onAction = (idval, type) => {
        setActionPOP(true);
        setStatus(type);
        setReason("");
        if (type == 1) {
            AsyncStorage.getItem('purchaseAcceptReasons').then(val => {
                if (val != null) {
                    setReasonList(JSON.parse(val));
                }
            })
        } else {
            AsyncStorage.getItem('purchaseRejectReasons').then(val => {
                if (val != null) {
                    setReasonList(JSON.parse(val));
                }
            })
        }
        setTransId(idval);
    }

    const onSelectStatus = (valStatus) => {
        setStatus(valStatus);
        setReason("");
        if (valStatus == 1) {
            AsyncStorage.getItem('purchaseAcceptReasons').then(val => {
                if (val != null) {
                    setReasonList(JSON.parse(val));
                }
            })
        } else {
            AsyncStorage.getItem('purchaseRejectReasons').then(val => {
                if (val != null) {
                    setReasonList(JSON.parse(val));
                }
            })
        }
    }

    const onClear = () => {
        setActionPOP(false);
        setStatus("");
        setReason("");
        setTransId("");
    }

    const onSubmit = () => {
        if (status == '') {
            Toast.show(t("Please select Status"), Toast.LONG);
        } else if (reason == "") {
            Toast.show(t("Please select Reason"), Toast.LONG);
        } else {
            setActionPOP(false);
            onOpen();
        }
    }

    const submitAction = () => {
        onClose();
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("sale_id", transId);
                formdata.append("status", status);
                formdata.append("reason_id", reason);
                fetch(`${BASE_URL}/approve-reject-purchase`, {
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
                        //console.log("Approval Action:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setReason("");
                            setTransId("");
                            setLoading(false);
                            setCustomerName(responseJson.customerName);
                            setCustomerId(responseJson.customerId);
                            setSuccessPop(true);
                            setPageNumber(1);
                        } else {
                            setLoading(false);
                            Toast.show(responseJson.message, Toast.LONG);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.replace('Intro');
            }
        });
    }

    const againMore = () => {
        setLoading(true);
        getAllData(searchDate);
        setSuccessPop(false);
    }


    const openDialer = (number) => {

        Toast.show(number);


        const url = `tel:${number}`;
        Linking.canOpenURL(url).then((supported) => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Toast.show(t("Dialer Not Available!"));

            }
        }).catch((err) => console.error('An error Occured', err))


    }


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation}/>
                <ScrollView automaticallyAdjustKeyboardInsets={true} backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={5} padding={6}>
                        <View style={MainStyle.inputbox}>
                            <Input fontFamily={fontRegular} size="sm" variant="unstyled" InputLeftElement={<Icon name="search-outline" size={18} color={darkGrey} style={{ marginLeft: 10, textAlign: 'center' }} />} placeholder='Name / Member ID' onChangeText={(text) => setSearchTerms(text)}
                                InputRightElement={
                                    <HStack>
                                        <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 37, marginRight: 4 }]} onPress={() => onSearch()}>
                                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Search")}</Text>
                                        </Button>
                                        {!isReset ?
                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 37, marginRight: 4 }]} onPress={() => showDatePicker()}>
                                                <Icon name="calendar-outline" size={18} color={lightColor} />
                                            </Button>
                                            :
                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 37, marginRight: 4 }]} onPress={() => onReset()}>
                                                <Icon name="refresh-outline" size={18} color={lightColor} />
                                            </Button>
                                        }
                                    </HStack>
                                } />
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        {approvalList.length == 0 && (
                            <VStack space={6} backgroundColor={lightColor} borderRadius={8} overflow="hidden" height={300} justifyContent="center" alignItems="center">
                                <Image source={require('../assets/images/hour.gif')} alt="hours" style={{ width: 100, height: 100, resizeMode: 'contain', position: 'relative' }} />
                                <Text color={darkColor} fontSize="lg" fontFamily={fontBold}>{t("Sorry! No Data Found")}</Text>
                            </VStack>
                        )}
                        {approvalList.map((item, index) =>
                            <Stack key={index} backgroundColor={baseLightColor} borderRadius={8} overflow="hidden" >
                                <VStack padding={4}>
                                    <HStack space={6} marginBottom={3} alignItems="center" justifyContent="space-between">
                                        <VStack width={'65%'}>
                                            <Text color={darkColor} fontSize="md" fontFamily={fontBold} textTransform="capitalize">{item.Contact_Name}</Text>
                                            <Text color={darkColor} fontSize="xs" fontFamily={fontBold}>{"(" + item.ID + ")"}</Text>
                                            <VStack width={'60%'} marginTop={1}>   
                                                <HStack space={1}>
                                                <Icon name="call-outline" size={14} color={darkGrey} onPress={() => openDialer(item.ph_number)} />       
                                                <Text color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.ph_number}</Text>
                                                </HStack>
                                            </VStack>       
                                        </VStack>
                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold} style={{ backgroundColor: lightColor, padding: 3, borderColor: baseSemiColor, borderWidth: 1, borderRadius: 5, overflow: 'hidden' }}> {item.category}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Product")}</Text>
                                        <Text width={200} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.Product}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Bags")}</Text>
                                        <Text color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.total_bags}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Points Earned")}</Text>
                                        <Text color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.points_earned}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Approved MTD Quantity")}</Text>
                                        <Text color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.MTD}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Purchase Date")}</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{moment(item.Sale_Date).format("DD-MM-YYYY")}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Uploaded Date")}</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{moment(item.Sale_Registered_On).format("DD-MM-YYYY")}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Transaction ID")}</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.sale_id}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between" marginTop={3}>
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Site Name")}</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.site_name}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Site Mobile No.")}</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.site_mobile}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between" marginTop={3}>
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Dealer Name")}</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.dealerName}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Dealer ID")}</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.dealerId}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Dealer Phone")}</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.dealerPhone}</Text>
                                    </HStack>
                                    <HStack alignItems="center" justifyContent="space-between">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Dealer's District")}</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.dealerDistrictName}</Text>
                                    </HStack>
                                </VStack>
                                <HStack padding={3} justifyContent="space-between" alignItems="center" backgroundColor={baseSemiColor}>
                                    {/* <Text style={MainStyle.lable} fontSize="sm">{t("Status")}</Text>
                                    <Button size="xs" style={[MainStyle.solidbtn, { width: '40%', backgroundColor: baseColor, height: 37 }]} onPress={() => onAction(item.sale_id)}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Action")}</Text>
                                    </Button> */}
                                    <Button size="xs" style={[MainStyle.solidbtn, { width: '48%', backgroundColor: dangerColor, height: 37 }]} onPress={() => onAction(item.sale_id, "2")}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Reject")}</Text>
                                    </Button>
                                    <Button size="xs" style={[MainStyle.solidbtn, { width: '48%', backgroundColor: successColor, height: 37 }]} onPress={() => onAction(item.sale_id, "1")}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Approve")}</Text>
                                    </Button>
                                </HStack>
                            </Stack>
                        )}
                        {approvalList.length != 0 && pageNumber != totalPage && (
                            <HStack paddingY="3" paddingX="6" justifyContent="center">
                                <Button variant="outline" size={'xs'} rounded={30} onPress={() => loadMore()}>
                                    <Text color="#bbbbbb">{t("Load More")}</Text>
                                </Button>
                            </HStack>
                        )}
                    </VStack>
                </ScrollView>
            </VStack>
            <Actionsheet isOpen={actionPOP}>
                <Actionsheet.Content>
                    <ScrollView style={{ width: '100%', paddingHorizontal: 20 }}>
                        <HStack justifyContent="space-between" borderColor={greyColor} borderBottomWidth={1} paddingY={3}>
                            <Text color={baseColor} fontSize="lg" fontFamily={fontBold} textAlign="center">{t("Action for")} {status == 1 ? "Approve" : "Reject"}!</Text>
                            <Pressable onPress={() => onClear()}>
                                <Icon name="close-circle-outline" size={30} color={baseColor} />
                            </Pressable>
                        </HStack>
                        <VStack paddingX={5} justifyContent="center" alignItems="center" paddingY={5}>
                            <Stack style={{ width: '100%' }} space={4}>
                                {/* <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Status")} <Text color={dangerColor}>*</Text></Text>
                                    <View style={MainStyle.inputbox}>
                                        <Select variant="unstyled" size="md" height={43}
                                            selectedValue={status}
                                            onValueChange={value => onSelectStatus(value)}
                                            style={{ paddingLeft: 15 }}
                                            fontFamily={fontRegular}
                                            placeholder={t('Please Select')}
                                            dropdownCloseIcon={<Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />}
                                            dropdownOpenIcon={<Icon name="chevron-up-outline" style={{ marginRight: 10 }} size={20} />}
                                            _selectedItem={{
                                                backgroundColor: greyColor,
                                                endIcon: <Icon name="checkmark-circle" size={20} color={successColor} style={{ right: 0, position: 'absolute' }} />
                                            }}>
                                            <Select.Item label="Approve" value="1" />
                                            <Select.Item label="Reject" value="2" />
                                        </Select>
                                    </View>
                                </View> */}
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Reason")} <Text color={dangerColor}>*</Text></Text>
                                    <View style={MainStyle.inputbox}>
                                        <Select variant="unstyled" size="md" height={43}
                                            selectedValue={reason}
                                            onValueChange={value => setReason(value)}
                                            style={{ paddingLeft: 15 }}
                                            fontFamily={fontRegular}
                                            placeholder={t('Please Select Reason')}
                                            dropdownCloseIcon={<Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />}
                                            dropdownOpenIcon={<Icon name="chevron-up-outline" style={{ marginRight: 10 }} size={20} />}
                                            _selectedItem={{
                                                backgroundColor: greyColor,
                                                endIcon: <Icon name="checkmark-circle" size={20} color={successColor} style={{ right: 0, position: 'absolute' }} />
                                            }}>
                                            {reasonList.map((item, index) =>
                                                <Select.Item key={index} label={item.reasons} value={item.id} />
                                            )}
                                        </Select>
                                    </View>
                                </View>
                            </Stack>
                        </VStack>
                        <Button style={MainStyle.solidbtn} marginY={3} onPress={() => onSubmit()}>
                            <Text color="#ffffff" fontSize="sm" fontFamily={fontSemiBold}>{t("SUBMIT")}</Text>
                        </Button>
                    </ScrollView>
                </Actionsheet.Content>
            </Actionsheet>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <ScrollView style={{ width: '100%', paddingHorizontal: 20 }}>
                        <HStack justifyContent="space-between" borderColor={greyColor} borderBottomWidth={1} paddingY={3}>
                            <Text color={baseColor} fontSize="lg" fontFamily={fontBold} textAlign="center">{t("Please Confirm to Proceeed?")}</Text>
                            <Pressable onPress={() => onClose()}>
                                <Icon name="close-circle-outline" size={30} color={baseColor} />
                            </Pressable>
                        </HStack>
                        <VStack paddingX={50} space={3} justifyContent="center" alignItems="center" paddingY={5}>
                            <Icon name="help-circle" size={50} color={baseColor} />
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontRegular} textAlign="center">{status == 1 ? t("Are you sure, you want to approve?") : t("Are you sure, you want to reject?")}</Text>
                        </VStack>
                        <Button style={MainStyle.solidbtn} marginY={3} onPress={() => submitAction()}>
                            <Text color="#ffffff" fontSize="sm" fontFamily={fontSemiBold}>{t("Confirm")}</Text>
                        </Button>
                    </ScrollView>
                </Actionsheet.Content>
            </Actionsheet>
            {successPop && (
                <View style={MainStyle.spincontainer}>
                    <VStack style={MainStyle.popbox} space={10}>
                        <Image source={require('../assets/images/check-green.gif')} alt="check" style={{ width: 100, height: 100, resizeMode: 'contain', position: 'relative', marginTop: 30 }} />
                        <Image source={require('../assets/images/logo.jpg')} alt="logo" style={MainStyle.logo} />
                        <VStack justifyContent="center" alignItems="center">
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{status == 1 ? t("Thank you. You has been successfully Approved this transaction of") : t("Thank you. You has been successfully Rejected this transaction of")}</Text>
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center"><Text fontSize="sm" fontFamily={fontBold}>{customerName} (ID: {customerId})</Text></Text>
                        </VStack>
                        <Stack width={'100%'} space={3}>
                            <Button style={MainStyle.solidbtn} onPress={() => againMore()}>
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Approve/Reject More")}</Text>
                            </Button>
                            <Button variant="link" onPress={() => navigation.goBack()}>
                                <Text color={baseColor} fontFamily={fontSemiBold} fontSize="sm">{t("Go To Home")}</Text>
                            </Button>
                        </Stack>
                    </VStack>
                </View>
            )}
             <FooterComponents navigation={navigation} component={userType}/>
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

export default TransactionApprovalsScreen;