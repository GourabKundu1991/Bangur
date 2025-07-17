import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Dimensions, Image, Linking, Pressable, ScrollView, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, View, ImageBackground } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Events from '../auth_provider/Events';
import { MainStyle, baseColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, spouseColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import FooterComponents from '../components/Footer';
import i18n from '../assets/language/i18n';
import Toast from 'react-native-simple-toast';
import { SliderBox } from 'react-native-image-slider-box';


const HomeScreen = ({ navigation }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');
    const { width, height } = Dimensions.get('window');

    const [homeMenu, setHomeMenu] = React.useState([]);
    const [profileData, setProfileData] = React.useState("");
    const [points, setPoints] = React.useState("");
    const [count, setCount] = React.useState("");
    const [contestPrize, setContestPrize] = React.useState("");
    const [banner, setBanner] = React.useState([]);
    const [userType, setUserType] = React.useState("");
    const [cartcount, setCartCount] = React.useState("");
    const [customerCareNumber, setCustomerCareNumber] = React.useState("");
    const [unreadCount, setUnreadCount] = React.useState("");
    const [rewardCatalog, SetRewardCatalog] = React.useState("");
    const [schemeCatalog, SetSchemeCatalog] = React.useState("");
    const [addressStatus, SetAddressStatus] = React.useState(null);
    const [showPopup, setShowPopup] = React.useState(true);
    const [addressData, SetAddressData] = React.useState("");
    const [addressMsg, SetAddressMsg] = React.useState("");

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

    const getAllData = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);
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
                        console.log("Dashboard:", responseJson);
                        if (responseJson.bstatus == 1) {
                            Events.publish('mainMenu', responseJson.menu);
                            setHomeMenu(responseJson.home_menu);
                            setCustomerCareNumber(responseJson.helpdesk_number);
                            setCount(responseJson.eligable_count);
                            setContestPrize(responseJson.eligable_contestent_prize);
                            setUnreadCount(responseJson.unread_notification_count);
                            SetAddressStatus(responseJson.influencer_address_verification);
                            SetAddressMsg(responseJson.influencer_address_msg);
                            console.log("InfluencerAddressVerification:", addressStatus);
                            SetAddressData(responseJson.address_verification_data);
                            // console.log("eligable_count:", responseJson.eligable_count);
                            console.log("Unread_count Home:", responseJson.unread_notification_count);
                            const imageUrls = responseJson.banners.map(banner => banner.image);
                            setBanner(imageUrls);

                            //Store catalog IDs
                            if (responseJson.catalogs && Array.isArray(responseJson.catalogs)) {
                                const reward = responseJson.catalogs.find(item => item.name === "Reward Catalog");
                                const scheme = responseJson.catalogs.find(item => item.name === "SchemeCatalog");

                                if (reward) SetRewardCatalog(reward.id);
                                if (scheme) SetSchemeCatalog(scheme.id);
                            }
                            AsyncStorage.setItem('purchaseAcceptReasons', JSON.stringify(responseJson.sale_accept_reasons));
                            AsyncStorage.setItem('purchaseRejectReasons', JSON.stringify(responseJson.sale_reject_reasons));
                            AsyncStorage.setItem('accountDeleteText', JSON.stringify(responseJson.account_delete_text));
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

    React.useEffect(() => {
        console.log("Updated InfluencerAddressVerification:", addressStatus);
        console.log("Updated Address Msg:", addressMsg);
    }, [addressStatus, addressData, addressMsg]);

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
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.replace('Intro');
            }
        });
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
                <HeaderComponents component='Home' navigation={navigation} openDialer={() => openDialer(customerCareNumber)} unreadCount={unreadCount} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <HStack alignItems="center" justifyContent="space-between" paddingX={8} paddingY={6}>
                        <HStack space={4} alignItems="center">
                            <Avatar borderColor={lightGrey} resizeMode="contain" borderWidth="2" size="75" source={profileData.profile_image == "" ? require('../assets/images/avatar.png') : { uri: profileData.profile_image }}></Avatar>
                            <VStack justifyContent="center" width={'70%'}>
                                <Text color="#111111" fontSize="15" fontFamily={fontBold}>{profileData.name}</Text>
                                <HStack space={2} alignItems="center">
                                    <Text color={baseColor} fontSize="xs" fontFamily={fontSemiBold}>{t("Member Id")}:</Text>
                                    <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{profileData.userCode}</Text>
                                </HStack>
                                <HStack alignItems="center" space={2}>

                                    <Icon name="call-outline" size={14} color={darkGrey} onPress={() => openDialer(profileData.mobile)} />
                                    <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}> {profileData.mobile}</Text>

                                </HStack>
                            </VStack>
                        </HStack>
                    </HStack>
                    {profileData.contactHier == "Influencer" && (
                        <HStack paddingX={8} alignSelf="center" position="relative" zIndex={99} width={"100%"}>
                            <Box height="30" width="10%" overflow="hidden">
                                <Box backgroundColor={baseColor} height="78" width="90" position="absolute" left={2} top={0} style={{ transform: [{ rotate: '45deg' }] }}></Box>
                            </Box>



                            <HStack space={2} width={"80%"} height={55} alignSelf="center" alignItems="center" justifyContent="center" backgroundColor={baseColor} borderBottomRightRadius={15} borderBottomLeftRadius={15}>
                                <Text color={lightColor} fontSize={currentLanguage == 'Eng' ? "md" : "xs"} fontFamily={fontRegular}>{t("Available Points")}:</Text>
                                <Text color={lightColor} fontSize="lg" fontFamily={fontBold}>{points}</Text>
                            </HStack>

                            <Box height="30" width="10%" overflow="hidden">
                                <Box backgroundColor={baseColor} height="78" width="90" position="absolute" right={2} top={0} style={{ transform: [{ rotate: '-45deg' }] }}></Box>
                            </Box>
                        </HStack>
                    )}
                    <Stack marginTop={4} marginBottom={4}>
                        {/* <Image source={ banner.image != "" ? { uri: banner.image } : require('../assets/images/banner1.png')} style={{ width: '100%', height: 150, resizeMode: 'contain' }} /> */}
                        <SliderBox
                            images={banner}
                            sliderBoxHeight={200}
                            dotColor="red"
                            inactiveDotColor="#90A4AE"
                            autoplay
                            circleLoop
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            dotStyle={{
                                display: 'none'
                            }}
                            ImageComponentStyle={{ borderRadius: 20, borderWidth: 10, borderColor: '#cccccc', width: '80%', left: -12, alignSelf: 'center' }}
                        />
                    </Stack>

                    {profileData.contactHier == "Influencer" && count !== "" && (
                        <VStack padding={0} height={60} backgroundColor={baseColor} width='88%' position={'relative'} left={21} marginTop={5}>
                            <HStack justifyContent="flex-start" marginLeft={-4} top={3}>
                                <View backgroundColor={lightColor}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: 25,
                                    }}
                                />
                            </HStack>
                            <HStack position={'absolute'} top={2} left={50}>
                                <Text color="#FCDC4D" fontSize="xs" fontFamily={fontBold} fontWeight={400} marginBottom={30}>{t("Congratulations you have Won- ")}</Text>
                                <Text color="#FCDC4D" fontSize={currentLanguage == 'Eng' ? "md" : "xs"} fontFamily={fontBold} fontWeight={400} style={{ position: 'absolute', left: 50 }}>{"\n"}{count}</Text>
                            </HStack>
                            <HStack justifyContent="flex-end" alignItems="center" position="relative" left={4} bottom={6}>
                                <View backgroundColor={lightColor}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: 25,
                                    }}
                                />
                            </HStack>
                        </VStack>
                    )}
                    {profileData.contactHier == "Influencer" && contestPrize !== "" && (
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <ImageBackground
                                source={require('../assets/images/lucky2.png')}
                                resizeMode="contain"
                                style={{
                                    width: 330,
                                    height: 130,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 26,
                                        fontWeight: '900',
                                        color: '#FFFF00',
                                        textShadowColor: '#000000',
                                        textShadowOffset: { width: 2, height: 2 },
                                        textShadowRadius: 4,
                                        letterSpacing: 1,
                                        paddingTop: 8,
                                    }}
                                >
                                    Lucky Draw Bonanza
                                </Text>

                                <Text style={{ fontSize: 14, color: 'white', marginTop: 2 }}>
                                    Congratulations You Have Won
                                </Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginTop: 2 }}>
                                    {contestPrize}
                                </Text>
                            </ImageBackground>
                        </View>
                    )}
                    <VStack space={5} padding={7}>
                        <View style={{ backgroundColor: lightGrey, height: 1 }}>
                            <Text style={{ position: 'absolute', width: '40%', marginHorizontal: '5%', top: -13, backgroundColor: lightColor }} color={darkColor} fontSize="md" fontFamily={fontBold}>{t("Quick Links")}</Text>
                        </View>
                        <HStack justifyContent="center" alignItems="center" flexWrap="wrap">
                            {homeMenu.map((item, index) =>
                                <Pressable
                                    key={index}
                                    style={MainStyle.quickbox}
                                    backgroundColor={item.link == "AddSpouse" ? spouseColor : item.link == "SpouseDetails" ? spouseColor : lightColor}
                                    onPress={() => {
                                        if (item.title === "My Orders") {
                                            navigation.navigate('ViewOrder', {
                                                rewardId: rewardCatalog,
                                                schemeId: schemeCatalog,
                                            });
                                        } else {
                                            navigation.navigate(item.link, { pageTitle: item.title });
                                        }
                                    }}
                                >
                                    <VStack justifyContent="center" alignItems="center" style={MainStyle.quickicon} backgroundColor={item.link == "AddSpouse" ? lightColor : item.link == "SpouseDetails" ? lightColor : lightGrey}>
                                        <Icon name={item.icon} size={30} color={item.link == "AddSpouse" ? spouseColor : item.link == "SpouseDetails" ? spouseColor : baseColor} />
                                    </VStack>
                                    <Text color={item.link == "AddSpouse" ? lightColor : item.link == "SpouseDetails" ? lightColor : darkColor} fontSize="xs" textAlign="center" fontFamily={fontSemiBold} style={{ minHeight: 38, display: 'flex', verticalAlign: 'middle', paddingHorizontal: 1 }}>{item.title}</Text>
                                </Pressable>
                            )}
                        </HStack>
                    </VStack>
                </ScrollView>
                {Number(addressStatus) === 1 && showPopup && (
                    <View style={MainStyle.spincontainer}>
                        <VStack style={MainStyle.popbox} space={5} alignItems="center" position="relative">
                            <TouchableOpacity
                                style={{ position: 'absolute', top: 10, right: 10, zIndex: 1, padding: 5, }}
                                onPress={() => setShowPopup(false)}
                            >
                                <Ionicons name="close" size={28} color="#333" />
                            </TouchableOpacity>

                            <Text color={darkColor} fontSize="18" fontFamily={fontBold} textAlign="center">
                                {addressMsg}
                            </Text>

                            <TouchableOpacity onPress={() => openDialer(customerCareNumber)}>
                                <HStack alignItems="center" space={2}>
                                    <Icon name="call" size={22} color={baseColor} />
                                    <Text fontSize="20" fontFamily={fontBold} color={baseColor}>
                                        {customerCareNumber}
                                    </Text>
                                </HStack>
                            </TouchableOpacity>
                        </VStack>
                    </View>
                )}

                {Number(addressStatus) === 2 && (
                    <View style={MainStyle.spincontainer}>
                        <VStack style={MainStyle.popbox} space={10}>
                            <VStack justifyContent="center" alignItems="center">
                                <Text color={darkColor} fontSize="22" fontFamily={fontBold} textAlign="center" style={{ bottom: 10 }}>{t("Address Verification Pending")}</Text>
                            </VStack>
                            <Stack width={'100%'} space={3}>
                                <Button style={MainStyle.solidbtn} onPress={() => navigation.navigate('AddressVerificationPending', {
                                    pageTitle: t('Address Verification Pending'),
                                    addressData: addressData
                                })}>
                                    <Text color={lightColor} fontFamily={fontSemiBold} fontSize="20" style={{ bottom: 7 }}>{t("Verify Address")}</Text>
                                </Button>
                            </Stack>
                        </VStack>
                    </View>
                )}
                <FooterComponents navigation={navigation} component={userType} cartcount={cartcount} />
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

export default HomeScreen;