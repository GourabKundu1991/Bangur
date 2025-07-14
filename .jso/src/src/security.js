  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.checkSecurityStatusOnce = checkSecurityStatusOnce;
  exports.startFridaMonitoring = startFridaMonitoring;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[2]);
  var FridaDetector = _reactNative.NativeModules.FridaDetector;
  function checkSecurityStatusOnce() {
    return _checkSecurityStatusOnce.apply(this, arguments);
  }
  function _checkSecurityStatusOnce() {
    _checkSecurityStatusOnce = (0, _asyncToGenerator2.default)(function* () {
      try {
        // console.log("Checking frida detection");
        var isFridaDetected = yield FridaDetector.isFridaDetected();
        if (isFridaDetected) {
          _reactNative.Alert.alert('Security Alert', "Frida or suspicious debugger detected!", [{
            text: 'OK',
            onPress: function onPress() {
              return BackHandler.exitApp();
            }
          }]);
        }
      } catch (e) {
        //console.error("Frida check failed:", e);
      }
    });
    return _checkSecurityStatusOnce.apply(this, arguments);
  }
  function startFridaMonitoring() {
    var intervalMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;
    checkSecurityStatusOnce(); // Initial check
    return setInterval(checkSecurityStatusOnce, intervalMs);
  }
