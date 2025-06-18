import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose, Modal } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions, Image, TextInput } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import RenderHTML from 'react-native-render-html';


const AddressVerificationScreen = ({ navigation, route }) => {

    const { addressData } = route.params;

    console.log("AddressData-> ", addressData);

    const { width } = useWindowDimensions();
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [pageData, setPageData] = React.useState("");
    const [message, SetMessage] = React.useState("");
    const [showRejectModal, setShowRejectModal] = React.useState(false);
    const [currentOrderId, setCurrentOrderId] = React.useState(null);
    const [rejectReason, setRejectReason] = React.useState('');
    const [rejectError, setRejectError] = React.useState(false);



    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(false);
            AsyncStorage.getItem('language').then(val => {
                if (val != null) {
                    setLanguage(val);
                    i18n
                        .changeLanguage(val)
                        .then(() => console.log(val))
                        .catch(err => console.log(err));
                }
            });
            // if (addressData.length > 0) {
            //     onVerifyAddress(addressData[0].dcm_order_id);
            //     onRejectAddress(addressData[0].dcm_order_id);
            // }
        });
        return unsubscribe;
    }, []);



    const onVerifyAddress = (orderID) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                // setUserType(JSON.parse(decryptData).user_type);

                let formdata = new FormData();
                formdata.append("order_id", orderID);
                formdata.append("status", "1");
                fetch(`${BASE_URL}/verify-address`, {
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
                        console.log("Response:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            SetMessage(responseJson.message);
                            // navigation.goBack();
                        } else {
                            setLoading(false);
                            //Toast.show(responseJson.message, Toast.LONG);
                            if (responseJson.msg_code == "msg_0046") {
                                AsyncStorage.clear();
                                navigation.replace('Login');
                            }
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            }
        });
    }

    const onRejectAddress = (orderID, rejectReason) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                // setUserType(JSON.parse(decryptData).user_type);

                let formdata = new FormData();
                formdata.append("order_id", orderID);
                formdata.append("status", "2");
                formdata.append("reason", rejectReason);
                fetch(`${BASE_URL}/verify-address`, {
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
                        console.log("Response:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            SetMessage(responseJson.message);
                            // navigation.goBack();
                        } else {
                            setLoading(false);
                            //Toast.show(responseJson.message, Toast.LONG);
                            if (responseJson.msg_code == "msg_0046") {
                                AsyncStorage.clear();
                                navigation.replace('Login');
                            }
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            }
        });
    }

    React.useEffect(() => {
        console.log("Message: ", message);
    }, [message]);

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={5} padding={2} width="100%" alignSelf="center">
                        {addressData.length > 0 ? (
                            addressData.map((item, index) => (
                                <HStack
                                    key={index}
                                    space={3}
                                    borderColor={'#ddd'}
                                    borderBottomWidth={1}
                                    marginLeft={2}
                                    paddingY={4}
                                    width="95%"
                                >
                                    <VStack width="100%">
                                        <HStack
                                            space={3}
                                            alignItems="flex-start"
                                            backgroundColor={'#f3f3f3'}
                                            padding={4}
                                            borderRadius={8}
                                            overflow="hidden"
                                            width="100%"
                                        >
                                            <VStack space={2} flex={1}>
                                                <Text fontSize="16" color={darkColor} fontFamily={fontBold}>
                                                    {t("Order ID")}: {item.dcm_order_id}
                                                </Text>
                                                <Text fontSize="16" color={darkColor}>
                                                    {t("Address")}: {item.address}
                                                </Text>
                                                <Text fontSize="16" color={darkColor}>
                                                    {item.state_name}, {item.city}, {item.post_code}
                                                </Text>
                                                <Text fontSize="16" color={darkColor}>
                                                    {t("Verification Reason")}:{" "}
                                                    {item.verification_reason?.trim() ? item.verification_reason : "NA"}
                                                </Text>

                                                {/* Action Buttons */}
                                                <HStack space={4} marginTop={2}>
                                                    <Button
                                                        flex={1}
                                                        style={MainStyle.solidbtn}
                                                        onPress={() => onVerifyAddress(item.dcm_order_id)}
                                                    >
                                                        <Text color={lightColor} fontFamily={fontBold} fontSize="18">
                                                            {t("Verify")}
                                                        </Text>
                                                    </Button>

                                                    <Button
                                                        flex={1}
                                                        style={[MainStyle.solidbtn, { backgroundColor: "red" }]}
                                                        onPress={() => {
                                                            setCurrentOrderId(item.dcm_order_id);
                                                            setRejectReason('');
                                                            setShowRejectModal(true);
                                                        }}
                                                    >
                                                        <Text color={lightColor} fontFamily={fontBold} fontSize="18">
                                                            {t("Reject")}
                                                        </Text>
                                                    </Button>
                                                </HStack>
                                            </VStack>
                                        </HStack>
                                    </VStack>
                                </HStack>
                            ))
                        ) : (
                            <Text>{t("No Address available")}</Text>
                        )}

                        <Modal isOpen={showRejectModal} onClose={() => setShowRejectModal(false)} size="lg">
                            <Modal.Content maxWidth="90%" width="90%" borderRadius="lg" paddingBottom="4" _dark={{ bg: "coolGray.800" }}>
                                <VStack space={3} px="5" pt="5">
                                    <Text fontSize="20" fontFamily={fontBold} color={darkColor}>
                                        {t("Reject Reason")}
                                    </Text>
                                    <Input placeholder={t("Type your reason here")} multiline numberOfLines={4}
                                        value={rejectReason}
                                        onChangeText={(text) => {
                                            setRejectReason(text);
                                            if (text.trim() !== "") setRejectError(false);
                                        }}
                                        textAlignVertical="top"
                                        fontSize="16"
                                        borderRadius="15"
                                        borderColor={rejectError ? "red.500" : "coolGray.300"}
                                        _focus={{ borderColor: rejectError ? "red.500" : baseColor }}
                                        padding={3}
                                        bg="white"
                                    />
                                    <HStack space={4} justifyContent="flex-end" marginTop={2}>
                                        <Button flex={1} variant="outline" borderColor={baseColor} borderRadius="10" _text={{ color: baseColor }}
                                            onPress={() => {
                                                setRejectError(false);
                                                setShowRejectModal(false);
                                            }}
                                        >
                                            {t("Cancel")}
                                        </Button>
                                        <Button flex={1} backgroundColor={baseColor} borderRadius="10" _text={{ color: lightColor }}
                                            onPress={() => {
                                                if (rejectReason.trim() === "") {
                                                    setRejectError(true);
                                                } else {
                                                    onRejectAddress(currentOrderId, rejectReason);
                                                    setShowRejectModal(false);
                                                    setRejectReason("");
                                                    setRejectError(false);
                                                }
                                            }}
                                        >
                                            {t("Submit")}
                                        </Button>
                                    </HStack>
                                </VStack>
                            </Modal.Content>
                        </Modal>
                    </VStack>
                </ScrollView>
                {message !== "" && (
                    <View style={MainStyle.spincontainer}>
                        <VStack style={MainStyle.popbox} space={10}>
                            <VStack justifyContent="center" alignItems="center">
                                <Image
                                    source={require('../assets/images/check-green.gif')}
                                    style={{ width: 90, height: 90, bottom: 10 }}
                                />
                                <Text color={darkColor} fontSize="16" fontFamily={fontBold} textAlign="center" style={{ bottom: 10 }}>
                                    {message}
                                </Text>
                            </VStack>
                            <Stack width={"100%"} space={3}>
                                <Button style={MainStyle.solidbtn} onPress={() => navigation.navigate("Home")}>
                                    <Text color={lightColor} fontFamily={fontSemiBold} fontSize="20" style={{ bottom: 5 }}>
                                        {t("Close")}
                                    </Text>
                                </Button>
                            </Stack>
                        </VStack>
                    </View>
                )}

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

export default AddressVerificationScreen;