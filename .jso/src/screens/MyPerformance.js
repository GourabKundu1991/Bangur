  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[2]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[5]);
  var _Config = _$$_REQUIRE(_dependencyMap[6]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[7]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _Events = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[10]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _i18n = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[15]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var MyPerformanceScreen = function MyPerformanceScreen(_ref) {
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
    var _React$useState5 = _react.default.useState([]),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      homeMenu = _React$useState6[0],
      setHomeMenu = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      profileData = _React$useState8[0],
      setProfileData = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      points = _React$useState10[0],
      setPoints = _React$useState10[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        _asyncStorage.default.getItem('language').then(function (val) {
          if (val != null) {
            setLanguage(val);
            _i18n.default.changeLanguage(val).then(function () {
              return console.log(val);
            }).catch(function (err) {
              return console.log(err);
            });
          }
        });
        getAllData();
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("lang_code", currentLanguage);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("programId", JSON.parse(decryptData).program_id);
          fetch(`${_Config.BASE_URL}/get-dashboard`, {
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
            //console.log("Dashboard:", responseJson);
            if (responseJson.bstatus == 1) {
              _Events.default.publish('mainMenu', responseJson.menu);
              setHomeMenu(responseJson.home_menu);
              getProfileData();
            } else {
              setLoading(false);
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
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
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.replace('Intro');
        }
      });
    };
    var getProfileData = function getProfileData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
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
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            setLoading(false);
            //console.log("profile:", responseJson);
            if (responseJson.bstatus == 1) {
              _Events.default.publish('profileData', responseJson);
              setProfileData(responseJson.profile);
              setPoints(responseJson.available_point);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.replace('Intro');
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
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 8,
            paddingY: 6,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 4,
              alignItems: "center",
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Avatar, {
                borderColor: _MainStyle.lightGrey,
                resizeMode: "contain",
                borderWidth: "2",
                size: "75",
                source: _$$_REQUIRE(_dependencyMap[17])
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                justifyContent: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "#111111",
                  fontSize: "15",
                  fontFamily: _MainStyle.fontBold,
                  children: profileData.name
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  space: 2,
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    color: _MainStyle.baseColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontSemiBold,
                    children: [t("Member Id"), ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.baseColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    children: profileData.userCode
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "call-outline",
                    size: 14,
                    color: _MainStyle.darkGrey
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontSemiBold,
                    children: [" ", profileData.mobile]
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 3,
            paddingX: 7,
            paddingBottom: 7,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontSize: "lg",
              fontFamily: _MainStyle.fontBold,
              paddingX: 2,
              children: t("Quick Information")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap",
              children: homeMenu.map(function (item, index) {
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
                  style: _MainStyle.MainStyle.quickbox,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                    justifyContent: "center",
                    alignItems: "center",
                    style: _MainStyle.MainStyle.quickicon,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.baseColor,
                      fontSize: "md",
                      fontFamily: _MainStyle.fontBold,
                      children: "10000"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.darkColor,
                    fontSize: "xs",
                    textAlign: "center",
                    fontFamily: _MainStyle.fontSemiBold,
                    style: {
                      minHeight: 38,
                      display: 'flex',
                      verticalAlign: 'middle'
                    },
                    children: item.title
                  })]
                }, index);
              })
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
  var _default = exports.default = MyPerformanceScreen;
