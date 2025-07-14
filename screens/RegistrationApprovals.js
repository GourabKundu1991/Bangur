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

const RegistrationApprovalsScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [approvalList, setApprovalList] = React.useState([]);
    const [searchTerms, setSearchTerms] = React.useState("");
    const [searchDate, setSearchDate] = React.useState("");

    const [actionPOP, setActionPOP] = React.useState(false);
    const [status, setStatus] = React.useState("");
    const [reason, setReason] = React.useState("");

    const { isOpen, onOpen, onClose } = useDisclose();

    const [influId, setInfluId] = React.useState("");

    const [moreValue, setMoreValue] = React.useState("");
    const [isReset, setIsReset] = React.useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const [successPop, setSuccessPop] = React.useState(false);

    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState("");
    const [userType, setUserType] = React.useState("");

    const [customerName, setCustomerName] = React.useState('');
    const [customerId, setCustomerId] = React.useState('');

    const [zoomImage, setZoomImage] = React.useState(false);
    const [imagePath, setImagePath] = React.useState("");

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

    const openImage = (path) => {
        console.log(path);
        setImagePath(path);
        setTimeout(function () {
            setZoomImage(true);
        }, 500);
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
                formdata.append("registration_date", (dateValue == "" ? "" : moment(dateValue).format("DD-MM-YYYY")));
                formdata.append("status", 0);
                formdata.append("data_for", "approval");
                fetch(`${BASE_URL}/registration-approval`, {
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
                        console.log("Approval:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setApprovalList(responseJson.influncers);
                            setTotalPage(responseJson.total_pages);
                        } else {
                            setLoading(false);
                            //Toast.show(responseJson.message, Toast.LONG);
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
                formdata.append("registration_date", (searchDate == "" ? "" : moment(searchDate).format("DD-MM-YYYY")));
                formdata.append("status", 0);
                formdata.append("data_for", "approval");
                fetch(`${BASE_URL}/registration-approval`, {
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
                            setTotalPage(responseJson.total_pages);
                            setPageNumber(num);
                            let newArrya = approvalList.concat(responseJson.influncers);
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
        setStatus(type);
        setReason("");
        setInfluId(idval);
        if (type == 1) {
            onOpen();
        } else {
            setActionPOP(true);
        }

    }

    const onClear = () => {
        setActionPOP(false);
        setStatus("");
        setReason("");
        setInfluId("");
    }

    const onSubmit = () => {
        if (status == '') {
            Toast.show(t("Please select Status"), Toast.LONG);
        } else if (status == '2' && reason == "") {
            Toast.show(t("Please enter Reason"), Toast.LONG);
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
                formdata.append("influncer_id", influId);
                formdata.append("approveType", status);
                formdata.append("reason", reason);
                fetch(`${BASE_URL}/approve-influncer`, {
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
                            setInfluId("");
                            getAllData(searchDate);
                            setSuccessPop(true);
                            setCustomerName(responseJson.customerName);
                            setCustomerId(responseJson.customerId);
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

    const onMore = (val) => {
        setMoreValue(val);
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={5} padding={6}>
                        <View style={MainStyle.inputbox}>
                            <Input fontFamily={fontRegular} size="sm" variant="unstyled" InputLeftElement={<Icon name="search-outline" size={18} color={darkGrey} style={{ marginLeft: 10, textAlign: 'center' }} />} placeholder='Name / Mobile / Member ID' onChangeText={(text) => setSearchTerms(text)}
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
                            <Stack key={index} backgroundColor={baseLightColor} borderRadius={8} overflow="hidden">
                                <HStack space={6} padding={4} borderColor={lightColor} borderBottomWidth={4} alignItems="center">
                                    <Avatar borderColor={baseSemiColor} resizeMode="contain" borderWidth="2" size="60" source={item.profile_image == "" ? require('../assets/images/avatar.png') : { uri: item.profile_image }}></Avatar>
                                    <VStack justifyContent="center" width={'70%'}>
                                        <Text color="#111111" fontSize="md" fontFamily={fontBold} textTransform="capitalize">{item.name}</Text>
                                        <HStack space={2} alignItems="center">
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Member Id")}:</Text>
                                            <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{item.emp_id}</Text>
                                        </HStack>
                                        <Pressable onPress={() => Linking.openURL(`tel:${item.ph_number}`)}>
                                            <HStack alignItems="center">
                                                <Icon name="call" size={14} color={warningColor} />
                                                <Text color={darkGrey} fontSize="xs" fontFamily={fontBold}> {item.ph_number}</Text>
                                            </HStack>
                                        </Pressable>
                                    </VStack>
                                </HStack>
                                <VStack padding={4} space={1}>
                                    <Text marginBottom={1} color="#111111" fontSize="sm" fontFamily={fontBold}>{t("Member Details")}</Text>
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Date of Registration")}:</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{moment(item.DateOfRegistration).format('DD-MM-YYYY')}</Text>
                                    </HStack>
                                    {item.aadnarNumber != "" && (
                                        <HStack alignItems="center">
                                            <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Aadhaar No.")}:</Text>
                                            <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.aadnarNumber}</Text>
                                        </HStack>
                                    )}
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("PAN No.")}:</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.panNumber}</Text>
                                    </HStack>
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Date of Birth")}:</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{moment(item.dob).format('DD-MM-YYYY')}</Text>
                                    </HStack>
                                    {moreValue == item.id && (
                                        <VStack space={1} paddingBottom={3}>
                                            <HStack alignItems="center">
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Gender")}:</Text>
                                                <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.gender}</Text>
                                            </HStack>
                                            <HStack alignItems="center">
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Address")}:</Text>
                                                <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.line1}</Text>
                                            </HStack>
                                            <HStack alignItems="center">
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Pincode")}:</Text>
                                                <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.post_code}</Text>
                                            </HStack>
                                            <HStack alignItems="center">
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("State")}:</Text>
                                                <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.stateName}</Text>
                                            </HStack>
                                            <HStack alignItems="center">
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("District")}:</Text>
                                                <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.districtName}</Text>
                                            </HStack>
                                            <HStack alignItems="center">
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("City")}:</Text>
                                                <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.city}</Text>
                                            </HStack>
                                            <HStack alignItems="center">
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Registered By")}:</Text>
                                                {item.selfRegistered == 0 ?
                                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.UploadedByName} ({item.UploadedByExternalId})</Text>
                                                    :
                                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>Self</Text>
                                                }
                                            </HStack>
                                            {item.aadhaar_front_image != "" && (
                                            <HStack alignItems="center">
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Aadhaar Front")}:</Text>
                                                <Pressable onPress={() => openImage(item.aadhaar_front_image)}><Image source={{ uri: item.aadhaar_front_image }} style={{ width: 80, height: 80, borderWidth: 1, borderColor: '#111111' }} resizeMode='contain' /></Pressable>
                                            </HStack>
                                            )}
                                            {item.aadhaar_back_image != "" && (
                                            <HStack alignItems="center">
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Aadhaar Back")}:</Text>
                                                <Pressable onPress={() => openImage(item.aadhaar_back_image)}><Image source={{ uri: item.aadhaar_back_image }} style={{ width: 80, height: 80, borderWidth: 1, borderColor: '#111111' }} resizeMode='contain' /></Pressable>
                                            </HStack>
                                            )}
                                            {item.pan_image != "" && (
                                                <HStack alignItems="center">
                                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("PAN Image")}:</Text>
                                                    <Pressable onPress={() => openImage(item.pan_image)}><Image source={{ uri: item.pan_image }} style={{ width: 80, height: 80, borderWidth: 1, borderColor: '#111111' }} resizeMode='contain' /></Pressable>
                                                </HStack>
                                            )}
                                            <VStack space={1} marginTop={4} paddingY={3} borderColor={lightColor} borderTopWidth={4}>
                                                <Text marginBottom={1} color="#111111" fontSize="sm" fontFamily={fontBold}>{t("Dealer Details")}</Text>
                                                <HStack alignItems="center">
                                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Name")}:</Text>
                                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.dealerName}</Text>
                                                </HStack>
                                                <HStack alignItems="center">
                                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("ID")}:</Text>
                                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.dealerId}</Text>
                                                </HStack>
                                                <HStack alignItems="center">
                                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Contact No.")}:</Text>
                                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.dealerPhone}</Text>
                                                </HStack>
                                                <HStack alignItems="center">
                                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("District")}:</Text>
                                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.dealerDistrictName}</Text>
                                                </HStack>
                                            </VStack>
                                        </VStack>
                                    )}
                                    <View style={{ position: 'absolute', bottom: 12, right: 15, borderBottomWidth: 1, borderColor: baseColor }}>
                                        {moreValue == item.id ?
                                            <Pressable onPress={() => setMoreValue("")}><Text textAlign="right" color={baseColor} fontSize="xs" fontFamily={fontSemiBold}>{("Less")}</Text></Pressable>
                                            :
                                            <Pressable onPress={() => onMore(item.id)}><Text textAlign="right" color={baseColor} fontSize="xs" fontFamily={fontSemiBold}>{("More")}</Text></Pressable>
                                        }
                                    </View>
                                </VStack>
                                <HStack padding={3} justifyContent="space-between" alignItems="center" backgroundColor={baseSemiColor}>
                                    {/* <Text style={MainStyle.lable} fontSize="sm">{t("Status")}</Text> */}
                                    <Button size="xs" style={[MainStyle.solidbtn, { width: '48%', backgroundColor: dangerColor, height: 37 }]} onPress={() => onAction(item.id, "2")}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Reject")}</Text>
                                    </Button>
                                    <Button size="xs" style={[MainStyle.solidbtn, { width: '48%', backgroundColor: successColor, height: 37 }]} onPress={() => onAction(item.id, "1")}>
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
            {actionPOP && (
                <View style={MainStyle.spincontainer}>
                    <VStack space={3} style={{ backgroundColor: lightColor, padding: 30, borderRadius: 12, width: '85%' }}>
                        <Text color={darkColor} fontFamily={fontBold} fontSize="lg" textAlign="center" marginBottom={3}>{t("Reject Reason")}</Text>
                        <VStack space={2}>
                            <View>
                                <Text style={MainStyle.lable} fontSize="xs">{t("Reason")} {status == "2" && (<Text color={dangerColor}>*</Text>)}</Text>
                                <View style={MainStyle.inputbox}>
                                    <Input fontFamily={fontRegular} size="md" variant="unstyled" multiline style={{ height: 100, textAlignVertical: 'top' }} placeholder={t("Please Enter Reason")} onChangeText={(text) => setReason(text)} />
                                </View>
                            </View>
                        </VStack>
                        <Button marginTop={6} style={MainStyle.solidbtn} onPress={() => onSubmit()}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Submit")}</Text>
                        </Button>
                        <Button variant="unstyled" backgroundColor={greyColor} borderRadius={8} onPress={() => onClear()}>
                            <Text color={darkColor} fontFamily={fontSemiBold} fontSize="xs">{t("Close")}</Text>
                        </Button>
                    </VStack>
                </View>
            )}
            {/* <Actionsheet isOpen={actionPOP}>
                <Actionsheet.Content>
                    <ScrollView style={{ width: '100%', paddingHorizontal: 20 }}>
                        <VStack space={2}>
                            <View>
                                <Text style={MainStyle.lable} fontSize="xs">{t("Status")} <Text color={dangerColor}>*</Text></Text>
                                <View style={MainStyle.inputbox}>
                                    <Select variant="unstyled" size="md" height={43}
                                        selectedValue={status}
                                        onValueChange={value => setStatus(value)}
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
                            </View>
                            <View>
                                <Text style={MainStyle.lable} fontSize="xs">{t("Reason")} {status == "2" && (<Text color={dangerColor}>*</Text>)}</Text>
                                <View style={MainStyle.inputbox}>
                                    <Input fontFamily={fontRegular} size="md" variant="unstyled" multiline style={{ height: 100, textAlignVertical: 'top' }} placeholder={t("Please Enter Reason")} onChangeText={(text) => setReason(text)} />
                                </View>
                            </View>
                        </VStack>
                        <Button marginTop={6} style={MainStyle.solidbtn} onPress={() => onSubmit()}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Sumbit")}</Text>
                        </Button>
                        <Button variant="unstyled" backgroundColor={greyColor} borderRadius={8} onPress={() => onClear()}>
                            <Text color={darkColor} fontFamily={fontSemiBold} fontSize="xs">{t("Close")}</Text>
                        </Button>
                    </ScrollView>
                </Actionsheet.Content>
            </Actionsheet> */}
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <ScrollView style={{ width: '100%', paddingHorizontal: 20 }}>
                        <HStack justifyContent="space-between" borderColor={greyColor} borderBottomWidth={1} paddingY={3}>
                            <Text color={baseColor} fontSize="lg" fontFamily={fontBold} textAlign="center">{t("Please Confirm to Proceed?")}</Text>
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
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{status == 1 ? t("Thank you. You have successfully Approved the registration of") : t("Thank you. You have successfully Rejected the registration of")}</Text>
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontBold} textAlign="center">{customerName}</Text>
                            <Text color={darkGrey} fontSize="xs" fontFamily={fontBold} textAlign="center">(ID: {customerId})</Text>
                        </VStack>
                        <Stack width={'100%'} space={3}>
                            <Button style={MainStyle.solidbtn} onPress={() => setSuccessPop(false)}>
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Approve/Reject More")}</Text>
                            </Button>
                            <Button variant="link" onPress={() => navigation.goBack()}>
                                <Text color={baseColor} fontFamily={fontSemiBold} fontSize="sm">{t("Go To Home")}</Text>
                            </Button>
                        </Stack>
                    </VStack>
                </View>
            )}
            <FooterComponents navigation={navigation} component={userType} />
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
            {zoomImage && (
                <VStack flex={1} style={{ backgroundColor: "rgba(0,0,0,0.85)", zIndex: 99, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: imagePath }} style={{ width: '90%', height: 400, marginBottom: 20, resizeMode: 'contain' }} />
                    <TouchableOpacity onPress={() => setZoomImage(false)}>
                        <Icon name="close-circle-outline" size={32} color="#ffffff" />
                    </TouchableOpacity>
                </VStack>
            )}
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
});

export default RegistrationApprovalsScreen;