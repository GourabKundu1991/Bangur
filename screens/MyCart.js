import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
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
const MyCartScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [pageData, setPageData] = React.useState("");
    const [mycardData, setMycardData] = React.useState("");
    const [quantities, setQuantities] = React.useState("");
    const [forrelode, setForRelode] = React.useState("");
    const [cartcount, setCartCount] = React.useState("");
    const [userType, setUserType] = React.useState("");

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
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData();
            Mycart();
        });
        return unsubscribe;
    }, []);

    useEffect(() => {


        Mycart();


    }, [forrelode]);

    useEffect(() => {
        if (mycardData) {
        }
    }, [mycardData.row_items]); // Dependency array: triggers effect when `mycardData` changes



    const getAllData = () => {
        let formdata = new FormData();
        formdata.append("contentCode", "About-Program_1");
        fetch(`${BASE_URL}/get-general-content`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'accesstoken': `${AccessToken}`,
            },
            body: formdata
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("33354Content:", responseJson);
                if (responseJson.bstatus == 1) {
                    setLoading(false);
                    setPageData(responseJson.content_details.article_detail);
                } else {
                    setLoading(false);
                    //Toast.show(responseJson.message, Toast.LONG);
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
    }


    const Mycart = async () => {
        try {
            setLoading(true);

            // Retrieve and decrypt token
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

            // Prepare FormData
            const formdata = new FormData();
            formdata.append("prod_id", "sampleProductID"); // Replace with actual product ID
            formdata.append("quantity", "1"); // Replace with actual quantity

            // console.log("FormData:", formdata);

            // Make API call
            const response = await fetch(`${BASE_URL}/cart/my-cart`, {
                method: 'POST',
                headers: {
                    accesstoken: AccessToken,
                    Useraccesstoken: decryptedData.token,
                },
                body: formdata,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);

            }

            const responseJson = await response.json();
            //  alert(responseJson.bstatus)
            if (responseJson.bstatus == 1) {
                setMycardData(responseJson)
                // Toast.show(responseJson.message);
            }
            else {
                setMycardData("")
                Toast.show(responseJson.message);
            }

        }
        catch (error) {
            console.error("Error in Mycart33333r:", error);
        } finally {
            setLoading(false);
        }
    };







    const DeLeteFunction = async (cardid, pruductid) => {
        try {
            setLoading(true);

            // Retrieve and decrypt token
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
            console.log("tokennnnnnnnnnnnnnnnnnnnnnnnn", decryptedData)
            // Prepare FormData
            const formdata = new FormData();
            formdata.append("cart_id", cardid); // Replace with actual product ID
            formdata.append("product_id", pruductid); // Replace with actual quantity

            console.log("FormData:", formdata);

            // Make API call
            const response = await fetch(`${BASE_URL}/cart/remove`, {
                method: 'POST',
                headers: {
                    accesstoken: AccessToken,
                    Useraccesstoken: decryptedData.token,
                },
                body: formdata,
            });
            console.log("2222222222222222", formdata)
            Mycart()
            cartCount()//new add
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseJson = await response.json();
            //  alert(responseJson.bstatus)
            if (responseJson.bstatus == 1) {
                getAllData()
                setMycardData("")
                //   setMycardData(responseJson)
            }
            else {
                setMycardData("")
                Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
            }
            //   alert(JSON.stringify(responseJson))
            console.log("44444444444444444 Response:", JSON.stringify(responseJson));

        } catch (error) {
            console.error("Error in Mycart 222:", error);
        } finally {
            setLoading(false);
        }
    };

    const incrementAndDecrement = async (product, qtd, cartid) => {
        if (qtd < 1) {
            DeLeteFunction(cartid, product)

        }
        try {
            setLoading(true);

            // Retrieve and decrypt token
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
            formdata.append("product_id", product); // Replace with actual product ID
            formdata.append("quantity", qtd); // Replace with actual quantity
            formdata.append("cart_id", cartid);

            // Make API call
            const response = await fetch(`${BASE_URL}/cart/update-quantity`, {
                method: 'POST',
                headers: {
                    accesstoken: AccessToken,
                    Useraccesstoken: decryptedData.token,
                },
                body: formdata,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseJson = await response.json();
            Toast.show(responseJson.message);
            if (responseJson.bstatus == 1) {
                setForRelode(forrelode + 1)

            }
        }
        catch (error) {
            console.error("Error in Mycart111111:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack flexWrap="wrap" justifyContent="space-between" padding={5}>

                        {mycardData ?
                            (
                                mycardData.row_items.map((item, index) => (
                                    <HStack key={index} space={3} borderColor={lightGrey} borderBottomWidth={1} paddingY={4}>
                                        <Box style={[MainStyle.productimage, { width: '40%', height: 90, borderColor: greyColor, borderWidth: 1 }]}>
                                            <Image
                                                source={{ uri: item.baseUrl + item.productImage[0].product_image }}
                                                style={{ width: '100%', height: 90 }}
                                                resizeMode="contain"
                                            />

                                        </Box>
                                        <VStack style={{ width: '55%' }} space={1}>
                                            <Text fontSize="xs" color={darkGrey}>
                                                {item.productName}
                                            </Text>
                                            <Text fontWeight="bold" fontSize="sm" color={darkColor}>{item.pricePoints} {t("Points")}</Text>
                                            <Pressable onPress={() => DeLeteFunction(item.cart_id, item.product_id)}>
                                                <HStack alignItems="center" marginTop={2} space={1}>
                                                    <Icon name="trash-outline" size={18} color={dangerColor} />
                                                    <Text fontWeight="bold" fontSize="xs" color={dangerColor}>
                                                        {t("Remove")}
                                                    </Text>
                                                </HStack>

                                            </Pressable>
                                            <HStack alignItems="center" marginTop={2} space={1}>
                                                <TouchableOpacity
                                                    onPress={() => incrementAndDecrement(item.product_id, parseInt(item.quantity) - 1, item.cart_id)} // Use an arrow function to pass the arguments
                                                >
                                                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'darkgrey' }}>-</Text>
                                                </TouchableOpacity>
                                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'darkgrey' }}>{item.quantity ? item.quantity : ""} {/* Display current quantity or 0 */}</Text>

                                                <TouchableOpacity
                                                    onPress={() => incrementAndDecrement(item.product_id, parseInt(item.quantity) + 1, item.cart_id)} // Use an arrow function to pass the arguments
                                                >
                                                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'darkgrey' }}>+</Text>
                                                </TouchableOpacity>
                                            </HStack>





                                        </VStack>
                                    </HStack>
                                ))
                            ) : (
                                <Text>{t("No product available for redemption")}</Text> // Fallback when no products are found
                            )}

                    </VStack>
                </ScrollView>
                <Stack backgroundColor={lightColor} width={'94%'} alignSelf="center" padding={5}>

                    {mycardData.bstatus == 1 ?
                        <Stack backgroundColor={lightGrey} borderColor={greyColor} borderWidth={1} borderRadius={6} overflow={'hidden'} padding={3} space={1}>
                            <HStack justifyContent="space-between" alignItems="center">
                                <Text fontFamily={fontSemiBold} fontSize='sm' color={darkColor}>{t("Redeem Points")}</Text>
                                <Text fontWeight="bold" fontSize='sm' color={baseColor}>{mycardData != "" ? mycardData.control.grandtotal_in_point : ""} Points</Text>
                            </HStack>
                            <HStack justifyContent="space-between" alignItems="center">
                                <Text fontFamily={fontSemiBold} fontSize='sm' color={darkColor}>{t("Available Points")}</Text>
                                <Text fontWeight="bold" fontSize='sm' color={baseColor}>{mycardData != "" ? mycardData.available_point : ""} Points</Text>
                            </HStack>
                        </Stack>
                        :
                        ""
                    }
                    {mycardData.bstatus == 1 ?
                        <VStack marginTop={6} space={2}>
                            <Button style={MainStyle.solidbtn} onPress={() => {
                                if (mycardData?.control?.cart_id) {
                                    navigation.navigate('Address', { "cardid": mycardData.control.cart_id, "name": mycardData.row_items[0].productName });
                                } else {
                                    // console.warn("cart_id is missing!");
                                    alert("cart_id is missing!")
                                }
                            }}
                            >
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Redeem Now")}</Text>
                            </Button>
                        </VStack>
                        :
                        ""
                    }



                </Stack>

            </VStack>


            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
            <FooterComponents navigation={navigation} component={userType} cartcount={cartcount} />
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
});

export default MyCartScreen;