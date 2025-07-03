import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, BASE_URL} from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import RenderHTML from 'react-native-render-html';

const GalleryScreen = ({ navigation, route }) => {

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
                    <VStack space={10} padding={6} flex={1} justifyContent={'center'} alignItems={'center'}>
                        <Image source={require('../assets/images/comingsoon.jpg')} style={{ width: '100%', height: 350, resizeMode: 'contain', position: 'relative' }} />
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

export default GalleryScreen;