import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Pressable, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Events from '../auth_provider/Events';
import { MainStyle, baseColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import Toast from 'react-native-simple-toast';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const MyProfileScreen = ({ navigation }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [profileData, setProfileData] = React.useState("");
    const [addressData, setAddressData] = React.useState("");
    const [workingAddressData, setWorkingAddressData] = React.useState("");

    const [profilePic, setProfilePic] = React.useState("");
    const { isOpen, onOpen, onClose } = useDisclose();

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const today = new Date();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData();
        });
        return unsubscribe;
    }, []);

    const getAllData = () => {
          AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                fetch(`${BASE_URL}/view-profile`, {
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
                        setLoading(false);
                       // console.log("Ami Porashona korchi naa: ", JSON.parse(decryptData).user_type);
                        console.log("profile:", JSON.stringify(responseJson));
                        if (responseJson.bstatus == 1) {
                            //Events.publish('profileData', responseJson.profile);
                            setProfileData(responseJson.profile);
                            setAddressData(responseJson.profile.address[0]);
                            if (responseJson.profile.working_address != null) {
                                setWorkingAddressData(responseJson.profile.working_address);
                            }
                        } else {
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
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.replace('Intro');
            }
        });
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        hideDatePicker();
        profileUpdate("", date);
    };

    const openProfilePicker = (type) => {
        onClose();
        if (type == "library") {
            launchImageLibrary(
                {
                    mediaType: 'photo',
                    includeBase64: true,
                    maxHeight: 1500,
                    maxWidth: 1500,
                },
                (response) => {
                    //console.log(response);
                    if (response.assets != undefined) {
                        profileUpdate(response.assets[0].base64, "");
                    }
                },
            )
        } else if (type == "camera") {
            launchCamera(
                {
                    mediaType: 'photo',
                    includeBase64: true,
                    maxHeight: 1500,
                    maxWidth: 1500,
                },
                (response) => {
                    //console.log(response.assets);
                    if (response.assets != undefined) {
                        profileUpdate(response.assets[0].base64, "");
                    }
                },
            )
        }
    }

   

    const profileUpdate = (imageVal, dateVal) => {
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("profile_image", (imageVal != "" ? imageVal : ""));
                formdata.append("aniversery_date", (dateVal != "" ? moment(dateVal).format('YYYY-MM-DD') : ""));
                fetch(`${BASE_URL}/profile-update`, {
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
                        setLoading(false);
                        //console.log("Profile Update:", responseJson);
                        if (responseJson.bstatus == 1) {
                            getAllData();
                        } else {
                            Toast.show(responseJson.message, Toast.LONG);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            }
        })
       
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={t("My Profile")} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <HStack alignItems="center" justifyContent="space-between" paddingX={8} paddingY={8}>
                        <HStack space={4} alignItems="center" justifyContent="space-between">
                            <Box position="relative">
                                <Avatar borderColor={lightGrey} resizeMode="contain" borderWidth="2" size="75" source={profileData.profile_image == "" ? require('../assets/images/avatar.png') : { uri: profileData.profile_image }}></Avatar>
                                <Pressable onPress={onOpen} style={{ backgroundColor: baseColor, height: 30, width: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 30, position: 'absolute', bottom: -5, left: 0 }}>
                                    <Icon name="camera-outline" size={18} color={lightColor} />
                                </Pressable>
                                <Actionsheet isOpen={isOpen} onClose={onClose}>
                                    <Actionsheet.Content>
                                        <Text color="#666666" fontSize="md" textAlign="center">{t("Select Image Source")}</Text>
                                        <Actionsheet.Item onPress={() => openProfilePicker("library")}>{t("Load from Library")}</Actionsheet.Item>
                                        <Actionsheet.Item onPress={() => openProfilePicker("camera")}>{t("Use Camera")}</Actionsheet.Item>
                                        <Actionsheet.Item onPress={() => openProfilePicker("cancel")}>{t("Cancel")}</Actionsheet.Item>
                                    </Actionsheet.Content>
                                </Actionsheet>
                            </Box>
                            <VStack justifyContent="center" width={'70%'}>
                                <Text color="#111111" fontSize="15" fontFamily={fontBold}>{profileData.name}</Text>
                                <HStack space={2} alignItems="center">
                                    <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Member Id")}:</Text>
                                    <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{profileData.userCode}</Text>
                                </HStack>
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{profileData.contactHier}</Text>
                            </VStack>
                        </HStack>
                    </HStack>
                    <Stack space={5} paddingX={8} paddingBottom={8} paddingTop={2}>
                        <VStack style={MainStyle.inputbox} padding={3} space={2}>
                            <Text style={[MainStyle.lable, { color: darkColor, fontFamily: fontBold }]} fontSize="xs">{t("Personal Details")}</Text>
                            <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Mobile Number")}:</Text>
                                <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{profileData.mobile}</Text>
                            </HStack>
                            <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Date of Birth")}:</Text>
                                <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{profileData.dob}</Text>
                            </HStack>
                            <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Gender")}:</Text>
                                <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{profileData.gender}</Text>
                            </HStack>
                            {/* <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Date of Anniversary")}:</Text>
                                {profileData.anniversary == "N/A" ?
                                    <Pressable style={[MainStyle.solidbtn, { backgroundColor: warningColor, height: 30, paddingHorizontal: 15 }]} variant="unstyled" onPress={() => showDatePicker()}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm" lineHeight={29}>{t("Edit")}</Text>
                                    </Pressable>
                                    :
                                    <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{moment(profileData.anniversary).format('DD MMM, YYYY')}</Text>
                                }
                            </HStack>
                            <DateTimePickerModal maximumDate={today} isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} /> */}
                        </VStack>
                        <VStack style={MainStyle.inputbox} padding={3} space={2}>
                            <Text style={[MainStyle.lable, { color: darkColor, fontFamily: fontBold }]} fontSize="xs">{t("Permanent Address")}</Text>
                            <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Address")}:</Text>
                                <Text width={180} color={baseColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{addressData.line1}</Text>
                            </HStack>
                            <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Pincode")}:</Text>
                                <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{addressData.post_code}</Text>
                            </HStack>
                            <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("District")}:</Text>
                                <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{addressData.city}</Text>
                            </HStack>
                            <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("State")}:</Text>
                                <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{addressData.state}</Text>
                            </HStack>
                        </VStack>
                        {workingAddressData != "" && (
                            <VStack style={MainStyle.inputbox} padding={3} space={2}>
                                <Text style={[MainStyle.lable, { color: darkColor, fontFamily: fontBold }]} fontSize="xs">{t("Working Address")}</Text>
                                <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                    <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Address")}:</Text>
                                    <Text width={180} color={baseColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{workingAddressData.line1}</Text>
                                </HStack>
                                <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                    <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Pincode")}:</Text>
                                    <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{workingAddressData.post_code}</Text>
                                </HStack>
                                <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                    <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("District")}:</Text>
                                    <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{workingAddressData.city}</Text>
                                </HStack>
                                <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                    <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("State")}:</Text>
                                    <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{workingAddressData.state}</Text>
                                </HStack>
                            </VStack>
                        )}
                        <VStack style={MainStyle.inputbox} padding={3} space={2}>
                            <Text style={[MainStyle.lable, { color: darkColor, fontFamily: fontBold }]} fontSize="xs">{t("KYC Details")}</Text>
                            <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Status")}:</Text>
                                <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{profileData.kyc_status}</Text>
                            </HStack>
                            {profileData.aadhaar_number != "N/A" && (
                            <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Aadhaar Number")}:</Text>
                                <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{profileData.aadhaar_number}</Text>
                            </HStack>
                            )}
                            {profileData.pan_number != "N/A" && (
                            <HStack backgroundColor={lightGrey} borderRadius={6} alignItems="center" justifyContent="space-between" padding="2">
                                <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("PAN Number")}:</Text>
                                <Text color={baseColor} fontSize="xs" fontFamily={fontBold}>{profileData.pan_number}</Text>
                            </HStack>
                            )}
                        </VStack>
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

export default MyProfileScreen;