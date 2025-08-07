  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[3]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[6]);
  var _Config = _$$_REQUIRE(_dependencyMap[7]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[8]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[10]);
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativeModalDatetimePicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[16]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var MyPointsScreen = function MyPointsScreen(_ref) {
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
      pointList = _React$useState4[0],
      setPointList = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      searchTerms = _React$useState6[0],
      setSearchTerms = _React$useState6[1];
    var _React$useState7 = _react.default.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      isReset = _React$useState8[0],
      setIsReset = _React$useState8[1];
    var _React$useState9 = _react.default.useState(false),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      isDatePickerVisible = _React$useState0[0],
      setDatePickerVisibility = _React$useState0[1];
    var _React$useState1 = _react.default.useState(1),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState1, 2),
      pageNumber = _React$useState10[0],
      setPageNumber = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      totalPage = _React$useState12[0],
      setTotalPage = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      filterStatus = _React$useState14[0],
      setFilterStatus = _React$useState14[1];
    var _React$useState15 = _react.default.useState(false),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      dateFilter = _React$useState16[0],
      setDateFilter = _React$useState16[1];
    var _React$useState17 = _react.default.useState(""),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      fromDate = _React$useState18[0],
      setFromDate = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      toDate = _React$useState20[0],
      setToDate = _React$useState20[1];
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      dateType = _React$useState22[0],
      setDateType = _React$useState22[1];
    var _React$useState23 = _react.default.useState(""),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      userType = _React$useState24[0],
      setUserType = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      cartcount = _React$useState26[0],
      setCartCount = _React$useState26[1];
    var _React$useState27 = _react.default.useState(""),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      moreValue = _React$useState28[0],
      setMoreValue = _React$useState28[1];
    var _React$useState29 = _react.default.useState(""),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      availablePoints = _React$useState30[0],
      setAvailablePoints = _React$useState30[1];
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var miniYear = new Date(year - 100, month, day);
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData(fromDate, toDate);
      });
      return unsubscribe;
    }, []);
    (0, _react.useEffect)(function () {
      cartCount(); // Will execute on every render
    });
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
    (0, _react.useEffect)(function () {
      cartCount();
      var fetchUserType = /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)(function* () {
          try {
            var encryptedToken = yield _asyncStorage.default.getItem('userToken');
            if (encryptedToken) {
              var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
              var decryptedData = CryptoJS.AES.decrypt(encryptedToken, _Config.secretKey).toString(CryptoJS.enc.Utf8);
              var parsedData = JSON.parse(decryptedData);
              setUserType(parsedData.user_type);
            }
          } catch (error) {
            console.error("Error decrypting or parsing token:", error);
          }
        });
        return function fetchUserType() {
          return _ref2.apply(this, arguments);
        };
      }();
      fetchUserType();
    }, []);
    var getAllData = function getAllData(startDate, endDate) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          console.log("latest token============", decryptData);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("programId", JSON.parse(decryptData).program_id);
          formdata.append("page", 1);
          formdata.append("from_date", startDate == "" ? "" : (0, _moment.default)(startDate).format("DD-MM-YYYY"));
          formdata.append("to_date", endDate == "" ? "" : (0, _moment.default)(endDate).format("DD-MM-YYYY"));
          fetch(`${_Config.BASE_URL}/point-statements`, {
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
            console.log("Points:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setPointList(responseJson.trnasc_list);
              setTotalPage(responseJson.total_pages);
              setAvailablePoints(responseJson.current_balance);
            } else {
              setLoading(false);
              //Toast.show(responseJson.message, Toast.LONG);
              setPointList([]);
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
        _reactNativeSimpleToast.default.show(t("Select To Date"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        getAllData(fromDate, toDate);
        setIsReset(true);
        setPageNumber(1);
      }
    };
    var onReset = function onReset() {
      setLoading(true);
      getAllData("", "");
      setIsReset(false);
      setFromDate("");
      setToDate("");
      setPageNumber(1);
    };
    var onMore = function onMore(val) {
      setMoreValue(val);
    };
    var loadMore = function loadMore() {
      var num = pageNumber + 1;
      console.log("num====>>>>", num);
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("programId", JSON.parse(decryptData).program_id);
          formdata.append("page", num);
          formdata.append("from_date", fromDate == "" ? "" : (0, _moment.default)(fromDate).format("DD-MM-YYYY"));
          formdata.append("to_date", toDate == "" ? "" : (0, _moment.default)(toDate).format("DD-MM-YYYY"));
          fetch(`${_Config.BASE_URL}/point-statements`, {
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
            console.log("Points==============:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setTotalPage(responseJson.total_pages);
              setPageNumber(num);
              var newArrya = pointList.concat(responseJson.trnasc_list);
              setPointList(newArrya);
            } else {
              setLoading(false);
              setPageNumber(1);
              setPointList([]);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Intro');
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
            space: 3,
            padding: 6,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: t("Filter By Date")
                }), isReset && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  size: "xs",
                  variant: "link",
                  onPress: function onPress() {
                    return onReset();
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.warningColor,
                    fontFamily: _MainStyle.fontBold,
                    fontSize: "sm",
                    children: t("Clear")
                  })
                })]
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
                      children: [" ", fromDate != '' ? (0, _moment.default)(fromDate).format('DD-MM-YYYY') : t("From Date")]
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
                      children: [" ", toDate != '' ? (0, _moment.default)(toDate).format('DD-MM-YYYY') : t("To Date")]
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
                    children: t("Search")
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
            }), pointList.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              space: 6,
              backgroundColor: _MainStyle.lightColor,
              borderRadius: 8,
              overflow: "hidden",
              height: 300,
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                source: _$$_REQUIRE(_dependencyMap[18]),
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
            }), pointList.length != 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 5,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                backgroundColor: _MainStyle.baseLightColor,
                padding: 3,
                borderRadius: 8,
                overflow: "hidden",
                justifyContent: "space-between",
                alignItems: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "md",
                  fontFamily: _MainStyle.fontSemiBold,
                  textTransform: "capitalize",
                  children: [t("Available Points"), ":"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "xl",
                  fontFamily: _MainStyle.fontBold,
                  children: availablePoints
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                backgroundColor: _MainStyle.baseLightColor,
                paddingX: 3,
                paddingY: 1,
                borderRadius: 8,
                overflow: "hidden",
                children: pointList.map(function (item, index) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                    borderBottomWidth: pointList.length - 1 ? 1.5 : 0,
                    borderColor: _MainStyle.greyColor,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      paddingY: 2,
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: _MainStyle.baseLightColor,
                      position: "relative",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontSemiBold,
                          children: [(0, _moment.default)(item.created_at_date).format("DD MMMM YYYY"), ", ", item.created_at_time]
                        }), item.transaction_type == "Credit" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          width: 200,
                          color: _MainStyle.darkColor,
                          fontSize: "sm",
                          fontFamily: _MainStyle.fontBold,
                          children: item.transaction_desc
                        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: _MainStyle.darkColor,
                          fontSize: "sm",
                          fontFamily: _MainStyle.fontBold,
                          children: t("Redeemed")
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        space: 1,
                        alignItems: "center",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          color: _MainStyle.darkColor,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontBold,
                          children: [item.transaction_type == "Credit" ? "+" : "-", item.reward_points]
                        }), item.transaction_type == "Credit" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                          name: "arrow-up-outline",
                          size: 16,
                          color: _MainStyle.successColor
                        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                          name: "arrow-down-outline",
                          size: 16,
                          color: _MainStyle.dangerColor
                        }), moreValue == item.id ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                          onPress: function onPress() {
                            return setMoreValue("");
                          },
                          style: [_MainStyle.MainStyle.solidbtn, {
                            backgroundColor: _MainStyle.baseColor,
                            height: 24,
                            width: 25,
                            paddingHorizontal: 7,
                            borderRadius: 3
                          }],
                          variant: "unstyled",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            color: _MainStyle.lightColor,
                            fontFamily: _MainStyle.fontSemiBold,
                            fontSize: "lg",
                            lineHeight: 22,
                            children: "-"
                          })
                        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                          onPress: function onPress() {
                            return onMore(item.id);
                          },
                          style: [_MainStyle.MainStyle.solidbtn, {
                            backgroundColor: _MainStyle.baseColor,
                            height: 24,
                            width: 25,
                            paddingHorizontal: 7,
                            borderRadius: 3
                          }],
                          variant: "unstyled",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            color: _MainStyle.lightColor,
                            fontFamily: _MainStyle.fontSemiBold,
                            fontSize: "lg",
                            lineHeight: 22,
                            children: "+"
                          })
                        })]
                      })]
                    }), moreValue == item.id && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                      space: 0.5,
                      backgroundColor: _MainStyle.lightColor,
                      padding: 3,
                      borderColor: _MainStyle.greyColor,
                      borderTopWidth: 1.5,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkColor,
                        marginBottom: 2,
                        fontSize: "sm",
                        fontFamily: _MainStyle.fontSemiBold,
                        children: item.product_name
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontRegular,
                          children: item.subtype == "Redemption" ? t("Order ID") : t("Transaction ID")
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontSemiBold,
                          textAlign: "right",
                          children: item.id
                        })]
                      }), item.subtype != "Redemption" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                          alignItems: "center",
                          justifyContent: "space-between",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            color: _MainStyle.darkGrey,
                            fontSize: "xs",
                            fontFamily: _MainStyle.fontRegular,
                            children: t("Dealer")
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            color: _MainStyle.darkGrey,
                            fontSize: "xs",
                            fontFamily: _MainStyle.fontSemiBold,
                            textAlign: "right",
                            children: item.dealer
                          })]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                          alignItems: "center",
                          justifyContent: "space-between",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            color: _MainStyle.darkGrey,
                            fontSize: "xs",
                            fontFamily: _MainStyle.fontRegular,
                            children: t("Purchase Date")
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            color: _MainStyle.darkGrey,
                            fontSize: "xs",
                            fontFamily: _MainStyle.fontSemiBold,
                            textAlign: "right",
                            children: (0, _moment.default)(item.purchase_date).format("DD-MM-YYYY")
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
                            color: _MainStyle.darkGrey,
                            fontSize: "xs",
                            fontFamily: _MainStyle.fontSemiBold,
                            textAlign: "right",
                            children: item.bags
                          })]
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontRegular,
                          children: item.subtype == "Redemption" ? t("Order Date") : t("Transaction Date")
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontSemiBold,
                          textAlign: "right",
                          children: (0, _moment.default)(item.created_at_date).format("DD-MM-YYYY")
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontRegular,
                          children: item.subtype == "Redemption" ? t("Order Time") : t("Transaction Time")
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: _MainStyle.darkGrey,
                          fontSize: "xs",
                          fontFamily: _MainStyle.fontSemiBold,
                          textAlign: "right",
                          children: item.created_at_time
                        })]
                      })]
                    })]
                  }, index);
                })
              })]
            }), pointList.length > 0 && pageNumber != totalPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {
        navigation: navigation,
        component: userType,
        cartcount: cartcount
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
  var _default = exports.default = MyPointsScreen;
