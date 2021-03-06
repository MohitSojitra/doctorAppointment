exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/repository/doctor/doctor.repository.ts":
/*!****************************************************!*\
  !*** ./src/repository/doctor/doctor.repository.ts ***!
  \****************************************************/
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
exports.DoctorRepository = void 0;
var common_graphQlPagination_1 = __webpack_require__(/*! ../../common/common.graphQlPagination */ "./src/common/common.graphQlPagination.ts");
var doctor_model_1 = __webpack_require__(/*! ../../schemas/Doctor/doctor.model */ "./src/schemas/Doctor/doctor.model.ts");
var DoctorRepository = (function () {
    function DoctorRepository() {
    }
    DoctorRepository.prototype.addDoctor = function (_a) {
        var name = _a.name, specialization = _a.specialization, curruntServingHospital = _a.curruntServingHospital, experience = _a.experience, bio = _a.bio, workingTime = _a.workingTime;
        return __awaiter(this, void 0, void 0, function () {
            var doctor, savedDoctor, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log({
                            name: name,
                            specialization: specialization,
                            curruntServingHospital: curruntServingHospital,
                            experience: experience,
                            bio: bio,
                            workingTime: workingTime,
                        });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        doctor = new doctor_model_1.Doctor({
                            name: name,
                            specialization: specialization,
                            curruntServingHospital: curruntServingHospital,
                            experience: experience,
                            bio: bio,
                            workingTime: workingTime,
                        });
                        return [4, doctor.save()];
                    case 2:
                        savedDoctor = _b.sent();
                        if (!!!savedDoctor) {
                            throw new Error("doctor dosent saved in database");
                        }
                        else {
                            return [2, { success: true }];
                        }
                        return [3, 4];
                    case 3:
                        e_1 = _b.sent();
                        throw new Error("doctor adding fail");
                    case 4: return [2];
                }
            });
        });
    };
    DoctorRepository.prototype.editDoctor = function (_a) {
        var id = _a.id, name = _a.name, specialization = _a.specialization, curruntServingHospital = _a.curruntServingHospital, experience = _a.experience, bio = _a.bio, workingTime = _a.workingTime;
        return __awaiter(this, void 0, void 0, function () {
            var existDoctor, updateFeild, event_1, doctor, savedDoctor, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4, doctor_model_1.Doctor.findById(id)];
                    case 1:
                        existDoctor = _b.sent();
                        if (!!!!existDoctor) return [3, 2];
                        throw new Error("doctor dosent present in database");
                    case 2:
                        updateFeild = {};
                        if (!!name) {
                            updateFeild = __assign(__assign({}, updateFeild), { name: name });
                        }
                        if (!!specialization) {
                            updateFeild = __assign(__assign({}, updateFeild), { name: name });
                        }
                        return [4, doctor_model_1.Doctor.findByIdAndUpdate(req.params.doctorId, { $set: { imageUrl: "images/" + req.file.originalname } }, { new: true })];
                    case 3:
                        event_1 = _b.sent();
                        doctor = new doctor_model_1.Doctor({
                            name: name,
                            specialization: specialization,
                            curruntServingHospital: curruntServingHospital,
                            experience: experience,
                            bio: bio,
                            workingTime: workingTime,
                        });
                        return [4, doctor.save()];
                    case 4:
                        savedDoctor = _b.sent();
                        if (!!!savedDoctor) {
                            throw new Error("doctor dosent saved in database");
                        }
                        else {
                            return [2, { success: true }];
                        }
                        _b.label = 5;
                    case 5: return [3, 7];
                    case 6:
                        e_2 = _b.sent();
                        throw new Error(e_2);
                    case 7: return [2];
                }
            });
        });
    };
    DoctorRepository.prototype.getAllDoctors = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, where, limit, orderBy, doctors, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = common_graphQlPagination_1.argsToWhereCond(args), where = _a.where, limit = _a.limit, orderBy = _a.orderBy;
                        return [4, doctor_model_1.Doctor.find(__assign({}, where))
                                .limit(limit)
                                .sort(orderBy)];
                    case 1:
                        doctors = _b.sent();
                        return [2, doctors];
                    case 2:
                        e_3 = _b.sent();
                        throw new Error(e_3);
                    case 3: return [2];
                }
            });
        });
    };
    DoctorRepository.getInstance = function () {
        if (!DoctorRepository.instance) {
            DoctorRepository.instance = new DoctorRepository();
        }
        return DoctorRepository.instance;
    };
    return DoctorRepository;
}());
exports.DoctorRepository = DoctorRepository;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "8c3d27a64de54d80242b"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9yZXBvc2l0b3J5L2RvY3Rvci9kb2N0b3IucmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9NYWtlU29uZy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHdCQUF3QjtBQUN4QixpQ0FBaUMsbUJBQU8sQ0FBQyx1RkFBdUM7QUFDaEYscUJBQXFCLG1CQUFPLENBQUMsK0VBQW1DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0JBQWdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGlCQUFpQixhQUFhO0FBQzVGO0FBQ0E7QUFDQSw4REFBOEQsaUJBQWlCLGFBQWE7QUFDNUY7QUFDQSxpR0FBaUcsUUFBUSw4Q0FBOEMsRUFBRSxHQUFHLFlBQVk7QUFDeEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsd0JBQXdCOzs7Ozs7Ozs7Ozs7V0NwTHhCLG9EIiwiZmlsZSI6Im1haW4uODI0ZTQ2OGYxNjNiOTFhOTc0YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRvY3RvclJlcG9zaXRvcnkgPSB2b2lkIDA7XG52YXIgY29tbW9uX2dyYXBoUWxQYWdpbmF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tbW9uL2NvbW1vbi5ncmFwaFFsUGFnaW5hdGlvblwiKTtcbnZhciBkb2N0b3JfbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9zY2hlbWFzL0RvY3Rvci9kb2N0b3IubW9kZWxcIik7XG52YXIgRG9jdG9yUmVwb3NpdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdG9yUmVwb3NpdG9yeSgpIHtcbiAgICB9XG4gICAgRG9jdG9yUmVwb3NpdG9yeS5wcm90b3R5cGUuYWRkRG9jdG9yID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgc3BlY2lhbGl6YXRpb24gPSBfYS5zcGVjaWFsaXphdGlvbiwgY3VycnVudFNlcnZpbmdIb3NwaXRhbCA9IF9hLmN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwsIGV4cGVyaWVuY2UgPSBfYS5leHBlcmllbmNlLCBiaW8gPSBfYS5iaW8sIHdvcmtpbmdUaW1lID0gX2Eud29ya2luZ1RpbWU7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkb2N0b3IsIHNhdmVkRG9jdG9yLCBlXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbjogc3BlY2lhbGl6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycnVudFNlcnZpbmdIb3NwaXRhbDogY3VycnVudFNlcnZpbmdIb3NwaXRhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlOiBleHBlcmllbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbzogYmlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtpbmdUaW1lOiB3b3JraW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yID0gbmV3IGRvY3Rvcl9tb2RlbF8xLkRvY3Rvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbjogc3BlY2lhbGl6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycnVudFNlcnZpbmdIb3NwaXRhbDogY3VycnVudFNlcnZpbmdIb3NwaXRhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlOiBleHBlcmllbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbzogYmlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtpbmdUaW1lOiB3b3JraW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkb2N0b3Iuc2F2ZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWREb2N0b3IgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhc2F2ZWREb2N0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb2N0b3IgZG9zZW50IHNhdmVkIGluIGRhdGFiYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHN1Y2Nlc3M6IHRydWUgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb2N0b3IgYWRkaW5nIGZhaWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEb2N0b3JSZXBvc2l0b3J5LnByb3RvdHlwZS5lZGl0RG9jdG9yID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBpZCA9IF9hLmlkLCBuYW1lID0gX2EubmFtZSwgc3BlY2lhbGl6YXRpb24gPSBfYS5zcGVjaWFsaXphdGlvbiwgY3VycnVudFNlcnZpbmdIb3NwaXRhbCA9IF9hLmN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwsIGV4cGVyaWVuY2UgPSBfYS5leHBlcmllbmNlLCBiaW8gPSBfYS5iaW8sIHdvcmtpbmdUaW1lID0gX2Eud29ya2luZ1RpbWU7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBleGlzdERvY3RvciwgdXBkYXRlRmVpbGQsIGV2ZW50XzEsIGRvY3Rvciwgc2F2ZWREb2N0b3IsIGVfMjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgNiwgLCA3XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGRvY3Rvcl9tb2RlbF8xLkRvY3Rvci5maW5kQnlJZChpZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdERvY3RvciA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghISEhZXhpc3REb2N0b3IpIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb2N0b3IgZG9zZW50IHByZXNlbnQgaW4gZGF0YWJhc2VcIik7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZlaWxkID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmVpbGQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdXBkYXRlRmVpbGQpLCB7IG5hbWU6IG5hbWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFzcGVjaWFsaXphdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZlaWxkID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHVwZGF0ZUZlaWxkKSwgeyBuYW1lOiBuYW1lIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkb2N0b3JfbW9kZWxfMS5Eb2N0b3IuZmluZEJ5SWRBbmRVcGRhdGUocmVxLnBhcmFtcy5kb2N0b3JJZCwgeyAkc2V0OiB7IGltYWdlVXJsOiBcImltYWdlcy9cIiArIHJlcS5maWxlLm9yaWdpbmFsbmFtZSB9IH0sIHsgbmV3OiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvciA9IG5ldyBkb2N0b3JfbW9kZWxfMS5Eb2N0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246IHNwZWNpYWxpemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWw6IGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZTogZXhwZXJpZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW86IGJpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nVGltZTogd29ya2luZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yLnNhdmUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkRG9jdG9yID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhIXNhdmVkRG9jdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9jdG9yIGRvc2VudCBzYXZlZCBpbiBkYXRhYmFzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgeyBzdWNjZXNzOiB0cnVlIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMiA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlXzIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRG9jdG9yUmVwb3NpdG9yeS5wcm90b3R5cGUuZ2V0QWxsRG9jdG9ycyA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSwgd2hlcmUsIGxpbWl0LCBvcmRlckJ5LCBkb2N0b3JzLCBlXzM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBjb21tb25fZ3JhcGhRbFBhZ2luYXRpb25fMS5hcmdzVG9XaGVyZUNvbmQoYXJncyksIHdoZXJlID0gX2Eud2hlcmUsIGxpbWl0ID0gX2EubGltaXQsIG9yZGVyQnkgPSBfYS5vcmRlckJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkb2N0b3JfbW9kZWxfMS5Eb2N0b3IuZmluZChfX2Fzc2lnbih7fSwgd2hlcmUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGltaXQobGltaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KG9yZGVyQnkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9ycyA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgZG9jdG9yc107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMyA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlXzMpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRG9jdG9yUmVwb3NpdG9yeS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFEb2N0b3JSZXBvc2l0b3J5Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICBEb2N0b3JSZXBvc2l0b3J5Lmluc3RhbmNlID0gbmV3IERvY3RvclJlcG9zaXRvcnkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRG9jdG9yUmVwb3NpdG9yeS5pbnN0YW5jZTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N0b3JSZXBvc2l0b3J5O1xufSgpKTtcbmV4cG9ydHMuRG9jdG9yUmVwb3NpdG9yeSA9IERvY3RvclJlcG9zaXRvcnk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiBcIjhjM2QyN2E2NGRlNTRkODAyNDJiXCIiXSwic291cmNlUm9vdCI6IiJ9