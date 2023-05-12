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

/***/ "./src/modules/clear.js":
/*!******************************!*\
  !*** ./src/modules/clear.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClearTask": () => (/* binding */ ClearTask),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });
var updateStorage = function updateStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
var ClearTask = function ClearTask(dataInstance) {
  var clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', function () {
    var todolist = document.querySelector('.todoLists');
    var completedTasks = todolist.querySelectorAll('.completed');

    // remove only completed tasks if there are any
    if (completedTasks.length > 0) {
      var tasks = dataInstance.getTasks().filter(function (task) {
        return !task.completed;
      });
      dataInstance.setTasks(tasks);
    }

    // update storage with the latest tasks
    updateStorage(dataInstance.getTasks());
    dataInstance.pendingTasks();
  });
};

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
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function.js */ "./src/modules/function.js");
/* harmony import */ var _clear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clear.js */ "./src/modules/clear.js");
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
    _defineProperty(this, "pendingTasks", function () {
      var pendingNum = document.querySelector('.pending-num');
      var pendingTasks = _classPrivateFieldGet(_this, _tasks).filter(function (task) {
        return !task.completed;
      });
      pendingNum.textContent = pendingTasks.length === 0 ? 'no' : pendingTasks.length;
    });
    _defineProperty(this, "addData", function () {
      var inputField = document.querySelector('.input-field textarea');
      inputField.addEventListener('keyup', function (e) {
        var inputVal = inputField.value.trim();
        if (e.key === 'Enter' && inputVal.length > 0) {
          var newTask = {
            description: inputVal,
            completed: false
          };
          _classPrivateFieldGet(_this, _tasks).push(newTask);
          _classPrivateFieldGet(_this, _tasks).forEach(function (task, index) {
            task.index = index;
          }); // update index values
          _this.renderTasks();
          inputField.value = '';
          _this.pendingTasks();
          (0,_clear_js__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(_classPrivateFieldGet(_this, _tasks));
        }
      });
    });
    _defineProperty(this, "readData", function () {
      return _classPrivateFieldGet(_this, _tasks);
    });
    _defineProperty(this, "updateData", function (index, newData) {
      _classPrivateFieldGet(_this, _tasks)[index] = newData;
      _this.renderTasks();
      _this.pendingTasks();
      (0,_clear_js__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(_classPrivateFieldGet(_this, _tasks));
    });
    _defineProperty(this, "deleteData", function (index) {
      _classPrivateFieldGet(_this, _tasks).splice(index, 1);
      _classPrivateFieldGet(_this, _tasks).forEach(function (task, index) {
        task.index = index;
      }); // update index values
      _this.renderTasks();
      _this.pendingTasks();
      (0,_clear_js__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(_classPrivateFieldGet(_this, _tasks));
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
          _function_js__WEBPACK_IMPORTED_MODULE_1__["default"].editDescription(index, taskInput.value, _classPrivateFieldGet(_this, _tasks), _this.setTasks.bind(_this));
        });

        // add click event listener to task input field
        taskInput.addEventListener('click', function (e) {
          // enable editing of task description when clicked
          e.target.removeAttribute('disabled');
        });
        todolist.appendChild(element);
        _this.pendingTasks();
      });
    });
    _classPrivateFieldSet(this, _tasks, []);
    this.renderTasks();
    this.addData();
    (0,_clear_js__WEBPACK_IMPORTED_MODULE_2__.ClearTask)(this);
  }
  _createClass(Data, [{
    key: "getTasks",
    value: function getTasks() {
      return _classPrivateFieldGet(this, _tasks);
    }
  }, {
    key: "setTasks",
    value: function setTasks(tasks) {
      // Assign new index values based on order in array
      tasks.forEach(function (task, index) {
        task.index = index;
      });
      _classPrivateFieldSet(this, _tasks, tasks);
      this.renderTasks();
    }
  }]);
  return Data;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./src/modules/function.js":
/*!*********************************!*\
  !*** ./src/modules/function.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditTask = /*#__PURE__*/function () {
  function EditTask() {
    _classCallCheck(this, EditTask);
  }
  _createClass(EditTask, null, [{
    key: "editDescription",
    value: function editDescription(taskIndex, newDescription, tasks, setTasks) {
      var updatedTasks = tasks.map(function (task, index) {
        if (index === taskIndex) {
          return _objectSpread(_objectSpread({}, task), {}, {
            description: newDescription
          });
        }
        return task;
      });
      setTasks(updatedTasks);
    }
  }]);
  return EditTask;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditTask);

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\nbody {\n  background-color: #e3f2fd;\n}\n\n.container {\n  position: relative;\n  max-width: 480px;\n  width: 100%;\n  border-radius: 8px;\n  padding: 25px;\n  margin: 85px auto 0;\n  background-color: white;\n  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);\n}\n\n.container .input-field {\n  position: relative;\n  height: 64px;\n  width: 100%;\n}\n\n.container .my-todo {\n  margin-bottom: 16px;\n}\n\ntextarea {\n  overflow: hidden;\n}\n\n.input-field textarea {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  font-weight: 400;\n  border-radius: 8px;\n  padding: 18px 45px 18px 15px;\n  border: 1px solid #ccc;\n  resize: none;\n}\n\n.input-field textarea:focus {\n  border-color: #4070f4;\n}\n\n.input-field .note-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 24px;\n  color: #707070;\n}\n\n.input-field textarea:focus ~ .note-icon {\n  color: #4070f4;\n}\n\n.container .todoLists {\n  max-height: 380px;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n\n.todoLists .list {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  background-color: #f2f2f2;\n  padding: 20px 15px;\n  border-radius: 8px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\n.todoLists .list input {\n  height: 16px;\n  min-width: 16px;\n  color: #4070f4;\n}\n\n.todoLists .list .task {\n  margin: 0 30px 0 15px;\n  word-break: break-all;\n}\n\n.list input:checked ~ .task {\n  text-decoration: line-through;\n}\n\n.todoLists .list i {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: #707070;\n  padding: 5px;\n  opacity: 0.6;\n  display: none;\n}\n\n.todoLists .list:hover i {\n  display: inline-flex;\n}\n\n.todoLists .list i:hover {\n  opacity: 1;\n}\n\n.container .pending-tasks {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 25px;\n}\n\n.pending-tasks span {\n  color: #333;\n}\n\n.pending-tasks .clear-button {\n  padding: 6px 12px;\n  outline: none;\n  border: none;\n  background: #4070f4;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.clear-button:hover {\n  background-color: #0e4bf1;\n}\n\n@media screen and (max-width: 350px) {\n  .container {\n    padding: 25px 10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B;EAC5B,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,2BAA2B;EAC3B,oBAAoB;EACpB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,2BAA2B;EAC3B,eAAe;EACf,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\nbody {\n  background-color: #e3f2fd;\n}\n\n.container {\n  position: relative;\n  max-width: 480px;\n  width: 100%;\n  border-radius: 8px;\n  padding: 25px;\n  margin: 85px auto 0;\n  background-color: white;\n  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);\n}\n\n.container .input-field {\n  position: relative;\n  height: 64px;\n  width: 100%;\n}\n\n.container .my-todo {\n  margin-bottom: 16px;\n}\n\ntextarea {\n  overflow: hidden;\n}\n\n.input-field textarea {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  font-weight: 400;\n  border-radius: 8px;\n  padding: 18px 45px 18px 15px;\n  border: 1px solid #ccc;\n  resize: none;\n}\n\n.input-field textarea:focus {\n  border-color: #4070f4;\n}\n\n.input-field .note-icon {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 24px;\n  color: #707070;\n}\n\n.input-field textarea:focus ~ .note-icon {\n  color: #4070f4;\n}\n\n.container .todoLists {\n  max-height: 380px;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n\n.todoLists .list {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  background-color: #f2f2f2;\n  padding: 20px 15px;\n  border-radius: 8px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\n.todoLists .list input {\n  height: 16px;\n  min-width: 16px;\n  color: #4070f4;\n}\n\n.todoLists .list .task {\n  margin: 0 30px 0 15px;\n  word-break: break-all;\n}\n\n.list input:checked ~ .task {\n  text-decoration: line-through;\n}\n\n.todoLists .list i {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: #707070;\n  padding: 5px;\n  opacity: 0.6;\n  display: none;\n}\n\n.todoLists .list:hover i {\n  display: inline-flex;\n}\n\n.todoLists .list i:hover {\n  opacity: 1;\n}\n\n.container .pending-tasks {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 25px;\n}\n\n.pending-tasks span {\n  color: #333;\n}\n\n.pending-tasks .clear-button {\n  padding: 6px 12px;\n  outline: none;\n  border: none;\n  background: #4070f4;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.clear-button:hover {\n  background-color: #0e4bf1;\n}\n\n@media screen and (max-width: 350px) {\n  .container {\n    padding: 25px 10px;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3RvZG9saXN0LXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NsZWFyLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvbW9kdWxlcy9kYXRhLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvbW9kdWxlcy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSAnLi9tb2R1bGVzL3N0b3JhZ2UuanMnO1xuaW1wb3J0IERhdGEgZnJvbSAnLi9tb2R1bGVzL2RhdGEuanMnO1xuXG5jb25zdCBzdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgndGFza3MnKTtcblxuY29uc3QgZGF0YSA9IG5ldyBEYXRhKCk7XG5kYXRhLnNldFRhc2tzKHN0b3JhZ2UubG9hZERhdGEoKSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gIHN0b3JhZ2Uuc2F2ZURhdGEoZGF0YS5nZXRUYXNrcygpKTtcbn0pO1xuXG4vLyBpbXBvcnQgcmVuZGVyVGFza3MgZnJvbSAnLi9tb2R1bGVzL2RhdGEuanMnO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlbmRlclRhc2tzKTtcbiIsImV4cG9ydCBjb25zdCB1cGRhdGVTdG9yYWdlID0gKHRhc2tzKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59O1xuXG5leHBvcnQgY29uc3QgQ2xlYXJUYXNrID0gKGRhdGFJbnN0YW5jZSkgPT4ge1xuICBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idXR0b24nKTtcbiAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdG9kb2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0xpc3RzJyk7XG4gICAgY29uc3QgY29tcGxldGVkVGFza3MgPSB0b2RvbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGVkJyk7XG5cbiAgICAvLyByZW1vdmUgb25seSBjb21wbGV0ZWQgdGFza3MgaWYgdGhlcmUgYXJlIGFueVxuICAgIGlmIChjb21wbGV0ZWRUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0YXNrcyA9IGRhdGFJbnN0YW5jZS5nZXRUYXNrcygpLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgICAgIGRhdGFJbnN0YW5jZS5zZXRUYXNrcyh0YXNrcyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHN0b3JhZ2Ugd2l0aCB0aGUgbGF0ZXN0IHRhc2tzXG4gICAgdXBkYXRlU3RvcmFnZShkYXRhSW5zdGFuY2UuZ2V0VGFza3MoKSk7XG5cbiAgICBkYXRhSW5zdGFuY2UucGVuZGluZ1Rhc2tzKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCBFZGl0VGFzayBmcm9tICcuL2Z1bmN0aW9uLmpzJztcbmltcG9ydCB7IENsZWFyVGFzaywgdXBkYXRlU3RvcmFnZSB9IGZyb20gJy4vY2xlYXIuanMnO1xuXG5jbGFzcyBEYXRhIHtcbiAgI3Rhc2tzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI3Rhc2tzID0gW107XG4gICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICAgIHRoaXMuYWRkRGF0YSgpO1xuICAgIENsZWFyVGFzayh0aGlzKTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLiN0YXNrcztcbiAgfVxuXG4gIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgLy8gQXNzaWduIG5ldyBpbmRleCB2YWx1ZXMgYmFzZWQgb24gb3JkZXIgaW4gYXJyYXlcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgdGFzay5pbmRleCA9IGluZGV4O1xuICAgIH0pO1xuICAgIHRoaXMuI3Rhc2tzID0gdGFza3M7XG4gICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICB9XG5cbiAgcGVuZGluZ1Rhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBlbmRpbmdOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZy1udW0nKTtcbiAgICBjb25zdCBwZW5kaW5nVGFza3MgPSB0aGlzLiN0YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gICAgcGVuZGluZ051bS50ZXh0Q29udGVudCA9IHBlbmRpbmdUYXNrcy5sZW5ndGggPT09IDAgPyAnbm8nIDogcGVuZGluZ1Rhc2tzLmxlbmd0aDtcbiAgfTtcblxuICBhZGREYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmllbGQgdGV4dGFyZWEnKTtcblxuICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaW5wdXRWYWwgPSBpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKTtcblxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlucHV0VmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogaW5wdXRWYWwsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4jdGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgdGhpcy4jdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICB0YXNrLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIH0pOyAvLyB1cGRhdGUgaW5kZXggdmFsdWVzXG4gICAgICAgIHRoaXMucmVuZGVyVGFza3MoKTtcbiAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnBlbmRpbmdUYXNrcygpO1xuICAgICAgICB1cGRhdGVTdG9yYWdlKHRoaXMuI3Rhc2tzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZWFkRGF0YSA9ICgpID0+IHRoaXMuI3Rhc2tzO1xuXG4gIHVwZGF0ZURhdGEgPSAoaW5kZXgsIG5ld0RhdGEpID0+IHtcbiAgICB0aGlzLiN0YXNrc1tpbmRleF0gPSBuZXdEYXRhO1xuICAgIHRoaXMucmVuZGVyVGFza3MoKTtcbiAgICB0aGlzLnBlbmRpbmdUYXNrcygpO1xuICAgIHVwZGF0ZVN0b3JhZ2UodGhpcy4jdGFza3MpO1xuICB9O1xuXG4gIGRlbGV0ZURhdGEgPSAoaW5kZXgpID0+IHtcbiAgICB0aGlzLiN0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuI3Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICB0YXNrLmluZGV4ID0gaW5kZXg7XG4gICAgfSk7IC8vIHVwZGF0ZSBpbmRleCB2YWx1ZXNcbiAgICB0aGlzLnJlbmRlclRhc2tzKCk7XG4gICAgdGhpcy5wZW5kaW5nVGFza3MoKTtcbiAgICB1cGRhdGVTdG9yYWdlKHRoaXMuI3Rhc2tzKTtcbiAgfTtcblxuICByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdHMnKTtcbiAgICB0b2RvbGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgIHRoaXMuI3Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgaWYgKHRhc2suY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJywgJ2xpc3QnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4tcHJvZ3Jlc3MnLCAnbGlzdCcpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgJHtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ1xuICAgICAgfT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGFza1wiIHZhbHVlPVwiJHt0YXNrLmRlc2NyaXB0aW9ufVwiICR7XG4gICAgICAgIHRhc2suY29tcGxldGVkID8gJ2Rpc2FibGVkJyA6ICcnXG4gICAgICB9PlxuICAgICAgPGkgY2xhc3M9XCJ1aWwgdWlsLXRyYXNoXCI+PC9pPlxuICAgIGA7XG5cbiAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVpbC10cmFzaCcpO1xuICAgICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGV0ZURhdGEoaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YShpbmRleCwgdGFzayk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdGFza0lucHV0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpO1xuICAgICAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIEVkaXRUYXNrLmVkaXREZXNjcmlwdGlvbihcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICB0YXNrSW5wdXQudmFsdWUsXG4gICAgICAgICAgdGhpcy4jdGFza3MsXG4gICAgICAgICAgdGhpcy5zZXRUYXNrcy5iaW5kKHRoaXMpLFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGFkZCBjbGljayBldmVudCBsaXN0ZW5lciB0byB0YXNrIGlucHV0IGZpZWxkXG4gICAgICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAvLyBlbmFibGUgZWRpdGluZyBvZiB0YXNrIGRlc2NyaXB0aW9uIHdoZW4gY2xpY2tlZFxuICAgICAgICBlLnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9KTtcblxuICAgICAgdG9kb2xpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB0aGlzLnBlbmRpbmdUYXNrcygpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhO1xuIiwiY2xhc3MgRWRpdFRhc2sge1xuICBzdGF0aWMgZWRpdERlc2NyaXB0aW9uKHRhc2tJbmRleCwgbmV3RGVzY3JpcHRpb24sIHRhc2tzLCBzZXRUYXNrcykge1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IHRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gdGFza0luZGV4KSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRhc2ssIGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbiB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfSk7XG4gICAgc2V0VGFza3ModXBkYXRlZFRhc2tzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0VGFzaztcbiIsImNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKHN0b3JhZ2VLZXkpIHtcbiAgICB0aGlzLnN0b3JhZ2VLZXkgPSBzdG9yYWdlS2V5O1xuICB9XG5cbiAgc2F2ZURhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9O1xuXG4gIGxvYWREYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXkpO1xuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IFtdO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbFN0b3JhZ2U7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgbWFyZ2luOiA4NXB4IGF1dG8gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuaW5wdXQtZmllbGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIgLm15LXRvZG8ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmlucHV0LWZpZWxkIHRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxOHB4IDQ1cHggMThweCAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmlucHV0LWZpZWxkIHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzQwNzBmNDtcXG59XFxuXFxuLmlucHV0LWZpZWxkIC5ub3RlLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbi5pbnB1dC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB+IC5ub3RlLWljb24ge1xcbiAgY29sb3I6ICM0MDcwZjQ7XFxufVxcblxcbi5jb250YWluZXIgLnRvZG9MaXN0cyB7XFxuICBtYXgtaGVpZ2h0OiAzODBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IGlucHV0IHtcXG4gIGhlaWdodDogMTZweDtcXG4gIG1pbi13aWR0aDogMTZweDtcXG4gIGNvbG9yOiAjNDA3MGY0O1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IC50YXNrIHtcXG4gIG1hcmdpbjogMCAzMHB4IDAgMTVweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLmxpc3QgaW5wdXQ6Y2hlY2tlZCB+IC50YXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgb3BhY2l0eTogMC42O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdDpob3ZlciBpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG4udG9kb0xpc3RzIC5saXN0IGk6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNvbnRhaW5lciAucGVuZGluZy10YXNrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5wZW5kaW5nLXRhc2tzIHNwYW4ge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5wZW5kaW5nLXRhc2tzIC5jbGVhci1idXR0b24ge1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzQwNzBmNDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU0YmYxO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiA0ODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMjVweDtcXG4gIG1hcmdpbjogODVweCBhdXRvIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5jb250YWluZXIgLmlucHV0LWZpZWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIC5teS10b2RvIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dC1maWVsZCB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMThweCA0NXB4IDE4cHggMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbnB1dC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM0MDcwZjQ7XFxufVxcblxcbi5pbnB1dC1maWVsZCAubm90ZS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQgdGV4dGFyZWE6Zm9jdXMgfiAubm90ZS1pY29uIHtcXG4gIGNvbG9yOiAjNDA3MGY0O1xcbn1cXG5cXG4uY29udGFpbmVyIC50b2RvTGlzdHMge1xcbiAgbWF4LWhlaWdodDogMzgwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgcGFkZGluZzogMjBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdCBpbnB1dCB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBtaW4td2lkdGg6IDE2cHg7XFxuICBjb2xvcjogIzQwNzBmNDtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdCAudGFzayB7XFxuICBtYXJnaW46IDAgMzBweCAwIDE1cHg7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5saXN0IGlucHV0OmNoZWNrZWQgfiAudGFzayB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdCBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzcwNzA3MDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvTGlzdHMgLmxpc3Q6aG92ZXIgaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuLnRvZG9MaXN0cyAubGlzdCBpOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jb250YWluZXIgLnBlbmRpbmctdGFza3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4ucGVuZGluZy10YXNrcyBzcGFuIHtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ucGVuZGluZy10YXNrcyAuY2xlYXItYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICM0MDcwZjQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jbGVhci1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNGJmMTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyNXB4IDEwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiTG9jYWxTdG9yYWdlIiwiRGF0YSIsInN0b3JhZ2UiLCJkYXRhIiwic2V0VGFza3MiLCJsb2FkRGF0YSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzYXZlRGF0YSIsImdldFRhc2tzIiwidXBkYXRlU3RvcmFnZSIsInRhc2tzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJDbGVhclRhc2siLCJkYXRhSW5zdGFuY2UiLCJjbGVhckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvZG9saXN0IiwiY29tcGxldGVkVGFza3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZmlsdGVyIiwidGFzayIsImNvbXBsZXRlZCIsInBlbmRpbmdUYXNrcyIsIkVkaXRUYXNrIiwiX3Rhc2tzIiwiV2Vha01hcCIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMiLCJ3cml0YWJsZSIsInZhbHVlIiwiX2RlZmluZVByb3BlcnR5IiwicGVuZGluZ051bSIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsInRleHRDb250ZW50IiwiaW5wdXRGaWVsZCIsImUiLCJpbnB1dFZhbCIsInRyaW0iLCJrZXkiLCJuZXdUYXNrIiwiZGVzY3JpcHRpb24iLCJwdXNoIiwiZm9yRWFjaCIsImluZGV4IiwicmVuZGVyVGFza3MiLCJuZXdEYXRhIiwic3BsaWNlIiwiaW5uZXJIVE1MIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25jYXQiLCJ0cmFzaEljb24iLCJkZWxldGVEYXRhIiwiY2hlY2tib3giLCJ1cGRhdGVEYXRhIiwidGFza0lucHV0IiwiZWRpdERlc2NyaXB0aW9uIiwiYmluZCIsInRhcmdldCIsInJlbW92ZUF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiYWRkRGF0YSIsIl9jcmVhdGVDbGFzcyIsInRhc2tJbmRleCIsIm5ld0Rlc2NyaXB0aW9uIiwidXBkYXRlZFRhc2tzIiwibWFwIiwiX29iamVjdFNwcmVhZCIsInN0b3JhZ2VLZXkiLCJnZXRJdGVtIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9