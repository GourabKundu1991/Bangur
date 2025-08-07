  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[3]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[5]);
  var _Config = _$$_REQUIRE(_dependencyMap[6]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[7]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[9]);
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _HeaderForOrderDeclearation = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeGestureHandler = _$$_REQUIRE(_dependencyMap[13]);
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _reactNativeCountdownComponent = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _cryptoJs = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[16]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[17]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  // import { OtpInput } from "react-native-otp-entry";

  var RedeemsonOTP = function RedeemsonOTP(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useState = (0, _react.useState)(120),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      secondsLeft = _useState2[0],
      setSecondsLeft = _useState2[1];
    var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
      width = _useWindowDimensions.width;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      isAccept = _React$useState2[0],
      setIsAccept = _React$useState2[1];
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];
    var _React$useState5 = _react.default.useState(false),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      forOTP = _React$useState6[0],
      setForOTP = _React$useState6[1];
    var _React$useState7 = _react.default.useState(''),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      otpValue = _React$useState8[0],
      setOtpValue = _React$useState8[1];
    var _React$useState9 = _react.default.useState(''),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      originalOTP = _React$useState0[0],
      setOriginalOTP = _React$useState0[1];
    var _ref2 = route.params || {},
      _ref2$orderid = _ref2.orderid,
      orderid = _ref2$orderid === undefined ? 'No card ID provided' : _ref2$orderid;
    var _ref3 = route.params || {},
      _ref3$cartId = _ref3.cartId,
      cartId = _ref3$cartId === undefined ? '' : _ref3$cartId;
    var _ref4 = route.params || {},
      _ref4$addressid = _ref4.addressid,
      addressid = _ref4$addressid === undefined ? '' : _ref4$addressid;
    var _ref5 = route.params || {},
      _ref5$address = _ref5.address,
      address = _ref5$address === undefined ? '' : _ref5$address;
    console.log("orderid================", orderid.orderid);
    var _React$useState1 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState1, 2),
      Phoneno = _React$useState10[0],
      setPhoneno = _React$useState10[1];
    var _React$useState11 = _react.default.useState(180),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      timeLeft = _React$useState12[0],
      setTimeLeft = _React$useState12[1];
    var _React$useState13 = _react.default.useState(false),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      timeup = _React$useState14[0],
      setTimeUp = _React$useState14[1];
    var _React$useState15 = _react.default.useState(false),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      showresendotpbuttom = _React$useState16[0],
      setShowresendOtp = _React$useState16[1];
    var _useState3 = (0, _react.useState)(3),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      timer = _useState4[0],
      setTimer = _useState4[1]; // Initialize timer state, e.g., 1 minute

    var _React$useState17 = _react.default.useState(""),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      userType = _React$useState18[0],
      setUserType = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      cartcount = _React$useState20[0],
      setCartCount = _React$useState20[1];
    var cartCount = function cartCount() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          fetch(`${_Config.BASE_URL}/cart/count`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'accesstoken': `${_Config.AccessToken}`,
              'Useraccesstoken': JSON.parse(decryptData).token
            }
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("cartCount:", responseJson);
            setCartCount(responseJson.cart_count);
          }).catch(function (error) {
            setLoading(false);
            console.log("Error:", error);
          });
        }
      });
    };
    (0, _react.useEffect)(function () {
      cartCount();
      getAllAddressData();
    }, []);
    (0, _react.useEffect)(function () {
      var timeout = setTimeout(function () {
        OTPcall();
        console.log("OTP calllllllllllllllllllllllllll");
      }, 3000); // 3 milliseconds delay

      return function () {
        return clearTimeout(timeout);
      }; // Cleanup to avoid memory leaks
    }, [Phoneno]);
    var getAllAddressData = function getAllAddressData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        // alert(val)
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          fetch(`${_Config.BASE_URL}/view-profile`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'accesstoken': `${_Config.AccessToken}`,
              'Useraccesstoken': JSON.parse(decryptData).token
            },
            body: formdata
          })
          // alert(decryptData) 
          .then(function (response) {
            return response.json().then(function (finalRes) {
              setLoading(false);
              var mobileString = finalRes.profile.mobile;
              // console.log(mobileString);
              setPhoneno(mobileString);
            });
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        } else {
          setLoading(false);
        }
      });
    };
    var OTPcall = function OTPcall() {
      _reactNative.Keyboard.dismiss();
      // console.log("otpppppppp calllllllllllllllll");
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          fetch(`${_Config.BASE_URL}/order/redemption-otp`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'accesstoken': `${_Config.AccessToken}`,
              'Useraccesstoken': JSON.parse(decryptData).token
            }
          })
          // alert(decryptData)
          .then(function (response) {
            response.json().then(function (finalres) {
              if (finalres.bstatus == 1) {
                /* setOtpValue(finalres.OTP)
                setOriginalOTP(finalres.OTP) */
                _reactNativeSimpleToast.default.show(finalres.message);
              } else {
                _reactNativeSimpleToast.default.show(finalres.message);
              }
            });
          });
        } else {
          setLoading(false);
        }
      });
    };
    var ForSubmit = /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2.default)(function* () {
        _reactNative.Keyboard.dismiss();
        try {
          var val = yield _asyncStorage.default.getItem('userToken');
          if (!val) {
            setLoading(false);
            return; // Stop execution if token is not found.
          }
          var _CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          var decryptData = _CryptoJS.AES.decrypt(val, _Config.secretKey).toString(_CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("cartId", route.params.cartId);
          formdata.append("table_name", route.params.tablename); //"dcm_addresses"
          formdata.append("address_id", route.params.addressId);
          var response = yield fetch(`${_Config.BASE_URL}/order/place`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'accesstoken': _Config.AccessToken,
              'Useraccesstoken': JSON.parse(decryptData).token
            },
            body: formdata
          });
          var responseJson = yield response.json();
          if (responseJson.bstatus == 1) {
            // /order/placeigation.navigate("OrderPlacessSuccessfully",{"orderis":responseJson.orderid});
            //    navigation.navigate("OrderPlacessSuccessfully", { orderis: responseJson.orderid });
            navigation.navigate("OrderPlacessSuccessfully", {
              orderId: responseJson.orderId,
              influencerName: responseJson.name
            });
            _reactNativeSimpleToast.default.show(responseJson.message || "Action completed successfully!");
          } else {
            _reactNativeSimpleToast.default.show(responseJson.message || "Something went wrong!");
            console.error("Unexpected status:", responseJson.bstatus); // For debugging
          }
        } catch (error) {
          // console.error("Error1111111111888:", error);
          // Toast.show(t("Sorry! Something went wrong. Maybe Network request failed.dsd"));
        } finally {
          setLoading(false);
        }
      });
      return function ForSubmit() {
        return _ref6.apply(this, arguments);
      };
    }();
    (0, _react.useEffect)(function () {
      cartCount(); // Will execute on every render
    });
    var ConfarmOtpFunction = function ConfarmOtpFunction() {
      setLoading(false);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        // alert(val)
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("otp", otpValue);
          fetch(`${_Config.BASE_URL}/order/verify-redemption-otp`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'accesstoken': `${_Config.AccessToken}`,
              'Useraccesstoken': JSON.parse(decryptData).token
            },
            body: formdata
          })
          // alert(decryptData) 
          .then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            setLoading(false);
            // const mobileString = JSON.parse(responseJson)
            // setPhoneno(responseJson.profile.mobile)

            if (responseJson.bstatus == 1) {
              ForSubmit();
            } else {
              _reactNativeSimpleToast.default.show(responseJson.message);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        } else {
          setLoading(false);
        }
      });
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: "#000000",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderForOrderDeclearation.default, {
          component: "OTP",
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: {
              backgroundColor: _MainStyle.lightColor,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              width: '94%',
              alignSelf: 'center',
              flex: 1
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
              style: {
                flex: 1,
                paddingHorizontal: 5
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: {
                  alignItems: 'center',
                  marginTop: 25
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  style: {
                    fontSize: 16,
                    alignSelf: "flex-start",
                    paddingLeft: 15,
                    fontWeight: 'bold'
                  },
                  children: t("Redemption Confirmation")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: {
                  alignItems: 'center',
                  marginTop: 2
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  style: {
                    fontSize: 18,
                    alignSelf: "flex-start",
                    paddingLeft: 15
                  },
                  children: t("Please confirm the redemption by entering the OTP sent to your registered mobile number")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                style: {
                  flex: 1,
                  alignItems: 'center',
                  paddingHorizontal: 10
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: [_MainStyle.MainStyle.inputbox, {
                    marginBottom: 18,
                    marginTop: 18
                  }],
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    readOnly: true,
                    size: "lg"
                    // onChangeText={(text) => setPhoneno(text.replace(/[^0-9]/g, ''))} // Restrict input to numbers
                    ,
                    variant: "unstyled",
                    keyboardType: "phone-pad" // Ensure a numeric keyboard
                    ,
                    InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "call-outline" // Changed to phone icon
                      ,
                      size: 20,
                      color: "#666666",
                      style: {
                        width: 25,
                        marginLeft: 10,
                        textAlign: 'center'
                      }
                    })
                    // value={Phoneno != "" ? Phoneno : "" + " *"}
                    ,
                    value: Phoneno
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
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
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TouchableOpacity, {
                      style: {
                        alignSelf: 'flex-start',
                        marginRight: "33%"
                      },
                      onPress: function onPress() {
                        // OTPcall()
                        OTPcall();
                        setTimeLeft(180);
                        setTimeUp(false);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontFamily: _MainStyle.fontSemiBold,
                        fontSize: "sm",
                        style: {
                          color: 'blue',
                          alignSelf: 'flex-start'
                        },
                        children: t("Resend")
                      })
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                style: {
                  height: 45,
                  backgroundColor: _MainStyle.baseColor,
                  borderRadius: 8,
                  overflow: 'hidden',
                  width: "90%",
                  marginTop: 5,
                  alignSelf: "center",
                  marginBottom: 8
                },
                onPress: function onPress() {
                  // navigation.navigate('ViewOrder',{"pageTitle":"View Orders "}
                  // )

                  ConfarmOtpFunction();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "sm",
                  children: t("Submit")
                })
              })]
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {
          navigation: navigation,
          component: userType,
          cartcount: cartcount
        })]
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = RedeemsonOTP;
