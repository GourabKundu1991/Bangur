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
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _reactNativeModalDatetimePicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[14]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var AllocateLiftingScreen = function AllocateLiftingScreen(_ref) {
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
    var _React$useState5 = _react.default.useState(''),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      purchaseDate = _React$useState6[0],
      setPurchaseDate = _React$useState6[1];
    var _React$useState7 = _react.default.useState(''),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      contratorPhone = _React$useState8[0],
      setContratorPhone = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      contractorDetails = _React$useState0[0],
      setContractorDetails = _React$useState0[1];
    var _React$useState1 = _react.default.useState(false),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState1, 2),
      contratorFound = _React$useState10[0],
      setContratorFound = _React$useState10[1];
    var _React$useState11 = _react.default.useState(''),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      productId = _React$useState12[0],
      setProductId = _React$useState12[1];
    var _React$useState13 = _react.default.useState([]),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      productList = _React$useState14[0],
      setProductList = _React$useState14[1];
    var _React$useState15 = _react.default.useState(''),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      MTD = _React$useState16[0],
      setMTD = _React$useState16[1];
    var _React$useState17 = _react.default.useState(''),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      stock = _React$useState18[0],
      setStock = _React$useState18[1];
    var _React$useState19 = _react.default.useState(''),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      totalBag = _React$useState20[0],
      setTotalBag = _React$useState20[1];
    var _React$useState21 = _react.default.useState(false),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      isDatePickerVisible = _React$useState22[0],
      setDatePickerVisibility = _React$useState22[1];
    var _React$useState23 = _react.default.useState(''),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      userType = _React$useState24[0],
      setUserType = _React$useState24[1];
    var _React$useState25 = _react.default.useState(false),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      successPop = _React$useState26[0],
      setSuccessPop = _React$useState26[1];
    var _React$useState27 = _react.default.useState(''),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      officerName = _React$useState28[0],
      setOfficerName = _React$useState28[1];
    var _React$useState29 = _react.default.useState(''),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      officerPhone = _React$useState30[0],
      setOfficerPhone = _React$useState30[1];
    var _React$useState31 = _react.default.useState(''),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      officerType = _React$useState32[0],
      setOfficerType = _React$useState32[1];
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var _React$useState33 = _react.default.useState(""),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      purchaseMaxData = _React$useState34[0],
      setPurchaseMaxData = _React$useState34[1];
    var _React$useState35 = _react.default.useState(""),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      miniData = _React$useState36[0],
      setMiniData = _React$useState36[1];
    var _useDisclose = (0, _nativeBase.useDisclose)(),
      isOpen = _useDisclose.isOpen,
      onOpen = _useDisclose.onOpen,
      onClose = _useDisclose.onClose;
    var _React$useState37 = _react.default.useState(""),
      _React$useState38 = (0, _slicedToArray2.default)(_React$useState37, 2),
      prod = _React$useState38[0],
      setProd = _React$useState38[1];
    var _React$useState39 = _react.default.useState(""),
      _React$useState40 = (0, _slicedToArray2.default)(_React$useState39, 2),
      minPurchase = _React$useState40[0],
      setMinPurchase = _React$useState40[1];
    var _React$useState41 = _react.default.useState(""),
      _React$useState42 = (0, _slicedToArray2.default)(_React$useState41, 2),
      maxPurchase = _React$useState42[0],
      setMaxPurchase = _React$useState42[1];
    var _React$useState43 = _react.default.useState(''),
      _React$useState44 = (0, _slicedToArray2.default)(_React$useState43, 2),
      dealerPhone = _React$useState44[0],
      setDealerPhone = _React$useState44[1];
    var _React$useState45 = _react.default.useState([]),
      _React$useState46 = (0, _slicedToArray2.default)(_React$useState45, 2),
      dealerList = _React$useState46[0],
      setDealerList = _React$useState46[1];
    var _React$useState47 = _react.default.useState(''),
      _React$useState48 = (0, _slicedToArray2.default)(_React$useState47, 2),
      dealer = _React$useState48[0],
      setDealer = _React$useState48[1];
    var _React$useState49 = _react.default.useState(false),
      _React$useState50 = (0, _slicedToArray2.default)(_React$useState49, 2),
      dealerFound = _React$useState50[0],
      setDealerFound = _React$useState50[1];
    var _React$useState51 = _react.default.useState(""),
      _React$useState52 = (0, _slicedToArray2.default)(_React$useState51, 2),
      preApproved = _React$useState52[0],
      setPreApproved = _React$useState52[1];
    var regexNum = /^[6-9]\d{9}$/;
    var regexNumeric = /^[0-9]+$/;
    var _React$useState53 = _react.default.useState(false),
      _React$useState54 = (0, _slicedToArray2.default)(_React$useState53, 2),
      dissable = _React$useState54[0],
      setDissable = _React$useState54[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var CryptoJS = _$$_REQUIRE(_dependencyMap[15]);
            var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
            setUserType(JSON.parse(decryptData).user_type);
            if (JSON.parse(decryptData).user_type == "Dealer") {
              getProduct(JSON.parse(decryptData).contactId);
              setDealer(JSON.parse(decryptData).contactId);
            } else {
              getProduct(dealer);
            }
            setPurchaseMaxData(new Date(year, month, day - JSON.parse(decryptData).transaction_allowed_days_from));
            setMiniData(new Date(year, month, day - JSON.parse(decryptData).transaction_allowed_days_upto));
          } else {
            setLoading(false);
          }
        });
      });
      return unsubscribe;
    }, []);
    var onSelectDealer = function onSelectDealer(valdata) {
      setLoading(true);
      getProduct(valdata);
      setDealer(valdata);
    };
    var getProduct = function getProduct(dealerID) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[15]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("dealer", dealerID);
          fetch(`${_Config.BASE_URL}/get-products`, {
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
            //console.log("Product:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setProductList(responseJson.product_list);
              setMinPurchase(responseJson.minimumPurchaseQuantity);
              setMaxPurchase(responseJson.maximumPurchaseQuantity);
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
        }
      });
    };
    var searchContractor = function searchContractor() {
      if (contratorPhone.trim() == "") {
        _reactNativeSimpleToast.default.show(t("Please enter Contartor's Mobile Number"), _reactNativeSimpleToast.default.LONG);
      } else if (contratorPhone.length < 10) {
        _reactNativeSimpleToast.default.show(t("Please enter 10 digit for Phone Number"), _reactNativeSimpleToast.default.LONG);
      } else if (contratorPhone != "" && !regexNum.test(contratorPhone)) {
        _reactNativeSimpleToast.default.show(t("Contractor Phone Number accept Only Number / Mobile No. not Valid"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var CryptoJS = _$$_REQUIRE(_dependencyMap[15]);
            var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
            var formdata = new FormData();
            formdata.append("mobileNumber", contratorPhone);
            formdata.append("lang_code", currentLanguage);
            formdata.append("os_type", `${_Config.OS_TYPE}`);
            formdata.append("app_ver", `${_Config.APP_VERSION}`);
            fetch(`${_Config.BASE_URL}/get-influencers`, {
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
              //console.log("Get Contractor:", responseJson);
              if (responseJson.bstatus == 1) {
                setContractorDetails(responseJson.details);
                setContratorFound(true);
              } else {
                _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
                setContractorDetails("");
                setContratorFound(false);
                setContratorPhone("");
              }
            }).catch(function (error) {
              setLoading(false);
              //console.log("Error:", error);
              _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
            });
          }
        });
      }
    };
    var editContrator = function editContrator() {
      setContratorFound(false);
      setContractorDetails("");
      setContratorPhone("");
      setProd("");
      setProductId("");
    };
    var searchDealer = function searchDealer() {
      if (dealerPhone.trim() == "") {
        _reactNativeSimpleToast.default.show(t("Please enter Dealer Phone Number"), _reactNativeSimpleToast.default.LONG);
      } else if (dealerPhone != "" && !regexNum.test(dealerPhone)) {
        _reactNativeSimpleToast.default.show(t("Dealer Phone Number accept Only Number / Mobile No. not Valid"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        setDealer("");
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var CryptoJS = _$$_REQUIRE(_dependencyMap[15]);
            var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
            var formdata = new FormData();
            formdata.append("mobileNumber", dealerPhone);
            formdata.append("lang_code", currentLanguage);
            fetch(`${_Config.BASE_URL}/registration/get-dealer`, {
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
              //console.log("Get Dealer:", responseJson);
              if (responseJson.bstatus == 1) {
                setDealerList(responseJson.details);
                setDealerFound(true);
                if (responseJson.details.length == 1) {
                  setDealer(responseJson.details[0].id);
                  setLoading(true);
                  getProduct(responseJson.details[0].id);
                }
              } else {
                _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
                setDealerList([]);
                setDealerFound(false);
                setDealerPhone("");
              }
            }).catch(function (error) {
              setLoading(false);
              //console.log("Error:", error);
              _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
            });
          }
        });
      }
    };
    var editDealer = function editDealer() {
      setDealerFound(false);
      setDealer("");
      setDealerList([]);
      setDealerPhone("");
    };
    var showDatePicker = function showDatePicker() {
      setDatePickerVisibility(true);
    };
    var hideDatePicker = function hideDatePicker() {
      setDatePickerVisibility(false);
    };
    var handleConfirm = function handleConfirm(date) {
      hideDatePicker();
      setPurchaseDate(date);
    };
    var onSelectProduct = function onSelectProduct(pro) {
      setProd(pro);
      setProductId(pro.prod_id);
      onClose();
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[15]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("productId", pro.prod_id);
          formdata.append("InfluencerId", contractorDetails.customerId);
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          fetch(`${_Config.BASE_URL}/get-influencer-mtd`, {
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
            //console.log("Get MTD:", responseJson);
            if (responseJson.bstatus == 1) {
              setMTD(responseJson.mtd);
              setStock(responseJson.stockInHand);
            } else {
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
              setMTD("");
              setStock("");
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        }
      });
    };
    var onSubmit = function onSubmit() {
      if (userType != "Dealer" && !dealerFound) {
        _reactNativeSimpleToast.default.show(t("Please search and select Dealer"), _reactNativeSimpleToast.default.LONG);
      } else if (userType != "Dealer" && dealerFound && dealer == "") {
        _reactNativeSimpleToast.default.show(t("Please select Dealer"), _reactNativeSimpleToast.default.LONG);
      } else if (contratorPhone.trim() == "") {
        _reactNativeSimpleToast.default.show(t("Please enter Contractor Mobile Number & Search"), _reactNativeSimpleToast.default.LONG);
      } else if (purchaseDate == "") {
        _reactNativeSimpleToast.default.show(t("Please select Date"), _reactNativeSimpleToast.default.LONG);
      } else if (productId == "") {
        _reactNativeSimpleToast.default.show(t("Please select Product"), _reactNativeSimpleToast.default.LONG);
      } else if (totalBag == "") {
        _reactNativeSimpleToast.default.show(t("Please enter Total Bags"), _reactNativeSimpleToast.default.LONG);
      } else if (totalBag != "" && !regexNumeric.test(totalBag)) {
        _reactNativeSimpleToast.default.show(t("Total Bag accept Only Number"), _reactNativeSimpleToast.default.LONG);
      } else if (totalBag < Number(minPurchase)) {
        _reactNativeSimpleToast.default.show(t("Please enter Total Bags Minimum Quantity of ") + minPurchase, _reactNativeSimpleToast.default.LONG);
      } else if (totalBag > Number(maxPurchase)) {
        _reactNativeSimpleToast.default.show(t("Please enter Total Bags Maximum Quantity of ") + maxPurchase, _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var CryptoJS = _$$_REQUIRE(_dependencyMap[15]);
            var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
            fetch(`${_Config.BASE_URL}/get-sale-token`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data',
                'accesstoken': `${_Config.AccessToken}`,
                'Useraccesstoken': JSON.parse(decryptData).token
              },
              body: ""
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              //console.log("get-sale-token:", responseJson);
              if (responseJson.bstatus == 1) {
                addPurchase(responseJson.sale_token);
              } else {
                _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
                setLoading(false);
                setDissable(false);
              }
            }).catch(function (error) {
              setLoading(false);
              //console.log("Error:", error);
              _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
            });
          }
        });
      }
    };
    var addPurchase = function addPurchase(saleToken) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[15]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("InfluencerId", contractorDetails.customerId);
          formdata.append("dealerId", dealer);
          formdata.append("saleDate", purchaseDate != '' ? (0, _moment.default)(purchaseDate).format('YYYY-MM-DD') : "");
          formdata.append("productId", productId);
          formdata.append("quantity", totalBag);
          formdata.append("saleToken", saleToken);
          fetch(`${_Config.BASE_URL}/allocate-lifting`, {
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
            //console.log("Allocate Lifting:", responseJson);
            if (responseJson.bstatus == 1) {
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
              setSuccessPop(true);
              setOfficerName(responseJson.officerName);
              setOfficerPhone(responseJson.officerNumber);
              setOfficerType(responseJson.officerType);
              setPreApproved(responseJson.autoapproved);
              setDissable(false);
            } else {
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
              setDissable(false);
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
            space: 4,
            padding: 8,
            children: [userType != "Dealer" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("Dealer Phone Number"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    value: dealerPhone,
                    readOnly: dealerFound,
                    backgroundColor: dealerFound ? _MainStyle.lightGrey : _MainStyle.lightColor,
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    onChangeText: function onChangeText(text) {
                      return setDealerPhone(text);
                    },
                    keyboardType: "number-pad",
                    maxLength: 10,
                    InputRightElement: dealerFound ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                      size: "xs",
                      style: [_MainStyle.MainStyle.solidbtn, {
                        backgroundColor: _MainStyle.darkColor,
                        height: 37,
                        marginRight: 4
                      }],
                      onPress: function onPress() {
                        return editDealer();
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "lock",
                        size: 18,
                        color: _MainStyle.lightColor
                      })
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                      size: "xs",
                      style: [_MainStyle.MainStyle.solidbtn, {
                        backgroundColor: _MainStyle.warningColor,
                        height: 37,
                        marginRight: 4
                      }],
                      onPress: function onPress() {
                        return searchDealer();
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "search",
                        size: 18,
                        color: _MainStyle.lightColor
                      })
                    })
                  })
                })]
              }), dealerList.length != 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("Dealer"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    placeholder: t("Please Select Dealer"),
                    selectedValue: dealer,
                    onValueChange: function onValueChange(value) {
                      return onSelectDealer(value);
                    },
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
                    children: dealerList.map(function (item, index) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                        label: item.first_name + " " + item.middle_name + " " + item.last_name + " (" + item.id_extern01 + ")",
                        value: item.id
                      }, index);
                    })
                  })
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                style: _MainStyle.MainStyle.lable,
                fontSize: "xs",
                children: [t("Contractor's Mobile Number"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.dangerColor,
                  children: "*"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  value: contratorPhone,
                  readOnly: contratorFound,
                  backgroundColor: contratorFound ? _MainStyle.lightGrey : _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontRegular,
                  size: "md",
                  variant: "unstyled",
                  onChangeText: function onChangeText(text) {
                    return setContratorPhone(text);
                  },
                  keyboardType: "number-pad",
                  maxLength: 10,
                  InputRightElement: contratorFound ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.darkColor,
                      height: 37,
                      marginRight: 4
                    }],
                    onPress: function onPress() {
                      return editContrator();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "close",
                      size: 18,
                      color: _MainStyle.lightColor
                    })
                  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.warningColor,
                      height: 37,
                      marginRight: 4
                    }],
                    onPress: function onPress() {
                      return searchContractor();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "search",
                      size: 18,
                      color: _MainStyle.lightColor
                    })
                  })
                })
              })]
            }), contratorFound && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              space: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: t("Contrator's Name & ID")
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    backgroundColor: _MainStyle.lightGrey,
                    readOnly: true,
                    value: contractorDetails.customerName + " (" + contractorDetails.customerCode + ") ",
                    fontFamily: _MainStyle.fontBold,
                    size: "md",
                    variant: "unstyled"
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("Date"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                    style: styles.inputbox,
                    onPress: function onPress() {
                      return showDatePicker();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      style: {
                        paddingHorizontal: 10,
                        height: 43
                      },
                      alignItems: "center",
                      paddingY: '1.5',
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: purchaseDate != '' ? '#111111' : '#999999',
                        fontSize: "sm",
                        children: [" ", purchaseDate != '' ? (0, _moment.default)(purchaseDate).format('DD-MM-YYYY') : ""]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "calendar-outline",
                        size: 18,
                        color: _MainStyle.darkColor
                      })]
                    })
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeModalDatetimePicker.default, {
                date: purchaseDate || undefined,
                maximumDate: purchaseMaxData,
                minimumDate: miniData,
                isVisible: isDatePickerVisible,
                mode: "date",
                onConfirm: handleConfirm,
                onCancel: hideDatePicker
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("Product"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                    onPress: onOpen,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      readOnly: true,
                      variant: "unstyled",
                      value: prod.product_name,
                      InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "chevron-down-outline",
                        style: {
                          marginRight: 10
                        },
                        size: 20
                      }),
                      placeholder: t("Select")
                    })
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet, {
                isOpen: isOpen,
                onClose: onClose,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Content, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
                    w: "100%",
                    children: productList.map(function (item, index) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
                        onPress: function onPress() {
                          return onSelectProduct(item);
                        },
                        w: "100%",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                          width: "96%",
                          marginX: "2%",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginY: 1,
                          backgroundColor: _MainStyle.lightColor,
                          borderRadius: 10,
                          padding: 2,
                          overflow: "hidden",
                          borderColor: item.product_name == prod.product_name ? _MainStyle.successColor : _MainStyle.lightColor,
                          borderWidth: 1,
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                            space: 3,
                            alignItems: "center",
                            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                              source: item.product_image == "" ? _$$_REQUIRE(_dependencyMap[16]) : {
                                uri: item.product_image
                              },
                              style: {
                                width: 60,
                                height: 60,
                                resizeMode: 'cover',
                                borderRadius: 6,
                                borderWidth: 2,
                                overflow: "hidden"
                              },
                              borderColor: item.product_name == prod.product_name ? _MainStyle.successColor : _MainStyle.baseSemiColor
                            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                              fontSize: "xs",
                              textAlign: "center",
                              fontFamily: _MainStyle.fontSemiBold,
                              children: item.product_name
                            })]
                          }), item.product_name == prod.product_name && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                            name: "checkmark-circle",
                            size: 22,
                            color: _MainStyle.successColor
                          })]
                        })
                      }, index);
                    })
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: t("Stock Available for Allocation")
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    backgroundColor: _MainStyle.lightGrey,
                    readOnly: true,
                    value: stock + " Bag(s)",
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled"
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("Quantity (Bags)"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    value: totalBag,
                    onChangeText: function onChangeText(text) {
                      return setTotalBag(text);
                    },
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    keyboardType: "number-pad",
                    maxLength: 3
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                disabled: dissable,
                marginTop: 5,
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
              })]
            })]
          })
        })]
      }), successPop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          style: _MainStyle.MainStyle.popbox,
          space: 10,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[17]),
            style: {
              width: 100,
              height: 100,
              resizeMode: 'contain',
              position: 'relative',
              marginTop: 30
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[18]),
            style: _MainStyle.MainStyle.logo
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            justifyContent: "center",
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "sm",
              fontFamily: _MainStyle.fontSemiBold,
              textAlign: "center",
              children: [t("Allocate Lifting has been Successfully done with"), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                fontSize: "sm",
                fontFamily: _MainStyle.fontBold,
                children: [officerType, " ", officerName]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 2,
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.darkGrey,
                fontSize: "sm",
                fontFamily: _MainStyle.fontSemiBold,
                children: t("Contact No:")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                onPress: function onPress() {
                  return _reactNative.Linking.openURL(`tel:${officerPhone}`);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "call",
                    size: 16,
                    color: _MainStyle.baseColor
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    color: _MainStyle.baseColor,
                    fontSize: "sm",
                    fontFamily: _MainStyle.fontBold,
                    children: [" ", officerPhone]
                  })]
                })
              })]
            }), userType == "Dealer" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "sm",
              fontFamily: _MainStyle.fontSemiBold,
              textAlign: "center",
              children: preApproved == 1 ? t("& Your transaction has been auto approved") : t("& is subject to approval")
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
            width: '100%',
            space: 3,
            marginBottom: 8,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: _MainStyle.MainStyle.solidbtn,
              onPress: function onPress() {
                return navigation.goBack();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "sm",
                children: t("Done")
              })
            })
          })]
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
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = AllocateLiftingScreen;
