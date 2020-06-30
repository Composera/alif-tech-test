(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/cupboards/cupboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/cupboards/cupboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainPage',
  mounted: function mounted() {},
  computed: {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/cupboards/cupboard.vue?vue&type=template&id=1fd2e615&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/cupboards/cupboard.vue?vue&type=template&id=1fd2e615& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c(
            "li",
            { staticClass: "breadcrumb-item" },
            [
              _c("router-link", { attrs: { to: { name: "main" } } }, [
                _vm._v("Главная")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [_vm._v("Шкаф")]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" })
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-4 mb-3" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("h5", { staticClass: "card-title" }),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary",
                attrs: { to: { name: "main" } }
              },
              [_vm._v("Подробнее")]
            ),
            _vm._v(" "),
            _c("button", { staticClass: "btn btn-danger" }, [_vm._v("Удалить")])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-12 d-flex justify-content-between" },
      [
        _c("h1", [_vm._v("Шкафы")]),
        _vm._v(" "),
        _c("button", { staticClass: "btn" }, [_vm._v("Обновить")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/cupboards/cupboard.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/cupboards/cupboard.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cupboard_vue_vue_type_template_id_1fd2e615___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cupboard.vue?vue&type=template&id=1fd2e615& */ "./resources/js/pages/cupboards/cupboard.vue?vue&type=template&id=1fd2e615&");
/* harmony import */ var _cupboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cupboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/cupboards/cupboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cupboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cupboard_vue_vue_type_template_id_1fd2e615___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cupboard_vue_vue_type_template_id_1fd2e615___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/cupboards/cupboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/cupboards/cupboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/cupboards/cupboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cupboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cupboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/cupboards/cupboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cupboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/cupboards/cupboard.vue?vue&type=template&id=1fd2e615&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/cupboards/cupboard.vue?vue&type=template&id=1fd2e615& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cupboard_vue_vue_type_template_id_1fd2e615___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./cupboard.vue?vue&type=template&id=1fd2e615& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/cupboards/cupboard.vue?vue&type=template&id=1fd2e615&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cupboard_vue_vue_type_template_id_1fd2e615___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cupboard_vue_vue_type_template_id_1fd2e615___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);