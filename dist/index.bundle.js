"use strict";
(self["webpackChunktodolist_project"] = self["webpackChunktodolist_project"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data.js */ "./src/modules/data.js");


var storage = new _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"]('tasks');
var data = new _modules_data_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
data.setTasks(storage.loadData());
window.addEventListener('beforeunload', function () {
  storage.saveData(data.getTasks());
});

// import renderTasks from './modules/data.js';

// window.addEventListener('load', renderTasks);

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _tasks = /*#__PURE__*/new WeakMap();
var Data = /*#__PURE__*/function () {
  function Data() {
    var _this = this;
    _classCallCheck(this, Data);
    _classPrivateFieldInitSpec(this, _tasks, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "addData", function () {
      var inputField = document.querySelector('.input-field textarea');
      inputField.addEventListener('keyup', function (e) {
        var inputVal = inputField.value.trim();
        if (e.key === 'Enter' && inputVal.length > 0) {
          var newTask = {
            description: inputVal,
            completed: false,
            index: _classPrivateFieldGet(_this, _tasks).length
          };
          _classPrivateFieldGet(_this, _tasks).push(newTask);
          _this.renderTasks();
          inputField.value = '';
        }
      });
    });
    _defineProperty(this, "readData", function () {
      return _classPrivateFieldGet(_this, _tasks);
    });
    _defineProperty(this, "updateData", function (index, newData) {
      _classPrivateFieldGet(_this, _tasks)[index] = newData;
      _this.renderTasks();
    });
    _defineProperty(this, "deleteData", function (index) {
      _classPrivateFieldGet(_this, _tasks).splice(index, 1);
      _this.renderTasks();
    });
    _defineProperty(this, "renderTasks", function () {
      var todolist = document.querySelector('.todoLists');
      todolist.innerHTML = '';
      _classPrivateFieldGet(_this, _tasks).forEach(function (task, index) {
        var element = document.createElement('li');
        if (task.completed === true) {
          element.classList.add('completed', 'list');
        } else {
          element.classList.add('in-progress', 'list');
        }
        element.innerHTML = "\n      <input type=\"checkbox\" class=\"checkbox\" ".concat(task.completed ? 'checked' : '', ">\n      <input type=\"text\" class=\"task\" value=\"").concat(task.description, "\" ").concat(task.completed ? 'disabled' : '', ">\n      <i class=\"uil uil-trash\"></i>\n    ");
        var trashIcon = element.querySelector('.uil-trash');
        trashIcon.addEventListener('click', function () {
          _this.deleteData(index);
        });
        var checkbox = element.querySelector('.checkbox');
        checkbox.addEventListener('change', function () {
          task.completed = !task.completed;
          _this.updateData(index, task);
        });
        var taskInput = element.querySelector('.task');
        taskInput.addEventListener('blur', function () {
          task.description = taskInput.value;
          _this.updateData(index, task);
        });
        todolist.appendChild(element);
      });
    });
    _classPrivateFieldSet(this, _tasks, []);
    this.renderTasks();
    this.addData();
  }
  _createClass(Data, [{
    key: "getTasks",
    value: function getTasks() {
      return _classPrivateFieldGet(this, _tasks);
    }
  }, {
    key: "setTasks",
    value: function setTasks(tasks) {
      _classPrivateFieldSet(this, _tasks, tasks);
      this.renderTasks();
    }
  }]);
  return Data;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var LocalStorage = /*#__PURE__*/_createClass(function LocalStorage(storageKey) {
  var _this = this;
  _classCallCheck(this, LocalStorage);
  _defineProperty(this, "saveData", function (data) {
    localStorage.setItem(_this.storageKey, JSON.stringify(data));
  });
  _defineProperty(this, "loadData", function () {
    var data = localStorage.getItem(_this.storageKey);
    return data ? JSON.parse(data) : [];
  });
  this.storageKey = storageKey;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\nbody {\n  background-color: #e3f2fd;\n}\n\n.container {\n  position: relative;\n  max-width: 480px;\n  width: 100%;\n  border-radius: 8px;\n  padding: 25px;\n  margin: 85px auto 0;\n  background-color: white;\n  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);\n}\n\n.container .input-field {\n  position: relative;\n  height: 64px;\n  width: 100%;\n}\n\n.container .my-todo {\n  margin-bottom: 16px;\n}\n\ntextarea {\n  overflow: hidden;\n}\n\n.input-field textarea {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  font-weight: 400;\n  border-radius: 8px;\n  padding: 18px 45px 18px 15px;\n  border: 1px solid #ccc;\n  resize: none;\n}\n\n.input-field textarea:focus {\n  border-color: #4070f4;\n}\n\n.input-field .note-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 24px;\n  color: #707070;\n}\n\n.input-field textarea:focus ~ .note-icon {\n  color: #4070f4;\n}\n\n.container .todoLists {\n  max-height: 380px;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n\n.todoLists .list {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  background-color: #f2f2f2;\n  padding: 20px 15px;\n  border-radius: 8px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\n.todoLists .list input {\n  height: 16px;\n  min-width: 16px;\n  color: #4070f4;\n  pointer-events: none;\n}\n\n.todoLists .list .task {\n  margin: 0 30px 0 15px;\n  word-break: break-all;\n}\n\n.list input:checked ~ .task {\n  text-decoration: line-through;\n}\n\n.todoLists .list i {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: #707070;\n  padding: 5px;\n  opacity: 0.6;\n  display: none;\n}\n\n.todoLists .list:hover i {\n  display: inline-flex;\n}\n\n.todoLists .list i:hover {\n  opacity: 1;\n}\n\n.container .pending-tasks {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 25px;\n}\n\n.pending-tasks span {\n  color: #333;\n}\n\n.pending-tasks .clear-button {\n  padding: 6px 12px;\n  outline: none;\n  border: none;\n  background: #4070f4;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer;\n  pointer-events: none;\n  white-space: nowrap;\n}\n\n.clear-button:hover {\n  background-color: #0e4bf1;\n}\n\n@media screen and (max-width: 350px) {\n  .container {\n    padding: 25px 10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B;EAC5B,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,2BAA2B;EAC3B,oBAAoB;EACpB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,2BAA2B;EAC3B,eAAe;EACf,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\nbody {\n  background-color: #e3f2fd;\n}\n\n.container {\n  position: relative;\n  max-width: 480px;\n  width: 100%;\n  border-radius: 8px;\n  padding: 25px;\n  margin: 85px auto 0;\n  background-color: white;\n  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);\n}\n\n.container .input-field {\n  position: relative;\n  height: 64px;\n  width: 100%;\n}\n\n.container .my-todo {\n  margin-bottom: 16px;\n}\n\ntextarea {\n  overflow: hidden;\n}\n\n.input-field textarea {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  font-weight: 400;\n  border-radius: 8px;\n  padding: 18px 45px 18px 15px;\n  border: 1px solid #ccc;\n  resize: none;\n}\n\n.input-field textarea:focus {\n  border-color: #4070f4;\n}\n\n.input-field .note-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 24px;\n  color: #707070;\n}\n\n.input-field textarea:focus ~ .note-icon {\n  color: #4070f4;\n}\n\n.container .todoLists {\n  max-height: 380px;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n\n.todoLists .list {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  background-color: #f2f2f2;\n  padding: 20px 15px;\n  border-radius: 8px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\n.todoLists .list input {\n  height: 16px;\n  min-width: 16px;\n  color: #4070f4;\n  pointer-events: none;\n}\n\n.todoLists .list .task {\n  margin: 0 30px 0 15px;\n  word-break: break-all;\n}\n\n.list input:checked ~ .task {\n  text-decoration: line-through;\n}\n\n.todoLists .list i {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: #707070;\n  padding: 5px;\n  opacity: 0.6;\n  display: none;\n}\n\n.todoLists .list:hover i {\n  display: inline-flex;\n}\n\n.todoLists .list i:hover {\n  opacity: 1;\n}\n\n.container .pending-tasks {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 25px;\n}\n\n.pending-tasks span {\n  color: #333;\n}\n\n.pending-tasks .clear-button {\n  padding: 6px 12px;\n  outline: none;\n  border: none;\n  background: #4070f4;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer;\n  pointer-events: none;\n  white-space: nowrap;\n}\n\n.clear-button:hover {\n  background-color: #0e4bf1;\n}\n\n@media screen and (max-width: 350px) {\n  .container {\n    padding: 25px 10px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvbW9kdWxlcy9kYXRhLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvc3RvcmFnZS5qcyc7XG5pbXBvcnQgRGF0YSBmcm9tICcuL21vZHVsZXMvZGF0YS5qcyc7XG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCd0YXNrcycpO1xuXG5jb25zdCBkYXRhID0gbmV3IERhdGEoKTtcbmRhdGEuc2V0VGFza3Moc3RvcmFnZS5sb2FkRGF0YSgpKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcbiAgc3RvcmFnZS5zYXZlRGF0YShkYXRhLmdldFRhc2tzKCkpO1xufSk7XG5cbi8vIGltcG9ydCByZW5kZXJUYXNrcyBmcm9tICcuL21vZHVsZXMvZGF0YS5qcyc7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVuZGVyVGFza3MpO1xuIiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5jbGFzcyBEYXRhIHtcbiAgI3Rhc2tzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI3Rhc2tzID0gW107XG4gICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICAgIHRoaXMuYWRkRGF0YSgpO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Rhc2tzO1xuICB9XG5cbiAgc2V0VGFza3ModGFza3MpIHtcbiAgICB0aGlzLiN0YXNrcyA9IHRhc2tzO1xuICAgIHRoaXMucmVuZGVyVGFza3MoKTtcbiAgfVxuXG4gIGFkZERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWVsZCB0ZXh0YXJlYScpO1xuXG4gICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dFZhbCA9IGlucHV0RmllbGQudmFsdWUudHJpbSgpO1xuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgaW5wdXRWYWwubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiBpbnB1dFZhbCxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGluZGV4OiB0aGlzLiN0YXNrcy5sZW5ndGgsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuI3Rhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIHRoaXMucmVuZGVyVGFza3MoKTtcbiAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJlYWREYXRhID0gKCkgPT4gdGhpcy4jdGFza3M7XG5cbiAgdXBkYXRlRGF0YSA9IChpbmRleCwgbmV3RGF0YSkgPT4ge1xuICAgIHRoaXMuI3Rhc2tzW2luZGV4XSA9IG5ld0RhdGE7XG4gICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICB9O1xuXG4gIGRlbGV0ZURhdGEgPSAoaW5kZXgpID0+IHtcbiAgICB0aGlzLiN0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMucmVuZGVyVGFza3MoKTtcbiAgfTtcblxuICByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdHMnKTtcbiAgICB0b2RvbGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgIHRoaXMuI3Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgaWYgKHRhc2suY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJywgJ2xpc3QnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4tcHJvZ3Jlc3MnLCAnbGlzdCcpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgJHtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ1xuICAgICAgfT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGFza1wiIHZhbHVlPVwiJHt0YXNrLmRlc2NyaXB0aW9ufVwiICR7XG4gICAgICAgIHRhc2suY29tcGxldGVkID8gJ2Rpc2FibGVkJyA6ICcnXG4gICAgICB9PlxuICAgICAgPGkgY2xhc3M9XCJ1aWwgdWlsLXRyYXNoXCI+PC9pPlxuICAgIGA7XG5cbiAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVpbC10cmFzaCcpO1xuICAgICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGV0ZURhdGEoaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YShpbmRleCwgdGFzayk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdGFza0lucHV0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpO1xuICAgICAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrSW5wdXQudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YShpbmRleCwgdGFzayk7XG4gICAgICB9KTtcblxuICAgICAgdG9kb2xpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGE7XG4iLCJjbGFzcyBMb2NhbFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcihzdG9yYWdlS2V5KSB7XG4gICAgdGhpcy5zdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgfVxuXG4gIHNhdmVEYXRhID0gKGRhdGEpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfTtcblxuICBsb2FkRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KTtcbiAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxTdG9yYWdlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiA0ODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMjVweDtcXG4gIG1hcmdpbjogODVweCBhdXRvIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5jb250YWluZXIgLmlucHV0LWZpZWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIC5teS10b2RvIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dC1maWVsZCB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMThweCA0NXB4IDE4cHggMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbnB1dC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM0MDcwZjQ7XFxufVxcblxcbi5pbnB1dC1maWVsZCAubm90ZS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQgdGV4dGFyZWE6Zm9jdXMgfiAubm90ZS1pY29uIHtcXG4gIGNvbG9yOiAjNDA3MGY0O1xcbn1cXG5cXG4uY29udGFpbmVyIC50b2RvTGlzdHMge1xcbiAgbWF4LWhlaWdodDogMzgwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgcGFkZGluZzogMjBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdCBpbnB1dCB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBtaW4td2lkdGg6IDE2cHg7XFxuICBjb2xvcjogIzQwNzBmNDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IC50YXNrIHtcXG4gIG1hcmdpbjogMCAzMHB4IDAgMTVweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLmxpc3QgaW5wdXQ6Y2hlY2tlZCB+IC50YXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgb3BhY2l0eTogMC42O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdDpob3ZlciBpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IGk6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNvbnRhaW5lciAucGVuZGluZy10YXNrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5wZW5kaW5nLXRhc2tzIHNwYW4ge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5wZW5kaW5nLXRhc2tzIC5jbGVhci1idXR0b24ge1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzQwNzBmNDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTRiZjE7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMjVweCAxMHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiA0ODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMjVweDtcXG4gIG1hcmdpbjogODVweCBhdXRvIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5jb250YWluZXIgLmlucHV0LWZpZWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIC5teS10b2RvIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dC1maWVsZCB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMThweCA0NXB4IDE4cHggMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbnB1dC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM0MDcwZjQ7XFxufVxcblxcbi5pbnB1dC1maWVsZCAubm90ZS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQgdGV4dGFyZWE6Zm9jdXMgfiAubm90ZS1pY29uIHtcXG4gIGNvbG9yOiAjNDA3MGY0O1xcbn1cXG5cXG4uY29udGFpbmVyIC50b2RvTGlzdHMge1xcbiAgbWF4LWhlaWdodDogMzgwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgcGFkZGluZzogMjBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdCBpbnB1dCB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBtaW4td2lkdGg6IDE2cHg7XFxuICBjb2xvcjogIzQwNzBmNDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IC50YXNrIHtcXG4gIG1hcmdpbjogMCAzMHB4IDAgMTVweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLmxpc3QgaW5wdXQ6Y2hlY2tlZCB+IC50YXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgb3BhY2l0eTogMC42O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdDpob3ZlciBpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IGk6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNvbnRhaW5lciAucGVuZGluZy10YXNrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5wZW5kaW5nLXRhc2tzIHNwYW4ge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5wZW5kaW5nLXRhc2tzIC5jbGVhci1idXR0b24ge1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzQwNzBmNDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTRiZjE7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMjVweCAxMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIkxvY2FsU3RvcmFnZSIsIkRhdGEiLCJzdG9yYWdlIiwiZGF0YSIsInNldFRhc2tzIiwibG9hZERhdGEiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2F2ZURhdGEiLCJnZXRUYXNrcyIsIl90YXNrcyIsIldlYWtNYXAiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImlucHV0RmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwiaW5wdXRWYWwiLCJ0cmltIiwia2V5IiwibGVuZ3RoIiwibmV3VGFzayIsImRlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwiaW5kZXgiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJwdXNoIiwicmVuZGVyVGFza3MiLCJuZXdEYXRhIiwic3BsaWNlIiwidG9kb2xpc3QiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwidGFzayIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uY2F0IiwidHJhc2hJY29uIiwiZGVsZXRlRGF0YSIsImNoZWNrYm94IiwidXBkYXRlRGF0YSIsInRhc2tJbnB1dCIsImFwcGVuZENoaWxkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiYWRkRGF0YSIsIl9jcmVhdGVDbGFzcyIsInRhc2tzIiwic3RvcmFnZUtleSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SXRlbSIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==