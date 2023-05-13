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

// Update localstorage and Data class on load
var data = new _modules_data_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
data.setTasks(storage.loadData());
window.addEventListener('beforeunload', function () {
  storage.saveData(data.getTasks());
});

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
// A Class for clearing tasks from the task lists
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
// Data & CRUD methods implementation



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
            task.index = index + 1;
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
        task.index = index + 1;
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
        element.innerHTML = "\n      <input type=\"checkbox\" id=\"check\" class=\"checkbox\" ".concat(task.completed ? 'checked' : '', ">\n      <input type=\"text\" class=\"task\" id=\"task-input\" value=\"").concat(task.description, "\" ").concat(task.completed ? 'disabled' : '', ">\n      <i class=\"uil uil-trash\"></i>\n    ");
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
        task.index = index + 1;
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
// A Class for editing tasks from the task list
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
// Update the values to the localstorage
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #e3f2fd;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  max-width: 480px;\r\n  width: 100%;\r\n  border-radius: 8px;\r\n  padding: 25px;\r\n  margin: 85px auto 0;\r\n  background-color: white;\r\n  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.container .input-field {\r\n  position: relative;\r\n  height: 64px;\r\n  width: 100%;\r\n}\r\n\r\n.container .my-todo {\r\n  margin-bottom: 16px;\r\n}\r\n\r\ntextarea {\r\n  overflow: hidden;\r\n}\r\n\r\n.input-field textarea {\r\n  height: 100%;\r\n  width: 100%;\r\n  outline: none;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  border-radius: 8px;\r\n  padding: 18px 45px 18px 15px;\r\n  border: 1px solid #ccc;\r\n  resize: none;\r\n}\r\n\r\n.input-field textarea:focus {\r\n  border-color: #4070f4;\r\n}\r\n\r\n.input-field .note-icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  transform: translateY(-50%);\r\n  pointer-events: none;\r\n  font-size: 24px;\r\n  color: #707070;\r\n}\r\n\r\n.input-field textarea:focus ~ .note-icon {\r\n  color: #4070f4;\r\n}\r\n\r\n.container .todoLists {\r\n  max-height: 380px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.todoLists .list {\r\n  display: flex;\r\n  align-items: center;\r\n  list-style: none;\r\n  background-color: #d8fcff;\r\n  box-shadow: 0 5px 10px rgba(0, 41, 63, 0.1);\r\n  width: 100%;\r\n  padding: 1px 15px;\r\n  border-radius: 8px;\r\n  margin-top: 10px;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.todoLists .list .checkbox {\r\n  height: 18px;\r\n  min-width: 18px;\r\n  color: #4070f4;\r\n}\r\n\r\n.todoLists .list .task {\r\n  /* margin: 0 30px 0 15px; */\r\n  word-break: break-all;\r\n}\r\n\r\n.list input:checked ~ .task {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.todoLists .list i {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  transform: translateY(-50%);\r\n  font-size: 20px;\r\n  color: #707070;\r\n  padding: 5px;\r\n  opacity: 0.6;\r\n  display: none;\r\n}\r\n\r\n.todoLists .list:hover i {\r\n  display: inline-flex;\r\n}\r\n\r\n.todoLists .list i:hover {\r\n  opacity: 1;\r\n  color: #fd9797;\r\n}\r\n\r\n.container .pending-tasks {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 25px;\r\n}\r\n\r\n.pending-tasks span {\r\n  color: #333;\r\n}\r\n\r\n.pending-tasks .clear-button {\r\n  padding: 6px 12px;\r\n  outline: none;\r\n  border: none;\r\n  background: #4070f4;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n}\r\n\r\n.clear-button:hover {\r\n  background-color: #0e4bf1;\r\n}\r\n\r\n#task-input {\r\n  outline-style: none;\r\n  padding: 20px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  height: max-content;\r\n  font-size: 18px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 300;\r\n  margin-left: 12px;\r\n  margin-right: -13px;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type='checkbox']:focus {\r\n  outline: 2px solid #2196f3;\r\n  box-shadow: 0 0 5px #ccc;\r\n  outline-offset: 2px;\r\n}\r\n\r\ninput[type='checkbox']:checked {\r\n  background-color: #2196f3;\r\n  border-color: #2196f3;\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n  .container {\r\n    padding: 25px 10px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B;EAC5B,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,2BAA2B;EAC3B,oBAAoB;EACpB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,2CAA2C;EAC3C,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,2BAA2B;EAC3B,eAAe;EACf,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,kCAAkC;EAClC,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #e3f2fd;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  max-width: 480px;\r\n  width: 100%;\r\n  border-radius: 8px;\r\n  padding: 25px;\r\n  margin: 85px auto 0;\r\n  background-color: white;\r\n  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.container .input-field {\r\n  position: relative;\r\n  height: 64px;\r\n  width: 100%;\r\n}\r\n\r\n.container .my-todo {\r\n  margin-bottom: 16px;\r\n}\r\n\r\ntextarea {\r\n  overflow: hidden;\r\n}\r\n\r\n.input-field textarea {\r\n  height: 100%;\r\n  width: 100%;\r\n  outline: none;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  border-radius: 8px;\r\n  padding: 18px 45px 18px 15px;\r\n  border: 1px solid #ccc;\r\n  resize: none;\r\n}\r\n\r\n.input-field textarea:focus {\r\n  border-color: #4070f4;\r\n}\r\n\r\n.input-field .note-icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  transform: translateY(-50%);\r\n  pointer-events: none;\r\n  font-size: 24px;\r\n  color: #707070;\r\n}\r\n\r\n.input-field textarea:focus ~ .note-icon {\r\n  color: #4070f4;\r\n}\r\n\r\n.container .todoLists {\r\n  max-height: 380px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.todoLists .list {\r\n  display: flex;\r\n  align-items: center;\r\n  list-style: none;\r\n  background-color: #d8fcff;\r\n  box-shadow: 0 5px 10px rgba(0, 41, 63, 0.1);\r\n  width: 100%;\r\n  padding: 1px 15px;\r\n  border-radius: 8px;\r\n  margin-top: 10px;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.todoLists .list .checkbox {\r\n  height: 18px;\r\n  min-width: 18px;\r\n  color: #4070f4;\r\n}\r\n\r\n.todoLists .list .task {\r\n  /* margin: 0 30px 0 15px; */\r\n  word-break: break-all;\r\n}\r\n\r\n.list input:checked ~ .task {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.todoLists .list i {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  transform: translateY(-50%);\r\n  font-size: 20px;\r\n  color: #707070;\r\n  padding: 5px;\r\n  opacity: 0.6;\r\n  display: none;\r\n}\r\n\r\n.todoLists .list:hover i {\r\n  display: inline-flex;\r\n}\r\n\r\n.todoLists .list i:hover {\r\n  opacity: 1;\r\n  color: #fd9797;\r\n}\r\n\r\n.container .pending-tasks {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 25px;\r\n}\r\n\r\n.pending-tasks span {\r\n  color: #333;\r\n}\r\n\r\n.pending-tasks .clear-button {\r\n  padding: 6px 12px;\r\n  outline: none;\r\n  border: none;\r\n  background: #4070f4;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n}\r\n\r\n.clear-button:hover {\r\n  background-color: #0e4bf1;\r\n}\r\n\r\n#task-input {\r\n  outline-style: none;\r\n  padding: 20px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  height: max-content;\r\n  font-size: 18px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 300;\r\n  margin-left: 12px;\r\n  margin-right: -13px;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type='checkbox']:focus {\r\n  outline: 2px solid #2196f3;\r\n  box-shadow: 0 0 5px #ccc;\r\n  outline-offset: 2px;\r\n}\r\n\r\ninput[type='checkbox']:checked {\r\n  background-color: #2196f3;\r\n  border-color: #2196f3;\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n  .container {\r\n    padding: 25px 10px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvc3RvcmFnZS5qcyc7XG5pbXBvcnQgRGF0YSBmcm9tICcuL21vZHVsZXMvZGF0YS5qcyc7XG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCd0YXNrcycpO1xuXG4vLyBVcGRhdGUgbG9jYWxzdG9yYWdlIGFuZCBEYXRhIGNsYXNzIG9uIGxvYWRcbmNvbnN0IGRhdGEgPSBuZXcgRGF0YSgpO1xuZGF0YS5zZXRUYXNrcyhzdG9yYWdlLmxvYWREYXRhKCkpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICBzdG9yYWdlLnNhdmVEYXRhKGRhdGEuZ2V0VGFza3MoKSk7XG59KTtcbiIsIi8vIEEgQ2xhc3MgZm9yIGNsZWFyaW5nIHRhc2tzIGZyb20gdGhlIHRhc2sgbGlzdHNcbmV4cG9ydCBjb25zdCB1cGRhdGVTdG9yYWdlID0gKHRhc2tzKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59O1xuXG5leHBvcnQgY29uc3QgQ2xlYXJUYXNrID0gKGRhdGFJbnN0YW5jZSkgPT4ge1xuICBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idXR0b24nKTtcbiAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdG9kb2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0xpc3RzJyk7XG4gICAgY29uc3QgY29tcGxldGVkVGFza3MgPSB0b2RvbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGVkJyk7XG5cbiAgICAvLyByZW1vdmUgb25seSBjb21wbGV0ZWQgdGFza3MgaWYgdGhlcmUgYXJlIGFueVxuICAgIGlmIChjb21wbGV0ZWRUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0YXNrcyA9IGRhdGFJbnN0YW5jZS5nZXRUYXNrcygpLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgICAgIGRhdGFJbnN0YW5jZS5zZXRUYXNrcyh0YXNrcyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHN0b3JhZ2Ugd2l0aCB0aGUgbGF0ZXN0IHRhc2tzXG4gICAgdXBkYXRlU3RvcmFnZShkYXRhSW5zdGFuY2UuZ2V0VGFza3MoKSk7XG5cbiAgICBkYXRhSW5zdGFuY2UucGVuZGluZ1Rhc2tzKCk7XG4gIH0pO1xufTtcbiIsIi8vIERhdGEgJiBDUlVEIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbmltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCBFZGl0VGFzayBmcm9tICcuL2Z1bmN0aW9uLmpzJztcbmltcG9ydCB7IENsZWFyVGFzaywgdXBkYXRlU3RvcmFnZSB9IGZyb20gJy4vY2xlYXIuanMnO1xuXG5jbGFzcyBEYXRhIHtcbiAgI3Rhc2tzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI3Rhc2tzID0gW107XG4gICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICAgIHRoaXMuYWRkRGF0YSgpO1xuICAgIENsZWFyVGFzayh0aGlzKTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLiN0YXNrcztcbiAgfVxuXG4gIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgLy8gQXNzaWduIG5ldyBpbmRleCB2YWx1ZXMgYmFzZWQgb24gb3JkZXIgaW4gYXJyYXlcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgdGFzay5pbmRleCA9IGluZGV4ICsgMTtcbiAgICB9KTtcbiAgICB0aGlzLiN0YXNrcyA9IHRhc2tzO1xuICAgIHRoaXMucmVuZGVyVGFza3MoKTtcbiAgfVxuXG4gIHBlbmRpbmdUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBwZW5kaW5nTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlbmRpbmctbnVtJyk7XG4gICAgY29uc3QgcGVuZGluZ1Rhc2tzID0gdGhpcy4jdGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICAgIHBlbmRpbmdOdW0udGV4dENvbnRlbnQgPSBwZW5kaW5nVGFza3MubGVuZ3RoID09PSAwID8gJ25vJyA6IHBlbmRpbmdUYXNrcy5sZW5ndGg7XG4gIH07XG5cbiAgYWRkRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZpZWxkIHRleHRhcmVhJyk7XG5cbiAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VmFsID0gaW5wdXRGaWVsZC52YWx1ZS50cmltKCk7XG5cbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBpbnB1dFZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgICAgZGVzY3JpcHRpb246IGlucHV0VmFsLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuI3Rhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIHRoaXMuI3Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGFzay5pbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgfSk7IC8vIHVwZGF0ZSBpbmRleCB2YWx1ZXNcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMucGVuZGluZ1Rhc2tzKCk7XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UodGhpcy4jdGFza3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJlYWREYXRhID0gKCkgPT4gdGhpcy4jdGFza3M7XG5cbiAgdXBkYXRlRGF0YSA9IChpbmRleCwgbmV3RGF0YSkgPT4ge1xuICAgIHRoaXMuI3Rhc2tzW2luZGV4XSA9IG5ld0RhdGE7XG4gICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICAgIHRoaXMucGVuZGluZ1Rhc2tzKCk7XG4gICAgdXBkYXRlU3RvcmFnZSh0aGlzLiN0YXNrcyk7XG4gIH07XG5cbiAgZGVsZXRlRGF0YSA9IChpbmRleCkgPT4ge1xuICAgIHRoaXMuI3Rhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy4jdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIHRhc2suaW5kZXggPSBpbmRleCArIDE7XG4gICAgfSk7IC8vIHVwZGF0ZSBpbmRleCB2YWx1ZXNcbiAgICB0aGlzLnJlbmRlclRhc2tzKCk7XG4gICAgdGhpcy5wZW5kaW5nVGFza3MoKTtcbiAgICB1cGRhdGVTdG9yYWdlKHRoaXMuI3Rhc2tzKTtcbiAgfTtcblxuICByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdHMnKTtcbiAgICB0b2RvbGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgIHRoaXMuI3Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgaWYgKHRhc2suY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJywgJ2xpc3QnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4tcHJvZ3Jlc3MnLCAnbGlzdCcpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrXCIgY2xhc3M9XCJjaGVja2JveFwiICR7XG4gICAgICAgIHRhc2suY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJydcbiAgICAgIH0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRhc2tcIiBpZD1cInRhc2staW5wdXRcIiB2YWx1ZT1cIiR7dGFzay5kZXNjcmlwdGlvbn1cIiAke1xuICAgICAgICB0YXNrLmNvbXBsZXRlZCA/ICdkaXNhYmxlZCcgOiAnJ1xuICAgICAgfT5cbiAgICAgIDxpIGNsYXNzPVwidWlsIHVpbC10cmFzaFwiPjwvaT5cbiAgICBgO1xuXG4gICAgICBjb25zdCB0cmFzaEljb24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aWwtdHJhc2gnKTtcbiAgICAgIHRyYXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxldGVEYXRhKGluZGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoaW5kZXgsIHRhc2spO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHRhc2tJbnB1dCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgICAgIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICBFZGl0VGFzay5lZGl0RGVzY3JpcHRpb24oXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgdGFza0lucHV0LnZhbHVlLFxuICAgICAgICAgIHRoaXMuI3Rhc2tzLFxuICAgICAgICAgIHRoaXMuc2V0VGFza3MuYmluZCh0aGlzKSxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBhZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGFzayBpbnB1dCBmaWVsZFxuICAgICAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgLy8gZW5hYmxlIGVkaXRpbmcgb2YgdGFzayBkZXNjcmlwdGlvbiB3aGVuIGNsaWNrZWRcbiAgICAgICAgZS50YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIHRvZG9saXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgdGhpcy5wZW5kaW5nVGFza3MoKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YTtcbiIsIi8vIEEgQ2xhc3MgZm9yIGVkaXRpbmcgdGFza3MgZnJvbSB0aGUgdGFzayBsaXN0XG5jbGFzcyBFZGl0VGFzayB7XG4gIHN0YXRpYyBlZGl0RGVzY3JpcHRpb24odGFza0luZGV4LCBuZXdEZXNjcmlwdGlvbiwgdGFza3MsIHNldFRhc2tzKSB7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tzID0gdGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSB0YXNrSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGFzaywgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9KTtcbiAgICBzZXRUYXNrcyh1cGRhdGVkVGFza3MpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRUYXNrO1xuIiwiLy8gVXBkYXRlIHRoZSB2YWx1ZXMgdG8gdGhlIGxvY2Fsc3RvcmFnZVxuY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3Ioc3RvcmFnZUtleSkge1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gIH1cblxuICBzYXZlRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH07XG5cbiAgbG9hZERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSk7XG4gICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogW107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsU3RvcmFnZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1heC13aWR0aDogNDgwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDI1cHg7XFxyXFxuICBtYXJnaW46IDg1cHggYXV0byAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5pbnB1dC1maWVsZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDY0cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAubXktdG9kbyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQgdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDE4cHggNDVweCAxOHB4IDE1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQgdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNDA3MGY0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQgLm5vdGUtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogIzcwNzA3MDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIHRleHRhcmVhOmZvY3VzIH4gLm5vdGUtaWNvbiB7XFxyXFxuICBjb2xvcjogIzQwNzBmNDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAudG9kb0xpc3RzIHtcXHJcXG4gIG1heC1oZWlnaHQ6IDM4MHB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0cyAubGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhmY2ZmO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDQxLCA2MywgMC4xKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXB4IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3RzIC5saXN0IC5jaGVja2JveCB7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBtaW4td2lkdGg6IDE4cHg7XFxyXFxuICBjb2xvcjogIzQwNzBmNDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0cyAubGlzdCAudGFzayB7XFxyXFxuICAvKiBtYXJnaW46IDAgMzBweCAwIDE1cHg7ICovXFxyXFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxufVxcclxcblxcclxcbi5saXN0IGlucHV0OmNoZWNrZWQgfiAudGFzayB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0cyAubGlzdCBpIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgcmlnaHQ6IDE1cHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogIzcwNzA3MDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdHMgLmxpc3Q6aG92ZXIgaSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0cyAubGlzdCBpOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogI2ZkOTc5NztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAucGVuZGluZy10YXNrcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wZW5kaW5nLXRhc2tzIHNwYW4ge1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5wZW5kaW5nLXRhc2tzIC5jbGVhci1idXR0b24ge1xcclxcbiAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogIzQwNzBmNDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU0YmYxO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1pbnB1dCB7XFxyXFxuICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC0xM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjMjE5NmYzO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjO1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMjVweCAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgbWFyZ2luOiA4NXB4IGF1dG8gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuaW5wdXQtZmllbGQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLm15LXRvZG8ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAxOHB4IDQ1cHggMThweCAxNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzQwNzBmNDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIC5ub3RlLWljb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICByaWdodDogMTVweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICM3MDcwNzA7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB+IC5ub3RlLWljb24ge1xcclxcbiAgY29sb3I6ICM0MDcwZjQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnRvZG9MaXN0cyB7XFxyXFxuICBtYXgtaGVpZ2h0OiAzODBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdHMgLmxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZmNmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCA0MSwgNjMsIDAuMSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFweCAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0cyAubGlzdCAuY2hlY2tib3gge1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgbWluLXdpZHRoOiAxOHB4O1xcclxcbiAgY29sb3I6ICM0MDcwZjQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdHMgLmxpc3QgLnRhc2sge1xcclxcbiAgLyogbWFyZ2luOiAwIDMwcHggMCAxNXB4OyAqL1xcclxcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCBpbnB1dDpjaGVja2VkIH4gLnRhc2sge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdHMgLmxpc3QgaSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6ICM3MDcwNzA7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3RzIC5saXN0OmhvdmVyIGkge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdHMgLmxpc3QgaTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6ICNmZDk3OTc7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnBlbmRpbmctdGFza3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGVuZGluZy10YXNrcyBzcGFuIHtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ucGVuZGluZy10YXNrcyAuY2xlYXItYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICM0MDcwZjQ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNGJmMTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2staW5wdXQge1xcclxcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgIzIxOTZmMztcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjYztcXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJMb2NhbFN0b3JhZ2UiLCJEYXRhIiwic3RvcmFnZSIsImRhdGEiLCJzZXRUYXNrcyIsImxvYWREYXRhIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNhdmVEYXRhIiwiZ2V0VGFza3MiLCJ1cGRhdGVTdG9yYWdlIiwidGFza3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIkNsZWFyVGFzayIsImRhdGFJbnN0YW5jZSIsImNsZWFyQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9kb2xpc3QiLCJjb21wbGV0ZWRUYXNrcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ0YXNrIiwiY29tcGxldGVkIiwicGVuZGluZ1Rhc2tzIiwiRWRpdFRhc2siLCJfdGFza3MiLCJXZWFrTWFwIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIndyaXRhYmxlIiwidmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiLCJwZW5kaW5nTnVtIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwidGV4dENvbnRlbnQiLCJpbnB1dEZpZWxkIiwiZSIsImlucHV0VmFsIiwidHJpbSIsImtleSIsIm5ld1Rhc2siLCJkZXNjcmlwdGlvbiIsInB1c2giLCJmb3JFYWNoIiwiaW5kZXgiLCJyZW5kZXJUYXNrcyIsIm5ld0RhdGEiLCJzcGxpY2UiLCJpbm5lckhUTUwiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNvbmNhdCIsInRyYXNoSWNvbiIsImRlbGV0ZURhdGEiLCJjaGVja2JveCIsInVwZGF0ZURhdGEiLCJ0YXNrSW5wdXQiLCJlZGl0RGVzY3JpcHRpb24iLCJiaW5kIiwidGFyZ2V0IiwicmVtb3ZlQXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJhZGREYXRhIiwiX2NyZWF0ZUNsYXNzIiwidGFza0luZGV4IiwibmV3RGVzY3JpcHRpb24iLCJ1cGRhdGVkVGFza3MiLCJtYXAiLCJfb2JqZWN0U3ByZWFkIiwic3RvcmFnZUtleSIsImdldEl0ZW0iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=