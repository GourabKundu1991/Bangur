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
  var _MainStyle = _$$_REQUIRE(_dependencyMap[6]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[7]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _Config = _$$_REQUIRE(_dependencyMap[9]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[10]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var HeaderComponents = function HeaderComponents(_ref) {
    var navigation = _ref.navigation,
      component = _ref.component,
      cartcount = _ref.cartcount,
      openDialer = _ref.openDialer,
      component2 = _ref.component2,
      unreadCount = _ref.unreadCount;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(''),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      userId = _React$useState2[0],
      SetUserId = _React$useState2[1];
    // const [notificationCount, SetNotificationCount] = React.useState('');

    console.log("Headerrrrrr");
    console.log("UnreadCount", unreadCount);
    (0, _react.useEffect)(function () {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[11]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          SetUserId(JSON.parse(decryptData).userCode);
          // SetNotificationCount(unreadCount);
        }
      });
    }, []);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ImageBackground, {
      backgroundColor: '#091571',
      source: _$$_REQUIRE(_dependencyMap[12]),
      imageStyle: {
        resizeMode: 'cover',
        bottom: 0,
        top: 0,
        opacity: 1,
        width: '100%',
        height: 250
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "5",
        paddingY: "4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          space: 4,
          alignItems: "center",
          children: [component == 'Home' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.openDrawer();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
              name: "menu",
              size: 26,
              color: _MainStyle.lightColor
            })
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.goBack();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
              name: "arrow-back-outline",
              size: 24,
              color: _MainStyle.lightColor
            })
          }), component != 'Home' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: _MainStyle.lightColor,
            fontFamily: _MainStyle.fontSemiBold,
            fontSize: "md",
            children: t(component)
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          space: 1,
          alignItems: "flex-end",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            alignItems: "center",
            space: 2,
            children: [component == 'Home' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
              onPress: openDialer,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "call-outline",
                size: 24,
                color: _MainStyle.lightColor
              })
            }), component == 'Home' && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
              onPress: function onPress() {
                return navigation.navigate('Notification');
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "notifications-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), unreadCount > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: {
                  position: 'absolute',
                  backgroundColor: 'red',
                  borderRadius: 10,
                  width: 20,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: -8,
                  right: -5
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  style: {
                    color: 'white',
                    fontSize: 12
                  },
                  children: unreadCount
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
              style: {
                backgroundColor: _MainStyle.lightColor,
                padding: 5,
                borderRadius: 5
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Image, {
                source: _$$_REQUIRE(_dependencyMap[13]),
                style: {
                  width: 60,
                  height: 32,
                  resizeMode: 'contain'
                }
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            alignItems: "center",
            justifyContent: "flex-end",
            space: 1,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
              name: "person-circle-outline",
              size: 16,
              color: _MainStyle.lightColor
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontSemiBold,
              textAlign: "right",
              fontSize: "10",
              children: userId
            })]
          })]
        })]
      })
    });
  };
  var _default = exports.default = HeaderComponents;
