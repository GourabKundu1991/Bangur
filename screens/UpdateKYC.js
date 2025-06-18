import { Actionsheet, Box, Button, HStack, Input, NativeBaseProvider, ScrollView, Select, Stack, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Keyboard, Linking, Pressable, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import { MainStyle, baseColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponents from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-simple-toast';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const UpdateKYCScreen = ({ navigation, route }) => {

    const scrollRef = React.useRef();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');

    const [aadhaarNumber, setAadhaarNumber] = React.useState('');
    const [forOTP, setForOTP] = React.useState(false);
    const [otpValue, setOtpValue] = React.useState('');
    const [tranId, setTranId] = React.useState("");
    const [aadhaarVerifed, setAadhaarVerifed] = React.useState(false);
    const [panVerifed, setPanVerifed] = React.useState(false);
    const [panNumber, setPanNumber] = React.useState('');
    const [panDOB, setPanDOB] = React.useState('');
    const [fetchedDetails, setFetchedDetails] = React.useState('');
    const [dob, setDOB] = React.useState('');

    const [dobType, setDOBType] = React.useState('');

    const [successPop, setSuccessPop] = React.useState(false);
    const [errorPop, setErrorPop] = React.useState(false);

    const [successPMsg, setSuccessMsg] = React.useState("");
    const [errorPMsg, setErrorMsg] = React.useState("");

    const [selectIDProof, setSelectIDProof] = React.useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const maxYear = new Date(year - 18, month, day);
    const miniYear = new Date(year - 100, month, day);

    const regexNum = /^[6-9]\d{9}$/;

    const [preApproved, setPreApproved] = React.useState("");

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem('language').then(val => {
                if (val != null) {
                    setLanguage(val);
                }
            });
        });
        return unsubscribe;
    }, []);

    const onSelectIDProof = (val) => {
        setSelectIDProof(val);
        setPanNumber("");
        setPanVerifed(false);
        setAadhaarNumber("");
        setAadhaarVerifed(false);
        setFetchedDetails("");
        setPanDOB("");
    }

    const getOTP = () => {
        Keyboard.dismiss()
        if (aadhaarNumber.trim() == '') {
            Toast.show(t("Please enter Aadhaar Number"), Toast.LONG);
        } else {
            setLoading(true);
            let formdata = new FormData();
            formdata.append("aadhaarNumber", aadhaarNumber);
            formdata.append("lang_code", currentLanguage);
            fetch(`${BASE_URL}/aadhaar/get-otp`, {
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
                    //console.log("Get OTP:", responseJson);
                    if (responseJson.bstatus === 1) {
                        setForOTP(true);
                        setTranId(responseJson.tran_id);
                        Toast.show(responseJson.message, Toast.LONG);
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
    }

    const closeOTP = () => {
        setForOTP(false);
        setTranId("");
        setOtpValue("");
    }

    const verifyOTP = () => {
        Keyboard.dismiss()
        if (otpValue == '') {
            Toast.show(t("Please enter OTP"), Toast.LONG);
        } else {
            setLoading(true);
            let formdata = new FormData();
            formdata.append("aadhaarNumber", aadhaarNumber)
            formdata.append("tran_id", tranId);
            formdata.append("otp", otpValue);
            formdata.append("lang_code", currentLanguage);
            fetch(`${BASE_URL}/aadhaar/get-user-details`, {
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
                    console.log("Verify OTP:", responseJson);
                    if (responseJson.bstatus == 1) {
                        setForOTP(false);
                        setOtpValue("");
                        setTranId("");
                        setAadhaarVerifed(true);
                        setFetchedDetails(responseJson.details);
                        /* setPincode(responseJson.details.pinCode);
                        setState(responseJson.details.stateName);
                        setStateID(responseJson.details.stateId);
                        setDistrict(responseJson.details.districtName);
                        setDistrictID(responseJson.details.districtId);
                        setPanNumber(responseJson.details.pan); */
                        Toast.show(t("Aadhaar Number has been Verified"), Toast.LONG);
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
    }

    const verifyPAN = () => {
        Keyboard.dismiss()
        if (panNumber.trim() == '') {
            Toast.show(t("Please enter PAN Number"), Toast.LONG);
        } else if (panDOB == '') {
            Toast.show(t("Please select DOB same as PAN"), Toast.LONG);
        } else {
            setLoading(true);
            let formdata = new FormData();
            formdata.append("panNumber", panNumber);
            formdata.append("dob", moment(panDOB).format('YYYY-MM-DD'));
            formdata.append("lang_code", currentLanguage);
            fetch(`${BASE_URL}/pan/verify`, {
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
                    //console.log("Verify PAN:", responseJson);
                    if (responseJson.bstatus == 1) {
                        setPanVerifed(true);
                        setFetchedDetails(responseJson.details);
                        Toast.show(t("PAN Number has been Verified"), Toast.LONG);
                    } else {
                        Toast.show(responseJson.message, Toast.LONG);
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    console.log("PAN Veriry Error:", error);
                    Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                });
        }
    }

    const showDatePicker = (type) => {
        setDatePickerVisibility(true);
        setDOBType(type);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        hideDatePicker();
        if (dobType == "DOB") {
            setDOB(date);
        } else if (dobType == "panDOB") {
            setPanDOB(date);
        }
    };

    const onNext = () => {
        Keyboard.dismiss();
        if (selectIDProof == "") {
            Toast.show(t("Please select ID Proof as Aadhaar / PAN"), Toast.LONG);
        } else if (selectIDProof == 1 && !aadhaarVerifed) {
            Toast.show(t("Please Verify your Aadahar No."), Toast.LONG);
        } else if (selectIDProof == 2 && !panVerifed) {
            Toast.show(t("Please Verify your PAN No."), Toast.LONG);
        } else if (fetchedDetails.dob == "" && dob == "") {
            Toast.show(t("Please select your Date of Birth"), Toast.LONG);
        } else {
            setLoading(true);
            onSubmit();
        }
    }

    onSubmit = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("lang_code", currentLanguage);
                formdata.append("kycType", selectIDProof);
                formdata.append("kycNumber", (selectIDProof == 1 ? aadhaarNumber : panNumber));
                formdata.append("name", (fetchedDetails.name == undefined ? "" : fetchedDetails.name));
                formdata.append("gender", (fetchedDetails.gender == "Male" ? "M" : "F"));
                formdata.append("dob", (fetchedDetails.dob == undefined ? dob : fetchedDetails.dob));
                fetch(`${BASE_URL}/update-influencer-kyc`, {
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
                        console.log("Update KYC:", responseJson);
                        if (responseJson.bstatus == 1) {
                            if(responseJson.pending == 1){
                                setErrorPop(true);
                                setErrorMsg(responseJson.message);
                            }
                            else{
                                setSuccessPop(true);
                                setSuccessMsg(responseJson.message);
                            }
                        } else {
                            Toast.show(responseJson.message, Toast.LONG);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log("Update KYC Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            }
        })
    }

    const onOkay = () => {
        setSuccessPop(false);
        setErrorPop(false);
        navigation.goBack();
    }

    const goHome = () => {
        setSuccessPop(false);
        setErrorPop(false);
        navigation.navigate("Home");
    }


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center" ref={scrollRef} automaticallyAdjustKeyboardInsets={true}>
                    <VStack space={5} padding={8}>
                        <Text color={darkColor} fontFamily={fontBold} fontSize="lg">{t("Please update your KYC")}</Text>
                        <Stack space={5}>
                            <View>
                                <Text style={MainStyle.lable} fontSize="xs">{t("Aadhaar / PAN")} <Text color={dangerColor}>*</Text></Text>
                                <View style={MainStyle.inputbox}>
                                    <Select variant="unstyled" size="md" height={43}
                                        selectedValue={selectIDProof}
                                        onValueChange={value => onSelectIDProof(value)}
                                        style={{ paddingLeft: 15 }}
                                        fontFamily={fontRegular}
                                        dropdownCloseIcon={<Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />}
                                        dropdownOpenIcon={<Icon name="chevron-up-outline" style={{ marginRight: 10 }} size={20} />}
                                        _selectedItem={{
                                            backgroundColor: greyColor,
                                            endIcon: <Icon name="checkmark-circle" size={20} color={successColor} style={{ right: 0, position: 'absolute' }} />
                                        }}>
                                        <Select.Item label={t("Aadhaar")} value="1" />
                                        <Select.Item label={t("PAN")} value="2" />
                                    </Select>
                                </View>
                            </View>
                            {selectIDProof == 1 && (
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Aadhaar No.")} <Text color={dangerColor}>*</Text></Text>
                                    <View style={MainStyle.inputbox}>
                                        {!aadhaarVerifed ?
                                            <Input fontFamily={fontRegular} size="md" variant="unstyled" onChangeText={(text) => setAadhaarNumber(text)} placeholder={t("Please Enter Aadhaar No.")} maxLength={12} keyboardType='number-pad'
                                                InputRightElement={
                                                    <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: warningColor, height: 37, marginRight: 4 }]} onPress={() => getOTP()}>
                                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Verify")}</Text>
                                                    </Button>
                                                }
                                            />
                                            :
                                            <Input value={aadhaarNumber} backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                        }
                                    </View>
                                </View>
                            )}
                            {selectIDProof == 2 && (
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("PAN Details")} <Text color={dangerColor}>*</Text></Text>
                                    {!panVerifed ?
                                        <VStack space={3} style={[MainStyle.inputbox, { padding: 8 }]}>
                                            <View style={MainStyle.inputbox}>
                                                <Input fontFamily={fontRegular} size="md" variant="unstyled" textTransform={"uppercase"} onChangeText={(text) => setPanNumber(text)} placeholder={t("Please Enter PAN No.")} maxLength={10} />
                                            </View>
                                            <View style={MainStyle.inputbox}>
                                                <Pressable style={styles.inputbox} onPress={() => showDatePicker("panDOB")}>
                                                    <HStack style={{ paddingHorizontal: 10, height: 43 }} alignItems="center" paddingY={Platform.OS == 'ios' ? '1.5' : '2.5'} justifyContent="space-between">
                                                        <Text color={panDOB != '' ? '#111111' : '#999999'} fontSize="sm"> {panDOB != "" ? moment(panDOB).format('DD-MM-YYYY') : t("Select DOB same as PAN")}</Text>
                                                        <Icon name="calendar-outline" size={18} color={warningColor} />
                                                    </HStack>
                                                </Pressable>
                                            </View>
                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: warningColor, height: 37 }]} onPress={() => verifyPAN()}>
                                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Verify")}</Text>
                                            </Button>
                                        </VStack>
                                        :
                                        <View style={MainStyle.inputbox}>
                                            <Input value={panNumber} backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" textTransform={"uppercase"} readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                        </View>
                                    }
                                    <DateTimePickerModal date={panDOB || undefined} maximumDate={today} isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
                                </View>
                            )}
                            {fetchedDetails != "" && (
                                <Stack space={3} marginTop={3}>
                                    <VStack marginTop={5}>
                                        <Button style={[MainStyle.solidbtn, styles.fullbtn]} onPress={() => onNext()}>
                                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Submit")}</Text>
                                        </Button>
                                    </VStack>
                                </Stack>
                            )}
                        </Stack>
                    </VStack>
                </ScrollView>
            </VStack>
            {forOTP && (
                <View style={MainStyle.spincontainer}>
                    <VStack space={3} style={{ backgroundColor: lightColor, padding: 30, borderRadius: 12, width: '85%' }}>
                        <Text color={darkColor} fontFamily={fontBold} fontSize="lg" textAlign="center" marginBottom={3}>{t("Enter OTP & Verify")}</Text>
                        <Text color={successColor} fontFamily={fontSemiBold} fontSize="sm" textAlign="center" marginBottom={3}>{t("OTP sent to Aadhaar linked number")}.</Text>
                        <VStack space={2}>
                            <Text style={MainStyle.lable} fontSize="sm">{t("OTP")} <Text color={darkGrey} fontSize="10">({t("To Verify Mobile No.")})</Text> <Text color={dangerColor}>*</Text></Text>
                            <HStack justifyContent="space-between">
                                <View style={[MainStyle.inputbox, { width: 180 }]}>
                                    <Input value={otpValue} secureTextEntry={true} fontFamily={fontRegular} size="md" variant="unstyled" placeholder={t("Enter OTP")} onChangeText={(text) => setOtpValue(text)} keyboardType='number-pad' maxLength={6} />
                                </View>
                                <Button variant="unstyled" onPress={() => getOTP()}>
                                    <Text color={baseColor} fontFamily={fontSemiBold} fontSize="sm">{t("Resend")}</Text>
                                </Button>
                            </HStack>
                        </VStack>
                        <Button marginTop={6} style={MainStyle.solidbtn} onPress={() => verifyOTP()}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Verify OTP")}</Text>
                        </Button>
                        <Button variant="unstyled" backgroundColor={greyColor} borderRadius={8} onPress={() => closeOTP()}>
                            <Text color={darkColor} fontFamily={fontSemiBold} fontSize="xs">{t("Close")}</Text>
                        </Button>
                    </VStack>
                </View>
            )}
            {successPop && (
                <View style={MainStyle.spincontainer}>
                    <VStack style={MainStyle.popbox} space={10}>
                        <Image source={require('../assets/images/check-green.gif')} style={{ width: 100, height: 100, resizeMode: 'contain', position: 'relative', marginTop: 30 }} />
                        <Image source={require('../assets/images/logo.jpg')} style={MainStyle.logo} />
                        <VStack justifyContent="center" alignItems="center">
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{t("Thank You")}</Text>
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{successPMsg}</Text>
                        </VStack>
                        <Button style={MainStyle.solidbtn} width={'100%'} onPress={() => onOkay()}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Okay")}</Text>
                        </Button>
                    </VStack>
                </View>
            )}

            {errorPop && (
                <View style={MainStyle.spincontainer}>
                    <Stack backgroundColor="#ffffff" style={{ width: '70%', borderRadius: 10, overflow: 'hidden' }}>
                        <VStack space={1} w="100%" paddingY="10" paddingX="5" alignItems="center" justifyContent="center">
                            <Image source={require('../assets/images/logo.jpg')} style={MainStyle.logo} />
                            <Text mt={5} mb={3} fontSize="xl" fontWeight="bold" color={warningColor}>{t('Pending')}!</Text>
                            <Text textAlign="center" fontSize="sm" fontWeight="medium" color="#111111" mb={3}>{errorPMsg}</Text>
                            
                            <Button
                                size="sm"
                                style={{
                                    backgroundColor: '#111111',
                                    width: 150,
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                }}
                                onPress={() => goHome()}>
                                <Text color="#ffffff" fontSize="sm" fontWeight="medium">
                                    {t('Close')}
                                </Text>
                            </Button>
                        </VStack>
                    </Stack>
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
    halfbtn: { width: '48%', height: 45 },
    fullbtn: { width: '100%', height: 45 }
});

export default UpdateKYCScreen;