(function () {
  window.browser_supports_webp = !1;
  if ("undefined" == typeof window.supported_wbp || "" === window.supported_wbp) {
    window.photoset_supports_webp = !1;
  } else {
    window.photoset_supports_webp = !!window.supported_wbp
  }
})();