import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, BackHandler, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, BASE_URL, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderForOrderDeclearation from '../components/HeaderForOrderDeclearation';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FooterComponents from '../components/Footer';

const MyCartScreen = ({ navigation, route }) => {
    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [userType, setUserType] = React.useState("");
    const [cartcount, setCartCount] = React.useState("");
    const { orderId, influencerName } = route.params;

    useEffect(() => {
        const backAction = () => {
            navigation.navigate("Home")
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => {
            backHandler.remove();
        };
    }, []);

    useEffect(() => {
        cartCount();
    }, []);


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

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderForOrderDeclearation component={"Order Placement"} navigation={navigation} />
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
                    <View style={{ flex: 1, }}>
                        {/* Text at the top */}
                        <View style={{ alignItems: 'center', marginTop: 25 }}>
                            <Text style={{ fontSize: 17, alignSelf: "flex-start", paddingLeft: 15, fontWeight: 'bold' }}>
                                {t("Order Placed successfully")}
                            </Text>
                        </View>

                        {/* Centered Image */}
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/images/check-green.gif')} // Replace with your local image path
                                style={{ width: 100, height: 100 }} // Example size for the image
                            />

                            <Text style={{ fontSize: 16, alignSelf: "center", paddingLeft: 15, fontWeight: 'bold', marginTop: 40 }}>
                                {t("Hi")} {influencerName}
                            </Text>

                            <Text style={{ fontSize: 17, alignSelf: "center", paddingLeft: 15, fontWeight: 'bold', width: "90%" }}>




                                {t("Your order has been successfully placed!")}
                            </Text>

                            <View style={{ flexDirection: "row", marginTop: 4 }}>
                                <Text style={{ fontSize: 18, alignSelf: "center", paddingLeft: 15, fontWeight: 'bold', }}>
                                    {t("Your order ID is")} </Text>
                                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 18 }}>
                                    {orderId}
                                </Text>
                            </View>

                            <Button style={{ height: 45, backgroundColor: baseColor, borderRadius: 8, overflow: 'hidden', width: "90%", marginTop: 10 }} onPress={() => {
                                navigation.navigate('ViewOrder', { "pageTitle": "View Orders" })
                            }}
                            >
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Track Order")}</Text>
                            </Button>
                        </View>

                    </View>

                </View>
                <FooterComponents navigation={navigation} component={userType} cartcount={cartcount} />
            </VStack>

        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
});

export default MyCartScreen;