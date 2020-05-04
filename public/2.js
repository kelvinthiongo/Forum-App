(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/CreateCategory.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/CreateCategory.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "CreateCategory",
  data: function data() {
    return {
      form: {
        name: null
      },
      categories: null,
      editSlug: null
    };
  },
  created: function created() {
    var _this = this;

    if (!User.admin()) {
      this.$router.push('/forum');
    }

    axios.get("/api/category").then(function (res) {
      return _this.categories = res.data.data;
    });
  },
  methods: {
    submit: function submit() {
      this.editSlug ? this.update() : this.create();
    },
    create: function create() {
      var _this2 = this;

      axios.post("/api/category", this.form).then(function (res) {
        _this2.categories.unshift(res.data);

        _this2.form.name = null;
      });
    },
    update: function update() {
      var _this3 = this;

      axios.put("/api/category/".concat(this.editSlug), this.form).then(function (res) {
        _this3.categories.unshift(res.data);

        _this3.form.name = null;
      });
    },
    destroy: function destroy(slug, index) {
      var _this4 = this;

      axios["delete"]("/api/category/".concat(slug)).then(function (res) {
        return _this4.categories.splice(index, 1);
      });
    },
    edit: function edit(index) {
      this.form.name = this.categories[index].name;
      this.editSlug = this.categories[index].slug;
      this.categories.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/CreateCategory.vue?vue&type=template&id=3fe79570&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/CreateCategory.vue?vue&type=template&id=3fe79570&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
              return _vm.submit($event)
            }
          }
        },
        [
          _c("v-text-field", {
            attrs: { label: "Category Name", type: "text", required: "" },
            model: {
              value: _vm.form.name,
              callback: function($$v) {
                _vm.$set(_vm.form, "name", $$v)
              },
              expression: "form.name"
            }
          }),
          _vm._v(" "),
          _vm.editSlug
            ? _c("v-btn", { attrs: { color: "pink", type: "submit" } }, [
                _vm._v("Update")
              ])
            : _c("v-btn", { attrs: { color: "teal", type: "submit" } }, [
                _vm._v("Create")
              ])
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mx-auto", attrs: { tile: "" } },
        [
          _c(
            "v-toolbar",
            { attrs: { color: "indigo", dark: "", dense: "", "mt-2": "" } },
            [_c("v-toolbar-title", [_vm._v("Categories")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list",
            [
              _c(
                "v-list-item-group",
                { attrs: { color: "primary" } },
                _vm._l(_vm.categories, function(category, index) {
                  return _c(
                    "div",
                    { key: category.slug },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-action",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "", small: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.edit(index)
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { color: "orange" } }, [
                                    _vm._v("edit")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(category.name))
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "", small: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.destroy(category.slug, index)
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { color: "red" } }, [
                                    _vm._v("delete")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider")
                    ],
                    1
                  )
                }),
                0
              )
            ],
            1
          )
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

/***/ "./resources/js/components/category/CreateCategory.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/category/CreateCategory.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateCategory_vue_vue_type_template_id_3fe79570_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCategory.vue?vue&type=template&id=3fe79570&scoped=true& */ "./resources/js/components/category/CreateCategory.vue?vue&type=template&id=3fe79570&scoped=true&");
/* harmony import */ var _CreateCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/category/CreateCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateCategory_vue_vue_type_template_id_3fe79570_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateCategory_vue_vue_type_template_id_3fe79570_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3fe79570",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/category/CreateCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/category/CreateCategory.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/category/CreateCategory.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/CreateCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/category/CreateCategory.vue?vue&type=template&id=3fe79570&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/category/CreateCategory.vue?vue&type=template&id=3fe79570&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCategory_vue_vue_type_template_id_3fe79570_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCategory.vue?vue&type=template&id=3fe79570&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/CreateCategory.vue?vue&type=template&id=3fe79570&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCategory_vue_vue_type_template_id_3fe79570_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCategory_vue_vue_type_template_id_3fe79570_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);