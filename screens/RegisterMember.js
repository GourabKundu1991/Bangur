import { Actionsheet, Box, Button, HStack, Input, NativeBaseProvider, ScrollView, Select, Stack, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Keyboard, Linking, Pressable, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import { MainStyle, baseColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import { OtpInput } from "react-native-otp-entry";
//import { getHash, getOtp, startOtpListener } from 'react-native-otp-verify';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponents from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-simple-toast';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const RegisterMemberScreen = ({ navigation, route }) => {

    const scrollRef = React.useRef();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');

    const [currentStep, setCurrentStep] = React.useState(1);
    const [stepDone2, setStepDone2] = React.useState(false);
    const [stepDone3, setStepDone3] = React.useState(false);
    const [stepDone4, setStepDone4] = React.useState(false);

    const [mobileNumber, setMobileNumber] = React.useState('');
    const [forMobileOTP, setForMobileOTP] = React.useState(false);
    const [otpMobileValue, setOtpMobileValue] = React.useState('');
    const [otpArrya, setOtpArrya] = React.useState([]);

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

    const [address, setAddress] = React.useState('');
    const [state, setState] = React.useState('');
    const [stateID, setStateID] = React.useState('');
    const [district, setDistrict] = React.useState('');
    const [districtID, setDistrictID] = React.useState('');
    const [pincode, setPincode] = React.useState('');

    const [sameAdress, setSameAdress] = React.useState(false);
    const [altAdress, setAltAdress] = React.useState('');
    const [altState, setAltState] = React.useState('');
    const [altStateID, setAltStateID] = React.useState('');
    const [altDistrict, setAltDistrict] = React.useState('');
    const [altDistrictID, setAltDistrictID] = React.useState('');
    const [altPincode, setAltPincode] = React.useState('');

    const [dealerPhone, setDealerPhone] = React.useState('');
    const [dealerList, setDealerList] = React.useState([]);
    const [dealer, setDealer] = React.useState('');

    const [successPop, setSuccessPop] = React.useState(false);

    const [dealerFound, setDealerFound] = React.useState(false);

    const [officerName, setOfficerName] = React.useState('');
    const [officerPhone, setOfficerPhone] = React.useState('');
    const [officerType, setOfficerType] = React.useState('');

    const [selectIDProof, setSelectIDProof] = React.useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const maxYear = new Date(year - 18, month, day);
    const miniYear = new Date(year - 100, month, day);

    const regexNum = /^[6-9]\d{9}$/;
    const regexAlp = /[^a-zA-Z ]/g;

    const [preApproved, setPreApproved] = React.useState("");
    const [loginUserType, setLoginUserType] = React.useState("");

    const [uploadImgBox, setUploadImgBox] = React.useState(false);

    const [aadhaarFrontImage, setAadhaarFrontImage] = React.useState("");
    const [aadhaarBackImage, setAadhaarBackImage] = React.useState("");
    const [panImage, setPanImage] = React.useState("");

    const [isPicker, setIsPicker] = React.useState(false);
    const [imageType, setImageType] = React.useState("");

    const [fullName, setFullName] = React.useState("");
    const [gender, setGender] = React.useState("");


    useEffect(() => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setLoginUserType(JSON.parse(decryptData).user_type);
            }
        });
        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem('language').then(val => {
                if (val != null) {
                    setLanguage(val);
                }
            });
        });
        return unsubscribe;
    }, []);

    const sendOtp = () => {
        if (mobileNumber.trim() == '') {
            Toast.show(t("Please enter Mobile Number"), Toast.LONG);
        } else if (mobileNumber.length < 10) {
            Toast.show(t("Please enter 10 digit for Mobile Number"), Toast.LONG);
        } else if (mobileNumber != "" && !regexNum.test(mobileNumber)) {
            Toast.show(t("Mobile Number accept Only Number / Mobile No. not Valid"), Toast.LONG);
        } else {
            setLoading(true);
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    var CryptoJS = require("crypto-js");
                    const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                    let formdata = new FormData();
                    formdata.append("mobileNumber", mobileNumber);
                    formdata.append("lang_code", currentLanguage);
                    fetch(`${BASE_URL}/login/get-otp`, {
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
                            //console.log("Get OTP:", responseJson);
                            if (responseJson.bstatus == 1) {
                                Toast.show(responseJson.message, Toast.LONG);
                                setForMobileOTP(true);
                                setOtpMobileValue(responseJson.OTP);
                                var myArray = responseJson.OTP.split('');
                                setOtpArrya(myArray);
                            } else {
                                Toast.show(responseJson.message, Toast.LONG);
                            }
                        })
                        .catch((error) => {
                            setLoading(false);
                            //console.log("Error:", error);
                            Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"), Toast.LONG);
                        });
                }
            })
        }
    }

    const onVerify = () => {
        Keyboard.dismiss();
        if (otpMobileValue == '') {
            Toast.show(t("Please enter OTP Number"), Toast.LONG);
        } else {
            setLoading(true);
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    var CryptoJS = require("crypto-js");
                    const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                    let formdata = new FormData();
                    formdata.append("mobileNumber", mobileNumber);
                    formdata.append("otp", otpMobileValue);
                    formdata.append("os_type", `${OS_TYPE}`);
                    formdata.append("os_version", `${APP_VERSION}`);
                    formdata.append("lang_code", currentLanguage);
                    fetch(`${BASE_URL}/login/verify-otp`, {
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
                            //console.log("Verify OTP:", responseJson);
                            if (responseJson.bstatus == 1) {
                                var crntstp = currentStep + 1;
                                setCurrentStep(crntstp);
                                setStepDone2(true);
                                scrollRef.current?.scrollTo({
                                    y: 0,
                                    animated: true,
                                });
                            } else {
                                Toast.show(responseJson.message, Toast.LONG);
                            }
                        })
                        .catch((error) => {
                            setLoading(false);
                            console.log("Error:", error);
                            Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                        });
                }
            })
        }
    }

    const onSelectIDProof = (val) => {
        setSelectIDProof(val);
        setPanNumber("");
        setPanVerifed(false);
        setAadhaarNumber("");
        setAadhaarVerifed(false);
        setFetchedDetails("");
        setPanDOB("");
        setFullName("");
        setGender("");
        setDOB("");
    }

    const onUploadDoc = () => {
        Keyboard.dismiss();
        if (selectIDProof == 1 && aadhaarFrontImage == "") {
            Toast.show(t("Please upload Aadhaar Front Image"), Toast.LONG);
        } else if (selectIDProof == 1 && aadhaarBackImage == "") {
            Toast.show(t("Please upload Aadhaar Back Image"), Toast.LONG);
        } else if (selectIDProof == 2 && panImage == "") {
            Toast.show(t("Please upload PAN Image"), Toast.LONG);
        } else {
            setUploadImgBox(false);
            if (selectIDProof == 1) {
                setAadhaarVerifed(true);
            } else if (selectIDProof == 2) {
                setPanVerifed(true);
            }
        }
    }

    const closeUpload = () => {
        setUploadImgBox(false);
        setAadhaarFrontImage("");
        setAadhaarBackImage("");
        setPanImage("");
    }

    const onPickerOpen = (val) => {
        setIsPicker(true);
        setImageType(val);
        console.log(val);
    }
    const onPickerClose = () => {
        setIsPicker(false);
    }

    const openProfilePicker = (type) => {
        onPickerClose();
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
                        if (imageType == "AadhaarFrontImage") {
                            setAadhaarFrontImage(response.assets[0].base64);
                        } else if (imageType == "AadhaarBackImage") {
                            setAadhaarBackImage(response.assets[0].base64);
                        } else if (imageType == "PanImage") {
                            setPanImage(response.assets[0].base64);
                        }
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
                        if (imageType == "AadhaarFrontImage") {
                            setAadhaarFrontImage(response.assets[0].base64);
                        } else if (imageType == "AadhaarBackImage") {
                            setAadhaarBackImage(response.assets[0].base64);
                        } else if (imageType == "PanImage") {
                            setPanImage(response.assets[0].base64);
                        }
                    }
                },
            )
        }
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
                    if (responseJson.aadhaar_pan_api_disabled == 1) {
                        setUploadImgBox(true);
                        setFetchedDetails(responseJson.details);
                        setPincode(responseJson.details.pinCode);
                        setState(responseJson.details.stateName);
                        setStateID(responseJson.details.stateId);
                        setDistrict(responseJson.details.districtName);
                        setDistrictID(responseJson.details.districtId);
                        setPanNumber(responseJson.details.pan);
                        setFullName(responseJson.details.name);
                        setGender(responseJson.details.gender);
                    } else {
                        if (responseJson.bstatus === 1) {
                            setForOTP(true);
                            setTranId(responseJson.tran_id);
                            Toast.show(responseJson.message, Toast.LONG);
                        } else {
                            Toast.show(responseJson.message, Toast.LONG);
                        }
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
                    //console.log("Verify OTP:", responseJson);
                    if (responseJson.bstatus == 1) {
                        setForOTP(false);
                        setOtpValue("");
                        setTranId("");
                        setAadhaarVerifed(true);
                        setFetchedDetails(responseJson.details);
                        setPincode(responseJson.details.pinCode);
                        setState(responseJson.details.stateName);
                        setStateID(responseJson.details.stateId);
                        setDistrict(responseJson.details.districtName);
                        setDistrictID(responseJson.details.districtId);
                        setPanNumber(responseJson.details.pan);
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
            formdata.append("dob", moment(panDOB).format('DD-MM-YYYY'));
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
                    if (responseJson.aadhaar_pan_api_disabled == 1) {
                        setUploadImgBox(true);
                        setFetchedDetails(responseJson.details);
                        setPincode(responseJson.details.pinCode);
                        setState(responseJson.details.stateName);
                        setStateID(responseJson.details.stateId);
                        setDistrict(responseJson.details.districtName);
                        setDistrictID(responseJson.details.districtId);
                    } else {
                        if (responseJson.bstatus == 1) {
                            setPanVerifed(true);
                            setFetchedDetails(responseJson.details);
                            setPincode(responseJson.details.pinCode);
                            setState(responseJson.details.stateName);
                            setStateID(responseJson.details.stateId);
                            setDistrict(responseJson.details.districtName);
                            setDistrictID(responseJson.details.districtId);
                            Toast.show(responseJson.message, Toast.LONG);
                        } else {
                            Toast.show(responseJson.message, Toast.LONG);
                        }
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    //console.log("Error:", error);
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

    const searchPermanentPin = (type) => {
        if (pincode.trim() == "") {
            Toast.show(t("Please enter Permanent Pincode"), Toast.LONG);
        } else {
            setLoading(true);
            search(type);
        }
    }

    const searchWorkingPin = (type) => {
        if (pincode.trim() == "") {
            Toast.show(t("Please enter Working Pincode"), Toast.LONG);
        } else {
            setLoading(true);
            search(type);
        }
    }

    const search = (pinType) => {
        let formdata = new FormData();
        formdata.append("pinCode", (pinType == "permanent" ? pincode : altPincode));
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
                //console.log("Pincode:", responseJson);
                if (responseJson.bstatus == 1) {
                    Toast.show(responseJson.message, Toast.LONG);
                    if (pinType == "permanent") {
                        setState(responseJson.details[0].state_name);
                        setStateID(responseJson.details[0].state_id);
                        setDistrict(responseJson.details[0].city_name);
                        setDistrictID(responseJson.details[0].city_id);
                    } else {
                        setAltState(responseJson.details[0].state_name);
                        setAltStateID(responseJson.details[0].state_id);
                        setAltDistrict(responseJson.details[0].city_name);
                        setAltDistrictID(responseJson.details[0].city_id);
                    }
                } else {
                    Toast.show(responseJson.message, Toast.LONG);
                    if (pinType == "permanent") {
                        setState("");
                        setStateID("");
                        setDistrict("");
                        setDistrictID("");
                    } else {
                        setAltState("");
                        setAltStateID("");
                        setAltDistrict("");
                        setAltDistrictID("");
                    }
                }
            })
            .catch((error) => {
                setLoading(false);
                //console.log("Error:", error);
                Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
            });
    }

    const onNext = () => {
        Keyboard.dismiss();
        if (currentStep == 2) {
            if (selectIDProof == "") {
                Toast.show(t("Please select ID Proof as Aadhaar / PAN"), Toast.LONG);
            } else if (selectIDProof == 1 && !aadhaarVerifed) {
                Toast.show(t("Please Verify your Aadahar No."), Toast.LONG);
            } else if (selectIDProof == 2 && !panVerifed) {
                Toast.show(t("Please Verify your PAN No."), Toast.LONG);
            } else if (fetchedDetails.name == "" && fullName == "") {
                Toast.show(t("Please enter your Name as per ID proof"), Toast.LONG);
            } else if (fullName != "" && regexAlp.test(fullName)) {
                Toast.show(t("Name field accept only alphabets"), Toast.LONG);
            } else if (fetchedDetails.gender == "" && gender == "") {
                Toast.show(t("Please select your Gender as per ID proof"), Toast.LONG);
            } else if (fetchedDetails.dob == "" && dob == "") {
                Toast.show(t("Please select your Date of Birth as per ID proof"), Toast.LONG);
            } else {
                var crntstp = currentStep + 1;
                setCurrentStep(crntstp);
                setStepDone3(true);
                scrollRef.current?.scrollTo({
                    y: 0,
                    animated: true,
                });
            }
        } else if (currentStep == 3) {
            if (fetchedDetails.address == "" && address.trim() == "") {
                Toast.show(t("Please enter Permanent Address"), Toast.LONG);
            } else if (address != "" && address.length < 10) {
                Toast.show(t("Please enter min 10 charector for Permanent Address"), Toast.LONG);
            } else if (pincode.trim() == "") {
                Toast.show(t("Please enter Permanent Pincode"), Toast.LONG);
            } else if (state == "") {
                Toast.show(t("State not found. Please search by Pincode"), Toast.LONG);
            } else if (district == "") {
                Toast.show(t("District not found. Please search by Pincode"), Toast.LONG);
            } else if (!sameAdress && altAdress == "") {
                Toast.show(t("Please enter Working Address"), Toast.LONG);
            } else if (!sameAdress && altAdress.length < 10) {
                Toast.show(t("Please enter min 10 charector for working Address"), Toast.LONG);
            } else if (!sameAdress && altPincode == "") {
                Toast.show(t("Please enter Working Pincode"), Toast.LONG);
            } else if (!sameAdress && altState == "") {
                Toast.show(t("State not found. Please search by Pincode"), Toast.LONG);
            } else if (!sameAdress && altDistrict == "") {
                Toast.show(t("District not found. Please search by Pincode"), Toast.LONG);
            } else {
                var crntstp = currentStep + 1;
                setCurrentStep(crntstp);
                setStepDone4(true);
                scrollRef.current?.scrollTo({
                    y: 0,
                    animated: true,
                });
            }
        }
    }

    const onCheckSameAddress = (event) => {
        setSameAdress(!sameAdress);
        if (event == true) {
            setAltAdress(fetchedDetails.address != "" ? fetchedDetails.address : address);
            setAltPincode(pincode);
            setAltStateID(stateID);
            setAltDistrictID(districtID);
            setAltDistrict(district);
        } else {
            setAltAdress("");
            setAltPincode("");
            setAltState("");
            setAltStateID("");
            setAltDistrict("");
            setAltDistrictID("");
        }
    }

    const searchDealer = () => {
        if (dealerPhone.trim() == "") {
            Toast.show(t("Please enter Dealer Phone Number"), Toast.LONG);
        } else if (dealerPhone.length < 10) {
            Toast.show(t("Please enter 10 digit for Phone Number"), Toast.LONG);
        } else if (dealerPhone != "" && !regexNum.test(dealerPhone)) {
            Toast.show(t("Dealer Phone Number accept Only Number / Mobile No. not Valid"), Toast.LONG);
        } else {
            setLoading(true);
            setDealer("");
            let formdata = new FormData();
            formdata.append("mobileNumber", dealerPhone);
            formdata.append("lang_code", currentLanguage);
            fetch(`${BASE_URL}/registration/get-dealer`, {
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
                    //console.log("Get Dealer:", responseJson);
                    if (responseJson.bstatus == 1) {
                        setDealerList(responseJson.details);
                        setDealerFound(true);
                        if (responseJson.details.length == 1) {
                            setDealer(responseJson.details[0].id);
                        }
                    } else {
                        Toast.show(responseJson.message);
                        setDealerList([]);
                        setDealerFound(false);
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    //console.log("Error:", error);
                    Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                });
        }
    }

    const editDealer = () => {
        setDealerFound(false);
        setDealer("");
        setDealerList([]);
        setDealerPhone("");
    }

    const onSubmit = () => {
        if (dealerPhone.trim() == "") {
            Toast.show(t("Please enter Dealer Phone Number and Search"), Toast.LONG);
        } else if (dealer == "") {
            Toast.show(t("Please select Dealer"), Toast.LONG);
        } else {
            setLoading(true);
            onRegistration();
        }
    }

    onRegistration = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("lang_code", currentLanguage);
                formdata.append("mobile", mobileNumber);
                formdata.append("aadhaar", aadhaarNumber);
                formdata.append("pan", panNumber);
                formdata.append("name", (fetchedDetails.name == "" ? fullName : fetchedDetails.name));
                formdata.append("gender", (gender == "Male" ? "M" : "F"));
                formdata.append("dob", (fetchedDetails.dob == "" ? moment(dob).format('DD-MM-YYYY') : fetchedDetails.dob));
                formdata.append("address", (fetchedDetails.address == "" ? address : fetchedDetails.address));
                formdata.append("pincode", pincode);
                formdata.append("stateId", stateID);
                formdata.append("districtId", districtID);
                formdata.append("city", district);
                formdata.append("currentSameAsPermanent", (!sameAdress ? 0 : 1));
                formdata.append("currentAddress", altAdress);
                formdata.append("currentPincode", altPincode);
                formdata.append("currentState", altStateID);
                formdata.append("currentDistrict", altDistrictID);
                formdata.append("currentCity", altDistrict);
                formdata.append("parentId", dealer);
                formdata.append("refmobile", "");
                formdata.append("refConId", "");
                formdata.append("aadhaarFront", aadhaarFrontImage);
                formdata.append("aadhaarBack", aadhaarBackImage);
                formdata.append("panImage", panImage);
                fetch(`${BASE_URL}/registration/submit`, {
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
                        //console.log("Registration:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setSuccessPop(true);
                            setOfficerName(responseJson.officerName);
                            setOfficerPhone(responseJson.officerNumber);
                            setOfficerType(responseJson.officerType);
                            setPreApproved(responseJson.autoapproved);
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

    const onPrev = () => {
        var crntstp = currentStep - 1;
        setCurrentStep(crntstp);
        if (crntstp == 1) {
            setStepDone2(false);
        } else if (crntstp == 2) {
            setStepDone3(false);
        } else if (crntstp == 3) {
            setStepDone4(false);
        }
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }

    const onOkay = () => {
        setSuccessPop(false);
        navigation.goBack();
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center" ref={scrollRef} automaticallyAdjustKeyboardInsets={true}>
                    <VStack space={5} padding={8}>
                        <Text color={darkColor} fontFamily={fontBold} fontSize="lg">{t("Please register your member")}</Text>
                        <HStack style={{ backgroundColor: darkGrey, height: 1, marginTop: 15, marginBottom: 60 }} justifyContent="space-between" alignItems="center">
                            <Stack height={36} width={'23%'} alignItems="center">
                                <Box style={[MainStyle.pagibox, { backgroundColor: baseColor }]}>
                                    <Text color={lightColor} fontSize="md" textAlign="center" fontWeight="normal" lineHeight={35}><Icon name="checkmark-outline" size={20} /></Text>
                                </Box>
                                <Text color={baseColor} fontSize="xs" textAlign="center" fontWeight="normal" lineHeight={16}>{t("Verify\nMobile No.")}</Text>
                            </Stack>
                            <Stack height={36} width={'23%'} alignItems="center">
                                {!stepDone2 ?
                                    <Box style={[MainStyle.pagibox, { backgroundColor: lightGrey }]}>
                                        <Text color={darkGrey} fontSize="md" textAlign="center" fontWeight="normal" lineHeight={35}>2</Text>
                                    </Box>
                                    :
                                    <Box style={[MainStyle.pagibox, { backgroundColor: baseColor }]}>
                                        <Text color={lightColor} fontSize="md" textAlign="center" fontWeight="normal" lineHeight={35}><Icon name="checkmark-outline" size={20} /></Text>
                                    </Box>
                                }
                                <Text color={baseColor} fontSize="xs" textAlign="center" fontWeight="normal" lineHeight={16}>{t("Personal\nInformation")}</Text>
                            </Stack>
                            <Stack height={36} width={'23%'} alignItems="center">
                                {!stepDone3 ?
                                    <Box style={[MainStyle.pagibox, { backgroundColor: lightGrey }]}>
                                        <Text color={darkGrey} fontSize="md" textAlign="center" fontWeight="normal" lineHeight={35}>3</Text>
                                    </Box>
                                    :
                                    <Box style={[MainStyle.pagibox, { backgroundColor: baseColor }]}>
                                        <Text color={lightColor} fontSize="md" textAlign="center" fontWeight="normal" lineHeight={35}><Icon name="checkmark-outline" size={20} /></Text>
                                    </Box>
                                }
                                <Text color={baseColor} fontSize="xs" textAlign="center" fontWeight="normal" lineHeight={16}>{t("Address\nDetails")}</Text>
                            </Stack>
                            <Stack height={36} width={'23%'} alignItems="center">
                                {!stepDone4 ?
                                    <Box style={[MainStyle.pagibox, { backgroundColor: lightGrey }]}>
                                        <Text color={darkGrey} fontSize="md" textAlign="center" fontWeight="normal" lineHeight={35}>4</Text>
                                    </Box>
                                    :
                                    <Box style={[MainStyle.pagibox, { backgroundColor: baseColor }]}>
                                        <Text color={lightColor} fontSize="md" textAlign="center" fontWeight="normal" lineHeight={35}><Icon name="checkmark-outline" size={20} /></Text>
                                    </Box>
                                }
                                <Text color={baseColor} fontSize="xs" textAlign="center" fontWeight="normal" lineHeight={16}>{t("Dealer\nSearch")}</Text>
                            </Stack>
                        </HStack>
                        {currentStep == 1 && (
                            <Stack space={3}>
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Contractor's Mobile Number")} <Text color={dangerColor}>*</Text></Text>
                                    <View style={MainStyle.inputbox}>
                                        {!forMobileOTP ?
                                            <Input height={43} fontFamily={fontRegular} size="md" variant="unstyled" keyboardType='number-pad' maxLength={10} onChangeText={(text) => setMobileNumber(text)} placeholder={t("Please Enter Mobile Number")} />
                                            :
                                            <Input value={mobileNumber} backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" readOnly
                                                InputRightElement={
                                                    <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: darkColor, height: 37, marginRight: 4 }]} onPress={() => (setForMobileOTP(false), setMobileNumber(""))}>
                                                        <Icon name="close" size={18} color={lightColor} />
                                                    </Button>
                                                }
                                            />
                                        }
                                    </View>
                                </View>
                                {forMobileOTP && (
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
                                        {/* <Text fontFamily={fontRegular} color={baseColor} fontSize="xs" marginTop={1}>{t("(You have maximum 3 attempts)")}</Text> */}
                                    </View>
                                )}
                            </Stack>
                        )}
                        {currentStep == 2 && (
                            <Stack space={3}>
                                <View>
                                    <Text style={MainStyle.lable} fontSize="xs">{t("Mobile Number")} <Text color={dangerColor}>*</Text></Text>
                                    <View style={MainStyle.inputbox}>
                                        <Input value={mobileNumber} backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                    </View>
                                </View>
                                <Text color={baseColor} fontSize="xs" fontWeight="normal"><Text fontWeight="bold">{t("Note :")}</Text> {t("Please fill  Aadhar or PAN details. This is mandatory.All auto-filled data will be fetched from KYC")}</Text>
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
                                            <Select.Item label="Aadhaar" value="1" />
                                            <Select.Item label="PAN" value="2" />
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
                                                <Input value={fetchedDetails.maskedAadhaar} backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
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
                                        <DateTimePickerModal date={panDOB || undefined} maximumDate={today} minimumDate={miniYear} isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
                                    </View>
                                )}
                                {aadhaarVerifed && panNumber != "" && (
                                    <View>
                                        <Text style={MainStyle.lable} fontSize="xs">{t("PAN No.")}</Text>
                                        <View style={MainStyle.inputbox}>
                                            <Input value={panNumber} backgroundColor={lightGrey} fontFamily={fontRegular} textTransform={"uppercase"} size="md" variant="unstyled" readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                        </View>
                                    </View>
                                )}
                                {fetchedDetails != "" && (
                                    <Stack space={3} marginTop={3}>
                                        <View>
                                            <Text style={MainStyle.lable} fontSize="xs">{t("Name as per ID Proof")} <Text color={dangerColor}>*</Text></Text>
                                            <View style={MainStyle.inputbox}>
                                                {fetchedDetails.name != "" ?
                                                    <Input value={fullName} backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                                    :
                                                    <Input value={fullName} onChangeText={(text) => setFullName(text)} fontFamily={fontRegular} size="md" variant="unstyled" />
                                                }
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={MainStyle.lable} fontSize="xs">{t("Gender")} <Text color={dangerColor}>*</Text></Text>
                                            {fetchedDetails.gender != "" ?
                                                <Input value={gender} backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                                :
                                                <View style={MainStyle.inputbox}>
                                                    <Select variant="unstyled" size="md" height={43}
                                                        onValueChange={value => setGender(value)}
                                                        selectedValue={gender}
                                                        style={{ paddingLeft: 15 }}
                                                        fontFamily={fontRegular}
                                                        placeholder={t("Please Select")}
                                                        dropdownCloseIcon={<Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />}
                                                        dropdownOpenIcon={<Icon name="chevron-up-outline" style={{ marginRight: 10 }} size={20} />}
                                                        _selectedItem={{
                                                            backgroundColor: greyColor,
                                                            endIcon: <Icon name="checkmark-circle" size={20} color={successColor} style={{ right: 0, position: 'absolute' }} />
                                                        }}>
                                                        <Select.Item label="Male" value="Male" />
                                                        <Select.Item label="Female" value="Female" />
                                                    </Select>
                                                </View>
                                            }
                                        </View>
                                        <View>
                                            <Text style={MainStyle.lable} fontSize="xs">{t("Date of Birth")} <Text color={dangerColor}>*</Text></Text>
                                            <View style={MainStyle.inputbox}>
                                                {fetchedDetails.dob != "" ?
                                                    <Input value={fetchedDetails.dob} backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                                    :
                                                    <Pressable style={styles.inputbox} onPress={() => showDatePicker("DOB")}>
                                                        <HStack style={{ paddingHorizontal: 10, height: 43 }} alignItems="center" paddingY={Platform.OS == 'ios' ? '1.5' : '2.5'} justifyContent="space-between">
                                                            <Text color={dob != '' ? '#111111' : '#999999'} fontSize="sm"> {dob != '' ? moment(dob).format('DD-MM-YYYY') : ""}</Text>
                                                            <Icon name="calendar-outline" size={18} color={warningColor} />
                                                        </HStack>
                                                    </Pressable>
                                                }
                                            </View>
                                        </View>
                                        <DateTimePickerModal date={dob || undefined} maximumDate={maxYear} minimumDate={miniYear} isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
                                    </Stack>
                                )}
                            </Stack>
                        )}
                        {currentStep == 3 && (
                            <Stack space={5}>
                                <Text color={baseColor} fontSize="xs" fontWeight="normal"><Text fontWeight="bold">{t("Note :")}</Text> {t("All auto-filled data fetched form as per Aadhaar")}</Text>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ color: darkColor, fontFamily: fontBold }} fontSize="md">{t("Permanent Address")}</Text>
                                    <Stack space={2} marginTop={3}>
                                        <View>
                                            <Text style={MainStyle.lable} fontSize="xs">{t("Address")} <Text color={dangerColor}>*</Text></Text>
                                            <View style={MainStyle.inputbox}>
                                                {fetchedDetails.address != "" ?
                                                    <Input backgroundColor={lightGrey} multiline fontFamily={fontRegular} size="md" variant="unstyled" value={fetchedDetails.address} readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                                    :
                                                    <Input value={address} fontFamily={fontRegular} size="md" variant="unstyled" multiline placeholder={t("Please Enter Address")} onChangeText={(text) => setAddress(text)} />
                                                }
                                            </View>
                                        </View>
                                        {fetchedDetails.pinCode == "" && (
                                            <View>
                                                <Text style={MainStyle.lable} fontSize="xs">{t("Pincode")} <Text color={dangerColor}>*</Text></Text>
                                                <View style={MainStyle.inputbox}>
                                                    <Input value={pincode} fontFamily={fontRegular} size="md" variant="unstyled" maxLength={6} onChangeText={(text) => setPincode(text)} placeholder={t("Please Enter Pincode")} keyboardType='number-pad'
                                                        InputRightElement={
                                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: warningColor, height: 37, marginRight: 4 }]} onPress={() => searchPermanentPin("permanent")}>
                                                                <Icon name="search" size={18} color={lightColor} />
                                                            </Button>
                                                        }
                                                    />
                                                </View>
                                            </View>
                                        )}
                                        {fetchedDetails.pinCode != "" && (
                                            <View>
                                                <Text style={MainStyle.lable} fontSize="xs">{t("Pincode")} <Text color={dangerColor}>*</Text></Text>
                                                <View style={MainStyle.inputbox}>
                                                    <Input backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" value={pincode} readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                                </View>
                                            </View>
                                        )}
                                        {district != "" && (
                                            <View>
                                                <Text style={MainStyle.lable} fontSize="xs">{t("District")} <Text color={dangerColor}>*</Text></Text>
                                                <View style={MainStyle.inputbox}>
                                                    <Input backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" value={district} readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                                </View>
                                            </View>
                                        )}
                                        {state != "" && (
                                            <View>
                                                <Text style={MainStyle.lable} fontSize="xs">{t("State")} <Text color={dangerColor}>*</Text></Text>
                                                <View style={MainStyle.inputbox}>
                                                    <Input backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" value={state} readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                                </View>
                                            </View>
                                        )}
                                    </Stack>
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Text style={{ color: darkColor, fontFamily: fontBold }} fontFamily={fontBold} fontSize="md">{t("Working Address")}</Text>
                                    <HStack space={1} alignItems="center" paddingRight={2} marginTop={3}>
                                        <CheckBox value={sameAdress} onValueChange={(value) => onCheckSameAddress(value)} tintColors={{ true: successColor }} />
                                        <Text fontSize="sm" fontFamily={fontBold} color={darkColor}>{t("Same As Permanent Address")}</Text>
                                    </HStack>
                                    {!sameAdress && (
                                        <Stack space={2} marginTop={5}>
                                            <View>
                                                <Text style={MainStyle.lable} fontSize="xs">{t("Address")} <Text color={dangerColor}>*</Text></Text>
                                                <View style={MainStyle.inputbox}>
                                                    <Input value={altAdress} fontFamily={fontRegular} size="md" variant="unstyled" multiline placeholder={t("Please Enter Address")} onChangeText={(text) => setAltAdress(text)} />
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={MainStyle.lable} fontSize="xs">{t("Pincode")} <Text color={dangerColor}>*</Text></Text>
                                                <View style={MainStyle.inputbox}>
                                                    <Input value={altPincode} fontFamily={fontRegular} size="md" variant="unstyled" onChangeText={(text) => setAltPincode(text)} placeholder={t("Please Enter Pincode")} keyboardType='number-pad' maxLength={6}
                                                        InputRightElement={
                                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: warningColor, height: 37, marginRight: 4 }]} onPress={() => searchWorkingPin("working")}>
                                                                <Icon name="search" size={18} color={lightColor} />
                                                            </Button>
                                                        }
                                                    />
                                                </View>
                                            </View>
                                            {altDistrict != "" && (
                                                <View>
                                                    <Text style={MainStyle.lable} fontSize="xs">{t("District")} <Text color={dangerColor}>*</Text></Text>
                                                    <View style={MainStyle.inputbox}>
                                                        <Input value={altDistrict} backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                                    </View>
                                                </View>
                                            )}
                                            {altState != "" && (
                                                <View>
                                                    <Text style={MainStyle.lable} fontSize="xs">{t("State")} <Text color={dangerColor}>*</Text></Text>
                                                    <View style={MainStyle.inputbox}>
                                                        <Input value={altState} backgroundColor={lightGrey} fontFamily={fontRegular} size="md" variant="unstyled" readOnly InputRightElement={<Icon name="checkmark-circle" size={22} color={successColor} style={{ marginRight: 10, textAlign: 'center' }} />} />
                                                    </View>
                                                </View>
                                            )}
                                        </Stack>
                                    )}
                                </View>
                            </Stack>
                        )}
                        {currentStep == 4 && (
                            <Stack space={7}>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ color: darkColor, fontFamily: fontBold }} fontSize="md">{t("Dealer Search")}</Text>
                                    <Stack space={2} marginTop={3}>
                                        <View>
                                            <Text style={MainStyle.lable} fontSize="xs">{t("Dealer Phone Number")} <Text color={dangerColor}>*</Text></Text>
                                            <View style={MainStyle.inputbox}>
                                                <Input value={dealerPhone} readOnly={dealerFound} backgroundColor={dealerFound ? lightGrey : lightColor} fontFamily={fontRegular} size="md" variant="unstyled" onChangeText={(text) => setDealerPhone(text)} placeholder={t("Search by Dealer phone Number")} keyboardType='number-pad' maxLength={10}
                                                    InputRightElement={
                                                        dealerFound ?
                                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: darkColor, height: 37, marginRight: 4 }]} onPress={() => editDealer()}>
                                                                <Icon name="close" size={18} color={lightColor} />
                                                            </Button>
                                                            :
                                                            <Button size="xs" style={[MainStyle.solidbtn, { backgroundColor: warningColor, height: 37, marginRight: 4 }]} onPress={() => searchDealer()}>
                                                                <Icon name="search" size={18} color={lightColor} />
                                                            </Button>
                                                    }
                                                />
                                            </View>
                                        </View>
                                        {dealerList.length != 0 && (
                                            <View>
                                                <Text style={MainStyle.lable} fontSize="xs">{t("Dealer")} <Text color={dangerColor}>*</Text></Text>
                                                <View style={MainStyle.inputbox}>
                                                    <Select variant="unstyled" size="md" placeholder={t("Please Select Dealer")}
                                                        selectedValue={dealer}
                                                        onValueChange={value => setDealer(value)}
                                                        style={{ paddingLeft: 15 }}
                                                        fontFamily={fontRegular}
                                                        dropdownCloseIcon={<Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />}
                                                        dropdownOpenIcon={<Icon name="chevron-up-outline" style={{ marginRight: 10 }} size={20} />}
                                                        _selectedItem={{
                                                            backgroundColor: greyColor,
                                                            endIcon: <Icon name="checkmark-circle" size={20} color={successColor} style={{ right: 0, position: 'absolute' }} />
                                                        }}>
                                                        {dealerList.map((item, index) =>
                                                            <Select.Item key={index} label={item.first_name + " " + item.middle_name + " " + item.last_name + " (" + item.id_extern01 + ")"} value={item.id} />
                                                        )}
                                                    </Select>
                                                </View>
                                            </View>
                                        )}
                                    </Stack>
                                </View>
                            </Stack>
                        )}

                        {currentStep == 1 && (
                            <VStack marginTop={5}>
                                {!forMobileOTP && (
                                    <Button style={MainStyle.solidbtn} onPress={() => sendOtp()}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Get OTP")}</Text>
                                    </Button>
                                )}
                                {forMobileOTP && (
                                    <Button marginTop={3} style={MainStyle.solidbtn} onPress={() => onVerify()}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Verify OTP")}</Text>
                                    </Button>
                                )}
                            </VStack>
                        )}
                        {currentStep != 1 && (
                            <HStack marginTop={5} justifyContent="space-between" alignItems="center">
                                {currentStep != 2 && (
                                    <Button style={styles.halfbtn} variant="unstyled" backgroundColor={greyColor} borderRadius={8} onPress={() => onPrev()}>
                                        <Text color={darkColor} fontFamily={fontSemiBold} fontSize="xs">{t("Previous")}</Text>
                                    </Button>
                                )}
                                {currentStep == 2 && (
                                    <Button style={[MainStyle.solidbtn, styles.fullbtn]} onPress={() => onNext()}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Next")}</Text>
                                    </Button>
                                )}
                                {currentStep == 3 && (
                                    <Button style={[MainStyle.solidbtn, styles.halfbtn]} onPress={() => onNext()}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Next")}</Text>
                                    </Button>
                                )}
                                {currentStep == 4 && (
                                    <Button style={[MainStyle.solidbtn, styles.halfbtn]} onPress={() => onSubmit()}>
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Submit")}</Text>
                                    </Button>
                                )}
                            </HStack>
                        )}
                    </VStack>
                </ScrollView>
            </VStack>
            {forOTP && (
                <View style={MainStyle.spincontainer}>
                    <VStack space={3} style={{ backgroundColor: lightColor, padding: 30, borderRadius: 12, width: '85%' }}>
                        <Text color={darkColor} fontFamily={fontBold} fontSize="lg" textAlign="center" marginBottom={3}>{t("Enter OTP & Verify")}</Text>
                        <Text color={successColor} fontFamily={fontSemiBold} fontSize="sm" textAlign="center" marginBottom={3}>{("OTP sent to Aadhaar linked number")}.</Text>
                        <VStack space={2}>
                            <Text style={MainStyle.lable} fontSize="sm">{t("OTP")} <Text color={darkGrey} fontSize="10">({t("To Verify Mobile No.")})</Text> <Text color={dangerColor}>*</Text></Text>
                            <HStack justifyContent="space-between">
                                <View style={[MainStyle.inputbox, { width: 180 }]}>
                                    <Input value={otpValue} secureTextEntry={true} fontFamily={fontRegular} size="md" variant="unstyled" placeholder={t("Enter OTP")} onChangeText={(text) => setOtpValue(text)} keyboardType='number-pad' maxLength={6} />
                                </View>
                                <Button variant="unstyled">
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

            {uploadImgBox && (
                <View style={MainStyle.spincontainer}>
                    <VStack space={3} style={{ backgroundColor: lightColor, paddingVertical: 30, paddingHorizontal: 25, borderRadius: 12, width: '85%' }}>
                        <Text color={darkColor} fontFamily={fontBold} fontSize="lg" textAlign="center" marginBottom={3}>{t("Upload Doccuments")}</Text>
                        {selectIDProof == 1 && (
                            <VStack flexWrap={"wrap"} space={2} justifyContent="space-between" alignItems="center">
                                <Stack width={"100%"} space={2}>
                                    <HStack alignItems="center" mt="3" space={0}>
                                        <Icon name="attach-outline" size={20} color={darkColor} />
                                        <Text color={darkColor} fontSize="sm">{t("Aadhaar Front Image")} *</Text>
                                    </HStack>
                                    <Pressable onPress={() => onPickerOpen("AadhaarFrontImage")} style={MainStyle.inputbox}>
                                        <Image source={aadhaarFrontImage != "" ? { uri: 'data:image/jpeg;base64,' + aadhaarFrontImage } : require('../assets/images/uploadimage.png')} alt="image" resizeMode='contain' style={{ width: '100%', height: 120 }} />
                                        <Box bg={dangerColor} borderRadius={6} position="absolute" bottom="2" right="2" width="45" height="45" justifyContent="center" alignItems="center" overflow="hidden">
                                            <Icon name="camera" size={26} color="#ffffff" />
                                        </Box>
                                    </Pressable>
                                </Stack>
                                <Stack width={"100%"} space={2}>
                                    <HStack alignItems="center" mt="3" space={0}>
                                        <Icon name="attach-outline" size={20} color={darkColor} />
                                        <Text color={darkColor} fontSize="sm">{t("Aadhaar Back Image")} *</Text>
                                    </HStack>
                                    <Pressable onPress={() => onPickerOpen("AadhaarBackImage")} style={MainStyle.inputbox}>
                                        <Image source={aadhaarBackImage != "" ? { uri: 'data:image/jpeg;base64,' + aadhaarBackImage } : require('../assets/images/uploadimage.png')} alt="image" resizeMode='contain' style={{ width: '100%', height: 120 }} />
                                        <Box bg={dangerColor} borderRadius={6} position="absolute" bottom="2" right="2" width="45" height="45" justifyContent="center" alignItems="center" overflow="hidden">
                                            <Icon name="camera" size={26} color="#ffffff" />
                                        </Box>
                                    </Pressable>
                                </Stack>
                            </VStack>
                        )}
                        {selectIDProof == 2 && (
                            <VStack flexWrap={"wrap"} space={2} justifyContent="space-between" alignItems="center">
                                <Stack width={"100%"} space={2}>
                                    <HStack alignItems="center" mt="3" space={0}>
                                        <Icon name="attach-outline" size={20} color={darkColor} />
                                        <Text color={darkColor} fontSize="sm">{t("PAN Card Image")} *</Text>
                                    </HStack>
                                    <Pressable onPress={() => onPickerOpen("PanImage")} style={MainStyle.inputbox}>
                                        <Image source={panImage != "" ? { uri: 'data:image/jpeg;base64,' + panImage } : require('../assets/images/uploadimage.png')} alt="image" resizeMode='contain' style={{ width: '100%', height: 120 }} />
                                        <Box bg={dangerColor} borderRadius={6} position="absolute" bottom="2" right="2" width="45" height="45" justifyContent="center" alignItems="center" overflow="hidden">
                                            <Icon name="camera" size={26} color="#ffffff" />
                                        </Box>
                                    </Pressable>
                                </Stack>
                            </VStack>
                        )}
                        <Button marginTop={6} style={MainStyle.solidbtn} onPress={() => onUploadDoc()}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Upload")}</Text>
                        </Button>
                        {/* <Button variant="unstyled" backgroundColor={greyColor} borderRadius={8} onPress={() => closeUpload()}>
                            <Text color={darkColor} fontFamily={fontSemiBold} fontSize="xs">{t("Close")}</Text>
                        </Button> */}
                    </VStack>
                </View>
            )}
            <Actionsheet isOpen={isPicker} onClose={onPickerClose}>
                <Actionsheet.Content>
                    <Text color="#666666" fontSize="md" textAlign="center">{t("Select Image Source")}</Text>
                    <Actionsheet.Item onPress={() => openProfilePicker("library")}>{t("Load from Library")}</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => openProfilePicker("camera")}>{t("Use Camera")}</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => openProfilePicker("cancel")}>{t("Cancel")}</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>

            {successPop && (
                <View style={MainStyle.spincontainer}>
                    <VStack style={MainStyle.popbox} space={10}>
                        <Image source={require('../assets/images/check-green.gif')} style={{ width: 100, height: 100, resizeMode: 'contain', position: 'relative', marginTop: 30 }} />
                        <Image source={require('../assets/images/logo.jpg')} style={MainStyle.logo} />
                        <VStack justifyContent="center" alignItems="center">
                            <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{t("Thank you for registering with")}</Text>
                            <Text color={baseColor} fontSize="sm" fontFamily={fontBold}>Nirman Mitra 2.0</Text>
                            {loginUserType === 'TTO' ? (

                                <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{t("Your request has been approved")}</Text>

                            ) : (
                                <>
                                    <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold} textAlign="center">{preApproved == 1 ? t("Your request has been auto approved to your mapped") : t("Your request has been sent for approval to your mapped")} <Text fontSize="sm" fontFamily={fontBold}>{officerType} {officerName}</Text></Text>
                                    <HStack marginTop={4} space={2} justifyContent="center" alignItems="center">
                                        <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold}>{t("Contact No:")}</Text>
                                        <Pressable onPress={() => Linking.openURL(`tel:${officerPhone}`)}>
                                            <HStack alignItems="center">
                                                <Icon name="call" size={16} color={baseColor} />
                                                <Text color={baseColor} fontSize="sm" fontFamily={fontBold}> {officerPhone}</Text>
                                            </HStack>
                                        </Pressable>
                                    </HStack>

                                </>
                            )}

                        </VStack>
                        <Button style={MainStyle.solidbtn} width={'100%'} onPress={() => onOkay()}>
                            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t("Okay")}</Text>
                        </Button>
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
    halfbtn: { width: '48%', height: 45 },
    fullbtn: { width: '100%', height: 45 }
});

export default RegisterMemberScreen;