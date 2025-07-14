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
  var _reactNativeOtpEntry = _$$_REQUIRE(_dependencyMap[8]);
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _checkbox = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativeModalDatetimePicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _reactNativeImagePicker = _$$_REQUIRE(_dependencyMap[16]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[17]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  //import { getHash, getOtp, startOtpListener } from 'react-native-otp-verify';

  var AddSpouseScreen = function AddSpouseScreen(_ref) {
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
    var _React$useState5 = _react.default.useState(1),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      currentStep = _React$useState6[0],
      setCurrentStep = _React$useState6[1];
    var _React$useState7 = _react.default.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      stepDone2 = _React$useState8[0],
      setStepDone2 = _React$useState8[1];
    var _React$useState9 = _react.default.useState(false),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      stepDone3 = _React$useState0[0],
      setStepDone3 = _React$useState0[1];
    var _React$useState1 = _react.default.useState(''),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState1, 2),
      mobileNumber = _React$useState10[0],
      setMobileNumber = _React$useState10[1];
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      forMobileOTP = _React$useState12[0],
      setForMobileOTP = _React$useState12[1];
    var _React$useState13 = _react.default.useState(''),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      otpMobileValue = _React$useState14[0],
      setOtpMobileValue = _React$useState14[1];
    var _React$useState15 = _react.default.useState([]),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      otpArrya = _React$useState16[0],
      setOtpArrya = _React$useState16[1];
    var _React$useState17 = _react.default.useState(false),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      isAccept = _React$useState18[0],
      setIsAccept = _React$useState18[1];
    var _React$useState19 = _react.default.useState(''),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      aadhaarNumber = _React$useState20[0],
      setAadhaarNumber = _React$useState20[1];
    var _React$useState21 = _react.default.useState(false),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      forOTP = _React$useState22[0],
      setForOTP = _React$useState22[1];
    var _React$useState23 = _react.default.useState(''),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      otpValue = _React$useState24[0],
      setOtpValue = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      tranId = _React$useState26[0],
      setTranId = _React$useState26[1];
    var _React$useState27 = _react.default.useState(false),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      aadhaarVerifed = _React$useState28[0],
      setAadhaarVerifed = _React$useState28[1];
    var _React$useState29 = _react.default.useState(false),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      panVerifed = _React$useState30[0],
      setPanVerifed = _React$useState30[1];
    var _React$useState31 = _react.default.useState(''),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      panNumber = _React$useState32[0],
      setPanNumber = _React$useState32[1];
    var _React$useState33 = _react.default.useState(''),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      panDOB = _React$useState34[0],
      setPanDOB = _React$useState34[1];
    var _React$useState35 = _react.default.useState(''),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      fetchedDetails = _React$useState36[0],
      setFetchedDetails = _React$useState36[1];
    var _React$useState37 = _react.default.useState(''),
      _React$useState38 = (0, _slicedToArray2.default)(_React$useState37, 2),
      dob = _React$useState38[0],
      setDOB = _React$useState38[1];
    var _React$useState39 = _react.default.useState(''),
      _React$useState40 = (0, _slicedToArray2.default)(_React$useState39, 2),
      dobType = _React$useState40[0],
      setDOBType = _React$useState40[1];
    var _React$useState41 = _react.default.useState(''),
      _React$useState42 = (0, _slicedToArray2.default)(_React$useState41, 2),
      permanentAdress = _React$useState42[0],
      setPermanentAdress = _React$useState42[1];
    var _React$useState43 = _react.default.useState(''),
      _React$useState44 = (0, _slicedToArray2.default)(_React$useState43, 2),
      state = _React$useState44[0],
      setState = _React$useState44[1];
    var _React$useState45 = _react.default.useState(''),
      _React$useState46 = (0, _slicedToArray2.default)(_React$useState45, 2),
      stateID = _React$useState46[0],
      setStateID = _React$useState46[1];
    var _React$useState47 = _react.default.useState(''),
      _React$useState48 = (0, _slicedToArray2.default)(_React$useState47, 2),
      district = _React$useState48[0],
      setDistrict = _React$useState48[1];
    var _React$useState49 = _react.default.useState(''),
      _React$useState50 = (0, _slicedToArray2.default)(_React$useState49, 2),
      districtID = _React$useState50[0],
      setDistrictID = _React$useState50[1];
    var _React$useState51 = _react.default.useState(''),
      _React$useState52 = (0, _slicedToArray2.default)(_React$useState51, 2),
      pincode = _React$useState52[0],
      setPincode = _React$useState52[1];
    var _React$useState53 = _react.default.useState(false),
      _React$useState54 = (0, _slicedToArray2.default)(_React$useState53, 2),
      sameAdress = _React$useState54[0],
      setSameAdress = _React$useState54[1];
    var _React$useState55 = _react.default.useState(''),
      _React$useState56 = (0, _slicedToArray2.default)(_React$useState55, 2),
      altAdress = _React$useState56[0],
      setAltAdress = _React$useState56[1];
    var _React$useState57 = _react.default.useState(''),
      _React$useState58 = (0, _slicedToArray2.default)(_React$useState57, 2),
      altState = _React$useState58[0],
      setAltState = _React$useState58[1];
    var _React$useState59 = _react.default.useState(''),
      _React$useState60 = (0, _slicedToArray2.default)(_React$useState59, 2),
      altStateID = _React$useState60[0],
      setAltStateID = _React$useState60[1];
    var _React$useState61 = _react.default.useState(''),
      _React$useState62 = (0, _slicedToArray2.default)(_React$useState61, 2),
      altDistrict = _React$useState62[0],
      setAltDistrict = _React$useState62[1];
    var _React$useState63 = _react.default.useState(''),
      _React$useState64 = (0, _slicedToArray2.default)(_React$useState63, 2),
      altDistrictID = _React$useState64[0],
      setAltDistrictID = _React$useState64[1];
    var _React$useState65 = _react.default.useState(''),
      _React$useState66 = (0, _slicedToArray2.default)(_React$useState65, 2),
      altPincode = _React$useState66[0],
      setAltPincode = _React$useState66[1];
    var _React$useState67 = _react.default.useState(""),
      _React$useState68 = (0, _slicedToArray2.default)(_React$useState67, 2),
      miniData = _React$useState68[0],
      setMiniData = _React$useState68[1];
    var _React$useState69 = _react.default.useState(false),
      _React$useState70 = (0, _slicedToArray2.default)(_React$useState69, 2),
      successPop = _React$useState70[0],
      setSuccessPop = _React$useState70[1];
    var _React$useState71 = _react.default.useState(''),
      _React$useState72 = (0, _slicedToArray2.default)(_React$useState71, 2),
      officerName = _React$useState72[0],
      setOfficerName = _React$useState72[1];
    var _React$useState73 = _react.default.useState(''),
      _React$useState74 = (0, _slicedToArray2.default)(_React$useState73, 2),
      officerPhone = _React$useState74[0],
      setOfficerPhone = _React$useState74[1];
    var _React$useState75 = _react.default.useState(''),
      _React$useState76 = (0, _slicedToArray2.default)(_React$useState75, 2),
      officerType = _React$useState76[0],
      setOfficerType = _React$useState76[1];
    var _React$useState77 = _react.default.useState(''),
      _React$useState78 = (0, _slicedToArray2.default)(_React$useState77, 2),
      selectIDProof = _React$useState78[0],
      setSelectIDProof = _React$useState78[1];
    var _React$useState79 = _react.default.useState(false),
      _React$useState80 = (0, _slicedToArray2.default)(_React$useState79, 2),
      isDatePickerVisible = _React$useState80[0],
      setDatePickerVisibility = _React$useState80[1];
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var maxYear = new Date(year - 18, month, day);
    var miniYear = new Date(year - 100, month, day);
    var regexNum = /^[6-9]\d{9}$/;
    var regexAlp = /[^a-zA-Z ]/g;
    var _React$useState81 = _react.default.useState(""),
      _React$useState82 = (0, _slicedToArray2.default)(_React$useState81, 2),
      preApproved = _React$useState82[0],
      setPreApproved = _React$useState82[1];
    var _React$useState83 = _react.default.useState(''),
      _React$useState84 = (0, _slicedToArray2.default)(_React$useState83, 2),
      userId = _React$useState84[0],
      SetUserId = _React$useState84[1];
    var _React$useState85 = _react.default.useState(false),
      _React$useState86 = (0, _slicedToArray2.default)(_React$useState85, 2),
      uploadImgBox = _React$useState86[0],
      setUploadImgBox = _React$useState86[1];
    var _React$useState87 = _react.default.useState(""),
      _React$useState88 = (0, _slicedToArray2.default)(_React$useState87, 2),
      aadhaarFrontImage = _React$useState88[0],
      setAadhaarFrontImage = _React$useState88[1];
    var _React$useState89 = _react.default.useState(""),
      _React$useState90 = (0, _slicedToArray2.default)(_React$useState89, 2),
      aadhaarBackImage = _React$useState90[0],
      setAadhaarBackImage = _React$useState90[1];
    var _React$useState91 = _react.default.useState(""),
      _React$useState92 = (0, _slicedToArray2.default)(_React$useState91, 2),
      panImage = _React$useState92[0],
      setPanImage = _React$useState92[1];
    var _React$useState93 = _react.default.useState(false),
      _React$useState94 = (0, _slicedToArray2.default)(_React$useState93, 2),
      isPicker = _React$useState94[0],
      setIsPicker = _React$useState94[1];
    var _React$useState95 = _react.default.useState(""),
      _React$useState96 = (0, _slicedToArray2.default)(_React$useState95, 2),
      imageType = _React$useState96[0],
      setImageType = _React$useState96[1];
    var _React$useState97 = _react.default.useState(""),
      _React$useState98 = (0, _slicedToArray2.default)(_React$useState97, 2),
      fullName = _React$useState98[0],
      setFullName = _React$useState98[1];
    var _React$useState99 = _react.default.useState(""),
      _React$useState100 = (0, _slicedToArray2.default)(_React$useState99, 2),
      gender = _React$useState100[0],
      setGender = _React$useState100[1];
    (0, _react.useEffect)(function () {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          SetUserId(JSON.parse(decryptData).userCode);
        }
      });
    }, []);
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
    var sendOtp = function sendOtp() {
      if (mobileNumber.trim() == '') {
        _reactNativeSimpleToast.default.show(t("Please enter Mobile Number"), _reactNativeSimpleToast.default.LONG);
      } else if (mobileNumber.length < 10) {
        _reactNativeSimpleToast.default.show(t("Please enter 10 digit for Mobile Number"), _reactNativeSimpleToast.default.LONG);
      } else if (mobileNumber != "" && !regexNum.test(mobileNumber)) {
        _reactNativeSimpleToast.default.show(t("Spouse Phone Number accept Only Number / Mobile No. not Valid"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
            var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
            var formdata = new FormData();
            formdata.append("mobileNumber", mobileNumber);
            formdata.append("lang_code", currentLanguage);
            formdata.append("userType", "dealerSpouse");
            fetch(`${_Config.BASE_URL}/login/get-otp`, {
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
              //console.log("Get OTP:", responseJson);
              if (responseJson.bstatus == 1) {
                _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
                setForMobileOTP(true);
                setOtpMobileValue(responseJson.OTP);
                var myArray = responseJson.OTP.split('');
                setOtpArrya(myArray);
              } else {
                _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
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
    var onVerify = function onVerify() {
      _reactNative.Keyboard.dismiss();
      if (otpMobileValue == '') {
        _reactNativeSimpleToast.default.show(t("Please enter OTP Number"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
            var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
            var formdata = new FormData();
            formdata.append("mobileNumber", mobileNumber);
            formdata.append("otp", otpMobileValue);
            formdata.append("os_type", `${_Config.OS_TYPE}`);
            formdata.append("os_version", `${_Config.APP_VERSION}`);
            formdata.append("lang_code", currentLanguage);
            fetch(`${_Config.BASE_URL}/login/verify-otp`, {
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
              //console.log("Verify OTP:", responseJson);
              if (responseJson.bstatus == 1) {
                var _scrollRef$current;
                var crntstp = currentStep + 1;
                setCurrentStep(crntstp);
                setStepDone2(true);
                (_scrollRef$current = scrollRef.current) == null ? undefined : _scrollRef$current.scrollTo({
                  y: 0,
                  animated: true
                });
              } else {
                _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
              }
            }).catch(function (error) {
              setLoading(false);
              console.log("Error:", error);
              _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
            });
          }
        });
      }
    };
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
          //console.log("Verify OTP:", responseJson);
          if (responseJson.bstatus == 1) {
            setForOTP(false);
            setOtpValue("");
            setTranId("");
            setAadhaarVerifed(true);
            setFetchedDetails(responseJson.details);
            setPincode(responseJson.details.pinCode);
            setState(responseJson.details.stateName);
            setStateID(responseJson.details.stateId);
            setDistrict(responseJson.details.districtName);
            setDistrictID(responseJson.details.districtId);
            setPanNumber(responseJson.details.pan);
            _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
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
          console.log("Verify PAN:", responseJson);
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
        }).catch(function (error) {
          setLoading(false);
          //console.log("Error:", error);
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
    var searchPermanentPin = function searchPermanentPin(type) {
      if (pincode.trim() == "") {
        _reactNativeSimpleToast.default.show(t("Please enter Permanent Pincode"), _reactNativeSimpleToast.default.LONG);
      } else {
        setLoading(true);
        search(type);
      }
    };
    // Pincode
    var search = function search(pinType) {
      var formdata = new FormData();
      formdata.append("pinCode", pinType == "permanent" ? pincode : altPincode);
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
        //console.log("Pincode:", responseJson);
        if (responseJson.bstatus == 1) {
          _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
          if (pinType == "permanent") {
            setState(responseJson.details[0].state_name);
            setStateID(responseJson.details[0].state_id);
            setDistrict(responseJson.details[0].city_name);
            setDistrictID(responseJson.details[0].city_id);
          } else {
            setAltState(responseJson.details[0].state_name);
            setAltStateID(responseJson.details[0].state_id);
            setAltDistrict(responseJson.details[0].city_name);
            setAltDistrictID(responseJson.details[0].city_id);
          }
        } else {
          _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
          if (pinType == "permanent") {
            setState("");
            setStateID("");
            setDistrict("");
            setDistrictID("");
          } else {
            setAltState("");
            setAltStateID("");
            setAltDistrict("");
            setAltDistrictID("");
          }
        }
      }).catch(function (error) {
        setLoading(false);
        //console.log("Error:", error);
        _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
      });
    };
    var onNext = function onNext() {
      _reactNative.Keyboard.dismiss();
      if (currentStep == 2) {
        if (selectIDProof == "") {
          _reactNativeSimpleToast.default.show(t("Please select ID Proof as Aadhaar / PAN"), _reactNativeSimpleToast.default.LONG);
        } else if (selectIDProof == 1 && !aadhaarVerifed) {
          _reactNativeSimpleToast.default.show(t("Please Verify your Aadahar No."), _reactNativeSimpleToast.default.LONG);
        } else if (selectIDProof == 2 && !panVerifed) {
          _reactNativeSimpleToast.default.show(t("Please Verify your PAN No."), _reactNativeSimpleToast.default.LONG);
        } else if (fetchedDetails.name == "" && fullName == "") {
          _reactNativeSimpleToast.default.show(t("Please enter your Name as per ID proof"), _reactNativeSimpleToast.default.LONG);
        } else if (fullName != "" && regexAlp.test(fullName)) {
          _reactNativeSimpleToast.default.show(t("Name field accept only alphabets"), _reactNativeSimpleToast.default.LONG);
        } else if (fetchedDetails.gender == "" && gender == "") {
          _reactNativeSimpleToast.default.show(t("Please select your Gender as per ID proof"), _reactNativeSimpleToast.default.LONG);
        } else if (fetchedDetails.dob == "" && dob == "") {
          _reactNativeSimpleToast.default.show(t("Please select your Date of Birth as per ID proof"), _reactNativeSimpleToast.default.LONG);
        } else {
          var _scrollRef$current2;
          var crntstp = currentStep + 1;
          setCurrentStep(crntstp);
          setStepDone3(true);
          (_scrollRef$current2 = scrollRef.current) == null ? undefined : _scrollRef$current2.scrollTo({
            y: 0,
            animated: true
          });
        }
      }
    };
    var onSubmit = function onSubmit() {
      if (pincode.trim() == "") {
        _reactNativeSimpleToast.default.show(t("Please enter Permanent Pincode"), _reactNativeSimpleToast.default.LONG);
      } else if (state == "") {
        _reactNativeSimpleToast.default.show(t("State not found. Please search by Pincode"), _reactNativeSimpleToast.default.LONG);
      } else if (district == "") {
        _reactNativeSimpleToast.default.show(t("District not found. Please search by Pincode"), _reactNativeSimpleToast.default.LONG);
      }
      // else if (!sameAdress && altAdress == "") {
      //     Toast.show(t("Please enter Working Address"), Toast.LONG);
      // } else if (!sameAdress && altAdress.length < 10) {
      //     Toast.show(t("Please enter min 10 charector for working Address"), Toast.LONG);
      // } else if (!sameAdress && altPincode == "") {
      //     Toast.show(t("Please enter Working Pincode"), Toast.LONG);
      // } else if (!sameAdress && altState == "") {
      //     Toast.show(t("State not found. Please search by Pincode"), Toast.LONG);
      // } else if (!sameAdress && altDistrict == "") {
      //     Toast.show(t("District not found. Please search by Pincode"), Toast.LONG);
      // } 
      else {
        setLoading(true);
        onRegistration();
      }
    };
    onRegistration = function onRegistration() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[18]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          var formdata = new FormData();
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          formdata.append("lang_code", currentLanguage);
          formdata.append("mobile", mobileNumber);
          formdata.append("aadhaar", aadhaarNumber);
          formdata.append("pan", panNumber);
          formdata.append("name", fetchedDetails.name == "" ? fullName : fetchedDetails.name);
          formdata.append("gender", gender == "Male" ? "M" : "F");
          formdata.append("dob", fetchedDetails.dob == "" ? (0, _moment.default)(dob).format('DD-MM-YYYY') : fetchedDetails.dob);
          formdata.append("address", fetchedDetails.address && fetchedDetails.address.trim() !== "" ? fetchedDetails.address : permanentAdress);
          formdata.append("pincode", pincode);
          formdata.append("stateId", stateID);
          formdata.append("districtId", districtID);
          formdata.append("city", district);
          // formdata.append("currentSameAsPermanent", (!sameAdress ? 0 : 1));
          // formdata.append("currentAddress", altAdress);
          // formdata.append("currentPincode", altPincode);
          // formdata.append("currentState", altStateID);
          // formdata.append("currentDistrict", altDistrictID);
          // formdata.append("currentCity", altDistrict);
          formdata.append("parentId", JSON.parse(decryptData).contactId);
          formdata.append("refmobile", "");
          formdata.append("refConId", "");
          formdata.append("aadhaarFront", aadhaarFrontImage);
          formdata.append("aadhaarBack", aadhaarBackImage);
          formdata.append("panImage", panImage);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/spouse-registration/submit`, {
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
            console.log("Registration:", responseJson);
            if (responseJson.bstatus == 1) {
              setSuccessPop(true);
              // setOfficerName(responseJson.officerName);
              // setOfficerPhone(responseJson.officerNumber);
              // setOfficerType(responseJson.officerType);
              setPreApproved(responseJson.autoapproved);
            } else {
              _reactNativeSimpleToast.default.show(responseJson.message, _reactNativeSimpleToast.default.LONG);
            }
          }).catch(function (error) {
            setLoading(false);
            console.log("Error:", error);
            _reactNativeSimpleToast.default.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
          });
        }
      });
    };
    var onPrev = function onPrev() {
      var _scrollRef$current3;
      var crntstp = currentStep - 1;
      setCurrentStep(crntstp);
      if (crntstp == 1) {
        setStepDone2(false);
      } else if (crntstp == 2) {
        setStepDone3(false);
      }
      (_scrollRef$current3 = scrollRef.current) == null ? undefined : _scrollRef$current3.scrollTo({
        y: 0,
        animated: true
      });
    };
    var onOkay = function onOkay() {
      setSuccessPop(false);
      navigation.goBack();
    };
    (0, _react.useEffect)(function () {
      console.log("Fetched Address:", fetchedDetails.address);
    }, [fetchedDetails.address]);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: "#000000",
        position: 'relative',
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          backgroundColor: _MainStyle.spouseColor,
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: "5",
          paddingY: "4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            space: 4,
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
              onPress: function onPress() {
                return navigation.goBack();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "arrow-back-outline",
                size: 24,
                color: _MainStyle.lightColor
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontSemiBold,
              fontSize: "md",
              children: t("Add Spouse")
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            alignItems: "flex-end",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              alignItems: "center",
              space: 2,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                style: {
                  backgroundColor: _MainStyle.lightColor,
                  padding: 5,
                  borderRadius: 5
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                  source: _$$_REQUIRE(_dependencyMap[19]),
                  style: {
                    width: 60,
                    height: 32,
                    resizeMode: 'contain'
                  }
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              alignItems: "center",
              justifyContent: "flex-end",
              space: 1,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "person-circle-outline",
                size: 16,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                textAlign: "right",
                fontSize: "10",
                children: userId
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          backgroundColor: _MainStyle.spouseColor,
          style: {
            width: '100%',
            height: 250,
            position: 'absolute',
            top: 95,
            left: 0
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.ScrollView, {
          style: {
            position: 'relative'
          },
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
              children: t("Please add your Spouse")
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              style: {
                backgroundColor: _MainStyle.darkGrey,
                height: 1,
                marginTop: 15,
                marginBottom: 60
              },
              justifyContent: "space-between",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                height: 36,
                width: '32%',
                alignItems: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  style: [_MainStyle.MainStyle.pagibox, {
                    backgroundColor: _MainStyle.spouseColor
                  }],
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontSize: "md",
                    textAlign: "center",
                    fontWeight: "normal",
                    lineHeight: 35,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-outline",
                      size: 20
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "xs",
                  textAlign: "center",
                  fontWeight: "normal",
                  lineHeight: 16,
                  children: [t("Verify"), "\n", t("Mobile No.")]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                height: 36,
                width: '32%',
                alignItems: "center",
                children: [!stepDone2 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  style: [_MainStyle.MainStyle.pagibox, {
                    backgroundColor: _MainStyle.lightGrey
                  }],
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.darkGrey,
                    fontSize: "md",
                    textAlign: "center",
                    fontWeight: "normal",
                    lineHeight: 35,
                    children: "2"
                  })
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  style: [_MainStyle.MainStyle.pagibox, {
                    backgroundColor: _MainStyle.spouseColor
                  }],
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontSize: "md",
                    textAlign: "center",
                    fontWeight: "normal",
                    lineHeight: 35,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-outline",
                      size: 20
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "xs",
                  textAlign: "center",
                  fontWeight: "normal",
                  lineHeight: 16,
                  children: [t("Personal"), "\n", t("Information")]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                height: 36,
                width: '32%',
                alignItems: "center",
                children: [!stepDone3 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  style: [_MainStyle.MainStyle.pagibox, {
                    backgroundColor: _MainStyle.lightGrey
                  }],
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.darkGrey,
                    fontSize: "md",
                    textAlign: "center",
                    fontWeight: "normal",
                    lineHeight: 35,
                    children: "3"
                  })
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  style: [_MainStyle.MainStyle.pagibox, {
                    backgroundColor: _MainStyle.spouseColor
                  }],
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontSize: "md",
                    textAlign: "center",
                    fontWeight: "normal",
                    lineHeight: 35,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-outline",
                      size: 20
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "xs",
                  textAlign: "center",
                  fontWeight: "normal",
                  lineHeight: 16,
                  children: [t("Address"), "\n", t("Details")]
                })]
              })]
            }), currentStep == 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("Spouse's Mobile Number"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: !forMobileOTP ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    height: 43,
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    keyboardType: "number-pad",
                    maxLength: 10,
                    onChangeText: function onChangeText(text) {
                      return setMobileNumber(text);
                    },
                    placeholder: t("Please Enter Mobile Number")
                  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    value: mobileNumber,
                    backgroundColor: _MainStyle.lightGrey,
                    fontFamily: _MainStyle.fontRegular,
                    size: "md",
                    variant: "unstyled",
                    readOnly: true,
                    InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                      size: "xs",
                      style: [_MainStyle.MainStyle.solidbtn, {
                        backgroundColor: _MainStyle.darkColor,
                        height: 37,
                        marginRight: 4
                      }],
                      onPress: function onPress() {
                        return setForMobileOTP(false), setMobileNumber("");
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "close",
                        size: 18,
                        color: _MainStyle.lightColor
                      })
                    })
                  })
                })]
              }), forMobileOTP && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
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
                      fontFamily: _MainStyle.fontBold,
                      size: "xl",
                      letterSpacing: "5",
                      variant: "unstyled",
                      onChangeText: function onChangeText(text) {
                        return setOtpMobileValue(text);
                      },
                      keyboardType: "number-pad",
                      maxLength: 6
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    variant: "unstyled",
                    onPress: function onPress() {
                      return sendOtp();
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.spouseColor,
                      fontFamily: _MainStyle.fontSemiBold,
                      fontSize: "sm",
                      children: t("Resend")
                    })
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                space: 2
              })]
            }), currentStep == 2 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 5,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t("Spouse's Mobile Number"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    value: mobileNumber,
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
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.dangerColor,
                fontSize: "xs",
                fontWeight: "normal",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontWeight: "bold",
                  children: t("Note :")
                }), " ", t("Please fill  Aadhar or PAN details. This is mandatory.All auto-filled data will be fetched from KYC")]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
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
                      label: "Aadhaar",
                      value: "1"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "PAN",
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
                        backgroundColor: _MainStyle.darkColor,
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
                      backgroundColor: _MainStyle.darkColor,
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
                  maximumDate: today,
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
                })]
              })]
            }), currentStep == 3 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 5,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.spouseColor,
                fontSize: "xs",
                fontWeight: "normal",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontWeight: "bold",
                  children: t("Note :")
                }), " ", t("All auto-filled data fetched form as per Aadhaar/PAN")]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                style: {
                  marginTop: 5
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  style: {
                    color: _MainStyle.darkColor,
                    fontFamily: _MainStyle.fontBold
                  },
                  fontSize: "md",
                  children: t("Permanent Address")
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                  space: 2,
                  marginTop: 3,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      style: _MainStyle.MainStyle.lable,
                      fontSize: "xs",
                      children: [t("Address"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.dangerColor,
                        children: "*"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                      style: _MainStyle.MainStyle.inputbox,
                      children: fetchedDetails.address ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                        backgroundColor: _MainStyle.lightGrey,
                        multiline: true,
                        fontFamily: _MainStyle.fontRegular,
                        size: "md",
                        variant: "unstyled",
                        value: fetchedDetails.address,
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
                        value: permanentAdress,
                        multiline: true,
                        fontFamily: _MainStyle.fontRegular,
                        size: "md",
                        variant: "unstyled",
                        placeholder: "Please Enter Address",
                        onChangeText: function onChangeText(text) {
                          return setPermanentAdress(text);
                        }
                      })
                    })]
                  }), fetchedDetails.pinCode == "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      style: _MainStyle.MainStyle.lable,
                      fontSize: "xs",
                      children: [t("Pincode"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.dangerColor,
                        children: "*"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                      style: _MainStyle.MainStyle.inputbox,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                        value: pincode,
                        fontFamily: _MainStyle.fontRegular,
                        size: "md",
                        variant: "unstyled",
                        onChangeText: function onChangeText(text) {
                          return setPincode(text);
                        },
                        placeholder: t("Please Enter Pincode"),
                        keyboardType: "number-pad",
                        InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                          size: "xs",
                          style: [_MainStyle.MainStyle.solidbtn, {
                            backgroundColor: _MainStyle.darkColor,
                            height: 37,
                            marginRight: 4
                          }],
                          onPress: function onPress() {
                            return searchPermanentPin("permanent");
                          },
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                            name: "search",
                            size: 18,
                            color: _MainStyle.lightColor
                          })
                        })
                      })
                    })]
                  }), fetchedDetails.pinCode != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      style: _MainStyle.MainStyle.lable,
                      fontSize: "xs",
                      children: [t("Pincode"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.dangerColor,
                        children: "*"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                      style: _MainStyle.MainStyle.inputbox,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                        backgroundColor: _MainStyle.lightGrey,
                        fontFamily: _MainStyle.fontRegular,
                        size: "md",
                        variant: "unstyled",
                        value: pincode,
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
                  }), district != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      style: _MainStyle.MainStyle.lable,
                      fontSize: "xs",
                      children: [t("District"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.dangerColor,
                        children: "*"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                      style: _MainStyle.MainStyle.inputbox,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                        backgroundColor: _MainStyle.lightGrey,
                        fontFamily: _MainStyle.fontRegular,
                        size: "md",
                        variant: "unstyled",
                        value: district,
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
                  }), state != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      style: _MainStyle.MainStyle.lable,
                      fontSize: "xs",
                      children: [t("State"), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.dangerColor,
                        children: "*"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                      style: _MainStyle.MainStyle.inputbox,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                        backgroundColor: _MainStyle.lightGrey,
                        fontFamily: _MainStyle.fontRegular,
                        size: "md",
                        variant: "unstyled",
                        value: state,
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
                  })]
                })]
              })]
            }), currentStep == 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              marginTop: 5,
              children: [!forMobileOTP && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                space: 3,
                marginTop: 5,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  style: [_MainStyle.MainStyle.solidbtn, {
                    backgroundColor: _MainStyle.spouseColor
                  }],
                  onPress: function onPress() {
                    return sendOtp();
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "sm",
                    children: t("Get OTP")
                  })
                })
              }), forMobileOTP && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                marginTop: 3,
                style: [_MainStyle.MainStyle.solidbtn, {
                  backgroundColor: _MainStyle.spouseColor
                }],
                onPress: function onPress() {
                  return onVerify();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "sm",
                  children: t("Verify OTP")
                })
              })]
            }), currentStep == 2 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
              marginTop: 5,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                style: [_MainStyle.MainStyle.solidbtn, styles.fullbtn, {
                  backgroundColor: _MainStyle.spouseColor
                }],
                onPress: function onPress() {
                  return onNext();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "sm",
                  children: t("Next")
                })
              })
            }), currentStep == 3 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              marginTop: 5,
              justifyContent: "space-between",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                style: styles.halfbtn,
                variant: "unstyled",
                backgroundColor: _MainStyle.greyColor,
                borderRadius: 8,
                onPress: function onPress() {
                  return onPrev();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "xs",
                  children: t("Previous")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                style: [_MainStyle.MainStyle.solidbtn, styles.halfbtn, {
                  backgroundColor: _MainStyle.spouseColor
                }],
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
            children: ["OTP sent to Aadhaar linked number", "."]
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
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.spouseColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "sm",
                  children: t("Resend")
                })
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            marginTop: 6,
            style: [_MainStyle.MainStyle.solidbtn, {
              backgroundColor: _MainStyle.spouseColor
            }],
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
                  } : _$$_REQUIRE(_dependencyMap[20]),
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
                  } : _$$_REQUIRE(_dependencyMap[20]),
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
                  } : _$$_REQUIRE(_dependencyMap[20]),
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
            source: _$$_REQUIRE(_dependencyMap[21]),
            style: {
              width: 100,
              height: 100,
              resizeMode: 'contain',
              position: 'relative',
              marginTop: 30
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            space: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[22]),
              style: {
                width: 80,
                height: 45,
                resizeMode: 'contain'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
              style: {
                backgroundColor: _MainStyle.greyColor,
                height: 50,
                width: 2
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[19]),
              style: {
                width: 80,
                height: 45,
                resizeMode: 'contain'
              }
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            justifyContent: "center",
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkGrey,
              fontSize: "sm",
              fontFamily: _MainStyle.fontSemiBold,
              textAlign: "center",
              children: t("Thank you for registering with")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.spouseColor,
              fontSize: "sm",
              fontFamily: _MainStyle.fontBold,
              children: "Nirman Mitra 2.0"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            style: [_MainStyle.MainStyle.solidbtn, {
              backgroundColor: _MainStyle.spouseColor
            }],
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
  var _default = exports.default = AddSpouseScreen;
