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
  var TransactionApprovalsScreen = function TransactionApprovalsScreen(_ref) {
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
      transId = _React$useState16[0],
      setTransId = _React$useState16[1];
    var _React$useState17 = _react.default.useState(false),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      isReset = _React$useState18[0],
      setIsReset = _React$useState18[1];
    var _React$useState19 = _react.default.useState(false),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      isDatePickerVisible = _React$useState20[0],
      setDatePickerVisibility = _React$useState20[1];
    var _React$useState21 = _react.default.useState(false),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      successPop = _React$useState22[0],
      setSuccessPop = _React$useState22[1];
    var _React$useState23 = _react.default.useState(1),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      pageNumber = _React$useState24[0],
      setPageNumber = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      totalPage = _React$useState26[0],
      setTotalPage = _React$useState26[1];
    var _React$useState27 = _react.default.useState(""),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      userType = _React$useState28[0],
      setUserType = _React$useState28[1];
    var _React$useState29 = _react.default.useState([]),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      reasonList = _React$useState30[0],
      setReasonList = _React$useState30[1];
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
          formdata.append("sale_date", dateValue == "" ? "" : (0, _moment.default)(dateValue).format("DD-MM-yyyy"));
          formdata.append("created_from", "");
          formdata.append("created_to", "");
          formdata.append("status", 0);
          formdata.append("data_for", "approval");
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
            // console.log("Approval:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setApprovalList(responseJson.sale_data);
              setTotalPage(responseJson.total_pages);
            } else {
              setLoading(false);
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
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
          formdata.append("sale_date", searchDate == "" ? "" : (0, _moment.default)(searchDate).format("DD-MM-yyyy"));
          formdata.append("created_from", "");
          formdata.append("created_to", "");
          formdata.append("status", 0);
          formdata.append("data_for", "approval");
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
            //console.log("Approval:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setTotalPage(responseJson.sale_data);
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
      getAllData(searchDate);
      setPageNumber(1);
    };
    var onAction = function onAction(idval, type) {
      setActionPOP(true);
      setStatus(type);
      setReason("");
      if (type == 1) {
        _asyncStorage.default.getItem('purchaseAcceptReasons').then(function (val) {
          if (val != null) {
            setReasonList(JSON.parse(val));
          }
        });
      } else {
        _asyncStorage.default.getItem('purchaseRejectReasons').then(function (val) {
          if (val != null) {
            setReasonList(JSON.parse(val));
          }
        });
      }
      setTransId(idval);
    };
    var onClear = function onClear() {
      setActionPOP(false);
      setStatus("");
      setReason("");
      setTransId("");
    };
    var onSubmit = function onSubmit() {
      if (status == '') {
        _reactNativeSimpleToast.default.show(t("Please select Status"), _reactNativeSimpleToast.default.LONG);
      } else if (reason == "") {
        _reactNativeSimpleToast.default.show(t("Please select Reason"), _reactNativeSimpleToast.default.LONG);
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
          formdata.append("sale_id", transId);
          formdata.append("status", status);
          formdata.append("reason_id", reason);
          fetch(`${_Config.BASE_URL}/approve-reject-purchase`, {
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
              setTransId("");
              setLoading(false);
              setCustomerName(responseJson.customerName);
              setCustomerId(responseJson.customerId);
              setSuccessPop(true);
              setPageNumber(1);
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
    var againMore = function againMore() {
      setLoading(true);
      getAllData(searchDate);
      setSuccessPop(false);
    };
    var openDialer = function openDialer(number) {
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
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
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
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                        width: '60%',
                        marginTop: 1,
                        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                          space: 1,
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                            name: "call-outline",
                            size: 14,
                            color: _MainStyle.darkGrey,
                            onPress: function onPress() {
                              return openDialer(item.ph_number);
                            }
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            color: _MainStyle.darkColor,
                            fontSize: "xs",
                            fontFamily: _MainStyle.fontBold,
                            children: item.ph_number
                          })]
                        })
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontSemiBold,
                      style: {
                        backgroundColor: _MainStyle.lightColor,
                        padding: 3,
                        borderColor: _MainStyle.baseSemiColor,
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
                      children: "Product"
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
                      children: "Bags"
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
                      children: "Points Earned"
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
                      children: "Approved MTD Quantity"
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
                      children: "Purchase Date"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
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
                      children: "Uploaded Date"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
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
                      children: "Transaction ID"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
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
                      children: "Dealer Name"
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
                      children: "Dealer ID"
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
                      children: "Dealer Phone"
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
                      children: "Dealer's District"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontSemiBold,
                      textAlign: "right",
                      children: item.dealerDistrictName
                    })]
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
                      return onAction(item.sale_id, "2");
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
                      return onAction(item.sale_id, "1");
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet, {
        isOpen: actionPOP,
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
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.baseColor,
                fontSize: "lg",
                fontFamily: _MainStyle.fontBold,
                textAlign: "center",
                children: [t("Action for"), " ", status == 1 ? "Approve" : "Reject", "!"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                onPress: function onPress() {
                  return onClear();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "close-circle-outline",
                  size: 30,
                  color: _MainStyle.baseColor
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
              paddingX: 5,
              justifyContent: "center",
              alignItems: "center",
              paddingY: 5,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                style: {
                  width: '100%'
                },
                space: 4,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    style: _MainStyle.MainStyle.lable,
                    fontSize: "xs",
                    children: [t("Reason"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.dangerColor,
                      children: "*"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                      variant: "unstyled",
                      size: "md",
                      height: 43,
                      selectedValue: reason,
                      onValueChange: function onValueChange(value) {
                        return setReason(value);
                      },
                      style: {
                        paddingLeft: 15
                      },
                      fontFamily: _MainStyle.fontRegular,
                      placeholder: t('Please Select Reason'),
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
                      children: reasonList.map(function (item, index) {
                        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                          label: item.reasons,
                          value: item.id
                        }, index);
                      })
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: _MainStyle.MainStyle.solidbtn,
              marginY: 3,
              onPress: function onPress() {
                return onSubmit();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontFamily: _MainStyle.fontSemiBold,
                children: t("SUBMIT")
              })
            })]
          })
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
                children: t("Please Confirm to Proceeed?")
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
            source: _$$_REQUIRE(_dependencyMap[18]),
            alt: "check",
            style: {
              width: 100,
              height: 100,
              resizeMode: 'contain',
              position: 'relative',
              marginTop: 30
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[19]),
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
              children: status == 1 ? t("Thank you. You has been successfully Approved this transaction of") : t("Thank you. You has been successfully Rejected this transaction of")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "sm",
              fontFamily: _MainStyle.fontSemiBold,
              textAlign: "center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                fontSize: "sm",
                fontFamily: _MainStyle.fontBold,
                children: [customerName, " (ID: ", customerId, ")"]
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
            width: '100%',
            space: 3,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: _MainStyle.MainStyle.solidbtn,
              onPress: function onPress() {
                return againMore();
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
  var _default = exports.default = TransactionApprovalsScreen;
