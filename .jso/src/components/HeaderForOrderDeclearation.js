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
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var HeaderComponents = function HeaderComponents(_ref) {
    var navigation = _ref.navigation,
      component = _ref.component;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(''),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      userId = _React$useState2[0],
      SetUserId = _React$useState2[1];
    (0, _react.useEffect)(function () {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[11]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          SetUserId(JSON.parse(decryptData).userCode);
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
              return navigation.replace("Home");
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
            space: 3,
            children: [component == 'Home' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
              onPress: function onPress() {
                return navigation.navigate('Notification');
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "notifications-outline",
                size: 24,
                color: _MainStyle.lightColor
              })
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
