  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[3]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[5]);
  var _Config = _$$_REQUIRE(_dependencyMap[6]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[7]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[9]);
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeCheckBox = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _cryptoJs = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _native = _$$_REQUIRE(_dependencyMap[16]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[17]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var AddressScreen = function AddressScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var myroutdata = route.navigate;
    var _ref2 = route.params || {},
      _ref2$cardidd = _ref2.cardidd,
      cardidd = _ref2$cardidd === undefined ? 'No card ID provided' : _ref2$cardidd;
    var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
      width = _useWindowDimensions.width;
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
    var _React$useState5 = _react.default.useState(false),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      popAddress = _React$useState6[0],
      setPopAddress = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      isChecked = _React$useState8[0],
      setIsChecked = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      address1 = _React$useState10[0],
      setAddress1 = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      address2 = _React$useState12[0],
      setAddress2 = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      address3 = _React$useState14[0],
      setAddress3 = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      city = _React$useState16[0],
      setCity = _React$useState16[1];
    var _React$useState17 = _react.default.useState(""),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      pincode = _React$useState18[0],
      setPinCode = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      addressdata = _React$useState20[0],
      setAddressData = _React$useState20[1];
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      profiledata = _React$useState22[0],
      setProfileData = _React$useState22[1];
    var _React$useState23 = _react.default.useState(''),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      altPincode = _React$useState24[0],
      setAltPincode = _React$useState24[1];
    var _React$useState25 = _react.default.useState('Eng'),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      currentLanguage = _React$useState26[0],
      setLanguage = _React$useState26[1];
    var _React$useState27 = _react.default.useState(''),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      alldata = _React$useState28[0],
      setAlldata = _React$useState28[1];
    var _React$useState29 = _react.default.useState(''),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      cityid = _React$useState30[0],
      setCityID = _React$useState30[1];
    var _React$useState31 = _react.default.useState(''),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      stateId = _React$useState32[0],
      setStateId = _React$useState32[1];
    var _React$useState33 = _react.default.useState(''),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      cityname = _React$useState34[0],
      setCityname = _React$useState34[1];
    var _React$useState35 = _react.default.useState(""),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      cartcount = _React$useState36[0],
      setCartCount = _React$useState36[1];
    var _React$useState37 = _react.default.useState(""),
      _React$useState38 = (0, _slicedToArray2.default)(_React$useState37, 2),
      userType = _React$useState38[0],
      setUserType = _React$useState38[1];
    var _React$useState39 = _react.default.useState(""),
      _React$useState40 = (0, _slicedToArray2.default)(_React$useState39, 2),
      peraddress = _React$useState40[0],
      setPerAddress = _React$useState40[1];
    var _React$useState41 = _react.default.useState(""),
      _React$useState42 = (0, _slicedToArray2.default)(_React$useState41, 2),
      workingaddress = _React$useState42[0],
      setWorkingAddress = _React$useState42[1];
    var _React$useState43 = _react.default.useState([]),
      _React$useState44 = (0, _slicedToArray2.default)(_React$useState43, 2),
      altaddress = _React$useState44[0],
      setAltAddress = _React$useState44[1];
    var _React$useState45 = _react.default.useState(""),
      _React$useState46 = (0, _slicedToArray2.default)(_React$useState45, 2),
      addressid = _React$useState46[0],
      setAddressid = _React$useState46[1];
    var _React$useState47 = _react.default.useState(""),
      _React$useState48 = (0, _slicedToArray2.default)(_React$useState47, 2),
      alladdressdata = _React$useState48[0],
      setAlladdressdata = _React$useState48[1];
    var _React$useState49 = _react.default.useState(route.params.cardid),
      _React$useState50 = (0, _slicedToArray2.default)(_React$useState49, 2),
      cartid = _React$useState50[0],
      setCartId = _React$useState50[1];
    var _React$useState51 = _react.default.useState(route.params.name),
      _React$useState52 = (0, _slicedToArray2.default)(_React$useState51, 2),
      address = _React$useState52[0],
      setAddress = _React$useState52[1];
    var _React$useState53 = _react.default.useState(""),
      _React$useState54 = (0, _slicedToArray2.default)(_React$useState53, 2),
      tableName = _React$useState54[0],
      setTableName = _React$useState54[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData();
      });
      return unsubscribe;
    }, []);
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
            console.log("cartCount:", responseJson);
            setCartCount(responseJson.cart_count);
            setLoading(false);
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
    var getAllData = function getAllData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[14]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          setUserType(JSON.parse(decryptData).user_type);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          fetch(`${_Config.BASE_URL}/order/all-address`, {
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
            console.log("Address:", JSON.stringify(responseJson));
            if (responseJson.bstatus == 1) {
              countCart();
              setAlladdressdata(responseJson);
              setPerAddress(responseJson.address_list.permanent_address.details[0]);
              setWorkingAddress(responseJson.address_list.working_address.details[0]);
              setAltAddress(responseJson.address_list.alternate_addresses.details);
            } else {
              _reactNativeSimpleToast.default.show({
                description: responseJson.message
              });
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
            _reactNativeSimpleToast.default.show({
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
    var handleCheckboxClick = function handleCheckboxClick(addressid, table) {
      setAddressid(addressid);
      setTableName(table);
    };
    var OnShipingAddress = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2.default)(function* (table) {
        // try {
        var val = yield _asyncStorage.default.getItem('userToken');
        var CryptoJS = _$$_REQUIRE(_dependencyMap[14]);
        var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
        var formdata = new FormData();
        formdata.append("add_address_line1", address1);
        formdata.append("add_address_line2", address2);
        formdata.append("add_address_line3", address3);
        formdata.append("add_state", stateId);
        formdata.append("add_city", cityid);
        formdata.append("add_pincode", pincode);
        var response = yield fetch(`${_Config.BASE_URL}/order/add-ship-address`, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            'accesstoken': _Config.AccessToken,
            'Useraccesstoken': JSON.parse(decryptData).token
          },
          body: formdata
        });
        var responseJson = yield response.json();
        console.log("order/add-ship-address", responseJson);
        if (responseJson.bstatus == 1) {
          yield setAddressid(responseJson.address_id);
          navigation.navigate("RedeemsonOTP", {
            orderid: '',
            cartId: cartid,
            addressId: responseJson.address_id,
            address: address,
            tablename: table
          });
        }
      });
      return function OnShipingAddress(_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    var onSubmit = function onSubmit() {
      var characterRegex = /^[a-zA-Z0-9\s]+$/; // Allows numbers, letters, and spaces
      var digitRegex = /^\d+$/; // Allows only digits

      if (address1 === "") {
        _reactNative.Alert.alert(t("Please enter Address line 1"));
      } else if (!characterRegex.test(address1)) {
        _reactNative.Alert.alert(t("Address line 1 should contain only letters, numbers, and spaces"));
      } else if (address2 !== "" && !characterRegex.test(address2)) {
        _reactNative.Alert.alert(t("Address line 2 should contain only letters, numbers, and spaces or be empty"));
      } else if (address3 !== "" && !characterRegex.test(address3)) {
        _reactNative.Alert.alert(t("Address line 3 should contain only letters, numbers, and spaces or be empty"));
      } else if (pincode === "") {
        _reactNative.Alert.alert(t("Please enter pincode"));
      } else if (!digitRegex.test(pincode)) {
        _reactNative.Alert.alert(t("Pincode should contain only digits"));
      } else {
        setLoading(false);
        search();
      }
    };
    var onSubmitallData = function onSubmitallData(table) {
      if (address1 === "") {
        _reactNative.Alert.alert("Validation Error", "Please enter  Address line 1");
      } else if (pincode === "") {
        _reactNative.Alert.alert("Validation Error", "Please enter pincode");
      } else {
        setLoading(false);
        OnShipingAddress(table);
      }
    };

    // Pincode  search
    var search = function search(pinType) {
      var formdata = new FormData();
      formdata.append("pinCode", pincode);
      formdata.append("lang_code", currentLanguage);
      fetch(`${_Config.BASE_URL}/registration/get-location-by-pin-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          'accesstoken': `${_Config.AccessToken}`
        },
        body: formdata
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        setLoading(false);
        console.log("456 formdata=", formdata);
        console.log("Pincode ==================:", responseJson);
        if (responseJson.bstatus == 1) {
          setAlldata(responseJson.details);
          setCityID(responseJson.details[0].city_id);
          setStateId(responseJson.details[0].state_id);
          setCityname(responseJson.details[0].city_name);
        } else {
          setAlldata("");
          setCityname("");
          _reactNativeSimpleToast.default.show(responseJson.message);
        }
      }).catch(function (error) {
        setLoading(false);
        //console.log("get-location-by-pin-code Error:", error);
        _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
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
          component: "Address",
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontWeight: "bold",
              fontSize: "md",
              marginBottom: 2,
              children: alladdressdata != "" ? alladdressdata.address_list.permanent_address.heading : ""
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 3,
              alignItems: "center",
              backgroundColor: _MainStyle.lightGrey,
              padding: 4,
              borderRadius: 8,
              overflow: "hidden",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeCheckBox.default, {
                isChecked: isChecked === "permanentAddress",
                onClick: function onClick() {
                  setIsChecked("permanentAddress");
                  handleCheckboxClick(peraddress.address_id, "dcm_addresses");
                },
                checkBoxColor: _MainStyle.warningColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 1,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  fontSize: "sm",
                  color: _MainStyle.darkColor,
                  fontWeight: "bold",
                  children: [peraddress.fname, " ", peraddress.lname]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "xs",
                  color: _MainStyle.darkColor,
                  children: peraddress.line1
                }), peraddress.line2 != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "xs",
                  color: _MainStyle.darkColor,
                  children: peraddress.line2
                }), peraddress.line3 != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "xs",
                  color: _MainStyle.darkColor,
                  children: peraddress.line3
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  fontSize: "xs",
                  color: _MainStyle.darkColor,
                  children: [peraddress.state, ", ", peraddress.city, ", ", peraddress.post_code]
                })]
              })]
            })]
          }), alladdressdata != "" && alladdressdata.address_list.working_address.details != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontWeight: "bold",
              fontSize: "md",
              marginBottom: 2,
              children: alladdressdata != "" ? alladdressdata.address_list.working_address.heading : ""
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 3,
              alignItems: "center",
              backgroundColor: _MainStyle.lightGrey,
              padding: 4,
              borderRadius: 8,
              overflow: "hidden",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeCheckBox.default, {
                isChecked: isChecked === "wokingAddress",
                onClick: function onClick() {
                  setIsChecked("wokingAddress");
                  handleCheckboxClick(workingaddress.address_id, "dcm_addresses");
                },
                checkBoxColor: _MainStyle.warningColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 1,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  fontSize: "sm",
                  color: _MainStyle.darkColor,
                  fontWeight: "bold",
                  children: [workingaddress.fname, " ", workingaddress.lname]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "xs",
                  color: _MainStyle.darkColor,
                  children: workingaddress.line1
                }), workingaddress.line2 != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "xs",
                  color: _MainStyle.darkColor,
                  children: workingaddress.line2
                }), workingaddress.line3 != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "xs",
                  color: _MainStyle.darkColor,
                  children: workingaddress.line3
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  fontSize: "xs",
                  color: _MainStyle.darkColor,
                  children: [workingaddress.state, ", ", workingaddress.city, ", ", workingaddress.post_code]
                })]
              })]
            })]
          }), alladdressdata != "" && alladdressdata.address_list.alternate_addresses.details != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontWeight: "bold",
              fontSize: "md",
              marginBottom: 2,
              children: alladdressdata != "" ? alladdressdata.address_list.alternate_addresses.heading : ""
            }), altaddress.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                space: 3,
                alignItems: "center",
                backgroundColor: _MainStyle.lightGrey,
                padding: 4,
                borderRadius: 8,
                overflow: "hidden",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeCheckBox.default, {
                  isChecked: isChecked === "altAddress" + index,
                  onClick: function onClick() {
                    setIsChecked("altAddress" + index);
                    handleCheckboxClick(item.add_id, "dcm_contact_shipping_address");
                  },
                  checkBoxColor: _MainStyle.warningColor
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  space: 1,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontSize: "xs",
                    color: _MainStyle.darkColor,
                    children: item.line1
                  }), item.line2 != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontSize: "xs",
                    color: _MainStyle.darkColor,
                    children: item.line2
                  }), item.line3 != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontSize: "xs",
                    color: _MainStyle.darkColor,
                    children: item.line3
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    fontSize: "xs",
                    color: _MainStyle.darkColor,
                    children: [item.state, ", ", item.city, ", ", item.post_code]
                  })]
                })]
              }, index);
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          backgroundColor: _MainStyle.lightColor,
          width: '94%',
          alignSelf: "center",
          padding: 5,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            marginTop: 6,
            space: 2,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: [_MainStyle.MainStyle.outlinebtn, {
                backgroundColor: '#ffffff'
              }],
              onPress: function onPress() {
                return setPopAddress(true);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.baseColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "sm",
                children: t("Add New Address")
              })
            }), isChecked != "" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: _MainStyle.MainStyle.solidbtn,
              onPress: function onPress() {
                return navigation.navigate("RedeemsonOTP", {
                  orderid: '',
                  cartId: cartid,
                  addressId: addressid,
                  address: address,
                  tablename: tableName
                });
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "sm",
                children: t("Continue")
              })
            }) : ""]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {
          navigation: navigation,
          component: userType,
          cartcount: cartcount
        })]
      }), popAddress && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableWithoutFeedback, {
        onPress: _reactNative.Keyboard.dismiss,
        accessible: false,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
          flex: 1,
          style: {
            backgroundColor: "rgba(0,0,0,0.85)",
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
            style: _MainStyle.MainStyle.popbox,
            paddingX: 3,
            paddingY: 6,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 3,
              alignItems: "center",
              width: '100%',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.baseColor,
                fontSize: "md",
                mb: 1,
                fontWeight: "bold",
                children: t("Add New Address")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "lg",
                  onChangeText: function onChangeText(text) {
                    return setAddress1(text);
                  },
                  variant: "unstyled",
                  InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "location-outline",
                    size: 20,
                    color: "#666666",
                    style: {
                      width: 25,
                      marginLeft: 10,
                      textAlign: 'center'
                    }
                  }),
                  placeholder: t("Address Line 1") + " *"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "lg",
                  onChangeText: function onChangeText(text) {
                    return setAddress2(text);
                  },
                  variant: "unstyled",
                  InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "location-outline",
                    size: 20,
                    color: "#666666",
                    style: {
                      width: 25,
                      marginLeft: 10,
                      textAlign: 'center'
                    }
                  }),
                  placeholder: t("Address Line 2")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "lg",
                  onChangeText: function onChangeText(text) {
                    return setAddress3(text);
                  },
                  variant: "unstyled",
                  InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "location-outline",
                    size: 20,
                    color: "#666666",
                    style: {
                      width: 25,
                      marginLeft: 10,
                      textAlign: 'center'
                    }
                  }),
                  placeholder: t("Address Line 3")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: {
                    flexDirection: "row",
                    justifyContent: "space-between"
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: {
                      width: "100%"
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "lg",
                      keyboardType: "number-pad",
                      maxLength: 6,
                      onChangeText: function onChangeText(text) {
                        return setPinCode(text);
                      },
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("Pincode") + " *"
                    })
                  })
                })
              }), alldata != "" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: {
                  backgroundColor: _MainStyle.lightColor,
                  borderColor: _MainStyle.greyColor,
                  borderWidth: 1,
                  borderRadius: 8,
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '10%',
                  justifyContent: 'center',
                  alignItems: 'center'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  style: {
                    color: '#333',
                    fontSize: 16,
                    alignSelf: "flex-start",
                    paddingLeft: 15
                  },
                  children: alldata[0].city_name
                })
              }) : "", alldata != "" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: {
                  backgroundColor: _MainStyle.lightColor,
                  borderColor: _MainStyle.greyColor,
                  borderWidth: 1,
                  borderRadius: 8,
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '10%',
                  justifyContent: 'center',
                  alignItems: 'center'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  style: {
                    color: '#333',
                    fontSize: 16,
                    alignSelf: "flex-start",
                    paddingLeft: 15
                  },
                  children: alldata[0].state_name
                })
              }) : ""]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 2,
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                style: [_MainStyle.MainStyle.solidbtn, {
                  width: '48%',
                  backgroundColor: _MainStyle.darkGrey,
                  height: 37
                }],
                onPress: function onPress() {
                  return setPopAddress(false);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "xs",
                  children: t("Close")
                })
              }), cityid == "" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                style: [_MainStyle.MainStyle.solidbtn, {
                  width: '48%',
                  backgroundColor: _MainStyle.baseColor,
                  height: 37
                }],
                onPress: function onPress() {
                  return onSubmit();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "sm",
                  children: t("Search")
                })
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "xs",
                style: [_MainStyle.MainStyle.solidbtn, {
                  width: '48%',
                  backgroundColor: _MainStyle.baseColor,
                  height: 37
                }],
                onPress: function onPress() {
                  return onSubmitallData("dcm_contact_shipping_address");
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "xs",
                  children: t("Submit")
                })
              })]
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
    text: {
      // marginTop: 20,
      fontSize: 16
    },
    checkcontainer: {
      flexDirection: 'row',
      // Arrange children horizontally
      justifyContent: 'flex-start',
      // Align children to the start horizontally
      alignItems: 'center',
      // Center children vertically
      //   backgroundColor: 'red',
      height: '18%',
      marginTop: "2%"
    }
  });
  var _default = exports.default = AddressScreen;
