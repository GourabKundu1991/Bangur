  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[2]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _Config = _$$_REQUIRE(_dependencyMap[5]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[6]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[7]);
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _checkbox = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeModalDatetimePicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _reactNativeImagePicker = _$$_REQUIRE(_dependencyMap[15]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[16]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var UpdateKYCScreen = function UpdateKYCScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var scrollRef = _react.default.useRef();
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
      aadhaarNumber = _React$useState6[0],
      setAadhaarNumber = _React$useState6[1];
    var _React$useState7 = _react.default.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      forOTP = _React$useState8[0],
      setForOTP = _React$useState8[1];
    var _React$useState9 = _react.default.useState(''),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      otpValue = _React$useState0[0],
      setOtpValue = _React$useState0[1];
    var _React$useState1 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState1, 2),
      tranId = _React$useState10[0],
      setTranId = _React$useState10[1];
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      aadhaarVerifed = _React$useState12[0],
      setAadhaarVerifed = _React$useState12[1];
    var _React$useState13 = _react.default.useState(false),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      panVerifed = _React$useState14[0],
      setPanVerifed = _React$useState14[1];
    var _React$useState15 = _react.default.useState(''),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      panNumber = _React$useState16[0],
      setPanNumber = _React$useState16[1];
    var _React$useState17 = _react.default.useState(''),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      panDOB = _React$useState18[0],
      setPanDOB = _React$useState18[1];
    var _React$useState19 = _react.default.useState(''),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      fetchedDetails = _React$useState20[0],
      setFetchedDetails = _React$useState20[1];
    var _React$useState21 = _react.default.useState(''),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      dob = _React$useState22[0],
      setDOB = _React$useState22[1];
    var _React$useState23 = _react.default.useState(''),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      dobType = _React$useState24[0],
      setDOBType = _React$useState24[1];
    var _React$useState25 = _react.default.useState(false),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      successPop = _React$useState26[0],
      setSuccessPop = _React$useState26[1];
    var _React$useState27 = _react.default.useState(false),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      errorPop = _React$useState28[0],
      setErrorPop = _React$useState28[1];
    var _React$useState29 = _react.default.useState(""),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      successPMsg = _React$useState30[0],
      setSuccessMsg = _React$useState30[1];
    var _React$useState31 = _react.default.useState(""),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      errorPMsg = _React$useState32[0],
      setErrorMsg = _React$useState32[1];
    var _React$useState33 = _react.default.useState(''),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      selectIDProof = _React$useState34[0],
      setSelectIDProof = _React$useState34[1];
    var _React$useState35 = _react.default.useState(false),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      isDatePickerVisible = _React$useState36[0],
      setDatePickerVisibility = _React$useState36[1];
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var maxYear = new Date(year - 18, month, day);
    var miniYear = new Date(year - 100, month, day);
    var regexNum = /^[6-9]\d{9}$/;
    var regexAlp = /[^a-zA-Z ]/g;
    var _React$useState37 = _react.default.useState(""),
      _React$useState38 = (0, _slicedToArray2.default)(_React$useState37, 2),
      preApproved = _React$useState38[0],
      setPreApproved = _React$useState38[1];
    var _React$useState39 = _react.default.useState(false),
      _React$useState40 = (0, _slicedToArray2.default)(_React$useState39, 2),
      uploadImgBox = _React$useState40[0],
      setUploadImgBox = _React$useState40[1];
    var _React$useState41 = _react.default.useState(""),
      _React$useState42 = (0, _slicedToArray2.default)(_React$useState41, 2),
      aadhaarFrontImage = _React$useState42[0],
      setAadhaarFrontImage = _React$useState42[1];
    var _React$useState43 = _react.default.useState(""),
      _React$useState44 = (0, _slicedToArray2.default)(_React$useState43, 2),
      aadhaarBackImage = _React$useState44[0],
      setAadhaarBackImage = _React$useState44[1];
    var _React$useState45 = _react.default.useState(""),
      _React$useState46 = (0, _slicedToArray2.default)(_React$useState45, 2),
      panImage = _React$useState46[0],
      setPanImage = _React$useState46[1];
    var _React$useState47 = _react.default.useState(false),
      _React$useState48 = (0, _slicedToArray2.default)(_React$useState47, 2),
      isPicker = _React$useState48[0],
      setIsPicker = _React$useState48[1];
    var _React$useState49 = _react.default.useState(""),
      _React$useState50 = (0, _slicedToArray2.default)(_React$useState49, 2),
      imageType = _React$useState50[0],
      setImageType = _React$useState50[1];
    var _React$useState51 = _react.default.useState(""),
      _React$useState52 = (0, _slicedToArray2.default)(_React$useState51, 2),
      fullName = _React$useState52[0],
      setFullName = _React$useState52[1];
    var _React$useState53 = _react.default.useState(""),
      _React$useState54 = (0, _slicedToArray2.default)(_React$useState53, 2),
      gender = _React$useState54[0],
      setGender = _React$useState54[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        _asyncStorage.default.getItem('language').then(function (val) {
          if (val != null) {
            setLanguage(val);
          }
        });
      });
      return unsubscribe;
    }, []);
    var onSelectIDProof = function onSelectIDProof(val) {
      setSelectIDProof(val);
      setPanNumber("");
      setPanVerifed(false);
      setAadhaarNumber("");
      setAadhaarVerifed(false);
      setFetchedDetails("");
      setPanDOB("");
      setFullName("");
      setGender("");
      setDOB("");
    };
    var onUploadDoc = function onUploadDoc() {
      _reactNative.Keyboard.dismiss();
      if (selectIDProof == 1 && aadhaarFrontImage == "") {
        _reactNativeSimpleToast.default.show(t("Please upload Aadhaar Front Image"), _reactNativeSimpleToast.default.LONG);
      } else if (selectIDProof == 1 && aadhaarBackImage == "") {
        _reactNativeSimpleToast.default.show(t("Please upload Aadhaar Back Image"), _reactNativeSimpleToast.default.LONG);
      } else if (selectIDProof == 2 && panImage == "") {
        _reactNativeSimpleToast.default.show(t("Please upload PAN Image"), _reactNativeSimpleToast.default.LONG);
      } else {
        setUploadImgBox(false);
        if (selectIDProof == 1) {
          setAadhaarVerifed(true);
        } else if (selectIDProof == 2) {
          setPanVerifed(true);
        }
      }
    };
    var onPickerOpen = function onPickerOpen(val) {
      setIsPicker(true);
      setImageType(val);
      console.log(val);
    };
    var onPickerClose = function onPickerClose() {
      setIsPicker(false);
    };
    var openProfilePicker = function openProfilePicker(type) {
      onPickerClose();
      if (type == "library") {
        (0, _reactNativeImagePicker.launchImageLibrary)({
          mediaType: 'photo',
          includeBase64: true,
          maxHeight: 1500,
          maxWidth: 1500
        }, function (response) {
          //console.log(response);
          if (response.assets != undefined) {
            if (imageType == "AadhaarFrontImage") {
              setAadhaarFrontImage(response.assets[0].base64);
            } else if (imageType == "AadhaarBackImage") {
              setAadhaarBackImage(response.assets[0].base64);
            } else if (imageType == "PanImage") {
              setPanImage(response.assets[0].base64);
            }
          }
        });
      } else if (type == "camera") {
        (0, _reactNativeImagePicker.launchCamera)({
          mediaType: 'photo',
          includeBase64: true,
          maxHeight: 1500,
          maxWidth: 1500
        }, function (response) {
          //console.log(response.assets);
          if (response.assets != undefined) {
            if (imageType == "AadhaarFrontImage") {
              setAadhaarFrontImage(response.assets[0].base64);
            } else if (imageType == "AadhaarBackImage") {
              setAadhaarBackImage(response.assets[0].base64);
            } else if (imageType == "PanImage") {
              setPanImage(response.assets[0].base64);
            }
          }
        });
      }
    };
    var getOTP = function getOTP() {
      _reactNative.Keyboard.dismiss();
      if (aadhaarNumber.trim() == '') {
        _reactNativeSimpleToast.default.show(t("Please enter Aadhaar Number"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        var formdata = new FormData();
        formdata.append("aadhaarNumber", aadhaarNumber);
        formdata.append("lang_code", currentLanguage);
        fetch(`${_Config.BASE_URL}/aadhaar/get-otp`, {
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
          //console.log("Get OTP:", responseJson);
          if (responseJson.aadhaar_pan_api_disabled == 1) {
            setUploadImgBox(true);
            setFetchedDetails(responseJson.details);
            setPincode(responseJson.details.pinCode);
            setState(responseJson.details.stateName);
            setStateID(responseJson.details.stateId);
            setDistrict(responseJson.details.districtName);
            setDistrictID(responseJson.details.districtId);
            setPanNumber(responseJson.details.pan);
            setFullName(responseJson.details.name);
            setGender(responseJson.details.gender);
          } else {
            if (responseJson.bstatus === 1) {
              setForOTP(true);
              setTranId(responseJson.tran_id);
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
            } else {
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
            }
          }
        }).catch(function (error) {
          setLoading(false);
          //console.log("Error:", error);
          _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
        });
      }
    };
    var closeOTP = function closeOTP() {
      setForOTP(false);
      setTranId("");
      setOtpValue("");
    };
    var verifyOTP = function verifyOTP() {
      _reactNative.Keyboard.dismiss();
      if (otpValue == '') {
        _reactNativeSimpleToast.default.show(t("Please enter OTP"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        var formdata = new FormData();
        formdata.append("aadhaarNumber", aadhaarNumber);
        formdata.append("tran_id", tranId);
        formdata.append("otp", otpValue);
        formdata.append("lang_code", currentLanguage);
        fetch(`${_Config.BASE_URL}/aadhaar/get-user-details`, {
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
          console.log("Verify OTP:", responseJson);
          if (responseJson.bstatus == 1) {
            setForOTP(false);
            setOtpValue("");
            setTranId("");
            setAadhaarVerifed(true);
            setFetchedDetails(responseJson.details);
            /* setPincode(responseJson.details.pinCode);
            setState(responseJson.details.stateName);
            setStateID(responseJson.details.stateId);
            setDistrict(responseJson.details.districtName);
            setDistrictID(responseJson.details.districtId);
            setPanNumber(responseJson.details.pan); */
            _reactNativeSimpleToast.default.show(t("Aadhaar Number has been Verified"), _reactNativeSimpleToast.default.LONG);
          } else {
            _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
          }
        }).catch(function (error) {
          setLoading(false);
          //console.log("Error:", error);
          _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
        });
      }
    };
    var verifyPAN = function verifyPAN() {
      _reactNative.Keyboard.dismiss();
      if (panNumber.trim() == '') {
        _reactNativeSimpleToast.default.show(t("Please enter PAN Number"), _reactNativeSimpleToast.default.LONG);
      } else if (panDOB == '') {
        _reactNativeSimpleToast.default.show(t("Please select DOB same as PAN"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        var formdata = new FormData();
        formdata.append("panNumber", panNumber);
        formdata.append("dob", (0, _moment.default)(panDOB).format('DD-MM-YYYY'));
        formdata.append("lang_code", currentLanguage);
        fetch(`${_Config.BASE_URL}/pan/verify`, {
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
          //console.log("Verify PAN:", responseJson);
          if (responseJson.aadhaar_pan_api_disabled == 1) {
            setUploadImgBox(true);
            setFetchedDetails(responseJson.details);
            setPincode(responseJson.details.pinCode);
            setState(responseJson.details.stateName);
            setStateID(responseJson.details.stateId);
            setDistrict(responseJson.details.districtName);
            setDistrictID(responseJson.details.districtId);
          } else {
            if (responseJson.bstatus == 1) {
              setPanVerifed(true);
              setFetchedDetails(responseJson.details);
              setPincode(responseJson.details.pinCode);
              setState(responseJson.details.stateName);
              setStateID(responseJson.details.stateId);
              setDistrict(responseJson.details.districtName);
              setDistrictID(responseJson.details.districtId);
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
            } else {
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
            }
          }
          /* if (responseJson.bstatus == 1) {
              setPanVerifed(true);
              setFetchedDetails(responseJson.details);
              
          } else {
              Toast.show(responseJson.message, Toast.LONG);
          } */
        }).catch(function (error) {
          setLoading(false);
          console.log("PAN Veriry Error:", error);
          _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
        });
      }
    };
    var showDatePicker = function showDatePicker(type) {
      setDatePickerVisibility(true);
      setDOBType(type);
    };
    var hideDatePicker = function hideDatePicker() {
      setDatePickerVisibility(false);
    };
    var handleConfirm = function handleConfirm(date) {
      hideDatePicker();
      if (dobType == "DOB") {
        setDOB(date);
      } else if (dobType == "panDOB") {
        setPanDOB(date);
      }
    };
    var onNext = function onNext() {
      _reactNative.Keyboard.dismiss();
      if (selectIDProof == "") {
        _reactNativeSimpleToast.default.show(t("Please select ID Proof as Aadhaar / PAN"), _reactNativeSimpleToast.default.LONG);
      } else if (selectIDProof == 1 && !aadhaarVerifed) {
        _reactNativeSimpleToast.default.show(t("Please Verify your Aadahar No."), _reactNativeSimpleToast.default.LONG);
      } else if (selectIDProof == 2 && !panVerifed) {
        _reactNativeSimpleToast.default.show(t("Please Verify your PAN No."), _reactNativeSimpleToast.default.LONG);
      } else if (fullName == "") {
        _reactNativeSimpleToast.default.show(t("Please enter your Name as per ID proof"), _reactNativeSimpleToast.default.LONG);
      } else if (fullName != "" && regexAlp.test(fullName)) {
        _reactNativeSimpleToast.default.show(t("Name field accept only alphabets"), _reactNativeSimpleToast.default.LONG);
      } else if (fetchedDetails.gender == "" && gender == "") {
        _reactNativeSimpleToast.default.show(t("Please select your Gender as per ID proof"), _reactNativeSimpleToast.default.LONG);
      } else if (fetchedDetails.dob == "" && dob == "") {
        _reactNativeSimpleToast.default.show(t("Please select your Date of Birth as per ID proof"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        onSubmit();
      }
    };
    onSubmit = function onSubmit() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[17]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("lang_code", currentLanguage);
          formdata.append("kycType", selectIDProof);
          formdata.append("kycNumber", selectIDProof == 1 ? aadhaarNumber : panNumber);
          formdata.append("name", fullName);
          formdata.append("gender", gender == "Male" ? "M" : "F");
          formdata.append("dob", fetchedDetails.dob == "" ? (0, _moment.default)(dob).format('DD-MM-YYYY') : fetchedDetails.dob);
          formdata.append("aadhaarFront", aadhaarFrontImage);
          formdata.append("aadhaarBack", aadhaarBackImage);
          formdata.append("panImage", panImage);
          fetch(`${_Config.BASE_URL}/update-influencer-kyc`, {
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
            console.log("Update KYC:", responseJson);
            if (responseJson.bstatus == 1) {
              if (responseJson.pending == 1) {
                setErrorPop(true);
                setErrorMsg(responseJson.message);
              } else {
                setSuccessPop(true);
                setSuccessMsg(responseJson.message);
              }
            } else {
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
            }
          }).catch(function (error) {
            setLoading(false);
            console.log("Update KYC Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        }
      });
    };
    var onOkay = function onOkay() {
      setSuccessPop(false);
      setErrorPop(false);
      navigation.goBack();
    };
    var goHome = function goHome() {
      setSuccessPop(false);
      setErrorPop(false);
      navigation.navigate("Home");
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          ref: scrollRef,
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 5,
            padding: 8,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "lg",
              children: t("Please update your KYC")
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 5,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("Aadhaar / PAN"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    height: 43,
                    selectedValue: selectIDProof,
                    onValueChange: function onValueChange(value) {
                      return onSelectIDProof(value);
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
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: t("Aadhaar"),
                      value: "1"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: t("PAN"),
                      value: "2"
                    })]
                  })
                })]
              }), selectIDProof == 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("Aadhaar No."), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: !aadhaarVerifed ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    onChangeText: function onChangeText(text) {
                      return setAadhaarNumber(text);
                    },
                    placeholder: t("Please Enter Aadhaar No."),
                    maxLength: 12,
                    keyboardType: "number-pad",
                    InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                      size: "xs",
                      style: [_MainStyle.MainStyle.solidbtn, {
                        backgroundColor: _MainStyle.warningColor,
                        height: 37,
                        marginRight: 4
                      }],
                      onPress: function onPress() {
                        return getOTP();
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.lightColor,
                        fontFamily: _MainStyle.fontSemiBold,
                        fontSize: "sm",
                        children: t("Verify")
                      })
                    })
                  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    value: aadhaarNumber,
                    backgroundColor: _MainStyle.lightGrey,
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    readOnly: true,
                    InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-circle",
                      size: 22,
                      color: _MainStyle.successColor,
                      style: {
                        marginRight: 10,
                        textAlign: 'center'
                      }
                    })
                  })
                })]
              }), selectIDProof == 2 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("PAN Details"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), !panVerifed ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  space: 3,
                  style: [_MainStyle.MainStyle.inputbox, {
                    padding: 8
                  }],
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      fontFamily: _MainStyle.fontRegular,
                      size: "md",
                      variant: "unstyled",
                      textTransform: "uppercase",
                      onChangeText: function onChangeText(text) {
                        return setPanNumber(text);
                      },
                      placeholder: t("Please Enter PAN No."),
                      maxLength: 10
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      style: styles.inputbox,
                      onPress: function onPress() {
                        return showDatePicker("panDOB");
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
                          color: panDOB != '' ? '#111111' : '#999999',
                          fontSize: "sm",
                          children: [" ", panDOB != "" ? (0, _moment.default)(panDOB).format('DD-MM-YYYY') : t("Select DOB same as PAN")]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                          name: "calendar-outline",
                          size: 18,
                          color: _MainStyle.warningColor
                        })]
                      })
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    size: "xs",
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.warningColor,
                      height: 37
                    }],
                    onPress: function onPress() {
                      return verifyPAN();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      fontSize: "sm",
                      children: t("Verify")
                    })
                  })]
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    value: panNumber,
                    backgroundColor: _MainStyle.lightGrey,
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    textTransform: "uppercase",
                    readOnly: true,
                    InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-circle",
                      size: 22,
                      color: _MainStyle.successColor,
                      style: {
                        marginRight: 10,
                        textAlign: 'center'
                      }
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeModalDatetimePicker.default, {
                  date: panDOB || undefined,
                  maximumDate: maxYear,
                  minimumDate: miniYear,
                  isVisible: isDatePickerVisible,
                  mode: "date",
                  onConfirm: handleConfirm,
                  onCancel: hideDatePicker
                })]
              }), fetchedDetails != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                space: 3,
                marginTop: 3,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    style: _MainStyle.MainStyle.lable,
                    fontSize: "xs",
                    children: [t("Name as per ID Proof"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.dangerColor,
                      children: "*"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: fetchedDetails.name != "" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      value: fullName,
                      backgroundColor: _MainStyle.lightGrey,
                      fontFamily: _MainStyle.fontRegular,
                      size: "md",
                      variant: "unstyled",
                      readOnly: true,
                      InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "checkmark-circle",
                        size: 22,
                        color: _MainStyle.successColor,
                        style: {
                          marginRight: 10,
                          textAlign: 'center'
                        }
                      })
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      value: fullName,
                      onChangeText: function onChangeText(text) {
                        return setFullName(text);
                      },
                      fontFamily: _MainStyle.fontRegular,
                      size: "md",
                      variant: "unstyled"
                    })
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    style: _MainStyle.MainStyle.lable,
                    fontSize: "xs",
                    children: [t("Gender"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.dangerColor,
                      children: "*"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: fetchedDetails.gender != "" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      value: gender,
                      backgroundColor: _MainStyle.lightGrey,
                      fontFamily: _MainStyle.fontRegular,
                      size: "md",
                      variant: "unstyled",
                      readOnly: true,
                      InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "checkmark-circle",
                        size: 22,
                        color: _MainStyle.successColor,
                        style: {
                          marginRight: 10,
                          textAlign: 'center'
                        }
                      })
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                      style: _MainStyle.MainStyle.inputbox,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                        variant: "unstyled",
                        size: "md",
                        height: 43,
                        onValueChange: function onValueChange(value) {
                          return setGender(value);
                        },
                        selectedValue: gender,
                        style: {
                          paddingLeft: 15
                        },
                        fontFamily: _MainStyle.fontRegular,
                        placeholder: t("Please Select"),
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
                          label: "Male",
                          value: "Male"
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                          label: "Female",
                          value: "Female"
                        })]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    style: _MainStyle.MainStyle.lable,
                    fontSize: "xs",
                    children: [t("Date of Birth"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.dangerColor,
                      children: "*"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: fetchedDetails.dob != "" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      value: fetchedDetails.dob,
                      backgroundColor: _MainStyle.lightGrey,
                      fontFamily: _MainStyle.fontRegular,
                      size: "md",
                      variant: "unstyled",
                      readOnly: true,
                      InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "checkmark-circle",
                        size: 22,
                        color: _MainStyle.successColor,
                        style: {
                          marginRight: 10,
                          textAlign: 'center'
                        }
                      })
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      style: styles.inputbox,
                      onPress: function onPress() {
                        return showDatePicker("DOB");
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
                          color: dob != '' ? '#111111' : '#999999',
                          fontSize: "sm",
                          children: [" ", dob != '' ? (0, _moment.default)(dob).format('DD-MM-YYYY') : ""]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                          name: "calendar-outline",
                          size: 18,
                          color: _MainStyle.warningColor
                        })]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeModalDatetimePicker.default, {
                  date: dob || undefined,
                  maximumDate: maxYear,
                  minimumDate: miniYear,
                  isVisible: isDatePickerVisible,
                  mode: "date",
                  onConfirm: handleConfirm,
                  onCancel: hideDatePicker
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                  marginTop: 5,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    style: [_MainStyle.MainStyle.solidbtn, styles.fullbtn],
                    onPress: function onPress() {
                      return onNext();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      fontSize: "sm",
                      children: t("Submit")
                    })
                  })
                })]
              })]
            })]
          })
        })]
      }), forOTP && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
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
            children: t("Enter OTP & Verify")
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
            color: _MainStyle.successColor,
            fontFamily: _MainStyle.fontSemiBold,
            fontSize: "sm",
            textAlign: "center",
            marginBottom: 3,
            children: [t("OTP sent to Aadhaar linked number"), "."]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 2,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              style: _MainStyle.MainStyle.lable,
              fontSize: "sm",
              children: [t("OTP"), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.darkGrey,
                fontSize: "10",
                children: ["(", t("To Verify Mobile No."), ")"]
              }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.dangerColor,
                children: "*"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: [_MainStyle.MainStyle.inputbox, {
                  width: 180
                }],
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  value: otpValue,
                  secureTextEntry: true,
                  fontFamily: _MainStyle.fontRegular,
                  size: "md",
                  variant: "unstyled",
                  placeholder: t("Enter OTP"),
                  onChangeText: function onChangeText(text) {
                    return setOtpValue(text);
                  },
                  keyboardType: "number-pad",
                  maxLength: 6
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                variant: "unstyled",
                onPress: function onPress() {
                  return getOTP();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.baseColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "sm",
                  children: t("Resend")
                })
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            marginTop: 6,
            style: _MainStyle.MainStyle.solidbtn,
            onPress: function onPress() {
              return verifyOTP();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "sm",
              children: t("Verify OTP")
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            variant: "unstyled",
            backgroundColor: _MainStyle.greyColor,
            borderRadius: 8,
            onPress: function onPress() {
              return closeOTP();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "xs",
              children: t("Close")
            })
          })]
        })
      }), uploadImgBox && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          space: 3,
          style: {
            backgroundColor: _MainStyle.lightColor,
            paddingVertical: 30,
            paddingHorizontal: 25,
            borderRadius: 12,
            width: '85%'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: _MainStyle.darkColor,
            fontFamily: _MainStyle.fontBold,
            fontSize: "lg",
            textAlign: "center",
            marginBottom: 3,
            children: t("Upload Doccuments")
          }), selectIDProof == 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            flexWrap: "wrap",
            space: 2,
            justifyContent: "space-between",
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              width: "100%",
              space: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                alignItems: "center",
                mt: "3",
                space: 0,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "attach-outline",
                  size: 20,
                  color: _MainStyle.darkColor
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "sm",
                  children: [t("Aadhaar Front Image"), " *"]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
                onPress: function onPress() {
                  return onPickerOpen("AadhaarFrontImage");
                },
                style: _MainStyle.MainStyle.inputbox,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                  source: aadhaarFrontImage != "" ? {
                    uri: 'data:image/jpeg;base64,' + aadhaarFrontImage
                  } : _$$_REQUIRE(_dependencyMap[18]),
                  alt: "image",
                  resizeMode: "contain",
                  style: {
                    width: '100%',
                    height: 120
                  }
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  bg: _MainStyle.dangerColor,
                  borderRadius: 6,
                  position: "absolute",
                  bottom: "2",
                  right: "2",
                  width: "45",
                  height: "45",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "camera",
                    size: 26,
                    color: "#ffffff"
                  })
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              width: "100%",
              space: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                alignItems: "center",
                mt: "3",
                space: 0,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "attach-outline",
                  size: 20,
                  color: _MainStyle.darkColor
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "sm",
                  children: [t("Aadhaar Back Image"), " *"]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
                onPress: function onPress() {
                  return onPickerOpen("AadhaarBackImage");
                },
                style: _MainStyle.MainStyle.inputbox,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                  source: aadhaarBackImage != "" ? {
                    uri: 'data:image/jpeg;base64,' + aadhaarBackImage
                  } : _$$_REQUIRE(_dependencyMap[18]),
                  alt: "image",
                  resizeMode: "contain",
                  style: {
                    width: '100%',
                    height: 120
                  }
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  bg: _MainStyle.dangerColor,
                  borderRadius: 6,
                  position: "absolute",
                  bottom: "2",
                  right: "2",
                  width: "45",
                  height: "45",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "camera",
                    size: 26,
                    color: "#ffffff"
                  })
                })]
              })]
            })]
          }), selectIDProof == 2 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            flexWrap: "wrap",
            space: 2,
            justifyContent: "space-between",
            alignItems: "center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              width: "100%",
              space: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                alignItems: "center",
                mt: "3",
                space: 0,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "attach-outline",
                  size: 20,
                  color: _MainStyle.darkColor
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "sm",
                  children: [t("PAN Card Image"), " *"]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Pressable, {
                onPress: function onPress() {
                  return onPickerOpen("PanImage");
                },
                style: _MainStyle.MainStyle.inputbox,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                  source: panImage != "" ? {
                    uri: 'data:image/jpeg;base64,' + panImage
                  } : _$$_REQUIRE(_dependencyMap[18]),
                  alt: "image",
                  resizeMode: "contain",
                  style: {
                    width: '100%',
                    height: 120
                  }
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  bg: _MainStyle.dangerColor,
                  borderRadius: 6,
                  position: "absolute",
                  bottom: "2",
                  right: "2",
                  width: "45",
                  height: "45",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "camera",
                    size: 26,
                    color: "#ffffff"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            marginTop: 6,
            style: _MainStyle.MainStyle.solidbtn,
            onPress: function onPress() {
              return onUploadDoc();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "sm",
              children: t("Upload")
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet, {
        isOpen: isPicker,
        onClose: onPickerClose,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Actionsheet.Content, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: "#666666",
            fontSize: "md",
            textAlign: "center",
            children: t("Select Image Source")
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Item, {
            onPress: function onPress() {
              return openProfilePicker("library");
            },
            children: t("Load from Library")
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Item, {
            onPress: function onPress() {
              return openProfilePicker("camera");
            },
            children: t("Use Camera")
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Item, {
            onPress: function onPress() {
              return openProfilePicker("cancel");
            },
            children: t("Cancel")
          })]
        })
      }), successPop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          style: _MainStyle.MainStyle.popbox,
          space: 10,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[19]),
            style: {
              width: 100,
              height: 100,
              resizeMode: 'contain',
              position: 'relative',
              marginTop: 30
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: _$$_REQUIRE(_dependencyMap[20]),
            style: _MainStyle.MainStyle.logo
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            justifyContent: "center",
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "sm",
              fontFamily: _MainStyle.fontSemiBold,
              textAlign: "center",
              children: t("Thank You")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "sm",
              fontFamily: _MainStyle.fontSemiBold,
              textAlign: "center",
              children: successPMsg
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            style: _MainStyle.MainStyle.solidbtn,
            width: '100%',
            onPress: function onPress() {
              return onOkay();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "sm",
              children: t("Okay")
            })
          })]
        })
      }), errorPop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
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
              source: _$$_REQUIRE(_dependencyMap[20]),
              style: _MainStyle.MainStyle.logo
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              mt: 5,
              mb: 3,
              fontSize: "xl",
              fontWeight: "bold",
              color: _MainStyle.warningColor,
              children: [t('Pending'), "!"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: errorPMsg
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 150,
                borderRadius: 8,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return goHome();
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
    halfbtn: {
      width: '48%',
      height: 45
    },
    fullbtn: {
      width: '100%',
      height: 45
    }
  });
  var _default = exports.default = UpdateKYCScreen;
