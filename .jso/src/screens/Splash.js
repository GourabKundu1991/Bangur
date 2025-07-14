  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[0]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[1]);
  var _nativeBase = _$$_REQUIRE(_dependencyMap[2]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[3]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[4]);
  var _Config = _$$_REQUIRE(_dependencyMap[5]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[6]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var SplashScreen = function SplashScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
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
        source: _$$_REQUIRE(_dependencyMap[7]),
        imageStyle: {
          resizeMode: 'cover',
          position: 'absolute',
          bottom: 0,
          top: 0,
          opacity: 1
        },
        style: styles.bgimage
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
