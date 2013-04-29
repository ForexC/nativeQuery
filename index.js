// Map over $ in case of overwrite
var _$ = window.$

// Define a local copy of nativeQuery
var nativeQuery = function (selector) {
  return document.querySelectorAll(selector)
}

nativeQuery.prototype = {
  noConflict: function () {
    if (window.$ === nativeQuery) {
      window.$ = _$
    }

    return nativeQuery
  }
}
