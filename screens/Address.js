import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, Alert, Image, Keyboard, Pressable, ScrollView, StatusBar, StyleSheet, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-check-box';
import CryptoJS from 'crypto-js';
import FooterComponents from '../components/Footer';
import { useFocusEffect } from '@react-navigation/native';

const AddressScreen = ({ navigation, route }) => {
    const myroutdata = route.navigate;
    const { cardidd = 'No card ID provided' } = route.params || {};
    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [pageData, setPageData] = React.useState("");

    const [popAddress, setPopAddress] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState("");
    const [address1, setAddress1] = React.useState("");
    const [address2, setAddress2] = React.useState("");
    const [address3, setAddress3] = React.useState("");

    const [city, setCity] = React.useState("");
    const [pincode, setPinCode] = React.useState("");
    const [addressdata, setAddressData] = React.useState("");
    const [profiledata, setProfileData] = React.useState("");
    const [altPincode, setAltPincode] = React.useState('');
    const [currentLanguage, setLanguage] = React.useState('Eng');
    const [alldata, setAlldata] = React.useState('');
    const [cityid, setCityID] = React.useState('');
    const [stateId, setStateId] = React.useState('');


    const [cityname, setCityname] = React.useState('');

    const [cartcount, setCartCount] = React.useState("");
    const [userType, setUserType] = React.useState("");

    const [peraddress, setPerAddress] = React.useState("");
    const [workingaddress, setWorkingAddress] = React.useState("");
    const [altaddress, setAltAddress] = React.useState([]);


    const [addressid, setAddressid] = React.useState("");

    const [alladdressdata, setAlladdressdata] = React.useState("");
    const [cartid, setCartId] = React.useState(route.params.cardid);

    const [address, setAddress] = React.useState(route.params.name);

    const [tableName, setTableName] = React.useState("");


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData();
        });
        return unsubscribe;
    }, []);

    const countCart = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);

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
                        setCartCount(responseJson.cart_count);
                        setLoading(false);
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log("Error:", error);

                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Intro');
            }
        });
    }

    const getAllData = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {

                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);

                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                fetch(`${BASE_URL}/order/all-address`, {
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
                        console.log("Address:", JSON.stringify(responseJson));
                        if (responseJson.bstatus == 1) {
                            countCart();
                            setAlladdressdata(responseJson);
                            setPerAddress(responseJson.address_list.permanent_address.details[0]);
                            setWorkingAddress(responseJson.address_list.working_address.details[0]);
                            setAltAddress(responseJson.address_list.alternate_addresses.details);
                        } else {
                            Toast.show({ description: responseJson.message });
                            setTimeout(function () {
                                setLoading(false);
                                if (responseJson.msg_code == "msg_1000") {
                                    AsyncStorage.clear();
                                    navigation.navigate('Intro');
                                }
                            }, 1000);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Rewards Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Intro');
            }
        });
    }


    const handleCheckboxClick = (addressid, table) => {
        setAddressid(addressid);
        setTableName(table);
    };



    const OnShipingAddress = async (table) => {
        // try {
        const val = await AsyncStorage.getItem('userToken');
        const CryptoJS = require("crypto-js");
        const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
        let formdata = new FormData();

        formdata.append("add_address_line1", address1);
        formdata.append("add_address_line2", address2);
        formdata.append("add_address_line3", address3);
        formdata.append("add_state", stateId);
        formdata.append("add_city", cityid);
        formdata.append("add_pincode", pincode);

        const response = await fetch(`${BASE_URL}/order/add-ship-address`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'accesstoken': AccessToken,
                'Useraccesstoken': JSON.parse(decryptData).token
            },
            body: formdata
        });
        const responseJson = await response.json();
        console.log("order/add-ship-address", responseJson);
        if (responseJson.bstatus == 1) {
            await setAddressid(responseJson.address_id);
            navigation.navigate("RedeemsonOTP", { orderid: '', cartId: cartid, addressId: responseJson.address_id, address: address, tablename: table });
        }
    };



    const onSubmit = () => {
        const characterRegex = /^[a-zA-Z0-9\s]+$/; // Allows numbers, letters, and spaces
        const digitRegex = /^\d+$/; // Allows only digits

        if (address1 === "") {
            Alert.alert(t("Please enter Address line 1"));
        } else if (!characterRegex.test(address1)) {
            Alert.alert(t("Address line 1 should contain only letters, numbers, and spaces"));
        } else if (address2 !== "" && !characterRegex.test(address2)) {
            Alert.alert(t("Address line 2 should contain only letters, numbers, and spaces or be empty"));
        } else if (address3 !== "" && !characterRegex.test(address3)) {
            Alert.alert(t("Address line 3 should contain only letters, numbers, and spaces or be empty"));
        } else if (pincode === "") {
            Alert.alert(t("Please enter pincode"));
        } else if (!digitRegex.test(pincode)) {
            Alert.alert(t("Pincode should contain only digits"));
        } else {
            setLoading(false);
            search();
        }
    };

    const onSubmitallData = (table) => {

        if (address1 === "") {
            Alert.alert("Validation Error", "Please enter  Address line 1")
        }
        else if (pincode === "") {
            Alert.alert("Validation Error", "Please enter pincode")
        } else {
            setLoading(false);
            OnShipingAddress(table);
        }
    }

    // Pincode  search
    const search = (pinType) => {
        let formdata = new FormData();
        formdata.append("pinCode", pincode);
        formdata.append("lang_code", currentLanguage);
        fetch(`${BASE_URL}/registration/get-location-by-pin-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'accesstoken': `${AccessToken}`
            },
            body: formdata
        })
            .then((response) => response.json())
            .then((responseJson) => {
                setLoading(false);
                console.log("456 formdata=", formdata)
                console.log("Pincode ==================:", responseJson);
                if (responseJson.bstatus == 1) {
                    setAlldata(responseJson.details)
                    setCityID(responseJson.details[0].city_id)
                    setStateId(responseJson.details[0].state_id)
                    setCityname(responseJson.details[0].city_name)
                }
                else {
                    setAlldata("")
                    setCityname("")
                    Toast.show(responseJson.message);
                }

            })
            .catch((error) => {
                setLoading(false);
                //console.log("get-location-by-pin-code Error:", error);
                Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
            });
    }


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>

                <HeaderComponents component={"Address"} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack padding={5}>
                        <Text color={darkColor} fontWeight="bold" fontSize='md' marginBottom={2}>{alladdressdata != "" ? alladdressdata.address_list.permanent_address.heading : ""}</Text>
                        <HStack space={3} alignItems="center" backgroundColor={lightGrey} padding={4} borderRadius={8} overflow="hidden">
                            <CheckBox
                                isChecked={isChecked === "permanentAddress"}
                                onClick={() => {
                                    setIsChecked("permanentAddress");
                                    handleCheckboxClick(peraddress.address_id, "dcm_addresses");

                                }}
                                checkBoxColor={warningColor}
                            />
                            <VStack space={1}>
                                <Text fontSize='sm' color={darkColor} fontWeight="bold">{peraddress.fname} {peraddress.lname}</Text>
                                <Text fontSize='xs' color={darkColor}>{peraddress.line1}</Text>
                                {peraddress.line2 != "" && (<Text fontSize="xs" color={darkColor}>{peraddress.line2}</Text>)}
                                {peraddress.line3 != "" && (<Text fontSize="xs" color={darkColor}>{peraddress.line3}</Text>)}
                                <Text fontSize="xs" color={darkColor}>{peraddress.state}, {peraddress.city}, {peraddress.post_code}</Text>
                            </VStack>
                        </HStack>
                    </VStack>

                    {alladdressdata != "" && alladdressdata.address_list.working_address.details != "" && (
                        <VStack padding={5}>
                            <Text color={darkColor} fontWeight="bold" fontSize='md' marginBottom={2}>{alladdressdata != "" ? alladdressdata.address_list.working_address.heading : ""}</Text>
                            <HStack space={3} alignItems="center" backgroundColor={lightGrey} padding={4} borderRadius={8} overflow="hidden">
                                <CheckBox
                                    isChecked={isChecked === "wokingAddress"}
                                    onClick={() => {
                                        setIsChecked("wokingAddress");
                                        handleCheckboxClick(workingaddress.address_id, "dcm_addresses");

                                    }}
                                    checkBoxColor={warningColor}
                                />
                                <VStack space={1}>
                                    <Text fontSize='sm' color={darkColor} fontWeight="bold">{workingaddress.fname} {workingaddress.lname}</Text>
                                    <Text fontSize='xs' color={darkColor}>{workingaddress.line1}</Text>
                                    {workingaddress.line2 != "" && (<Text fontSize="xs" color={darkColor}>{workingaddress.line2}</Text>)}
                                    {workingaddress.line3 != "" && (<Text fontSize="xs" color={darkColor}>{workingaddress.line3}</Text>)}
                                    <Text fontSize="xs" color={darkColor}>{workingaddress.state}, {workingaddress.city}, {workingaddress.post_code}</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    )}

                    {alladdressdata != "" && alladdressdata.address_list.alternate_addresses.details != "" && (
                        <VStack padding={5}>
                            <Text color={darkColor} fontWeight="bold" fontSize='md' marginBottom={2}>{alladdressdata != "" ? alladdressdata.address_list.alternate_addresses.heading : ""}</Text>
                            {altaddress.map((item, index) =>
                                <HStack key={index} space={3} alignItems="center" backgroundColor={lightGrey} padding={4} borderRadius={8} overflow="hidden">
                                    <CheckBox
                                        isChecked={isChecked === "altAddress" + index}
                                        onClick={() => {
                                            setIsChecked("altAddress" + index);
                                            handleCheckboxClick(item.add_id, "dcm_contact_shipping_address");

                                        }}
                                        checkBoxColor={warningColor}
                                    />
                                    <VStack space={1}>
                                        <Text fontSize='xs' color={darkColor}>{item.line1}</Text>
                                        {item.line2 != "" && (<Text fontSize="xs" color={darkColor}>{item.line2}</Text>)}
                                        {item.line3 != "" && (<Text fontSize="xs" color={darkColor}>{item.line3}</Text>)}
                                        <Text fontSize="xs" color={darkColor}>{item.state}, {item.city}, {item.post_code}</Text>
                                    </VStack>
                                </HStack>
                            )}
                        </VStack>
                    )}

                </ScrollView>
                <Stack backgroundColor={lightColor} width={'94%'} alignSelf="center" padding={5}>
                    <VStack marginTop={6} space={2}>
                        <Button style={[MainStyle.outlinebtn, { backgroundColor: '#ffffff' }]} onPress={() => setPopAddress(true)}>
                            <Text color={baseColor} fontFamily={fontSemiBold} fontSize="sm">{t("Add New Address")}</Text>
                        </Button>

                        {isChecked != "" ?

                            <Button style={MainStyle.solidbtn} onPress={() => navigation.navigate("RedeemsonOTP", { orderid: '', cartId: cartid, addressId: addressid, address: address, tablename: tableName  })}>
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Continue")}</Text>
                            </Button>
                            :
                            ""
                        }

                    </VStack>
                </Stack>
                <FooterComponents navigation={navigation} component={userType} cartcount={cartcount} />
            </VStack>
            {popAddress && (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <VStack flex={1} style={{ backgroundColor: "rgba(0,0,0,0.85)", position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 30 }}>
                        <Box style={MainStyle.popbox} paddingX={3} paddingY={6}>
                            <Stack space={3} alignItems="center" width={'100%'}>
                                <Text color={baseColor} fontSize="md" mb={1} fontWeight="bold">{t("Add New Address")}</Text>
                                <View style={MainStyle.inputbox}>
                                    <Input size="lg" onChangeText={(text) => setAddress1(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Address Line 1") + " *"} />
                                </View>
                                <View style={MainStyle.inputbox}>
                                    <Input size="lg" onChangeText={(text) => setAddress2(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Address Line 2")} />
                                </View>
                                <View style={MainStyle.inputbox}>
                                    <Input size="lg" onChangeText={(text) => setAddress3(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Address Line 3")} />
                                </View>

                                <View style={MainStyle.inputbox}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <View style={{ width: "100%" }}>
                                            <Input size="lg" keyboardType='number-pad' maxLength={6} onChangeText={(text) => setPinCode(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Pincode") + " *"} />
                                        </View>

                                    </View>
                                </View>
                                {alldata != "" ?

                                    <View
                                        style={{
                                            backgroundColor: lightColor,
                                            borderColor: greyColor,
                                            borderWidth: 1,
                                            borderRadius: 8,
                                            width: '100%',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            height: '10%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Text style={{ color: '#333', fontSize: 16, alignSelf: "flex-start", paddingLeft: 15 }}>{alldata[0].city_name}</Text>
                                    </View>
                                    :
                                    ""

                                }

                                {alldata != "" ?

                                    <View
                                        style={{
                                            backgroundColor: lightColor,
                                            borderColor: greyColor,
                                            borderWidth: 1,
                                            borderRadius: 8,
                                            width: '100%',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            height: '10%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Text style={{ color: '#333', fontSize: 16, alignSelf: "flex-start", paddingLeft: 15 }}>{alldata[0].state_name}</Text>
                                    </View>
                                    :
                                    ""

                                }
                            </Stack>
                            <HStack space={2} justifyContent="space-between" alignItems="center" marginTop={5}>
                                <Button size="xs" style={[MainStyle.solidbtn, { width: '48%', backgroundColor: darkGrey, height: 37 }]} onPress={() => setPopAddress(false)}>
                                    <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Close")}</Text>
                                </Button>
                                {cityid == "" ?

                                    <Button size="xs" style={[MainStyle.solidbtn, { width: '48%', backgroundColor: baseColor, height: 37 }]} onPress={() => onSubmit()}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Search")}</Text>
                                    </Button>

                                    :
                                    <Button size="xs" style={[MainStyle.solidbtn, { width: '48%', backgroundColor: baseColor, height: 37 }]} onPress={() => onSubmitallData("dcm_contact_shipping_address")}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">{t("Submit")}</Text>
                                    </Button>
                                }
                            </HStack>
                        </Box>
                    </VStack>
                </TouchableWithoutFeedback>
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
    text: {
        // marginTop: 20,
        fontSize: 16,

    },
    checkcontainer: {
        flexDirection: 'row', // Arrange children horizontally
        justifyContent: 'flex-start', // Align children to the start horizontally
        alignItems: 'center', // Center children vertically
        //   backgroundColor: 'red',
        height: ('18%'),
        marginTop: ("2%")

    }
});

export default AddressScreen;