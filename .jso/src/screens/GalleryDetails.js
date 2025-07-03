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
  var _reactNativeImageViewing = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeWebview = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativePdf = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _apiClient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[16]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var GalleryDetailsScreen = function GalleryDetailsScreen(_ref) {
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
    var _React$useState7 = _react.default.useState([]),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      allImages = _React$useState8[0],
      setAllImages = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      albumName = _React$useState10[0],
      setAlbumName = _React$useState10[1];
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      imagePop = _React$useState12[0],
      setImagePop = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      imageIndex = _React$useState14[0],
      setImageIndex = _React$useState14[1];
    var images = [];
    var _React$useState15 = _react.default.useState(false),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      isPDF = _React$useState16[0],
      setIsPDF = _React$useState16[1];
    var _React$useState17 = _react.default.useState(false),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      isVideo = _React$useState18[0],
      setIsVideo = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      sourcePDF = _React$useState20[0],
      setSourcePDF = _React$useState20[1];
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      sourceVideo = _React$useState22[0],
      setSourceVideo = _React$useState22[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData(filterStatus);
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData(type) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("album_id", route.params.albumId);
          formdata.append("contentType", route.params.albumType);
          _apiClient.default.post(`${_Config.BASE_URL}/get-album-details`, formdata, {
            headers: {
              'Content-Type': 'multipart/form-data',
              accesstoken: `${_Config.AccessToken}`,
              Useraccesstoken: JSON.parse(decryptData).token
            }
          }).then(function (response) {
            return response;
          }).then(function (responseJson) {
            setLoading(false);
            console.log("get_album_details:", JSON.stringify(responseJson.data));
            if (responseJson.data.bstatus == 1) {
              for (var i = 0; i < responseJson.data.album_details.length; i++) {
                images.push({
                  view: responseJson.data.album_details[i].display_image,
                  uri: responseJson.data.album_details[i].file_url,
                  title: responseJson.data.album_details[i].title
                });
              }
              setAllImages(images);
              setAlbumName(responseJson.data.album_name);
            } else {
              if (responseJson.data.msg_code == "msg_0047") {
                _asyncStorage.default.clear();
                navigation.replace('Login');
              }
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("get_album_details Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.replace('Login');
        }
      });
    };
    var viewImage = function viewImage(ind, url) {
      if (route.params.albumType == 1) {
        setImagePop(true);
        setImageIndex(ind);
      } else if (route.params.albumType == 2) {
        setIsVideo(true);
        setSourceVideo(url);
      } else if (route.params.albumType == 3) {
        setIsPDF(true);
        setSourcePDF(url);
      }
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: "#000000",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: route.params.albumName,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            space: 10,
            padding: 6,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              flexWrap: "wrap",
              justifyContent: 'space-between',
              alignItems: 'center',
              children: allImages.map(function (item, index) {
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
                      return viewImage(index, item.uri);
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                      source: {
                        uri: item.view
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
                        children: item.title
                      })
                    })]
                  })
                }, index);
              })
            })
          })
        })]
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          animating: loading,
          size: "large",
          color: _MainStyle.warningColor
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeImageViewing.default, {
        images: allImages,
        imageIndex: imageIndex,
        visible: imagePop,
        onRequestClose: function onRequestClose() {
          return setImagePop(false);
        }
      }), isVideo && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return setIsVideo(false);
          },
          style: {
            position: "absolute",
            top: 12,
            right: 15,
            zIndex: 9
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "close-outline",
            size: 32,
            color: "#ffffff"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: {
            height: 450
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeWebview.default, {
            style: {
              width: 400,
              maxWidth: '98%'
            },
            javaScriptEnabled: true,
            domStorageEnabled: true,
            source: {
              uri: sourceVideo
            }
          })
        })]
      }), isPDF && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return setIsPDF(false);
          },
          style: {
            position: "absolute",
            top: 12,
            right: 15
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "close-outline",
            size: 32,
            color: "#ffffff"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativePdf.default, {
          trustAllCerts: false,
          source: {
            uri: sourcePDF,
            cache: true
          },
          style: styles.pdf
        })]
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({
    pdf: {
      width: '96%',
      height: '80%',
      marginHorizontal: '2%',
      marginTop: 10
    }
  });
  var _default = exports.default = GalleryDetailsScreen;
