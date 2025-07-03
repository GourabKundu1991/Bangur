import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Actionsheet, useDisclose, Badge } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Pressable, ScrollView, TouchableOpacity, Image, StatusBar, Dimensions, StyleSheet, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseDarkColor, baseLightColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import Toast from 'react-native-simple-toast';
import apiClient from '../api/apiClient';




const GalleryScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const { width, height } = Dimensions.get('window');
    const [loading, setLoading] = React.useState(false);

    const [filterStatus, setFilterStatus] = React.useState(1);

    const [albums, setAlbums] = React.useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData(filterStatus);
            console.log("filterStatus: ", filterStatus);
            setFilterStatus(1);
        });
        return unsubscribe;
    }, []);

    const onSetFilter = (dataVal) => {
        setLoading(true);
        setFilterStatus(dataVal);
        getAllData(dataVal);
    }

    const getAllData = (type) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("contentType", type);
                console.log("formdata: ", formdata);
                apiClient
                    .post(`${BASE_URL}/get-gallery`, formdata, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            accesstoken: `${AccessToken}`,
                            Useraccesstoken: JSON.parse(decryptData).token
                        },
                    }).then(response => {
                        return response;
                    })
                    .then(responseJson => {
                        setLoading(false);
                        console.log("get-gallery:", JSON.stringify(responseJson.data));
                        if (responseJson.data.bstatus == 1) {
                            setAlbums(responseJson.data.gallery_list);
                        } else {
                            if (responseJson.data.msg_code == "msg_0047") {
                                AsyncStorage.clear();
                                navigation.replace('Login');
                            }
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("get-gallery Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.replace('Login');
            }
        });
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={10} padding={6}>
                        <HStack alignItems="center" justifyContent="space-evenly" space={3}>
                            <Button size="xs" borderColor={filterStatus == "1" ? baseColor : greyColor} style={{ width: '30%', borderBottomWidth: 3, backgroundColor: '#eeeeee' }} variant="link" _text={{ color: darkColor, fontSize: 12 }} onPress={() => onSetFilter("1")}>{t("Images")}</Button>
                            <Button size="xs" borderColor={filterStatus == "2" ? baseColor : greyColor} style={{ width: '30%', borderBottomWidth: 3, backgroundColor: '#eeeeee' }} variant="link" _text={{ color: darkColor, fontSize: 12 }} onPress={() => onSetFilter("2")}>{t("Videos")}</Button>
                            <Button size="xs" borderColor={filterStatus == "3" ? baseColor : greyColor} style={{ width: '30%', borderBottomWidth: 3, backgroundColor: '#eeeeee' }} variant="link" _text={{ color: darkColor, fontSize: 12 }} onPress={() => onSetFilter("3")}>{t("Documents")}</Button>
                        </HStack>
                        <HStack flexWrap="wrap" justifyContent={'space-between'} alignItems={'center'}>
                            {albums.map((item, index) =>
                                <VStack key={index} backgroundColor={lightGrey} style={{ width: '48%', borderRadius: 10, overflow: 'hidden', marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("GalleryDetails", { albumId: item.id, albumType: item.contentType, albumName: item.name })}>
                                        <Image source={{ uri: item.display_image }} style={{ width: '100%', height: 100 }} resizeMode='cover' />
                                        <Stack backgroundColor={baseColor} padding={1}>
                                            <Text fontFamily={fontBold} fontSize='sm' color={lightColor} textAlign="center">{item.name}</Text>
                                        </Stack>
                                    </TouchableOpacity>
                                </VStack>
                            )}
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

export default GalleryScreen;