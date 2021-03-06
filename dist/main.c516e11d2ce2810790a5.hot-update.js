exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/graphql/doctor/doctor.mutation.ts":
/*!***********************************************!*\
  !*** ./src/graphql/doctor/doctor.mutation.ts ***!
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
exports.GraphQLDoctorMutation = void 0;
var graphql_1 = __webpack_require__(/*! graphql */ "graphql");
var graphql_relay_1 = __webpack_require__(/*! graphql-relay */ "graphql-relay");
var GraphQLAddDoctor = graphql_relay_1.mutationWithClientMutationId({
    name: "addDoctor",
    inputFields: {
        name: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        specialization: { type: graphql_1.GraphQLList(graphql_1.GraphQLString) },
        curruntServingHospital: { type: graphql_1.GraphQLString },
        experience: { type: graphql_1.GraphQLString },
        bio: { type: graphql_1.GraphQLString },
        workingTime: { type: graphql_1.GraphQLString },
    },
    outputFields: {
        success: { type: graphql_1.GraphQLBoolean },
    },
    mutateAndGetPayload: function (_a, ctx) {
        var name = _a.name, specialization = _a.specialization, curruntServingHospital = _a.curruntServingHospital, experience = _a.experience, bio = _a.bio, workingTime = _a.workingTime;
        return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, ctx._doctorRepository.addDoctor({
                            name: name,
                            specialization: specialization,
                            curruntServingHospital: curruntServingHospital,
                            experience: experience,
                            bio: bio,
                            workingTime: workingTime,
                        })];
                    case 1:
                        result = _b.sent();
                        return [2, result];
                }
            });
        });
    },
});
var GraphQLEditDoctor = graphql_relay_1.mutationWithClientMutationId({
    name: "editDoctor",
    inputFields: {
        id: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        name: { type: graphql_1.GraphQLString },
        specialization: { type: graphql_1.GraphQLString },
        curruntServingHospital: { type: graphql_1.GraphQLString },
        experience: { type: graphql_1.GraphQLString },
        bio: { type: graphql_1.GraphQLString },
        workingTime: { type: graphql_1.GraphQLString },
    },
    outputFields: {
        success: { type: graphql_1.GraphQLBoolean },
    },
    mutateAndGetPayload: function (_a, ctx) {
        var id = _a.id, name = _a.name, specialization = _a.specialization, curruntServingHospital = _a.curruntServingHospital, experience = _a.experience, bio = _a.bio, workingTime = _a.workingTime;
        return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, ctx._doctorRepository.editDoctor({
                            id: id,
                            name: name,
                            specialization: specialization,
                            curruntServingHospital: curruntServingHospital,
                            experience: experience,
                            bio: bio,
                            workingTime: workingTime,
                        })];
                    case 1:
                        result = _b.sent();
                        return [2, result];
                }
            });
        });
    },
});
var GraphQLDeleteDoctor = graphql_relay_1.mutationWithClientMutationId({
    name: "deleteDoctor",
    inputFields: {
        id: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    },
    outputFields: {
        success: { type: graphql_1.GraphQLBoolean },
    },
    mutateAndGetPayload: function (_a, ctx) {
        var id = _a.id;
        return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, ctx._doctorRepository.deleteDoctor({ id: id })];
                    case 1:
                        result = _b.sent();
                        return [2, result];
                }
            });
        });
    },
});
var GraphQLDoctorMutation = {
    addDoctor: GraphQLAddDoctor,
    editDoctor: GraphQLEditDoctor,
    deleteDoctor: GraphQLDeleteDoctor,
};
exports.GraphQLDoctorMutation = GraphQLDoctorMutation;


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
    DoctorRepository.getInstance = function () {
        if (!DoctorRepository.instance) {
            DoctorRepository.instance = new DoctorRepository();
        }
        return DoctorRepository.instance;
    };
    return DoctorRepository;
}());
exports.DoctorRepository = DoctorRepository;


/***/ }),

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


/***/ }),

/***/ "./src/routes/imageRouter.ts":
/*!***********************************!*\
  !*** ./src/routes/imageRouter.ts ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/*! CommonJS bailout: this is used directly at 38:23-27 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
var multer_1 = __importDefault(__webpack_require__(/*! multer */ "multer"));
var doctor_model_1 = __webpack_require__(/*! ../schemas/Doctor/doctor.model */ "./src/schemas/Doctor/doctor.model.ts");
var imageRouter = express_1.default.Router();
imageRouter.use(body_parser_1.default.json());
var Storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, "" + file.originalname);
    },
});
var imageFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)) {
        cb(new Error("You upload only images :) "), false);
    }
    cb(null, true);
};
var upload = multer_1.default({
    storage: Storage,
});
imageRouter
    .route("/doctor/:doctorId")
    .get(function (req, res, next) {
    console.log("in the get");
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end("success");
})
    .post(upload.single("doctorImage"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var event_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("post run");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, doctor_model_1.Doctor.findByIdAndUpdate(req.params.doctorId, { $set: { imageUrl: "images/" + req.file.originalname } }, { new: true })];
            case 2:
                event_1 = _a.sent();
                console.log({ event: event_1 });
                res.status(200).send({ status: "success" });
                return [3, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                return [3, 4];
            case 4: return [2];
        }
    });
}); })
    .put(upload.single("doctorImage"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var event_2, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("post run");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, doctor_model_1.Doctor.findByIdAndUpdate(req.params.doctorId, { $set: { imageUrl: "images/" + req.file.originalname } }, { new: true })];
            case 2:
                event_2 = _a.sent();
                console.log({ event: event_2 });
                res.status(200).send({ status: "success" });
                return [3, 4];
            case 3:
                e_2 = _a.sent();
                console.log(e_2);
                return [3, 4];
            case 4: return [2];
        }
    });
}); });
exports.default = imageRouter;


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
    userId: { type: String },
    problem: { type: String },
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
/******/ 		__webpack_require__.h = () => "18d8f0583165a115b748"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9ncmFwaHFsL2RvY3Rvci9kb2N0b3IubXV0YXRpb24udHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvLi9zcmMvcmVwb3NpdG9yeS9kb2N0b3IvZG9jdG9yLnJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvLi9zcmMvcmVwb3NpdG9yeS91c2VyL1VzZXJSZXBvc2l0b3J5LnRzIiwid2VicGFjazovL01ha2VTb25nLy4vc3JjL3JvdXRlcy9pbWFnZVJvdXRlci50cyIsIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9zY2hlbWFzL0RvY3Rvci9kb2N0b3IubW9kZWwudHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4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QSxLQUFLO0FBQ0wsQ0FBQyxFQUFFLEVBQUU7QUFDTCxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN0SEY7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxjQUFjO0FBQ2QsaUNBQWlDLG1CQUFPLENBQUMsMEJBQVU7QUFDbkQ7QUFDQSxXQUFXLCtCQUErQjtBQUMxQyxhQUFhLGVBQWU7QUFDNUIsY0FBYyxlQUFlO0FBQzdCLENBQUM7QUFDRDtBQUNBLFdBQVcsK0JBQStCO0FBQzFDLHNCQUFzQixlQUFlO0FBQ3JDLDZCQUE2QixlQUFlO0FBQzVDLGlCQUFpQixlQUFlO0FBQ2hDLFVBQVUsZUFBZTtBQUN6QixrQkFBa0IsZUFBZTtBQUNqQyxlQUFlLGVBQWU7QUFDOUI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxjQUFjOzs7Ozs7Ozs7Ozs7V0N6QmQsb0QiLCJmaWxlIjoibWFpbi5jNTE2ZTExZDJjZTI4MTA3OTBhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaFFMRG9jdG9yTXV0YXRpb24gPSB2b2lkIDA7XG52YXIgZ3JhcGhxbF8xID0gcmVxdWlyZShcImdyYXBocWxcIik7XG52YXIgZ3JhcGhxbF9yZWxheV8xID0gcmVxdWlyZShcImdyYXBocWwtcmVsYXlcIik7XG52YXIgR3JhcGhRTEFkZERvY3RvciA9IGdyYXBocWxfcmVsYXlfMS5tdXRhdGlvbldpdGhDbGllbnRNdXRhdGlvbklkKHtcbiAgICBuYW1lOiBcImFkZERvY3RvclwiLFxuICAgIGlucHV0RmllbGRzOiB7XG4gICAgICAgIG5hbWU6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxOb25OdWxsKGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICBzcGVjaWFsaXphdGlvbjogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTExpc3QoZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcpIH0sXG4gICAgICAgIGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWw6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgZXhwZXJpZW5jZTogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICBiaW86IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgd29ya2luZ1RpbWU6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICB9LFxuICAgIG91dHB1dEZpZWxkczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMQm9vbGVhbiB9LFxuICAgIH0sXG4gICAgbXV0YXRlQW5kR2V0UGF5bG9hZDogZnVuY3Rpb24gKF9hLCBjdHgpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCBzcGVjaWFsaXphdGlvbiA9IF9hLnNwZWNpYWxpemF0aW9uLCBjdXJydW50U2VydmluZ0hvc3BpdGFsID0gX2EuY3VycnVudFNlcnZpbmdIb3NwaXRhbCwgZXhwZXJpZW5jZSA9IF9hLmV4cGVyaWVuY2UsIGJpbyA9IF9hLmJpbywgd29ya2luZ1RpbWUgPSBfYS53b3JraW5nVGltZTtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGN0eC5fZG9jdG9yUmVwb3NpdG9yeS5hZGREb2N0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246IHNwZWNpYWxpemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWw6IGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZTogZXhwZXJpZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW86IGJpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nVGltZTogd29ya2luZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVzdWx0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn0pO1xudmFyIEdyYXBoUUxFZGl0RG9jdG9yID0gZ3JhcGhxbF9yZWxheV8xLm11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQoe1xuICAgIG5hbWU6IFwiZWRpdERvY3RvclwiLFxuICAgIGlucHV0RmllbGRzOiB7XG4gICAgICAgIGlkOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMTm9uTnVsbChncmFwaHFsXzEuR3JhcGhRTFN0cmluZykgfSxcbiAgICAgICAgbmFtZTogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICBzcGVjaWFsaXphdGlvbjogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICBjdXJydW50U2VydmluZ0hvc3BpdGFsOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIGV4cGVyaWVuY2U6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgYmlvOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIHdvcmtpbmdUaW1lOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgfSxcbiAgICBvdXRwdXRGaWVsZHM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTEJvb2xlYW4gfSxcbiAgICB9LFxuICAgIG11dGF0ZUFuZEdldFBheWxvYWQ6IGZ1bmN0aW9uIChfYSwgY3R4KSB7XG4gICAgICAgIHZhciBpZCA9IF9hLmlkLCBuYW1lID0gX2EubmFtZSwgc3BlY2lhbGl6YXRpb24gPSBfYS5zcGVjaWFsaXphdGlvbiwgY3VycnVudFNlcnZpbmdIb3NwaXRhbCA9IF9hLmN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwsIGV4cGVyaWVuY2UgPSBfYS5leHBlcmllbmNlLCBiaW8gPSBfYS5iaW8sIHdvcmtpbmdUaW1lID0gX2Eud29ya2luZ1RpbWU7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBjdHguX2RvY3RvclJlcG9zaXRvcnkuZWRpdERvY3Rvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246IHNwZWNpYWxpemF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWw6IGN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZTogZXhwZXJpZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW86IGJpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nVGltZTogd29ya2luZ1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVzdWx0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn0pO1xudmFyIEdyYXBoUUxEZWxldGVEb2N0b3IgPSBncmFwaHFsX3JlbGF5XzEubXV0YXRpb25XaXRoQ2xpZW50TXV0YXRpb25JZCh7XG4gICAgbmFtZTogXCJkZWxldGVEb2N0b3JcIixcbiAgICBpbnB1dEZpZWxkczoge1xuICAgICAgICBpZDogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTE5vbk51bGwoZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcpIH0sXG4gICAgfSxcbiAgICBvdXRwdXRGaWVsZHM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTEJvb2xlYW4gfSxcbiAgICB9LFxuICAgIG11dGF0ZUFuZEdldFBheWxvYWQ6IGZ1bmN0aW9uIChfYSwgY3R4KSB7XG4gICAgICAgIHZhciBpZCA9IF9hLmlkO1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgY3R4Ll9kb2N0b3JSZXBvc2l0b3J5LmRlbGV0ZURvY3Rvcih7IGlkOiBpZCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVzdWx0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn0pO1xudmFyIEdyYXBoUUxEb2N0b3JNdXRhdGlvbiA9IHtcbiAgICBhZGREb2N0b3I6IEdyYXBoUUxBZGREb2N0b3IsXG4gICAgZWRpdERvY3RvcjogR3JhcGhRTEVkaXREb2N0b3IsXG4gICAgZGVsZXRlRG9jdG9yOiBHcmFwaFFMRGVsZXRlRG9jdG9yLFxufTtcbmV4cG9ydHMuR3JhcGhRTERvY3Rvck11dGF0aW9uID0gR3JhcGhRTERvY3Rvck11dGF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRG9jdG9yUmVwb3NpdG9yeSA9IHZvaWQgMDtcbnZhciBjb21tb25fZ3JhcGhRbFBhZ2luYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21tb24vY29tbW9uLmdyYXBoUWxQYWdpbmF0aW9uXCIpO1xudmFyIGRvY3Rvcl9tb2RlbF8xID0gcmVxdWlyZShcIi4uLy4uL3NjaGVtYXMvRG9jdG9yL2RvY3Rvci5tb2RlbFwiKTtcbnZhciBEb2N0b3JSZXBvc2l0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEb2N0b3JSZXBvc2l0b3J5KCkge1xuICAgIH1cbiAgICBEb2N0b3JSZXBvc2l0b3J5LnByb3RvdHlwZS5hZGREb2N0b3IgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCBzcGVjaWFsaXphdGlvbiA9IF9hLnNwZWNpYWxpemF0aW9uLCBjdXJydW50U2VydmluZ0hvc3BpdGFsID0gX2EuY3VycnVudFNlcnZpbmdIb3NwaXRhbCwgZXhwZXJpZW5jZSA9IF9hLmV4cGVyaWVuY2UsIGJpbyA9IF9hLmJpbywgd29ya2luZ1RpbWUgPSBfYS53b3JraW5nVGltZTtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRvY3Rvciwgc2F2ZWREb2N0b3IsIGVfMTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uOiBzcGVjaWFsaXphdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJydW50U2VydmluZ0hvc3BpdGFsOiBjdXJydW50U2VydmluZ0hvc3BpdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2U6IGV4cGVyaWVuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlvOiBiaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2luZ1RpbWU6IHdvcmtpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IgPSBuZXcgZG9jdG9yX21vZGVsXzEuRG9jdG9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uOiBzcGVjaWFsaXphdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJydW50U2VydmluZ0hvc3BpdGFsOiBjdXJydW50U2VydmluZ0hvc3BpdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2U6IGV4cGVyaWVuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlvOiBiaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2luZ1RpbWU6IHdvcmtpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGRvY3Rvci5zYXZlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZERvY3RvciA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghISFzYXZlZERvY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvY3RvciBkb3NlbnQgc2F2ZWQgaW4gZGF0YWJhc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgc3VjY2VzczogdHJ1ZSB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvY3RvciBhZGRpbmcgZmFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERvY3RvclJlcG9zaXRvcnkucHJvdG90eXBlLmVkaXREb2N0b3IgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGlkID0gX2EuaWQsIG5hbWUgPSBfYS5uYW1lLCBzcGVjaWFsaXphdGlvbiA9IF9hLnNwZWNpYWxpemF0aW9uLCBjdXJydW50U2VydmluZ0hvc3BpdGFsID0gX2EuY3VycnVudFNlcnZpbmdIb3NwaXRhbCwgZXhwZXJpZW5jZSA9IF9hLmV4cGVyaWVuY2UsIGJpbyA9IF9hLmJpbywgd29ya2luZ1RpbWUgPSBfYS53b3JraW5nVGltZTtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGV4aXN0RG9jdG9yLCB1cGRhdGVGZWlsZCwgdXBkYXRlZERvY3RvciwgZV8yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCA1LCAsIDZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yX21vZGVsXzEuRG9jdG9yLmZpbmRCeUlkKGlkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0RG9jdG9yID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhISFleGlzdERvY3RvcikgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvY3RvciBkb3NlbnQgcHJlc2VudCBpbiBkYXRhYmFzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmVpbGQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGZWlsZCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB1cGRhdGVGZWlsZCksIHsgbmFtZTogbmFtZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXNwZWNpYWxpemF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmVpbGQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdXBkYXRlRmVpbGQpLCB7IHNwZWNpYWxpemF0aW9uOiBzcGVjaWFsaXphdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWN1cnJ1bnRTZXJ2aW5nSG9zcGl0YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGZWlsZCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB1cGRhdGVGZWlsZCksIHsgY3VycnVudFNlcnZpbmdIb3NwaXRhbDogY3VycnVudFNlcnZpbmdIb3NwaXRhbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWV4cGVyaWVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGZWlsZCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB1cGRhdGVGZWlsZCksIHsgZXhwZXJpZW5jZTogZXhwZXJpZW5jZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWJpbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZlaWxkID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHVwZGF0ZUZlaWxkKSwgeyBiaW86IGJpbyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXdvcmtpbmdUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmVpbGQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdXBkYXRlRmVpbGQpLCB7IHdvcmtpbmdUaW1lOiB3b3JraW5nVGltZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yX21vZGVsXzEuRG9jdG9yLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB7ICRzZXQ6IF9fYXNzaWduKHt9LCB1cGRhdGVGZWlsZCkgfSwgeyBuZXc6IHRydWUgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRG9jdG9yID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhIXVwZGF0ZWREb2N0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb2N0b3IgZG9zZW50IHVwZGF0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IHVwZGF0ZWREb2N0b3I6IHVwZGF0ZWREb2N0b3IgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHN1Y2Nlc3M6IHRydWUgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFszLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVfMik7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEb2N0b3JSZXBvc2l0b3J5LnByb3RvdHlwZS5kZWxldGVEb2N0b3IgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGlkID0gX2EuaWQ7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBleGlzdERvY3RvciwgZGVsZXRlZERvY3RvciwgZV8zO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCA1LCAsIDZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yX21vZGVsXzEuRG9jdG9yLmZpbmRCeUlkKGlkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0RG9jdG9yID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhISFleGlzdERvY3RvcikgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvY3RvciBkb3NlbnQgcHJlc2VudCBpbiBkYXRhYmFzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQsIGRvY3Rvcl9tb2RlbF8xLkRvY3Rvci5maW5kQnlJZEFuZFJlbW92ZShpZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkRG9jdG9yID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhIWRlbGV0ZWREb2N0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb2N0b3IgZG9zZW50IGRlbGV0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGRlbGV0ZWREb2N0b3I6IGRlbGV0ZWREb2N0b3IgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHN1Y2Nlc3M6IHRydWUgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFszLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8zID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVfMyk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEb2N0b3JSZXBvc2l0b3J5LnByb3RvdHlwZS5nZXRBbGxEb2N0b3JzID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hLCB3aGVyZSwgbGltaXQsIG9yZGVyQnksIGRvY3RvcnMsIGVfNDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IGNvbW1vbl9ncmFwaFFsUGFnaW5hdGlvbl8xLmFyZ3NUb1doZXJlQ29uZChhcmdzKSwgd2hlcmUgPSBfYS53aGVyZSwgbGltaXQgPSBfYS5saW1pdCwgb3JkZXJCeSA9IF9hLm9yZGVyQnk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGRvY3Rvcl9tb2RlbF8xLkRvY3Rvci5maW5kKF9fYXNzaWduKHt9LCB3aGVyZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5saW1pdChsaW1pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQob3JkZXJCeSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JzID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBkb2N0b3JzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV80ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVfNCk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEb2N0b3JSZXBvc2l0b3J5LmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIURvY3RvclJlcG9zaXRvcnkuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIERvY3RvclJlcG9zaXRvcnkuaW5zdGFuY2UgPSBuZXcgRG9jdG9yUmVwb3NpdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEb2N0b3JSZXBvc2l0b3J5Lmluc3RhbmNlO1xuICAgIH07XG4gICAgcmV0dXJuIERvY3RvclJlcG9zaXRvcnk7XG59KCkpO1xuZXhwb3J0cy5Eb2N0b3JSZXBvc2l0b3J5ID0gRG9jdG9yUmVwb3NpdG9yeTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVzZXJSZXBvc2l0b3J5ID0gdm9pZCAwO1xudmFyIGRvY3Rvcl9tb2RlbF8xID0gcmVxdWlyZShcIi4uLy4uL3NjaGVtYXMvRG9jdG9yL2RvY3Rvci5tb2RlbFwiKTtcbnZhciBVc2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vc2NoZW1hcy9Vc2VyXCIpO1xudmFyIEpXVFJlcG9zaXRvcnlfMSA9IHJlcXVpcmUoXCIuLi9qd3QvSldUUmVwb3NpdG9yeVwiKTtcbnZhciBVc2VyUmVwb3NpdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXNlclJlcG9zaXRvcnkoKSB7XG4gICAgfVxuICAgIFVzZXJSZXBvc2l0b3J5LnByb3RvdHlwZS5nZXRVc2VyQnlJZCA9IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIFVzZXJfMS5Vc2VyLmZpbmRCeUlkKHVzZXJJZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiwgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBVc2VyUmVwb3NpdG9yeS5wcm90b3R5cGUucmVnaXN0ZXJVc2VyID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgbW9iaWxlLCBhZ2UsIGdlbmRlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZW1haWxFeGlzdCwgbW9iaWxlRXhpc3QsIHVzZXIsIHNhdmVkVXNlciwgdG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgVXNlcl8xLlVzZXIuZmluZE9uZSh7IGVtYWlsOiBlbWFpbCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsRXhpc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFlbWFpbEV4aXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1haWwgYWxyZWFkeSBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgVXNlcl8xLlVzZXIuZmluZE9uZSh7IG1vYmlsZTogbW9iaWxlIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlRXhpc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFtb2JpbGVFeGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vYmlsZSBudW1iZXIgYWxyZWFkeSBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSBuZXcgVXNlcl8xLlVzZXIoeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCwgbmFtZTogbmFtZSwgbW9iaWxlOiBtb2JpbGUsIGFnZTogYWdlLCBnZW5kZXI6IGdlbmRlciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdXNlci5zYXZlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZFVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNhdmVkVXNlcikgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgSldUUmVwb3NpdG9yeV8xLkpXVFJlcG9zaXRvcnkuZ2V0SW5zdGFuY2UoKS5nZW5lcmF0ZVRva2VuKHNhdmVkVXNlci5faWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgdG9rZW46IHRva2VuIH1dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHRocm93IG5ldyBFcnJvcihcIlJlZ2lzdGVyIGZhaWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVXNlclJlcG9zaXRvcnkucHJvdG90eXBlLmxvZ2luVXNlciA9IGZ1bmN0aW9uIChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVzZXIsIHRva2VuO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIFVzZXJfMS5Vc2VyLmZpbmRPbmUoeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISEhdXNlcikgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgSldUUmVwb3NpdG9yeV8xLkpXVFJlcG9zaXRvcnkuZ2V0SW5zdGFuY2UoKS5nZW5lcmF0ZVRva2VuKHVzZXIuX2lkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHRva2VuOiB0b2tlbiB9XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiB0aHJvdyBuZXcgRXJyb3IoXCJJblZhbGlkIENyZWRlbnRpYWwgISFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVXNlclJlcG9zaXRvcnkucHJvdG90eXBlLmJvb2tBcG9pbnRtZW50ID0gZnVuY3Rpb24gKHByb2JsZW0sIHNsb3QsIGRvY3RvcklkLCB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRheXMsIGRvY3RvckV4aXN0XzEsIHdvcmtpbmdUaW1lLCBzYXZlZFRpbWUsIGVfMTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IHByb2JsZW06IHByb2JsZW0sIHNsb3Q6IHNsb3QsIGRvY3RvcklkOiBkb2N0b3JJZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXMgPSB7IG1vbjogMCwgdHVlOiAxLCB3ZWQ6IDIsIHRodTogMywgZnJ5OiA0LCBzYXQ6IDUsIHN1bjogNiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDEwLCAsIDExXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGRvY3Rvcl9tb2RlbF8xLkRvY3Rvci5maW5kQnlJZChkb2N0b3JJZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JFeGlzdF8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBkb2N0b3JFeGlzdDogZG9jdG9yRXhpc3RfMSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghISEhZG9jdG9yRXhpc3RfMSkgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvY3RvciBkb3NlbnQgZXhpc3QgaW4gZGF0YSBiYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nVGltZSA9IGRvY3RvckV4aXN0XzEud29ya2luZ1RpbWUuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocGFyc2VJbnQod29ya2luZ1RpbWVbMF0pIDw9IHBhcnNlSW50KHNsb3Quc3BsaXQoXCItXCIpWzBdKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHdvcmtpbmdUaW1lWzFdKSA+PSBwYXJzZUludChzbG90LnNwbGl0KFwiLVwiKVswXSkpKSByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZG9jdG9yRXhpc3RfMS5zbG90ZXMubGVuZ3RoIDw9IDApKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yRXhpc3RfMSA9PT0gbnVsbCB8fCBkb2N0b3JFeGlzdF8xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkb2N0b3JFeGlzdF8xLnNsb3Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBzbG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2JsZW06IHByb2JsZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgKGRvY3RvckV4aXN0XzEgPT09IG51bGwgfHwgZG9jdG9yRXhpc3RfMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdG9yRXhpc3RfMS5zYXZlKCkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWRUaW1lID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhc2F2ZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHN1Y2Nlc3M6IHRydWUgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb3NlbnQgYXNzaWduIHNsb3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbNCwgZG9jdG9yRXhpc3RfMS5zbG90ZXMubWFwKGZ1bmN0aW9uIChmaWx0ZXJlZFNsb3QpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWRTbG90U1RpbWUsIGZpbHRlcmVkU2xvdEVUaW1lLCBzbG90U1RpbWUsIHNsb3RFVGltZSwgb2JqLCBzYXZlZFRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhIWZpbHRlcmVkU2xvdCkgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFNsb3RTVGltZSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTbG90LnRpbWUuc3BsaXQoXCItXCIpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFNsb3RFVGltZSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTbG90LnRpbWUuc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90U1RpbWUgPSBwYXJzZUZsb2F0KHNsb3Quc3BsaXQoXCItXCIpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90RVRpbWUgPSBwYXJzZUZsb2F0KHNsb3Quc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgoc2xvdFNUaW1lID49IGZpbHRlcmVkU2xvdFNUaW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RTVGltZSA8PSBmaWx0ZXJlZFNsb3RFVGltZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNsb3RFVGltZSA+PSBmaWx0ZXJlZFNsb3RTVGltZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdEVUaW1lIDw9IGZpbHRlcmVkU2xvdEVUaW1lKSkpIHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2xvdCBjb25mbGljdCBvY2N1cmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBzbG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvYmxlbTogcHJvYmxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZG9jdG9yX21vZGVsXzEuRG9jdG9yLmZpbmRCeUlkQW5kVXBkYXRlKGRvY3RvcklkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHVzaDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RlczogX19hc3NpZ24oe30sIG9iaiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgKGRvY3RvckV4aXN0XzEgPT09IG51bGwgfHwgZG9jdG9yRXhpc3RfMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdG9yRXhpc3RfMS5zYXZlKCkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZFRpbWUgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhc2F2ZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgeyBzdWNjZXNzOiB0cnVlIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9zZW50IGFzc2lnbiBzbG90XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzMsIDldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHRocm93IG5ldyBFcnJvcihcImRvY3RvciBub3QgYXZhaWxhYmxlIGF0IHRoaXMgdGltZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OiByZXR1cm4gWzMsIDExXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlXzEpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFVzZXJSZXBvc2l0b3J5LmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIVVzZXJSZXBvc2l0b3J5Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICBVc2VyUmVwb3NpdG9yeS5pbnN0YW5jZSA9IG5ldyBVc2VyUmVwb3NpdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBVc2VyUmVwb3NpdG9yeS5pbnN0YW5jZTtcbiAgICB9O1xuICAgIHJldHVybiBVc2VyUmVwb3NpdG9yeTtcbn0oKSk7XG5leHBvcnRzLlVzZXJSZXBvc2l0b3J5ID0gVXNlclJlcG9zaXRvcnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXhwcmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJleHByZXNzXCIpKTtcbnZhciBib2R5X3BhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKSk7XG52YXIgbXVsdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm11bHRlclwiKSk7XG52YXIgZG9jdG9yX21vZGVsXzEgPSByZXF1aXJlKFwiLi4vc2NoZW1hcy9Eb2N0b3IvZG9jdG9yLm1vZGVsXCIpO1xudmFyIGltYWdlUm91dGVyID0gZXhwcmVzc18xLmRlZmF1bHQuUm91dGVyKCk7XG5pbWFnZVJvdXRlci51c2UoYm9keV9wYXJzZXJfMS5kZWZhdWx0Lmpzb24oKSk7XG52YXIgU3RvcmFnZSA9IG11bHRlcl8xLmRlZmF1bHQuZGlza1N0b3JhZ2Uoe1xuICAgIGRlc3RpbmF0aW9uOiBmdW5jdGlvbiAocmVxLCBmaWxlLCBjYikge1xuICAgICAgICByZXR1cm4gY2IobnVsbCwgXCJwdWJsaWMvaW1hZ2VzXCIpO1xuICAgIH0sXG4gICAgZmlsZW5hbWU6IGZ1bmN0aW9uIChyZXEsIGZpbGUsIGNiKSB7XG4gICAgICAgIGNiKG51bGwsIFwiXCIgKyBmaWxlLm9yaWdpbmFsbmFtZSk7XG4gICAgfSxcbn0pO1xudmFyIGltYWdlRmlsdGVyID0gZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcbiAgICBpZiAoIWZpbGUub3JpZ2luYWxuYW1lLm1hdGNoKC9cXC4oanBlZ3xqcGd8cG5nfGdpZikkLykpIHtcbiAgICAgICAgY2IobmV3IEVycm9yKFwiWW91IHVwbG9hZCBvbmx5IGltYWdlcyA6KSBcIiksIGZhbHNlKTtcbiAgICB9XG4gICAgY2IobnVsbCwgdHJ1ZSk7XG59O1xudmFyIHVwbG9hZCA9IG11bHRlcl8xLmRlZmF1bHQoe1xuICAgIHN0b3JhZ2U6IFN0b3JhZ2UsXG59KTtcbmltYWdlUm91dGVyXG4gICAgLnJvdXRlKFwiL2RvY3Rvci86ZG9jdG9ySWRcIilcbiAgICAuZ2V0KGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW4gdGhlIGdldFwiKTtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICByZXMuc2V0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwidGV4dC9odG1sXCIpO1xuICAgIHJlcy5lbmQoXCJzdWNjZXNzXCIpO1xufSlcbiAgICAucG9zdCh1cGxvYWQuc2luZ2xlKFwiZG9jdG9ySW1hZ2VcIiksIGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXZlbnRfMSwgZV8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCBydW5cIik7XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkb2N0b3JfbW9kZWxfMS5Eb2N0b3IuZmluZEJ5SWRBbmRVcGRhdGUocmVxLnBhcmFtcy5kb2N0b3JJZCwgeyAkc2V0OiB7IGltYWdlVXJsOiBcImltYWdlcy9cIiArIHJlcS5maWxlLm9yaWdpbmFsbmFtZSB9IH0sIHsgbmV3OiB0cnVlIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBldmVudF8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgZXZlbnQ6IGV2ZW50XzEgfSk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBzdGF0dXM6IFwic3VjY2Vzc1wiIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pXG4gICAgLnB1dCh1cGxvYWQuc2luZ2xlKFwiZG9jdG9ySW1hZ2VcIiksIGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXZlbnRfMiwgZV8yO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCBydW5cIik7XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkb2N0b3JfbW9kZWxfMS5Eb2N0b3IuZmluZEJ5SWRBbmRVcGRhdGUocmVxLnBhcmFtcy5kb2N0b3JJZCwgeyAkc2V0OiB7IGltYWdlVXJsOiBcImltYWdlcy9cIiArIHJlcS5maWxlLm9yaWdpbmFsbmFtZSB9IH0sIHsgbmV3OiB0cnVlIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBldmVudF8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgZXZlbnQ6IGV2ZW50XzIgfSk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBzdGF0dXM6IFwic3VjY2Vzc1wiIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVfMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaW1hZ2VSb3V0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRG9jdG9yID0gdm9pZCAwO1xudmFyIG1vbmdvb3NlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbmdvb3NlXCIpKTtcbnZhciBTbG90ID0gbmV3IG1vbmdvb3NlXzEuZGVmYXVsdC5TY2hlbWEoe1xuICAgIHRpbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHVzZXJJZDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBwcm9ibGVtOiB7IHR5cGU6IFN0cmluZyB9LFxufSk7XG52YXIgZG9jdG9yU2NoZW1hID0gbmV3IG1vbmdvb3NlXzEuZGVmYXVsdC5TY2hlbWEoe1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHNwZWNpYWxpemF0aW9uOiBbeyB0eXBlOiBTdHJpbmcgfV0sXG4gICAgY3VycnVudFNlcnZpbmdIb3NwaXRhbDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBleHBlcmllbmNlOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGJpbzogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICB3b3JraW5nVGltZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBpbWFnZVVybDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBzbG90ZXM6IFtTbG90XSxcbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxufSk7XG52YXIgRG9jdG9yID0gbW9uZ29vc2VfMS5kZWZhdWx0Lm1vZGVsKFwiZG9jdG9yXCIsIGRvY3RvclNjaGVtYSk7XG5leHBvcnRzLkRvY3RvciA9IERvY3RvcjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IFwiMThkOGYwNTgzMTY1YTExNWI3NDhcIiJdLCJzb3VyY2VSb290IjoiIn0=