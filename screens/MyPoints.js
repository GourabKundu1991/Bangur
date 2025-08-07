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
const MyPointsScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [pointList, setPointList] = React.useState([]);
    const [searchTerms, setSearchTerms] = React.useState("");
    const [isReset, setIsReset] = React.useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState("");

    const [filterStatus, setFilterStatus] = React.useState("");

    const [dateFilter, setDateFilter] = React.useState(false);
    const [fromDate, setFromDate] = React.useState("");
    const [toDate, setToDate] = React.useState("");
    const [dateType, setDateType] = React.useState("");
    const [userType, setUserType] = React.useState("");
    const [cartcount, setCartCount] = React.useState("");
    const [moreValue, setMoreValue] = React.useState("");

    const [availablePoints, setAvailablePoints] = React.useState("");

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    const miniYear = new Date(year - 100, month, day);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData(fromDate, toDate);
        });
        return unsubscribe;
    }, []);

    const onSetFilter = (filterVal) => {
        setLoading(true);
        setFilterStatus(filterVal);
        getAllData(fromDate, toDate);
        setPageNumber(1);
    }



    useEffect(() => {
        cartCount(); // Will execute on every render
    });
    const cartCount = () => {

        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                // setUserType(JSON.parse(decryptData).user_type);

                fetch(`${BASE_URL}/cart/count`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },

                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("cartCount:", responseJson);
                        setCartCount(responseJson.cart_count)

                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log("Error:", error);

                    });
            }
        });
    }


    useEffect(() => {
        cartCount()
        const fetchUserType = async () => {
            try {
                const encryptedToken = await AsyncStorage.getItem('userToken');
                if (encryptedToken) {
                    const CryptoJS = require("crypto-js");
                    const decryptedData = CryptoJS.AES.decrypt(encryptedToken, secretKey).toString(CryptoJS.enc.Utf8);
                    const parsedData = JSON.parse(decryptedData);
                    setUserType(parsedData.user_type);
                }
            } catch (error) {
                console.error("Error decrypting or parsing token:", error);
            }
        };

        fetchUserType();
    }, []);

    const getAllData = (startDate, endDate) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                console.log("latest token============", decryptData)
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("programId", JSON.parse(decryptData).program_id);
                formdata.append("page", 1);
                formdata.append("from_date", (startDate == "" ? "" : moment(startDate).format("DD-MM-YYYY")));
                formdata.append("to_date", (endDate == "" ? "" : moment(endDate).format("DD-MM-YYYY")));
                fetch(`${BASE_URL}/point-statements`, {
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
                        console.log("Points:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setPointList(responseJson.trnasc_list);
                            setTotalPage(responseJson.total_pages);
                            setAvailablePoints(responseJson.current_balance);
                        } else {
                            setLoading(false);
                            //Toast.show(responseJson.message, Toast.LONG);
                            setPointList([]);
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
            Toast.show(t("Select To Date"), Toast.LONG);
        } else {
            setLoading(true);
            getAllData(fromDate, toDate);
            setIsReset(true);
            setPageNumber(1);
        }
    }

    const onReset = () => {
        setLoading(true);
        getAllData("", "");
        setIsReset(false);
        setFromDate("");
        setToDate("");
        setPageNumber(1);
    }

    const onMore = (val) => {
        setMoreValue(val);
    }

    const loadMore = () => {
        let num = pageNumber + 1;
        console.log("num====>>>>", num)
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("programId", JSON.parse(decryptData).program_id);
                formdata.append("page", num);
                formdata.append("from_date", (fromDate == "" ? "" : moment(fromDate).format("DD-MM-YYYY")));
                formdata.append("to_date", (toDate == "" ? "" : moment(toDate).format("DD-MM-YYYY")));
                fetch(`${BASE_URL}/point-statements`, {
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
                        console.log("Points==============:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setTotalPage(responseJson.total_pages);
                            setPageNumber(num);
                            let newArrya = pointList.concat(responseJson.trnasc_list);
                            setPointList(newArrya);
                        } else {
                            setLoading(false);
                            setPageNumber(1);
                            setPointList([]);
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

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={3} padding={6}>
                        <View>
                            <HStack justifyContent="space-between" alignItems="center">
                                <Text style={MainStyle.lable} fontSize="xs">{t("Filter By Date")}</Text>
                                {isReset && (
                                    <Button size="xs" variant="link" onPress={() => onReset()}>
                                        <Text color={warningColor} fontFamily={fontBold} fontSize="sm">{t("Clear")}</Text>
                                    </Button>
                                )}
                            </HStack>
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
                                    <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Search")}</Text>
                                </Button>
                            </HStack>
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            maximumDate={new Date()}
                            minimumDate={miniYear}
                        />
                        {pointList.length == 0 && (
                            <VStack space={6} backgroundColor={lightColor} borderRadius={8} overflow="hidden" height={300} justifyContent="center" alignItems="center">
                                <Image source={require('../assets/images/hour.gif')} alt="hours" style={{ width: 100, height: 100, resizeMode: 'contain', position: 'relative' }} />
                                <Text color={darkColor} fontSize="lg" fontFamily={fontBold}>{t("Sorry! No Data Found")}</Text>
                            </VStack>
                        )}
                        {pointList.length != 0 && (
                            <Stack space={5}>
                                <HStack backgroundColor={baseLightColor} padding={3} borderRadius={8} overflow="hidden" justifyContent="space-between" alignItems="center">
                                    <Text color={darkColor} fontSize="md" fontFamily={fontSemiBold} textTransform="capitalize">{t("Available Points")}:</Text>
                                    <Text color={darkColor} fontSize="xl" fontFamily={fontBold}>{availablePoints}</Text>
                                </HStack>
                                <VStack backgroundColor={baseLightColor} paddingX={3} paddingY={1} borderRadius={8} overflow="hidden">
                                    {pointList.map((item, index) =>
                                        <Stack key={index} borderBottomWidth={pointList.length - 1 ? 1.5 : 0} borderColor={greyColor}>
                                            <HStack paddingY={2} justifyContent="space-between" alignItems="center" backgroundColor={baseLightColor} position="relative">
                                                <VStack>
                                                    <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{moment(item.created_at_date).format("DD MMMM YYYY")}, {item.created_at_time}</Text>
                                                    {item.transaction_type == "Credit" ?
                                                        <Text width={200} color={darkColor} fontSize="sm" fontFamily={fontBold}>{item.transaction_desc}</Text>
                                                        :
                                                        <Text color={darkColor} fontSize="sm" fontFamily={fontBold}>{t("Redeemed")}</Text>
                                                    }
                                                </VStack>
                                                <HStack space={1} alignItems="center">
                                                    <Text color={darkColor} fontSize="xs" fontFamily={fontBold}>{item.transaction_type == "Credit" ? "+" : "-"}{item.reward_points}</Text>
                                                    {item.transaction_type == "Credit" ?
                                                        <Icon name="arrow-up-outline" size={16} color={successColor} />
                                                        :
                                                        <Icon name="arrow-down-outline" size={16} color={dangerColor} />
                                                    }
                                                    {moreValue == item.id ?
                                                        <Pressable onPress={() => setMoreValue("")} style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 24, width: 25, paddingHorizontal: 7, borderRadius: 3 }]} variant="unstyled">
                                                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="lg" lineHeight={22}>-</Text>
                                                        </Pressable>
                                                        :
                                                        <Pressable onPress={() => onMore(item.id)} style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 24, width: 25, paddingHorizontal: 7, borderRadius: 3 }]} variant="unstyled">
                                                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="lg" lineHeight={22}>+</Text>
                                                        </Pressable>
                                                    }
                                                </HStack>
                                            </HStack>
                                            {moreValue == item.id && (
                                                <VStack space={0.5} backgroundColor={lightColor} padding={3} borderColor={greyColor} borderTopWidth={1.5}>
                                                    <Text color={darkColor} marginBottom={2} fontSize="sm" fontFamily={fontSemiBold}>{item.product_name}</Text>


                                                    <HStack alignItems="center" justifyContent="space-between">
                                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{item.subtype == "Redemption" ? t("Order ID") : t("Transaction ID")}</Text>
                                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.id}</Text>
                                                    </HStack>
                                                    {item.subtype != "Redemption" && (
                                                        <Stack>
                                                            <HStack alignItems="center" justifyContent="space-between">
                                                                <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Dealer")}</Text>
                                                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.dealer}</Text>
                                                            </HStack>
                                                            <HStack alignItems="center" justifyContent="space-between">
                                                                <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Purchase Date")}</Text>
                                                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{moment(item.purchase_date).format("DD-MM-YYYY")}</Text>
                                                            </HStack>

                                                            <HStack alignItems="center" justifyContent="space-between">
                                                                <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{t("Bags")}</Text>
                                                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.bags}</Text>
                                                            </HStack>
                                                        </Stack>
                                                    )}

                                                    <HStack alignItems="center" justifyContent="space-between">
                                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{item.subtype == "Redemption" ? t("Order Date") : t("Transaction Date")}</Text>
                                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{moment(item.created_at_date).format("DD-MM-YYYY")}</Text>
                                                    </HStack>
                                                    <HStack alignItems="center" justifyContent="space-between">
                                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{item.subtype == "Redemption" ? t("Order Time") : t("Transaction Time")}</Text>
                                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold} textAlign="right">{item.created_at_time}</Text>
                                                    </HStack>
                                                </VStack>
                                            )}
                                        </Stack>
                                    )}
                                </VStack>
                            </Stack>
                        )}
                        {pointList.length > 0 && pageNumber != totalPage && (
                            <HStack paddingY="3" paddingX="6" justifyContent="center">
                                <Button variant="outline" size={'xs'} rounded={30} onPress={() => loadMore()}>
                                    <Text color="#bbbbbb">{t("Load More")}</Text>
                                </Button>
                            </HStack>
                        )}
                    </VStack>
                </ScrollView>
            </VStack>
            <FooterComponents navigation={navigation} component={userType} cartcount={cartcount} />
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

export default MyPointsScreen;