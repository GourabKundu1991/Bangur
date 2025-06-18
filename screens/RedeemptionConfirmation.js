import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, BASE_URL } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const RedeemptionConfirmationScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [pageData, setPageData] = React.useState("");

    const [mobileNumber, setMobileNumber] = React.useState('');
    const [forMobileOTP, setForMobileOTP] = React.useState(false);
    const [otpMobileValue, setOtpMobileValue] = React.useState('');

    const [successPop, setSuccessPop] = React.useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData();
        });
        return unsubscribe;
    }, []);

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
                //console.log("Content:", responseJson);
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
    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={"Confirmation"} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack padding={5}>
                        <Text color={darkColor} fontWeight="bold" fontSize='lg' marginBottom={3}>{t("Redeemption Confirmation")}</Text>
                        <Text color={darkGrey} fontFamily={fontSemiBold} fontSize='xs'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</Text>
                        <Stack space={3} marginTop={7}>
                            <View>
                                <Text style={MainStyle.lable} fontSize="xs">{t("Mobile Number")} <Text color={dangerColor}>*</Text></Text>
                                <View style={MainStyle.inputbox}>
                                    <Input height={43} fontFamily={fontRegular} size="md" variant="unstyled" keyboardType='number-pad' maxLength={10} onChangeText={(text) => setMobileNumber(text)} placeholder={t("Please Enter Mobile Number")} />
                                </View>
                            </View>
                            <View>
                                <Text style={MainStyle.lable} fontSize="xs">{t("OTP")} <Text color={darkGrey} fontSize="10">({t("To Verify Mobile No.")})</Text> <Text color={dangerColor}>*</Text></Text>
                                <HStack justifyContent="space-between">
                                    <View style={[MainStyle.inputbox, { width: 180 }]}>
                                        <Input fontFamily={fontBold} size="xl" letterSpacing="5" variant="unstyled" onChangeText={(text) => setOtpMobileValue(text)} keyboardType='number-pad' maxLength={6} />
                                    </View>
                                    <Button variant="unstyled" onPress={() => sendOtp()}>
                                        <Text color={baseColor} fontFamily={fontSemiBold} fontSize="sm">{t("Resend")}</Text>
                                    </Button>
                                </HStack>
                            </View>
                        </Stack>
                    </VStack>
                </ScrollView>
                <Stack backgroundColor={lightColor} width={'94%'} alignSelf="center" padding={5}>
                    <VStack marginTop={6} space={2}>
                        <Button style={MainStyle.solidbtn} onPress={() => setSuccessPop(true)}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Confirm")}</Text>
                        </Button>
                    </VStack>
                </Stack>
            </VStack>
            {successPop && (
                <View style={MainStyle.spincontainer}>
                    <VStack style={MainStyle.popbox} space={10}>
                        <Image source={require('../assets/images/check-green.gif')} alt="check" style={{ width: 100, height: 100, resizeMode: 'contain', position: 'relative', marginTop: 30 }} />
                        <Image source={require('../assets/images/logo.jpg')} alt="logo" style={MainStyle.logo} />
                        <VStack justifyContent="center" alignItems="center">
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{t("Thank you. Your order has been successfully Placed")}</Text>
                        </VStack>
                        <Stack width={'100%'} space={3}>
                            <Button style={MainStyle.solidbtn} onPress={() => navigation.replace("Home")}>
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Go Back")}</Text>
                            </Button>
                        </Stack>
                    </VStack>
                </View>
            )}
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

export default RedeemptionConfirmationScreen;