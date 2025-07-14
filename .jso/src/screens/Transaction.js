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
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var TransactionScreen = function TransactionScreen(_ref) {
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
          component: route.params.pageTitle,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 3,
            padding: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[14]),
              style: {
                width: '100%',
                height: 250,
                resizeMode: 'contain',
                position: 'relative'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              space: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                onPress: function onPress() {
                  return navigation.navigate("PurchaseHistory", {
                    pageTitle: "Purchase History"
                  });
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  padding: 3,
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: _MainStyle.baseLightColor,
                  position: "relative",
                  borderColor: _MainStyle.baseColor,
                  borderLeftWidth: 5,
                  borderLeftRadius: 6,
                  overflow: "hidden",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.darkColor,
                      fontSize: "sm",
                      fontFamily: _MainStyle.fontBold,
                      children: t("Purchase History")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontSemiBold,
                      children: t("Check Now")
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.baseColor,
                      height: 40,
                      width: 40,
                      paddingHorizontal: 7,
                      borderRadius: 6
                    }],
                    variant: "unstyled",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      lineHeight: 38,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        style: {
                          fontSize: 25
                        },
                        name: "arrow-forward-outline"
                      })
                    })
                  })]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                onPress: function onPress() {
                  return navigation.navigate("MyPoints", {
                    pageTitle: "Points History"
                  });
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  padding: 3,
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: _MainStyle.baseLightColor,
                  position: "relative",
                  borderColor: _MainStyle.baseColor,
                  borderLeftWidth: 5,
                  borderLeftRadius: 6,
                  overflow: "hidden",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.darkColor,
                      fontSize: "sm",
                      fontFamily: _MainStyle.fontBold,
                      children: t("Points History")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontSemiBold,
                      children: t("Check Now")
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.baseColor,
                      height: 40,
                      width: 40,
                      paddingHorizontal: 7,
                      borderRadius: 6
                    }],
                    variant: "unstyled",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      lineHeight: 38,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        style: {
                          fontSize: 25
                        },
                        name: "arrow-forward-outline"
                      })
                    })
                  })]
                })
              })]
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
  var _default = exports.default = TransactionScreen;
