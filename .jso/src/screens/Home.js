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
  var _Events = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[10]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _i18n = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _reactNativeImageSliderBox = _$$_REQUIRE(_dependencyMap[15]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[16]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var HomeScreen = function HomeScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState('Eng'),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      currentLanguage = _React$useState4[0],
      setLanguage = _React$useState4[1];
    var _Dimensions$get = _reactNative.Dimensions.get('window'),
      width = _Dimensions$get.width,
      height = _Dimensions$get.height;
    var _React$useState5 = _react.default.useState([]),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      homeMenu = _React$useState6[0],
      setHomeMenu = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      profileData = _React$useState8[0],
      setProfileData = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      points = _React$useState10[0],
      setPoints = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      count = _React$useState12[0],
      setCount = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      contestPrize = _React$useState14[0],
      setContestPrize = _React$useState14[1];
    var _React$useState15 = _react.default.useState([]),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      banner = _React$useState16[0],
      setBanner = _React$useState16[1];
    var _React$useState17 = _react.default.useState(""),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      userType = _React$useState18[0],
      setUserType = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      cartcount = _React$useState20[0],
      setCartCount = _React$useState20[1];
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      customerCareNumber = _React$useState22[0],
      setCustomerCareNumber = _React$useState22[1];
    var _React$useState23 = _react.default.useState(""),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      unreadCount = _React$useState24[0],
      setUnreadCount = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      rewardCatalog = _React$useState26[0],
      SetRewardCatalog = _React$useState26[1];
    var _React$useState27 = _react.default.useState(""),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      schemeCatalog = _React$useState28[0],
      SetSchemeCatalog = _React$useState28[1];
    var _React$useState29 = _react.default.useState(null),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      addressStatus = _React$useState30[0],
      SetAddressStatus = _React$useState30[1];
    var _React$useState31 = _react.default.useState(true),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      showPopup = _React$useState32[0],
      setShowPopup = _React$useState32[1];
    var _React$useState33 = _react.default.useState(""),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      addressData = _React$useState34[0],
      SetAddressData = _React$useState34[1];
    var _React$useState35 = _react.default.useState(""),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      addressMsg = _React$useState36[0],
      SetAddressMsg = _React$useState36[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        _asyncStorage.default.getItem('language').then(function (val) {
          if (val != null) {
            setLanguage(val);
            _i18n.default.changeLanguage(val).then(function () {
              return console.log(val);
            }).catch(function (err) {
              return console.log(err);
            });
          }
        });
        getAllData();
        cartCount();
      });
      return unsubscribe;
    }, []);
    var cartCount = function cartCount() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          // setUserType(JSON.parse(decryptData).user_type);

          fetch(`${_Config.BASE_URL}/cart/count`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'accesstoken': `${_Config.AccessToken}`,
              'Useraccesstoken': JSON.parse(decryptData).token
            }
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("cartCount:", responseJson);
            setCartCount(responseJson.cart_count);
          }).catch(function (error) {
            setLoading(false);
            console.log("Error:", error);
          });
        }
      });
    };
    var getAllData = function getAllData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("lang_code", currentLanguage);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("programId", JSON.parse(decryptData).program_id);
          fetch(`${_Config.BASE_URL}/get-dashboard`, {
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
            console.log("Dashboard:", responseJson);
            if (responseJson.bstatus == 1) {
              _Events.default.publish('mainMenu', responseJson.menu);
              setHomeMenu(responseJson.home_menu);
              setCustomerCareNumber(responseJson.helpdesk_number);
              setCount(responseJson.eligable_count);
              setContestPrize(responseJson.eligable_contestent_prize);
              setUnreadCount(responseJson.unread_notification_count);
              SetAddressStatus(responseJson.influencer_address_verification);
              SetAddressMsg(responseJson.influencer_address_msg);
              console.log("InfluencerAddressVerification:", addressStatus);
              SetAddressData(responseJson.address_verification_data);
              // console.log("eligable_count:", responseJson.eligable_count);
              console.log("Unread_count Home:", responseJson.unread_notification_count);
              var imageUrls = responseJson.banners.map(function (banner) {
                return banner.image;
              });
              setBanner(imageUrls);

              //Store catalog IDs
              if (responseJson.catalogs && Array.isArray(responseJson.catalogs)) {
                var reward = responseJson.catalogs.find(function (item) {
                  return item.name === "Reward Catalog";
                });
                var scheme = responseJson.catalogs.find(function (item) {
                  return item.name === "SchemeCatalog";
                });
                if (reward) SetRewardCatalog(reward.id);
                if (scheme) SetSchemeCatalog(scheme.id);
              }
              _asyncStorage.default.setItem('purchaseAcceptReasons', JSON.stringify(responseJson.sale_accept_reasons));
              _asyncStorage.default.setItem('purchaseRejectReasons', JSON.stringify(responseJson.sale_reject_reasons));
              _asyncStorage.default.setItem('accountDeleteText', JSON.stringify(responseJson.account_delete_text));
              getProfileData();
            } else {
              setLoading(false);
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
              if (responseJson.msg_code == "msg_0047") {
                _asyncStorage.default.clear();
                navigation.replace('Intro');
              }
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.replace('Intro');
        }
      });
    };
    _react.default.useEffect(function () {
      console.log("Updated InfluencerAddressVerification:", addressStatus);
      console.log("Updated Address Msg:", addressMsg);
    }, [addressStatus, addressData, addressMsg]);
    var getProfileData = function getProfileData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          fetch(`${_Config.BASE_URL}/view-profile`, {
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
            //console.log("profile:", responseJson);
            if (responseJson.bstatus == 1) {
              _Events.default.publish('profileData', responseJson);
              setProfileData(responseJson.profile);
              setPoints(responseJson.available_point);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.replace('Intro');
        }
      });
    };
    var _openDialer = function openDialer(number) {
      _reactNativeSimpleToast.default.show(number);
      var url = `tel:${number}`;
      _reactNative.Linking.canOpenURL(url).then(function (supported) {
        if (supported) {
          _reactNative.Linking.openURL(url);
        } else {
          _reactNativeSimpleToast.default.show(t("Dialer Not Available!"));
        }
      }).catch(function (err) {
        return console.error('An error Occured', err);
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
          component: "Home",
          navigation: navigation,
          openDialer: function openDialer() {
            return _openDialer(customerCareNumber);
          },
          unreadCount: unreadCount
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 8,
            paddingY: 6,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 4,
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Avatar, {
                borderColor: _MainStyle.lightGrey,
                resizeMode: "contain",
                borderWidth: "2",
                size: "75",
                source: profileData.profile_image == "" ? _$$_REQUIRE(_dependencyMap[18]) : {
                  uri: profileData.profile_image
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                justifyContent: "center",
                width: '70%',
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "#111111",
                  fontSize: "15",
                  fontFamily: _MainStyle.fontBold,
                  children: profileData.name
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  space: 2,
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    color: _MainStyle.baseColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontSemiBold,
                    children: [t("Member Id"), ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.baseColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    children: profileData.userCode
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  space: 2,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "call-outline",
                    size: 14,
                    color: _MainStyle.darkGrey,
                    onPress: function onPress() {
                      return _openDialer(profileData.mobile);
                    }
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontSemiBold,
                    children: [" ", profileData.mobile]
                  })]
                })]
              })]
            })
          }), profileData.contactHier == "Influencer" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            paddingX: 8,
            alignSelf: "center",
            position: "relative",
            zIndex: 99,
            width: "100%",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
              height: "30",
              width: "10%",
              overflow: "hidden",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                backgroundColor: _MainStyle.baseColor,
                height: "78",
                width: "90",
                position: "absolute",
                left: 2,
                top: 0,
                style: {
                  transform: [{
                    rotate: '45deg'
                  }]
                }
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 2,
              width: "80%",
              height: 55,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: _MainStyle.baseColor,
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: currentLanguage == 'Eng' ? "md" : "xs",
                fontFamily: _MainStyle.fontRegular,
                children: [t("Available Points"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "lg",
                fontFamily: _MainStyle.fontBold,
                children: points
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
              height: "30",
              width: "10%",
              overflow: "hidden",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                backgroundColor: _MainStyle.baseColor,
                height: "78",
                width: "90",
                position: "absolute",
                right: 2,
                top: 0,
                style: {
                  transform: [{
                    rotate: '-45deg'
                  }]
                }
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
            marginTop: 4,
            marginBottom: 4,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeImageSliderBox.SliderBox, {
              images: banner,
              sliderBoxHeight: 200,
              dotColor: "red",
              inactiveDotColor: "#90A4AE",
              autoplay: true,
              circleLoop: true,
              resizeMethod: 'resize',
              resizeMode: 'cover',
              dotStyle: {
                display: 'none'
              },
              ImageComponentStyle: {
                borderRadius: 20,
                borderWidth: 10,
                borderColor: '#cccccc',
                width: '80%',
                left: -12,
                alignSelf: 'center'
              }
            })
          }), profileData.contactHier == "Influencer" && count !== "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 0,
            height: 60,
            backgroundColor: _MainStyle.baseColor,
            width: "88%",
            position: 'relative',
            left: 21,
            marginTop: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              justifyContent: "flex-start",
              marginLeft: -4,
              top: 3,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                backgroundColor: _MainStyle.lightColor,
                style: {
                  width: 35,
                  height: 35,
                  borderRadius: 25
                }
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              position: 'absolute',
              top: 2,
              left: 50,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#FCDC4D",
                fontSize: "xs",
                fontFamily: _MainStyle.fontBold,
                fontWeight: 400,
                marginBottom: 30,
                children: t("Congratulations you have Won- ")
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: "#FCDC4D",
                fontSize: currentLanguage == 'Eng' ? "md" : "xs",
                fontFamily: _MainStyle.fontBold,
                fontWeight: 400,
                style: {
                  position: 'absolute',
                  left: 50
                },
                children: ["\n", count]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              justifyContent: "flex-end",
              alignItems: "center",
              position: "relative",
              left: 4,
              bottom: 6,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                backgroundColor: _MainStyle.lightColor,
                style: {
                  width: 35,
                  height: 35,
                  borderRadius: 25
                }
              })
            })]
          }), profileData.contactHier == "Influencer" && contestPrize !== "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: {
              alignItems: 'center',
              marginTop: 20
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ImageBackground, {
              source: _$$_REQUIRE(_dependencyMap[19]),
              resizeMode: "contain",
              style: {
                width: 330,
                height: 130,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: {
                  fontSize: 26,
                  fontWeight: '900',
                  color: '#FFFF00',
                  textShadowColor: '#000000',
                  textShadowOffset: {
                    width: 2,
                    height: 2
                  },
                  textShadowRadius: 4,
                  letterSpacing: 1,
                  paddingTop: 8
                },
                children: "Lucky Draw Bonanza"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: {
                  fontSize: 14,
                  color: 'white',
                  marginTop: 2
                },
                children: "Congratulations You Have Won"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: {
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 2
                },
                children: contestPrize
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 5,
            padding: 7,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: {
                backgroundColor: _MainStyle.lightGrey,
                height: 1
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: {
                  position: 'absolute',
                  width: '40%',
                  marginHorizontal: '5%',
                  top: -13,
                  backgroundColor: _MainStyle.lightColor
                },
                color: _MainStyle.darkColor,
                fontSize: "md",
                fontFamily: _MainStyle.fontBold,
                children: t("Quick Links")
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              children: homeMenu.map(function (item, index) {
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
                  style: _MainStyle.MainStyle.quickbox,
                  backgroundColor: item.link == "AddSpouse" ? _MainStyle.spouseColor : item.link == "SpouseDetails" ? _MainStyle.spouseColor : _MainStyle.lightColor,
                  onPress: function onPress() {
                    if (item.title === "My Orders") {
                      navigation.navigate('ViewOrder', {
                        rewardId: rewardCatalog,
                        schemeId: schemeCatalog
                      });
                    } else {
                      navigation.navigate(item.link, {
                        pageTitle: item.title
                      });
                    }
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                    justifyContent: "center",
                    alignItems: "center",
                    style: _MainStyle.MainStyle.quickicon,
                    backgroundColor: item.link == "AddSpouse" ? _MainStyle.lightColor : item.link == "SpouseDetails" ? _MainStyle.lightColor : _MainStyle.lightGrey,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: item.icon,
                      size: 30,
                      color: item.link == "AddSpouse" ? _MainStyle.spouseColor : item.link == "SpouseDetails" ? _MainStyle.spouseColor : _MainStyle.baseColor
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: item.link == "AddSpouse" ? _MainStyle.lightColor : item.link == "SpouseDetails" ? _MainStyle.lightColor : _MainStyle.darkColor,
                    fontSize: "xs",
                    textAlign: "center",
                    fontFamily: _MainStyle.fontSemiBold,
                    style: {
                      minHeight: 38,
                      display: 'flex',
                      verticalAlign: 'middle',
                      paddingHorizontal: 1
                    },
                    children: item.title
                  })]
                }, index);
              })
            })]
          })]
        }), Number(addressStatus) === 1 && showPopup && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: _MainStyle.MainStyle.spincontainer,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            style: _MainStyle.MainStyle.popbox,
            space: 5,
            alignItems: "center",
            position: "relative",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
              style: {
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 1,
                padding: 5
              },
              onPress: function onPress() {
                return setShowPopup(false);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "close",
                size: 28,
                color: "#333"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontSize: "18",
              fontFamily: _MainStyle.fontBold,
              textAlign: "center",
              children: addressMsg
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
              onPress: function onPress() {
                return _openDialer(customerCareNumber);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                alignItems: "center",
                space: 2,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "call",
                  size: 22,
                  color: _MainStyle.baseColor
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "20",
                  fontFamily: _MainStyle.fontBold,
                  color: _MainStyle.baseColor,
                  children: customerCareNumber
                })]
              })
            })]
          })
        }), Number(addressStatus) === 2 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: _MainStyle.MainStyle.spincontainer,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            style: _MainStyle.MainStyle.popbox,
            space: 10,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
              justifyContent: "center",
              alignItems: "center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "22",
                fontFamily: _MainStyle.fontBold,
                textAlign: "center",
                style: {
                  bottom: 10
                },
                children: t("Address Verification Pending")
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
              width: '100%',
              space: 3,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                style: _MainStyle.MainStyle.solidbtn,
                onPress: function onPress() {
                  return navigation.navigate('AddressVerificationPending', {
                    pageTitle: t('Address Verification Pending'),
                    addressData: addressData
                  });
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "20",
                  style: {
                    bottom: 7
                  },
                  children: t("Verify Address")
                })
              })
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {
          navigation: navigation,
          component: userType,
          cartcount: cartcount
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
  var _default = exports.default = HomeScreen;
