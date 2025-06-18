  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[2]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _Config = _$$_REQUIRE(_dependencyMap[5]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[6]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[8]);
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[12]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var RedeemptionConfirmationScreen = function RedeemptionConfirmationScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
      width = _useWindowDimensions.width;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState(""),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      pageData = _React$useState4[0],
      setPageData = _React$useState4[1];
    var _React$useState5 = _react.default.useState(''),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      mobileNumber = _React$useState6[0],
      setMobileNumber = _React$useState6[1];
    var _React$useState7 = _react.default.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      forMobileOTP = _React$useState8[0],
      setForMobileOTP = _React$useState8[1];
    var _React$useState9 = _react.default.useState(''),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      otpMobileValue = _React$useState10[0],
      setOtpMobileValue = _React$useState10[1];
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      successPop = _React$useState12[0],
      setSuccessPop = _React$useState12[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData();
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData() {
      var formdata = new FormData();
      formdata.append("contentCode", "About-Program_1");
      fetch(`${_Config.BASE_URL}/get-general-content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          'accesstoken': `${_Config.AccessToken}`
        },
        body: formdata
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        //console.log("Content:", responseJson);
        if (responseJson.bstatus == 1) {
          setLoading(false);
          setPageData(responseJson.content_details.article_detail);
        } else {
          setLoading(false);
          //Toast.show(responseJson.message, Toast.LONG);
          if (responseJson.msg_code == "msg_0047") {
            _asyncStorage.default.clear();
            navigation.replace('Intro');
          }
        }
      }).catch(function (error) {
        setLoading(false);
        //console.log("Error:", error);
        _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
      });
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: "#000000",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: "Confirmation",
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontWeight: "bold",
              fontSize: "lg",
              marginBottom: 3,
              children: t("Redeemption Confirmation")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "xs",
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 3,
              marginTop: 7,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("Mobile Number"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    height: 43,
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    keyboardType: "number-pad",
                    maxLength: 10,
                    onChangeText: function onChangeText(text) {
                      return setMobileNumber(text);
                    },
                    placeholder: t("Please Enter Mobile Number")
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("OTP"), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    color: _MainStyle.darkGrey,
                    fontSize: "10",
                    children: ["(", t("To Verify Mobile No."), ")"]
                  }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  justifyContent: "space-between",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: [_MainStyle.MainStyle.inputbox, {
                      width: 180
                    }],
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      fontFamily: _MainStyle.fontBold,
                      size: "xl",
                      letterSpacing: "5",
                      variant: "unstyled",
                      onChangeText: function onChangeText(text) {
                        return setOtpMobileValue(text);
                      },
                      keyboardType: "number-pad",
                      maxLength: 6
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
                      children: t("Resend")
                    })
                  })]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          backgroundColor: _MainStyle.lightColor,
          width: '94%',
          alignSelf: "center",
          padding: 5,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            marginTop: 6,
            space: 2,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: _MainStyle.MainStyle.solidbtn,
              onPress: function onPress() {
                return setSuccessPop(true);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "sm",
                children: t("Confirm")
              })
            })
          })
        })]
      }), successPop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          style: _MainStyle.MainStyle.popbox,
          space: 10,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[13]),
            alt: "check",
            style: {
              width: 100,
              height: 100,
              resizeMode: 'contain',
              position: 'relative',
              marginTop: 30
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[14]),
            alt: "logo",
            style: _MainStyle.MainStyle.logo
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            justifyContent: "center",
            alignItems: "center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "sm",
              fontFamily: _MainStyle.fontSemiBold,
              textAlign: "center",
              children: t("Thank you. Your order has been successfully Placed")
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
            width: '100%',
            space: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: _MainStyle.MainStyle.solidbtn,
              onPress: function onPress() {
                return navigation.replace("Home");
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "sm",
                children: t("Go Back")
              })
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
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = RedeemptionConfirmationScreen;
