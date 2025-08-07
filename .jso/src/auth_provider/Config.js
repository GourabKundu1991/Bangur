  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.secretKey = exports.hashKey = exports.URL = exports.OS_TYPE = exports.BASE_URL = exports.AccessToken = exports.APP_VERSION = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[0]);
  var OS_TYPE = exports.OS_TYPE = _reactNative.Platform.OS == 'ios' ? 'ios' : 'android';
  var APP_VERSION = exports.APP_VERSION = _reactNative.Platform.OS == 'ios' ? '1.0.0' : '1.2.3';
  var secretKey = exports.secretKey = 'BangurNirmanMitra2';

  // UAT base url
  var URL = exports.URL = "https://apisheecementuat.mjunction.in";
  var BASE_URL = exports.BASE_URL = "https://apisheecementuat.mjunction.in/api/v1";
  var AccessToken = exports.AccessToken = '+ZpBzhQiTWxAmYYJ1nxWNytDdaq2ld4lqm8Ayl+aadlWrxhDYA93VAPDVoZAgIkQif4QgsD8kn4E4M14gzPA++nAZ7WZWc2b7sGT88jKrun5k2Qk3s3+BA==';
  var hashKey = exports.hashKey = "HYVBbIEdyjkQhisEE7VP4VzVN//qb+kLy96tAtrzFLY=";

  // LIVE base url
  /* export const URL = 'https://api.shreenirmanmitra.com';
  const BASE_URL = 'https://api.shreenirmanmitra.com/api/v1';
  export const AccessToken = 'XUhnlPB9Xjc30jStjPc/6uGBtvOgkUK7B2OWjygDhRkGcq6BZkVhI7VOJ0CKHMAMAY6UChykWvhp0jISzU/XsHNzPe+0gS/q163SKN5JWS7vVB7U+8+WBA==';
  export const hashKey = 'UvVQCYbTtiOChjyEmasVWFI2arIt406Z9tmpPZSjsos='; */
