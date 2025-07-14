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
  var _MainStyle = _$$_REQUIRE(_dependencyMap[9]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _apiClient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var GalleryScreen = function GalleryScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _Dimensions$get = _reactNative.Dimensions.get('window'),
      width = _Dimensions$get.width,
      height = _Dimensions$get.height;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState(1),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      filterStatus = _React$useState4[0],
      setFilterStatus = _React$useState4[1];
    var _React$useState5 = _react.default.useState([]),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      albums = _React$useState6[0],
      setAlbums = _React$useState6[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData(filterStatus);
        console.log("filterStatus: ", filterStatus);
        setFilterStatus(1);
      });
      return unsubscribe;
    }, []);
    var onSetFilter = function onSetFilter(dataVal) {
      setLoading(true);
      setFilterStatus(dataVal);
      getAllData(dataVal);
    };
    var getAllData = function getAllData(type) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[14]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("contentType", type);
          console.log("formdata: ", formdata);
          _apiClient.default.post(`${_Config.BASE_URL}/get-gallery`, formdata, {
            headers: {
              'Content-Type': 'multipart/form-data',
              accesstoken: `${_Config.AccessToken}`,
              Useraccesstoken: JSON.parse(decryptData).token
            }
          }).then(function (response) {
            return response;
          }).then(function (responseJson) {
            setLoading(false);
            console.log("get-gallery:", JSON.stringify(responseJson.data));
            if (responseJson.data.bstatus == 1) {
              setAlbums(responseJson.data.gallery_list);
            } else {
              if (responseJson.data.msg_code == "msg_0047") {
                _asyncStorage.default.clear();
                navigation.replace('Login');
              }
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("get-gallery Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.replace('Login');
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 10,
            padding: 6,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              alignItems: "center",
              justifyContent: "space-evenly",
              space: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                borderColor: filterStatus == "1" ? _MainStyle.baseColor : _MainStyle.greyColor,
                style: {
                  width: '30%',
                  borderBottomWidth: 3,
                  backgroundColor: '#eeeeee'
                },
                variant: "link",
                _text: {
                  color: _MainStyle.darkColor,
                  fontSize: 12
                },
                onPress: function onPress() {
                  return onSetFilter("1");
                },
                children: t("Images")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                borderColor: filterStatus == "2" ? _MainStyle.baseColor : _MainStyle.greyColor,
                style: {
                  width: '30%',
                  borderBottomWidth: 3,
                  backgroundColor: '#eeeeee'
                },
                variant: "link",
                _text: {
                  color: _MainStyle.darkColor,
                  fontSize: 12
                },
                onPress: function onPress() {
                  return onSetFilter("2");
                },
                children: t("Videos")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                borderColor: filterStatus == "3" ? _MainStyle.baseColor : _MainStyle.greyColor,
                style: {
                  width: '30%',
                  borderBottomWidth: 3,
                  backgroundColor: '#eeeeee'
                },
                variant: "link",
                _text: {
                  color: _MainStyle.darkColor,
                  fontSize: 12
                },
                onPress: function onPress() {
                  return onSetFilter("3");
                },
                children: t("Documents")
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              flexWrap: "wrap",
              justifyContent: 'space-between',
              alignItems: 'center',
              children: albums.map(function (item, index) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                  backgroundColor: _MainStyle.lightGrey,
                  style: {
                    width: '48%',
                    borderRadius: 10,
                    overflow: 'hidden',
                    marginBottom: 10
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
                    onPress: function onPress() {
                      return navigation.navigate("GalleryDetails", {
                        albumId: item.id,
                        albumType: item.contentType,
                        albumName: item.name
                      });
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                      source: {
                        uri: item.display_image
                      },
                      style: {
                        width: '100%',
                        height: 100
                      },
                      resizeMode: "cover"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                      backgroundColor: _MainStyle.baseColor,
                      padding: 1,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontFamily: _MainStyle.fontBold,
                        fontSize: "sm",
                        color: _MainStyle.lightColor,
                        textAlign: "center",
                        children: item.name
                      })
                    })]
                  })
                }, index);
              })
            })]
          })
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
  var _default = exports.default = GalleryScreen;
