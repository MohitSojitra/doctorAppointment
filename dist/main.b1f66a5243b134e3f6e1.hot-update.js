exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/repository/user/UserRepository.ts":
/*!***********************************************!*\
  !*** ./src/repository/user/UserRepository.ts ***!
  \***********************************************/
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
exports.UserRepository = void 0;
var doctor_model_1 = __webpack_require__(/*! ../../schemas/Doctor/doctor.model */ "./src/schemas/Doctor/doctor.model.ts");
var User_1 = __webpack_require__(/*! ../../schemas/User */ "./src/schemas/User/index.ts");
var JWTRepository_1 = __webpack_require__(/*! ../jwt/JWTRepository */ "./src/repository/jwt/JWTRepository.ts");
var UserRepository = (function () {
    function UserRepository() {
    }
    UserRepository.prototype.getUserById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, User_1.User.findById(userId)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    UserRepository.prototype.registerUser = function (email, password, name, mobile, age, gender) {
        return __awaiter(this, void 0, void 0, function () {
            var emailExist, mobileExist, user, savedUser, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, User_1.User.findOne({ email: email })];
                    case 1:
                        emailExist = _a.sent();
                        if (!!emailExist) {
                            throw new Error("Email already exist");
                        }
                        return [4, User_1.User.findOne({ mobile: mobile })];
                    case 2:
                        mobileExist = _a.sent();
                        if (!!mobileExist) {
                            throw new Error("mobile number already exist");
                        }
                        user = new User_1.User({ email: email, password: password, name: name, mobile: mobile, age: age, gender: gender });
                        return [4, user.save()];
                    case 3:
                        savedUser = _a.sent();
                        if (!savedUser) return [3, 5];
                        return [4, JWTRepository_1.JWTRepository.getInstance().generateToken(savedUser._id)];
                    case 4:
                        token = _a.sent();
                        return [2, { token: token }];
                    case 5: throw new Error("Register fail");
                }
            });
        });
    };
    UserRepository.prototype.loginUser = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, User_1.User.findOne({ email: email, password: password })];
                    case 1:
                        user = _a.sent();
                        if (!!!user) return [3, 3];
                        return [4, JWTRepository_1.JWTRepository.getInstance().generateToken(user._id)];
                    case 2:
                        token = _a.sent();
                        return [2, { token: token }];
                    case 3: throw new Error("InValid Credential !!");
                }
            });
        });
    };
    UserRepository.prototype.bookApointment = function (problem, slot, doctorId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var days, doctorExist_1, workingTime, savedTime, e_1, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log({ problem: problem, slot: slot, doctorId: doctorId });
                        days = { mon: 0, tue: 1, wed: 2, thu: 3, fry: 4, sat: 5, sun: 6 };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 11, , 12]);
                        return [4, doctor_model_1.Doctor.findById(doctorId)];
                    case 2:
                        doctorExist_1 = _a.sent();
                        console.log({ doctorExist: doctorExist_1 });
                        if (!!!!doctorExist_1) return [3, 3];
                        throw new Error("doctor dosent exist in data base");
                    case 3:
                        workingTime = doctorExist_1.workingTime.split("-");
                        if (!(parseInt(workingTime[0]) <= parseInt(slot.split("-")[0]) &&
                            parseInt(workingTime[1]) >= parseInt(slot.split("-")[0]))) return [3, 9];
                        if (!(doctorExist_1.slotes.length <= 0)) return [3, 5];
                        doctorExist_1 === null || doctorExist_1 === void 0 ? void 0 : doctorExist_1.slotes.push({
                            time: slot,
                            problem: problem,
                            userId: userId,
                        });
                        return [4, (doctorExist_1 === null || doctorExist_1 === void 0 ? void 0 : doctorExist_1.save())];
                    case 4:
                        savedTime = _a.sent();
                        if (!!savedTime) {
                            return [2, { success: true }];
                        }
                        else {
                            throw new Error("dosent assign slot");
                        }
                        return [3, 8];
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4, doctorExist_1.slotes.map(function (filteredSlot) { return __awaiter(_this, void 0, void 0, function () {
                                var filteredSlotSTime, filteredSlotETime, slotSTime, slotETime, obj, savedTime;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!!!filteredSlot) return [3, 4];
                                            filteredSlotSTime = parseFloat(filteredSlot.time.split("-")[0]);
                                            filteredSlotETime = parseFloat(filteredSlot.time.split("-")[1]);
                                            slotSTime = parseFloat(slot.split("-")[0]);
                                            slotETime = parseFloat(slot.split("-")[1]);
                                            if (!((slotSTime >= filteredSlotSTime &&
                                                slotSTime <= filteredSlotETime) ||
                                                (slotETime >= filteredSlotSTime &&
                                                    slotETime <= filteredSlotETime))) return [3, 1];
                                            throw new Error("slot conflict occure");
                                        case 1:
                                            obj = {
                                                time: slot,
                                                userId: userId,
                                                problem: problem,
                                            };
                                            return [4, doctor_model_1.Doctor.findByIdAndUpdate(doctorId, {
                                                    $push: {
                                                        slotes: __assign({}, obj),
                                                    },
                                                })];
                                        case 2:
                                            _a.sent();
                                            return [4, (doctorExist_1 === null || doctorExist_1 === void 0 ? void 0 : doctorExist_1.save())];
                                        case 3:
                                            savedTime = _a.sent();
                                            if (!!savedTime) {
                                                return [2, { success: true }];
                                            }
                                            else {
                                                throw new Error("dosent assign slot");
                                            }
                                            _a.label = 4;
                                        case 4: return [2];
                                    }
                                });
                            }); })];
                    case 6:
                        _a.sent();
                        return [3, 8];
                    case 7:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 8: return [3, 10];
                    case 9: throw new Error("doctor not available at this time");
                    case 10: return [3, 12];
                    case 11:
                        e_2 = _a.sent();
                        throw new Error(e_2);
                    case 12: return [2];
                }
            });
        });
    };
    UserRepository.getInstance = function () {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "c36c0bc1cb565be9ab64"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9yZXBvc2l0b3J5L3VzZXIvVXNlclJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIscUJBQXFCLG1CQUFPLENBQUMsK0VBQW1DO0FBQ2hFLGFBQWEsbUJBQU8sQ0FBQyx1REFBb0I7QUFDekMsc0JBQXNCLG1CQUFPLENBQUMsbUVBQXNCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZUFBZTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGlCQUFpQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHlGQUF5RjtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxtQ0FBbUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGVBQWU7QUFDbkQ7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxtREFBbUQ7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0UscURBQXFEO0FBQ3JELGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZ0JBQWdCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QixFQUFFLEVBQUU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxzQkFBc0I7Ozs7Ozs7Ozs7OztXQzlOdEIsb0QiLCJmaWxlIjoibWFpbi5iMWY2NmE1MjQzYjEzNGUzZjZlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVXNlclJlcG9zaXRvcnkgPSB2b2lkIDA7XG52YXIgZG9jdG9yX21vZGVsXzEgPSByZXF1aXJlKFwiLi4vLi4vc2NoZW1hcy9Eb2N0b3IvZG9jdG9yLm1vZGVsXCIpO1xudmFyIFVzZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9zY2hlbWFzL1VzZXJcIik7XG52YXIgSldUUmVwb3NpdG9yeV8xID0gcmVxdWlyZShcIi4uL2p3dC9KV1RSZXBvc2l0b3J5XCIpO1xudmFyIFVzZXJSZXBvc2l0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVc2VyUmVwb3NpdG9yeSgpIHtcbiAgICB9XG4gICAgVXNlclJlcG9zaXRvcnkucHJvdG90eXBlLmdldFVzZXJCeUlkID0gZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgVXNlcl8xLlVzZXIuZmluZEJ5SWQodXNlcklkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFVzZXJSZXBvc2l0b3J5LnByb3RvdHlwZS5yZWdpc3RlclVzZXIgPSBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkLCBuYW1lLCBtb2JpbGUsIGFnZSwgZ2VuZGVyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbWFpbEV4aXN0LCBtb2JpbGVFeGlzdCwgdXNlciwgc2F2ZWRVc2VyLCB0b2tlbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBVc2VyXzEuVXNlci5maW5kT25lKHsgZW1haWw6IGVtYWlsIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxFeGlzdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWVtYWlsRXhpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbWFpbCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBVc2VyXzEuVXNlci5maW5kT25lKHsgbW9iaWxlOiBtb2JpbGUgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVFeGlzdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIW1vYmlsZUV4aXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9iaWxlIG51bWJlciBhbHJlYWR5IGV4aXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IG5ldyBVc2VyXzEuVXNlcih7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkLCBuYW1lOiBuYW1lLCBtb2JpbGU6IG1vYmlsZSwgYWdlOiBhZ2UsIGdlbmRlcjogZ2VuZGVyIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB1c2VyLnNhdmUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkVXNlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2F2ZWRVc2VyKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBKV1RSZXBvc2l0b3J5XzEuSldUUmVwb3NpdG9yeS5nZXRJbnN0YW5jZSgpLmdlbmVyYXRlVG9rZW4oc2F2ZWRVc2VyLl9pZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgeyB0b2tlbjogdG9rZW4gfV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogdGhyb3cgbmV3IEVycm9yKFwiUmVnaXN0ZXIgZmFpbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBVc2VyUmVwb3NpdG9yeS5wcm90b3R5cGUubG9naW5Vc2VyID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXNlciwgdG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgVXNlcl8xLlVzZXIuZmluZE9uZSh7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghISF1c2VyKSByZXR1cm4gWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBKV1RSZXBvc2l0b3J5XzEuSldUUmVwb3NpdG9yeS5nZXRJbnN0YW5jZSgpLmdlbmVyYXRlVG9rZW4odXNlci5faWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgdG9rZW46IHRva2VuIH1dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHRocm93IG5ldyBFcnJvcihcIkluVmFsaWQgQ3JlZGVudGlhbCAhIVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBVc2VyUmVwb3NpdG9yeS5wcm90b3R5cGUuYm9va0Fwb2ludG1lbnQgPSBmdW5jdGlvbiAocHJvYmxlbSwgc2xvdCwgZG9jdG9ySWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF5cywgZG9jdG9yRXhpc3RfMSwgd29ya2luZ1RpbWUsIHNhdmVkVGltZSwgZV8xLCBlXzI7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBwcm9ibGVtOiBwcm9ibGVtLCBzbG90OiBzbG90LCBkb2N0b3JJZDogZG9jdG9ySWQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzID0geyBtb246IDAsIHR1ZTogMSwgd2VkOiAyLCB0aHU6IDMsIGZyeTogNCwgc2F0OiA1LCBzdW46IDYgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAxMSwgLCAxMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkb2N0b3JfbW9kZWxfMS5Eb2N0b3IuZmluZEJ5SWQoZG9jdG9ySWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yRXhpc3RfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgZG9jdG9yRXhpc3Q6IGRvY3RvckV4aXN0XzEgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhIWRvY3RvckV4aXN0XzEpIHJldHVybiBbMywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb2N0b3IgZG9zZW50IGV4aXN0IGluIGRhdGEgYmFzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2luZ1RpbWUgPSBkb2N0b3JFeGlzdF8xLndvcmtpbmdUaW1lLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBhcnNlSW50KHdvcmtpbmdUaW1lWzBdKSA8PSBwYXJzZUludChzbG90LnNwbGl0KFwiLVwiKVswXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh3b3JraW5nVGltZVsxXSkgPj0gcGFyc2VJbnQoc2xvdC5zcGxpdChcIi1cIilbMF0pKSkgcmV0dXJuIFszLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGRvY3RvckV4aXN0XzEuc2xvdGVzLmxlbmd0aCA8PSAwKSkgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvckV4aXN0XzEgPT09IG51bGwgfHwgZG9jdG9yRXhpc3RfMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdG9yRXhpc3RfMS5zbG90ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogc2xvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ibGVtOiBwcm9ibGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIChkb2N0b3JFeGlzdF8xID09PSBudWxsIHx8IGRvY3RvckV4aXN0XzEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3RvckV4aXN0XzEuc2F2ZSgpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkVGltZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXNhdmVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgeyBzdWNjZXNzOiB0cnVlIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9zZW50IGFzc2lnbiBzbG90XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFs1LCA3LCAsIDhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yRXhpc3RfMS5zbG90ZXMubWFwKGZ1bmN0aW9uIChmaWx0ZXJlZFNsb3QpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlcmVkU2xvdFNUaW1lLCBmaWx0ZXJlZFNsb3RFVGltZSwgc2xvdFNUaW1lLCBzbG90RVRpbWUsIG9iaiwgc2F2ZWRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhZmlsdGVyZWRTbG90KSByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFNsb3RTVGltZSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTbG90LnRpbWUuc3BsaXQoXCItXCIpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRTbG90RVRpbWUgPSBwYXJzZUZsb2F0KGZpbHRlcmVkU2xvdC50aW1lLnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RTVGltZSA9IHBhcnNlRmxvYXQoc2xvdC5zcGxpdChcIi1cIilbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90RVRpbWUgPSBwYXJzZUZsb2F0KHNsb3Quc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKHNsb3RTVGltZSA+PSBmaWx0ZXJlZFNsb3RTVGltZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFNUaW1lIDw9IGZpbHRlcmVkU2xvdEVUaW1lKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNsb3RFVGltZSA+PSBmaWx0ZXJlZFNsb3RTVGltZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RFVGltZSA8PSBmaWx0ZXJlZFNsb3RFVGltZSkpKSByZXR1cm4gWzMsIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzbG90IGNvbmZsaWN0IG9jY3VyZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHNsb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2JsZW06IHByb2JsZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yX21vZGVsXzEuRG9jdG9yLmZpbmRCeUlkQW5kVXBkYXRlKGRvY3RvcklkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHB1c2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdGVzOiBfX2Fzc2lnbih7fSwgb2JqKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIChkb2N0b3JFeGlzdF8xID09PSBudWxsIHx8IGRvY3RvckV4aXN0XzEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3RvckV4aXN0XzEuc2F2ZSgpKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZFRpbWUgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXNhdmVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHN1Y2Nlc3M6IHRydWUgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb3NlbnQgYXNzaWduIHNsb3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVfMSk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFszLCAxMF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTogdGhyb3cgbmV3IEVycm9yKFwiZG9jdG9yIG5vdCBhdmFpbGFibGUgYXQgdGhpcyB0aW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzMsIDEyXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlXzIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFVzZXJSZXBvc2l0b3J5LmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIVVzZXJSZXBvc2l0b3J5Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICBVc2VyUmVwb3NpdG9yeS5pbnN0YW5jZSA9IG5ldyBVc2VyUmVwb3NpdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBVc2VyUmVwb3NpdG9yeS5pbnN0YW5jZTtcbiAgICB9O1xuICAgIHJldHVybiBVc2VyUmVwb3NpdG9yeTtcbn0oKSk7XG5leHBvcnRzLlVzZXJSZXBvc2l0b3J5ID0gVXNlclJlcG9zaXRvcnk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiBcImMzNmMwYmMxY2I1NjViZTlhYjY0XCIiXSwic291cmNlUm9vdCI6IiJ9