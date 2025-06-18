import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, BASE_URL } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import RenderHTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/Ionicons';

const TransactionScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [pageData, setPageData] = React.useState("");

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
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={3} padding={5}>
                        <Image source={require('../assets/images/trans.png')} style={{ width: '100%', height: 250, resizeMode: 'contain', position: 'relative' }} />
                        <VStack space={3}>
                            <Pressable onPress={() => navigation.navigate("PurchaseHistory", { pageTitle: "Purchase History" })}>
                                <HStack padding={3} justifyContent="space-between" alignItems="center" backgroundColor={baseLightColor} position="relative" borderColor={baseColor} borderLeftWidth={5} borderLeftRadius={6} overflow="hidden">
                                    <VStack>
                                        <Text color={darkColor} fontSize="sm" fontFamily={fontBold}>{t("Purchase History")}</Text>
                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Check Now")}</Text>
                                    </VStack>
                                    <View style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 40, width: 40, paddingHorizontal: 7, borderRadius: 6 }]} variant="unstyled">
                                        <Text color={lightColor} fontFamily={fontSemiBold} lineHeight={38}><Icon style={{ fontSize: 25 }} name="arrow-forward-outline"></Icon></Text>
                                    </View>
                                </HStack>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate("MyPoints", { pageTitle: "Points History" })}>
                                <HStack padding={3} justifyContent="space-between" alignItems="center" backgroundColor={baseLightColor} position="relative" borderColor={baseColor} borderLeftWidth={5} borderLeftRadius={6} overflow="hidden">
                                    <VStack>
                                        <Text color={darkColor} fontSize="sm" fontFamily={fontBold}>{t("Points History")}</Text>
                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Check Now")}</Text>
                                    </VStack>
                                    <View style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 40, width: 40, paddingHorizontal: 7, borderRadius: 6 }]} variant="unstyled">
                                        <Text color={lightColor} fontFamily={fontSemiBold} lineHeight={38}><Icon style={{ fontSize: 25 }} name="arrow-forward-outline"></Icon></Text>
                                    </View>
                                </HStack>
                            </Pressable>
                        </VStack>
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

export default TransactionScreen;