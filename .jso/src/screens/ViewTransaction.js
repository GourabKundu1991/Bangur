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
  var ViewTransactionScreen = function ViewTransactionScreen(_ref) {
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
    var _React$useState7 = _react.default.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      isReset = _React$useState8[0],
      setIsReset = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
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
      filterStatus = _React$useState18[0],
      setFilterStatus = _React$useState18[1];
    var _React$useState19 = _react.default.useState(false),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      dateFilter = _React$useState20[0],
      setDateFilter = _React$useState20[1];
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      fromDate = _React$useState22[0],
      setFromDate = _React$useState22[1];
    var _React$useState23 = _react.default.useState(""),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      toDate = _React$useState24[0],
      setToDate = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      dateType = _React$useState26[0],
      setDateType = _React$useState26[1];
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var miniYear = new Date(year - 100, month, day);
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData(filterStatus, fromDate, toDate);
      });
      return unsubscribe;
    }, []);
    var onSetFilter = function onSetFilter(filterVal) {
      setLoading(true);
      setFilterStatus(filterVal);
      getAllData(filterVal, fromDate, toDate);
      setPageNumber(1);
    };
    var getAllData = function getAllData(filterValue, startDate, endDate) {
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
          formdata.append("sale_date", "");
          formdata.append("created_from", startDate == "" ? "" : (0, _moment.default)(startDate).format("DD-MM-YYYY"));
          formdata.append("created_to", endDate == "" ? "" : (0, _moment.default)(endDate).format("DD-MM-YYYY"));
          formdata.append("status", filterValue);
          fetch(`${_Config.BASE_URL}/purchase-approval-list`, {
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
              setApprovalList(responseJson.sale_data);
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
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("page", num);
          formdata.append("search_value", searchTerms);
          formdata.append("sale_date", "");
          formdata.append("created_from", fromDate == "" ? "" : (0, _moment.default)(fromDate).format("DD-MM-YYYY"));
          formdata.append("created_to", toDate == "" ? "" : (0, _moment.default)(toDate).format("DD-MM-YYYY"));
          formdata.append("status", filterStatus);
          fetch(`${_Config.BASE_URL}/purchase-approval-list`, {
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
              var newArrya = approvalList.concat(responseJson.sale_data);
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
      getAllData(filterStatus, fromDate, toDate);
      setPageNumber(1);
    };
    var openDateFilter = function openDateFilter() {
      setDateFilter(!dateFilter);
    };
    var showDatePicker = function showDatePicker(type) {
      setDateType(type);
      setDatePickerVisibility(true);
    };
    var hideDatePicker = function hideDatePicker() {
      setDatePickerVisibility(false);
    };
    var handleConfirm = function handleConfirm(date) {
      hideDatePicker();
      if (dateType == "from") {
        setFromDate(date);
      } else if (dateType == "to") {
        setToDate(date);
      }
    };
    var onDateSearch = function onDateSearch() {
      if (fromDate == "") {
        _reactNativeSimpleToast.default.show(t("Select From Date"), _reactNativeSimpleToast.default.LONG);
      } else if (toDate == "") {
        _reactNativeSimpleToast.default.show(t("Select From Date"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        getAllData(filterStatus, fromDate, toDate);
        setIsReset(true);
        setDateFilter(false);
      }
    };
    var onReset = function onReset() {
      setLoading(true);
      setFromDate("");
      setToDate("");
      getAllData("", "", "");
      setIsReset(false);
      setFilterStatus("");
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
                placeholder: "Name / Member ID",
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
                      return openDateFilter();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "options-outline",
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
            }), dateFilter && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: _MainStyle.MainStyle.lable,
                fontSize: "xs",
                children: t("Filter By Date")
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                style: _MainStyle.MainStyle.inputbox,
                padding: 1,
                justifyContent: "space-between",
                alignItems: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                  width: '38%',
                  borderRadius: 6,
                  backgroundColor: _MainStyle.baseLightColor,
                  onPress: function onPress() {
                    return showDatePicker("from");
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    height: 37,
                    style: {
                      paddingHorizontal: 6
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      color: fromDate != '' ? '#111111' : '#999999',
                      fontSize: "xs",
                      children: [" ", fromDate != '' ? (0, _moment.default)(fromDate).format('DD-MM-YYYY') : "From Date"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "calendar-outline",
                      size: 18,
                      color: _MainStyle.darkColor
                    })]
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                  width: '38%',
                  borderRadius: 6,
                  backgroundColor: _MainStyle.baseLightColor,
                  onPress: function onPress() {
                    return showDatePicker("to");
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    height: 37,
                    style: {
                      paddingHorizontal: 6
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      color: toDate != '' ? '#111111' : '#999999',
                      fontSize: "xs",
                      children: [" ", toDate != '' ? (0, _moment.default)(toDate).format('DD-MM-YYYY') : "To Date"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "calendar-outline",
                      size: 18,
                      color: _MainStyle.darkColor
                    })]
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  size: "xs",
                  style: [_MainStyle.MainStyle.solidbtn, {
                    backgroundColor: _MainStyle.baseColor,
                    height: 37
                  }],
                  onPress: function onPress() {
                    return onDateSearch();
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "xs",
                    children: t("Submit")
                  })
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeModalDatetimePicker.default, {
              isVisible: isDatePickerVisible,
              mode: "date",
              onConfirm: handleConfirm,
              onCancel: hideDatePicker,
              maximumDate: new Date(),
              minimumDate: miniYear
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              alignItems: "center",
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                variant: "link",
                style: [_MainStyle.MainStyle.tabbtn, {
                  backgroundColor: filterStatus == "" ? _MainStyle.baseColor : _MainStyle.lightGrey
                }],
                _text: {
                  color: filterStatus == "" ? "#ffffff" : _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: 10
                },
                onPress: function onPress() {
                  return onSetFilter("");
                },
                children: t("All")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                variant: "link",
                style: [_MainStyle.MainStyle.tabbtn, {
                  backgroundColor: filterStatus == "1" ? _MainStyle.baseColor : _MainStyle.lightGrey
                }],
                _text: {
                  color: filterStatus == "1" ? "#ffffff" : _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: 10
                },
                onPress: function onPress() {
                  return onSetFilter("1");
                },
                children: t("Approved")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                variant: "link",
                style: [_MainStyle.MainStyle.tabbtn, {
                  backgroundColor: filterStatus == "0" ? _MainStyle.baseColor : _MainStyle.lightGrey
                }],
                _text: {
                  color: filterStatus == "0" ? "#ffffff" : _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: 10
                },
                onPress: function onPress() {
                  return onSetFilter("0");
                },
                children: t("Pending")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                variant: "link",
                style: [_MainStyle.MainStyle.tabbtn, {
                  backgroundColor: filterStatus == "2" ? _MainStyle.baseColor : _MainStyle.lightGrey
                }],
                _text: {
                  color: filterStatus == "2" ? "#ffffff" : _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: 10
                },
                onPress: function onPress() {
                  return onSetFilter("2");
                },
                children: t("Rejected")
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
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  position: "relative",
                  zIndex: 9,
                  alignSelf: "flex-end",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                    height: "14",
                    width: "10%",
                    overflow: "hidden",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                      backgroundColor: item.approveStatus == "Pending" ? "#FBC711" : item.approveStatus == "Rejected" ? "#F21515" : "#447A50",
                      height: "90",
                      width: "35",
                      position: "absolute",
                      right: -36,
                      top: 0,
                      style: {
                        transform: [{
                          rotate: '-45deg'
                        }]
                      }
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                    space: 2,
                    width: 90,
                    height: 30,
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: item.approveStatus == "Pending" ? "#FBC711" : item.approveStatus == "Rejected" ? "#F21515" : "#447A50",
                    borderBottomRadius: 6,
                    borderTopRightRadius: 6,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      children: item.approveStatus
                    })
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                  style: {
                    marginTop: -17,
                    paddingTop: 10
                  },
                  borderColor: item.approveStatus == "Pending" ? "#FBC711" : item.approveStatus == "Rejected" ? "#F21515" : "#447A50",
                  borderLeftWidth: 5,
                  backgroundColor: item.approveStatus == "Pending" ? "#FEFFC7" : item.approveStatus == "Rejected" ? "#FFF2F3" : "#F2FFF5",
                  borderRadius: 8,
                  overflow: "hidden",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    padding: 4,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      space: 6,
                      marginBottom: 3,
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                        width: '65%',
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: _MainStyle.darkColor,
                          fontSize: "md",
                          fontFamily: _MainStyle.fontBold,
                          textTransform: "capitalize",
                          children: item.Contact_Name
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: _MainStyle.darkColor,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontBold,
                          children: "(" + item.ID + ")"
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        style: {
                          backgroundColor: _MainStyle.lightColor,
                          padding: 3,
                          borderColor: _MainStyle.greyColor,
                          borderWidth: 1,
                          borderRadius: 5,
                          overflow: 'hidden'
                        },
                        children: [" ", item.category]
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Product")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: 200,
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.Product
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Bags")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.total_bags
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Points Earned")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.points_earned
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Approved MTD Quantity")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.MTD
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Purchase Date")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '58%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: (0, _moment.default)(item.Sale_Date).format("DD-MM-YYYY")
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Uploaded Date")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '58%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: (0, _moment.default)(item.Sale_Registered_On).format("DD-MM-YYYY")
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Transaction ID")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '58%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.sale_id
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 3,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Site Name")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.site_name
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Site Mobile No.")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.site_mobile
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 3,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Dealer Name")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.dealerName
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Dealer ID")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.dealerId
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Dealer Phone")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.dealerPhone
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Dealer's District")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: item.dealerDistrictName
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 3,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Allocated By")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: [item.saleCreatedByName, " (", item.saleCreatedByExternalId, ")"]
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        width: '40%',
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontRegular,
                        children: t("Pending / Approved By")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        width: '57%',
                        color: _MainStyle.darkColor,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontSemiBold,
                        textAlign: "right",
                        children: [item.actionTakenOfficerName, " (", item.actionTakenOfficerExternalId, ")"]
                      })]
                    })]
                  })
                }, index)]
              });
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
  var _default = exports.default = ViewTransactionScreen;
