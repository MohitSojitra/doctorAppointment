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
            var days, doctorExist_1, workingTime, savedTime, _a, _b, e_1, e_2;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        days = { mon: 0, tue: 1, wed: 2, thu: 3, fry: 4, sat: 5, sun: 6 };
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 12, , 13]);
                        return [4, doctor_model_1.Doctor.findById(doctorId)];
                    case 2:
                        doctorExist_1 = _c.sent();
                        if (!!!!doctorExist_1) return [3, 3];
                        throw new Error("doctor dosent exist in data base");
                    case 3:
                        workingTime = doctorExist_1.workingTime.split("-");
                        if (!(parseInt(workingTime[0]) <= parseInt(slot.split("-")[0]) &&
                            parseInt(workingTime[1]) >= parseInt(slot.split("-")[0]))) return [3, 10];
                        if (!(doctorExist_1.slotes.length <= 0)) return [3, 5];
                        doctorExist_1 === null || doctorExist_1 === void 0 ? void 0 : doctorExist_1.slotes.push({
                            time: slot,
                            problem: problem,
                            userId: userId,
                        });
                        return [4, (doctorExist_1 === null || doctorExist_1 === void 0 ? void 0 : doctorExist_1.save())];
                    case 4:
                        savedTime = _c.sent();
                        if (!!savedTime) {
                            return [2, { success: true }];
                        }
                        else {
                            throw new Error("dosent assign slot");
                        }
                        return [3, 9];
                    case 5:
                        _c.trys.push([5, 8, , 9]);
                        _b = (_a = Promise).all;
                        return [4, doctorExist_1.slotes.map(function (filteredSlot) { return __awaiter(_this, void 0, void 0, function () {
                                var filteredSlotSTime, filteredSlotETime, slotSTime, slotETime, obj, savedTime;
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
                                            console.log({ doctorExist: doctorExist_1 });
                                            throw new Error("slot conflict occure");
                                        case 1:
                                            obj = {
                                                time: slot,
                                                userId: userId,
                                                problem: problem,
                                            };
                                            doctorExist_1 === null || doctorExist_1 === void 0 ? void 0 : doctorExist_1.slotes.push(obj);
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
                                        case 3: throw new Error("slot conflict occure");
                                    }
                                });
                            }); })];
                    case 6: return [4, _b.apply(_a, [_c.sent()])];
                    case 7:
                        _c.sent();
                        return [3, 9];
                    case 8:
                        e_1 = _c.sent();
                        throw new Error(e_1);
                    case 9: return [3, 11];
                    case 10: throw new Error("doctor not available at this time");
                    case 11: return [3, 13];
                    case 12:
                        e_2 = _c.sent();
                        throw new Error(e_2);
                    case 13: return [2];
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
/******/ 		__webpack_require__.h = () => "3fc23d9524ba6a6ecaac"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9yZXBvc2l0b3J5L3VzZXIvVXNlclJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIscUJBQXFCLG1CQUFPLENBQUMsK0VBQW1DO0FBQ2hFLGFBQWEsbUJBQU8sQ0FBQyx1REFBb0I7QUFDekMsc0JBQXNCLG1CQUFPLENBQUMsbUVBQXNCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZUFBZTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGlCQUFpQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHlGQUF5RjtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxtQ0FBbUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGVBQWU7QUFDbkQ7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDZCQUE2QjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZ0JBQWdCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QixFQUFFLEVBQUU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHNCQUFzQjs7Ozs7Ozs7Ozs7O1dDOU10QixvRCIsImZpbGUiOiJtYWluLjBiMjIxYjc5YTMxYjU3NjllOTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVzZXJSZXBvc2l0b3J5ID0gdm9pZCAwO1xudmFyIGRvY3Rvcl9tb2RlbF8xID0gcmVxdWlyZShcIi4uLy4uL3NjaGVtYXMvRG9jdG9yL2RvY3Rvci5tb2RlbFwiKTtcbnZhciBVc2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vc2NoZW1hcy9Vc2VyXCIpO1xudmFyIEpXVFJlcG9zaXRvcnlfMSA9IHJlcXVpcmUoXCIuLi9qd3QvSldUUmVwb3NpdG9yeVwiKTtcbnZhciBVc2VyUmVwb3NpdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXNlclJlcG9zaXRvcnkoKSB7XG4gICAgfVxuICAgIFVzZXJSZXBvc2l0b3J5LnByb3RvdHlwZS5nZXRVc2VyQnlJZCA9IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIFVzZXJfMS5Vc2VyLmZpbmRCeUlkKHVzZXJJZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiwgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBVc2VyUmVwb3NpdG9yeS5wcm90b3R5cGUucmVnaXN0ZXJVc2VyID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgbW9iaWxlLCBhZ2UsIGdlbmRlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZW1haWxFeGlzdCwgbW9iaWxlRXhpc3QsIHVzZXIsIHNhdmVkVXNlciwgdG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgVXNlcl8xLlVzZXIuZmluZE9uZSh7IGVtYWlsOiBlbWFpbCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsRXhpc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFlbWFpbEV4aXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1haWwgYWxyZWFkeSBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgVXNlcl8xLlVzZXIuZmluZE9uZSh7IG1vYmlsZTogbW9iaWxlIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlRXhpc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFtb2JpbGVFeGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vYmlsZSBudW1iZXIgYWxyZWFkeSBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSBuZXcgVXNlcl8xLlVzZXIoeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCwgbmFtZTogbmFtZSwgbW9iaWxlOiBtb2JpbGUsIGFnZTogYWdlLCBnZW5kZXI6IGdlbmRlciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdXNlci5zYXZlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZFVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNhdmVkVXNlcikgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgSldUUmVwb3NpdG9yeV8xLkpXVFJlcG9zaXRvcnkuZ2V0SW5zdGFuY2UoKS5nZW5lcmF0ZVRva2VuKHNhdmVkVXNlci5faWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgdG9rZW46IHRva2VuIH1dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHRocm93IG5ldyBFcnJvcihcIlJlZ2lzdGVyIGZhaWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVXNlclJlcG9zaXRvcnkucHJvdG90eXBlLmxvZ2luVXNlciA9IGZ1bmN0aW9uIChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVzZXIsIHRva2VuO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIFVzZXJfMS5Vc2VyLmZpbmRPbmUoeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhdXNlcikgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgSldUUmVwb3NpdG9yeV8xLkpXVFJlcG9zaXRvcnkuZ2V0SW5zdGFuY2UoKS5nZW5lcmF0ZVRva2VuKHVzZXIuX2lkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHRva2VuOiB0b2tlbiB9XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiB0aHJvdyBuZXcgRXJyb3IoXCJJblZhbGlkIENyZWRlbnRpYWwgISFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVXNlclJlcG9zaXRvcnkucHJvdG90eXBlLmJvb2tBcG9pbnRtZW50ID0gZnVuY3Rpb24gKHByb2JsZW0sIHNsb3QsIGRvY3RvcklkLCB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRheXMsIGRvY3RvckV4aXN0XzEsIHdvcmtpbmdUaW1lLCBzYXZlZFRpbWUsIF9hLCBfYiwgZV8xLCBlXzI7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5cyA9IHsgbW9uOiAwLCB0dWU6IDEsIHdlZDogMiwgdGh1OiAzLCBmcnk6IDQsIHNhdDogNSwgc3VuOiA2IH07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMSwgMTIsICwgMTNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yX21vZGVsXzEuRG9jdG9yLmZpbmRCeUlkKGRvY3RvcklkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvckV4aXN0XzEgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhIWRvY3RvckV4aXN0XzEpIHJldHVybiBbMywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb2N0b3IgZG9zZW50IGV4aXN0IGluIGRhdGEgYmFzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2luZ1RpbWUgPSBkb2N0b3JFeGlzdF8xLndvcmtpbmdUaW1lLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBhcnNlSW50KHdvcmtpbmdUaW1lWzBdKSA8PSBwYXJzZUludChzbG90LnNwbGl0KFwiLVwiKVswXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh3b3JraW5nVGltZVsxXSkgPj0gcGFyc2VJbnQoc2xvdC5zcGxpdChcIi1cIilbMF0pKSkgcmV0dXJuIFszLCAxMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkb2N0b3JFeGlzdF8xLnNsb3Rlcy5sZW5ndGggPD0gMCkpIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JFeGlzdF8xID09PSBudWxsIHx8IGRvY3RvckV4aXN0XzEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3RvckV4aXN0XzEuc2xvdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHNsb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvYmxlbTogcHJvYmxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCAoZG9jdG9yRXhpc3RfMSA9PT0gbnVsbCB8fCBkb2N0b3JFeGlzdF8xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkb2N0b3JFeGlzdF8xLnNhdmUoKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZFRpbWUgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFzYXZlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgc3VjY2VzczogdHJ1ZSB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvc2VudCBhc3NpZ24gc2xvdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbNSwgOCwgLCA5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IChfYSA9IFByb21pc2UpLmFsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yRXhpc3RfMS5zbG90ZXMubWFwKGZ1bmN0aW9uIChmaWx0ZXJlZFNsb3QpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlcmVkU2xvdFNUaW1lLCBmaWx0ZXJlZFNsb3RFVGltZSwgc2xvdFNUaW1lLCBzbG90RVRpbWUsIG9iaiwgc2F2ZWRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhZmlsdGVyZWRTbG90KSByZXR1cm4gWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFNsb3RTVGltZSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTbG90LnRpbWUuc3BsaXQoXCItXCIpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRTbG90RVRpbWUgPSBwYXJzZUZsb2F0KGZpbHRlcmVkU2xvdC50aW1lLnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RTVGltZSA9IHBhcnNlRmxvYXQoc2xvdC5zcGxpdChcIi1cIilbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90RVRpbWUgPSBwYXJzZUZsb2F0KHNsb3Quc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKHNsb3RTVGltZSA+PSBmaWx0ZXJlZFNsb3RTVGltZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFNUaW1lIDw9IGZpbHRlcmVkU2xvdEVUaW1lKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNsb3RFVGltZSA+PSBmaWx0ZXJlZFNsb3RTVGltZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RFVGltZSA8PSBmaWx0ZXJlZFNsb3RFVGltZSkpKSByZXR1cm4gWzMsIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGRvY3RvckV4aXN0OiBkb2N0b3JFeGlzdF8xIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzbG90IGNvbmZsaWN0IG9jY3VyZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHNsb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2JsZW06IHByb2JsZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvckV4aXN0XzEgPT09IG51bGwgfHwgZG9jdG9yRXhpc3RfMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdG9yRXhpc3RfMS5zbG90ZXMucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIChkb2N0b3JFeGlzdF8xID09PSBudWxsIHx8IGRvY3RvckV4aXN0XzEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3RvckV4aXN0XzEuc2F2ZSgpKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZFRpbWUgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXNhdmVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHN1Y2Nlc3M6IHRydWUgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb3NlbnQgYXNzaWduIHNsb3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzogdGhyb3cgbmV3IEVycm9yKFwic2xvdCBjb25mbGljdCBvY2N1cmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs0LCBfYi5hcHBseShfYSwgW19jLnNlbnQoKV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVfMSk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFszLCAxMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHRocm93IG5ldyBFcnJvcihcImRvY3RvciBub3QgYXZhaWxhYmxlIGF0IHRoaXMgdGltZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTogcmV0dXJuIFszLCAxM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZV8yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBVc2VyUmVwb3NpdG9yeS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFVc2VyUmVwb3NpdG9yeS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgVXNlclJlcG9zaXRvcnkuaW5zdGFuY2UgPSBuZXcgVXNlclJlcG9zaXRvcnkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVXNlclJlcG9zaXRvcnkuaW5zdGFuY2U7XG4gICAgfTtcbiAgICByZXR1cm4gVXNlclJlcG9zaXRvcnk7XG59KCkpO1xuZXhwb3J0cy5Vc2VyUmVwb3NpdG9yeSA9IFVzZXJSZXBvc2l0b3J5O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gXCIzZmMyM2Q5NTI0YmE2YTZlY2FhY1wiIl0sInNvdXJjZVJvb3QiOiIifQ==