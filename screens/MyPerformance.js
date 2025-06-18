import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Dimensions, Image, Linking, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Events from '../auth_provider/Events';
import { MainStyle, baseColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import FooterComponents from '../components/Footer';
import i18n from '../assets/language/i18n';
import Toast from 'react-native-simple-toast';

const MyPerformanceScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');

    const [homeMenu, setHomeMenu] = React.useState([]);
    const [profileData, setProfileData] = React.useState("");
    const [points, setPoints] = React.useState("");

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
        });
        return unsubscribe;
    }, []);

    const getAllData = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("lang_code", currentLanguage);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("programId", JSON.parse(decryptData).program_id);
                fetch(`${BASE_URL}/get-dashboard`, {
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
                        //console.log("Dashboard:", responseJson);
                        if (responseJson.bstatus == 1) {
                            Events.publish('mainMenu', responseJson.menu);
                            setHomeMenu(responseJson.home_menu);
                            getProfileData();
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
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.replace('Intro');
            }
        });
    }

    const getProfileData = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                fetch(`${BASE_URL}/view-profile`, {
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
                        //console.log("profile:", responseJson);
                        if (responseJson.bstatus == 1) {
                            Events.publish('profileData', responseJson);
                            setProfileData(responseJson.profile);
                            setPoints(responseJson.available_point);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.replace('Intro');
            }
        });
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <HStack alignItems="center" justifyContent="space-between" paddingX={8} paddingY={6}>
                        <HStack space={4} alignItems="center" justifyContent="space-between">
                            <Avatar borderColor={lightGrey} resizeMode="contain" borderWidth="2" size="75" source={require('../assets/images/avatar.png')}></Avatar>
                            <VStack justifyContent="center">
                                <Text color="#111111" fontSize="15" fontFamily={fontBold}>{profileData.name}</Text>
                                <HStack space={2} alignItems="center">
                                    <Text color={baseColor} fontSize="xs" fontFamily={fontSemiBold}>{t("Member Id")}:</Text>
                                    <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{profileData.userCode}</Text>
                                </HStack>
                                <HStack alignItems="center">
                                    <Icon name="call-outline" size={14} color={darkGrey} />
                                    <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}> {profileData.mobile}</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    </HStack>
                    <VStack space={3} paddingX={7} paddingBottom={7}>
                        <Text color={darkColor} fontSize="lg" fontFamily={fontBold} paddingX={2}>{t("Quick Information")}</Text>
                        <HStack justifyContent="space-evenly" alignItems="center" flexWrap="wrap">
                            {homeMenu.map((item, index) =>
                                <Pressable key={index} style={MainStyle.quickbox}>
                                    <VStack justifyContent="center" alignItems="center" style={MainStyle.quickicon}>
                                        <Text color={baseColor} fontSize="md" fontFamily={fontBold}>10000</Text>
                                    </VStack>
                                    <Text color={darkColor} fontSize="xs" textAlign="center" fontFamily={fontSemiBold} style={{ minHeight: 38, display: 'flex', verticalAlign: 'middle' }}>{item.title}</Text>
                                </Pressable>
                            )}
                        </HStack>
                    </VStack>
                </ScrollView>
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

export default MyPerformanceScreen;