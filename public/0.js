(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/ShowQuestion.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forum/ShowQuestion.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShowQuestion",
  data: function data() {
    return {
      own: User.own(this.question.user_id)
    };
  },
  props: {
    question: {
      //   type: Object,
      "default": {}
    }
  },
  computed: {
    body: function body() {
      return md.parse(this.question.body);
    }
  },
  methods: {
    destroy: function destroy() {
      var _this = this;

      axios["delete"]("/api/question/".concat(this.question.slug)).then(function (res) {
        return _this.$router.push('/forum');
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    },
    edit: function edit() {
      EventBus.$emit('startEditing');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/editQuestion.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forum/editQuestion.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: "EditQuestion",
      form: {
        title: null,
        body: null
      }
    };
  },
  components: {
    VueSimplemde: vue_simplemde__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    question: {
      "default": {}
    }
  },
  created: function created() {
    this.form = this.question;
  },
  methods: {
    cancel: function cancel() {
      EventBus.$emit('cancelEditing');
    },
    update: function update() {
      var _this = this;

      axios.put("/api/question/".concat(this.form.slug), this.form).then(function (res) {
        return _this.cancel();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/read.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forum/read.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowQuestion */ "./resources/js/components/forum/ShowQuestion.vue");
/* harmony import */ var _editQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editQuestion */ "./resources/js/components/forum/editQuestion.vue");
/* harmony import */ var _reply_Replies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reply/Replies */ "./resources/js/components/reply/Replies.vue");
/* harmony import */ var _reply_NewReply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reply/NewReply */ "./resources/js/components/reply/NewReply.vue");
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
  data: function data() {
    return {
      question: null,
      editing: false
    };
  },
  created: function created() {
    this.listen();
    this.getQuestion();
  },
  components: {
    ShowQuestion: _ShowQuestion__WEBPACK_IMPORTED_MODULE_0__["default"],
    EditQuestion: _editQuestion__WEBPACK_IMPORTED_MODULE_1__["default"],
    Replies: _reply_Replies__WEBPACK_IMPORTED_MODULE_2__["default"],
    NewReply: _reply_NewReply__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    listen: function listen() {
      var _this = this;

      EventBus.$on("startEditing", function () {
        _this.editing = true;
      });
      EventBus.$on("cancelEditing", function () {
        _this.editing = false;
      });
    },
    getQuestion: function getQuestion() {
      var _this2 = this;

      axios.get("/api/question/".concat(this.$route.params.slug)).then(function (res) {
        return _this2.question = res.data.data;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/EditReply.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reply/EditReply.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      body: null
    };
  },
  props: {
    reply: {
      "default": {}
    }
  },
  components: {
    VueSimplemde: vue_simplemde__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    update: function update() {
      var _this = this;

      axios.put("/api/question/".concat(this.reply.question_slug, "/reply/").concat(this.reply.id), {
        body: this.body
      }).then(function () {
        EventBus.$emit("updateReply", _this.body);

        _this.cancel();
      });
    },
    cancel: function cancel() {
      EventBus.$emit("cancelEditing");
    }
  },
  created: function created() {
    this.body = this.reply.body;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/NewReply.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reply/NewReply.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      body: null
    };
  },
  props: {
    question_slug: {
      "default": null
    }
  },
  components: {
    VueSimplemde: vue_simplemde__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      axios.post("/api/question/".concat(this.question_slug, "/reply"), {
        body: this.body
      }).then(function (res) {
        _this.body = '';
        EventBus.$emit('NewReply', res.data.reply);
        window.scrollTo(0, 0);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/Replies.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reply/Replies.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reply */ "./resources/js/components/reply/Reply.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Replies",
  data: function data() {
    return {
      content: this.question.replies
    };
  },
  props: {
    question: {
      "default": {}
    }
  },
  components: {
    Reply: _Reply__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    listen: function listen() {
      var _this = this;

      EventBus.$on('NewReply', function (reply) {
        _this.content.unshift(reply);
      });
      EventBus.$on('deleteReply', function (index) {
        axios["delete"]("/api/question/".concat(_this.question.slug, "/reply/").concat(parseInt(_this.content[index].id))).then(function (res) {
          return _this.content.splice(index, 1);
        });
      });
    }
  },
  created: function created() {
    this.listen();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/Reply.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reply/Reply.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditReply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditReply */ "./resources/js/components/reply/EditReply.vue");
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
  name: "Reply",
  data: function data() {
    return {
      editing: false,
      content: null
    };
  },
  components: {
    EditReply: _EditReply__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    reply: {
      "default": {}
    },
    index: null
  },
  methods: {
    edit: function edit() {
      this.editing = true;
    },
    destroy: function destroy() {
      EventBus.$emit("deleteReply", this.index);
    },
    listen: function listen() {
      var _this = this;

      EventBus.$on("cancelEditing", function () {
        _this.editing = false;
      });
    }
  },
  computed: {
    own: function own() {
      return User.own(this.reply.user_id);
    },
    body: function body() {
      return md.parse(this.content);
    }
  },
  created: function created() {
    this.listen();
    this.content = this.reply.body;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/ShowQuestion.vue?vue&type=template&id=f2961d48&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forum/ShowQuestion.vue?vue&type=template&id=f2961d48&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-container",
        [
          _c("div", [
            _c("div", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.question.title))
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "grey--text",
                staticStyle: { "font-size": "12px" }
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.question.user) +
                    " |\n        posted " +
                    _vm._s(_vm.question.created_at) +
                    "\n      "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-btn", { attrs: { color: "teal", dark: "" } }, [
            _vm._v(_vm._s(_vm.question.reply_count) + " replies")
          ]),
          _vm._v(" "),
          _c("v-card-text", { domProps: { innerHTML: _vm._s(_vm.body) } }),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _vm.own
            ? _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "", small: "" } },
                    [
                      _c(
                        "v-icon",
                        { attrs: { color: "orange" }, on: { click: _vm.edit } },
                        [_vm._v("edit")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { icon: "", small: "" } },
                    [
                      _c(
                        "v-icon",
                        { attrs: { color: "red" }, on: { click: _vm.destroy } },
                        [_vm._v("delete")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/editQuestion.vue?vue&type=template&id=3665d66e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forum/editQuestion.vue?vue&type=template&id=3665d66e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { attrs: { fluid: "" } },
    [
      _c(
        "v-card",
        [
          _c(
            "v-form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.update($event)
                }
              }
            },
            [
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
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    { attrs: { small: "", type: "submit" } },
                    [
                      _c("v-icon", { attrs: { color: "teal" } }, [
                        _vm._v("save")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", small: "" },
                      on: { click: _vm.cancel }
                    },
                    [_c("v-icon", [_vm._v("cancel")])],
                    1
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/read.vue?vue&type=template&id=9b6aef62&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forum/read.vue?vue&type=template&id=9b6aef62&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _vm.question
    ? _c(
        "div",
        [
          _vm.editing
            ? _c("edit-question", { attrs: { question: _vm.question } })
            : _c("show-question", { attrs: { question: _vm.question } }),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c("replies", { attrs: { question: _vm.question } }),
              _vm._v(" "),
              _c("new-reply", { attrs: { question_slug: _vm.question.slug } })
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/EditReply.vue?vue&type=template&id=57d89500&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reply/EditReply.vue?vue&type=template&id=57d89500&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "mt-4" },
    [
      _c("vue-simplemde", {
        model: {
          value: _vm.body,
          callback: function($$v) {
            _vm.body = $$v
          },
          expression: "body"
        }
      }),
      _vm._v(" "),
      _c(
        "v-btn",
        { attrs: { icon: "", small: "" }, on: { click: _vm.update } },
        [_c("v-icon", { attrs: { color: "orange" } }, [_vm._v("save")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        { attrs: { icon: "", small: "" }, on: { click: _vm.cancel } },
        [_c("v-icon", { attrs: { color: "red" } }, [_vm._v("cancel")])],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/NewReply.vue?vue&type=template&id=3b33865a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reply/NewReply.vue?vue&type=template&id=3b33865a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "mt-4" },
    [
      _c("vue-simplemde", {
        model: {
          value: _vm.body,
          callback: function($$v) {
            _vm.body = $$v
          },
          expression: "body"
        }
      }),
      _vm._v(" "),
      _c("v-btn", { attrs: { color: "success" }, on: { click: _vm.submit } }, [
        _vm._v("\n      Reply\n  ")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/Replies.vue?vue&type=template&id=50be1df0&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reply/Replies.vue?vue&type=template&id=50be1df0&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "div",
    _vm._l(_vm.content, function(reply, index) {
      return _c("reply", {
        key: reply.id,
        attrs: { reply: reply, index: index }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/Reply.vue?vue&type=template&id=75afabea&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reply/Reply.vue?vue&type=template&id=75afabea&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "mt-3" },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c(
              "span",
              {
                staticClass: "grey--text",
                staticStyle: { "font-size": "14px" }
              },
              [
                _vm._v(
                  _vm._s(_vm.reply.user) +
                    " | posted " +
                    _vm._s(_vm.reply.created_at)
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _vm.editing
            ? _c("edit-reply", { attrs: { reply: _vm.reply } })
            : _c("v-card-text", {
                staticStyle: { color: "black" },
                domProps: { innerHTML: _vm._s(_vm.body) }
              }),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _vm.own
            ? _c("v-card-actions", [
                !_vm.editing
                  ? _c(
                      "div",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", small: "" },
                            on: { click: _vm.edit }
                          },
                          [
                            _c("v-icon", { attrs: { color: "orange" } }, [
                              _vm._v("edit")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", small: "" },
                            on: { click: _vm.destroy }
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
                  : _vm._e()
              ])
            : _vm._e()
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

/***/ "./resources/js/components/forum/ShowQuestion.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/forum/ShowQuestion.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowQuestion_vue_vue_type_template_id_f2961d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowQuestion.vue?vue&type=template&id=f2961d48&scoped=true& */ "./resources/js/components/forum/ShowQuestion.vue?vue&type=template&id=f2961d48&scoped=true&");
/* harmony import */ var _ShowQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowQuestion.vue?vue&type=script&lang=js& */ "./resources/js/components/forum/ShowQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowQuestion_vue_vue_type_template_id_f2961d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowQuestion_vue_vue_type_template_id_f2961d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2961d48",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forum/ShowQuestion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forum/ShowQuestion.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/forum/ShowQuestion.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowQuestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/ShowQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forum/ShowQuestion.vue?vue&type=template&id=f2961d48&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/forum/ShowQuestion.vue?vue&type=template&id=f2961d48&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowQuestion_vue_vue_type_template_id_f2961d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowQuestion.vue?vue&type=template&id=f2961d48&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/ShowQuestion.vue?vue&type=template&id=f2961d48&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowQuestion_vue_vue_type_template_id_f2961d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowQuestion_vue_vue_type_template_id_f2961d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forum/editQuestion.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/forum/editQuestion.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editQuestion_vue_vue_type_template_id_3665d66e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editQuestion.vue?vue&type=template&id=3665d66e&scoped=true& */ "./resources/js/components/forum/editQuestion.vue?vue&type=template&id=3665d66e&scoped=true&");
/* harmony import */ var _editQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editQuestion.vue?vue&type=script&lang=js& */ "./resources/js/components/forum/editQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editQuestion_vue_vue_type_template_id_3665d66e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editQuestion_vue_vue_type_template_id_3665d66e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3665d66e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forum/editQuestion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forum/editQuestion.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/forum/editQuestion.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./editQuestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/editQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forum/editQuestion.vue?vue&type=template&id=3665d66e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/forum/editQuestion.vue?vue&type=template&id=3665d66e&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editQuestion_vue_vue_type_template_id_3665d66e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./editQuestion.vue?vue&type=template&id=3665d66e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/editQuestion.vue?vue&type=template&id=3665d66e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editQuestion_vue_vue_type_template_id_3665d66e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editQuestion_vue_vue_type_template_id_3665d66e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forum/read.vue":
/*!************************************************!*\
  !*** ./resources/js/components/forum/read.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _read_vue_vue_type_template_id_9b6aef62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read.vue?vue&type=template&id=9b6aef62&scoped=true& */ "./resources/js/components/forum/read.vue?vue&type=template&id=9b6aef62&scoped=true&");
/* harmony import */ var _read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read.vue?vue&type=script&lang=js& */ "./resources/js/components/forum/read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _read_vue_vue_type_template_id_9b6aef62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _read_vue_vue_type_template_id_9b6aef62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9b6aef62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forum/read.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forum/read.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/forum/read.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./read.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forum/read.vue?vue&type=template&id=9b6aef62&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/forum/read.vue?vue&type=template&id=9b6aef62&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_9b6aef62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./read.vue?vue&type=template&id=9b6aef62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/read.vue?vue&type=template&id=9b6aef62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_9b6aef62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_read_vue_vue_type_template_id_9b6aef62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/reply/EditReply.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/reply/EditReply.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditReply_vue_vue_type_template_id_57d89500_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditReply.vue?vue&type=template&id=57d89500&scoped=true& */ "./resources/js/components/reply/EditReply.vue?vue&type=template&id=57d89500&scoped=true&");
/* harmony import */ var _EditReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditReply.vue?vue&type=script&lang=js& */ "./resources/js/components/reply/EditReply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditReply_vue_vue_type_template_id_57d89500_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditReply_vue_vue_type_template_id_57d89500_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57d89500",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reply/EditReply.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reply/EditReply.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/reply/EditReply.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditReply.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/EditReply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reply/EditReply.vue?vue&type=template&id=57d89500&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/reply/EditReply.vue?vue&type=template&id=57d89500&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReply_vue_vue_type_template_id_57d89500_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditReply.vue?vue&type=template&id=57d89500&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/EditReply.vue?vue&type=template&id=57d89500&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReply_vue_vue_type_template_id_57d89500_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReply_vue_vue_type_template_id_57d89500_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/reply/NewReply.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/reply/NewReply.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewReply_vue_vue_type_template_id_3b33865a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewReply.vue?vue&type=template&id=3b33865a&scoped=true& */ "./resources/js/components/reply/NewReply.vue?vue&type=template&id=3b33865a&scoped=true&");
/* harmony import */ var _NewReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewReply.vue?vue&type=script&lang=js& */ "./resources/js/components/reply/NewReply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewReply_vue_vue_type_template_id_3b33865a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewReply_vue_vue_type_template_id_3b33865a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b33865a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reply/NewReply.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reply/NewReply.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/reply/NewReply.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewReply.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/NewReply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reply/NewReply.vue?vue&type=template&id=3b33865a&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/reply/NewReply.vue?vue&type=template&id=3b33865a&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReply_vue_vue_type_template_id_3b33865a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewReply.vue?vue&type=template&id=3b33865a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/NewReply.vue?vue&type=template&id=3b33865a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReply_vue_vue_type_template_id_3b33865a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReply_vue_vue_type_template_id_3b33865a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/reply/Replies.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/reply/Replies.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Replies_vue_vue_type_template_id_50be1df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replies.vue?vue&type=template&id=50be1df0&scoped=true& */ "./resources/js/components/reply/Replies.vue?vue&type=template&id=50be1df0&scoped=true&");
/* harmony import */ var _Replies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Replies.vue?vue&type=script&lang=js& */ "./resources/js/components/reply/Replies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Replies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Replies_vue_vue_type_template_id_50be1df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Replies_vue_vue_type_template_id_50be1df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "50be1df0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reply/Replies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reply/Replies.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/reply/Replies.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Replies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Replies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/Replies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Replies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reply/Replies.vue?vue&type=template&id=50be1df0&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/reply/Replies.vue?vue&type=template&id=50be1df0&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Replies_vue_vue_type_template_id_50be1df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Replies.vue?vue&type=template&id=50be1df0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/Replies.vue?vue&type=template&id=50be1df0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Replies_vue_vue_type_template_id_50be1df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Replies_vue_vue_type_template_id_50be1df0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/reply/Reply.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/reply/Reply.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reply_vue_vue_type_template_id_75afabea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reply.vue?vue&type=template&id=75afabea&scoped=true& */ "./resources/js/components/reply/Reply.vue?vue&type=template&id=75afabea&scoped=true&");
/* harmony import */ var _Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reply.vue?vue&type=script&lang=js& */ "./resources/js/components/reply/Reply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reply_vue_vue_type_template_id_75afabea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reply_vue_vue_type_template_id_75afabea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75afabea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reply/Reply.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reply/Reply.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/reply/Reply.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reply.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/Reply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reply/Reply.vue?vue&type=template&id=75afabea&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/reply/Reply.vue?vue&type=template&id=75afabea&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_75afabea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reply.vue?vue&type=template&id=75afabea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reply/Reply.vue?vue&type=template&id=75afabea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_75afabea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_75afabea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);