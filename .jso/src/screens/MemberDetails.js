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
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var MemberDetailsScreen = function MemberDetailsScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState(""),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      memberDetails = _React$useState4[0],
      setMemberDetails = _React$useState4[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setMemberDetails(route.params.details);
        console.log(route.params.details);
      });
      return unsubscribe;
    }, []);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: "#000000",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: "View Details",
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          backgroundColor: _MainStyle.lightColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: '94%',
          alignSelf: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            space: 5,
            padding: 6,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              backgroundColor: _MainStyle.baseLightColor,
              borderRadius: 8,
              overflow: "hidden",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                space: 6,
                padding: 4,
                borderColor: _MainStyle.lightColor,
                borderBottomWidth: 4,
                alignItems: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Avatar, {
                  borderColor: _MainStyle.baseSemiColor,
                  resizeMode: "contain",
                  borderWidth: "2",
                  size: "60",
                  source: memberDetails.profile_image == "" ? _$$_REQUIRE(_dependencyMap[14]) : {
                    uri: memberDetails.profile_image
                  }
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  justifyContent: "center",
                  width: '70%',
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.baseColor,
                    fontSize: "lg",
                    fontFamily: _MainStyle.fontBold,
                    textTransform: "capitalize",
                    children: memberDetails.name
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    space: 2,
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontSemiBold,
                      children: [t("Member Id"), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      children: memberDetails.emp_id
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    space: 2,
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontSemiBold,
                      children: [t("Contact No."), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      onPress: function onPress() {
                        return _reactNative.Linking.openURL(`tel:${memberDetails.ph_number}`);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: _MainStyle.darkGrey,
                        fontSize: "xs",
                        fontFamily: _MainStyle.fontBold,
                        children: [" ", memberDetails.ph_number]
                      })
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                padding: 4,
                space: 1,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  marginBottom: 1,
                  color: _MainStyle.baseColor,
                  fontSize: "sm",
                  fontFamily: _MainStyle.fontBold,
                  children: t("Member Details")
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    width: '40%',
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontRegular,
                    children: ["Date of Registration", ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    width: '57%',
                    color: _MainStyle.darkColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    textAlign: "right",
                    children: (0, _moment.default)(memberDetails.DateOfRegistration).format('DD-MM-YYYY')
                  })]
                }), memberDetails.aadnarNumber != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    width: '40%',
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontRegular,
                    children: ["Aadhaar No.", ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    width: '57%',
                    color: _MainStyle.darkColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    textAlign: "right",
                    children: memberDetails.aadnarNumber
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    width: '40%',
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontRegular,
                    children: ["PAN No.", ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    width: '57%',
                    color: _MainStyle.darkColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    textAlign: "right",
                    children: memberDetails.panNumber
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    width: '40%',
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontRegular,
                    children: ["Date of Birth", ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    width: '57%',
                    color: _MainStyle.darkColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    textAlign: "right",
                    children: (0, _moment.default)(memberDetails.dob).format('DD-MM-YYYY')
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  space: 1,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["Gender", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      textAlign: "right",
                      children: memberDetails.gender
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["Address", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      textAlign: "right",
                      children: memberDetails.line1
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["Pincode", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      textAlign: "right",
                      children: memberDetails.post_code
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["State", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      textAlign: "right",
                      children: memberDetails.stateName
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["District", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      textAlign: "right",
                      children: memberDetails.districtName
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["City", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      textAlign: "right",
                      children: memberDetails.city
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["Registered By", ":"]
                    }), memberDetails.selfRegistered == 0 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      textAlign: "right",
                      children: [memberDetails.UploadedByName, " (", memberDetails.UploadedByExternalId, ")"]
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      textAlign: "right",
                      children: "Self"
                    })]
                  }), memberDetails.is_approved != 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    children: [memberDetails.is_approved == 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["Approved By", ":"]
                    }), memberDetails.is_approved == 2 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      width: '40%',
                      color: _MainStyle.darkGrey,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontRegular,
                      children: ["Rejected By", ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: '57%',
                      color: _MainStyle.darkColor,
                      fontSize: "xs",
                      fontFamily: _MainStyle.fontBold,
                      textAlign: "right",
                      children: memberDetails.verifiedByName
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 1,
                padding: 4,
                borderColor: _MainStyle.lightColor,
                borderTopWidth: 4,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  marginBottom: 1,
                  color: _MainStyle.baseColor,
                  fontSize: "sm",
                  fontFamily: _MainStyle.fontBold,
                  children: t("Dealer Details")
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    width: '40%',
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontRegular,
                    children: ["Name", ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    width: '57%',
                    color: _MainStyle.darkColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    textAlign: "right",
                    children: memberDetails.dealerName
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    width: '40%',
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontRegular,
                    children: ["ID", ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    width: '57%',
                    color: _MainStyle.darkColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    textAlign: "right",
                    children: memberDetails.dealerId
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    width: '40%',
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontRegular,
                    children: ["Contact No.", ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    width: '57%',
                    color: _MainStyle.darkColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    textAlign: "right",
                    children: memberDetails.dealerPhone
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    width: '40%',
                    color: _MainStyle.darkGrey,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontRegular,
                    children: ["District", ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    width: '57%',
                    color: _MainStyle.darkColor,
                    fontSize: "xs",
                    fontFamily: _MainStyle.fontBold,
                    textAlign: "right",
                    children: memberDetails.dealerDistrictName
                  })]
                })]
              })]
            })
          })
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
  var _default = exports.default = MemberDetailsScreen;
