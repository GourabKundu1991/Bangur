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
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeModalDatetimePicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[15]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var RegistrationApprovalsScreen = function RegistrationApprovalsScreen(_ref) {
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
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      actionPOP = _React$useState10[0],
      setActionPOP = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      status = _React$useState12[0],
      setStatus = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      reason = _React$useState14[0],
      setReason = _React$useState14[1];
    var _useDisclose = (0, _nativeBase.useDisclose)(),
      isOpen = _useDisclose.isOpen,
      onOpen = _useDisclose.onOpen,
      onClose = _useDisclose.onClose;
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      influId = _React$useState16[0],
      setInfluId = _React$useState16[1];
    var _React$useState17 = _react.default.useState(""),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      moreValue = _React$useState18[0],
      setMoreValue = _React$useState18[1];
    var _React$useState19 = _react.default.useState(false),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      isReset = _React$useState20[0],
      setIsReset = _React$useState20[1];
    var _React$useState21 = _react.default.useState(false),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      isDatePickerVisible = _React$useState22[0],
      setDatePickerVisibility = _React$useState22[1];
    var _React$useState23 = _react.default.useState(false),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      successPop = _React$useState24[0],
      setSuccessPop = _React$useState24[1];
    var _React$useState25 = _react.default.useState(1),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      pageNumber = _React$useState26[0],
      setPageNumber = _React$useState26[1];
    var _React$useState27 = _react.default.useState(""),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      totalPage = _React$useState28[0],
      setTotalPage = _React$useState28[1];
    var _React$useState29 = _react.default.useState(""),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      userType = _React$useState30[0],
      setUserType = _React$useState30[1];
    var _React$useState31 = _react.default.useState(''),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      customerName = _React$useState32[0],
      setCustomerName = _React$useState32[1];
    var _React$useState33 = _react.default.useState(''),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      customerId = _React$useState34[0],
      setCustomerId = _React$useState34[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData(searchDate);
      });
      return unsubscribe;
    }, []);
    var showDatePicker = function showDatePicker() {
      setDatePickerVisibility(true);
    };
    var hideDatePicker = function hideDatePicker() {
      setDatePickerVisibility(false);
    };
    var handleConfirm = function handleConfirm(date) {
      hideDatePicker();
      setLoading(true);
      getAllData(date);
      setIsReset(true);
    };
    var onReset = function onReset() {
      setLoading(true);
      getAllData("");
      setIsReset(false);
    };
    var getAllData = function getAllData(dateValue) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("page", 1);
          formdata.append("search_value", searchTerms);
          formdata.append("registration_date", dateValue == "" ? "" : (0, _moment.default)(dateValue).format("DD-MM-YYYY"));
          formdata.append("status", 0);
          formdata.append("data_for", "approval");
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
            //console.log("Approval:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setApprovalList(responseJson.influncers);
              setTotalPage(responseJson.total_pages);
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
          var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("page", num);
          formdata.append("search_value", searchTerms);
          formdata.append("registration_date", searchDate == "" ? "" : (0, _moment.default)(searchDate).format("DD-MM-YYYY"));
          formdata.append("status", 0);
          formdata.append("data_for", "approval");
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
            //console.log("Approval:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setTotalPage(responseJson.total_pages);
              setPageNumber(num);
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
    var onSearch = function onSearch() {
      setLoading(true);
      getAllData(searchDate);
      setPageNumber(1);
    };
    var onAction = function onAction(idval, type) {
      setStatus(type);
      setReason("");
      setInfluId(idval);
      if (type == 1) {
        onOpen();
      } else {
        setActionPOP(true);
      }
    };
    var onClear = function onClear() {
      setActionPOP(false);
      setStatus("");
      setReason("");
      setInfluId("");
    };
    var onSubmit = function onSubmit() {
      if (status == '') {
        _reactNativeSimpleToast.default.show(t("Please select Status"), _reactNativeSimpleToast.default.LONG);
      } else if (status == '2' && reason == "") {
        _reactNativeSimpleToast.default.show(t("Please enter Reason"), _reactNativeSimpleToast.default.LONG);
      } else {
        setActionPOP(false);
        onOpen();
      }
    };
    var submitAction = function submitAction() {
      onClose();
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[16]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("influncer_id", influId);
          formdata.append("approveType", status);
          formdata.append("reason", reason);
          fetch(`${_Config.BASE_URL}/approve-influncer`, {
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
            //console.log("Approval Action:", responseJson);
            if (responseJson.bstatus == 1) {
              setReason("");
              setInfluId("");
              getAllData(searchDate);
              setSuccessPop(true);
              setCustomerName(responseJson.customerName);
              setCustomerId(responseJson.customerId);
            } else {
              setLoading(false);
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
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
    var onMore = function onMore(val) {
      setMoreValue(val);
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
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: _MainStyle.MainStyle.inputbox,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                fontFamily: _MainStyle.fontRegular,
                size: "sm",
                variant: "unstyled",
                InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "search-outline",
                  size: 18,
                  color: _MainStyle.darkGrey,
                  style: {
                    marginLeft: 10,
                    textAlign: 'center'
                  }
                }),
                placeholder: "Name / Mobile / Member ID",
                onChangeText: function onChangeText(text) {
                  return setSearchTerms(text);
                },
                InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.baseColor,
                      height: 37,
                      marginRight: 4
                    }],
                    onPress: function onPress() {
                      return onSearch();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      fontSize: "xs",
                      children: t("Search")
                    })
                  }), !isReset ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.baseColor,
                      height: 37,
                      marginRight: 4
                    }],
                    onPress: function onPress() {
                      return showDatePicker();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "calendar-outline",
                      size: 18,
                      color: _MainStyle.lightColor
                    })
                  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.baseColor,
                      height: 37,
                      marginRight: 4
                    }],
                    onPress: function onPress() {
                      return onReset();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "refresh-outline",
                      size: 18,
                      color: _MainStyle.lightColor
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeModalDatetimePicker.default, {
              isVisible: isDatePickerVisible,
              mode: "date",
              onConfirm: handleConfirm,
              onCancel: hideDatePicker
            }), approvalList.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              space: 6,
              backgroundColor: _MainStyle.lightColor,
              borderRadius: 8,
              overflow: "hidden",
              height: 300,
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                source: _$$_REQUIRE(_dependencyMap[17]),
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
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                backgroundColor: _MainStyle.baseLightColor,
                borderRadius: 8,
                overflow: "hidden",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  space: 6,
                  padding: 4,
                  borderColor: _MainStyle.lightColor,
                  borderBottomWidth: 4,
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Avatar, {
                    borderColor: _MainStyle.baseSemiColor,
                    resizeMode: "contain",
                    borderWidth: "2",
                    size: "60",
                    source: item.profile_image == "" ? _$$_REQUIRE(_dependencyMap[18]) : {
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
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: [t("Member Id"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.baseColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.emp_id
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      onPress: function onPress() {
                        return _reactNative.Linking.openURL(`tel:${item.ph_number}`);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        alignItems: "center",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                          name: "call",
                          size: 14,
                          color: _MainStyle.warningColor
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontBold,
                          children: [" ", item.ph_number]
                        })]
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  padding: 4,
                  space: 1,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    marginBottom: 1,
                    color: "#111111",
                    fontSize: "sm",
                    fontFamily: _MainStyle.fontBold,
                    children: t("Member Details")
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["Date of Registration", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      children: (0, _moment.default)(item.DateOfRegistration).format('DD-MM-YYYY')
                    })]
                  }), item.aadnarNumber != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["Aadhaar No.", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      children: item.aadnarNumber
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["PAN No.", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      children: item.panNumber
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["Date of Birth", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      children: (0, _moment.default)(item.dob).format('DD-MM-YYYY')
                    })]
                  }), moreValue == item.id && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    space: 1,
                    paddingBottom: 3,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: ["Gender", ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.gender
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: ["Address", ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.line1
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: ["Pincode", ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.post_code
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: ["State", ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.stateName
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: ["District", ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.districtName
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: ["City", ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: item.city
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: ["Registered By", ":"]
                      }), item.selfRegistered == 0 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: [item.UploadedByName, " (", item.UploadedByExternalId, ")"]
                      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: "Self"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                      space: 1,
                      marginTop: 4,
                      paddingY: 3,
                      borderColor: _MainStyle.lightColor,
                      borderTopWidth: 4,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        marginBottom: 1,
                        color: "#111111",
                        fontSize: "sm",
                        fontFamily: _MainStyle.fontBold,
                        children: t("Dealer Details")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        alignItems: "center",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          width: '40%',
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontRegular,
                          children: ["Name", ":"]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          width: '57%',
                          color: _MainStyle.darkColor,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontBold,
                          children: item.dealerName
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        alignItems: "center",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          width: '40%',
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontRegular,
                          children: ["ID", ":"]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          width: '57%',
                          color: _MainStyle.darkColor,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontBold,
                          children: item.dealerId
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        alignItems: "center",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          width: '40%',
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontRegular,
                          children: ["Contact No.", ":"]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          width: '57%',
                          color: _MainStyle.darkColor,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontBold,
                          children: item.dealerPhone
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        alignItems: "center",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          width: '40%',
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontRegular,
                          children: ["District", ":"]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          width: '57%',
                          color: _MainStyle.darkColor,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontBold,
                          children: item.dealerDistrictName
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: {
                      position: 'absolute',
                      bottom: 12,
                      right: 15,
                      borderBottomWidth: 1,
                      borderColor: _MainStyle.baseColor
                    },
                    children: moreValue == item.id ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      onPress: function onPress() {
                        return setMoreValue("");
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        textAlign: "right",
                        color: _MainStyle.baseColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: "Less"
                      })
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      onPress: function onPress() {
                        return onMore(item.id);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        textAlign: "right",
                        color: _MainStyle.baseColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: "More"
                      })
                    })
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  padding: 3,
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: _MainStyle.baseSemiColor,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    style: [_MainStyle.MainStyle.solidbtn, {
                      width: '48%',
                      backgroundColor: _MainStyle.dangerColor,
                      height: 37
                    }],
                    onPress: function onPress() {
                      return onAction(item.id, "2");
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      fontSize: "xs",
                      children: t("Reject")
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    style: [_MainStyle.MainStyle.solidbtn, {
                      width: '48%',
                      backgroundColor: _MainStyle.successColor,
                      height: 37
                    }],
                    onPress: function onPress() {
                      return onAction(item.id, "1");
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      fontSize: "xs",
                      children: t("Approve")
                    })
                  })]
                })]
              }, index);
            }), approvalList.length != 0 && pageNumber != totalPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
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
        })]
      }), actionPOP && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          space: 3,
          style: {
            backgroundColor: _MainStyle.lightColor,
            padding: 30,
            borderRadius: 12,
            width: '85%'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: _MainStyle.darkColor,
            fontFamily: _MainStyle.fontBold,
            fontSize: "lg",
            textAlign: "center",
            marginBottom: 3,
            children: t("Reject Reason")
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            space: 2,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                style: _MainStyle.MainStyle.lable,
                fontSize: "xs",
                children: [t("Reason"), " ", status == "2" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.dangerColor,
                  children: "*"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  fontFamily: _MainStyle.fontRegular,
                  size: "md",
                  variant: "unstyled",
                  multiline: true,
                  style: {
                    height: 100,
                    textAlignVertical: 'top'
                  },
                  placeholder: t("Please Enter Reason"),
                  onChangeText: function onChangeText(text) {
                    return setReason(text);
                  }
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            marginTop: 6,
            style: _MainStyle.MainStyle.solidbtn,
            onPress: function onPress() {
              return onSubmit();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "sm",
              children: t("Submit")
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            variant: "unstyled",
            backgroundColor: _MainStyle.greyColor,
            borderRadius: 8,
            onPress: function onPress() {
              return onClear();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "xs",
              children: t("Close")
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet, {
        isOpen: isOpen,
        onClose: onClose,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Content, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
            style: {
              width: '100%',
              paddingHorizontal: 20
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              justifyContent: "space-between",
              borderColor: _MainStyle.greyColor,
              borderBottomWidth: 1,
              paddingY: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.baseColor,
                fontSize: "lg",
                fontFamily: _MainStyle.fontBold,
                textAlign: "center",
                children: t("Please Confirm to Proceed?")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                onPress: function onPress() {
                  return onClose();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "close-circle-outline",
                  size: 30,
                  color: _MainStyle.baseColor
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              paddingX: 50,
              space: 3,
              justifyContent: "center",
              alignItems: "center",
              paddingY: 5,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "help-circle",
                size: 50,
                color: _MainStyle.baseColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.darkGrey,
                fontSize: "sm",
                fontFamily: _MainStyle.fontRegular,
                textAlign: "center",
                children: status == 1 ? t("Are you sure, you want to approve?") : t("Are you sure, you want to reject?")
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: _MainStyle.MainStyle.solidbtn,
              marginY: 3,
              onPress: function onPress() {
                return submitAction();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontFamily: _MainStyle.fontSemiBold,
                children: t("Confirm")
              })
            })]
          })
        })
      }), successPop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          style: _MainStyle.MainStyle.popbox,
          space: 10,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[19]),
            alt: "check",
            style: {
              width: 100,
              height: 100,
              resizeMode: 'contain',
              position: 'relative',
              marginTop: 30
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[20]),
            alt: "logo",
            style: _MainStyle.MainStyle.logo
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            justifyContent: "center",
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "sm",
              fontFamily: _MainStyle.fontSemiBold,
              textAlign: "center",
              children: status == 1 ? t("Thank you. You have successfully Approved the registration of") : t("Thank you. You have successfully Rejected the registration of")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "sm",
              fontFamily: _MainStyle.fontBold,
              textAlign: "center",
              children: customerName
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "xs",
              fontFamily: _MainStyle.fontBold,
              textAlign: "center",
              children: ["(ID: ", customerId, ")"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
            width: '100%',
            space: 3,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: _MainStyle.MainStyle.solidbtn,
              onPress: function onPress() {
                return setSuccessPop(false);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "sm",
                children: t("Approve/Reject More")
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              variant: "link",
              onPress: function onPress() {
                return navigation.goBack();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.baseColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "sm",
                children: t("Go To Home")
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {
        navigation: navigation,
        component: userType
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
  var _default = exports.default = RegistrationApprovalsScreen;
