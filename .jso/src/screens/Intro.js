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
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[7]);
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _i18n = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _reactNativeSimpleToast = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[11]);
  var _apiClient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var IntroScreen = function IntroScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      versionFound = _React$useState4[0],
      setVersionFound = _React$useState4[1];
    var _React$useState5 = _react.default.useState(''),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      storeUrl = _React$useState6[0],
      setStoreUrl = _React$useState6[1];
    var _React$useState7 = _react.default.useState('Eng'),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      currentLanguage = _React$useState8[0],
      setLanguage = _React$useState8[1];
    var _React$useState9 = _react.default.useState(''),
      _React$useState0 = (0, _slicedToArray2.default)(_React$useState9, 2),
      userType = _React$useState0[0],
      setUserType = _React$useState0[1];
    (0, _react.useEffect)(function () {
      setLoading(true);
      _asyncStorage.default.getItem('language').then(function (val) {
        if (val != null) {
          setLanguage(val);
          _i18n.default.changeLanguage(val).then(function () {
            return console.log(val);
          }).catch(function (err) {
            return console.log(err);
          });
        }
      });
      var formdata = new FormData();
      formdata.append('lang_code', currentLanguage);
      formdata.append('app_ver', `${_Config.APP_VERSION}`);
      formdata.append('os_type', `${_Config.OS_TYPE}`);
      _apiClient.default.post(`${_Config.BASE_URL}/app-version-check`, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          accesstoken: `${_Config.AccessToken}`
        }
      }).then(function (response) {
        return response;
      }).then(function (responseJson) {
        setLoading(false);
        console.log('responseJson:: ', responseJson);
        if (responseJson.data.bstatus == 1) {
          if (responseJson.data.version_details.update_available == 0) {
            _asyncStorage.default.getItem('userToken').then(function (val) {
              if (val != null) {
                navigation.replace('Home');
              }
            });
          } else {
            setLoading(false);
            _asyncStorage.default.clear();
            setStoreUrl(responseJson.data.version_details.store_url);
            setVersionFound(true);
          }
        }
      }).catch(function (error) {
        //console.log('INSIDE CATCH', error);
        setLoading(false);
        if (error.toString().includes('Network request failed')) {
          Alert.alert('Secure connection error or network issue! Please try again later.');
        } else {
          //console.log('Error:', error);
          navigation.replace('Splash');
          _reactNative.BackHandler.exitApp();
        }
      });
    }, []);
    var onSaveLang = function onSaveLang(val) {
      setLanguage(val);
      _asyncStorage.default.setItem('language', val);
      _i18n.default.changeLanguage(val).then(function () {
        return setLoading(true);
      }).catch(function (err) {
        return console.log(err);
      });
      setTimeout(function () {
        setLoading(false);
      }, 500);
    };
    var onContinueForVerssion = function onContinueForVerssion() {
      _reactNative.Linking.openURL(storeUrl);
    };
    var goNext = function goNext(page, user) {
      if (userType === '') {
        _reactNativeSimpleToast.default.show(t('Please select Login As'), _reactNativeSimpleToast.default.LONG);
      } else {
        navigation.replace('Login', {
          pageName: page,
          type: user
        });
      }
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 5,
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[14]),
              style: {
                width: '100%',
                height: 400,
                resizeMode: 'cover',
                position: 'relative'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[15]),
              style: _MainStyle.MainStyle.logo
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            paddingX: 10,
            paddingY: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              textAlign: "center",
              children: t('Welcome to Nirman Mitra 2.0')
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              marginTop: "4",
              space: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t('Language'), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    height: 43,
                    selectedValue: currentLanguage,
                    onValueChange: function onValueChange(value) {
                      return onSaveLang(value);
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
                      label: "English",
                      value: "Eng"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Hindi",
                      value: "Hn"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Telugu",
                      value: "Te"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Tamil",
                      value: "Ta"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Malayalam",
                      value: "Ml"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Kannada",
                      value: "Kn"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  style: _MainStyle.MainStyle.lable,
                  fontSize: "xs",
                  children: [t('Login As'), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.dangerColor,
                    children: "*"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    height: 43,
                    selectedValue: userType,
                    onValueChange: function onValueChange(value) {
                      return setUserType(value);
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
                      label: "Contractor",
                      value: "Contractor"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Dealer",
                      value: "Dealer"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Retailer",
                      value: "Retailer"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "TSO",
                      value: "TSO"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "TTO",
                      value: "TTO"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "STH",
                      value: "STH"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 2,
                marginTop: 4,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  style: _MainStyle.MainStyle.solidbtn,
                  onPress: function onPress() {
                    return goNext('Sign In', userType);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "sm",
                    children: t('Sign In')
                  })
                }), userType == 'Contractor' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  variant: "unstyled",
                  style: _MainStyle.MainStyle.outlinebtn,
                  onPress: function onPress() {
                    return goNext('Sign Up', userType);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.baseColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "sm",
                    children: t('Sign Up')
                  })
                })]
              })]
            })]
          })]
        })
      }), versionFound && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
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
              color: "#111111",
              children: [t('Update Warning'), "!"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: [t('App need Update to the Latest Version. Please click on Update Now button to Continue'), "..."]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 150,
                borderRadius: 8,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return onContinueForVerssion();
              },
              marginY: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t('Update Now')
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
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = IntroScreen;
