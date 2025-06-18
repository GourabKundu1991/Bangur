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
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _reactNativeRenderHtml = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _native = _$$_REQUIRE(_dependencyMap[13]);
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[15]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var ProductDetailsScreen = function ProductDetailsScreen(_ref) {
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
      pageData = _React$useState6[0],
      setPageData = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      cartcount = _React$useState8[0],
      setCartCount = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      relodecounter = _React$useState10[0],
      setRelodecounter = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      pdetails = _React$useState12[0],
      setPdetails = _React$useState12[1];
    var _React$useState13 = _react.default.useState(true),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      step1 = _React$useState14[0],
      setStep1 = _React$useState14[1];
    var _React$useState15 = _react.default.useState(false),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      step2 = _React$useState16[0],
      setStep2 = _React$useState16[1];
    var _React$useState17 = _react.default.useState(route.params),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      mypropsdata = _React$useState18[0],
      setMypropsData = _React$useState18[1];
    var productID = route.params.productID;
    var productSpacification = mypropsdata.productParams;
    // setPdetails(productSpacification)

    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        // setLoading(true);
        // getAllData();
      });
      return unsubscribe;
    }, []);
    var onScreenFocus = function onScreenFocus() {
      // Your function logic here
      console.log('Screen is focused');
      cartCount();
      // Call other functions or set state
    };
    (0, _native.useFocusEffect)((0, _react.useCallback)(function () {
      // This function will be called when the screen gains focus
      onScreenFocus();
      return function () {
        // This cleanup function will be called when the screen loses focus
      };
    }, []) // The empty dependency array ensures the effect runs once
    );
    (0, _react.useEffect)(function () {
      // Set the product specification when the component mounts
      setPdetails(productSpacification);
    }, [productSpacification]); // Dependency array ensures the effect is re-run when `productSpacification` changes

    (0, _react.useEffect)(function () {
      cartCount();
      var fetchUserType = /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)(function* () {
          try {
            var encryptedToken = yield _asyncStorage.default.getItem('userToken');
            if (encryptedToken) {
              var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
              var decryptedData = CryptoJS.AES.decrypt(encryptedToken, _Config.secretKey).toString(CryptoJS.enc.Utf8);
              var parsedData = JSON.parse(decryptedData);
              setUserType(parsedData.user_type);
            }
          } catch (error) {
            console.error("Error decrypting or parsing token:", error);
          }
        });
        return function fetchUserType() {
          return _ref2.apply(this, arguments);
        };
      }();
      fetchUserType();
    }, []);
    (0, _react.useEffect)(function () {
      cartCount();
    }, [relodecounter]);
    var cartCount = function cartCount() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          // setUserType(JSON.parse(decryptData).user_type);

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
    var AddToCard = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2.default)(function* (type) {
        setLoading(true);
        try {
          var encryptedToken = yield _asyncStorage.default.getItem('userToken');
          var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          // Decrypt token
          var decryptedData = JSON.parse(CryptoJS.AES.decrypt(encryptedToken, _Config.secretKey).toString(CryptoJS.enc.Utf8));

          // Prepare form data
          var formdata = new FormData();
          formdata.append("prod_id", mypropsdata.productID);
          formdata.append("price_in_points", mypropsdata.pricePoints);
          formdata.append("prod_name", mypropsdata.productName);
          formdata.append("quantity", 1);
          console.log("FormData:==", formdata);

          // Make API call
          var response = yield fetch(`${_Config.BASE_URL}/cart/add`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              accesstoken: _Config.AccessToken,
              Useraccesstoken: decryptedData.token
            },
            body: formdata
          });
          var responseJson = yield response.json();
          if (responseJson.bstatus == 1) {
            setLoading(false);
            _reactNativeSimpleToast.default.show(responseJson.message);
            if (type == "Redeem") {
              navigation.navigate("MyCart", {
                pageTitle: "My Cart"
              });
              setRelodecounter(relodecounter + 1);
            } else {
              setRelodecounter(relodecounter + 1);
            }
          } else {
            setLoading(false);
            _reactNativeSimpleToast.default.show(responseJson.message);
          }
        } catch (error) {
          //   alert(4);
          console.error("Error:", error);
        } finally {
          setLoading(false);
        }
      });
      return function AddToCard(_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: "#000000",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: "Details",
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: 5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              style: [_MainStyle.MainStyle.productbox, {
                width: '100%'
              }],
              space: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                style: _MainStyle.MainStyle.productimagebig,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                  source: {
                    uri: mypropsdata.productimage
                  },
                  style: {
                    width: '100%',
                    height: 250
                  },
                  resizeMode: "contain"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontWeight: "bold",
                fontSize: "sm",
                color: _MainStyle.darkGrey,
                children: route.params.productname
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                justifyContent: "space-between",
                marginY: 3,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  fontWeight: "bold",
                  fontSize: "lg",
                  color: _MainStyle.darkColor,
                  children: [mypropsdata.pricePoint ? mypropsdata.pricePoint : "", " ", t("Points")]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  justifyContent: "space-between",
                  space: 2,
                  paddingX: 4,
                  paddingY: 1,
                  borderColor: _MainStyle.lightGrey,
                  borderWidth: 1,
                  borderRadius: 4,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    fontSize: "xs",
                    color: _MainStyle.darkGrey,
                    children: [t("Available Points"), ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontWeight: "bold",
                    fontSize: "xs",
                    color: _MainStyle.darkColor,
                    children: mypropsdata.availablepoint ? mypropsdata.availablepoint : ""
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                marginY: 3,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                  onPress: function onPress() {
                    return setStep1(!step1);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: _MainStyle.lightGrey,
                    position: "relative",
                    borderRadius: 6,
                    overflow: "hidden",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.darkColor,
                      fontSize: "sm",
                      fontFamily: _MainStyle.fontBold,
                      marginLeft: 3,
                      children: t("Description")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                      style: [_MainStyle.MainStyle.solidbtn, {
                        backgroundColor: _MainStyle.baseColor,
                        height: 36,
                        paddingHorizontal: 12
                      }],
                      variant: "unstyled",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.lightColor,
                        fontFamily: _MainStyle.fontSemiBold,
                        fontSize: "2xl",
                        lineHeight: 32,
                        children: step1 ? "-" : "+"
                      })
                    })]
                  })
                }), step1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                  padding: 3,
                  children: route.params.detaildata ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeRenderHtml.default, {
                    contentWidth: 400,
                    source: {
                      html: route.params.detaildata ? route.params.detaildata : ""
                    },
                    tagsStyles: {
                      body: {
                        color: 'black'
                      } // Applies the color black to all text in the body tag
                    }
                  }) : ""
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                marginY: 3,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                  onPress: function onPress() {
                    return setStep2(!step2);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: _MainStyle.lightGrey,
                    position: "relative",
                    borderRadius: 6,
                    overflow: "hidden",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.darkColor,
                      fontSize: "sm",
                      fontFamily: _MainStyle.fontBold,
                      marginLeft: 3,
                      children: t("Specification")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                      style: [_MainStyle.MainStyle.solidbtn, {
                        backgroundColor: _MainStyle.baseColor,
                        height: 36,
                        paddingHorizontal: 12
                      }],
                      variant: "unstyled",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.lightColor,
                        fontFamily: _MainStyle.fontSemiBold,
                        fontSize: "2xl",
                        lineHeight: 32,
                        children: step2 ? "-" : "+"
                      })
                    })]
                  })
                }), step2 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                  padding: 3,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    children: Object.entries(pdetails).map(function (_ref4, index) {
                      var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
                        key = _ref5[0],
                        value = _ref5[1];
                      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        children: [key, ": ", value]
                      }, index);
                    })
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                marginTop: 6,
                space: 2,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  style: [_MainStyle.MainStyle.outlinebtn, {
                    backgroundColor: '#ffffff'
                  }],
                  onPress: function onPress() {
                    return AddToCard("Redeem");
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.baseColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "sm",
                    children: t("Redeem Now")
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  style: _MainStyle.MainStyle.solidbtn,
                  onPress: function onPress() {
                    return AddToCard("Add");
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "sm",
                    children: t("Add to Cart")
                  })
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {
          navigation: navigation,
          component: userType,
          cartcount: cartcount
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
  var _default = exports.default = ProductDetailsScreen;
