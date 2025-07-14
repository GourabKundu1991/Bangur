  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  _$$_REQUIRE(_dependencyMap[2]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _native = _$$_REQUIRE(_dependencyMap[4]);
  var _stack = _$$_REQUIRE(_dependencyMap[5]);
  var _drawer = _$$_REQUIRE(_dependencyMap[6]);
  var _reactNative = _$$_REQUIRE(_dependencyMap[7]);
  var _messaging = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _reactNative2 = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[9]));
  var _Splash = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Intro = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Login = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _TermsConditions = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _Registration = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _Home = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _LeftMenuBar = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[16]));
  var _MyProfile = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[17]));
  var _AddPurchase = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[18]));
  var _RegistrationApprovals = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[19]));
  var _TransactionApprovals = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[20]));
  var _MyPerformance = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[21]));
  var _RegisterMember = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[22]));
  var _AddContractor = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[23]));
  var _ViewTransaction = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[24]));
  var _ViewMember = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[25]));
  var _MemberDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[26]));
  var _PurchaseHistory = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[27]));
  var _MyPoints = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[28]));
  var _AboutProgram = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[29]));
  var _ChangeLanguage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[30]));
  var _AllocateLifting = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[31]));
  var _RewardsStore = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[32]));
  var _TrackRewards = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[33]));
  var _MyCart = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[34]));
  var _Notification = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[35]));
  var _Gallery = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[36]));
  var _FAQ = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[37]));
  var _NewsLetter = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[38]));
  var _ContactUs = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[39]));
  var _Transaction = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[40]));
  var _DeleteAccount = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[41]));
  var _ProductDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[42]));
  var _RedeemptionConfirmation = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[43]));
  var _Address = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[44]));
  var _RedeemsonOTP = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[45]));
  var _OrderPlacessSuccessfully = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[46]));
  var _ViewOrder = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[47]));
  var _UpdateKYC = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[48]));
  var _RedemptionStatus = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[49]));
  var _RedemptionDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[50]));
  var _AddSpouse = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[51]));
  var _SpouseDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[52]));
  var _AddressVerification = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[53]));
  var _GalleryDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[54]));
  var _security = _$$_REQUIRE(_dependencyMap[55]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[56]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   */

  // import NotificationHandler from './screens/NotificationHandler';

  var Stack = (0, _stack.createStackNavigator)();
  var Drawer = (0, _drawer.createDrawerNavigator)();
  var SecurityServiceManager = _reactNative.NativeModules.SecurityServiceManager;
  var App = function App() {
    (0, _react.useEffect)(function () {
      var monitor = (0, _security.startFridaMonitoring)(5000);
      return function () {
        return clearInterval(monitor);
      };
    }, []);
    var checkRootAndEmulator = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)(function* () {
        try {
          var isRootedNative = yield SecurityServiceManager.isDeviceRooted();
          var isEmulatorNative = yield SecurityServiceManager.isEmulator();
        } catch (error) {
          console.error('Error checking root or emulator status:', error);
        }
      });
      return function checkRootAndEmulator() {
        return _ref.apply(this, arguments);
      };
    }();
    var createNotificationChannel = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* () {
        try {
          var channelId = yield _reactNative2.default.createChannel({
            id: "15",
            name: 'Default Channel',
            importance: _reactNative2.AndroidImportance.HIGH
          });
          if (channelId) {
            console.log("Notification Channel Created Successfully:", channelId);
          } else {
            console.log("Failed to Create Notification Channel");
          }
        } catch (error) {
          console.error("Error Creating Notification Channel:", error);
        }
      });
      return function createNotificationChannel() {
        return _ref2.apply(this, arguments);
      };
    }();
    var requestPermissionAndroid = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2.default)(function* () {
        var granted = yield _reactNative.PermissionsAndroid.request(_reactNative.PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        if (granted === _reactNative.PermissionsAndroid.RESULTS.GRANTED) {
          //Alert.alert('Permission Granted');
          getToken();
          createNotificationChannel();
        } else {
          //Alert.alert('Permission Denied');
        }
      });
      return function requestPermissionAndroid() {
        return _ref3.apply(this, arguments);
      };
    }();
    var getToken = /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2.default)(function* () {
        var token = yield (0, _messaging.default)().getToken();
        console.log("Token", token);
      });
      return function getToken() {
        return _ref4.apply(this, arguments);
      };
    }();
    (0, _react.useEffect)(function () {
      requestPermissionAndroid();

      //  Handle foreground notifications
      var unsubscribeForeground = (0, _messaging.default)().onMessage(/*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2.default)(function* (remoteMessage) {
          if (remoteMessage != null && remoteMessage.notification) {
            // Create a notification channel
            yield _reactNative2.default.createChannel({
              id: 'default',
              name: 'Default Channel',
              importance: _reactNative2.AndroidImportance.HIGH
            });

            // Display the notification
            yield _reactNative2.default.displayNotification({
              title: remoteMessage.notification.title || 'Notification',
              body: remoteMessage.notification.body || '',
              android: {
                channelId: 'default',
                importance: _reactNative2.AndroidImportance.HIGH
              }
            });
          }
        });
        return function (_x) {
          return _ref5.apply(this, arguments);
        };
      }());

      // Handle notification click when app is in background
      var unsubscribeOpenedApp = (0, _messaging.default)().onNotificationOpenedApp(function (remoteMessage) {
        if (remoteMessage != null && remoteMessage.notification) {
          console.log(' Notification Clicked - Background');
          _reactNative.Alert.alert(remoteMessage.notification.title || 'Notification', remoteMessage.notification.body || '');
        }
      });

      // Handle notification click when app was completely closed (killed)
      (0, _messaging.default)().getInitialNotification().then(function (remoteMessage) {
        if (remoteMessage != null && remoteMessage.notification) {
          console.log(' Notification Clicked - Killed State');
          _reactNative.Alert.alert(remoteMessage.notification.title || 'Notification', remoteMessage.notification.body || '');
        }
      });

      // Cleanup listeners to avoid memory leaks
      return function () {
        unsubscribeForeground();
        unsubscribeOpenedApp();
      };
    }, []);
    (0, _react.useEffect)(function () {
      var unsubscribe = (0, _messaging.default)().onMessage(/*#__PURE__*/function () {
        var _ref6 = (0, _asyncToGenerator2.default)(function* (remoteMessage) {
          if (remoteMessage != null && remoteMessage.notification) {
            _reactNative.Alert.alert('Notification!', remoteMessage.notification.body);
          }
        });
        return function (_x2) {
          return _ref6.apply(this, arguments);
        };
      }());
      return unsubscribe;
    }, []);
    (0, _react.useEffect)(function () {
      checkRootAndEmulator();
      var handleAppStateChange = function handleAppStateChange(nextAppState) {
        if (nextAppState === 'active') {
          checkRootAndEmulator();
        }
      };
      var subscription = _reactNative.AppState.addEventListener('change', handleAppStateChange);
      return function () {
        subscription.remove();
      };
    });
    (0, _react.useEffect)(function () {
      _reactNative.LogBox.ignoreLogs(['Animated: `useNativeDriver`', 'Sending `onAnimatedValueUpdate` with no listeners registered.', 'Please pass alt prop to Image component']);
    }, []);
    function MyStack() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Stack.Navigator, {
        initialRouteName: "Splash",
        screenOptions: {
          headerShown: false
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Splash",
          component: _Splash.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Intro",
          component: _Intro.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Login",
          component: _Login.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "TermsConditions",
          component: _TermsConditions.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Registration",
          component: _Registration.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Home",
          component: _Home.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MyProfile",
          component: _MyProfile.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "AddPurchase",
          component: _AddPurchase.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "RegistrationApprovals",
          component: _RegistrationApprovals.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "TransactionApprovals",
          component: _TransactionApprovals.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MyPerformance",
          component: _MyPerformance.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "RegisterMember",
          component: _RegisterMember.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "AddContractors",
          component: _AddContractor.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "AddSpouse",
          component: _AddSpouse.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "SpouseDetails",
          component: _SpouseDetails.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ViewTransaction",
          component: _ViewTransaction.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ViewMember",
          component: _ViewMember.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MemberDetails",
          component: _MemberDetails.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "PurchaseHistory",
          component: _PurchaseHistory.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MyPoints",
          component: _MyPoints.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "AboutProgram",
          component: _AboutProgram.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ChangeLanguage",
          component: _ChangeLanguage.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "AllocateLifting",
          component: _AllocateLifting.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Rewards",
          component: _RewardsStore.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "TrackRewards",
          component: _TrackRewards.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MyCart",
          component: _MyCart.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Notification",
          component: _Notification.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Gallery",
          component: _Gallery.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Faq",
          component: _FAQ.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Newsletter",
          component: _NewsLetter.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ContactUs",
          component: _ContactUs.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Transaction",
          component: _Transaction.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "DeleteAccount",
          component: _DeleteAccount.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ProductDetails",
          component: _ProductDetails.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "RedemptionStatus",
          component: _RedemptionStatus.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "RedemptionDetails",
          component: _RedemptionDetails.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "RedeemptionConfirmation",
          component: _RedeemptionConfirmation.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Address",
          component: _Address.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "RedeemsonOTP",
          component: _RedeemsonOTP.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "OrderPlacessSuccessfully",
          component: _OrderPlacessSuccessfully.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ViewOrder",
          component: _ViewOrder.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "UpdateKYC",
          component: _UpdateKYC.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "AddressVerificationPending",
          component: _AddressVerification.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "GalleryDetails",
          component: _GalleryDetails.default
        })]
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_native.NavigationContainer, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.SafeAreaView, {
        style: {
          flex: 1,
          backgroundColor: '#ffffff'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Drawer.Navigator, {
          drawerContent: function drawerContent(props) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LeftMenuBar.default, Object.assign({}, props));
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Drawer.Screen, {
            name: "Welcome",
            options: {
              headerShown: false,
              swipeEnabled: false
            },
            component: MyStack
          })
        })
      })
    });
  };
  var _default = exports.default = App;
