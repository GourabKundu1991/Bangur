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
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeModalDatetimePicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _reactNativeImagePicker = _$$_REQUIRE(_dependencyMap[15]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[16]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var MySpouseScreen = function MySpouseScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState(""),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      profileData = _React$useState4[0],
      setProfileData = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      addressData = _React$useState6[0],
      setAddressData = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      workingAddressData = _React$useState8[0],
      setWorkingAddressData = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      profilePic = _React$useState10[0],
      setProfilePic = _React$useState10[1];
    var _useDisclose = (0, _nativeBase.useDisclose)(),
      isOpen = _useDisclose.isOpen,
      onOpen = _useDisclose.onOpen,
      onClose = _useDisclose.onClose;
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      isDatePickerVisible = _React$useState12[0],
      setDatePickerVisibility = _React$useState12[1];
    var today = new Date();
    var _React$useState13 = _react.default.useState(''),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      userId = _React$useState14[0],
      SetUserId = _React$useState14[1];
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
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          SetUserId(JSON.parse(decryptData).userCode);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("spouse", "1");
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
            // console.log("Ami Porashona korchi naa: ", JSON.parse(decryptData).user_type);
            console.log("profile:", JSON.stringify(responseJson));
            if (responseJson.bstatus == 1) {
              //Events.publish('profileData', responseJson.profile);
              setProfileData(responseJson.profile);
              setAddressData(responseJson.profile.address[0]);
              if (responseJson.profile.working_address != null) {
                setWorkingAddressData(responseJson.profile.working_address);
              }
            } else {
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
    var openProfilePicker = function openProfilePicker(type) {
      onClose();
      if (type == "library") {
        (0, _reactNativeImagePicker.launchImageLibrary)({
          mediaType: 'photo',
          includeBase64: true,
          maxHeight: 1500,
          maxWidth: 1500
        }, function (response) {
          //console.log(response);
          if (response.assets != undefined) {
            profileUpdate(response.assets[0].base64, "");
          }
        });
      } else if (type == "camera") {
        (0, _reactNativeImagePicker.launchCamera)({
          mediaType: 'photo',
          includeBase64: true,
          maxHeight: 1500,
          maxWidth: 1500
        }, function (response) {
          //console.log(response.assets);
          if (response.assets != undefined) {
            profileUpdate(response.assets[0].base64, "");
          }
        });
      }
    };
    var profileUpdate = function profileUpdate(imageVal, dateVal) {
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("profile_image", imageVal != "" ? imageVal : "");
          formdata.append("aniversery_date", dateVal != "" ? (0, _moment.default)(dateVal).format('YYYY-MM-DD') : "");
          formdata.append("spouse", "1");
          fetch(`${_Config.BASE_URL}/profile-update`, {
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
            //console.log("Profile Update:", responseJson);
            if (responseJson.bstatus == 1) {
              getAllData();
            } else {
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
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
        position: 'relative',
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          backgroundColor: _MainStyle.spouseColor,
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: "5",
          paddingY: "4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            space: 4,
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
              onPress: function onPress() {
                return navigation.goBack();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "arrow-back-outline",
                size: 24,
                color: _MainStyle.lightColor
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "md",
              children: t("Spouse Details")
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            alignItems: "flex-end",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              alignItems: "center",
              space: 2,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                style: {
                  backgroundColor: _MainStyle.lightColor,
                  padding: 5,
                  borderRadius: 5
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Image, {
                  source: _$$_REQUIRE(_dependencyMap[18]),
                  style: {
                    width: 60,
                    height: 32,
                    resizeMode: 'contain'
                  }
                })
              })
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          backgroundColor: _MainStyle.spouseColor,
          style: {
            width: '100%',
            height: 250,
            position: 'absolute',
            top: 95,
            left: 0
          }
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
            paddingY: 8,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 4,
              alignItems: "center",
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
                position: "relative",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Avatar, {
                  borderColor: _MainStyle.lightGrey,
                  resizeMode: "contain",
                  borderWidth: "2",
                  size: "75",
                  source: profileData.profile_image == "" ? _$$_REQUIRE(_dependencyMap[19]) : {
                    uri: profileData.profile_image
                  }
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                  onPress: onOpen,
                  style: {
                    backgroundColor: _MainStyle.spouseColor,
                    height: 30,
                    width: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30,
                    position: 'absolute',
                    bottom: -5,
                    left: 0
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "camera-outline",
                    size: 18,
                    color: _MainStyle.lightColor
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet, {
                  isOpen: isOpen,
                  onClose: onClose,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Actionsheet.Content, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: "#666666",
                      fontSize: "md",
                      textAlign: "center",
                      children: t("Select Image Source")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Item, {
                      onPress: function onPress() {
                        return openProfilePicker("library");
                      },
                      children: t("Load from Library")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Item, {
                      onPress: function onPress() {
                        return openProfilePicker("camera");
                      },
                      children: t("Use Camera")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Item, {
                      onPress: function onPress() {
                        return openProfilePicker("cancel");
                      },
                      children: t("Cancel")
                    })]
                  })
                })]
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
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontSemiBold,
                    children: [t("Member Id"), ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.spouseColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    children: profileData.userCode
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: profileData.contactHier
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
            space: 5,
            paddingX: 8,
            paddingBottom: 8,
            paddingTop: 2,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              style: _MainStyle.MainStyle.inputbox,
              padding: 3,
              space: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: [_MainStyle.MainStyle.lable, {
                  color: _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontBold
                }],
                fontSize: "xs",
                children: t("Personal Details")
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.lightGrey,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: [t("Mobile Number"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.spouseColor,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontBold,
                  children: profileData.mobile
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.lightGrey,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: [t("Date of Birth"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.spouseColor,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontBold,
                  children: profileData.dob
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.lightGrey,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: [t("Gender"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.spouseColor,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontBold,
                  children: profileData.gender
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              style: _MainStyle.MainStyle.inputbox,
              padding: 3,
              space: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: [_MainStyle.MainStyle.lable, {
                  color: _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontBold
                }],
                fontSize: "xs",
                children: t("Permanent Address")
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.lightGrey,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: [t("Address"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  width: 180,
                  color: _MainStyle.spouseColor,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontBold,
                  textAlign: "right",
                  children: addressData.line1
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.lightGrey,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: [t("Pincode"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.spouseColor,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontBold,
                  children: addressData.post_code
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.lightGrey,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: [t("District"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.spouseColor,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontBold,
                  children: addressData.city
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.lightGrey,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: [t("State"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.spouseColor,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontBold,
                  children: addressData.state
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              style: _MainStyle.MainStyle.inputbox,
              padding: 3,
              space: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: [_MainStyle.MainStyle.lable, {
                  color: _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontBold
                }],
                fontSize: "xs",
                children: t("KYC Details")
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.lightGrey,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: [t("Status"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.spouseColor,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontBold,
                  children: profileData.kyc_status
                })]
              }), profileData.aadhaar_number != "N/A" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.lightGrey,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: [t("Aadhaar Number"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.spouseColor,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontBold,
                  children: profileData.aadhaar_number
                })]
              }), profileData.pan_number != "N/A" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.lightGrey,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkGrey,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: [t("PAN Number"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.spouseColor,
                  fontSize: "xs",
                  fontFamily: _MainStyle.fontBold,
                  children: profileData.pan_number
                })]
              })]
            })]
          })]
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
  var _default = exports.default = MySpouseScreen;
