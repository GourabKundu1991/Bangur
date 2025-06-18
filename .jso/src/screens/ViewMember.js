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
  var ViewMemberScreen = function ViewMemberScreen(_ref) {
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
      isReset = _React$useState10[0],
      setIsReset = _React$useState10[1];
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
      userType = _React$useState18[0],
      setUserType = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      filterStatus = _React$useState20[0],
      setFilterStatus = _React$useState20[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData(searchDate, filterStatus);
      });
      return unsubscribe;
    }, []);
    var onSetFilter = function onSetFilter(filterVal) {
      setLoading(true);
      setFilterStatus(filterVal);
      getAllData(searchDate, filterVal);
      setPageNumber(1);
    };
    var getAllData = function getAllData(dateValue, filterVal) {
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
          formdata.append("status", filterVal);
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
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("page", num);
          formdata.append("search_value", searchTerms);
          formdata.append("registration_date", searchDate == "" ? "" : (0, _moment.default)(searchDate).format("DD-MM-YYYY"));
          formdata.append("status", filterStatus);
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
      getAllData(searchDate, filterStatus);
      setPageNumber(1);
    };
    var showDatePicker = function showDatePicker() {
      setDatePickerVisibility(true);
    };
    var hideDatePicker = function hideDatePicker() {
      setDatePickerVisibility(false);
    };
    var handleConfirm = function handleConfirm(date) {
      hideDatePicker();
      setLoading(true);
      getAllData(date, filterStatus);
      setIsReset(true);
    };
    var onReset = function onReset() {
      setLoading(true);
      getAllData("", "");
      setIsReset(false);
    };
    var onMore = function onMore(itemValue) {
      console.log(itemValue);
      navigation.navigate("MemberDetails", {
        details: itemValue
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
                        children: t("Details")
                      })
                    })
                  })]
                })
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
  var _default = exports.default = ViewMemberScreen;
