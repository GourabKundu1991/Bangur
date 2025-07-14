  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[2]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[3]);
  var _nativeBase = _$$_REQUIRE(_dependencyMap[4]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[5]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[6]);
  var _Config = _$$_REQUIRE(_dependencyMap[7]);
  var _reactNativeDeviceInfo = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[8]));
  var _jailMonkey = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[10]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var SplashScreen = function SplashScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      foundEmulator = _React$useState2[0],
      setFoundEmulator = _React$useState2[1];
    var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      deviceRooted = _React$useState4[0],
      setDeviceRooted = _React$useState4[1];
    var _useIsEmulator = (0, _reactNativeDeviceInfo.useIsEmulator)(),
      isEmresult = _useIsEmulator.isEmresult;

    /* const checkForRootFiles = async () => {
      var RNFS = require('react-native-fs');
      const pathsToCheck = [
        '/system/app/Superuser.apk', // Android rooted device check
        '/system/xbin/su', // Android su binary check
        '/bin/bash', // Common on Linux-based (Android) systems
        '/Applications/Cydia.app', // iOS check for Cydia (jailbroken)
      ];
       for (let path of pathsToCheck) {
        const exists = await RNFS.exists(path);
        if (exists) {
          console.log('rooted: true');
          setDeviceRooted(true);
          BackHandler.exitApp();
          return true;
        } // Rooted or jailbroken detected
      }
      return false; // No signs of rooting or jailbreaking
    };
     useEffect(() => {
      const checkRoot = async () => {
        const rooted = await checkForRootFiles();
        console.log('rooted: ', rooted);
        if (rooted) {
          setDeviceRooted(true);
          BackHandler.exitApp();
        }
      };
      checkRoot();
    }, []);
     useEffect(() => {
      const checkProxy = async () => {
        try {
          const response = await fetch(`${URL}`);
          if (response.headers) {
            const headers = response.headers;
            // Check for common proxy headers
            if (headers.has('X-Forwarded-For') || headers.has('Via')) {
              console.log('Proxy detected via headers');
              BackHandler.exitApp();
            } else {
              console.log('No proxy detected');
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      checkProxy();
    });
     useEffect(() => {
      const checkJailBreak = () => {
        if (
          JailMonkey.isJailBroken() ||
          JailMonkey.trustFall() ||
          JailMonkey.hookDetected() ||
          JailMonkey.canMockLocation()
        ) {
          console.log('rooted: true');
          setDeviceRooted(true);
          BackHandler.exitApp();
        }
      };
      checkJailBreak();
    });
     useEffect(() => {
      if (!isEmresult) {
        const checkEmulator = async () => {
          const isEmulator = await DeviceInfo.isEmulator();
          const brand = await DeviceInfo.getBrand();
          const model = await DeviceInfo.getModel();
          const systemName = await DeviceInfo.getSystemName();
           // Add additional checks as needed
          if (
            isEmulator ||
            brand === 'generic' ||
            brand.includes('sdk') ||
            model.includes('Emulator') ||
            model.includes('Android SDK built for x86')
          ) {
            setFoundEmulator(true);
            return true; // Running on an emulator
          }
          return false; // Running on a real device
        };
        checkEmulator();
      } else {
        setFoundEmulator(true);
      }
    }, []);
     useEffect(() => {
      if (!foundEmulator && !deviceRooted) {
        setTimeout(function () {
          navigation.replace('Intro');
        }, 2800);
      }
    }, []);
     const closeApp = () => {
      BackHandler.exitApp();
    }; */

    (0, _react.useEffect)(function () {
      setTimeout(function () {
        navigation.replace('Intro');
      }, 2800);
    }, []);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ImageBackground, {
        source: _$$_REQUIRE(_dependencyMap[11]),
        imageStyle: {
          resizeMode: 'cover',
          position: 'absolute',
          bottom: 0,
          top: 0,
          opacity: 1
        },
        style: styles.bgimage
      }), foundEmulator && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          backgroundColor: "#ffffff",
          style: {
            width: '70%',
            borderRadius: 10,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            w: "100%",
            paddingY: "10",
            paddingX: "5",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[12]),
              style: _MainStyle.MainStyle.logo
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              mt: 5,
              mb: 3,
              fontSize: "xl",
              fontWeight: "bold",
              color: _MainStyle.dangerColor,
              children: [t('Alert'), "!"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: [t('This App run on Emulator. Please run in Real Device to use this App'), "..."]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 150,
                borderRadius: 8,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return closeApp();
              },
              marginY: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t('Close')
              })
            })]
          })
        })
      }), deviceRooted && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          backgroundColor: "#ffffff",
          style: {
            width: '70%',
            borderRadius: 10,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            w: "100%",
            paddingY: "10",
            paddingX: "5",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[12]),
              style: _MainStyle.MainStyle.logo
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              mt: 5,
              mb: 3,
              fontSize: "xl",
              fontWeight: "bold",
              color: _MainStyle.dangerColor,
              children: [t('Alert'), "!"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: [t('This is an Rooted Device. Please run in Unrooted Device to use this App'), "..."]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 150,
                borderRadius: 8,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return closeApp();
              },
              marginY: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t('Close')
              })
            })]
          })
        })
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({
    bgimage: {
      flex: 1,
      justifyContent: 'center'
    }
  });
  var _default = exports.default = SplashScreen;
