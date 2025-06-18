import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, BASE_URL, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import RenderHTML from 'react-native-render-html';

const DeleteAccountScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [pageData, setPageData] = React.useState("");

    const [delText, setDelText] = React.useState("");

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem('accountDeleteText').then(val => {
                if (val != null) {
                    setDelText(JSON.parse(val));
                }
            });
        });
        return unsubscribe;
    }, []);

    const onDel = () => {
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                fetch(`${BASE_URL}/delete-account`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },
                    body: ""
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("Delete:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            Toast.show(responseJson.message);
                            AsyncStorage.clear();
                            navigation.replace('Intro');
                        } else {
                            setLoading(false);
                            Toast.show(responseJson.message);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log("Error:", error);
                    });
            }
        })
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={7} padding={6} marginY={30}>
                        <Text mb={3} color={warningColor} fontFamily={fontBold} fontSize="2xl" textAlign="center">{t("Warning")} !</Text>
                        <Text color={darkColor} fontFamily={fontBold} fontSize="lg" textAlign="center">{delText}</Text>
                    </VStack>
                    <VStack padding={8} space={5} backgroundColor={"#eeeeee"}>
                        <Text color={darkColor} fontFamily={fontBold} fontSize="md" textAlign="center">{t('Are you sure want to delete your account')}?</Text>
                        <HStack padding={3} justifyContent="space-between" alignItems="center" backgroundColor={baseSemiColor}>
                            <Button size="xs" style={[MainStyle.solidbtn, { width: '48%', backgroundColor: darkGrey, height: 37 }]} onPress={() => navigation.goBack()}>
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Back")}</Text>
                            </Button>
                            <Button size="xs" style={[MainStyle.solidbtn, { width: '48%', backgroundColor: dangerColor, height: 37 }]} onPress={() => onDel()}>
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Confirm")}</Text>
                            </Button>
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

export default DeleteAccountScreen;