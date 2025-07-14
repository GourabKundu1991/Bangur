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
  var _reactNativeRenderHtml = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[12]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var AddressVerificationScreen = function AddressVerificationScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var addressData = route.params.addressData;
    console.log("AddressData-> ", addressData);
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
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      message = _React$useState6[0],
      SetMessage = _React$useState6[1];
    var _React$useState7 = _react.default.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      showRejectModal = _React$useState8[0],
      setShowRejectModal = _React$useState8[1];
    var _React$useState9 = _react.default.useState(null),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      currentOrderId = _React$useState0[0],
      setCurrentOrderId = _React$useState0[1];
    var _React$useState1 = _react.default.useState(''),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState1, 2),
      rejectReason = _React$useState10[0],
      setRejectReason = _React$useState10[1];
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      rejectError = _React$useState12[0],
      setRejectError = _React$useState12[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(false);
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
        // if (addressData.length > 0) {
        //     onVerifyAddress(addressData[0].dcm_order_id);
        //     onRejectAddress(addressData[0].dcm_order_id);
        // }
      });
      return unsubscribe;
    }, []);
    var onVerifyAddress = function onVerifyAddress(orderID) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[13]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          // setUserType(JSON.parse(decryptData).user_type);

          var formdata = new FormData();
          formdata.append("order_id", orderID);
          formdata.append("status", "1");
          fetch(`${_Config.BASE_URL}/verify-address`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'accesstoken': `${_Config.AccessToken}`,
              'Useraccesstoken': JSON.parse(decryptData).token
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("Response:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              SetMessage(responseJson.message);
              // navigation.goBack();
            } else {
              setLoading(false);
              //Toast.show(responseJson.message, Toast.LONG);
              if (responseJson.msg_code == "msg_0046") {
                _asyncStorage.default.clear();
                navigation.replace('Login');
              }
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        }
      });
    };
    var onRejectAddress = function onRejectAddress(orderID, rejectReason) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[13]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          // setUserType(JSON.parse(decryptData).user_type);

          var formdata = new FormData();
          formdata.append("order_id", orderID);
          formdata.append("status", "2");
          formdata.append("reason", rejectReason);
          fetch(`${_Config.BASE_URL}/verify-address`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'accesstoken': `${_Config.AccessToken}`,
              'Useraccesstoken': JSON.parse(decryptData).token
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("Response:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              SetMessage(responseJson.message);
              // navigation.goBack();
            } else {
              setLoading(false);
              //Toast.show(responseJson.message, Toast.LONG);
              if (responseJson.msg_code == "msg_0046") {
                _asyncStorage.default.clear();
                navigation.replace('Login');
              }
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        }
      });
    };
    _react.default.useEffect(function () {
      console.log("Message: ", message);
    }, [message]);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: "#000000",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: route.params.pageTitle,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 5,
            padding: 2,
            width: "100%",
            alignSelf: "center",
            children: [addressData.length > 0 ? addressData.map(function (item, index) {
              var _item$verification_re;
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                space: 3,
                borderColor: '#ddd',
                borderBottomWidth: 1,
                marginLeft: 2,
                paddingY: 4,
                width: "95%",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                  width: "100%",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                    space: 3,
                    alignItems: "flex-start",
                    backgroundColor: '#f3f3f3',
                    padding: 4,
                    borderRadius: 8,
                    overflow: "hidden",
                    width: "100%",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                      space: 2,
                      flex: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "16",
                        color: _MainStyle.darkColor,
                        fontFamily: _MainStyle.fontBold,
                        children: [t("Order ID"), ": ", item.dcm_order_id]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "16",
                        color: _MainStyle.darkColor,
                        children: [t("Address"), ": ", item.address]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "16",
                        color: _MainStyle.darkColor,
                        children: [item.state_name, ", ", item.city, ", ", item.post_code]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "16",
                        color: _MainStyle.darkColor,
                        children: [t("Verification Reason"), ":", " ", (_item$verification_re = item.verification_reason) != null && _item$verification_re.trim() ? item.verification_reason : "NA"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        space: 4,
                        marginTop: 2,
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                          flex: 1,
                          style: _MainStyle.MainStyle.solidbtn,
                          onPress: function onPress() {
                            return onVerifyAddress(item.dcm_order_id);
                          },
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            color: _MainStyle.lightColor,
                            fontFamily: _MainStyle.fontBold,
                            fontSize: "18",
                            children: t("Verify")
                          })
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                          flex: 1,
                          style: [_MainStyle.MainStyle.solidbtn, {
                            backgroundColor: "red"
                          }],
                          onPress: function onPress() {
                            setCurrentOrderId(item.dcm_order_id);
                            setRejectReason('');
                            setShowRejectModal(true);
                          },
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            color: _MainStyle.lightColor,
                            fontFamily: _MainStyle.fontBold,
                            fontSize: "18",
                            children: t("Reject")
                          })
                        })]
                      })]
                    })
                  })
                })
              }, index);
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              children: t("No Address available")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Modal, {
              isOpen: showRejectModal,
              onClose: function onClose() {
                return setShowRejectModal(false);
              },
              size: "lg",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Modal.Content, {
                maxWidth: "90%",
                width: "90%",
                borderRadius: "lg",
                paddingBottom: "4",
                _dark: {
                  bg: "coolGray.800"
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  space: 3,
                  px: "5",
                  pt: "5",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontSize: "20",
                    fontFamily: _MainStyle.fontBold,
                    color: _MainStyle.darkColor,
                    children: t("Reject Reason")
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    placeholder: t("Type your reason here"),
                    multiline: true,
                    numberOfLines: 4,
                    value: rejectReason,
                    onChangeText: function onChangeText(text) {
                      setRejectReason(text);
                      if (text.trim() !== "") setRejectError(false);
                    },
                    textAlignVertical: "top",
                    fontSize: "16",
                    borderRadius: "15",
                    borderColor: rejectError ? "red.500" : "coolGray.300",
                    _focus: {
                      borderColor: rejectError ? "red.500" : _MainStyle.baseColor
                    },
                    padding: 3,
                    bg: "white"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    space: 4,
                    justifyContent: "flex-end",
                    marginTop: 2,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                      flex: 1,
                      variant: "outline",
                      borderColor: _MainStyle.baseColor,
                      borderRadius: "10",
                      _text: {
                        color: _MainStyle.baseColor
                      },
                      onPress: function onPress() {
                        setRejectError(false);
                        setShowRejectModal(false);
                      },
                      children: t("Cancel")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                      flex: 1,
                      backgroundColor: _MainStyle.baseColor,
                      borderRadius: "10",
                      _text: {
                        color: _MainStyle.lightColor
                      },
                      onPress: function onPress() {
                        if (rejectReason.trim() === "") {
                          setRejectError(true);
                        } else {
                          onRejectAddress(currentOrderId, rejectReason);
                          setShowRejectModal(false);
                          setRejectReason("");
                          setRejectError(false);
                        }
                      },
                      children: t("Submit")
                    })]
                  })]
                })
              })
            })]
          })
        }), message !== "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: _MainStyle.MainStyle.spincontainer,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            style: _MainStyle.MainStyle.popbox,
            space: 10,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                source: _$$_REQUIRE(_dependencyMap[14]),
                style: {
                  width: 90,
                  height: 90,
                  bottom: 10
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "16",
                fontFamily: _MainStyle.fontBold,
                textAlign: "center",
                style: {
                  bottom: 10
                },
                children: message
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
              width: "100%",
              space: 3,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                style: _MainStyle.MainStyle.solidbtn,
                onPress: function onPress() {
                  return navigation.navigate("Home");
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "20",
                  style: {
                    bottom: 5
                  },
                  children: t("Close")
                })
              })
            })]
          })
        })]
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
  var _default = exports.default = AddressVerificationScreen;
