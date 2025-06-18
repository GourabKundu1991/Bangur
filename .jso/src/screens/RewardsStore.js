  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[3]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[6]);
  var _Config = _$$_REQUIRE(_dependencyMap[7]);
  var _RangeSlider = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[9]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[12]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var RewardsStoreScreen = function RewardsStoreScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
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
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      dataFound = _React$useState6[0],
      setDataFound = _React$useState6[1];
    var _React$useState7 = _react.default.useState(1),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      pageNumber = _React$useState8[0],
      setPageNumber = _React$useState8[1];
    var _React$useState9 = _react.default.useState(true),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      isLoadMore = _React$useState10[0],
      setIsLoadMore = _React$useState10[1];
    var _React$useState11 = _react.default.useState([]),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      allProducts = _React$useState12[0],
      setAllProducts = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      inCart = _React$useState14[0],
      setInCart = _React$useState14[1];
    var _React$useState15 = _react.default.useState([]),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      allCategory = _React$useState16[0],
      setAllCategory = _React$useState16[1];
    var _React$useState17 = _react.default.useState(0),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      cateId = _React$useState18[0],
      setCateId = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      sortBy = _React$useState20[0],
      setSortBy = _React$useState20[1];
    var _useDisclose = (0, _nativeBase.useDisclose)(),
      isOpen = _useDisclose.isOpen,
      onOpen = _useDisclose.onOpen,
      onClose = _useDisclose.onClose;
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      pointRange = _React$useState22[0],
      setPointRange = _React$useState22[1];
    var _React$useState23 = _react.default.useState(""),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      fromValue = _React$useState24[0],
      setFromValue = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      toValue = _React$useState26[0],
      setToValue = _React$useState26[1];
    var _React$useState27 = _react.default.useState(""),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      userType = _React$useState28[0],
      setUserType = _React$useState28[1];
    var _React$useState29 = _react.default.useState(""),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      cartcount = _React$useState30[0],
      setCartCount = _React$useState30[1];
    var _React$useState31 = _react.default.useState(""),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      imageBase = _React$useState32[0],
      setImageBase = _React$useState32[1];
    var _React$useState33 = _react.default.useState(""),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      availablePoint = _React$useState34[0],
      setAvailablePoint = _React$useState34[1];
    var _React$useState35 = _react.default.useState(""),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      filtervalue = _React$useState36[0],
      setFilterValue = _React$useState36[1];
    var _React$useState37 = _react.default.useState(false),
      _React$useState38 = (0, _slicedToArray2.default)(_React$useState37, 2),
      filteration = _React$useState38[0],
      setFiltertion = _React$useState38[1];
    var _React$useState39 = _react.default.useState(0),
      _React$useState40 = (0, _slicedToArray2.default)(_React$useState39, 2),
      canRedeem = _React$useState40[0],
      setCanRedeem = _React$useState40[1];
    var _React$useState41 = _react.default.useState(0),
      _React$useState42 = (0, _slicedToArray2.default)(_React$useState41, 2),
      canSubmitKYC = _React$useState42[0],
      setCanSubmitKYC = _React$useState42[1];
    var _React$useState43 = _react.default.useState(""),
      _React$useState44 = (0, _slicedToArray2.default)(_React$useState43, 2),
      canSubmitKYCText = _React$useState44[0],
      setCanSubmitKYCText = _React$useState44[1];
    var _React$useState45 = _react.default.useState(0),
      _React$useState46 = (0, _slicedToArray2.default)(_React$useState45, 2),
      loadMoreShow = _React$useState46[0],
      setLoadMoreShow = _React$useState46[1];
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
        _asyncStorage.default.getItem('filterData').then(function (valFilt) {
          if (valFilt != null) {
            var value = JSON.parse(valFilt);
            setCateId(value.selectedCat);
            setSortBy(value.sortBy);
            setFromValue(value.fromValue);
            setToValue(value.toValue);
            getAllData(value.selectedCat, value.sortBy, value.fromValue, value.toValue);
            setFiltertion(true);
          } else {
            getAllData(cateId, sortBy, fromValue, toValue);
          }
        });
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData(cate_Id, sort_By, from_Value, to_Value) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[14]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("pageNumber", 1);
          formdata.append("categoryId", cate_Id);
          formdata.append("min", from_Value);
          formdata.append("max", to_Value);
          formdata.append("sort", sort_By);
          formdata.append("sort_by", "price");
          fetch(`${_Config.BASE_URL}/catalog/products`, {
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
            console.log("Rewards:", responseJson);
            setCanRedeem(responseJson.can_redeem);
            setCanSubmitKYC(responseJson.can_submit_kyc);
            setCanSubmitKYCText(responseJson.can_submit_kyc_text);
            if (responseJson.status == 'success') {
              countCart();
              setAllProducts(responseJson.products);
              setAllCategory(responseJson.categories);
              setPointRange(responseJson.minMax);
              setImageBase(responseJson.BaseUrl);
              setAvailablePoint(responseJson.available_point);
              setLoadMoreShow(responseJson.more);
              setDataFound("found");
              if (fromValue == "") {
                setFromValue(responseJson.minMax.min);
              }
              if (toValue == "") {
                setToValue(responseJson.minMax.max);
              }
            } else {
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              setAllProducts([]);
              setDataFound("notfound");
              setTimeout(function () {
                setLoading(false);
                if (responseJson.msg_code == "msg_1000") {
                  _asyncStorage.default.clear();
                  navigation.navigate('Intro');
                }
              }, 1000);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Rewards Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Intro');
        }
      });
    };
    var countCart = function countCart() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[14]);
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
            setLoading(false);
            console.log("cartCount:", responseJson);
            setCartCount(responseJson.cart_count);
          }).catch(function (error) {
            setLoading(false);
            console.log("Error:", error);
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Intro');
        }
      });
    };
    var openFilter = function openFilter(type) {
      setFilterValue(type);
      onOpen();
    };
    var onApply = function onApply() {
      setLoading(true);
      onClose();
      getAllData(cateId, sortBy, fromValue, toValue);
      var filterData = {
        sortBy: sortBy,
        fromValue: fromValue,
        toValue: toValue,
        selectedCat: cateId
      };
      _asyncStorage.default.setItem('filterData', JSON.stringify(filterData));
      setFiltertion(true);
    };
    var onClear = function onClear() {
      setLoading(true);
      onClose();
      setPageNumber(1);
      setIsLoadMore(true);
      if (filtervalue == "Category") {
        setCateId(0);
        getAllData(0, sortBy, fromValue, toValue);
      } else if (filtervalue == "Sort") {
        setSortBy("");
        getAllData(cateId, "", fromValue, toValue);
      } else if (filtervalue == "Points") {
        setFromValue(pointRange.min);
        setToValue(pointRange.max);
        getAllData(cateId, sortBy, pointRange.min, pointRange.max);
      }
    };
    var AddToCard = function AddToCard(prod_idd, price_in_pointss, prod_namee) {
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[14]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("prod_id", prod_idd);
          formdata.append("price_in_points", price_in_pointss);
          formdata.append("prod_name", prod_namee);
          formdata.append("quantity", 1);
          fetch(`${_Config.BASE_URL}/cart/add`, {
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
            _nativeBase.Toast.show({
              description: t(responseJson.message)
            });
            if (responseJson.bstatus == 1) {
              countCart();
            } else {
              setLoading(false);
            }
          }).catch(function (error) {
            setLoading(false);
            console.log("Error:", error);
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Intro');
        }
      });
    };
    var renderProduct = function renderProduct(_ref2) {
      var item = _ref2.item,
        index = _ref2.index;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        style: styles.productbox,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return AddToCard(item.productId, item.pricePoints, item.productName);
          },
          style: {
            position: 'absolute',
            bottom: 5,
            right: 5,
            zIndex: 99
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "add-circle-outline",
            size: 28,
            color: "#808080"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return navigation.navigate("ProductDetails", {
              detaildata: item.ProductDesc,
              productname: item.productName,
              productID: item.productId,
              pricePoints: item.pricePoints,
              pricePoint: item.pricePoints,
              availablepoint: availablePoint,
              productimage: imageBase + item.ProductImage,
              productParams: item.ProductParams
            });
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
            style: styles.productimage,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: {
                uri: imageBase + item.ProductImage
              },
              style: {
                width: 100,
                height: 90
              },
              resizeMode: "contain"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            fontSize: "sm",
            mb: "2",
            children: item.productName.substring(0, 30)
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
            fontWeight: "bold",
            fontSize: "md",
            color: _MainStyle.darkColor,
            children: [item.pricePoints, " ", t("points")]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            style: {
              textDecorationLine: 'underline'
            },
            fontSize: "xs",
            color: _MainStyle.baseColor,
            children: t("View Details")
          })]
        })]
      }, index);
    };
    var loadMore = function loadMore() {
      var num = pageNumber + 1;
      console.log(num);
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[14]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("pageNumber", num);
          formdata.append("categoryId", cateId);
          formdata.append("min", fromValue);
          formdata.append("max", toValue);
          formdata.append("sort", sortBy);
          formdata.append("sort_by", "price");
          fetch(`${_Config.BASE_URL}/catalog/products`, {
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
            console.log("jegjhgwergewjr", responseJson);
            setLoadMoreShow(responseJson.more);
            if (responseJson.status == 'success') {
              setLoading(false);
              var newArrya = allProducts.concat(responseJson.products);
              setAllProducts(newArrya);
              setPageNumber(num);
            } else {
              setLoading(false);
              setIsLoadMore(false);
              setPageNumber(1);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Rewards Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Intro');
        }
      });
    };
    var onClearAllFilter = function onClearAllFilter() {
      setLoading(true);
      setCateId(0);
      setSortBy("");
      setFromValue(pointRange.min);
      setToValue(pointRange.max);
      getAllData(0, "", pointRange.min, pointRange.max);
      setFiltertion(false);
      _asyncStorage.default.removeItem('filterData');
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: "#000000",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          navigation: navigation,
          component: route.params.pageTitle
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: [filteration && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
            flexWrap: "wrap",
            paddingX: 5,
            marginTop: 5,
            space: 2,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              style: {
                backgroundColor: _MainStyle.greyColor
              },
              space: 2,
              paddingX: 2,
              paddingY: 1,
              borderRadius: 5,
              overflow: "hidden",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontSize: "xs",
                color: _MainStyle.darkColor,
                fontWeight: "bold",
                children: t("Clear All Filter")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                onPress: function onPress() {
                  return onClearAllFilter();
                },
                name: "close-outline",
                size: 18,
                color: _MainStyle.darkColor
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
            padding: "5",
            children: [dataFound == "notfound" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 5,
              style: [styles.productbox, {
                height: 350,
                width: '100%',
                marginHorizontal: 0,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 30
              }],
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "hourglass-outline",
                size: 80,
                color: "#999999"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontSize: "lg",
                fontWeight: "bold",
                textAlign: "center",
                color: "#111111",
                children: t("Result Not Found")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontSize: "sm",
                fontWeight: "medium",
                textAlign: "center",
                color: "#666666",
                children: t("Whoops... This Information is not available for a moment")
              })]
            }), dataFound == "found" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              flexWrap: "wrap",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.FlatList, {
                scrollEnabled: false,
                data: allProducts,
                renderItem: renderProduct,
                numColumns: 2
              })
            }), loadMoreShow !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
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
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          justifyContent: "space-evenly",
          backgroundColor: _MainStyle.baseColor,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
            onPress: function onPress() {
              return openFilter("Category");
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 2,
              alignItems: "center",
              padding: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "grid-outline",
                size: 18,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontWeight: "bold",
                fontSize: "xs",
                color: _MainStyle.lightColor,
                children: t("Category Type")
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
            onPress: function onPress() {
              return openFilter("Sort");
            },
            style: {
              borderColor: '#ffffff',
              borderLeftWidth: 1,
              borderRightWidth: 1
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 2,
              alignItems: "center",
              padding: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "filter-outline",
                size: 18,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                space: 1,
                alignItems: "baseline",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontWeight: "bold",
                  fontSize: "xs",
                  color: _MainStyle.lightColor,
                  children: t("Sort By")
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "10",
                  color: _MainStyle.lightColor,
                  children: sortBy
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
            onPress: function onPress() {
              openFilter("Points");
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 2,
              alignItems: "center",
              padding: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "funnel-outline",
                size: 18,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontWeight: "bold",
                fontSize: "xs",
                color: _MainStyle.lightColor,
                children: t("Filter By Points")
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          justifyContent: "space-between",
          padding: 4,
          backgroundColor: "#ffffff",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            fontWeight: "bold",
            fontSize: "md",
            color: _MainStyle.darkColor,
            children: t("Available Points")
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            fontWeight: "bold",
            fontSize: "md",
            color: _MainStyle.darkColor,
            children: availablePoint ? availablePoint : ""
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {
          navigation: navigation,
          component: userType,
          cartcount: cartcount
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet, {
          isOpen: isOpen,
          onClose: onClose,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Actionsheet.Content, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
              style: {
                width: '100%',
                paddingHorizontal: 15
              },
              children: [filtervalue == "Category" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 1,
                marginBottom: 2,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t('Category'), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    height: 43,
                    selectedValue: cateId,
                    onValueChange: function onValueChange(value) {
                      return setCateId(value);
                    },
                    style: {
                      paddingLeft: 15
                    },
                    placeholder: t('Select'),
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
                    children: allCategory.map(function (item, index) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                        label: item.categoryName,
                        value: item.categoryId
                      }, index);
                    })
                  })
                })]
              }), filtervalue == "Sort" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 1,
                marginBottom: 2,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t('Sort By'), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    height: 43,
                    selectedValue: sortBy,
                    onValueChange: function onValueChange(value) {
                      return setSortBy(value);
                    },
                    style: {
                      paddingLeft: 15
                    },
                    placeholder: t('Select'),
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
                      label: t("Low to High"),
                      value: "l-h"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: t("High to Low"),
                      value: "h-l"
                    })]
                  })
                })]
              }), filtervalue == "Points" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 1,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  textAlign: "center",
                  mt: "5",
                  fontWeight: "bold",
                  children: [t("Points Range"), " (", fromValue, " - ", toValue, ")"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                  justifyContent: "space-between",
                  alignItems: "center",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RangeSlider.default, {
                    min: +pointRange.min,
                    max: +pointRange.max,
                    step: 100,
                    fromValueOnChange: function fromValueOnChange(value) {
                      return setFromValue(value);
                    },
                    toValueOnChange: function toValueOnChange(value) {
                      return setToValue(value);
                    },
                    initialFromValue: +fromValue,
                    initialToValue: +toValue,
                    fromKnobColor: '#111111',
                    toKnobColor: '#111111',
                    knobSize: 25,
                    barHeight: 8,
                    showValueLabels: false,
                    valueLabelsBackgroundColor: "#444444",
                    inRangeBarColor: _MainStyle.darkColor
                  })
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              width: "100%",
              paddingY: "3",
              paddingX: "6",
              mt: 5,
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                variant: "outline",
                width: "48%",
                borderRadius: 8,
                overflow: "hidden",
                onPress: function onPress() {
                  return onClear();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.baseColor,
                  fontSize: "md",
                  fontWeight: "normal",
                  children: t("Clear Filter")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                backgroundColor: _MainStyle.baseColor,
                width: "48%",
                borderRadius: 8,
                overflow: "hidden",
                onPress: function onPress() {
                  return onApply();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "#ffffff",
                  fontSize: "md",
                  fontWeight: "normal",
                  children: t("Apply")
                })
              })]
            })]
          })
        })]
      }), canRedeem === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          backgroundColor: "#ffffff",
          style: {
            width: '70%',
            borderRadius: 10,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            w: "100%",
            paddingY: "10",
            paddingX: "5",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[15]),
              style: _MainStyle.MainStyle.logo
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              mt: 5,
              mb: 3,
              fontSize: "xl",
              fontWeight: "bold",
              color: _MainStyle.warningColor,
              children: [canSubmitKYC == 0 ? t('Pending') : t('Warning'), "!"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: canSubmitKYCText
            }), canSubmitKYC == 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: _MainStyle.warningColor,
                width: 150,
                borderRadius: 8,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return navigation.navigate("UpdateKYC", {
                  pageTitle: t("Update KYC")
                });
              },
              marginY: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t("Update")
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 150,
                borderRadius: 8,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return navigation.goBack();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t('Close')
              })
            })]
          })
        })
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
  var styles = _reactNative.StyleSheet.create({
    bgimage: {
      flex: 1,
      justifyContent: 'center'
    },
    solidBtn: {
      width: '48%',
      borderColor: '#111111',
      borderWidth: 2,
      backgroundColor: '#111111',
      borderRadius: 10
    },
    outlineBtn: {
      width: '48%',
      borderColor: '#111111',
      borderWidth: 2,
      backgroundColor: 'none',
      borderRadius: 10
    },
    inputbox: {
      backgroundColor: 'rgba(0,0,0,0.06)',
      borderRadius: 12,
      width: '100%',
      overflow: 'hidden',
      marginVertical: 7
    },
    noti: {
      color: '#ffffff',
      width: 18,
      height: 18,
      borderRadius: 20,
      position: 'absolute',
      top: -5,
      right: -3,
      fontSize: 11,
      lineHeight: 18,
      paddingTop: 1,
      textAlign: 'center',
      overflow: 'hidden'
    },
    productbox: {
      position: 'relative',
      borderRadius: 15,
      width: '44%',
      marginHorizontal: '3%',
      marginBottom: '6%',
      backgroundColor: '#f6f6f6',
      padding: 15,
      borderColor: '#ffffff',
      borderWidth: 2,
      elevation: 10,
      shadowColor: '#666666',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowOpacity: 0.4,
      shadowRadius: 10,
      overflow: 'hidden'
    },
    productimage: {
      borderColor: '#dddddd',
      backgroundColor: '#ffffff',
      marginBottom: 10,
      borderWidth: 1,
      borderRadius: 10,
      width: '100%',
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
    spincontainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
  });
  var _default = exports.default = RewardsStoreScreen;
