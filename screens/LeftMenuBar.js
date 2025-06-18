import { Avatar, Box, Button, HStack, NativeBaseProvider, Pressable, Stack, Text, VStack, View } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Image, ImageBackground, Linking, ScrollView, StyleSheet } from 'react-native';
import Events from '../auth_provider/Events';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { MainStyle, baseColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, warningColor } from '../assets/MainStyle';
import { AccessToken, BASE_URL } from '../auth_provider/Config';

const LeftMenuBarScreen = ({ navigation }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [mainMenu, setMainMenu] = React.useState([]);
    const [userData, setUserData] = React.useState("");
    const [state, setState] = React.useState("");
    const [points, setPoints] = React.useState("");

    const [token, setToken] = React.useState("");

    useEffect(() => {
        Events.subscribe('mainMenu', (data) => {
            setMainMenu(data);
        });
        Events.subscribe('profileData', (data) => {
            setUserData(data.profile);
            setPoints(data.available_point);
            setState(data.profile.address[0].state);
        });
        Events.subscribe('points', (data) => {
            setPointData(data);
        });
        Events.subscribe('token', (data) => {
            setToken(data);
        });
    }, []);

    const onLogout = () => {
        console.log(token);
        console.log(`${AccessToken}`);
        Alert.alert(
            t("Alert"),
            t("Are you sure to logout") + "?",
            [
                {
                    text: t("Cancel"),
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: t("Yes"), onPress: () => {
                        setLoading(true);
                        fetch(`${BASE_URL}/log-out`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                'accesstoken': `${AccessToken}`,
                                'Useraccesstoken': token
                            },
                            body: ""
                        })
                            .then((response) => response.json())
                            .then((responseJson) => {
                                setLoading(false);
                                console.log("Logout:", responseJson);
                                navigation.closeDrawer();
                                AsyncStorage.clear();
                                navigation.navigate('Intro');
                            })
                            .catch((error) => {
                                setLoading(false);
                                console.log("Error:", error);
                            });
                    }
                }
            ],
            { cancelable: false }
        );
    }

    return (
        <NativeBaseProvider>
            <ImageBackground backgroundColor={"#091571"} source={require('../assets/images/bg.png')} imageStyle={{ resizeMode: 'cover', bottom: 0, top: 0, opacity: 1, width: '100%', height: 250 }}>
                <VStack alignItems="center" justifyContent="center" paddingX="5" paddingY="5">
                    <Box marginY={2} borderColor={lightColor} borderWidth={3} borderRadius={50}>
                        <Avatar borderColor={baseColor} resizeMode="contain" borderWidth="4" size="75" source={userData.profile_image == "" ? require('../assets/images/avatar.png') : { uri: userData.profile_image }}></Avatar>
                    </Box>
                    <Text color={lightColor} fontSize="md" fontFamily={fontSemiBold}>{userData.name}</Text>
                    <HStack space={2} alignItems="center">
                        <Text color={lightGrey} fontSize="xs" fontFamily={fontRegular}>{t("Member Id")}:</Text>
                        <Text color={lightColor} fontSize="xs" fontFamily={fontRegular}>{userData.userCode}</Text>
                    </HStack>
                    <HStack space={2} alignItems="center" marginTop={2}>
                        <HStack alignItems="center">
                            <Icon name="call-outline" size={14} color={lightGrey} />
                            <Text color={lightColor} fontSize="xs" fontFamily={fontSemiBold}> {userData.mobile}</Text>
                        </HStack>
                        <Text color={lightColor}>|</Text>
                        <HStack alignItems="center">
                            <Icon name="location-outline" size={14} color={lightGrey} />
                            <Text color={lightColor} fontSize="xs" fontFamily={fontSemiBold}> {state}</Text>
                        </HStack>
                    </HStack>
                </VStack>
                {userData.contactHier == "Influencer" && (
                    <Box backgroundColor={lightColor} width="100%" borderTopRightRadius={40} overflow="hidden" paddingX={5} paddingTop={7}>
                        <Text color={darkGrey} fontSize="xs" fontFamily={fontRegular}> {t("Point Balance")}</Text>
                        <Text color={darkColor} fontSize="xl" fontFamily={fontBold}> {points}</Text>
                        <Button onPress={() => navigation.navigate("Rewards", { pageTitle: t("Rewards Store") })} size="xs" style={[MainStyle.solidbtn, { height: 40, marginTop: 10 }]}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Redeem Now")}</Text>
                        </Button>
                    </Box>
                )}
            </ImageBackground>
            <ScrollView backgroundColor={lightColor}>
                <Stack paddingX={5} paddingTop={7}>
                    {mainMenu.map((item, index) =>
                        <Pressable key={index} onPress={() => navigation.navigate(item.url, { pageTitle: item.title })} paddingY={2} borderBottomWidth={1} borderColor={lightGrey}>
                            <HStack space={3} alignItems="center">
                                <Icon name={item.icon} size={18} color={darkColor} />
                                <Text color={darkColor} fontSize="sm" fontFamily={fontSemiBold}>{item.title}</Text>
                            </HStack>
                        </Pressable>
                    )}
                    <Pressable onPress={() => onLogout()} paddingY={2}>
                        <HStack space={3} alignItems="center">
                            <Icon name="power" size={18} color={darkColor} />
                            <Text color={darkColor} fontSize="sm" fontFamily={fontSemiBold}>{t("Logout")}</Text>
                        </HStack>
                    </Pressable>
                </Stack>
            </ScrollView>
            <HStack alignItems="center" justifyContent="space-between" padding={5} marginTop={2}>
                <VStack>
                    <Image source={require('../assets/images/logo.jpg')} style={{ width: 65, height: 33, resizeMode: 'contain' }} />
                    <Text color={baseColor} textAlign="center" fontSize="9" fontFamily={fontBold}>Nirman Mitra</Text>
                </VStack>
                <Pressable onPress={() => navigation.navigate("TermsConditions")} style={{ borderColor: darkColor, borderBottomWidth: 0.5 }}>
                    <Text color={darkColor} fontSize="xs" fontFamily={fontBold}> {t("T&C and Privacy Policy")}</Text>
                </Pressable>
            </HStack>
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    icon: { width: 60, height: 60, resizeMode: 'cover' },
    okbtn: { backgroundColor: '#f9d162', borderRadius: 50, overflow: 'hidden', width: '80%', justifyContent: 'center', alignItems: 'center', height: 45 },
    spincontainer: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' },
});

export default LeftMenuBarScreen;