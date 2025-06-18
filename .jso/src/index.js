  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[2]);
  var _messaging = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNativePushNotification = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _App = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _app = _$$_REQUIRE(_dependencyMap[6]);
  // /**
  //  * @format
  //  */

  // import {AppRegistry} from 'react-native';
  // import App from './App';
  // import {name as appName} from './app.json';

  // AppRegistry.registerComponent(appName, () => App);

  // Configure Push Notifications
  _reactNativePushNotification.default.configure({
    onNotification: function onNotification(notification) {
      console.log(" Notification Received:", notification);
    },
    requestPermissions: _reactNative.Platform.OS === "ios"
  });

  // Handle Background Notifications
  (0, _messaging.default)().setBackgroundMessageHandler(/*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)(function* (remoteMessage) {
      console.log('Background Notification Received:', remoteMessage);

      // Show Notification (with fixed title)
      _reactNativePushNotification.default.localNotification({
        channelId: "15",
        // This channel ID already exists
        title: "Notification",
        message: remoteMessage.notification.body,
        playSound: true,
        soundName: "default",
        vibrate: true
      });
    });
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  _reactNative.AppRegistry.registerComponent(_app.name, function () {
    return _App.default;
  });
