  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _checkbox = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[5]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[6]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[7]);
  var _Config = _$$_REQUIRE(_dependencyMap[8]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[9]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[10]);
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeOtpEntry = _$$_REQUIRE(_dependencyMap[13]);
  var _Events = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _messaging = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _crc = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[16]));
  var _reactNativeSslPinning = _$$_REQUIRE(_dependencyMap[17]);
  var _apiClient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[18]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[19]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  //import { getHash, getOtp, startOtpListener } from 'react-native-otp-verify';

  //import CountDown from 'react-native-countdown-component';

  var LoginScreen = function LoginScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState('Eng'),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      currentLanguage = _React$useState4[0],
      setLanguage = _React$useState4[1];
    var _React$useState5 = _react.default.useState(false),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      forOTP = _React$useState6[0],
      setForOTP = _React$useState6[1];
    var _React$useState7 = _react.default.useState(''),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      mobileNumber = _React$useState8[0],
      setMobileNumber = _React$useState8[1];
    var _React$useState9 = _react.default.useState(''),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      otpValue = _React$useState0[0],
      setOtpValue = _React$useState0[1];
    var _React$useState1 = _react.default.useState([]),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState1, 2),
      otpArrya = _React$useState10[0],
      setOtpArrya = _React$useState10[1];
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      isResend = _React$useState12[0],
      setIsResend = _React$useState12[1];
    var _React$useState13 = _react.default.useState(3),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      timer = _React$useState14[0],
      setTimer = _React$useState14[1];
    var _React$useState15 = _react.default.useState(false),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      pendingPop = _React$useState16[0],
      setPendingPop = _React$useState16[1];
    var _React$useState17 = _react.default.useState(false),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      isAccept = _React$useState18[0],
      setIsAccept = _React$useState18[1];
    var _React$useState19 = _react.default.useState(''),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      officerName = _React$useState20[0],
      setOfficerName = _React$useState20[1];
    var _React$useState21 = _react.default.useState(''),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      officerPhone = _React$useState22[0],
      setOfficerPhone = _React$useState22[1];
    var _React$useState23 = _react.default.useState(''),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      officerType = _React$useState24[0],
      setOfficerType = _React$useState24[1];
    var _React$useState25 = _react.default.useState(false),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      alertColor = _React$useState26[0],
      setAlertColor = _React$useState26[1];
    var _React$useState27 = _react.default.useState(''),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      deviceToken = _React$useState28[0],
      setDeviceToken = _React$useState28[1];
    var regexNum = /^[6-9]\d{9}$/;
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        _asyncStorage.default.getItem('language').then(function (val) {
          if (val != null) {
            setLanguage(val);
            i18n.changeLanguage(val).then(function () {
              return console.log(val);
            }).catch(function (err) {
              return console.log(err);
            });
          }
        });
      });
      return unsubscribe;
    }, []);
    (0, _react.useEffect)(function () {
      var getToken = /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)(function* () {
          var token = yield (0, _messaging.default)().getToken();
          setDeviceToken(token);
        });
        return function getToken() {
          return _ref2.apply(this, arguments);
        };
      }();
      getToken();
    }, []);
    var sendOtp = function sendOtp() {
      if (mobileNumber.trim() == '') {
        if (route.params.type == 'Contractor') {
          _reactNativeSimpleToast.default.show(t('Please enter Mobile Number'), _reactNativeSimpleToast.default.LONG);
        } else if (route.params.type == 'Dealer') {
          _reactNativeSimpleToast.default.show(t('Please enter Member Id / SAP Id'), _reactNativeSimpleToast.default.LONG);
        } else {
          _reactNativeSimpleToast.default.show(t('Please enter Employee Id'));
        }
      } else if (route.params.type == 'Contractor' && mobileNumber.length < 10) {
        _reactNativeSimpleToast.default.show(t('Please enter 10 digit for Phone Number'), _reactNativeSimpleToast.default.LONG);
      } else if (route.params.type == 'Contractor' && mobileNumber != '' && !regexNum.test(mobileNumber)) {
        _reactNativeSimpleToast.default.show(t('Mobile Number accept Only Number / Mobile No. not Valid'), _reactNativeSimpleToast.default.LONG);
      } else if (!isAccept) {
        _reactNativeSimpleToast.default.show(t('Please Accept Terms & Conditions'), _reactNativeSimpleToast.default.LONG);
        setAlertColor(true);
      } else {
        setAlertColor(false);
        setLoading(true);
        var formdata = new FormData();
        formdata.append('mobileNumber', mobileNumber);
        formdata.append('lang_code', currentLanguage);
        formdata.append('userType', route.params.type);
        _apiClient.default.post(`${_Config.BASE_URL}/login/get-otp`, formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
            accesstoken: `${_Config.AccessToken}`
          }
        }).then(function (response) {
          console.log('RESSS:: ', response);
          return response;
        }).then(function (responseJson) {
          setLoading(false);
          console.log('responseJson:: ', responseJson.data);
          if (responseJson.data.bstatus == 1) {
            console.log('RES 1');
            _reactNativeSimpleToast.default.show(responseJson.data.message, _reactNativeSimpleToast.default.LONG);
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
            _reactNativeSimpleToast.default.show(responseJson.data.message || 'OTP SENT', _reactNativeSimpleToast.default.LONG);
          }
        }).catch(function (error) {
          //console.log('INSIDE CATCH', error);
          setLoading(false);
          if (error.toString().includes('Network request failed')) {
            _nativeBase.Alert.alert('Secure connection error or network issue! Please try again later.');
          } else {
            //console.log('Error:', error);
            navigation.replace('Splash');
            _reactNative.BackHandler.exitApp();
          }
        });
      }
    };
    var onVerify = function onVerify() {
      _reactNative.Keyboard.dismiss();
      if (otpValue == '') {
        _reactNativeSimpleToast.default.show(t('Please enter OTP Number'), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        var formdata = new FormData();
        formdata.append('mobileNumber', mobileNumber);
        formdata.append('otp', otpValue);
        formdata.append('os_type', `${_Config.OS_TYPE}`);
        formdata.append('os_version', `${_Config.APP_VERSION}`);
        formdata.append('lang_code', currentLanguage);
        formdata.append('device_token', deviceToken);
        console.log("Login Formdata: ", formdata);
        _apiClient.default.post(`${_Config.BASE_URL}/login/verify-otp`, formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
            accesstoken: `${_Config.AccessToken}`
          }
        }).then(function (response) {
          console.log('RESSS:: ', response);
          return response;
        }).then(function (responseJson) {
          console.log('responseJson:: ', responseJson);
          var serverHash = responseJson.headers['x-hash-value'];
          var checksum = _crc.default.str(_Config.hashKey);
          var finalChecksum = (checksum >>> 0).toString(16).padStart(8, '0');
          if (serverHash === finalChecksum) {
            if (responseJson.data.bstatus == 1) {
              _reactNativeSimpleToast.default.show(responseJson.data.message, _reactNativeSimpleToast.default.LONG);
              setForOTP(false);
              if (responseJson.data.eligable_for_login == 1) {
                getUserData(responseJson.data.token);
                _Events.default.publish('token', responseJson.data.token);
                setMobileNumber('');
                setOtpValue('');
              } else {
                setLoading(false);
                navigation.navigate('Registration', {
                  mobile: mobileNumber
                });
                setMobileNumber('');
                setOtpValue('');
              }
            } else {
              setLoading(false);
              _reactNativeSimpleToast.default.show(responseJson.data.message, _reactNativeSimpleToast.default.LONG);
            }
          } else {
            setLoading(false);
          }
        }).catch(function (error) {
          setLoading(false);
          //console.log('login Error:', error);
          navigation.replace('Splash');
          _reactNative.BackHandler.exitApp();
        });
      }
    };
    var getUserData = function getUserData(token) {
      _apiClient.default.post(`${_Config.BASE_URL}/get-user-after-login-info`, "", {
        headers: {
          'Content-Type': 'multipart/form-data',
          accesstoken: `${_Config.AccessToken}`,
          Useraccesstoken: token
        }
      }).then(function (response) {
        console.log('RESSS:: ', response);
        return response;
      }).then(function (responseJson) {
        console.log('responseJson:: ', responseJson);
        setLoading(false);
        if (responseJson.data.bstatus === 1) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[20]);
          var encryptedData = CryptoJS.AES.encrypt(JSON.stringify(responseJson.data), _Config.secretKey).toString();
          _asyncStorage.default.setItem('userToken', encryptedData);
          navigation.replace('Home');
        } else {
          _reactNativeSimpleToast.default.show(responseJson.data.message, _reactNativeSimpleToast.default.LONG);
        }
      }).catch(function (error) {
        setLoading(false);
        console.log('after login Error:', error);
      });
    };
    var onOkay = function onOkay() {
      setPendingPop(false);
      navigation.goBack();
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 5,
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[21]),
              style: {
                width: '100%',
                height: 400,
                resizeMode: 'cover',
                position: 'relative'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[22]),
              style: _MainStyle.MainStyle.logo
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 5,
            paddingX: 10,
            paddingY: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "lg",
              textAlign: "center",
              children: route.params.pageName == 'Sign In' ? t('Please Signin to your account') : t('Please Sign Up to new account')
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 3,
              children: [route.params.type == 'Contractor' ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t('Mobile Number'), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: !forOTP ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    height: 43,
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    keyboardType: "number-pad",
                    maxLength: 10,
                    onChangeText: function onChangeText(text) {
                      return setMobileNumber(text);
                    },
                    placeholder: t('Please Enter Mobile Number')
                  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    height: 43,
                    backgroundColor: _MainStyle.lightGrey,
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    value: mobileNumber,
                    readOnly: true,
                    InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-circle",
                      size: 22,
                      color: _MainStyle.successColor,
                      style: {
                        marginRight: 10,
                        textAlign: 'center'
                      }
                    })
                  })
                })]
              }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [route.params.type == 'Dealer' ? t('Member Id / SAP Id') : t('Employee Id'), ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: !forOTP ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    height: 43,
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    onChangeText: function onChangeText(text) {
                      return setMobileNumber(text);
                    },
                    placeholder: route.params.type == 'Dealer' ? t('Please enter  Member / SAP Id') : t('Please enter Employee Id')
                  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    height: 43,
                    backgroundColor: _MainStyle.lightGrey,
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    value: mobileNumber,
                    readOnly: true,
                    InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-circle",
                      size: 22,
                      color: _MainStyle.successColor,
                      style: {
                        marginRight: 10,
                        textAlign: 'center'
                      }
                    })
                  })
                })]
              }), forOTP && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t('OTP'), ' ', /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    color: _MainStyle.darkGrey,
                    fontSize: "10",
                    children: ["(", t('To Verify Mobile No.'), ")"]
                  }), ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  justifyContent: "space-between",
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    width: 150,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      height: 43,
                      value: otpValue,
                      fontFamily: _MainStyle.fontBold,
                      size: "xl",
                      letterSpacing: 5,
                      variant: "unstyled",
                      keyboardType: "number-pad",
                      secureTextEntry: true,
                      maxLength: 6,
                      onChangeText: function onChangeText(text) {
                        return setOtpValue(text);
                      }
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    variant: "unstyled",
                    onPress: function onPress() {
                      return sendOtp();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.baseColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      fontSize: "sm",
                      children: t('Resend')
                    })
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 2,
                children: [!forOTP && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                  space: 3,
                  marginTop: 5,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    space: 1,
                    alignItems: "center",
                    paddingRight: 2,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkbox.default, {
                      value: isAccept,
                      onValueChange: function onValueChange() {
                        return setIsAccept(!isAccept);
                      },
                      tintColors: {
                        true: _MainStyle.successColor
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
                      onPress: function onPress() {
                        return navigation.navigate('TermsConditions');
                      },
                      style: {
                        width: '90%'
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        color: alertColor ? _MainStyle.dangerColor : _MainStyle.darkColor,
                        children: [t('I accept the'), ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontBold,
                          style: {
                            textDecorationLine: 'underline'
                          },
                          children: t('terms & conditions and privacy policy')
                        }), ' ', t('of use')]
                      })
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    style: _MainStyle.MainStyle.solidbtn,
                    onPress: function onPress() {
                      return sendOtp();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      fontSize: "sm",
                      children: t('Get OTP')
                    })
                  })]
                }), forOTP && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  marginTop: 3,
                  style: _MainStyle.MainStyle.solidbtn,
                  onPress: function onPress() {
                    return onVerify();
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "sm",
                    children: t('Verify OTP')
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  variant: "unstyled",
                  backgroundColor: _MainStyle.greyColor,
                  borderRadius: 8,
                  onPress: function onPress() {
                    return navigation.replace('Intro');
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.darkColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "xs",
                    children: t('Go Back')
                  })
                })]
              })]
            })]
          })]
        })
      }), pendingPop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          style: _MainStyle.MainStyle.popbox,
          space: 10,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[23]),
            style: {
              width: 100,
              height: 100,
              resizeMode: 'contain',
              position: 'relative',
              marginTop: 30
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[22]),
            style: _MainStyle.MainStyle.logo
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            justifyContent: "center",
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "sm",
              fontFamily: _MainStyle.fontSemiBold,
              textAlign: "center",
              children: [t('Your registration approval is pending with'), ' ', /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                fontSize: "sm",
                fontFamily: _MainStyle.fontBold,
                children: [officerType, " ", officerName]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              marginTop: 4,
              space: 2,
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.darkGrey,
                fontSize: "sm",
                fontFamily: _MainStyle.fontSemiBold,
                children: t('Contact No:')
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                onPress: function onPress() {
                  return _reactNative.Linking.openURL(`tel:${officerPhone}`);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "call",
                    size: 16,
                    color: _MainStyle.baseColor
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    color: _MainStyle.baseColor,
                    fontSize: "sm",
                    fontFamily: _MainStyle.fontBold,
                    children: [' ', officerPhone]
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            style: _MainStyle.MainStyle.solidbtn,
            width: '100%',
            onPress: function onPress() {
              return onOkay();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "sm",
              children: t('Okay')
            })
          })]
        })
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          animating: loading,
          size: "large",
          color: _MainStyle.warningColor
        })
      })]
    });
  };

  /* const styles = StyleSheet.create({
  }); */
  var _default = exports.default = LoginScreen;
