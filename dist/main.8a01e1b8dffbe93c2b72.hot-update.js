exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/context.ts":
/*!************************!*\
  !*** ./src/context.ts ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.Context = void 0;
var doctor_repository_1 = __webpack_require__(/*! ./repository/doctor/doctor.repository */ "./src/repository/doctor/doctor.repository.ts");
var JWTRepository_1 = __webpack_require__(/*! ./repository/jwt/JWTRepository */ "./src/repository/jwt/JWTRepository.ts");
var UserRepository_1 = __webpack_require__(/*! ./repository/user/UserRepository */ "./src/repository/user/UserRepository.ts");
var Context = (function () {
    function Context(req, res) {
        this._jwt = JWTRepository_1.JWTRepository.getInstance();
        this._userRepository = UserRepository_1.UserRepository.getInstance();
        this._doctorRepository = doctor_repository_1.DoctorRepository.getInstance();
        this._request = req;
        this._response = res;
    }
    Context.prototype.getUserId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, token, userId;
            return __generator(this, function (_b) {
                try {
                    _a = this._jwt.extractUserIdfromReq(this._request), token = _a.token, userId = _a.userId;
                    return [2, { token: token, userId: userId }];
                }
                catch (e) {
                    throw new Error("" + e.message || "Invalid Token");
                }
                return [2];
            });
        });
    };
    Context.prototype.storeEventImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formData;
            return __generator(this, function (_a) {
                formData = this._request.body;
                console.log(formData);
                return [2];
            });
        });
    };
    return Context;
}());
exports.Context = Context;


/***/ }),

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
            var existDoctor, updateFeild, updatedDoctor, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
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
                            updateFeild = __assign(__assign({}, updateFeild), { specialization: specialization });
                        }
                        if (!!curruntServingHospital) {
                            updateFeild = __assign(__assign({}, updateFeild), { curruntServingHospital: curruntServingHospital });
                        }
                        if (!!experience) {
                            updateFeild = __assign(__assign({}, updateFeild), { experience: experience });
                        }
                        if (!!bio) {
                            updateFeild = __assign(__assign({}, updateFeild), { bio: bio });
                        }
                        if (!!workingTime) {
                            updateFeild = __assign(__assign({}, updateFeild), { workingTime: workingTime });
                        }
                        return [4, doctor_model_1.Doctor.findByIdAndUpdate(id, { $set: __assign({}, updateFeild) }, { new: true })];
                    case 3:
                        updatedDoctor = _b.sent();
                        if (!!!updatedDoctor) {
                            throw new Error("doctor dosent updated");
                        }
                        else {
                            console.log({ updatedDoctor: updatedDoctor });
                            return [2, { success: true }];
                        }
                        _b.label = 4;
                    case 4: return [3, 6];
                    case 5:
                        e_2 = _b.sent();
                        throw new Error(e_2);
                    case 6: return [2];
                }
            });
        });
    };
    DoctorRepository.prototype.deleteDoctor = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var existDoctor, deletedDoctor, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4, doctor_model_1.Doctor.findById(id)];
                    case 1:
                        existDoctor = _b.sent();
                        if (!!!!existDoctor) return [3, 2];
                        throw new Error("doctor dosent present in database");
                    case 2: return [4, doctor_model_1.Doctor.findByIdAndRemove(id)];
                    case 3:
                        deletedDoctor = _b.sent();
                        if (!!!deletedDoctor) {
                            throw new Error("doctor dosent deleted");
                        }
                        else {
                            console.log({ deletedDoctor: deletedDoctor });
                            return [2, { success: true }];
                        }
                        _b.label = 4;
                    case 4: return [3, 6];
                    case 5:
                        e_3 = _b.sent();
                        throw new Error(e_3);
                    case 6: return [2];
                }
            });
        });
    };
    DoctorRepository.prototype.getAllDoctors = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, where, limit, orderBy, doctors, e_4;
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
                        e_4 = _b.sent();
                        throw new Error(e_4);
                    case 3: return [2];
                }
            });
        });
    };
    DoctorRepository.prototype.findDoctorByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var doctor, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, doctor_model_1.Doctor.aggregate([{ $match: { name: name } }])];
                    case 1:
                        doctor = _a.sent();
                        console.log(doctor);
                        if (!!doctor)
                            return [2, doctor];
                        else
                            throw new Error("doctor not found");
                        return [3, 3];
                    case 2:
                        e_5 = _a.sent();
                        throw new Error(e_5);
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
/******/ 		__webpack_require__.h = () => "199acc5c4180ec259bd8"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9jb250ZXh0LnRzIiwid2VicGFjazovL01ha2VTb25nLy4vc3JjL3JlcG9zaXRvcnkvZG9jdG9yL2RvY3Rvci5yZXBvc2l0b3J5LnRzIiwid2VicGFjazovL01ha2VTb25nL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsZUFBZTtBQUNmLDBCQUEwQixtQkFBTyxDQUFDLDJGQUF1QztBQUN6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QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywrQkFBK0I7QUFDeEUsd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsVUFBVSxhQUFhLEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsd0JBQXdCOzs7Ozs7Ozs7Ozs7V0MvT3hCLG9EIiwiZmlsZSI6Im1haW4uOGEwMWUxYjhkZmZiZTkzYzJiNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29udGV4dCA9IHZvaWQgMDtcbnZhciBkb2N0b3JfcmVwb3NpdG9yeV8xID0gcmVxdWlyZShcIi4vcmVwb3NpdG9yeS9kb2N0b3IvZG9jdG9yLnJlcG9zaXRvcnlcIik7XG52YXIgSldUUmVwb3NpdG9yeV8xID0gcmVxdWlyZShcIi4vcmVwb3NpdG9yeS9qd3QvSldUUmVwb3NpdG9yeVwiKTtcbnZhciBVc2VyUmVwb3NpdG9yeV8xID0gcmVxdWlyZShcIi4vcmVwb3NpdG9yeS91c2VyL1VzZXJSZXBvc2l0b3J5XCIpO1xudmFyIENvbnRleHQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRleHQocmVxLCByZXMpIHtcbiAgICAgICAgdGhpcy5fand0ID0gSldUUmVwb3NpdG9yeV8xLkpXVFJlcG9zaXRvcnkuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fdXNlclJlcG9zaXRvcnkgPSBVc2VyUmVwb3NpdG9yeV8xLlVzZXJSZXBvc2l0b3J5LmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2RvY3RvclJlcG9zaXRvcnkgPSBkb2N0b3JfcmVwb3NpdG9yeV8xLkRvY3RvclJlcG9zaXRvcnkuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdCA9IHJlcTtcbiAgICAgICAgdGhpcy5fcmVzcG9uc2UgPSByZXM7XG4gICAgfVxuICAgIENvbnRleHQucHJvdG90eXBlLmdldFVzZXJJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hLCB0b2tlbiwgdXNlcklkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcy5fand0LmV4dHJhY3RVc2VySWRmcm9tUmVxKHRoaXMuX3JlcXVlc3QpLCB0b2tlbiA9IF9hLnRva2VuLCB1c2VySWQgPSBfYS51c2VySWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgeyB0b2tlbjogdG9rZW4sIHVzZXJJZDogdXNlcklkIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIiArIGUubWVzc2FnZSB8fCBcIkludmFsaWQgVG9rZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb250ZXh0LnByb3RvdHlwZS5zdG9yZUV2ZW50SW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IHRoaXMuX3JlcXVlc3QuYm9keTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb250ZXh0O1xufSgpKTtcbmV4cG9ydHMuQ29udGV4dCA9IENvbnRleHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Eb2N0b3JSZXBvc2l0b3J5ID0gdm9pZCAwO1xudmFyIGNvbW1vbl9ncmFwaFFsUGFnaW5hdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2NvbW1vbi9jb21tb24uZ3JhcGhRbFBhZ2luYXRpb25cIik7XG52YXIgZG9jdG9yX21vZGVsXzEgPSByZXF1aXJlKFwiLi4vLi4vc2NoZW1hcy9Eb2N0b3IvZG9jdG9yLm1vZGVsXCIpO1xudmFyIERvY3RvclJlcG9zaXRvcnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvY3RvclJlcG9zaXRvcnkoKSB7XG4gICAgfVxuICAgIERvY3RvclJlcG9zaXRvcnkucHJvdG90eXBlLmFkZERvY3RvciA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHNwZWNpYWxpemF0aW9uID0gX2Euc3BlY2lhbGl6YXRpb24sIGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwgPSBfYS5jdXJydW50U2VydmluZ0hvc3BpdGFsLCBleHBlcmllbmNlID0gX2EuZXhwZXJpZW5jZSwgYmlvID0gX2EuYmlvLCB3b3JraW5nVGltZSA9IF9hLndvcmtpbmdUaW1lO1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZG9jdG9yLCBzYXZlZERvY3RvciwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246IHNwZWNpYWxpemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWw6IGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZTogZXhwZXJpZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW86IGJpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nVGltZTogd29ya2luZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvciA9IG5ldyBkb2N0b3JfbW9kZWxfMS5Eb2N0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246IHNwZWNpYWxpemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWw6IGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZTogZXhwZXJpZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW86IGJpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nVGltZTogd29ya2luZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yLnNhdmUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkRG9jdG9yID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhIXNhdmVkRG9jdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9jdG9yIGRvc2VudCBzYXZlZCBpbiBkYXRhYmFzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgeyBzdWNjZXNzOiB0cnVlIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9jdG9yIGFkZGluZyBmYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRG9jdG9yUmVwb3NpdG9yeS5wcm90b3R5cGUuZWRpdERvY3RvciA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgaWQgPSBfYS5pZCwgbmFtZSA9IF9hLm5hbWUsIHNwZWNpYWxpemF0aW9uID0gX2Euc3BlY2lhbGl6YXRpb24sIGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwgPSBfYS5jdXJydW50U2VydmluZ0hvc3BpdGFsLCBleHBlcmllbmNlID0gX2EuZXhwZXJpZW5jZSwgYmlvID0gX2EuYmlvLCB3b3JraW5nVGltZSA9IF9hLndvcmtpbmdUaW1lO1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZXhpc3REb2N0b3IsIHVwZGF0ZUZlaWxkLCB1cGRhdGVkRG9jdG9yLCBlXzI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDUsICwgNl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkb2N0b3JfbW9kZWxfMS5Eb2N0b3IuZmluZEJ5SWQoaWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3REb2N0b3IgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhIWV4aXN0RG9jdG9yKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9jdG9yIGRvc2VudCBwcmVzZW50IGluIGRhdGFiYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGZWlsZCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZlaWxkID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHVwZGF0ZUZlaWxkKSwgeyBuYW1lOiBuYW1lIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhc3BlY2lhbGl6YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGZWlsZCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB1cGRhdGVGZWlsZCksIHsgc3BlY2lhbGl6YXRpb246IHNwZWNpYWxpemF0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhY3VycnVudFNlcnZpbmdIb3NwaXRhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZlaWxkID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHVwZGF0ZUZlaWxkKSwgeyBjdXJydW50U2VydmluZ0hvc3BpdGFsOiBjdXJydW50U2VydmluZ0hvc3BpdGFsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhZXhwZXJpZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZlaWxkID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHVwZGF0ZUZlaWxkKSwgeyBleHBlcmllbmNlOiBleHBlcmllbmNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhYmlvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmVpbGQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdXBkYXRlRmVpbGQpLCB7IGJpbzogYmlvIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhd29ya2luZ1RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGZWlsZCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB1cGRhdGVGZWlsZCksIHsgd29ya2luZ1RpbWU6IHdvcmtpbmdUaW1lIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkb2N0b3JfbW9kZWxfMS5Eb2N0b3IuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHsgJHNldDogX19hc3NpZ24oe30sIHVwZGF0ZUZlaWxkKSB9LCB7IG5ldzogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWREb2N0b3IgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhdXBkYXRlZERvY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvY3RvciBkb3NlbnQgdXBkYXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgdXBkYXRlZERvY3RvcjogdXBkYXRlZERvY3RvciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgc3VjY2VzczogdHJ1ZSB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMsIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZV8yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERvY3RvclJlcG9zaXRvcnkucHJvdG90eXBlLmRlbGV0ZURvY3RvciA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgaWQgPSBfYS5pZDtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGV4aXN0RG9jdG9yLCBkZWxldGVkRG9jdG9yLCBlXzM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDUsICwgNl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkb2N0b3JfbW9kZWxfMS5Eb2N0b3IuZmluZEJ5SWQoaWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3REb2N0b3IgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhIWV4aXN0RG9jdG9yKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9jdG9yIGRvc2VudCBwcmVzZW50IGluIGRhdGFiYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCwgZG9jdG9yX21vZGVsXzEuRG9jdG9yLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWREb2N0b3IgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhZGVsZXRlZERvY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvY3RvciBkb3NlbnQgZGVsZXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgZGVsZXRlZERvY3RvcjogZGVsZXRlZERvY3RvciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgc3VjY2VzczogdHJ1ZSB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMsIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzMgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZV8zKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERvY3RvclJlcG9zaXRvcnkucHJvdG90eXBlLmdldEFsbERvY3RvcnMgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIHdoZXJlLCBsaW1pdCwgb3JkZXJCeSwgZG9jdG9ycywgZV80O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gY29tbW9uX2dyYXBoUWxQYWdpbmF0aW9uXzEuYXJnc1RvV2hlcmVDb25kKGFyZ3MpLCB3aGVyZSA9IF9hLndoZXJlLCBsaW1pdCA9IF9hLmxpbWl0LCBvcmRlckJ5ID0gX2Eub3JkZXJCeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yX21vZGVsXzEuRG9jdG9yLmZpbmQoX19hc3NpZ24oe30sIHdoZXJlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxpbWl0KGxpbWl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydChvcmRlckJ5KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvcnMgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGRvY3RvcnNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZV80KTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERvY3RvclJlcG9zaXRvcnkucHJvdG90eXBlLmZpbmREb2N0b3JCeU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZG9jdG9yLCBlXzU7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkb2N0b3JfbW9kZWxfMS5Eb2N0b3IuYWdncmVnYXRlKFt7ICRtYXRjaDogeyBuYW1lOiBuYW1lIH0gfV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWRvY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGRvY3Rvcl07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9jdG9yIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfNSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlXzUpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRG9jdG9yUmVwb3NpdG9yeS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFEb2N0b3JSZXBvc2l0b3J5Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICBEb2N0b3JSZXBvc2l0b3J5Lmluc3RhbmNlID0gbmV3IERvY3RvclJlcG9zaXRvcnkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRG9jdG9yUmVwb3NpdG9yeS5pbnN0YW5jZTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N0b3JSZXBvc2l0b3J5O1xufSgpKTtcbmV4cG9ydHMuRG9jdG9yUmVwb3NpdG9yeSA9IERvY3RvclJlcG9zaXRvcnk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiBcIjE5OWFjYzVjNDE4MGVjMjU5YmQ4XCIiXSwic291cmNlUm9vdCI6IiJ9