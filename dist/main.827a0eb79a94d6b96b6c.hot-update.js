exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/graphql/doctor/doctor.query.ts":
/*!********************************************!*\
  !*** ./src/graphql/doctor/doctor.query.ts ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/*! CommonJS bailout: this is used directly at 13:17-21 */
/*! CommonJS bailout: this is used directly at 22:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphQLDoctorQuery = void 0;
var graphql_relay_1 = __webpack_require__(/*! graphql-relay */ "graphql-relay");
var doctor_typedef_1 = __webpack_require__(/*! ./doctor.typedef */ "./src/graphql/doctor/doctor.typedef.ts");
var common_graphQlPagination_1 = __webpack_require__(/*! ../../common/common.graphQlPagination */ "./src/common/common.graphQlPagination.ts");
var doctor_model_1 = __webpack_require__(/*! ../../schemas/Doctor/doctor.model */ "./src/schemas/Doctor/doctor.model.ts");
var GraphQLDoctorQuery = {
    getAllsDoctor: {
        type: doctor_typedef_1.GraphQLDoctorConnection,
        args: __assign({}, graphql_relay_1.connectionArgs),
        resolve: function (parent, args, ctx, info) { return __awaiter(void 0, void 0, void 0, function () {
            var doctors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ctx._doctorRepository.getAllDoctors(args)];
                    case 1:
                        doctors = _a.sent();
                        return [4, common_graphQlPagination_1.mongooseConnectionFromArray(doctor_model_1.Doctor, doctors, args)];
                    case 2: return [2, _a.sent()];
                }
            });
        }); },
    },
};
exports.GraphQLDoctorQuery = GraphQLDoctorQuery;


/***/ }),

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
var Slot = new mongoose_1.default.Schema({
    time: { type: String, required: true },
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "user" },
    date: { type: String },
    problem: problem,
});
var doctorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    specialization: [{ type: String }],
    curruntServingHospital: { type: String },
    experience: { type: String },
    bio: { type: String },
    workingTime: { type: String },
    imageUrl: { type: String },
    slotes: [Slot],
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
/******/ 		__webpack_require__.h = () => "c2f12d259be63d7ea85e"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9ncmFwaHFsL2RvY3Rvci9kb2N0b3IucXVlcnkudHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvLi9zcmMvc2NoZW1hcy9Eb2N0b3IvZG9jdG9yLm1vZGVsLnRzIiwid2VicGFjazovL01ha2VTb25nL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsMEJBQTBCO0FBQzFCLHNCQUFzQixtQkFBTyxDQUFDLG9DQUFlO0FBQzdDLHVCQUF1QixtQkFBTyxDQUFDLGdFQUFrQjtBQUNqRCxpQ0FBaUMsbUJBQU8sQ0FBQyx1RkFBdUM7QUFDaEYscUJBQXFCLG1CQUFPLENBQUMsK0VBQW1DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsRUFBRSxFQUFFO0FBQ2IsS0FBSztBQUNMO0FBQ0EsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7QUN4RWI7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxjQUFjO0FBQ2QsaUNBQWlDLG1CQUFPLENBQUMsMEJBQVU7QUFDbkQ7QUFDQSxXQUFXLCtCQUErQjtBQUMxQyxhQUFhLHVEQUF1RDtBQUNwRSxXQUFXLGVBQWU7QUFDMUI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxXQUFXLCtCQUErQjtBQUMxQyxzQkFBc0IsZUFBZTtBQUNyQyw2QkFBNkIsZUFBZTtBQUM1QyxpQkFBaUIsZUFBZTtBQUNoQyxVQUFVLGVBQWU7QUFDekIsa0JBQWtCLGVBQWU7QUFDakMsZUFBZSxlQUFlO0FBQzlCO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsY0FBYzs7Ozs7Ozs7Ozs7O1dDMUJkLG9EIiwiZmlsZSI6Im1haW4uODI3YTBlYjc5YTk0ZDZiOTZiNmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdyYXBoUUxEb2N0b3JRdWVyeSA9IHZvaWQgMDtcbnZhciBncmFwaHFsX3JlbGF5XzEgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZWxheVwiKTtcbnZhciBkb2N0b3JfdHlwZWRlZl8xID0gcmVxdWlyZShcIi4vZG9jdG9yLnR5cGVkZWZcIik7XG52YXIgY29tbW9uX2dyYXBoUWxQYWdpbmF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tbW9uL2NvbW1vbi5ncmFwaFFsUGFnaW5hdGlvblwiKTtcbnZhciBkb2N0b3JfbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9zY2hlbWFzL0RvY3Rvci9kb2N0b3IubW9kZWxcIik7XG52YXIgR3JhcGhRTERvY3RvclF1ZXJ5ID0ge1xuICAgIGdldEFsbHNEb2N0b3I6IHtcbiAgICAgICAgdHlwZTogZG9jdG9yX3R5cGVkZWZfMS5HcmFwaFFMRG9jdG9yQ29ubmVjdGlvbixcbiAgICAgICAgYXJnczogX19hc3NpZ24oe30sIGdyYXBocWxfcmVsYXlfMS5jb25uZWN0aW9uQXJncyksXG4gICAgICAgIHJlc29sdmU6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MsIGN0eCwgaW5mbykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkb2N0b3JzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGN0eC5fZG9jdG9yUmVwb3NpdG9yeS5nZXRBbGxEb2N0b3JzKGFyZ3MpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9ycyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY29tbW9uX2dyYXBoUWxQYWdpbmF0aW9uXzEubW9uZ29vc2VDb25uZWN0aW9uRnJvbUFycmF5KGRvY3Rvcl9tb2RlbF8xLkRvY3RvciwgZG9jdG9ycywgYXJncyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiwgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0sXG4gICAgfSxcbn07XG5leHBvcnRzLkdyYXBoUUxEb2N0b3JRdWVyeSA9IEdyYXBoUUxEb2N0b3JRdWVyeTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Eb2N0b3IgPSB2b2lkIDA7XG52YXIgbW9uZ29vc2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9uZ29vc2VcIikpO1xudmFyIFNsb3QgPSBuZXcgbW9uZ29vc2VfMS5kZWZhdWx0LlNjaGVtYSh7XG4gICAgdGltZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgdXNlcklkOiB7IHR5cGU6IG1vbmdvb3NlXzEuZGVmYXVsdC5UeXBlcy5PYmplY3RJZCwgcmVmOiBcInVzZXJcIiB9LFxuICAgIGRhdGU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgcHJvYmxlbTogcHJvYmxlbSxcbn0pO1xudmFyIGRvY3RvclNjaGVtYSA9IG5ldyBtb25nb29zZV8xLmRlZmF1bHQuU2NoZW1hKHtcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBzcGVjaWFsaXphdGlvbjogW3sgdHlwZTogU3RyaW5nIH1dLFxuICAgIGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWw6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgZXhwZXJpZW5jZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBiaW86IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgd29ya2luZ1RpbWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgaW1hZ2VVcmw6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgc2xvdGVzOiBbU2xvdF0sXG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbn0pO1xudmFyIERvY3RvciA9IG1vbmdvb3NlXzEuZGVmYXVsdC5tb2RlbChcImRvY3RvclwiLCBkb2N0b3JTY2hlbWEpO1xuZXhwb3J0cy5Eb2N0b3IgPSBEb2N0b3I7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiBcImMyZjEyZDI1OWJlNjNkN2VhODVlXCIiXSwic291cmNlUm9vdCI6IiJ9