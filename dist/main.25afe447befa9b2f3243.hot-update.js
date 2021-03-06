exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/schemas/Doctor/doctor.model.ts":
/*!********************************************!*\
  !*** ./src/schemas/Doctor/doctor.model.ts ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctor = void 0;
var mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
var doctorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    specialization: [{ type: String }],
    curruntServingHospital: { type: String },
    experience: { type: String },
    bio: { type: String },
    workingTime: { type: String },
    imageUrl: { type: String },
    slotes: [
        {
            time: { type: String, required: true },
            userId: { type: String },
            problem: { type: String },
        },
    ],
}, {
    timestamps: true,
});
var Doctor = mongoose_1.default.model("doctor", doctorSchema);
exports.Doctor = Doctor;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "1f026e111b3217bc92a4"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9zY2hlbWFzL0RvY3Rvci9kb2N0b3IubW9kZWwudHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxjQUFjO0FBQ2QsaUNBQWlDLG1CQUFPLENBQUMsMEJBQVU7QUFDbkQ7QUFDQSxXQUFXLCtCQUErQjtBQUMxQyxzQkFBc0IsZUFBZTtBQUNyQyw2QkFBNkIsZUFBZTtBQUM1QyxpQkFBaUIsZUFBZTtBQUNoQyxVQUFVLGVBQWU7QUFDekIsa0JBQWtCLGVBQWU7QUFDakMsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCO0FBQ2xELHFCQUFxQixlQUFlO0FBQ3BDLHNCQUFzQixlQUFlO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLGNBQWM7Ozs7Ozs7Ozs7OztXQzFCZCxvRCIsImZpbGUiOiJtYWluLjI1YWZlNDQ3YmVmYTliMmYzMjQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRG9jdG9yID0gdm9pZCAwO1xudmFyIG1vbmdvb3NlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbmdvb3NlXCIpKTtcbnZhciBkb2N0b3JTY2hlbWEgPSBuZXcgbW9uZ29vc2VfMS5kZWZhdWx0LlNjaGVtYSh7XG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgc3BlY2lhbGl6YXRpb246IFt7IHR5cGU6IFN0cmluZyB9XSxcbiAgICBjdXJydW50U2VydmluZ0hvc3BpdGFsOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGV4cGVyaWVuY2U6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgYmlvOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHdvcmtpbmdUaW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGltYWdlVXJsOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHNsb3RlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHVzZXJJZDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICAgICAgICAgIHByb2JsZW06IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgICAgIH0sXG4gICAgXSxcbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxufSk7XG52YXIgRG9jdG9yID0gbW9uZ29vc2VfMS5kZWZhdWx0Lm1vZGVsKFwiZG9jdG9yXCIsIGRvY3RvclNjaGVtYSk7XG5leHBvcnRzLkRvY3RvciA9IERvY3RvcjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IFwiMWYwMjZlMTExYjMyMTdiYzkyYTRcIiJdLCJzb3VyY2VSb290IjoiIn0=