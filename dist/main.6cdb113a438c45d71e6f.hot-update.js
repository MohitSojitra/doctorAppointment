exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/schemas/User/index.ts":
/*!***********************************!*\
  !*** ./src/schemas/User/index.ts ***!
  \***********************************/
/*! flagged exports */
/*! export User [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
var user_model_1 = __webpack_require__(/*! ./user.model */ "./src/schemas/User/user.model.ts");
Object.defineProperty(exports, "User", ({ enumerable: true, get: function () { return user_model_1.User; } }));


/***/ }),

/***/ "./src/schemas/User/user.model.ts":
/*!****************************************!*\
  !*** ./src/schemas/User/user.model.ts ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
var mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
var userSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    mobile: { type: String, unique: true, required: true },
    age: { type: String },
    gender: { type: String }
}, {
    timestamps: true,
});
var User = mongoose_1.default.model("User", userSchema);
exports.User = User;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "29bc24e63d529efc5ffa"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9zY2hlbWFzL1VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvLi9zcmMvc2NoZW1hcy9Vc2VyL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZO0FBQ1osbUJBQW1CLG1CQUFPLENBQUMsc0RBQWM7QUFDekMsd0NBQXVDLENBQUMscUNBQXFDLDBCQUEwQixFQUFFLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDSi9GO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsWUFBWTtBQUNaLGlDQUFpQyxtQkFBTyxDQUFDLDBCQUFVO0FBQ25EO0FBQ0EsWUFBWSw2Q0FBNkM7QUFDekQsZUFBZSwrQkFBK0I7QUFDOUMsV0FBVyxlQUFlO0FBQzFCLGFBQWEsNkNBQTZDO0FBQzFELFVBQVUsZUFBZTtBQUN6QixhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7O1dDbEJaLG9EIiwiZmlsZSI6Im1haW4uNmNkYjExM2E0MzhjNDVkNzFlNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vc2VyID0gdm9pZCAwO1xudmFyIHVzZXJfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3VzZXIubW9kZWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVc2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VyX21vZGVsXzEuVXNlcjsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vc2VyID0gdm9pZCAwO1xudmFyIG1vbmdvb3NlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbmdvb3NlXCIpKTtcbnZhciB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlXzEuZGVmYXVsdC5TY2hlbWEoe1xuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuICAgIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIG1vYmlsZTogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBhZ2U6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgZ2VuZGVyOiB7IHR5cGU6IFN0cmluZyB9XG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbn0pO1xudmFyIFVzZXIgPSBtb25nb29zZV8xLmRlZmF1bHQubW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xuZXhwb3J0cy5Vc2VyID0gVXNlcjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IFwiMjliYzI0ZTYzZDUyOWVmYzVmZmFcIiJdLCJzb3VyY2VSb290IjoiIn0=