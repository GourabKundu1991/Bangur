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
  var _HeaderForOrderDeclearation = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _reactNativeGestureHandler = _$$_REQUIRE(_dependencyMap[12]);
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[14]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var MyCartScreen = function MyCartScreen(_ref) {
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
      userType = _React$useState4[0],
      setUserType = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      cartcount = _React$useState6[0],
      setCartCount = _React$useState6[1];
    var _route$params = route.params,
      orderId = _route$params.orderId,
      influencerName = _route$params.influencerName;
    (0, _react.useEffect)(function () {
      var backAction = function backAction() {
        navigation.navigate("Home");
        return true;
      };
      var backHandler = _reactNative.BackHandler.addEventListener("hardwareBackPress", backAction);
      return function () {
        backHandler.remove();
      };
    }, []);
    (0, _react.useEffect)(function () {
      cartCount();
    }, []);
    var cartCount = function cartCount() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[15]);
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: "#000000",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderForOrderDeclearation.default, {
          component: "Order Placement",
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
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
              flex: 1
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: {
                alignItems: 'center',
                marginTop: 25
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: {
                  fontSize: 17,
                  alignSelf: "flex-start",
                  paddingLeft: 15,
                  fontWeight: 'bold'
                },
                children: t("Order Placed successfully")
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
              style: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                source: _$$_REQUIRE(_dependencyMap[16]) // Replace with your local image path
                ,
                style: {
                  width: 100,
                  height: 100
                } // Example size for the image
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                style: {
                  fontSize: 16,
                  alignSelf: "center",
                  paddingLeft: 15,
                  fontWeight: 'bold',
                  marginTop: 40
                },
                children: [t("Hi"), " ", influencerName]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: {
                  fontSize: 17,
                  alignSelf: "center",
                  paddingLeft: 15,
                  fontWeight: 'bold',
                  width: "90%"
                },
                children: t("Your order has been successfully placed!")
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                style: {
                  flexDirection: "row",
                  marginTop: 4
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: {
                    fontSize: 18,
                    alignSelf: "center",
                    paddingLeft: 15,
                    fontWeight: 'bold'
                  },
                  children: [t("Your order ID is"), " "]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  style: {
                    color: 'blue',
                    fontWeight: 'bold',
                    fontSize: 18
                  },
                  children: orderId
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                style: {
                  height: 45,
                  backgroundColor: _MainStyle.baseColor,
                  borderRadius: 8,
                  overflow: 'hidden',
                  width: "90%",
                  marginTop: 10
                },
                onPress: function onPress() {
                  navigation.navigate('ViewOrder', {
                    "pageTitle": "View Orders"
                  });
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "sm",
                  children: t("Track Order")
                })
              })]
            })]
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
  var _default = exports.default = MyCartScreen;
