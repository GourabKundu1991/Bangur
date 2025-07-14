import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import {
  Alert,
  Box,
  Button,
  Center,
  CloseIcon,
  HStack,
  IconButton,
  Input,
  NativeBaseProvider,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  BackHandler,
  Image,
  Keyboard,
  Linking,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  APP_VERSION,
  AccessToken,
  BASE_URL,
  OS_TYPE,
  hashKey,
  secretKey,
} from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import {
  MainStyle,
  baseColor,
  dangerColor,
  darkColor,
  darkGrey,
  fontBold,
  fontRegular,
  fontSemiBold,
  greyColor,
  lightColor,
  lightGrey,
  successColor,
  warningColor,
} from '../assets/MainStyle';
//import { getHash, getOtp, startOtpListener } from 'react-native-otp-verify';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';
import { OtpInput } from 'react-native-otp-entry';
import Events from '../auth_provider/Events';
import messaging from '@react-native-firebase/messaging';
//import CountDown from 'react-native-countdown-component';

import CRC32 from 'crc-32';
import apiClient from '../api/apiClient';

const LoginScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(false);
  const [currentLanguage, setLanguage] = React.useState('Eng');
  const [forOTP, setForOTP] = React.useState(false);
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [otpValue, setOtpValue] = React.useState('');
  const [otpArrya, setOtpArrya] = React.useState([]);
  const [isResend, setIsResend] = React.useState(false);
  const [timer, setTimer] = React.useState(3);

  const [pendingPop, setPendingPop] = React.useState(false);

  const [isAccept, setIsAccept] = React.useState(false);

  const [officerName, setOfficerName] = React.useState('');
  const [officerPhone, setOfficerPhone] = React.useState('');
  const [officerType, setOfficerType] = React.useState('');

  const [alertColor, setAlertColor] = React.useState(false);
  const [deviceToken, setDeviceToken] = React.useState('');
  const regexNum = /^[6-9]\d{9}$/;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      AsyncStorage.getItem('language').then(val => {
        if (val != null) {
          setLanguage(val);
          i18n
            .changeLanguage(val)
            .then(() => console.log(val))
            .catch(err => console.log(err));
        }
      });
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    
    const getToken = async () => {
      const token = await messaging().getToken();
      setDeviceToken(token);
    };
    getToken();
  }, []);


  const sendOtp = () => {
    if (mobileNumber.trim() == '') {
      if (route.params.type == 'Contractor') {
        Toast.show(t('Please enter Mobile Number'), Toast.LONG);
      } else if (route.params.type == 'Dealer') {
        Toast.show(t('Please enter Member Id / SAP Id'), Toast.LONG);
      } else {
        Toast.show(t('Please enter Employee Id'));
      }
    } else if (route.params.type == 'Contractor' && mobileNumber.length < 10) {
      Toast.show(t('Please enter 10 digit for Phone Number'), Toast.LONG);
    } else if (
      route.params.type == 'Contractor' &&
      mobileNumber != '' &&
      !regexNum.test(mobileNumber)
    ) {
      Toast.show(
        t('Mobile Number accept Only Number / Mobile No. not Valid'),
        Toast.LONG,
      );
    } else if (!isAccept) {
      Toast.show(t('Please Accept Terms & Conditions'), Toast.LONG);
      setAlertColor(true);
    } else {
      setAlertColor(false);
      setLoading(true);
      let formdata = new FormData();
      formdata.append('mobileNumber', mobileNumber);
      formdata.append('lang_code', currentLanguage);
      formdata.append('userType', route.params.type);
      apiClient
        .post(`${BASE_URL}/login/get-otp`, formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
            accesstoken: `${AccessToken}`,
          },
        })
        .then(response => {
          console.log('RESSS:: ', response);
          return response;
        })
        .then(responseJson => {
          setLoading(false);
          console.log('responseJson:: ', responseJson.data);
          if (responseJson.data.bstatus == 1) {
            console.log('RES 1');
            Toast.show(responseJson.data.message, Toast.LONG);
            if (responseJson.data.eligable_for_login == 1) {
              console.log('RES 2');
              setForOTP(true);
              setOtpValue(responseJson.data.OTP);
              var myArray = responseJson.data.OTP.split('');
              setOtpArrya(myArray);
            } else {
              console.log('RES 3');
              setPendingPop(true);
              setOfficerName(responseJson.data.officerName);
              setOfficerPhone(responseJson.data.officerNumber);
              setOfficerType(responseJson.data.officerType);
            }
          } else {
            console.log('RES 4', responseJson.data.message);
            Toast.show(responseJson.data.message || 'OTP SENT', Toast.LONG);
          }
        })
        .catch(error => {
          //console.log('INSIDE CATCH', error);
          setLoading(false);
          if (error.toString().includes('Network request failed')) {
            Alert.alert(
              'Secure connection error or network issue! Please try again later.',
            );
          } else {
            //console.log('Error:', error);
            navigation.replace('Splash');
            BackHandler.exitApp();
          }
        });
    }
  };

  const onVerify = () => {
    Keyboard.dismiss();
    if (otpValue == '') {
      Toast.show(t('Please enter OTP Number'), Toast.LONG);
    } else {
      setLoading(true);
      let formdata = new FormData();
      formdata.append('mobileNumber', mobileNumber);
      formdata.append('otp', otpValue);
      formdata.append('os_type', `${OS_TYPE}`);
      formdata.append('os_version', `${APP_VERSION}`);
      formdata.append('lang_code', currentLanguage);
      formdata.append('device_token', deviceToken);
      console.log("Login Formdata: ",formdata);
      apiClient
        .post(`${BASE_URL}/login/verify-otp`, formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
            accesstoken: `${AccessToken}`,
          },
        })
        .then(response => {
          console.log('RESSS:: ', response);
          return response;
        })
        .then(responseJson => {
          console.log('responseJson:: ', responseJson);
          var serverHash = responseJson.headers['x-hash-value'];
          const checksum = CRC32.str(hashKey);
          const finalChecksum = (checksum >>> 0).toString(16).padStart(8, '0');
          if (serverHash === finalChecksum) {
            if (responseJson.data.bstatus == 1) {
              Toast.show(responseJson.data.message, Toast.LONG);
              setForOTP(false);
              if (responseJson.data.eligable_for_login == 1) {
                getUserData(responseJson.data.token);
                Events.publish('token', responseJson.data.token);
                setMobileNumber('');
                setOtpValue('');
              } else {
                setLoading(false);
                navigation.navigate('Registration', { mobile: mobileNumber });
                setMobileNumber('');
                setOtpValue('');
              }
            } else {
              setLoading(false);
              Toast.show(responseJson.data.message, Toast.LONG);
            }
          } else {
            setLoading(false);
          }
        })
        .catch(error => {
          setLoading(false);
          //console.log('login Error:', error);
          navigation.replace('Splash');
          BackHandler.exitApp();
        });
    }
  };

  const getUserData = (token) => {
    apiClient
      .post(`${BASE_URL}/get-user-after-login-info`, "", {
        headers: {
          'Content-Type': 'multipart/form-data',
          accesstoken: `${AccessToken}`,
          Useraccesstoken: token
        },
      })
      .then(response => {
        console.log('RESSS:: ', response);
        return response;
      })
      .then(responseJson => {
        console.log('responseJson:: ', responseJson);
        setLoading(false);
        if (responseJson.data.bstatus === 1) {
          var CryptoJS = require('crypto-js');
          var encryptedData = CryptoJS.AES.encrypt(
            JSON.stringify(responseJson.data),
            secretKey,
          ).toString();
          AsyncStorage.setItem('userToken', encryptedData);
          navigation.replace('Home');
        } else {
          Toast.show(responseJson.data.message, Toast.LONG);
        }
      })
      .catch(error => {
        setLoading(false);
        console.log('after login Error:', error);
      });
  };

  const onOkay = () => {
    setPendingPop(false);
    navigation.goBack();
  };

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
      <VStack flex={1} backgroundColor={lightColor}>
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
          <VStack space={5} alignItems="center">
            <Image
              source={require('../assets/images/construction.jpg')}
              style={{
                width: '100%',
                height: 400,
                resizeMode: 'cover',
                position: 'relative',
              }}
            />
            <Image
              source={require('../assets/images/logo.jpg')}
              style={MainStyle.logo}
            />
          </VStack>
          <VStack space={5} paddingX={10} paddingY={5}>
            <Text
              color={darkColor}
              fontFamily={fontBold}
              fontSize="lg"
              textAlign="center">
              {route.params.pageName == 'Sign In'
                ? t('Please Signin to your account')
                : t('Please Sign Up to new account')}
            </Text>
            <Stack space={3}>
              {route.params.type == 'Contractor' ? (
                <View>
                  <Text style={MainStyle.lable} fontSize="xs">
                    {t('Mobile Number')} <Text color={dangerColor}>*</Text>
                  </Text>
                  <View style={MainStyle.inputbox}>
                    {!forOTP ? (
                      <Input
                        height={43}
                        fontFamily={fontRegular}
                        size="md"
                        variant="unstyled"
                        keyboardType="number-pad"
                        maxLength={10}
                        onChangeText={text => setMobileNumber(text)}
                        placeholder={t('Please Enter Mobile Number')}
                      />
                    ) : (
                      <Input
                        height={43}
                        backgroundColor={lightGrey}
                        fontFamily={fontRegular}
                        size="md"
                        variant="unstyled"
                        value={mobileNumber}
                        readOnly
                        InputRightElement={
                          <Icon
                            name="checkmark-circle"
                            size={22}
                            color={successColor}
                            style={{ marginRight: 10, textAlign: 'center' }}
                          />
                        }
                      />
                    )}
                  </View>
                </View>
              ) : (
                <View>
                  <Text style={MainStyle.lable} fontSize="xs">
                    {route.params.type == 'Dealer'
                      ? t('Member Id / SAP Id')
                      : t('Employee Id')}{' '}
                    <Text color={dangerColor}>*</Text>
                  </Text>
                  <View style={MainStyle.inputbox}>
                    {!forOTP ? (
                      <Input
                        height={43}
                        fontFamily={fontRegular}
                        size="md"
                        variant="unstyled"
                        onChangeText={text => setMobileNumber(text)}
                        placeholder={
                          route.params.type == 'Dealer'
                            ? t('Please enter  Member / SAP Id')
                            : t('Please enter Employee Id')
                        }
                      />
                    ) : (
                      <Input
                        height={43}
                        backgroundColor={lightGrey}
                        fontFamily={fontRegular}
                        size="md"
                        variant="unstyled"
                        value={mobileNumber}
                        readOnly
                        InputRightElement={
                          <Icon
                            name="checkmark-circle"
                            size={22}
                            color={successColor}
                            style={{ marginRight: 10, textAlign: 'center' }}
                          />
                        }
                      />
                    )}
                  </View>
                </View>
              )}
              {forOTP && (
                <View>
                  <Text style={MainStyle.lable} fontSize="xs">
                    {t('OTP')}{' '}
                    <Text color={darkGrey} fontSize="10">
                      ({t('To Verify Mobile No.')})
                    </Text>{' '}
                    <Text color={dangerColor}>*</Text>
                  </Text>
                  <HStack justifyContent="space-between" alignItems="center">
                    <View style={MainStyle.inputbox} width={150}>
                      <Input
                        height={43}
                        value={otpValue}
                        fontFamily={fontBold}
                        size="xl"
                        letterSpacing={5}
                        variant="unstyled"
                        keyboardType="number-pad"
                        secureTextEntry={true}
                        maxLength={6}
                        onChangeText={text => setOtpValue(text)}
                      />
                    </View>
                    <Button variant="unstyled" onPress={() => sendOtp()}>
                      <Text
                        color={baseColor}
                        fontFamily={fontSemiBold}
                        fontSize="sm">
                        {t('Resend')}
                      </Text>
                    </Button>
                  </HStack>
                </View>
              )}
              <VStack space={2}>
                {!forOTP && (
                  <Stack space={3} marginTop={5}>
                    <HStack space={1} alignItems="center" paddingRight={2}>
                      <CheckBox
                        value={isAccept}
                        onValueChange={() => setIsAccept(!isAccept)}
                        tintColors={{ true: successColor }}
                      />
                      <TouchableOpacity
                        onPress={() => navigation.navigate('TermsConditions')}
                        style={{ width: '90%' }}>
                        <Text
                          fontSize="xs"
                          fontFamily={fontRegular}
                          color={alertColor ? dangerColor : darkColor}>
                          {t('I accept the')}{' '}
                          <Text
                            fontSize="xs"
                            fontFamily={fontBold}
                            style={{ textDecorationLine: 'underline' }}>
                            {t('terms & conditions and privacy policy')}
                          </Text>{' '}
                          {t('of use')}
                        </Text>
                      </TouchableOpacity>
                    </HStack>

                    <Button
                      style={MainStyle.solidbtn}
                      onPress={() => sendOtp()}>
                      <Text
                        color={lightColor}
                        fontFamily={fontSemiBold}
                        fontSize="sm">
                        {t('Get OTP')}
                      </Text>
                    </Button>
                  </Stack>
                )}
                {forOTP && (
                  <Button
                    marginTop={3}
                    style={MainStyle.solidbtn}
                    onPress={() => onVerify()}>
                    <Text
                      color={lightColor}
                      fontFamily={fontSemiBold}
                      fontSize="sm">
                      {t('Verify OTP')}
                    </Text>
                  </Button>
                )}
                <Button
                  variant="unstyled"
                  backgroundColor={greyColor}
                  borderRadius={8}
                  onPress={() => navigation.replace('Intro')}>
                  <Text
                    color={darkColor}
                    fontFamily={fontSemiBold}
                    fontSize="xs">
                    {t('Go Back')}
                  </Text>
                </Button>
              </VStack>
            </Stack>
          </VStack>
        </ScrollView>
      </VStack>
      {pendingPop && (
        <View style={MainStyle.spincontainer}>
          <VStack style={MainStyle.popbox} space={10}>
            <Image
              source={require('../assets/images/hour.gif')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                position: 'relative',
                marginTop: 30,
              }}
            />
            <Image
              source={require('../assets/images/logo.jpg')}
              style={MainStyle.logo}
            />
            <VStack justifyContent="center" alignItems="center">
              <Text
                color={darkGrey}
                fontSize="sm"
                fontFamily={fontSemiBold}
                textAlign="center">
                {t('Your registration approval is pending with')}{' '}
                <Text fontSize="sm" fontFamily={fontBold}>
                  {officerType} {officerName}
                </Text>
              </Text>
              <HStack
                marginTop={4}
                space={2}
                justifyContent="center"
                alignItems="center">
                <Text color={darkGrey} fontSize="sm" fontFamily={fontSemiBold}>
                  {t('Contact No:')}
                </Text>
                <Pressable
                  onPress={() => Linking.openURL(`tel:${officerPhone}`)}>
                  <HStack alignItems="center">
                    <Icon name="call" size={16} color={baseColor} />
                    <Text color={baseColor} fontSize="sm" fontFamily={fontBold}>
                      {' '}
                      {officerPhone}
                    </Text>
                  </HStack>
                </Pressable>
              </HStack>
            </VStack>
            <Button
              style={MainStyle.solidbtn}
              width={'100%'}
              onPress={() => onOkay()}>
              <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">
                {t('Okay')}
              </Text>
            </Button>
          </VStack>
        </View>
      )}
      {loading && (
        <View style={MainStyle.spincontainer}>
          <ActivityIndicator
            animating={loading}
            size="large"
            color={warningColor}
          />
        </View>
      )}
    </NativeBaseProvider>
  );
};

/* const styles = StyleSheet.create({
}); */

export default LoginScreen;
