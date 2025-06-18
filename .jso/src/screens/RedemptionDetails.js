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
  var _reactNative = _$$_REQUIRE(_dependencyMap[6]);
  var _Config = _$$_REQUIRE(_dependencyMap[7]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[8]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[10]);
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativeGestureHandler = _$$_REQUIRE(_dependencyMap[14]);
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _native = _$$_REQUIRE(_dependencyMap[16]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[17]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var RedemptionDetailsScreen = function RedemptionDetailsScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
      width = _useWindowDimensions.width;
    var _route$params = route.params,
      details = _route$params.details,
      memberId = _route$params.memberId;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState(""),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      pageData = _React$useState4[0],
      setPageData = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      mycardData = _React$useState6[0],
      setMycardData = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      quantities = _React$useState8[0],
      setQuantities = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      forrelode = _React$useState10[0],
      setForRelode = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      alldata = _React$useState12[0],
      setAlldata = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      cartcount = _React$useState14[0],
      setCartCount = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      userType = _React$useState16[0],
      setUserType = _React$useState16[1];
    var _React$useState17 = _react.default.useState(true),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      moreData = _React$useState18[0],
      setMoreData = _React$useState18[1];
    var _React$useState19 = _react.default.useState(1),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      currentPage = _React$useState20[0],
      setCurrentPage = _React$useState20[1];
    var _React$useState21 = _react.default.useState(1),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      totalPage = _React$useState22[0],
      setTotalPage = _React$useState22[1];
    var _React$useState23 = _react.default.useState([]),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      orderList = _React$useState24[0],
      setOrderList = _React$useState24[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        _asyncStorage.default.getItem('language').then(function (val) {
          if (val != null) {
            setLanguage(val);
            i18n.changeLanguage(val).then(function () {
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
          var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
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
        if (val) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("pageNumber", "1");
          formdata.append("influencer_id", memberId);
          console.log("MemberID: ", memberId);
          fetch(`${_Config.BASE_URL}/order/history`, {
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
            console.log("Response JSON  getAllData:", responseJson);
            if (responseJson.bstatus === 1) {
              var orders = Array.isArray(responseJson.order_list) ? responseJson.order_list : [];
              setOrderList(orders);
              setTotalPage(responseJson.total_pages || 1);
              setCurrentPage(responseJson.page);
            } else {
              setOrderList([]);
              setMoreData(false);
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
              if (responseJson.msg_code === "msg_0046") {
                _asyncStorage.default.clear();
                navigation.replace('Intro');
              }
            }
          }).catch(function () {
            setLoading(false);
            _reactNativeSimpleToast.default.show("Sorry! Something went wrong. Maybe network request failed.");
          });
        }
      });
    };
    var loadMore = function loadMore() {
      var nextPage = Number(currentPage) + 1;
      console.log("Next Page:", nextPage);
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("pageNumber", nextPage);
          formdata.append("influencer_id", memberId);
          console.log("MemberID-> ", memberId);
          fetch(`${_Config.BASE_URL}/order/history`, {
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
            console.log("Response JSON loadMore:", responseJson);
            if (responseJson.bstatus === 1) {
              var orders = Array.isArray(responseJson.order_list) ? responseJson.order_list : [];
              if (orders.length > 0) {
                setOrderList(function (prevData) {
                  return [].concat((0, _toConsumableArray2.default)(prevData), (0, _toConsumableArray2.default)(orders));
                }); // Append new data
                setCurrentPage(nextPage); // Update current page correctly
                setTotalPage(responseJson.total_pages);
              } else {
                setMoreData(false);
                _reactNativeSimpleToast.default.show("No more orders.");
                if (responseJson.msg_code === "msg_0046") {
                  _asyncStorage.default.clear();
                  navigation.replace('Intro');
                }
              }
            } else {
              setMoreData(false);
              _reactNativeSimpleToast.default.show("Failed to load more orders.");
            }
          }).catch(function () {
            setLoading(false);
            _reactNativeSimpleToast.default.show("Something went wrong.");
          });
        }
      });
    };
    var cancelOrder = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* (cardid, pruductid) {
        try {
          setLoading(true);
          var encryptedToken = yield _asyncStorage.default.getItem('userToken');
          if (!encryptedToken) {
            console.warn("User token not found!");
            setLoading(false);
            return;
          }
          var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
          var decryptedData = JSON.parse(CryptoJS.AES.decrypt(encryptedToken, _Config.secretKey).toString(CryptoJS.enc.Utf8));
          var formdata = new FormData();
          formdata.append("orderId", cardid);
          formdata.append("itemId", pruductid);
          formdata.append("status", "Cancelled");
          var response = yield fetch(`${_Config.BASE_URL}/order/cancel`, {
            method: 'POST',
            headers: {
              accesstoken: _Config.AccessToken,
              Useraccesstoken: decryptedData.token
            },
            body: formdata
          });
          var responseJson = yield response.json();
          getAllData();
        } catch (error) {
          console.error("Error", error);
        } finally {
          setLoading(false);
        }
      });
      return function cancelOrder(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: "#000000",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("Redemption Details"),
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: 5,
            children: [orderList.length > 0 ? orderList.map(function (item, index) {
              var _item$product_image, _item$product_image$;
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                space: 3,
                borderColor: _MainStyle.lightGrey,
                borderBottomWidth: 1,
                paddingY: 4,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  style: [_MainStyle.MainStyle.productimage, {
                    width: '35%',
                    borderColor: _MainStyle.greyColor,
                    borderWidth: 1,
                    height: 120
                  }],
                  children: (item == null ? undefined : item.BaseUrl) && (item == null ? undefined : (_item$product_image = item.product_image) == null ? undefined : (_item$product_image$ = _item$product_image[2]) == null ? undefined : _item$product_image$.product_image) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                    source: {
                      uri: item.BaseUrl + item.product_image[0].product_image
                    },
                    style: {
                      width: '100%',
                      height: 100
                    } // Corrected width
                    ,
                    resizeMode: "contain"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  style: {
                    width: '55%'
                  },
                  space: 0,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontWeight: "bold",
                    fontSize: "sm",
                    color: _MainStyle.darkColor,
                    children: item.productName
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    fontSize: "xs",
                    color: _MainStyle.darkGrey,
                    children: ["Order ID: ", item.orderId]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    fontSize: "xs",
                    color: _MainStyle.darkGrey,
                    children: ["Order Placed: ", item.orderInDate]
                  }), (item.status == 'Dispatched' || item.status == 'Delivered') && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontSize: "xs",
                      color: _MainStyle.darkGrey,
                      children: ["Courier Name: ", item.courierName]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontSize: "xs",
                      color: _MainStyle.darkGrey,
                      children: ["AWB No: ", item.awbNo]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    style: {
                      flexDirection: "row",
                      justifyContent: "space-between"
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontWeight: "bold",
                      fontSize: "sm",
                      color: _MainStyle.darkColor,
                      children: [item.pricePoint, " ", t("Points"), " ", '\n', item.quantity, " ", t("Qty")]
                    }), item.status === "Open" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      alignItems: "center",
                      space: 1,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontWeight: "bold",
                        fontSize: "xs",
                        color: "#0000FF",
                        children: item.status
                      })
                    }) : item.status === "Cancelled" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      alignItems: "center",
                      space: 1,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontWeight: "bold",
                        fontSize: "xs",
                        color: "#ff0000",
                        children: item.status
                      })
                    }) : item.status === "Delivered" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      alignItems: "center",
                      space: 1,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontWeight: "bold",
                        fontSize: "xs",
                        color: "#00FF00",
                        children: item.status
                      })
                    }) : item.status === "Dispatched" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      alignItems: "center",
                      space: 1,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontWeight: "bold",
                        fontSize: "xs",
                        color: "#008000",
                        children: item.status
                      })
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      alignItems: "center",
                      space: 1,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontWeight: "bold",
                        fontSize: "xs",
                        color: "#ff0000",
                        children: item.status
                      })
                    })]
                  }), item.canCancel == 1 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    style: [_MainStyle.MainStyle.solidbtn, {
                      width: '68%',
                      backgroundColor: _MainStyle.dangerColor,
                      height: 37,
                      alignSelf: "center",
                      marginTop: 3
                    }],
                    onPress: function onPress() {
                      _reactNative.Alert.alert(t("Are you sure?"), t("Do you really want to Cancel this order?"), [{
                        text: t("Cancel"),
                        style: "cancel"
                      }, {
                        text: t("OK"),
                        onPress: function onPress() {
                          return cancelOrder(item.orderId, item.orderItemId);
                        }
                      }], {
                        cancelable: true
                      });
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      fontSize: "xs",
                      children: t("Cancel Order")
                    })
                  }) : ""]
                })]
              }, index);
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              children: t("No orders available")
            }), currentPage < totalPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
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
  var _default = exports.default = RedemptionDetailsScreen;
