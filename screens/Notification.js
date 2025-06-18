import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, BASE_URL, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import FooterComponents from '../components/Footer';
import RenderHTML from 'react-native-render-html';

const NotificationScreen = ({ navigation, route }) => {
    const { width } = useWindowDimensions();
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [userType, setUserType] = React.useState("");
    const [pageData, setPageData] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const [time, setTime] = React.useState("");
    const [unreadCount, setUnreadCount] = React.useState(0); // Added state
    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState(1);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData();
        });
        return unsubscribe;
    }, []);

    const getAllData = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);
                let formdata = new FormData();
                formdata.append("page", "1");
                formdata.append("num_of_rows", "5");

                fetch(`${BASE_URL}/get-all-notification`, {
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

                        if (responseJson.bstatus == 1) {
                            const notifications = Array.isArray(responseJson.notification) ? responseJson.notification : [];
                            setPageData(notifications);
                            setTotalPage(responseJson.total_pages);

                            // Count only unread notifications
                            const unread = notifications.filter(item => item.is_read === 0).length;
                            setUnreadCount(unread); // Update state

                            if (notifications.length > 0) {
                                setMessage(notifications[0].message);
                                setTime(notifications[0].created_at);
                            }
                        } else {
                            setPageData([]);
                            setUnreadCount(0); // Set unreadCount to 0 if no notifications

                            if (responseJson.msg_code == "msg_0047") {
                                AsyncStorage.clear();
                                navigation.replace('Intro');
                            }
                        }
                    })
                    .catch(() => {
                        setLoading(false);
                    });
            }
        });
    };

    const loadMore = () => {
        let num = pageNumber + 1;
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);
                let formdata = new FormData();
                formdata.append("page", num);
                formdata.append("num_of_rows", "5");

                fetch(`${BASE_URL}/get-all-notification`, {
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

                        if (responseJson.bstatus == 1) {
                            const notifications = Array.isArray(responseJson.notification) ? responseJson.notification : [];

                            if (notifications.length > 0) {
                                // Append new notifications to the existing data
                                setPageData(prevData => [...prevData, ...notifications]);
                                setPageNumber(num);
                                setTotalPage(responseJson.total_pages);

                                // Update unread notification count
                                const unread = notifications.filter(item => item.is_read === 0).length;
                                setUnreadCount(prevUnread => prevUnread + unread);
                            } else {
                                // No more notifications to load
                                Toast.show("No more notifications.");
                            }
                        } else {
                            setLoading(false);
                            Toast.show("Failed to load notifications.");
                        }
                    })
                    .catch(() => {
                        setLoading(false);
                        Toast.show("Something went wrong.");
                    });
            }
        });
    };


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={5} padding={6}>
                        <Text fontSize="xl" fontWeight="bold">{t("Notifications")}</Text>

                        {Array.isArray(pageData) && pageData.length > 0 ? (
                            <VStack space={4}>
                                {pageData
                                    .filter(item => item.message && item.message.trim() !== '')
                                    .map((item, index) => (
                                        <Box key={index} backgroundColor={lightColor} borderRadius={8} padding={4} shadow={2} width="100%">
                                            <HStack space={4} alignItems="center">
                                                <Image source={require('../assets/images/NotifyImg.png')} alt="notification" style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                                                <VStack flex={1}>
                                                    <Text fontSize="md" fontWeight="bold">{item.message}</Text>
                                                    <Text fontSize="sm" color="gray.500">{item.created_at}</Text>
                                                </VStack>
                                            </HStack>
                                        </Box>
                                    ))}
                            </VStack>
                        ) : (
                            <VStack space={6} backgroundColor={lightColor} borderRadius={8} overflow="hidden" height={300} justifyContent="center" alignItems="center">
                                <Text color={darkColor} fontSize="lg" fontFamily={fontBold}>{t("No Notifications left")}</Text>
                            </VStack>
                        )}
                        {pageNumber < totalPage &&(
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

export default NotificationScreen;
