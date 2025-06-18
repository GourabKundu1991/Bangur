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
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var DeleteAccountScreen = function DeleteAccountScreen(_ref) {
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
      delText = _React$useState6[0],
      setDelText = _React$useState6[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        _asyncStorage.default.getItem('accountDeleteText').then(function (val) {
          if (val != null) {
            setDelText(JSON.parse(val));
          }
        });
      });
      return unsubscribe;
    }, []);
    var onDel = function onDel() {
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[13]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          fetch(`${_Config.BASE_URL}/delete-account`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'accesstoken': `${_Config.AccessToken}`,
              'Useraccesstoken': JSON.parse(decryptData).token
            },
            body: ""
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("Delete:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              _reactNativeSimpleToast.default.show(responseJson.message);
              _asyncStorage.default.clear();
              navigation.replace('Intro');
            } else {
              setLoading(false);
              _reactNativeSimpleToast.default.show(responseJson.message);
            }
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: route.params.pageTitle,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 7,
            padding: 6,
            marginY: 30,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              mb: 3,
              color: _MainStyle.warningColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "2xl",
              textAlign: "center",
              children: [t("Warning"), " !"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "lg",
              textAlign: "center",
              children: delText
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 8,
            space: 5,
            backgroundColor: "#eeeeee",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              textAlign: "center",
              children: [t('Are you sure want to delete your account'), "?"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              padding: 3,
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: _MainStyle.baseSemiColor,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                style: [_MainStyle.MainStyle.solidbtn, {
                  width: '48%',
                  backgroundColor: _MainStyle.darkGrey,
                  height: 37
                }],
                onPress: function onPress() {
                  return navigation.goBack();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "xs",
                  children: t("Back")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                style: [_MainStyle.MainStyle.solidbtn, {
                  width: '48%',
                  backgroundColor: _MainStyle.dangerColor,
                  height: 37
                }],
                onPress: function onPress() {
                  return onDel();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "xs",
                  children: t("Confirm")
                })
              })]
            })]
          })]
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
  var _default = exports.default = DeleteAccountScreen;
