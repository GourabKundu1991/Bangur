import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, Alert, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, BASE_URL, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FooterComponents from '../components/Footer';
import { useFocusEffect } from '@react-navigation/native';

const RedemptionDetailsScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();
    const { details, memberId } = route.params;

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [pageData, setPageData] = React.useState("");
    const [mycardData, setMycardData] = React.useState("");
    const [quantities, setQuantities] = React.useState("");
    const [forrelode, setForRelode] = React.useState("");
    const [alldata, setAlldata] = React.useState("");
    const [cartcount, setCartCount] = React.useState("");
    const [userType, setUserType] = React.useState("");
    const [moreData, setMoreData] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState(1);
    const [orderList, setOrderList] = React.useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            AsyncStorage.getItem('language').then(val => {
                if (val != null) {
                    setLanguage(val);
                    i18n
                        .changeLanguage(val)
                        .then(() => console.log(val))
                        .catch(err => console.log(err));
                }
            });
            getAllData();
            cartCount();
        });
        return unsubscribe;
    }, []);


    const cartCount = () => {

        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
               
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
    const getAllData = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);
                let formdata = new FormData();
                formdata.append("pageNumber", "1");
                formdata.append("influencer_id",  memberId);
                console.log("MemberID: " ,memberId);

                fetch(`${BASE_URL}/order/history`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },
                    body: formdata
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        setLoading(false);
                        console.log("Response JSON  getAllData:", responseJson);

                        if (responseJson.bstatus === 1) {
                            const orders = Array.isArray(responseJson.order_list) ? responseJson.order_list : [];
                            setOrderList(orders);
                            setTotalPage(responseJson.total_pages || 1);
                            setCurrentPage(responseJson.page);
                        } else {
                            setOrderList([]);
                            setMoreData(false);
                            Toast.show(responseJson.message, Toast.LONG);

                            if (responseJson.msg_code === "msg_0046") {
                                AsyncStorage.clear();
                                navigation.replace('Intro');
                            }
                        }
                    })
                    .catch(() => {
                        setLoading(false);
                        Toast.show("Sorry! Something went wrong. Maybe network request failed.");
                    });
            }
        });
    };

    const loadMore = () => {
        let nextPage = Number(currentPage) + 1;
        console.log("Next Page:", nextPage);
        setLoading(true);

        AsyncStorage.getItem('userToken').then(val => {
            if (val) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);
                let formdata = new FormData();
                formdata.append("pageNumber", nextPage);
                formdata.append("influencer_id",  memberId);
                console.log("MemberID-> ", memberId);

                fetch(`${BASE_URL}/order/history`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },
                    body: formdata
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        setLoading(false);
                        console.log("Response JSON loadMore:", responseJson);

                        if (responseJson.bstatus === 1) {
                            const orders = Array.isArray(responseJson.order_list) ? responseJson.order_list : [];

                            if (orders.length > 0) {
                                setOrderList(prevData => [...prevData, ...orders]); // Append new data
                                setCurrentPage(nextPage); // Update current page correctly
                                setTotalPage(responseJson.total_pages);
                            } else {
                                setMoreData(false);
                                Toast.show("No more orders.");

                                if (responseJson.msg_code === "msg_0046") {
                                    AsyncStorage.clear();
                                    navigation.replace('Intro');
                                }
                            }
                        } else {
                            setMoreData(false);
                            Toast.show("Failed to load more orders.");
                        }
                    })
                    .catch(() => {
                        setLoading(false);
                        Toast.show("Something went wrong.");
                    });
            }
        });
    };


    const cancelOrder = async (cardid, pruductid) => {
        try {
            setLoading(true);

            const encryptedToken = await AsyncStorage.getItem('userToken');
            if (!encryptedToken) {
                console.warn("User token not found!");
                setLoading(false);
                return;
            }

            const CryptoJS = require("crypto-js");
            const decryptedData = JSON.parse(
                CryptoJS.AES.decrypt(encryptedToken, secretKey).toString(CryptoJS.enc.Utf8)
            );

            const formdata = new FormData();
            formdata.append("orderId", cardid);
            formdata.append("itemId", pruductid);
            formdata.append("status", "Cancelled");

            const response = await fetch(`${BASE_URL}/order/cancel`, {
                method: 'POST',
                headers: {
                    accesstoken: AccessToken,
                    Useraccesstoken: decryptedData.token,
                },
                body: formdata,
            });


            const responseJson = await response.json();
            getAllData();

        }
        catch (error) {
            console.error("Error", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={t("Redemption Details")}  navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack flexWrap="wrap" justifyContent="space-between" padding={5}>

                        {orderList.length > 0 ?
                            orderList.map((item, index) => (
                                <HStack
                                    key={index}
                                    space={3}
                                    borderColor={lightGrey}
                                    borderBottomWidth={1}
                                    paddingY={4}

                                >
                                    <Box
                                        style={[
                                            MainStyle.productimage,
                                            { width: '35%', borderColor: greyColor, borderWidth: 1, height: 120 },
                                        ]}
                                    >
                                        {item?.BaseUrl && item?.product_image?.[2]?.product_image && (
                                            <Image
                                                source={{ uri: item.BaseUrl + item.product_image[0].product_image }}
                                                style={{ width: '100%', height: 100 }} // Corrected width
                                                resizeMode="contain"
                                            />

                                        )}

                                    </Box>
                                    <VStack style={{ width: '55%' }} space={0}>
                                        <Text fontWeight="bold" fontSize="sm" color={darkColor}>
                                            {item.productName}
                                        </Text>
                                        <Text fontSize="xs" color={darkGrey}>
                                            Order ID: {item.orderId}
                                        </Text>
                                        <Text fontSize="xs" color={darkGrey}>
                                            Order Placed: {item.orderInDate}
                                        </Text>
                                        {(item.status == 'Dispatched' || item.status == 'Delivered') && (
                                            <>
                                                <Text fontSize="xs" color={darkGrey}>
                                                    Courier Name: {item.courierName}
                                                </Text>
                                                <Text fontSize="xs" color={darkGrey}>
                                                    AWB No: {item.awbNo}
                                                </Text>
                                            </>
                                        )}

                                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            <Text fontWeight="bold" fontSize="sm" color={darkColor}>
                                                {item.pricePoint} {t("Points")} {'\n'}{item.quantity} {t("Qty")}
                                            </Text>
                                            {
                                                item.status === "Open" ? (
                                                    <HStack alignItems="center" space={1}>
                                                        {/* <Image
                                                            source={require('../assets/images/hour-glass1.png')}
                                                            style={{ width: 18, height: 18, tintColor: 'blue' }}
                                                        /> */}
                                                        <Text fontWeight="bold" fontSize="xs" color="#0000FF">
                                                            {item.status}
                                                        </Text>

                                                    </HStack>
                                                ) : item.status === "Cancelled" ? (
                                                    <HStack alignItems="center" space={1}>
                                                        {/* <Image
                                                            source={require('../assets/images/decline.png')}
                                                            style={{ width: 18, height: 18, }}
                                                        /> */}
                                                        <Text fontWeight="bold" fontSize="xs" color="#ff0000">
                                                            {item.status}
                                                        </Text>

                                                    </HStack>
                                                ) :
                                                    item.status === "Delivered" ? (
                                                        <HStack alignItems="center" space={1}>
                                                            {/* <Image
                                                                source={require('../assets/images/Check.png')}
                                                                style={{ width: 18, height: 18, }}
                                                            /> */}
                                                            <Text fontWeight="bold" fontSize="xs" color="#00FF00">
                                                                {item.status}
                                                            </Text>

                                                        </HStack>
                                                    ) :

                                                        item.status === "Dispatched" ? (
                                                            <HStack alignItems="center" space={1}>
                                                                {/* <Image
                                                                    source={require('../assets/images/Check.png')}
                                                                    style={{ width: 18, height: 18, tintColor: 'blue' }}
                                                                /> */}
                                                                <Text fontWeight="bold" fontSize="xs" color="#008000">
                                                                    {item.status}
                                                                </Text>
                                                            </HStack>
                                                        ) :
                                                            (
                                                                <HStack alignItems="center" space={1}>
                                                                    {/* <Image
                                                                        source={require('../assets/images/hour-glass1.png')}
                                                                        style={{ width: 18, height: 18, tintColor: 'blue' }}
                                                                    /> */}
                                                                    <Text fontWeight="bold" fontSize="xs" color={"#ff0000"}>
                                                                        {item.status}
                                                                    </Text>
                                                                </HStack>
                                                            )
                                            }
                                        </View>
                                        {item.canCancel == 1 ?
                                            <Button size="xs" style={[MainStyle.solidbtn, { width: '68%', backgroundColor: dangerColor, height: 37, alignSelf: "center", marginTop: 3 }]}
                                                onPress={() => {
                                                    Alert.alert(
                                                        t("Are you sure?"),
                                                        t("Do you really want to Cancel this order?"),

                                                        [
                                                            {
                                                                text: t("Cancel"),
                                                                style: "cancel",
                                                            },
                                                            {
                                                                text: t("OK"),
                                                                onPress: () => cancelOrder(item.orderId, item.orderItemId),
                                                            },
                                                        ],
                                                        { cancelable: true }
                                                    );
                                                }}
                                            >
                                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Cancel Order")}</Text>
                                            </Button> : ""
                                        }
                                    </VStack>
                                </HStack>
                            ))
                            :
                            <Text>{t("No orders available")}</Text>
                        }
                        {currentPage < totalPage && (
                            <HStack paddingY="3" paddingX="6" justifyContent="center">
                                <Button variant="outline" size={'xs'} rounded={30} onPress={() => loadMore()}>
                                    <Text color="#bbbbbb">{t("Load More")}</Text>
                                </Button>
                            </HStack>
                        )}

                    </VStack>
                </ScrollView>
                <FooterComponents navigation={navigation} component={userType}/>
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

export default RedemptionDetailsScreen;