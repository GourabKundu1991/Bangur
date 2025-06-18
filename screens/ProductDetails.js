import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect, useCallback } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import RenderHtml from 'react-native-render-html';
import { useFocusEffect } from '@react-navigation/native';

import FooterComponents from '../components/Footer';
const ProductDetailsScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [userType, setUserType] = React.useState("");
    const [pageData, setPageData] = React.useState("");
    const [cartcount, setCartCount] = React.useState("");
    const [relodecounter, setRelodecounter] = React.useState("");
    const [pdetails, setPdetails] = React.useState("");
    const [step1, setStep1] = React.useState(true);
    const [step2, setStep2] = React.useState(false);
    const [mypropsdata, setMypropsData] = React.useState(route.params);

    const productID = route.params.productID;

    const productSpacification = mypropsdata.productParams
    // setPdetails(productSpacification)



    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // setLoading(true);
            // getAllData();
        });
        return unsubscribe;
    }, []);


    const onScreenFocus = () => {
        // Your function logic here
        console.log('Screen is focused');
        cartCount()
        // Call other functions or set state
    };

    useFocusEffect(

        useCallback(() => {
            // This function will be called when the screen gains focus
            onScreenFocus();

            return () => {
                // This cleanup function will be called when the screen loses focus
            };
        }, []) // The empty dependency array ensures the effect runs once
    );



    useEffect(() => {
        // Set the product specification when the component mounts
        setPdetails(productSpacification);
    }, [productSpacification]); // Dependency array ensures the effect is re-run when `productSpacification` changes






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






    useEffect(() => {
        cartCount()

    }, [relodecounter]);



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

    const AddToCard = async (type) => {
        setLoading(true);
        try {

            const encryptedToken = await AsyncStorage.getItem('userToken');


            var CryptoJS = require("crypto-js");
            // Decrypt token
            const decryptedData = JSON.parse(
                CryptoJS.AES.decrypt(encryptedToken, secretKey).toString(CryptoJS.enc.Utf8)
            );

            // Prepare form data
            const formdata = new FormData();
            formdata.append("prod_id", mypropsdata.productID);
            formdata.append("price_in_points", mypropsdata.pricePoints);
            formdata.append("prod_name", mypropsdata.productName);
            formdata.append("quantity", 1);

            console.log("FormData:==", formdata);

            // Make API call
            const response = await fetch(`${BASE_URL}/cart/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    accesstoken: AccessToken,
                    Useraccesstoken: decryptedData.token,
                },
                body: formdata,
            });
            const responseJson = await response.json();
            if (responseJson.bstatus == 1) {
                setLoading(false);
                Toast.show(responseJson.message);
                if (type == "Redeem") {
                    navigation.navigate("MyCart", { pageTitle: "My Cart" });
                    setRelodecounter(relodecounter + 1);
                } else {
                    setRelodecounter(relodecounter + 1);
                }
            } else {
                setLoading(false);
                Toast.show(responseJson.message);
            }

        } catch (error) {
            //   alert(4);
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };



    function redeem() {
        AddToCard();
        navigation.navigate("MyCart", { pageTitle: "My Cart" });

    }


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={"Details"} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <HStack flexWrap="wrap" justifyContent="space-between" padding={5}>
                        <VStack style={[MainStyle.productbox, { width: '100%' }]} space={2}>
                            <Box style={MainStyle.productimagebig}>
                                <Image
                                    source={{ uri: mypropsdata.productimage }}
                                    style={{ width: '100%', height: 250 }}
                                    resizeMode="contain"
                                />

                            </Box>


                            <Text fontWeight="bold" fontSize='sm' color={darkGrey}>{route.params.productname}</Text>
                            <HStack justifyContent="space-between" marginY={3}>
                                <Text fontWeight="bold" fontSize='lg' color={darkColor}>{mypropsdata.pricePoint ? mypropsdata.pricePoint : ""} {t("Points")}</Text>
                                <HStack justifyContent="space-between" space={2} paddingX={4} paddingY={1} borderColor={lightGrey} borderWidth={1} borderRadius={4}>
                                    <Text fontSize='xs' color={darkGrey}>{t("Available Points")}:</Text>
                                    <Text fontWeight="bold" fontSize='xs' color={darkColor}>{mypropsdata.availablepoint ? mypropsdata.availablepoint : ""}</Text>
                                </HStack>
                            </HStack>
                            <Stack marginY={3}>
                                <Pressable onPress={() => setStep1(!step1)}>
                                    <HStack justifyContent="space-between" alignItems="center" backgroundColor={lightGrey} position="relative" borderRadius={6} overflow="hidden">
                                        <Text color={darkColor} fontSize="sm" fontFamily={fontBold} marginLeft={3}>{t("Description")}</Text>
                                        <Stack style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 36, paddingHorizontal: 12 }]} variant="unstyled">
                                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="2xl" lineHeight={32}>{step1 ? "-" : "+"}</Text>
                                        </Stack>
                                    </HStack>
                                </Pressable>
                                {step1 && (
                                    <Stack padding={3}>

                                        {route.params.detaildata ? (
                                            <RenderHtml
                                                contentWidth={400}
                                                source={{ html: route.params.detaildata ? route.params.detaildata : "" }}
                                                tagsStyles={{
                                                    body: { color: 'black' }, // Applies the color black to all text in the body tag
                                                }}
                                            />
                                        ) : (
                                            ""
                                        )}



                                    </Stack>
                                )}
                            </Stack>
                            <Stack marginY={3}>
                                <Pressable onPress={() => setStep2(!step2)}>
                                    <HStack justifyContent="space-between" alignItems="center" backgroundColor={lightGrey} position="relative" borderRadius={6} overflow="hidden">
                                        <Text color={darkColor} fontSize="sm" fontFamily={fontBold} marginLeft={3}>{t("Specification")}</Text>
                                        <Stack style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 36, paddingHorizontal: 12 }]} variant="unstyled">
                                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="2xl" lineHeight={32}>{step2 ? "-" : "+"}</Text>
                                        </Stack>
                                    </HStack>
                                </Pressable>
                                {step2 && (
                                    <Stack padding={3}>



                                        <View>
                                            {Object.entries(pdetails).map(([key, value], index) => (
                                                <Text key={index}>
                                                    {key}: {value}
                                                </Text>
                                            ))}
                                        </View>


                                    </Stack>
                                )}
                            </Stack>
                            <VStack marginTop={6} space={2}>
                                <Button style={[MainStyle.outlinebtn, { backgroundColor: '#ffffff' }]} onPress={() => AddToCard("Redeem")}>
                                    <Text color={baseColor} fontFamily={fontSemiBold} fontSize="sm">{t("Redeem Now")}</Text>
                                </Button>
                                <Button style={MainStyle.solidbtn} onPress={() => AddToCard("Add")}>
                                    <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Add to Cart")}</Text>
                                </Button>
                            </VStack>
                        </VStack>
                    </HStack>
                </ScrollView>
                {/* <FooterComponents navigation={navigation} component={userType} /> */}
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

export default ProductDetailsScreen;