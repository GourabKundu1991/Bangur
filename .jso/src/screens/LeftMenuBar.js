  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[2]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _Events = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[8]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[9]);
  var _Config = _$$_REQUIRE(_dependencyMap[10]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[11]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var LeftMenuBarScreen = function LeftMenuBarScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState([]),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      mainMenu = _React$useState4[0],
      setMainMenu = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      userData = _React$useState6[0],
      setUserData = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      state = _React$useState8[0],
      setState = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      points = _React$useState10[0],
      setPoints = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      token = _React$useState12[0],
      setToken = _React$useState12[1];
    (0, _react.useEffect)(function () {
      _Events.default.subscribe('mainMenu', function (data) {
        setMainMenu(data);
      });
      _Events.default.subscribe('profileData', function (data) {
        setUserData(data.profile);
        setPoints(data.available_point);
        setState(data.profile.address[0].state);
      });
      _Events.default.subscribe('points', function (data) {
        setPointData(data);
      });
      _Events.default.subscribe('token', function (data) {
        setToken(data);
      });
    }, []);
    var onLogout = function onLogout() {
      console.log(token);
      console.log(`${_Config.AccessToken}`);
      _reactNative.Alert.alert(t("Alert"), t("Are you sure to logout") + "?", [{
        text: t("Cancel"),
        onPress: function onPress() {
          return console.log("Cancel Pressed");
        },
        style: "cancel"
      }, {
        text: t("Yes"),
        onPress: function onPress() {
          setLoading(true);
          fetch(`${_Config.BASE_URL}/log-out`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'accesstoken': `${_Config.AccessToken}`,
              'Useraccesstoken': token
            },
            body: ""
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            setLoading(false);
            console.log("Logout:", responseJson);
            navigation.closeDrawer();
            _asyncStorage.default.clear();
            navigation.navigate('Intro');
          }).catch(function (error) {
            setLoading(false);
            console.log("Error:", error);
          });
        }
      }], {
        cancelable: false
      });
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ImageBackground, {
        backgroundColor: "#091571",
        source: _$$_REQUIRE(_dependencyMap[12]),
        imageStyle: {
          resizeMode: 'cover',
          bottom: 0,
          top: 0,
          opacity: 1,
          width: '100%',
          height: 250
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          alignItems: "center",
          justifyContent: "center",
          paddingX: "5",
          paddingY: "5",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
            marginY: 2,
            borderColor: _MainStyle.lightColor,
            borderWidth: 3,
            borderRadius: 50,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Avatar, {
              borderColor: _MainStyle.baseColor,
              resizeMode: "contain",
              borderWidth: "4",
              size: "75",
              source: userData.profile_image == "" ? _$$_REQUIRE(_dependencyMap[13]) : {
                uri: userData.profile_image
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: _MainStyle.lightColor,
            fontSize: "md",
            fontFamily: _MainStyle.fontSemiBold,
            children: userData.name
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            space: 2,
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              color: _MainStyle.lightGrey,
              fontSize: "xs",
              fontFamily: _MainStyle.fontRegular,
              children: [t("Member Id"), ":"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontSize: "xs",
              fontFamily: _MainStyle.fontRegular,
              children: userData.userCode
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            space: 2,
            alignItems: "center",
            marginTop: 2,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "call-outline",
                size: 14,
                color: _MainStyle.lightGrey
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "xs",
                fontFamily: _MainStyle.fontSemiBold,
                children: [" ", userData.mobile]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              children: "|"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "location-outline",
                size: 14,
                color: _MainStyle.lightGrey
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "xs",
                fontFamily: _MainStyle.fontSemiBold,
                children: [" ", state]
              })]
            })]
          })]
        }), userData.contactHier == "Influencer" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
          backgroundColor: _MainStyle.lightColor,
          width: "100%",
          borderTopRightRadius: 40,
          overflow: "hidden",
          paddingX: 5,
          paddingTop: 7,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
            color: _MainStyle.darkGrey,
            fontSize: "xs",
            fontFamily: _MainStyle.fontRegular,
            children: [" ", t("Point Balance")]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
            color: _MainStyle.darkColor,
            fontSize: "xl",
            fontFamily: _MainStyle.fontBold,
            children: [" ", points]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            onPress: function onPress() {
              return navigation.navigate("Rewards", {
                pageTitle: t("Rewards Store")
              });
            },
            size: "xs",
            style: [_MainStyle.MainStyle.solidbtn, {
              height: 40,
              marginTop: 10
            }],
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "sm",
              children: t("Redeem Now")
            })
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
        backgroundColor: _MainStyle.lightColor,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
          paddingX: 5,
          paddingTop: 7,
          children: [mainMenu.map(function (item, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
              onPress: function onPress() {
                return navigation.navigate(item.url, {
                  pageTitle: item.title
                });
              },
              paddingY: 2,
              borderBottomWidth: 1,
              borderColor: _MainStyle.lightGrey,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                space: 3,
                alignItems: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: item.icon,
                  size: 18,
                  color: _MainStyle.darkColor
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "sm",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: item.title
                })]
              })
            }, index);
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
            onPress: function onPress() {
              return onLogout();
            },
            paddingY: 2,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 3,
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "power",
                size: 18,
                color: _MainStyle.darkColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "sm",
                fontFamily: _MainStyle.fontSemiBold,
                children: t("Logout")
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        marginTop: 2,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[14]),
            style: {
              width: 65,
              height: 33,
              resizeMode: 'contain'
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: _MainStyle.baseColor,
            textAlign: "center",
            fontSize: "9",
            fontFamily: _MainStyle.fontBold,
            children: "Nirman Mitra"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
          onPress: function onPress() {
            return navigation.navigate("TermsConditions");
          },
          style: {
            borderColor: _MainStyle.darkColor,
            borderBottomWidth: 0.5
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
            color: _MainStyle.darkColor,
            fontSize: "xs",
            fontFamily: _MainStyle.fontBold,
            children: [" ", t("T&C and Privacy Policy")]
          })
        })]
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          animating: loading,
          size: "large",
          color: _MainStyle.warningColor
        })
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({
    icon: {
      width: 60,
      height: 60,
      resizeMode: 'cover'
    },
    okbtn: {
      backgroundColor: '#f9d162',
      borderRadius: 50,
      overflow: 'hidden',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 45
    },
    spincontainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
  });
  var _default = exports.default = LeftMenuBarScreen;
