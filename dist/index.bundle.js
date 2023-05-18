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

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function.js */ "./src/modules/function.js");

var updateStorage = function updateStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
var renderTasks = function renderTasks(tasks, deleteData, updateData, setTasks, pendingTasks) {
  var todolist = document.querySelector('.todoLists');
  todolist.innerHTML = '';
  tasks.forEach(function (task, index) {
    var element = document.createElement('li');
    if (task.completed === true) {
      element.classList.add('completed', 'list');
    } else {
      element.classList.add('in-progress', 'list');
    }
    element.innerHTML = "\n      <input type=\"checkbox\" id=\"check\" class=\"checkbox\" ".concat(task.completed ? 'checked' : '', ">\n      <input type=\"text\" class=\"task\" id=\"task-input\" value=\"").concat(task.description, "\" ").concat(task.completed ? 'disabled' : '', ">\n      <i class=\"uil uil-trash\"></i>\n    ");
    var trashIcon = element.querySelector('.uil-trash');
    trashIcon.addEventListener('click', function () {
      deleteData(index);
    });
    var checkbox = element.querySelector('.checkbox');
    checkbox.addEventListener('change', function () {
      task.completed = !task.completed;
      updateData(index, task);
    });
    var taskInput = element.querySelector('.task');
    taskInput.addEventListener('blur', function () {
      _function_js__WEBPACK_IMPORTED_MODULE_0__["default"].editDescription(index, taskInput.value, tasks, setTasks, updateStorage);
    });
    taskInput.addEventListener('keyup', function (e) {
      if (e.key === 'Enter') {
        taskInput.blur(); // Trigger the blur event to save the changes
      }
    });

    todolist.appendChild(element);
    pendingTasks();
  });
};

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
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/modules/app.js");
/* harmony import */ var _clear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clear.js */ "./src/modules/clear.js");
/* harmony import */ var _taskUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskUtils.js */ "./src/modules/taskUtils.js");
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
    _defineProperty(this, "renderTasks", function () {
      (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_classPrivateFieldGet(_this, _tasks), _this.deleteData.bind(_this), _this.updateData.bind(_this), _this.setTasks.bind(_this), _this.pendingTasks);
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
      var noteIcon = document.querySelector('.input-field .note-icon');
      var handleAddTask = function handleAddTask() {
        var inputVal = inputField.value.trim();
        if (inputVal.length > 0) {
          (0,_taskUtils_js__WEBPACK_IMPORTED_MODULE_3__.addTask)(_classPrivateFieldGet(_this, _tasks), inputVal, _this.renderTasks, _this.pendingTasks, _clear_js__WEBPACK_IMPORTED_MODULE_2__.updateStorage);
          inputField.value = '';
        }
      };
      inputField.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
          handleAddTask();
        }
      });
      noteIcon.addEventListener('click', function () {
        handleAddTask();
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
      (0,_taskUtils_js__WEBPACK_IMPORTED_MODULE_3__.deleteData)(_classPrivateFieldGet(_this, _tasks), index, _this.renderTasks, _this.pendingTasks, _clear_js__WEBPACK_IMPORTED_MODULE_2__.updateStorage);
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
var EditTask = /*#__PURE__*/function () {
  function EditTask() {
    _classCallCheck(this, EditTask);
  }
  _createClass(EditTask, null, [{
    key: "editDescription",
    value: function editDescription(taskIndex, newDescription, tasks, setTasks, updateStorage) {
      var updatedTasks = tasks.map(function (task, index) {
        if (index === taskIndex) {
          return _objectSpread(_objectSpread({}, task), {}, {
            description: newDescription
          });
        }
        return task;
      });
      setTasks(updatedTasks); // Update the tasks with the edited description
      updateStorage(updatedTasks); // Save the changes to the storage
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

/***/ "./src/modules/taskUtils.js":
/*!**********************************!*\
  !*** ./src/modules/taskUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteData": () => (/* binding */ deleteData)
/* harmony export */ });
var deleteData = function deleteData(tasks, index, renderTasks, pendingTasks, updateStorage) {
  tasks.splice(index, 1);
  tasks.forEach(function (task, index) {
    task.index = index + 1;
  });
  renderTasks();
  pendingTasks();
  updateStorage(tasks);
};
var addTask = function addTask(tasks, inputVal, renderTasks, pendingTasks, updateStorage) {
  var newTask = {
    description: inputVal,
    completed: false
  };
  tasks.push(newTask);
  tasks.forEach(function (task, index) {
    task.index = index + 1;
  });
  renderTasks();
  pendingTasks();
  updateStorage(tasks);
};


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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #e3f2fd;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  max-width: 480px;\r\n  width: 100%;\r\n  border-radius: 8px;\r\n  padding: 25px;\r\n  margin: 85px auto 0;\r\n  background-color: white;\r\n  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.container .input-field {\r\n  position: relative;\r\n  height: 64px;\r\n  width: 100%;\r\n}\r\n\r\n.container .my-todo {\r\n  margin-bottom: 16px;\r\n}\r\n\r\ntextarea {\r\n  overflow: hidden;\r\n}\r\n\r\n.input-field textarea {\r\n  height: 100%;\r\n  width: 100%;\r\n  outline: none;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  border-radius: 8px;\r\n  padding: 18px 45px 18px 15px;\r\n  border: 1px solid #ccc;\r\n  resize: none;\r\n}\r\n\r\n.input-field textarea:focus {\r\n  border-color: #4070f4;\r\n}\r\n\r\n.input-field .note-icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  transform: translateY(-50%);\r\n  font-size: 24px;\r\n  color: #707070;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-field textarea:focus ~ .note-icon {\r\n  color: #4070f4;\r\n}\r\n\r\n.container .todoLists {\r\n  max-height: 380px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.todoLists .list {\r\n  display: flex;\r\n  align-items: center;\r\n  list-style: none;\r\n  background-color: #d8fcff;\r\n  box-shadow: 0 5px 10px rgba(0, 41, 63, 0.1);\r\n  width: 100%;\r\n  padding: 1px 15px;\r\n  border-radius: 8px;\r\n  margin-top: 10px;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.todoLists .list .checkbox {\r\n  height: 18px;\r\n  min-width: 18px;\r\n  color: #4070f4;\r\n}\r\n\r\n.todoLists .list .task {\r\n  /* margin: 0 30px 0 15px; */\r\n  word-break: break-all;\r\n}\r\n\r\n.list input:checked ~ .task {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.todoLists .list i {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  transform: translateY(-50%);\r\n  font-size: 20px;\r\n  color: #707070;\r\n  padding: 5px;\r\n  opacity: 0.6;\r\n  display: none;\r\n}\r\n\r\n.todoLists .list:hover i {\r\n  display: inline-flex;\r\n}\r\n\r\n.todoLists .list i:hover {\r\n  opacity: 1;\r\n  color: #f97070;\r\n}\r\n\r\n.container .pending-tasks {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 25px;\r\n}\r\n\r\n.pending-tasks span {\r\n  color: #333;\r\n}\r\n\r\n.pending-tasks .clear-button {\r\n  padding: 6px 12px;\r\n  outline: none;\r\n  border: none;\r\n  background: #4070f4;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n}\r\n\r\n.clear-button:hover {\r\n  background-color: #0e4bf1;\r\n}\r\n\r\n#task-input {\r\n  outline-style: none;\r\n  padding: 20px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  height: max-content;\r\n  font-size: 18px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 400;\r\n  margin-left: 12px;\r\n  margin-right: -13px;\r\n  color: #333;\r\n}\r\n\r\n#task-input:focus {\r\n  background-color: #dde6ff;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type='checkbox']:focus {\r\n  outline: 2px solid #2196f3;\r\n  box-shadow: 0 0 5px #ccc;\r\n  outline-offset: 2px;\r\n}\r\n\r\ninput[type='checkbox']:checked {\r\n  background-color: #2196f3;\r\n  border-color: #2196f3;\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n  .container {\r\n    padding: 25px 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .todoLists .list i {\r\n    display: inline-flex;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B;EAC5B,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,2BAA2B;EAC3B,eAAe;EACf,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,2CAA2C;EAC3C,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,2BAA2B;EAC3B,eAAe;EACf,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,kCAAkC;EAClC,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,oBAAoB;EACtB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #e3f2fd;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  max-width: 480px;\r\n  width: 100%;\r\n  border-radius: 8px;\r\n  padding: 25px;\r\n  margin: 85px auto 0;\r\n  background-color: white;\r\n  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.container .input-field {\r\n  position: relative;\r\n  height: 64px;\r\n  width: 100%;\r\n}\r\n\r\n.container .my-todo {\r\n  margin-bottom: 16px;\r\n}\r\n\r\ntextarea {\r\n  overflow: hidden;\r\n}\r\n\r\n.input-field textarea {\r\n  height: 100%;\r\n  width: 100%;\r\n  outline: none;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  border-radius: 8px;\r\n  padding: 18px 45px 18px 15px;\r\n  border: 1px solid #ccc;\r\n  resize: none;\r\n}\r\n\r\n.input-field textarea:focus {\r\n  border-color: #4070f4;\r\n}\r\n\r\n.input-field .note-icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  transform: translateY(-50%);\r\n  font-size: 24px;\r\n  color: #707070;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-field textarea:focus ~ .note-icon {\r\n  color: #4070f4;\r\n}\r\n\r\n.container .todoLists {\r\n  max-height: 380px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.todoLists .list {\r\n  display: flex;\r\n  align-items: center;\r\n  list-style: none;\r\n  background-color: #d8fcff;\r\n  box-shadow: 0 5px 10px rgba(0, 41, 63, 0.1);\r\n  width: 100%;\r\n  padding: 1px 15px;\r\n  border-radius: 8px;\r\n  margin-top: 10px;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.todoLists .list .checkbox {\r\n  height: 18px;\r\n  min-width: 18px;\r\n  color: #4070f4;\r\n}\r\n\r\n.todoLists .list .task {\r\n  /* margin: 0 30px 0 15px; */\r\n  word-break: break-all;\r\n}\r\n\r\n.list input:checked ~ .task {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.todoLists .list i {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  transform: translateY(-50%);\r\n  font-size: 20px;\r\n  color: #707070;\r\n  padding: 5px;\r\n  opacity: 0.6;\r\n  display: none;\r\n}\r\n\r\n.todoLists .list:hover i {\r\n  display: inline-flex;\r\n}\r\n\r\n.todoLists .list i:hover {\r\n  opacity: 1;\r\n  color: #f97070;\r\n}\r\n\r\n.container .pending-tasks {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 25px;\r\n}\r\n\r\n.pending-tasks span {\r\n  color: #333;\r\n}\r\n\r\n.pending-tasks .clear-button {\r\n  padding: 6px 12px;\r\n  outline: none;\r\n  border: none;\r\n  background: #4070f4;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n}\r\n\r\n.clear-button:hover {\r\n  background-color: #0e4bf1;\r\n}\r\n\r\n#task-input {\r\n  outline-style: none;\r\n  padding: 20px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  height: max-content;\r\n  font-size: 18px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 400;\r\n  margin-left: 12px;\r\n  margin-right: -13px;\r\n  color: #333;\r\n}\r\n\r\n#task-input:focus {\r\n  background-color: #dde6ff;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type='checkbox']:focus {\r\n  outline: 2px solid #2196f3;\r\n  box-shadow: 0 0 5px #ccc;\r\n  outline-offset: 2px;\r\n}\r\n\r\ninput[type='checkbox']:checked {\r\n  background-color: #2196f3;\r\n  border-color: #2196f3;\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n  .container {\r\n    padding: 25px 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .todoLists .list i {\r\n    display: inline-flex;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNYO0FBRXJDLElBQU1FLE9BQU8sR0FBRyxJQUFJRiwyREFBWSxDQUFDLE9BQU8sQ0FBQzs7QUFFekM7QUFDQSxJQUFNRyxJQUFJLEdBQUcsSUFBSUYsd0RBQUksQ0FBQyxDQUFDO0FBQ3ZCRSxJQUFJLENBQUNDLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBRWpDQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFNO0VBQzVDTCxPQUFPLENBQUNNLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDTSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1htQztBQUU5QixJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBSztFQUN0Q0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osS0FBSyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUVNLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUN0QkwsS0FBSyxFQUNMTSxVQUFVLEVBQ1ZDLFVBQVUsRUFDVmYsUUFBUSxFQUNSZ0IsWUFBWSxFQUNUO0VBQ0gsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDckRGLFFBQVEsQ0FBQ0csU0FBUyxHQUFHLEVBQUU7RUFFdkJaLEtBQUssQ0FBQ2EsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO0lBQzdCLElBQU1DLE9BQU8sR0FBR04sUUFBUSxDQUFDTyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBRTVDLElBQUlILElBQUksQ0FBQ0ksU0FBUyxLQUFLLElBQUksRUFBRTtNQUMzQkYsT0FBTyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO0lBQzVDLENBQUMsTUFBTTtNQUNMSixPQUFPLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7SUFDOUM7SUFFQUosT0FBTyxDQUFDSixTQUFTLHVFQUFBUyxNQUFBLENBRW5CUCxJQUFJLENBQUNJLFNBQVMsR0FBRyxTQUFTLEdBQUcsRUFBRSw2RUFBQUcsTUFBQSxDQUcvQlAsSUFBSSxDQUFDUSxXQUFXLFNBQUFELE1BQUEsQ0FDYlAsSUFBSSxDQUFDSSxTQUFTLEdBQUcsVUFBVSxHQUFHLEVBQUUsbURBRWhDO0lBRUQsSUFBTUssU0FBUyxHQUFHUCxPQUFPLENBQUNMLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDckRZLFNBQVMsQ0FBQzVCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ3hDVyxVQUFVLENBQUNTLEtBQUssQ0FBQztJQUNuQixDQUFDLENBQUM7SUFFRixJQUFNUyxRQUFRLEdBQUdSLE9BQU8sQ0FBQ0wsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNuRGEsUUFBUSxDQUFDN0IsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07TUFDeENtQixJQUFJLENBQUNJLFNBQVMsR0FBRyxDQUFDSixJQUFJLENBQUNJLFNBQVM7TUFDaENYLFVBQVUsQ0FBQ1EsS0FBSyxFQUFFRCxJQUFJLENBQUM7SUFDekIsQ0FBQyxDQUFDO0lBRUYsSUFBTVcsU0FBUyxHQUFHVCxPQUFPLENBQUNMLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDaERjLFNBQVMsQ0FBQzlCLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO01BQ3ZDRyxvRUFBd0IsQ0FDdEJpQixLQUFLLEVBQ0xVLFNBQVMsQ0FBQ0UsS0FBSyxFQUNmM0IsS0FBSyxFQUNMUixRQUFRLEVBQ1JPLGFBQ0YsQ0FBQztJQUNILENBQUMsQ0FBQztJQUVGMEIsU0FBUyxDQUFDOUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNpQyxDQUFDLEVBQUs7TUFDekMsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUssT0FBTyxFQUFFO1FBQ3JCSixTQUFTLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNwQjtJQUNGLENBQUMsQ0FBQzs7SUFFRnJCLFFBQVEsQ0FBQ3NCLFdBQVcsQ0FBQ2YsT0FBTyxDQUFDO0lBQzdCUixZQUFZLENBQUMsQ0FBQztFQUNoQixDQUFDLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsRUQ7QUFDTyxJQUFNVCxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBSztFQUN0Q0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osS0FBSyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUVNLElBQU1nQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsWUFBWSxFQUFLO0VBQ3pDLElBQU1DLFdBQVcsR0FBR3hCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUMzRHVCLFdBQVcsQ0FBQ3ZDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQzFDLElBQU1jLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3JELElBQU13QixjQUFjLEdBQUcxQixRQUFRLENBQUMyQixnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7O0lBRTlEO0lBQ0EsSUFBSUQsY0FBYyxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzdCLElBQU1yQyxLQUFLLEdBQUdpQyxZQUFZLENBQUNwQyxRQUFRLENBQUMsQ0FBQyxDQUFDeUMsTUFBTSxDQUFDLFVBQUN4QixJQUFJO1FBQUEsT0FBSyxDQUFDQSxJQUFJLENBQUNJLFNBQVM7TUFBQSxFQUFDO01BQ3ZFZSxZQUFZLENBQUN6QyxRQUFRLENBQUNRLEtBQUssQ0FBQztJQUM5Qjs7SUFFQTtJQUNBRCxhQUFhLENBQUNrQyxZQUFZLENBQUNwQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXRDb0MsWUFBWSxDQUFDekIsWUFBWSxDQUFDLENBQUM7RUFDN0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnFCO0FBQ2lCO0FBQ2U7QUFDRDtBQUFBLElBQUFnQyxNQUFBLG9CQUFBQyxPQUFBO0FBQUEsSUFFL0NwRCxJQUFJO0VBR1IsU0FBQUEsS0FBQSxFQUFjO0lBQUEsSUFBQXFELEtBQUE7SUFBQUMsZUFBQSxPQUFBdEQsSUFBQTtJQUFBdUQsMEJBQUEsT0FBQUosTUFBQTtNQUFBSyxRQUFBO01BQUFsQixLQUFBO0lBQUE7SUFBQW1CLGVBQUEsc0JBb0JBLFlBQU07TUFDbEJ6QyxvREFBVyxDQUFBMEMscUJBQUEsQ0FDVEwsS0FBSSxFQUFBRixNQUFBLEdBQ0pFLEtBQUksQ0FBQ3BDLFVBQVUsQ0FBQzBDLElBQUksQ0FBQ04sS0FBSSxDQUFDLEVBQzFCQSxLQUFJLENBQUNuQyxVQUFVLENBQUN5QyxJQUFJLENBQUNOLEtBQUksQ0FBQyxFQUMxQkEsS0FBSSxDQUFDbEQsUUFBUSxDQUFDd0QsSUFBSSxDQUFDTixLQUFJLENBQUMsRUFDeEJBLEtBQUksQ0FBQ2xDLFlBQ1AsQ0FBQztJQUNILENBQUM7SUFBQXNDLGVBQUEsdUJBRWMsWUFBTTtNQUNuQixJQUFNRyxVQUFVLEdBQUd2QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7TUFDekQsSUFBTUgsWUFBWSxHQUFHdUMscUJBQUEsQ0FBQUwsS0FBSSxFQUFBRixNQUFBLEVBQVFGLE1BQU0sQ0FBQyxVQUFDeEIsSUFBSTtRQUFBLE9BQUssQ0FBQ0EsSUFBSSxDQUFDSSxTQUFTO01BQUEsRUFBQztNQUNsRStCLFVBQVUsQ0FBQ0MsV0FBVyxHQUFHMUMsWUFBWSxDQUFDNkIsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUc3QixZQUFZLENBQUM2QixNQUFNO0lBQ2pGLENBQUM7SUFBQVMsZUFBQSxrQkFFUyxZQUFNO01BQ2QsSUFBTUssVUFBVSxHQUFHekMsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7TUFDbEUsSUFBTXlDLFFBQVEsR0FBRzFDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO01BRWxFLElBQU0wQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBUztRQUMxQixJQUFNQyxRQUFRLEdBQUdILFVBQVUsQ0FBQ3hCLEtBQUssQ0FBQzRCLElBQUksQ0FBQyxDQUFDO1FBRXhDLElBQUlELFFBQVEsQ0FBQ2pCLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDdkJFLHNEQUFPLENBQUFRLHFCQUFBLENBQ0xMLEtBQUksRUFBQUYsTUFBQSxHQUNKYyxRQUFRLEVBQ1JaLEtBQUksQ0FBQ3JDLFdBQVcsRUFDaEJxQyxLQUFJLENBQUNsQyxZQUFZLEVBQ2pCVCxvREFDRixDQUFDO1VBQ0RvRCxVQUFVLENBQUN4QixLQUFLLEdBQUcsRUFBRTtRQUN2QjtNQUNGLENBQUM7TUFFRHdCLFVBQVUsQ0FBQ3hELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDaUMsQ0FBQyxFQUFLO1FBQzFDLElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLE9BQU8sRUFBRTtVQUNyQndCLGFBQWEsQ0FBQyxDQUFDO1FBQ2pCO01BQ0YsQ0FBQyxDQUFDO01BRUZELFFBQVEsQ0FBQ3pELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ3ZDMEQsYUFBYSxDQUFDLENBQUM7TUFDakIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUFBUCxlQUFBLG1CQUVVO01BQUEsT0FBQUMscUJBQUEsQ0FBTUwsS0FBSSxFQUFBRixNQUFBO0lBQUEsQ0FBTztJQUFBTSxlQUFBLHFCQUVmLFVBQUMvQixLQUFLLEVBQUV5QyxPQUFPLEVBQUs7TUFDL0JULHFCQUFBLENBQUFMLEtBQUksRUFBQUYsTUFBQSxFQUFRekIsS0FBSyxDQUFDLEdBQUd5QyxPQUFPO01BQzVCZCxLQUFJLENBQUNyQyxXQUFXLENBQUMsQ0FBQztNQUNsQnFDLEtBQUksQ0FBQ2xDLFlBQVksQ0FBQyxDQUFDO01BQ25CVCx3REFBYSxDQUFBZ0QscUJBQUEsQ0FBQ0wsS0FBSSxFQUFBRixNQUFBLENBQU8sQ0FBQztJQUM1QixDQUFDO0lBQUFNLGVBQUEscUJBRVksVUFBQy9CLEtBQUssRUFBSztNQUN0QlQseURBQVUsQ0FBQXlDLHFCQUFBLENBQ1JMLEtBQUksRUFBQUYsTUFBQSxHQUNKekIsS0FBSyxFQUNMMkIsS0FBSSxDQUFDckMsV0FBVyxFQUNoQnFDLEtBQUksQ0FBQ2xDLFlBQVksRUFDakJULG9EQUNGLENBQUM7SUFDSCxDQUFDO0lBbEZDMEQscUJBQUEsS0FBSSxFQUFBakIsTUFBQSxFQUFVLEVBQUU7SUFDaEIsSUFBSSxDQUFDbkMsV0FBVyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDcUQsT0FBTyxDQUFDLENBQUM7SUFDZDFCLG9EQUFTLENBQUMsSUFBSSxDQUFDO0VBQ2pCO0VBQUMyQixZQUFBLENBQUF0RSxJQUFBO0lBQUF3QyxHQUFBO0lBQUFGLEtBQUEsRUFFRCxTQUFBOUIsU0FBQSxFQUFXO01BQ1QsT0FBQWtELHFCQUFBLENBQU8sSUFBSSxFQUFBUCxNQUFBO0lBQ2I7RUFBQztJQUFBWCxHQUFBO0lBQUFGLEtBQUEsRUFFRCxTQUFBbkMsU0FBU1EsS0FBSyxFQUFFO01BQ2Q7TUFDQUEsS0FBSyxDQUFDYSxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7UUFDN0JELElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLLEdBQUcsQ0FBQztNQUN4QixDQUFDLENBQUM7TUFDRjBDLHFCQUFBLEtBQUksRUFBQWpCLE1BQUEsRUFBVXhDLEtBQUs7TUFDbkIsSUFBSSxDQUFDSyxXQUFXLENBQUMsQ0FBQztJQUNwQjtFQUFDO0VBQUEsT0FBQWhCLElBQUE7QUFBQTtBQW9FSCxpRUFBZUEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM5RmJTLFFBQVE7RUFBQSxTQUFBQSxTQUFBO0lBQUE2QyxlQUFBLE9BQUE3QyxRQUFBO0VBQUE7RUFBQTZELFlBQUEsQ0FBQTdELFFBQUE7SUFBQStCLEdBQUE7SUFBQUYsS0FBQSxFQUNaLFNBQUFELGdCQUNFa0MsU0FBUyxFQUNUQyxjQUFjLEVBQ2Q3RCxLQUFLLEVBQ0xSLFFBQVEsRUFDUk8sYUFBYSxFQUNiO01BQ0EsSUFBTStELFlBQVksR0FBRzlELEtBQUssQ0FBQytELEdBQUcsQ0FBQyxVQUFDakQsSUFBSSxFQUFFQyxLQUFLLEVBQUs7UUFDOUMsSUFBSUEsS0FBSyxLQUFLNkMsU0FBUyxFQUFFO1VBQ3ZCLE9BQUFJLGFBQUEsQ0FBQUEsYUFBQSxLQUFZbEQsSUFBSTtZQUFFUSxXQUFXLEVBQUV1QztVQUFjO1FBQy9DO1FBQ0EsT0FBTy9DLElBQUk7TUFDYixDQUFDLENBQUM7TUFFRnRCLFFBQVEsQ0FBQ3NFLFlBQVksQ0FBQyxDQUFDLENBQUM7TUFDeEIvRCxhQUFhLENBQUMrRCxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQy9CO0VBQUM7RUFBQSxPQUFBaEUsUUFBQTtBQUFBO0FBR0gsaUVBQWVBLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCdkI7QUFBQSxJQUNNVixZQUFZLGdCQUFBdUUsWUFBQSxDQUNoQixTQUFBdkUsYUFBWTZFLFVBQVUsRUFBRTtFQUFBLElBQUF2QixLQUFBO0VBQUFDLGVBQUEsT0FBQXZELFlBQUE7RUFBQTBELGVBQUEsbUJBSWIsVUFBQ3ZELElBQUksRUFBSztJQUNuQlUsWUFBWSxDQUFDQyxPQUFPLENBQUN3QyxLQUFJLENBQUN1QixVQUFVLEVBQUU5RCxJQUFJLENBQUNDLFNBQVMsQ0FBQ2IsSUFBSSxDQUFDLENBQUM7RUFDN0QsQ0FBQztFQUFBdUQsZUFBQSxtQkFFVSxZQUFNO0lBQ2YsSUFBTXZELElBQUksR0FBR1UsWUFBWSxDQUFDaUUsT0FBTyxDQUFDeEIsS0FBSSxDQUFDdUIsVUFBVSxDQUFDO0lBQ2xELE9BQU8xRSxJQUFJLEdBQUdZLElBQUksQ0FBQ2dFLEtBQUssQ0FBQzVFLElBQUksQ0FBQyxHQUFHLEVBQUU7RUFDckMsQ0FBQztFQVZDLElBQUksQ0FBQzBFLFVBQVUsR0FBR0EsVUFBVTtBQUM5QixDQUFDO0FBWUgsaUVBQWU3RSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUNoQjNCLElBQU1rQixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSU4sS0FBSyxFQUFFZSxLQUFLLEVBQUVWLFdBQVcsRUFBRUcsWUFBWSxFQUFFVCxhQUFhLEVBQUs7RUFDN0VDLEtBQUssQ0FBQ29FLE1BQU0sQ0FBQ3JELEtBQUssRUFBRSxDQUFDLENBQUM7RUFDdEJmLEtBQUssQ0FBQ2EsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO0lBQzdCRCxJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSyxHQUFHLENBQUM7RUFDeEIsQ0FBQyxDQUFDO0VBQ0ZWLFdBQVcsQ0FBQyxDQUFDO0VBQ2JHLFlBQVksQ0FBQyxDQUFDO0VBQ2RULGFBQWEsQ0FBQ0MsS0FBSyxDQUFDO0FBQ3RCLENBQUM7QUFFRCxJQUFNdUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUl2QyxLQUFLLEVBQUVzRCxRQUFRLEVBQUVqRCxXQUFXLEVBQUVHLFlBQVksRUFBRVQsYUFBYSxFQUFLO0VBQzdFLElBQU1zRSxPQUFPLEdBQUc7SUFDZC9DLFdBQVcsRUFBRWdDLFFBQVE7SUFDckJwQyxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0RsQixLQUFLLENBQUNzRSxJQUFJLENBQUNELE9BQU8sQ0FBQztFQUNuQnJFLEtBQUssQ0FBQ2EsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO0lBQzdCRCxJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSyxHQUFHLENBQUM7RUFDeEIsQ0FBQyxDQUFDO0VBQ0ZWLFdBQVcsQ0FBQyxDQUFDO0VBQ2JHLFlBQVksQ0FBQyxDQUFDO0VBQ2RULGFBQWEsQ0FBQ0MsS0FBSyxDQUFDO0FBQ3RCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkQ7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixnSEFBZ0gsSUFBSSxJQUFJLGtCQUFrQjtBQUMxSTtBQUNBLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLDZCQUE2Qix5Q0FBeUMsS0FBSyxjQUFjLGdDQUFnQyxLQUFLLG9CQUFvQix5QkFBeUIsdUJBQXVCLGtCQUFrQix5QkFBeUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsK0NBQStDLEtBQUssaUNBQWlDLHlCQUF5QixtQkFBbUIsa0JBQWtCLEtBQUssNkJBQTZCLDBCQUEwQixLQUFLLGtCQUFrQix1QkFBdUIsS0FBSywrQkFBK0IsbUJBQW1CLGtCQUFrQixvQkFBb0Isc0JBQXNCLHVCQUF1Qix5QkFBeUIsbUNBQW1DLDZCQUE2QixtQkFBbUIsS0FBSyxxQ0FBcUMsNEJBQTRCLEtBQUssaUNBQWlDLHlCQUF5QixlQUFlLGtCQUFrQixrQ0FBa0Msc0JBQXNCLHFCQUFxQixzQkFBc0IsS0FBSyxrREFBa0QscUJBQXFCLEtBQUssK0JBQStCLHdCQUF3Qix1QkFBdUIsS0FBSywwQkFBMEIsb0JBQW9CLDBCQUEwQix1QkFBdUIsZ0NBQWdDLGtEQUFrRCxrQkFBa0Isd0JBQXdCLHlCQUF5Qix1QkFBdUIseUJBQXlCLHNCQUFzQixLQUFLLG9DQUFvQyxtQkFBbUIsc0JBQXNCLHFCQUFxQixLQUFLLGdDQUFnQyxnQ0FBZ0MsOEJBQThCLEtBQUsscUNBQXFDLG9DQUFvQyxLQUFLLDRCQUE0Qix5QkFBeUIsZUFBZSxrQkFBa0Isa0NBQWtDLHNCQUFzQixxQkFBcUIsbUJBQW1CLG1CQUFtQixvQkFBb0IsS0FBSyxrQ0FBa0MsMkJBQTJCLEtBQUssa0NBQWtDLGlCQUFpQixxQkFBcUIsS0FBSyxtQ0FBbUMsb0JBQW9CLDBCQUEwQixxQ0FBcUMsdUJBQXVCLEtBQUssNkJBQTZCLGtCQUFrQixLQUFLLHNDQUFzQyx3QkFBd0Isb0JBQW9CLG1CQUFtQiwwQkFBMEIsa0JBQWtCLHNCQUFzQix5QkFBeUIsc0JBQXNCLDBCQUEwQixLQUFLLDZCQUE2QixnQ0FBZ0MsS0FBSyxxQkFBcUIsMEJBQTBCLG9CQUFvQixtQkFBbUIseUJBQXlCLGtCQUFrQiwwQkFBMEIsc0JBQXNCLHlDQUF5Qyx1QkFBdUIsd0JBQXdCLDBCQUEwQixrQkFBa0IsS0FBSywyQkFBMkIsZ0NBQWdDLEtBQUssZ0NBQWdDLDRCQUE0QixrQkFBa0IsbUJBQW1CLDZCQUE2Qiw2QkFBNkIseUJBQXlCLHdCQUF3QixzQkFBc0IsdUNBQXVDLEtBQUssc0NBQXNDLGlDQUFpQywrQkFBK0IsMEJBQTBCLEtBQUssd0NBQXdDLGdDQUFnQyw0QkFBNEIsS0FBSyw4Q0FBOEMsa0JBQWtCLDJCQUEyQixPQUFPLEtBQUssOENBQThDLDBCQUEwQiw2QkFBNkIsT0FBTyxLQUFLLFdBQVcsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLGdHQUFnRyxJQUFJLElBQUksbUJBQW1CLFdBQVcsZ0JBQWdCLGlCQUFpQiw2QkFBNkIseUNBQXlDLEtBQUssY0FBYyxnQ0FBZ0MsS0FBSyxvQkFBb0IseUJBQXlCLHVCQUF1QixrQkFBa0IseUJBQXlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLCtDQUErQyxLQUFLLGlDQUFpQyx5QkFBeUIsbUJBQW1CLGtCQUFrQixLQUFLLDZCQUE2QiwwQkFBMEIsS0FBSyxrQkFBa0IsdUJBQXVCLEtBQUssK0JBQStCLG1CQUFtQixrQkFBa0Isb0JBQW9CLHNCQUFzQix1QkFBdUIseUJBQXlCLG1DQUFtQyw2QkFBNkIsbUJBQW1CLEtBQUsscUNBQXFDLDRCQUE0QixLQUFLLGlDQUFpQyx5QkFBeUIsZUFBZSxrQkFBa0Isa0NBQWtDLHNCQUFzQixxQkFBcUIsc0JBQXNCLEtBQUssa0RBQWtELHFCQUFxQixLQUFLLCtCQUErQix3QkFBd0IsdUJBQXVCLEtBQUssMEJBQTBCLG9CQUFvQiwwQkFBMEIsdUJBQXVCLGdDQUFnQyxrREFBa0Qsa0JBQWtCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLHlCQUF5QixzQkFBc0IsS0FBSyxvQ0FBb0MsbUJBQW1CLHNCQUFzQixxQkFBcUIsS0FBSyxnQ0FBZ0MsZ0NBQWdDLDhCQUE4QixLQUFLLHFDQUFxQyxvQ0FBb0MsS0FBSyw0QkFBNEIseUJBQXlCLGVBQWUsa0JBQWtCLGtDQUFrQyxzQkFBc0IscUJBQXFCLG1CQUFtQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDJCQUEyQixLQUFLLGtDQUFrQyxpQkFBaUIscUJBQXFCLEtBQUssbUNBQW1DLG9CQUFvQiwwQkFBMEIscUNBQXFDLHVCQUF1QixLQUFLLDZCQUE2QixrQkFBa0IsS0FBSyxzQ0FBc0Msd0JBQXdCLG9CQUFvQixtQkFBbUIsMEJBQTBCLGtCQUFrQixzQkFBc0IseUJBQXlCLHNCQUFzQiwwQkFBMEIsS0FBSyw2QkFBNkIsZ0NBQWdDLEtBQUsscUJBQXFCLDBCQUEwQixvQkFBb0IsbUJBQW1CLHlCQUF5QixrQkFBa0IsMEJBQTBCLHNCQUFzQix5Q0FBeUMsdUJBQXVCLHdCQUF3QiwwQkFBMEIsa0JBQWtCLEtBQUssMkJBQTJCLGdDQUFnQyxLQUFLLGdDQUFnQyw0QkFBNEIsa0JBQWtCLG1CQUFtQiw2QkFBNkIsNkJBQTZCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHVDQUF1QyxLQUFLLHNDQUFzQyxpQ0FBaUMsK0JBQStCLDBCQUEwQixLQUFLLHdDQUF3QyxnQ0FBZ0MsNEJBQTRCLEtBQUssOENBQThDLGtCQUFrQiwyQkFBMkIsT0FBTyxLQUFLLDhDQUE4QywwQkFBMEIsNkJBQTZCLE9BQU8sS0FBSyx1QkFBdUI7QUFDbDZTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvbW9kdWxlcy90YXNrVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlLmpzJztcbmltcG9ydCBEYXRhIGZyb20gJy4vbW9kdWxlcy9kYXRhLmpzJztcblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2UoJ3Rhc2tzJyk7XG5cbi8vIFVwZGF0ZSBsb2NhbHN0b3JhZ2UgYW5kIERhdGEgY2xhc3Mgb24gbG9hZFxuY29uc3QgZGF0YSA9IG5ldyBEYXRhKCk7XG5kYXRhLnNldFRhc2tzKHN0b3JhZ2UubG9hZERhdGEoKSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gIHN0b3JhZ2Uuc2F2ZURhdGEoZGF0YS5nZXRUYXNrcygpKTtcbn0pO1xuIiwiaW1wb3J0IEVkaXRUYXNrIGZyb20gJy4vZnVuY3Rpb24uanMnO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU3RvcmFnZSA9ICh0YXNrcykgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tzID0gKFxuICB0YXNrcyxcbiAgZGVsZXRlRGF0YSxcbiAgdXBkYXRlRGF0YSxcbiAgc2V0VGFza3MsXG4gIHBlbmRpbmdUYXNrcyxcbikgPT4ge1xuICBjb25zdCB0b2RvbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdHMnKTtcbiAgdG9kb2xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnLCAnbGlzdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luLXByb2dyZXNzJywgJ2xpc3QnKTtcbiAgICB9XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrXCIgY2xhc3M9XCJjaGVja2JveFwiICR7XG4gIHRhc2suY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJydcbn0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRhc2tcIiBpZD1cInRhc2staW5wdXRcIiB2YWx1ZT1cIiR7XG4gIHRhc2suZGVzY3JpcHRpb25cbn1cIiAke3Rhc2suY29tcGxldGVkID8gJ2Rpc2FibGVkJyA6ICcnfT5cbiAgICAgIDxpIGNsYXNzPVwidWlsIHVpbC10cmFzaFwiPjwvaT5cbiAgICBgO1xuXG4gICAgY29uc3QgdHJhc2hJY29uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudWlsLXRyYXNoJyk7XG4gICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGVsZXRlRGF0YShpbmRleCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gICAgICB1cGRhdGVEYXRhKGluZGV4LCB0YXNrKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIEVkaXRUYXNrLmVkaXREZXNjcmlwdGlvbihcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHRhc2tJbnB1dC52YWx1ZSxcbiAgICAgICAgdGFza3MsXG4gICAgICAgIHNldFRhc2tzLFxuICAgICAgICB1cGRhdGVTdG9yYWdlLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgdGFza0lucHV0LmJsdXIoKTsgLy8gVHJpZ2dlciB0aGUgYmx1ciBldmVudCB0byBzYXZlIHRoZSBjaGFuZ2VzXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0b2RvbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBwZW5kaW5nVGFza3MoKTtcbiAgfSk7XG59O1xuIiwiLy8gQSBDbGFzcyBmb3IgY2xlYXJpbmcgdGFza3MgZnJvbSB0aGUgdGFzayBsaXN0c1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0b3JhZ2UgPSAodGFza3MpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDbGVhclRhc2sgPSAoZGF0YUluc3RhbmNlKSA9PiB7XG4gIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuICBjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0b2RvbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdHMnKTtcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IHRvZG9saXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZWQnKTtcblxuICAgIC8vIHJlbW92ZSBvbmx5IGNvbXBsZXRlZCB0YXNrcyBpZiB0aGVyZSBhcmUgYW55XG4gICAgaWYgKGNvbXBsZXRlZFRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRhc2tzID0gZGF0YUluc3RhbmNlLmdldFRhc2tzKCkuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICAgICAgZGF0YUluc3RhbmNlLnNldFRhc2tzKHRhc2tzKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgc3RvcmFnZSB3aXRoIHRoZSBsYXRlc3QgdGFza3NcbiAgICB1cGRhdGVTdG9yYWdlKGRhdGFJbnN0YW5jZS5nZXRUYXNrcygpKTtcblxuICAgIGRhdGFJbnN0YW5jZS5wZW5kaW5nVGFza3MoKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL2FwcC5qcyc7XG5pbXBvcnQgeyBDbGVhclRhc2ssIHVwZGF0ZVN0b3JhZ2UgfSBmcm9tICcuL2NsZWFyLmpzJztcbmltcG9ydCB7IGRlbGV0ZURhdGEsIGFkZFRhc2sgfSBmcm9tICcuL3Rhc2tVdGlscy5qcyc7XG5cbmNsYXNzIERhdGEge1xuICAjdGFza3M7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jdGFza3MgPSBbXTtcbiAgICB0aGlzLnJlbmRlclRhc2tzKCk7XG4gICAgdGhpcy5hZGREYXRhKCk7XG4gICAgQ2xlYXJUYXNrKHRoaXMpO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Rhc2tzO1xuICB9XG5cbiAgc2V0VGFza3ModGFza3MpIHtcbiAgICAvLyBBc3NpZ24gbmV3IGluZGV4IHZhbHVlcyBiYXNlZCBvbiBvcmRlciBpbiBhcnJheVxuICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICB0YXNrLmluZGV4ID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICAgIHRoaXMuI3Rhc2tzID0gdGFza3M7XG4gICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICB9XG5cbiAgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgcmVuZGVyVGFza3MoXG4gICAgICB0aGlzLiN0YXNrcyxcbiAgICAgIHRoaXMuZGVsZXRlRGF0YS5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy51cGRhdGVEYXRhLmJpbmQodGhpcyksXG4gICAgICB0aGlzLnNldFRhc2tzLmJpbmQodGhpcyksXG4gICAgICB0aGlzLnBlbmRpbmdUYXNrcyxcbiAgICApO1xuICB9O1xuXG4gIHBlbmRpbmdUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBwZW5kaW5nTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlbmRpbmctbnVtJyk7XG4gICAgY29uc3QgcGVuZGluZ1Rhc2tzID0gdGhpcy4jdGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICAgIHBlbmRpbmdOdW0udGV4dENvbnRlbnQgPSBwZW5kaW5nVGFza3MubGVuZ3RoID09PSAwID8gJ25vJyA6IHBlbmRpbmdUYXNrcy5sZW5ndGg7XG4gIH07XG5cbiAgYWRkRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZpZWxkIHRleHRhcmVhJyk7XG4gICAgY29uc3Qgbm90ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmllbGQgLm5vdGUtaWNvbicpO1xuXG4gICAgY29uc3QgaGFuZGxlQWRkVGFzayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VmFsID0gaW5wdXRGaWVsZC52YWx1ZS50cmltKCk7XG5cbiAgICAgIGlmIChpbnB1dFZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFkZFRhc2soXG4gICAgICAgICAgdGhpcy4jdGFza3MsXG4gICAgICAgICAgaW5wdXRWYWwsXG4gICAgICAgICAgdGhpcy5yZW5kZXJUYXNrcyxcbiAgICAgICAgICB0aGlzLnBlbmRpbmdUYXNrcyxcbiAgICAgICAgICB1cGRhdGVTdG9yYWdlLFxuICAgICAgICApO1xuICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGhhbmRsZUFkZFRhc2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5vdGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlQWRkVGFzaygpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlYWREYXRhID0gKCkgPT4gdGhpcy4jdGFza3M7XG5cbiAgdXBkYXRlRGF0YSA9IChpbmRleCwgbmV3RGF0YSkgPT4ge1xuICAgIHRoaXMuI3Rhc2tzW2luZGV4XSA9IG5ld0RhdGE7XG4gICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICAgIHRoaXMucGVuZGluZ1Rhc2tzKCk7XG4gICAgdXBkYXRlU3RvcmFnZSh0aGlzLiN0YXNrcyk7XG4gIH07XG5cbiAgZGVsZXRlRGF0YSA9IChpbmRleCkgPT4ge1xuICAgIGRlbGV0ZURhdGEoXG4gICAgICB0aGlzLiN0YXNrcyxcbiAgICAgIGluZGV4LFxuICAgICAgdGhpcy5yZW5kZXJUYXNrcyxcbiAgICAgIHRoaXMucGVuZGluZ1Rhc2tzLFxuICAgICAgdXBkYXRlU3RvcmFnZSxcbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhO1xuIiwiY2xhc3MgRWRpdFRhc2sge1xuICBzdGF0aWMgZWRpdERlc2NyaXB0aW9uKFxuICAgIHRhc2tJbmRleCxcbiAgICBuZXdEZXNjcmlwdGlvbixcbiAgICB0YXNrcyxcbiAgICBzZXRUYXNrcyxcbiAgICB1cGRhdGVTdG9yYWdlLFxuICApIHtcbiAgICBjb25zdCB1cGRhdGVkVGFza3MgPSB0YXNrcy5tYXAoKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IHRhc2tJbmRleCkge1xuICAgICAgICByZXR1cm4geyAuLi50YXNrLCBkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24gfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0pO1xuXG4gICAgc2V0VGFza3ModXBkYXRlZFRhc2tzKTsgLy8gVXBkYXRlIHRoZSB0YXNrcyB3aXRoIHRoZSBlZGl0ZWQgZGVzY3JpcHRpb25cbiAgICB1cGRhdGVTdG9yYWdlKHVwZGF0ZWRUYXNrcyk7IC8vIFNhdmUgdGhlIGNoYW5nZXMgdG8gdGhlIHN0b3JhZ2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0VGFzaztcbiIsIi8vIFVwZGF0ZSB0aGUgdmFsdWVzIHRvIHRoZSBsb2NhbHN0b3JhZ2VcbmNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKHN0b3JhZ2VLZXkpIHtcbiAgICB0aGlzLnN0b3JhZ2VLZXkgPSBzdG9yYWdlS2V5O1xuICB9XG5cbiAgc2F2ZURhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9O1xuXG4gIGxvYWREYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXkpO1xuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IFtdO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbFN0b3JhZ2U7XG4iLCJjb25zdCBkZWxldGVEYXRhID0gKHRhc2tzLCBpbmRleCwgcmVuZGVyVGFza3MsIHBlbmRpbmdUYXNrcywgdXBkYXRlU3RvcmFnZSkgPT4ge1xuICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIHRhc2suaW5kZXggPSBpbmRleCArIDE7XG4gIH0pO1xuICByZW5kZXJUYXNrcygpO1xuICBwZW5kaW5nVGFza3MoKTtcbiAgdXBkYXRlU3RvcmFnZSh0YXNrcyk7XG59O1xuXG5jb25zdCBhZGRUYXNrID0gKHRhc2tzLCBpbnB1dFZhbCwgcmVuZGVyVGFza3MsIHBlbmRpbmdUYXNrcywgdXBkYXRlU3RvcmFnZSkgPT4ge1xuICBjb25zdCBuZXdUYXNrID0ge1xuICAgIGRlc2NyaXB0aW9uOiBpbnB1dFZhbCxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9O1xuICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIHRhc2suaW5kZXggPSBpbmRleCArIDE7XG4gIH0pO1xuICByZW5kZXJUYXNrcygpO1xuICBwZW5kaW5nVGFza3MoKTtcbiAgdXBkYXRlU3RvcmFnZSh0YXNrcyk7XG59O1xuXG5leHBvcnQgeyBkZWxldGVEYXRhLCBhZGRUYXNrIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgbWFyZ2luOiA4NXB4IGF1dG8gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuaW5wdXQtZmllbGQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLm15LXRvZG8ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAxOHB4IDQ1cHggMThweCAxNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzQwNzBmNDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWZpZWxkIC5ub3RlLWljb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICByaWdodDogMTVweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGNvbG9yOiAjNzA3MDcwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQgdGV4dGFyZWE6Zm9jdXMgfiAubm90ZS1pY29uIHtcXHJcXG4gIGNvbG9yOiAjNDA3MGY0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC50b2RvTGlzdHMge1xcclxcbiAgbWF4LWhlaWdodDogMzgwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3RzIC5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGZjZmY7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgNDEsIDYzLCAwLjEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxcHggMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdHMgLmxpc3QgLmNoZWNrYm94IHtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIG1pbi13aWR0aDogMThweDtcXHJcXG4gIGNvbG9yOiAjNDA3MGY0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3RzIC5saXN0IC50YXNrIHtcXHJcXG4gIC8qIG1hcmdpbjogMCAzMHB4IDAgMTVweDsgKi9cXHJcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QgaW5wdXQ6Y2hlY2tlZCB+IC50YXNrIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3RzIC5saXN0IGkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICByaWdodDogMTVweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiAjNzA3MDcwO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0cyAubGlzdDpob3ZlciBpIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3RzIC5saXN0IGk6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiAjZjk3MDcwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5wZW5kaW5nLXRhc2tzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBlbmRpbmctdGFza3Mgc3BhbiB7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnBlbmRpbmctdGFza3MgLmNsZWFyLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNDA3MGY0O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTRiZjE7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWlucHV0IHtcXHJcXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMTJweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTEzcHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2staW5wdXQ6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTZmZjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgIzIxOTZmMztcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjYztcXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIC50b2RvTGlzdHMgLmxpc3QgaSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1heC13aWR0aDogNDgwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDI1cHg7XFxyXFxuICBtYXJnaW46IDg1cHggYXV0byAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5pbnB1dC1maWVsZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDY0cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAubXktdG9kbyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQgdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDE4cHggNDVweCAxOHB4IDE1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQgdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNDA3MGY0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZmllbGQgLm5vdGUtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICM3MDcwNzA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB+IC5ub3RlLWljb24ge1xcclxcbiAgY29sb3I6ICM0MDcwZjQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnRvZG9MaXN0cyB7XFxyXFxuICBtYXgtaGVpZ2h0OiAzODBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdHMgLmxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZmNmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCA0MSwgNjMsIDAuMSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFweCAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9MaXN0cyAubGlzdCAuY2hlY2tib3gge1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgbWluLXdpZHRoOiAxOHB4O1xcclxcbiAgY29sb3I6ICM0MDcwZjQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdHMgLmxpc3QgLnRhc2sge1xcclxcbiAgLyogbWFyZ2luOiAwIDMwcHggMCAxNXB4OyAqL1xcclxcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCBpbnB1dDpjaGVja2VkIH4gLnRhc2sge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdHMgLmxpc3QgaSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6ICM3MDcwNzA7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0xpc3RzIC5saXN0OmhvdmVyIGkge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdHMgLmxpc3QgaTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6ICNmOTcwNzA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnBlbmRpbmctdGFza3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGVuZGluZy10YXNrcyBzcGFuIHtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ucGVuZGluZy10YXNrcyAuY2xlYXItYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICM0MDcwZjQ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNGJmMTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2staW5wdXQge1xcclxcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtMTNweDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1pbnB1dDpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlNmZmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjMjE5NmYzO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjO1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMjVweCAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgLnRvZG9MaXN0cyAubGlzdCBpIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiTG9jYWxTdG9yYWdlIiwiRGF0YSIsInN0b3JhZ2UiLCJkYXRhIiwic2V0VGFza3MiLCJsb2FkRGF0YSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzYXZlRGF0YSIsImdldFRhc2tzIiwiRWRpdFRhc2siLCJ1cGRhdGVTdG9yYWdlIiwidGFza3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbmRlclRhc2tzIiwiZGVsZXRlRGF0YSIsInVwZGF0ZURhdGEiLCJwZW5kaW5nVGFza3MiLCJ0b2RvbGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImZvckVhY2giLCJ0YXNrIiwiaW5kZXgiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbXBsZXRlZCIsImNsYXNzTGlzdCIsImFkZCIsImNvbmNhdCIsImRlc2NyaXB0aW9uIiwidHJhc2hJY29uIiwiY2hlY2tib3giLCJ0YXNrSW5wdXQiLCJlZGl0RGVzY3JpcHRpb24iLCJ2YWx1ZSIsImUiLCJrZXkiLCJibHVyIiwiYXBwZW5kQ2hpbGQiLCJDbGVhclRhc2siLCJkYXRhSW5zdGFuY2UiLCJjbGVhckJ1dHRvbiIsImNvbXBsZXRlZFRhc2tzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImZpbHRlciIsImFkZFRhc2siLCJfdGFza3MiLCJXZWFrTWFwIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIndyaXRhYmxlIiwiX2RlZmluZVByb3BlcnR5IiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiYmluZCIsInBlbmRpbmdOdW0iLCJ0ZXh0Q29udGVudCIsImlucHV0RmllbGQiLCJub3RlSWNvbiIsImhhbmRsZUFkZFRhc2siLCJpbnB1dFZhbCIsInRyaW0iLCJuZXdEYXRhIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiYWRkRGF0YSIsIl9jcmVhdGVDbGFzcyIsInRhc2tJbmRleCIsIm5ld0Rlc2NyaXB0aW9uIiwidXBkYXRlZFRhc2tzIiwibWFwIiwiX29iamVjdFNwcmVhZCIsInN0b3JhZ2VLZXkiLCJnZXRJdGVtIiwicGFyc2UiLCJzcGxpY2UiLCJuZXdUYXNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=