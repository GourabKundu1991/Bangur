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

const PurchaseHistoryScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [purchaseList, setPurchaseList] = React.useState([]);
    const [searchTerms, setSearchTerms] = React.useState("");
    const [isReset, setIsReset] = React.useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState("");

    const [filterStatus, setFilterStatus] = React.useState("");
    const [userType, setUserType] = React.useState("");
    const [dateFilter, setDateFilter] = React.useState(false);
    const [fromDate, setFromDate] = React.useState("");
    const [toDate, setToDate] = React.useState("");
    const [dateType, setDateType] = React.useState("");

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    const miniYear = new Date(year - 100, month, day);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData(filterStatus, fromDate, toDate);
        });
        return unsubscribe;
    }, []);

    const onSetFilter = (filterVal) => {
        setLoading(true);
        setFilterStatus(filterVal);
        getAllData(filterVal, fromDate, toDate);
        setPageNumber(1);
    }

    const getAllData = (filterValue, startDate, endDate) => {
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
                formdata.append("fromDate", (startDate == "" ? "" : moment(startDate).format("DD-MM-YYYY")));
                formdata.append("tillDate", (endDate == "" ? "" : moment(endDate).format("DD-MM-YYYY")));
                formdata.append("status", filterValue);
                fetch(`${BASE_URL}/my-purchases`, {
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
                        //console.log("Purchase:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setPurchaseList(responseJson.sale_details);
                            setTotalPage(responseJson.total_pages);
                        } else {
                            setLoading(false);
                            //Toast.show(responseJson.message, Toast.LONG);
                            setPurchaseList([]);
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
                setUserType(JSON.parse(decryptData).user_type);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("page", num);
                formdata.append("search_value", searchTerms);
                formdata.append("fromDate", (fromDate == "" ? "" : moment(fromDate).format("DD-MM-YYYY")));
                formdata.append("tillDate", (toDate == "" ? "" : moment(toDate).format("DD-MM-YYYY")));
                formdata.append("status", filterStatus);
                fetch(`${BASE_URL}/my-purchases`, {
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
                            let newArrya = purchaseList.concat(responseJson.sale_details);
                            setPurchaseList(newArrya);
                        } else {
                            setLoading(false);
                            setPageNumber(1);
                            setPurchaseList([]);
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
                navigation.navigate('Intro');
            }
        });
    };

    const onSearch = () => {
        setLoading(true);
        getAllData(filterStatus, fromDate, toDate);
        setPageNumber(1);
    }

    const openDateFilter = () => {
        setDateFilter(!dateFilter);
    }

    const showDatePicker = (type) => {
        setDateType(type);
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        if (dateType == "from") {
            setFromDate(date);
        } else if (dateType == "to") {
            setToDate(date);
        }
    };

    const onDateSearch = () => {
        if (fromDate == "") {
            Toast.show(t("Select From Date"), Toast.LONG);
        } else if (toDate == "") {
            Toast.show(t("Select From Date"), Toast.LONG);
        } else {
            setLoading(true);
            getAllData(filterStatus, fromDate, toDate);
            setIsReset(true);
            setDateFilter(false);
        }
    }

    const onReset = () => {
        setLoading(true);
        setFromDate("");
        setToDate("");
        getAllData("", "", "");
        setIsReset(false);
        setFilterStatus("");
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={5} padding={6}>
                        <View style={MainStyle.inputbox}>
                            <Input fontFamily={fontRegular} size="sm" variant="unstyled" InputLeftElement={<Icon name="search-outline" size={18} color={darkGrey} style={{ marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Trans ID / Product")} onChangeText={(text) => setSearchTerms(text)}
                                InputRightElement={
                                    <HStack>
                                        <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 37, marginRight: 4 }]} onPress={() => onSearch()}>
                                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Search")}</Text>
                                        </Button>
                                        {!isReset ?
                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 37, marginRight: 4 }]} onPress={() => openDateFilter()}>
                                                <Icon name="options-outline" size={18} color={lightColor} />
                                            </Button>
                                            :
                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 37, marginRight: 4 }]} onPress={() => onReset()}>
                                                <Icon name="refresh-outline" size={18} color={lightColor} />
                                            </Button>
                                        }
                                    </HStack>
                                } />
                        </View>
                        {dateFilter && (
                            <View>
                                <Text style={MainStyle.lable} fontSize="xs">{t("Filter By Date")}</Text>
                                <HStack style={MainStyle.inputbox} padding={1} justifyContent="space-between" alignItems="center">
                                    <Pressable width={'38%'} borderRadius={6} backgroundColor={baseLightColor} onPress={() => showDatePicker("from")}>
                                        <HStack height={37} style={{ paddingHorizontal: 6 }} justifyContent="space-between" alignItems="center">
                                            <Text color={fromDate != '' ? '#111111' : '#999999'} fontSize="xs"> {fromDate != '' ? moment(fromDate).format('DD-MM-YYYY') : t("From Date")}</Text>
                                            <Icon name="calendar-outline" size={18} color={darkColor} />
                                        </HStack>
                                    </Pressable>
                                    <Pressable width={'38%'} borderRadius={6} backgroundColor={baseLightColor} onPress={() => showDatePicker("to")}>
                                        <HStack height={37} style={{ paddingHorizontal: 6 }} justifyContent="space-between" alignItems="center">
                                            <Text color={toDate != '' ? '#111111' : '#999999'} fontSize="xs"> {toDate != '' ? moment(toDate).format('DD-MM-YYYY') : t("To Date")}</Text>
                                            <Icon name="calendar-outline" size={18} color={darkColor} />
                                        </HStack>
                                    </Pressable>
                                    <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 37 }]} onPress={() => onDateSearch()}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Submit")}</Text>
                                    </Button>
                                </HStack>
                            </View>
                        )}
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            maximumDate={new Date()}
                            minimumDate={miniYear}
                        />
                        <HStack alignItems="center" justifyContent="space-between">
                            <Button size="xs" variant="link" style={[MainStyle.tabbtn, { backgroundColor: filterStatus == "" ? baseColor : lightGrey }]} _text={{ color: filterStatus == "" ? "#ffffff" : darkColor, fontFamily: fontSemiBold, fontSize: 10 }} onPress={() => onSetFilter("")}>{t("All")}</Button>
                            <Button size="xs" variant="link" style={[MainStyle.tabbtn, { backgroundColor: filterStatus == "1" ? baseColor : lightGrey }]} _text={{ color: filterStatus == "1" ? "#ffffff" : darkColor, fontFamily: fontSemiBold, fontSize: 10 }} onPress={() => onSetFilter("1")}>{t("Approved")}</Button>
                            <Button size="xs" variant="link" style={[MainStyle.tabbtn, { backgroundColor: filterStatus == "0" ? baseColor : lightGrey }]} _text={{ color: filterStatus == "0" ? "#ffffff" : darkColor, fontFamily: fontSemiBold, fontSize: 10 }} onPress={() => onSetFilter("0")}>{t("Pending")}</Button>
                            <Button size="xs" variant="link" style={[MainStyle.tabbtn, { backgroundColor: filterStatus == "2" ? baseColor : lightGrey }]} _text={{ color: filterStatus == "2" ? "#ffffff" : darkColor, fontFamily: fontSemiBold, fontSize: 10 }} onPress={() => onSetFilter("2")}>{t("Rejected")}</Button>
                        </HStack>
                        {purchaseList.length == 0 && (
                            <VStack space={6} backgroundColor={lightColor} borderRadius={8} overflow="hidden" height={300} justifyContent="center" alignItems="center">
                                <Image source={require('../assets/images/hour.gif')} alt="hours" style={{ width: 100, height: 100, resizeMode: 'contain', position: 'relative' }} />
                                <Text color={darkColor} fontSize="lg" fontFamily={fontBold}>{t("Sorry! No Data Found")}</Text>
                            </VStack>
                        )}
                        {purchaseList.map((item, index) =>
                            <Stack>
                                <HStack position="relative" zIndex={9} alignSelf="flex-end">
                                    <Box height="14" width="10%" overflow="hidden">
                                        <Box backgroundColor={item.approveStatus == "Pending" ? "#FBC711" : item.approveStatus == "Rejected" ? "#F21515" : "#447A50"} height="90" width="35" position="absolute" right={-36} top={0} style={{ transform: [{ rotate: '-45deg' }] }}></Box>
                                    </Box>
                                    <HStack space={2} width={90} height={30} alignSelf="center" alignItems="center" justifyContent="center" backgroundColor={item.approveStatus == "Pending" ? "#FBC711" : item.approveStatus == "Rejected" ? "#F21515" : "#447A50"} borderBottomRadius={6} borderTopRightRadius={6}>
                                        <Text color={lightColor} fontSize="xs" fontFamily={fontBold}>{item.approveStatus}</Text>
                                    </HStack>
                                </HStack>
                                <Stack key={index} style={{ marginTop: -17, paddingTop: 10 }} borderColor={item.approveStatus == "Pending" ? "#FBC711" : item.approveStatus == "Rejected" ? "#F21515" : "#447A50"} borderLeftWidth={5} backgroundColor={item.approveStatus == "Pending" ? "#FEFFC7" : item.approveStatus == "Rejected" ? "#FFF2F3" : "#F2FFF5"} borderRadius={8} overflow="hidden">
                                    <VStack padding={4}>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Product")}</Text>
                                            <Text width={200} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.product_name}</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Transaction ID")}</Text>
                                            <Text width={'58%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.id}</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Dealer")}</Text>
                                            <Text color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.puchased_from}</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Points Earned")}</Text>
                                            <Text color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.points_earned}</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Bags")}</Text>
                                            <Text color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.total_bags}</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Approved MTD Quantity")}</Text>
                                            <Text color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.MTD}</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Purchase Date")}</Text>
                                            <Text width={'58%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.sale_date}</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Upload Date")}</Text>
                                            <Text width={'58%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.created_at}</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t(item.approveStatus == "Pending" ? "Pending With" : item.approveStatus == "Rejected" ? "Rejected By" : "Approved By")}</Text>
                                            <Text width={'58%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.officer_name}</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between" marginTop={3}>
                                            <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Allocated By")}</Text>
                                            <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.saleCreatedByName} ({item.saleCreatedByExternalId})</Text>
                                        </HStack>
                                        <HStack alignItems="center" justifyContent="space-between">
                                            <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Pending / Approved By")}</Text>
                                            <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.actionTakenOfficerName} ({item.actionTakenOfficerExternalId})</Text>
                                        </HStack>
                                    </VStack>
                                </Stack>
                            </Stack>
                        )}
                        {(purchaseList.length != 0 && pageNumber != totalPage) && (
                            <HStack paddingY="3" paddingX="6" justifyContent="center">
                                <Button variant="outline" size={'xs'} rounded={30} onPress={() => loadMore()}>
                                    <Text color="#bbbbbb">{t("Load More")}</Text>
                                </Button>
                            </HStack>
                        )}
                    </VStack>
                </ScrollView>
                <FooterComponents navigation={navigation} component={userType} />
            </VStack>
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

export default PurchaseHistoryScreen;