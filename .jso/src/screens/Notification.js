  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[3]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[5]);
  var _Config = _$$_REQUIRE(_dependencyMap[6]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[7]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[9]);
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeRenderHtml = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[14]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var NotificationScreen = function NotificationScreen(_ref) {
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
      userType = _React$useState4[0],
      setUserType = _React$useState4[1];
    var _React$useState5 = _react.default.useState([]),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      pageData = _React$useState6[0],
      setPageData = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      message = _React$useState8[0],
      setMessage = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      time = _React$useState0[0],
      setTime = _React$useState0[1];
    var _React$useState1 = _react.default.useState(0),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState1, 2),
      unreadCount = _React$useState10[0],
      setUnreadCount = _React$useState10[1]; // Added state
    var _React$useState11 = _react.default.useState(1),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      pageNumber = _React$useState12[0],
      setPageNumber = _React$useState12[1];
    var _React$useState13 = _react.default.useState(1),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      totalPage = _React$useState14[0],
      setTotalPage = _React$useState14[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData();
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[15]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("page", "1");
          formdata.append("num_of_rows", "5");
          fetch(`${_Config.BASE_URL}/get-all-notification`, {
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
            if (responseJson.bstatus == 1) {
              var notifications = Array.isArray(responseJson.notification) ? responseJson.notification : [];
              setPageData(notifications);
              setTotalPage(responseJson.total_pages);

              // Count only unread notifications
              var unread = notifications.filter(function (item) {
                return item.is_read === 0;
              }).length;
              setUnreadCount(unread); // Update state

              if (notifications.length > 0) {
                setMessage(notifications[0].message);
                setTime(notifications[0].created_at);
              }
            } else {
              setPageData([]);
              setUnreadCount(0); // Set unreadCount to 0 if no notifications

              if (responseJson.msg_code == "msg_0047") {
                _asyncStorage.default.clear();
                navigation.replace('Intro');
              }
            }
          }).catch(function () {
            setLoading(false);
          });
        }
      });
    };
    var loadMore = function loadMore() {
      var num = pageNumber + 1;
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[15]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("page", num);
          formdata.append("num_of_rows", "5");
          fetch(`${_Config.BASE_URL}/get-all-notification`, {
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
            if (responseJson.bstatus == 1) {
              var notifications = Array.isArray(responseJson.notification) ? responseJson.notification : [];
              if (notifications.length > 0) {
                // Append new notifications to the existing data
                setPageData(function (prevData) {
                  return [].concat((0, _toConsumableArray2.default)(prevData), (0, _toConsumableArray2.default)(notifications));
                });
                setPageNumber(num);
                setTotalPage(responseJson.total_pages);

                // Update unread notification count
                var unread = notifications.filter(function (item) {
                  return item.is_read === 0;
                }).length;
                setUnreadCount(function (prevUnread) {
                  return prevUnread + unread;
                });
              } else {
                // No more notifications to load
                _reactNativeSimpleToast.default.show("No more notifications.");
              }
            } else {
              setLoading(false);
              _reactNativeSimpleToast.default.show("Failed to load notifications.");
            }
          }).catch(function () {
            setLoading(false);
            _reactNativeSimpleToast.default.show("Something went wrong.");
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
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 5,
            padding: 6,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              fontSize: "xl",
              fontWeight: "bold",
              children: t("Notifications")
            }), Array.isArray(pageData) && pageData.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
              space: 4,
              children: pageData.filter(function (item) {
                return item.message && item.message.trim() !== '';
              }).map(function (item, index) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  backgroundColor: _MainStyle.lightColor,
                  borderRadius: 8,
                  padding: 4,
                  shadow: 2,
                  width: "100%",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    space: 4,
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                      source: _$$_REQUIRE(_dependencyMap[16]),
                      alt: "notification",
                      style: {
                        width: 50,
                        height: 50,
                        resizeMode: 'contain'
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                      flex: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontSize: "md",
                        fontWeight: "bold",
                        children: item.message
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontSize: "sm",
                        color: "gray.500",
                        children: item.created_at
                      })]
                    })]
                  })
                }, index);
              })
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
              space: 6,
              backgroundColor: _MainStyle.lightColor,
              borderRadius: 8,
              overflow: "hidden",
              height: 300,
              justifyContent: "center",
              alignItems: "center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "lg",
                fontFamily: _MainStyle.fontBold,
                children: t("No Notifications left")
              })
            }), pageNumber < totalPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              paddingY: "3",
              paddingX: "6",
              justifyContent: "center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                variant: "outline",
                size: 'xs',
                rounded: 30,
                onPress: function onPress() {
                  return loadMore();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "#bbbbbb",
                  children: t("Load More")
                })
              })
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {
          navigation: navigation,
          component: userType
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
  var _default = exports.default = NotificationScreen;
