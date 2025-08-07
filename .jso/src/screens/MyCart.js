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
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeGestureHandler = _$$_REQUIRE(_dependencyMap[13]);
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _native = _$$_REQUIRE(_dependencyMap[15]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[16]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
      pageData = _React$useState4[0],
      setPageData = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      mycardData = _React$useState6[0],
      setMycardData = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      quantities = _React$useState8[0],
      setQuantities = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      forrelode = _React$useState0[0],
      setForRelode = _React$useState0[1];
    var _React$useState1 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState1, 2),
      cartcount = _React$useState10[0],
      setCartCount = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      userType = _React$useState12[0],
      setUserType = _React$useState12[1];
    var cartCount = function cartCount() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
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
    (0, _react.useEffect)(function () {
      cartCount();
      var fetchUserType = /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)(function* () {
          try {
            var encryptedToken = yield _asyncStorage.default.getItem('userToken');
            if (encryptedToken) {
              var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
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
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData();
        Mycart();
      });
      return unsubscribe;
    }, []);
    (0, _react.useEffect)(function () {
      Mycart();
    }, [forrelode]);
    (0, _react.useEffect)(function () {
      if (mycardData) {}
    }, [mycardData.row_items]); // Dependency array: triggers effect when `mycardData` changes

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
        console.log("33354Content:", responseJson);
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
    var Mycart = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2.default)(function* () {
        try {
          setLoading(true);

          // Retrieve and decrypt token
          var encryptedToken = yield _asyncStorage.default.getItem('userToken');
          if (!encryptedToken) {
            console.warn("User token not found!");
            setLoading(false);
            return;
          }
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptedData = JSON.parse(CryptoJS.AES.decrypt(encryptedToken, _Config.secretKey).toString(CryptoJS.enc.Utf8));

          // Prepare FormData
          var formdata = new FormData();
          formdata.append("prod_id", "sampleProductID"); // Replace with actual product ID
          formdata.append("quantity", "1"); // Replace with actual quantity

          // console.log("FormData:", formdata);

          // Make API call
          var response = yield fetch(`${_Config.BASE_URL}/cart/my-cart`, {
            method: 'POST',
            headers: {
              accesstoken: _Config.AccessToken,
              Useraccesstoken: decryptedData.token
            },
            body: formdata
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          var responseJson = yield response.json();
          //  alert(responseJson.bstatus)
          if (responseJson.bstatus == 1) {
            setMycardData(responseJson);
            // Toast.show(responseJson.message);
          } else {
            setMycardData("");
            _reactNativeSimpleToast.default.show(responseJson.message);
          }
        } catch (error) {
          console.error("Error in Mycart33333r:", error);
        } finally {
          setLoading(false);
        }
      });
      return function Mycart() {
        return _ref3.apply(this, arguments);
      };
    }();
    var DeLeteFunction = /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2.default)(function* (cardid, pruductid) {
        try {
          setLoading(true);

          // Retrieve and decrypt token
          var encryptedToken = yield _asyncStorage.default.getItem('userToken');
          if (!encryptedToken) {
            console.warn("User token not found!");
            setLoading(false);
            return;
          }
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptedData = JSON.parse(CryptoJS.AES.decrypt(encryptedToken, _Config.secretKey).toString(CryptoJS.enc.Utf8));
          console.log("tokennnnnnnnnnnnnnnnnnnnnnnnn", decryptedData);
          // Prepare FormData
          var formdata = new FormData();
          formdata.append("cart_id", cardid); // Replace with actual product ID
          formdata.append("product_id", pruductid); // Replace with actual quantity

          console.log("FormData:", formdata);

          // Make API call
          var response = yield fetch(`${_Config.BASE_URL}/cart/remove`, {
            method: 'POST',
            headers: {
              accesstoken: _Config.AccessToken,
              Useraccesstoken: decryptedData.token
            },
            body: formdata
          });
          console.log("2222222222222222", formdata);
          Mycart();
          cartCount(); //new add
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          var responseJson = yield response.json();
          //  alert(responseJson.bstatus)
          if (responseJson.bstatus == 1) {
            getAllData();
            setMycardData("");
            //   setMycardData(responseJson)
          } else {
            setMycardData("");
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          }
          //   alert(JSON.stringify(responseJson))
          console.log("44444444444444444 Response:", JSON.stringify(responseJson));
        } catch (error) {
          console.error("Error in Mycart 222:", error);
        } finally {
          setLoading(false);
        }
      });
      return function DeLeteFunction(_x, _x2) {
        return _ref4.apply(this, arguments);
      };
    }();
    var incrementAndDecrement = /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2.default)(function* (product, qtd, cartid) {
        if (qtd < 1) {
          DeLeteFunction(cartid, product);
        }
        try {
          setLoading(true);

          // Retrieve and decrypt token
          var encryptedToken = yield _asyncStorage.default.getItem('userToken');
          if (!encryptedToken) {
            console.warn("User token not found!");
            setLoading(false);
            return;
          }
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptedData = JSON.parse(CryptoJS.AES.decrypt(encryptedToken, _Config.secretKey).toString(CryptoJS.enc.Utf8));
          var formdata = new FormData();
          formdata.append("product_id", product); // Replace with actual product ID
          formdata.append("quantity", qtd); // Replace with actual quantity
          formdata.append("cart_id", cartid);

          // Make API call
          var response = yield fetch(`${_Config.BASE_URL}/cart/update-quantity`, {
            method: 'POST',
            headers: {
              accesstoken: _Config.AccessToken,
              Useraccesstoken: decryptedData.token
            },
            body: formdata
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          var responseJson = yield response.json();
          _reactNativeSimpleToast.default.show(responseJson.message);
          if (responseJson.bstatus == 1) {
            setForRelode(forrelode + 1);
          }
        } catch (error) {
          console.error("Error in Mycart111111:", error);
        } finally {
          setLoading(false);
        }
      });
      return function incrementAndDecrement(_x3, _x4, _x5) {
        return _ref5.apply(this, arguments);
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
          component: route.params.pageTitle,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: 5,
            children: mycardData ? mycardData.row_items.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                space: 3,
                borderColor: _MainStyle.lightGrey,
                borderBottomWidth: 1,
                paddingY: 4,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  style: [_MainStyle.MainStyle.productimage, {
                    width: '40%',
                    height: 90,
                    borderColor: _MainStyle.greyColor,
                    borderWidth: 1
                  }],
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                    source: {
                      uri: item.baseUrl + item.productImage[0].product_image
                    },
                    style: {
                      width: '100%',
                      height: 90
                    },
                    resizeMode: "contain"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  style: {
                    width: '55%'
                  },
                  space: 1,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontSize: "xs",
                    color: _MainStyle.darkGrey,
                    children: item.productName
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    fontWeight: "bold",
                    fontSize: "sm",
                    color: _MainStyle.darkColor,
                    children: [item.pricePoints, " ", t("Points")]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                    onPress: function onPress() {
                      return DeLeteFunction(item.cart_id, item.product_id);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      marginTop: 2,
                      space: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "trash-outline",
                        size: 18,
                        color: _MainStyle.dangerColor
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontWeight: "bold",
                        fontSize: "xs",
                        color: _MainStyle.dangerColor,
                        children: t("Remove")
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    marginTop: 2,
                    space: 1,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TouchableOpacity, {
                      onPress: function onPress() {
                        return incrementAndDecrement(item.product_id, parseInt(item.quantity) - 1, item.cart_id);
                      } // Use an arrow function to pass the arguments
                      ,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        style: {
                          fontWeight: 'bold',
                          fontSize: 24,
                          color: 'darkgrey'
                        },
                        children: "-"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      style: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'darkgrey'
                      },
                      children: [item.quantity ? item.quantity : "", " "]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TouchableOpacity, {
                      onPress: function onPress() {
                        return incrementAndDecrement(item.product_id, parseInt(item.quantity) + 1, item.cart_id);
                      } // Use an arrow function to pass the arguments
                      ,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        style: {
                          fontWeight: 'bold',
                          fontSize: 24,
                          color: 'darkgrey'
                        },
                        children: "+"
                      })
                    })]
                  })]
                })]
              }, index);
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              children: t("No product available for redemption")
            }) // Fallback when no products are found
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
          backgroundColor: _MainStyle.lightColor,
          width: '94%',
          alignSelf: "center",
          padding: 5,
          children: [mycardData.bstatus == 1 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
            backgroundColor: _MainStyle.lightGrey,
            borderColor: _MainStyle.greyColor,
            borderWidth: 1,
            borderRadius: 6,
            overflow: 'hidden',
            padding: 3,
            space: 1,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              justifyContent: "space-between",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "sm",
                color: _MainStyle.darkColor,
                children: t("Redeem Points")
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                fontWeight: "bold",
                fontSize: "sm",
                color: _MainStyle.baseColor,
                children: [mycardData != "" ? mycardData.control.grandtotal_in_point : "", " Points"]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              justifyContent: "space-between",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "sm",
                color: _MainStyle.darkColor,
                children: t("Available Points")
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                fontWeight: "bold",
                fontSize: "sm",
                color: _MainStyle.baseColor,
                children: [mycardData != "" ? mycardData.available_point : "", " Points"]
              })]
            })]
          }) : "", mycardData.bstatus == 1 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            marginTop: 6,
            space: 2,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: _MainStyle.MainStyle.solidbtn,
              onPress: function onPress() {
                var _mycardData$control;
                if (mycardData != null && (_mycardData$control = mycardData.control) != null && _mycardData$control.cart_id) {
                  navigation.navigate('Address', {
                    "cardid": mycardData.control.cart_id,
                    "name": mycardData.row_items[0].productName
                  });
                } else {
                  // console.warn("cart_id is missing!");
                  alert("cart_id is missing!");
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "sm",
                children: t("Redeem Now")
              })
            })
          }) : ""]
        })]
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          animating: loading,
          size: "large",
          color: _MainStyle.warningColor
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {
        navigation: navigation,
        component: userType,
        cartcount: cartcount
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = MyCartScreen;
