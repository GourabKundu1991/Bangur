  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _nativeBase = _$$_REQUIRE(_dependencyMap[1]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[2]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[5]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[6]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[8]);
  function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
  var FooterComponents = function FooterComponents(_ref) {
    var navigation = _ref.navigation,
      component = _ref.component,
      cartcount = _ref.cartcount,
      canredeem = _ref.canredeem;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
      children: [component == "TSO" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
        backgroundColor: _MainStyle.lightColor,
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          width: "50%",
          backgroundColor: _MainStyle.baseColor,
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingX: "5",
          paddingY: "4",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 45,
          paddingRight: 8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('RegisterMember', {
                pageTitle: "Register Member"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "person-add-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("Register Member")
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('ViewMember', {
                pageTitle: "View Member"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "people-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("View Member")
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          width: "50%",
          backgroundColor: _MainStyle.baseColor,
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingX: "5",
          paddingY: "4",
          borderTopLeftRadius: 45,
          borderTopRightRadius: 15,
          paddingLeft: 8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('TransactionApprovals', {
                pageTitle: "Transaction Approvals"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "bag-check-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("Trans. Approval")
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('ViewTransaction', {
                pageTitle: "View Transaction"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "reader-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("View Trans.")
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          onPress: function onPress() {
            return navigation.replace('Home');
          },
          backgroundColor: _MainStyle.baseColor,
          style: {
            position: 'absolute',
            top: -5,
            left: '44%',
            padding: 8,
            borderRadius: 30,
            borderColor: _MainStyle.greyColor,
            borderWidth: 5
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "home-outline",
            size: 20,
            color: _MainStyle.lightColor
          })
        })]
      }), component == "Influencer" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
        backgroundColor: _MainStyle.lightColor,
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          width: "50%",
          backgroundColor: _MainStyle.baseColor,
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingX: "5",
          paddingY: "4",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 45,
          paddingRight: 8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('AddPurchase', {
                pageTitle: "Add Purchase"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "bag-add-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("Add Purchase")
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('Transaction', {
                pageTitle: "Transaction"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "repeat-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("Transaction")
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          width: "50%",
          backgroundColor: _MainStyle.baseColor,
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingX: "5",
          paddingY: "4",
          borderTopLeftRadius: 45,
          borderTopRightRadius: 15,
          paddingLeft: 8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('MyPoints', {
                pageTitle: "My Points"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "sparkles-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("My Points")
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('MyCart', {
                pageTitle: "My Cart"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
                position: "relative",
                alignItems: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "cart-outline",
                  size: 24,
                  color: _MainStyle.lightColor
                }), cartcount > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Badge, {
                  colorScheme: "red",
                  rounded: "full",
                  variant: "solid",
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                  zIndex: 1,
                  minWidth: "16px"
                  // height="16px"
                  ,
                  alignItems: "center",
                  justifyContent: "center",
                  _text: {
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "bold"
                  },
                  children: cartcount
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: [t("My Cart"), " ", canredeem]
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          onPress: function onPress() {
            return navigation.replace('Home');
          },
          backgroundColor: _MainStyle.baseColor,
          style: {
            position: 'absolute',
            top: -5,
            left: '44%',
            padding: 8,
            borderRadius: 30,
            borderColor: _MainStyle.greyColor,
            borderWidth: 5
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "home-outline",
            size: 20,
            color: _MainStyle.lightColor
          })
        })]
      }), component == "Dealer" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
        backgroundColor: _MainStyle.lightColor,
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          width: "50%",
          backgroundColor: _MainStyle.baseColor,
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingX: "5",
          paddingY: "4",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 45,
          paddingRight: 8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('ViewMember', {
                pageTitle: "My Contrators"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "people-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("My Contrators")
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('AddContractors', {
                pageTitle: "Add Contrator"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "person-add-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("Add Contarctor")
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          width: "50%",
          backgroundColor: _MainStyle.baseColor,
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingX: "5",
          paddingY: "4",
          borderTopLeftRadius: 45,
          borderTopRightRadius: 15,
          paddingLeft: 8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('ViewTransaction', {
                pageTitle: "View Transaction"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "reader-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("View Trans.")
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('AllocateLifting', {
                pageTitle: "Allocate Lifting"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "bag-add-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("Allocate Lifting")
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          onPress: function onPress() {
            return navigation.replace('Home');
          },
          backgroundColor: _MainStyle.baseColor,
          style: {
            position: 'absolute',
            top: -5,
            left: '44%',
            padding: 8,
            borderRadius: 30,
            borderColor: _MainStyle.greyColor,
            borderWidth: 5
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "home-outline",
            size: 20,
            color: _MainStyle.lightColor
          })
        })]
      }), (component == "TTO" || component == "STH") && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
        backgroundColor: _MainStyle.lightColor,
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          width: "50%",
          backgroundColor: _MainStyle.baseColor,
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingX: "5",
          paddingY: "4",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 45,
          paddingRight: 8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('RegistrationApprovals', {
                pageTitle: "Registration Approvals"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "shield-checkmark-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("Regist. Approvals")
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('ViewMember', {
                pageTitle: "View Member"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "people-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("View Member")
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          width: "50%",
          backgroundColor: _MainStyle.baseColor,
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingX: "5",
          paddingY: "4",
          borderTopLeftRadius: 45,
          borderTopRightRadius: 15,
          paddingLeft: 8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('TransactionApprovals', {
                pageTitle: "Transaction Approvals"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "bag-check-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("Trans. Approval")
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return navigation.navigate('ViewTransaction', {
                pageTitle: "View Transaction"
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "reader-outline",
                size: 24,
                color: _MainStyle.lightColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontSize: "8",
                fontFamily: _MainStyle.fontRegular,
                children: t("View Trans.")
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          onPress: function onPress() {
            return navigation.replace('Home');
          },
          backgroundColor: _MainStyle.baseColor,
          style: {
            position: 'absolute',
            top: -5,
            left: '44%',
            padding: 8,
            borderRadius: 30,
            borderColor: _MainStyle.greyColor,
            borderWidth: 5
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "home-outline",
            size: 20,
            color: _MainStyle.lightColor
          })
        })]
      })]
    });
  };
  var _default = exports.default = FooterComponents;
