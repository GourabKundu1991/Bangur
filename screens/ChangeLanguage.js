import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, BASE_URL } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import RenderHTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/Ionicons';
import i18n from '../assets/language/i18n';

const ChangeLanguageScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [pageData, setPageData] = React.useState("");

    const [currentLanguage, setLanguage] = React.useState('Eng');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData();
        });
        return unsubscribe;
    }, []);

    const getAllData = () => {
        let formdata = new FormData();
        formdata.append("contentCode", "Terms-and-Conditions_22");
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

    const onSaveLang = () => {
        AsyncStorage.setItem('language', currentLanguage);
        i18n.changeLanguage(currentLanguage)
            .then(() => setLoading(true))
            .catch(err => console.log(err));
        setTimeout(function () {
            setLoading(false);
        }, 500);
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <Stack padding={8} space={5}>
                        <View>
                            <Text style={MainStyle.lable} fontSize="xs">{t("Language")} <Text color={dangerColor}>*</Text></Text>
                            <View style={MainStyle.inputbox}>
                                <Select variant="unstyled" size="md" height={43}
                                    selectedValue={currentLanguage}
                                    onValueChange={value => setLanguage(value)}
                                    style={{ paddingLeft: 15 }}
                                    fontFamily={fontRegular}
                                    dropdownCloseIcon={<Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />}
                                    dropdownOpenIcon={<Icon name="chevron-up-outline" style={{ marginRight: 10 }} size={20} />}
                                    _selectedItem={{
                                        backgroundColor: greyColor,
                                        endIcon: <Icon name="checkmark-circle" size={20} color={successColor} style={{ right: 0, position: 'absolute' }} />
                                    }}>
                                    <Select.Item label="English" value="Eng" />
                                    <Select.Item label="Hindi" value="Hn" />
                                    <Select.Item label="Telugu" value="Te" />
                                    <Select.Item label="Tamil" value="Ta" />
                                    <Select.Item label="Malayalam" value="Ml" />
                                    <Select.Item label="Kannada" value="Kn" />
                                </Select>
                            </View>
                        </View>
                        <Button style={MainStyle.solidbtn} marginTop={10} onPress={() => onSaveLang()}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Save")}</Text>
                        </Button>
                    </Stack>
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

export default ChangeLanguageScreen;