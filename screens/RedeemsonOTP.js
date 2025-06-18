import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, BackHandler, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, BASE_URL, secretKey, OS_TYPE, APP_VERSION } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderForOrderDeclearation from '../components/HeaderForOrderDeclearation';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FooterComponents from '../components/Footer';
// import { OtpInput } from "react-native-otp-entry";
import CountDown from 'react-native-countdown-component';

import CryptoJS from 'crypto-js';

const RedeemsonOTP = ({ navigation, route }) => {
    const [secondsLeft, setSecondsLeft] = useState(120);
    const { width } = useWindowDimensions();
    const [isAccept, setIsAccept] = React.useState(false);
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [forOTP, setForOTP] = React.useState(false);
    const [otpValue, setOtpValue] = React.useState('');
    const [originalOTP, setOriginalOTP] = React.useState('');
    const { orderid = 'No card ID provided' } = route.params || {};
    const { cartId = '' } = route.params || {};
    const { addressid = '' } = route.params || {};

    const { address = '' } = route.params || {};



    console.log("orderid================", orderid.orderid)
    const [Phoneno, setPhoneno] = React.useState("");
    const [timeLeft, setTimeLeft] = React.useState(180);
    const [timeup, setTimeUp] = React.useState(false);
    const [showresendotpbuttom, setShowresendOtp] = React.useState(false);
    const [timer, setTimer] = useState(3); // Initialize timer state, e.g., 1 minute

    const [userType, setUserType] = React.useState("");
    const [cartcount, setCartCount] = React.useState("");


    const cartCount = () => {

        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);

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
        getAllAddressData()
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            OTPcall();
            console.log("OTP calllllllllllllllllllllllllll");
        }, 3000); // 3 milliseconds delay

        return () => clearTimeout(timeout); // Cleanup to avoid memory leaks
    }, [Phoneno]);

    const getAllAddressData = () => {
        AsyncStorage.getItem('userToken').then(val => {
            // alert(val)
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
                    // alert(decryptData) 
                    .then((response) => response.json().then(finalRes => {

                        setLoading(false);
                        const mobileString = finalRes.profile.mobile
                        // console.log(mobileString);
                        setPhoneno(mobileString)

                    })


                    )

                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            } else {
                setLoading(false);

            }
        });
    }



    const OTPcall = () => {
        // console.log("otpppppppp calllllllllllllllll");
        AsyncStorage.getItem('userToken').then(val => {

            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);

                fetch(`${BASE_URL}/order/redemption-otp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },

                })
                    // alert(decryptData)
                    .then((response) => {
                        response.json().then(finalres => {
                            if (finalres.bstatus == 1) {
                                setOtpValue(finalres.OTP)
                                setOriginalOTP(finalres.OTP)
                                Toast.show(finalres.message);
                            }
                            else {
                                Toast.show(finalres.message);
                            }


                        })
                    })


            } else {

                setLoading(false);

            }
        });
    }



    const ForSubmit = async () => {
        try {
            const val = await AsyncStorage.getItem('userToken');
            if (!val) {
                setLoading(false);
                return; // Stop execution if token is not found.
            }

            const CryptoJS = require("crypto-js");
            const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);

            let formdata = new FormData();
            formdata.append("cartId", route.params.cartId);
            formdata.append("table_name", route.params.tablename); //"dcm_addresses"
            formdata.append("address_id", route.params.addressId);
            const response = await fetch(`${BASE_URL}/order/place`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'accesstoken': AccessToken,
                    'Useraccesstoken': JSON.parse(decryptData).token
                },
                body: formdata
            });

            const responseJson = await response.json();


            if (responseJson.bstatus == 1) {
                // /order/placeigation.navigate("OrderPlacessSuccessfully",{"orderis":responseJson.orderid});
                //    navigation.navigate("OrderPlacessSuccessfully", { orderis: responseJson.orderid });
                navigation.navigate("OrderPlacessSuccessfully", { orderId: responseJson.orderId, influencerName: responseJson.name});

                Toast.show(responseJson.message || "Action completed successfully!");
            } else {
                Toast.show(responseJson.message || "Something went wrong!");
                console.error("Unexpected status:", responseJson.bstatus); // For debugging
            }



        }

        catch (error) {
            // console.error("Error1111111111888:", error);
            // Toast.show(t("Sorry! Something went wrong. Maybe Network request failed.dsd"));
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        cartCount(); // Will execute on every render
    });


    const ConfarmOtpFunction = () => {
        setLoading(false);
        AsyncStorage.getItem('userToken').then(val => {
            // alert(val)
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("otp", otpValue);

                fetch(`${BASE_URL}/order/verify-redemption-otp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',

                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },
                    body: formdata
                })
                    // alert(decryptData) 
                    .then((response) => response.json())
                    .then((responseJson) => {
                        setLoading(false);
                        // const mobileString = JSON.parse(responseJson)
                        // setPhoneno(responseJson.profile.mobile)

                        if (responseJson.bstatus == 1) {
                            ForSubmit()

                        }
                        else {
                            Toast.show(responseJson.message);
                        }


                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            } else {
                setLoading(false);

            }
        });

    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderForOrderDeclearation component={"OTP"} navigation={navigation} />
                <View
                    style={{
                        backgroundColor: lightColor,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        width: '94%',
                        alignSelf: 'center',
                        flex: 1,
                    }}
                >
                    <View style={{ flex: 1, paddingHorizontal: 5 }}>
                        {/* Text at the top */}
                        <View style={{ alignItems: 'center', marginTop: 25 }}>
                            <Text style={{ fontSize: 16, alignSelf: "flex-start", paddingLeft: 15, fontWeight: 'bold' }}>
                                {t("Redemption Confirmation")}
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 2 }}>
                            <Text style={{ fontSize: 18, alignSelf: "flex-start", paddingLeft: 15, }}>
                                {/* Your points have been redeemed for the {address}
                                Please confirm the redemption by entering the OTP
                                sent to your registered mobile numbe. */}
                                {t("Please confirm the redemption by entering the OTP sent to your registered mobile number")}

                            </Text>
                        </View>

                        {/* Centered Image */}
                        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 10 }}>

                            <View style={[MainStyle.inputbox, { marginBottom: 18, marginTop: 18 }]}>
                                <Input
                                    readOnly
                                    size="lg"
                                    // onChangeText={(text) => setPhoneno(text.replace(/[^0-9]/g, ''))} // Restrict input to numbers
                                    variant="unstyled"
                                    keyboardType="phone-pad" // Ensure a numeric keyboard
                                    InputLeftElement={
                                        <Icon
                                            name="call-outline" // Changed to phone icon
                                            size={20}
                                            color="#666666"
                                            style={{
                                                width: 25,
                                                marginLeft: 10,
                                                textAlign: 'center',
                                            }}
                                        />
                                    }
                                    // value={Phoneno != "" ? Phoneno : "" + " *"}
                                    value={Phoneno}
                                />
                            </View>

                            <View>
                                <Text style={MainStyle.lable} fontSize="xs">
                                    {t('OTP')}{' '}
                                    <Text color={darkGrey} fontSize="10">
                                        ({t('To Verify Mobile No.')})
                                    </Text>{' '}
                                    <Text color={dangerColor}>*</Text>
                                </Text>
                                <HStack justifyContent="space-between" alignItems="center">
                                    <View style={MainStyle.inputbox} width={150}>
                                        <Input
                                            height={43}
                                            value={otpValue}
                                            fontFamily={fontBold}
                                            size="xl"
                                            letterSpacing={5}
                                            variant="unstyled"
                                            keyboardType="number-pad"
                                            secureTextEntry={true}
                                            maxLength={6}
                                            onChangeText={text => setOtpValue(text)}
                                        />
                                    </View>

                                    <TouchableOpacity style={{ alignSelf: 'flex-start', marginRight: "33%" }} onPress={() => {
                                        // OTPcall()
                                        OTPcall()
                                        setTimeLeft(180)
                                        setTimeUp(false)
                                    }}>
                                        <Text
                                            fontFamily={fontSemiBold}
                                            fontSize="sm"
                                            style={{ color: 'blue', alignSelf: 'flex-start' }}
                                        >
                                            {t("Resend")}
                                        </Text>
                                    </TouchableOpacity>
                                </HStack>
                            </View>








                        </View>
                        <Button style={{ height: 45, backgroundColor: baseColor, borderRadius: 8, overflow: 'hidden', width: "90%", marginTop: 5, alignSelf: "center", marginBottom: 8 }}
                            onPress={() => {
                                // navigation.navigate('ViewOrder',{"pageTitle":"View Orders "}
                                // )

                                ConfarmOtpFunction()


                            }}
                        >
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Submit")}</Text>
                        </Button>
                    </View>

                </View>

                {/* <FooterComponents navigation={navigation} component={"Influencer"} /> */}
                <FooterComponents navigation={navigation} component={userType} cartcount={cartcount} />

            </VStack>

        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
});

export default RedeemsonOTP;