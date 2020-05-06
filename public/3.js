(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forum/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_simplemde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-simplemde */ "./node_modules/vue-simplemde/src/index.vue");
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
  name: "Create",
  data: function data() {
    return {
      form: {
        title: null,
        category_id: null,
        body: null
      },
      categories: {},
      errors: {}
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/category").then(function (res) {
      _this.categories = res.data.data;
    });
  },
  methods: {
    create: function create() {
      var _this2 = this;

      axios.post("/api/question", this.form).then(function (res) {
        return _this2.$router.push(res.data.path);
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
        Exception.handleError(error);
      });
    }
  },
  components: {
    VueSimplemde: vue_simplemde__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    disabled: function disabled() {
      return !(this.form.title && this.form.body && this.form.category_id);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/create.vue?vue&type=template&id=0fa92f16&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forum/create.vue?vue&type=template&id=0fa92f16& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-container",
    [
      _c(
        "v-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.create($event)
            }
          }
        },
        [
          _vm.errors.title
            ? _c("span", { staticClass: "red--text" }, [
                _vm._v(_vm._s(_vm.errors.title[0]))
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { label: "Title", type: "text", required: "" },
            model: {
              value: _vm.form.title,
              callback: function($$v) {
                _vm.$set(_vm.form, "title", $$v)
              },
              expression: "form.title"
            }
          }),
          _vm._v(" "),
          _vm.errors.category_id
            ? _c("span", { staticClass: "red--text" }, [
                _vm._v(_vm._s(_vm.errors.category_id[0]))
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              items: _vm.categories,
              "item-text": "name",
              "item-value": "id",
              label: "Category",
              autocomplete: ""
            },
            model: {
              value: _vm.form.category_id,
              callback: function($$v) {
                _vm.$set(_vm.form, "category_id", $$v)
              },
              expression: "form.category_id"
            }
          }),
          _vm._v(" "),
          _vm.errors.body
            ? _c("span", { staticClass: "red--text" }, [
                _vm._v(_vm._s(_vm.errors.body[0]))
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("vue-simplemde", {
            model: {
              value: _vm.form.body,
              callback: function($$v) {
                _vm.$set(_vm.form, "body", $$v)
              },
              expression: "form.body"
            }
          }),
          _vm._v(" "),
          _c("v-btn", { attrs: { color: "success", type: "submit" } }, [
            _vm._v("Create")
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/forum/create.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/forum/create.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_0fa92f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=0fa92f16& */ "./resources/js/components/forum/create.vue?vue&type=template&id=0fa92f16&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/forum/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_0fa92f16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_0fa92f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forum/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forum/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/forum/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forum/create.vue?vue&type=template&id=0fa92f16&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/forum/create.vue?vue&type=template&id=0fa92f16& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_0fa92f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=0fa92f16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/create.vue?vue&type=template&id=0fa92f16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_0fa92f16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_0fa92f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);