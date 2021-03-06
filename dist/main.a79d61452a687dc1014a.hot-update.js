exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/repository/user/UserRepository.ts":
/*!***********************************************!*\
  !*** ./src/repository/user/UserRepository.ts ***!
  \***********************************************/
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
            var days, doctorExist_1, workingTime, savedTime, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log({ problem: problem, slot: slot, doctorId: doctorId });
                        days = { mon: 0, tue: 1, wed: 2, thu: 3, fry: 4, sat: 5, sun: 6 };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 10, , 11]);
                        return [4, doctor_model_1.Doctor.findById(doctorId)];
                    case 2:
                        doctorExist_1 = _a.sent();
                        console.log({ doctorExist: doctorExist_1 });
                        if (!!!!doctorExist_1) return [3, 3];
                        throw new Error("doctor dosent exist in data base");
                    case 3:
                        workingTime = doctorExist_1.workingTime.split("-");
                        if (!(parseInt(workingTime[0]) <= parseInt(slot.split("-")[0]) &&
                            parseInt(workingTime[1]) >= parseInt(slot.split("-")[0]))) return [3, 8];
                        if (!(doctorExist_1.slotes.length <= 0)) return [3, 5];
                        doctorExist_1 === null || doctorExist_1 === void 0 ? void 0 : doctorExist_1.slotes.push({
                            time: slot,
                            userId: userId,
                            problem: problem,
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
                        return [3, 7];
                    case 5: return [4, doctorExist_1.slotes.map(function (filteredSlot) { return __awaiter(_this, void 0, void 0, function () {
                            var filteredSlotSTime, filteredSlotETime, slotSTime, slotETime, savedTime;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!!filteredSlot) return [3, 3];
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
                                        doctorExist_1 === null || doctorExist_1 === void 0 ? void 0 : doctorExist_1.slotes.push({
                                            time: slot,
                                            userId: userId,
                                            problem: problem,
                                        });
                                        return [4, (doctorExist_1 === null || doctorExist_1 === void 0 ? void 0 : doctorExist_1.save())];
                                    case 2:
                                        savedTime = _a.sent();
                                        if (!!savedTime) {
                                            return [2, { success: true }];
                                        }
                                        else {
                                            throw new Error("dosent assign slot");
                                        }
                                        _a.label = 3;
                                    case 3: return [2];
                                }
                            });
                        }); })];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [3, 9];
                    case 8: throw new Error("doctor not available at this time");
                    case 9: return [3, 11];
                    case 10:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 11: return [2];
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
/******/ 		__webpack_require__.h = () => "fdb0bd4dae83a9449086"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9yZXBvc2l0b3J5L3VzZXIvVXNlclJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIscUJBQXFCLG1CQUFPLENBQUMsK0VBQW1DO0FBQ2hFLGFBQWEsbUJBQU8sQ0FBQyx1REFBb0I7QUFDekMsc0JBQXNCLG1CQUFPLENBQUMsbUVBQXNCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZUFBZTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGlCQUFpQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHlGQUF5RjtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxtQ0FBbUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGVBQWU7QUFDbkQ7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxtREFBbUQ7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxnQkFBZ0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCLEVBQUUsRUFBRTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHNCQUFzQjs7Ozs7Ozs7Ozs7O1dDdk10QixvRCIsImZpbGUiOiJtYWluLmE3OWQ2MTQ1MmE2ODdkYzEwMTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVzZXJSZXBvc2l0b3J5ID0gdm9pZCAwO1xudmFyIGRvY3Rvcl9tb2RlbF8xID0gcmVxdWlyZShcIi4uLy4uL3NjaGVtYXMvRG9jdG9yL2RvY3Rvci5tb2RlbFwiKTtcbnZhciBVc2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vc2NoZW1hcy9Vc2VyXCIpO1xudmFyIEpXVFJlcG9zaXRvcnlfMSA9IHJlcXVpcmUoXCIuLi9qd3QvSldUUmVwb3NpdG9yeVwiKTtcbnZhciBVc2VyUmVwb3NpdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXNlclJlcG9zaXRvcnkoKSB7XG4gICAgfVxuICAgIFVzZXJSZXBvc2l0b3J5LnByb3RvdHlwZS5nZXRVc2VyQnlJZCA9IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIFVzZXJfMS5Vc2VyLmZpbmRCeUlkKHVzZXJJZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiwgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBVc2VyUmVwb3NpdG9yeS5wcm90b3R5cGUucmVnaXN0ZXJVc2VyID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgbW9iaWxlLCBhZ2UsIGdlbmRlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZW1haWxFeGlzdCwgbW9iaWxlRXhpc3QsIHVzZXIsIHNhdmVkVXNlciwgdG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgVXNlcl8xLlVzZXIuZmluZE9uZSh7IGVtYWlsOiBlbWFpbCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsRXhpc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFlbWFpbEV4aXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1haWwgYWxyZWFkeSBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgVXNlcl8xLlVzZXIuZmluZE9uZSh7IG1vYmlsZTogbW9iaWxlIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlRXhpc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFtb2JpbGVFeGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vYmlsZSBudW1iZXIgYWxyZWFkeSBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSBuZXcgVXNlcl8xLlVzZXIoeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCwgbmFtZTogbmFtZSwgbW9iaWxlOiBtb2JpbGUsIGFnZTogYWdlLCBnZW5kZXI6IGdlbmRlciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdXNlci5zYXZlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZFVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNhdmVkVXNlcikgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgSldUUmVwb3NpdG9yeV8xLkpXVFJlcG9zaXRvcnkuZ2V0SW5zdGFuY2UoKS5nZW5lcmF0ZVRva2VuKHNhdmVkVXNlci5faWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgdG9rZW46IHRva2VuIH1dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHRocm93IG5ldyBFcnJvcihcIlJlZ2lzdGVyIGZhaWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVXNlclJlcG9zaXRvcnkucHJvdG90eXBlLmxvZ2luVXNlciA9IGZ1bmN0aW9uIChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVzZXIsIHRva2VuO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIFVzZXJfMS5Vc2VyLmZpbmRPbmUoeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhdXNlcikgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgSldUUmVwb3NpdG9yeV8xLkpXVFJlcG9zaXRvcnkuZ2V0SW5zdGFuY2UoKS5nZW5lcmF0ZVRva2VuKHVzZXIuX2lkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHRva2VuOiB0b2tlbiB9XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiB0aHJvdyBuZXcgRXJyb3IoXCJJblZhbGlkIENyZWRlbnRpYWwgISFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVXNlclJlcG9zaXRvcnkucHJvdG90eXBlLmJvb2tBcG9pbnRtZW50ID0gZnVuY3Rpb24gKHByb2JsZW0sIHNsb3QsIGRvY3RvcklkLCB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRheXMsIGRvY3RvckV4aXN0XzEsIHdvcmtpbmdUaW1lLCBzYXZlZFRpbWUsIGVfMTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IHByb2JsZW06IHByb2JsZW0sIHNsb3Q6IHNsb3QsIGRvY3RvcklkOiBkb2N0b3JJZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXMgPSB7IG1vbjogMCwgdHVlOiAxLCB3ZWQ6IDIsIHRodTogMywgZnJ5OiA0LCBzYXQ6IDUsIHN1bjogNiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDEwLCAsIDExXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGRvY3Rvcl9tb2RlbF8xLkRvY3Rvci5maW5kQnlJZChkb2N0b3JJZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JFeGlzdF8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBkb2N0b3JFeGlzdDogZG9jdG9yRXhpc3RfMSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghISEhZG9jdG9yRXhpc3RfMSkgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvY3RvciBkb3NlbnQgZXhpc3QgaW4gZGF0YSBiYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nVGltZSA9IGRvY3RvckV4aXN0XzEud29ya2luZ1RpbWUuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocGFyc2VJbnQod29ya2luZ1RpbWVbMF0pIDw9IHBhcnNlSW50KHNsb3Quc3BsaXQoXCItXCIpWzBdKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHdvcmtpbmdUaW1lWzFdKSA+PSBwYXJzZUludChzbG90LnNwbGl0KFwiLVwiKVswXSkpKSByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZG9jdG9yRXhpc3RfMS5zbG90ZXMubGVuZ3RoIDw9IDApKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yRXhpc3RfMSA9PT0gbnVsbCB8fCBkb2N0b3JFeGlzdF8xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkb2N0b3JFeGlzdF8xLnNsb3Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBzbG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2JsZW06IHByb2JsZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgKGRvY3RvckV4aXN0XzEgPT09IG51bGwgfHwgZG9jdG9yRXhpc3RfMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdG9yRXhpc3RfMS5zYXZlKCkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWRUaW1lID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhc2F2ZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHN1Y2Nlc3M6IHRydWUgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb3NlbnQgYXNzaWduIHNsb3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbNCwgZG9jdG9yRXhpc3RfMS5zbG90ZXMubWFwKGZ1bmN0aW9uIChmaWx0ZXJlZFNsb3QpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWRTbG90U1RpbWUsIGZpbHRlcmVkU2xvdEVUaW1lLCBzbG90U1RpbWUsIHNsb3RFVGltZSwgc2F2ZWRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghISFmaWx0ZXJlZFNsb3QpIHJldHVybiBbMywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRTbG90U1RpbWUgPSBwYXJzZUZsb2F0KGZpbHRlcmVkU2xvdC50aW1lLnNwbGl0KFwiLVwiKVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRTbG90RVRpbWUgPSBwYXJzZUZsb2F0KGZpbHRlcmVkU2xvdC50aW1lLnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFNUaW1lID0gcGFyc2VGbG9hdChzbG90LnNwbGl0KFwiLVwiKVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdEVUaW1lID0gcGFyc2VGbG9hdChzbG90LnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKHNsb3RTVGltZSA+PSBmaWx0ZXJlZFNsb3RTVGltZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90U1RpbWUgPD0gZmlsdGVyZWRTbG90RVRpbWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzbG90RVRpbWUgPj0gZmlsdGVyZWRTbG90U1RpbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RFVGltZSA8PSBmaWx0ZXJlZFNsb3RFVGltZSkpKSByZXR1cm4gWzMsIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNsb3QgY29uZmxpY3Qgb2NjdXJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvckV4aXN0XzEgPT09IG51bGwgfHwgZG9jdG9yRXhpc3RfMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdG9yRXhpc3RfMS5zbG90ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHNsb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ibGVtOiBwcm9ibGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgKGRvY3RvckV4aXN0XzEgPT09IG51bGwgfHwgZG9jdG9yRXhpc3RfMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdG9yRXhpc3RfMS5zYXZlKCkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZFRpbWUgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhc2F2ZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgeyBzdWNjZXNzOiB0cnVlIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9zZW50IGFzc2lnbiBzbG90XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzMsIDldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHRocm93IG5ldyBFcnJvcihcImRvY3RvciBub3QgYXZhaWxhYmxlIGF0IHRoaXMgdGltZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OiByZXR1cm4gWzMsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlXzEpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFVzZXJSZXBvc2l0b3J5LmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIVVzZXJSZXBvc2l0b3J5Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICBVc2VyUmVwb3NpdG9yeS5pbnN0YW5jZSA9IG5ldyBVc2VyUmVwb3NpdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBVc2VyUmVwb3NpdG9yeS5pbnN0YW5jZTtcbiAgICB9O1xuICAgIHJldHVybiBVc2VyUmVwb3NpdG9yeTtcbn0oKSk7XG5leHBvcnRzLlVzZXJSZXBvc2l0b3J5ID0gVXNlclJlcG9zaXRvcnk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiBcImZkYjBiZDRkYWU4M2E5NDQ5MDg2XCIiXSwic291cmNlUm9vdCI6IiJ9