  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[4]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[5]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[7]);
  var _Config = _$$_REQUIRE(_dependencyMap[8]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[9]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[11]);
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _native = _$$_REQUIRE(_dependencyMap[16]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[17]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var RedemptionStatusScreen = function RedemptionStatusScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState([]),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      approvalList = _React$useState4[0],
      setApprovalList = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      searchTerms = _React$useState6[0],
      setSearchTerms = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      searchDate = _React$useState8[0],
      setSearchDate = _React$useState8[1];
    var _React$useState9 = _react.default.useState(false),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      isReset = _React$useState0[0],
      setIsReset = _React$useState0[1];
    var _React$useState1 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState1, 2),
      userType = _React$useState10[0],
      setUserType = _React$useState10[1];
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      isDatePickerVisible = _React$useState12[0],
      setDatePickerVisibility = _React$useState12[1];
    var _React$useState13 = _react.default.useState(1),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      pageNumber = _React$useState14[0],
      setPageNumber = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      totalPage = _React$useState16[0],
      setTotalPage = _React$useState16[1];
    var _React$useState17 = _react.default.useState(""),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      memberId = _React$useState18[0],
      setMemberId = _React$useState18[1];
    var _React$useState19 = _react.default.useState(null),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      contactHier = _React$useState20[0],
      setContactHier = _React$useState20[1];
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      selectedTSO = _React$useState22[0],
      setSelectedTSO = _React$useState22[1];
    var _React$useState23 = _react.default.useState(false),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      showDropdown = _React$useState24[0],
      setShowDropdown = _React$useState24[1];
    var _React$useState25 = _react.default.useState([]),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      tsoList = _React$useState26[0],
      setTsoList = _React$useState26[1];
    var _React$useState27 = _react.default.useState([]),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      selectedTSOIds = _React$useState28[0],
      setSelectedTSOIds = _React$useState28[1];
    var _React$useState29 = _react.default.useState(""),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      filterStatus = _React$useState30[0],
      setFilterStatus = _React$useState30[1];
    (0, _native.useFocusEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData(searchDate, filterStatus);
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData(dateValue, filterVal) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("page", 1);
          formdata.append("search_value", searchTerms);
          formdata.append("registration_date", dateValue == "" ? "" : (0, _moment.default)(dateValue).format("DD-MM-YYYY"));
          formdata.append("status", 1);
          formdata.append("tsoId", selectedTSOIds);
          console.log("TSO ID-> ", selectedTSOIds);
          fetch(`${_Config.BASE_URL}/registration-approval`, {
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
            console.log("Approval:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setApprovalList(responseJson.influncers);
              setTotalPage(responseJson.total_pages);
              if (responseJson.influncers.length > 0) {
                var influencerIds = responseJson.influncers.map(function (influencer) {
                  return influencer.id;
                });
                setMemberId(influencerIds);
              }
              getProfileData();
            } else {
              setLoading(false);
              //Toast.show(responseJson.message, Toast.LONG);
              setApprovalList([]);
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
    var loadMore = function loadMore() {
      var num = pageNumber + 1;
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("page", num);
          formdata.append("search_value", searchTerms);
          formdata.append("registration_date", searchDate == "" ? "" : (0, _moment.default)(searchDate).format("DD-MM-YYYY"));
          formdata.append("status", 1);
          formdata.append("tsoId", selectedTSOIds);
          console.log("TSO ID Loadmore-> ", selectedTSOIds);
          fetch(`${_Config.BASE_URL}/registration-approval`, {
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
            console.log("Approval:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setTotalPage(responseJson.total_pages);
              setPageNumber(num);
              if (responseJson.influncers.length > 0) {
                var newIds = responseJson.influncers.map(function (influencer) {
                  return influencer.id;
                });
                setMemberId(function (prevIds) {
                  return [].concat((0, _toConsumableArray2.default)(prevIds), (0, _toConsumableArray2.default)(newIds));
                });
              }
              var newArrya = approvalList.concat(responseJson.influncers);
              setApprovalList(newArrya);
            } else {
              setLoading(false);
              setPageNumber(1);
              setApprovalList([]);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Rewards Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Intro');
        }
      });
    };
    var getProfileData = function getProfileData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
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
            var _responseJson$profile;
            setLoading(false);
            console.log("profile:", responseJson);
            setContactHier(responseJson == null ? undefined : (_responseJson$profile = responseJson.profile) == null ? undefined : _responseJson$profile.contactHier);
            if (responseJson.bstatus == 1) {
              //  Events.publish('profileData', responseJson);
              //  setProfileData(responseJson.profile);
              //setPoints(responseJson.available_point);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.replace('Intro');
        }
      });
    };
    var fetchTSOMembers = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* () {
        try {
          setShowDropdown(true);
          var val = yield _asyncStorage.default.getItem('userToken');
          if (val != null) {
            var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
            var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
            var formdata = new FormData();
            formdata.append("os_type", _Config.OS_TYPE);
            formdata.append("app_ver", _Config.APP_VERSION);
            var response = yield fetch(`${_Config.BASE_URL}/get-tso`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data',
                'accesstoken': _Config.AccessToken,
                'Useraccesstoken': JSON.parse(decryptData).token
              },
              body: formdata
            });
            var result = yield response.json();
            console.log("TSO list:", result);
            var tsoDetails = result == null ? undefined : result.details;
            if (result.bstatus === 1 && Array.isArray(tsoDetails)) {
              setTsoList(tsoDetails);
            } else {
              setTsoList([]);
              // Toast.show("No TSO members found");
              if (result.msg_code === "msg_0046") {
                yield _asyncStorage.default.clear();
                navigation.replace('Intro');
              }
            }
          }
        } catch (err) {
          console.error(err);
          setTsoList([]); // prevent null reference
          _reactNativeSimpleToast.default.show("Error loading TSO members");
        }
      });
      return function fetchTSOMembers() {
        return _ref2.apply(this, arguments);
      };
    }();
    var onSearch = function onSearch() {
      setLoading(true);
      getAllData(searchDate, filterStatus);
      setPageNumber(1);
    };
    var handleTSOSelect = function handleTSOSelect(name) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      //console.log("Selected name:", name, "Selected ID:", id);
      setSelectedTSO(name);
      setShowDropdown(false);
      if (name === "") {
        setSelectedTSOIds('');
      } else {
        setSelectedTSOIds(id);
      }
    };
    (0, _react.useEffect)(function () {
      if (selectedTSOIds !== undefined) {
        //console.log("TSO ID (useEffect):", selectedTSOIds);
        getAllData("", "");
      }
    }, [selectedTSOIds]);
    var onReset = function onReset() {
      setLoading(true);
      getAllData("", "");
      setIsReset(false);
    };
    (0, _react.useEffect)(function () {
      console.log("Updated MemberID:", memberId);
    }, [memberId]);
    var onMore = function onMore(itemValue) {
      console.log(itemValue);
      navigation.navigate("RedemptionDetails", {
        details: itemValue,
        memberId: itemValue.id
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
            space: 5,
            padding: 6,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    flex: 1,
                    fontFamily: _MainStyle.fontRegular,
                    size: "sm",
                    variant: "unstyled",
                    placeholder: "Name / Mobile / Member ID",
                    onChangeText: function onChangeText(text) {
                      return setSearchTerms(text);
                    },
                    InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "search-outline",
                      size: 12,
                      color: _MainStyle.darkGrey,
                      style: {
                        marginLeft: 10
                      }
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.baseColor,
                      height: 37,
                      marginRight: 4
                    }],
                    onPress: onSearch,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      fontSize: "xs",
                      children: t("Search")
                    })
                  }), ["TTO", "STH"].includes(contactHier == null ? undefined : contactHier.trim == null ? undefined : contactHier.trim()) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    onPress: function onPress() {
                      fetchTSOMembers();
                      setShowDropdown(true);
                    },
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.baseColor,
                      height: 37,
                      marginRight: 4
                    }],
                    leftIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "options-outline",
                      size: 18,
                      color: _MainStyle.lightColor
                    })
                  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    onPress: onReset,
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.baseColor,
                      height: 37,
                      marginRight: 4
                    }],
                    leftIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "refresh-outline",
                      size: 18,
                      color: _MainStyle.lightColor
                    })
                  })]
                })
              }), showDropdown && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: [_MainStyle.MainStyle.lable, {
                    marginTop: 18,
                    marginLeft: 5,
                    fontWeight: 'bold'
                  }],
                  fontSize: "xs",
                  children: [t('Select Your TSO'), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    height: 43,
                    selectedValue: selectedTSO,
                    onValueChange: function onValueChange(value) {
                      return handleTSOSelect(value);
                    },
                    placeholder: t('All'),
                    style: {
                      paddingLeft: 15
                    },
                    fontFamily: _MainStyle.fontRegular,
                    dropdownCloseIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "chevron-down-outline",
                      style: {
                        marginRight: 10
                      },
                      size: 20
                    }),
                    dropdownOpenIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "chevron-up-outline",
                      style: {
                        marginRight: 10
                      },
                      size: 20
                    }),
                    _selectedItem: {
                      backgroundColor: _MainStyle.greyColor,
                      endIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "checkmark-circle",
                        size: 20,
                        color: _MainStyle.successColor,
                        style: {
                          right: 0,
                          position: 'absolute'
                        }
                      })
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "All",
                      value: ""
                    }), tsoList.length > 0 ? tsoList.map(function (tso, index) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                        label: tso.name,
                        value: tso.name,
                        onPress: function onPress() {
                          return handleTSOSelect(tso.name, tso.id);
                        }
                      }, index);
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "No TSO Found",
                      value: "",
                      isDisabled: true
                    })]
                  })
                })]
              })]
            }), approvalList.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              space: 6,
              backgroundColor: _MainStyle.lightColor,
              borderRadius: 8,
              overflow: "hidden",
              height: 300,
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                source: _$$_REQUIRE(_dependencyMap[19]),
                alt: "hours",
                style: {
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                  position: 'relative'
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "lg",
                fontFamily: _MainStyle.fontBold,
                children: t("Sorry! No Data Found")
              })]
            }), approvalList.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                backgroundColor: _MainStyle.baseLightColor,
                borderRadius: 8,
                overflow: "hidden",
                borderColor: item.is_approved == "0" ? "#FBC711" : item.is_approved == "2" ? "#F21515" : "#447A50",
                borderLeftWidth: 3,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  space: 6,
                  padding: 4,
                  paddingBottom: 6,
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Avatar, {
                    borderColor: _MainStyle.baseSemiColor,
                    resizeMode: "contain",
                    borderWidth: "2",
                    size: "60",
                    source: item.profile_image == "" ? _$$_REQUIRE(_dependencyMap[20]) : {
                      uri: item.profile_image
                    }
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    justifyContent: "center",
                    width: '70%',
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: "#111111",
                      fontSize: "md",
                      fontFamily: _MainStyle.fontBold,
                      textTransform: "capitalize",
                      children: item.name
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      space: 2,
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "10",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: [t("Member Id"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.emp_id
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      space: 2,
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "10",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: [t("Contact No."), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                        onPress: function onPress() {
                          return _reactNative.Linking.openURL(`tel:${item.ph_number}`);
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontBold,
                          children: [" ", item.ph_number]
                        })
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      space: 2,
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "10",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: [t("Total Points"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.total_point
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      space: 2,
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "10",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: [t("Redeemed Points"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.redeemed_point
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      space: 2,
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "10",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: [t("Available Points"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.available_point
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      space: 2,
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "10",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: [t("status"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: item.is_approved == "0" ? "#FBC711" : item.is_approved == "2" ? "#F21515" : "#447A50",
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: [" ", item.is_approved == "0" ? "Pending" : item.is_approved == "2" ? "Rejected" : "Approved"]
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: {
                      position: 'absolute',
                      bottom: 8,
                      right: 15,
                      borderBottomWidth: 1,
                      borderColor: _MainStyle.baseColor
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      onPress: function onPress() {
                        return onMore(item);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        textAlign: "right",
                        color: _MainStyle.baseColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: t("Redemption Details")
                      })
                    })
                  })]
                })
              }, index);
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
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = RedemptionStatusScreen;
