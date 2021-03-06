exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/graphql/user/index.ts":
/*!***********************************!*\
  !*** ./src/graphql/user/index.ts ***!
  \***********************************/
/*! flagged exports */
/*! export GraphQLUSerQuery [provided] [no usage info] [missing usage info prevents renaming] */
/*! export GraphQLUser [provided] [no usage info] [missing usage info prevents renaming] */
/*! export GraphQLUserMutation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphQLUser = exports.GraphQLUSerQuery = exports.GraphQLUserMutation = void 0;
var user_mutation_1 = __webpack_require__(/*! ./user.mutation */ "./src/graphql/user/user.mutation.ts");
Object.defineProperty(exports, "GraphQLUserMutation", ({ enumerable: true, get: function () { return user_mutation_1.GraphQLUserMutation; } }));
var user_query_1 = __webpack_require__(/*! ./user.query */ "./src/graphql/user/user.query.ts");
Object.defineProperty(exports, "GraphQLUSerQuery", ({ enumerable: true, get: function () { return user_query_1.GraphQLUSerQuery; } }));
var user_typedef_1 = __webpack_require__(/*! ./user.typedef */ "./src/graphql/user/user.typedef.ts");
Object.defineProperty(exports, "GraphQLUser", ({ enumerable: true, get: function () { return user_typedef_1.GraphQLUser; } }));


/***/ }),

/***/ "./src/graphql/user/user.mutation.ts":
/*!*******************************************!*\
  !*** ./src/graphql/user/user.mutation.ts ***!
  \*******************************************/
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
exports.GraphQLUserMutation = void 0;
var graphql_1 = __webpack_require__(/*! graphql */ "graphql");
var graphql_relay_1 = __webpack_require__(/*! graphql-relay */ "graphql-relay");
var GraphQLRegisterUserMutations = graphql_relay_1.mutationWithClientMutationId({
    name: "register",
    inputFields: {
        email: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        password: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        name: { type: graphql_1.GraphQLString },
        mobile: { type: graphql_1.GraphQLString },
        age: { type: graphql_1.GraphQLString },
        gender: { type: graphql_1.GraphQLString },
    },
    outputFields: {
        success: { type: graphql_1.GraphQLBoolean },
        token: { type: graphql_1.GraphQLString },
    },
    mutateAndGetPayload: function (_a, ctx) {
        var email = _a.email, password = _a.password, name = _a.name, mobile = _a.mobile, age = _a.age, gender = _a.gender;
        return __awaiter(void 0, void 0, void 0, function () {
            var token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, ctx._userRepository.registerUser(email, password, name, mobile, age, gender)];
                    case 1:
                        token = (_b.sent()).token;
                        return [2, { token: token, success: true }];
                }
            });
        });
    },
});
var GraphQLLoginUserMutations = graphql_relay_1.mutationWithClientMutationId({
    name: "login",
    inputFields: {
        email: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        password: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    },
    outputFields: {
        success: { type: graphql_1.GraphQLBoolean },
        token: { type: graphql_1.GraphQLString },
    },
    mutateAndGetPayload: function (_a, ctx) {
        var email = _a.email, password = _a.password, name = _a.name;
        return __awaiter(void 0, void 0, void 0, function () {
            var token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, ctx._userRepository.loginUser(email, password)];
                    case 1:
                        token = (_b.sent()).token;
                        return [2, { token: token, success: true }];
                }
            });
        });
    },
});
var GraphQLBookApointmentMutations = graphql_relay_1.mutationWithClientMutationId({
    name: "bookAppointment",
    inputFields: {
        problem: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        slot: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        doctorId: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    },
    outputFields: {
        success: { type: graphql_1.GraphQLBoolean },
    },
    mutateAndGetPayload: function (_a, ctx) {
        var problem = _a.problem, slot = _a.slot, doctorId = _a.doctorId;
        return __awaiter(void 0, void 0, void 0, function () {
            var userId, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = ctx.getUserId().userId;
                        return [4, ctx._userRepository.bookApointment(problem, slot, doctorId, userId)];
                    case 1:
                        result = _b.sent();
                        return [2, result];
                }
            });
        });
    },
});
var GraphQLUserMutation = {
    register: GraphQLRegisterUserMutations,
    login: GraphQLLoginUserMutations,
    bookAppointment: GraphQLBookApointmentMutations,
};
exports.GraphQLUserMutation = GraphQLUserMutation;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "0c19ba73da3bba6cd006"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9ncmFwaHFsL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvLi9zcmMvZ3JhcGhxbC91c2VyL3VzZXIubXV0YXRpb24udHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1CQUFtQixHQUFHLHdCQUF3QixHQUFHLDJCQUEyQjtBQUM1RSxzQkFBc0IsbUJBQU8sQ0FBQyw0REFBaUI7QUFDL0MsdURBQXNELENBQUMscUNBQXFDLDRDQUE0QyxFQUFFLEVBQUUsRUFBQztBQUM3SSxtQkFBbUIsbUJBQU8sQ0FBQyxzREFBYztBQUN6QyxvREFBbUQsQ0FBQyxxQ0FBcUMsc0NBQXNDLEVBQUUsRUFBRSxFQUFDO0FBQ3BJLHFCQUFxQixtQkFBTyxDQUFDLDBEQUFnQjtBQUM3QywrQ0FBOEMsQ0FBQyxxQ0FBcUMsbUNBQW1DLEVBQUUsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUi9HO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCwyQkFBMkI7QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsd0JBQVM7QUFDakMsc0JBQXNCLG1CQUFPLENBQUMsb0NBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUEwRDtBQUMxRSxtQkFBbUIsMERBQTBEO0FBQzdFLGVBQWUsZ0NBQWdDO0FBQy9DLGlCQUFpQixnQ0FBZ0M7QUFDakQsY0FBYyxnQ0FBZ0M7QUFDOUMsaUJBQWlCLGdDQUFnQztBQUNqRCxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsaUNBQWlDO0FBQ25ELGdCQUFnQixnQ0FBZ0M7QUFDaEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw4QkFBOEI7QUFDbEU7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUEwRDtBQUMxRSxtQkFBbUIsMERBQTBEO0FBQzdFLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixpQ0FBaUM7QUFDbkQsZ0JBQWdCLGdDQUFnQztBQUNoRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDhCQUE4QjtBQUNsRTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQTBEO0FBQzVFLGVBQWUsMERBQTBEO0FBQ3pFLG1CQUFtQiwwREFBMEQ7QUFDN0UsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLGlDQUFpQztBQUNuRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7Ozs7Ozs7Ozs7O1dDL0gzQixvRCIsImZpbGUiOiJtYWluLmJjMGQwOWJlOTkzZTI0ZDg0NWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3JhcGhRTFVzZXIgPSBleHBvcnRzLkdyYXBoUUxVU2VyUXVlcnkgPSBleHBvcnRzLkdyYXBoUUxVc2VyTXV0YXRpb24gPSB2b2lkIDA7XG52YXIgdXNlcl9tdXRhdGlvbl8xID0gcmVxdWlyZShcIi4vdXNlci5tdXRhdGlvblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdyYXBoUUxVc2VyTXV0YXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVzZXJfbXV0YXRpb25fMS5HcmFwaFFMVXNlck11dGF0aW9uOyB9IH0pO1xudmFyIHVzZXJfcXVlcnlfMSA9IHJlcXVpcmUoXCIuL3VzZXIucXVlcnlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJHcmFwaFFMVVNlclF1ZXJ5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VyX3F1ZXJ5XzEuR3JhcGhRTFVTZXJRdWVyeTsgfSB9KTtcbnZhciB1c2VyX3R5cGVkZWZfMSA9IHJlcXVpcmUoXCIuL3VzZXIudHlwZWRlZlwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdyYXBoUUxVc2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VyX3R5cGVkZWZfMS5HcmFwaFFMVXNlcjsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3JhcGhRTFVzZXJNdXRhdGlvbiA9IHZvaWQgMDtcbnZhciBncmFwaHFsXzEgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTtcbnZhciBncmFwaHFsX3JlbGF5XzEgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZWxheVwiKTtcbnZhciBHcmFwaFFMUmVnaXN0ZXJVc2VyTXV0YXRpb25zID0gZ3JhcGhxbF9yZWxheV8xLm11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQoe1xuICAgIG5hbWU6IFwicmVnaXN0ZXJcIixcbiAgICBpbnB1dEZpZWxkczoge1xuICAgICAgICBlbWFpbDogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTE5vbk51bGwoZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcpIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMTm9uTnVsbChncmFwaHFsXzEuR3JhcGhRTFN0cmluZykgfSxcbiAgICAgICAgbmFtZTogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICBtb2JpbGU6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgYWdlOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIGdlbmRlcjogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTFN0cmluZyB9LFxuICAgIH0sXG4gICAgb3V0cHV0RmllbGRzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxCb29sZWFuIH0sXG4gICAgICAgIHRva2VuOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgfSxcbiAgICBtdXRhdGVBbmRHZXRQYXlsb2FkOiBmdW5jdGlvbiAoX2EsIGN0eCkge1xuICAgICAgICB2YXIgZW1haWwgPSBfYS5lbWFpbCwgcGFzc3dvcmQgPSBfYS5wYXNzd29yZCwgbmFtZSA9IF9hLm5hbWUsIG1vYmlsZSA9IF9hLm1vYmlsZSwgYWdlID0gX2EuYWdlLCBnZW5kZXIgPSBfYS5nZW5kZXI7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGN0eC5fdXNlclJlcG9zaXRvcnkucmVnaXN0ZXJVc2VyKGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgbW9iaWxlLCBhZ2UsIGdlbmRlcildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IChfYi5zZW50KCkpLnRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHRva2VuOiB0b2tlbiwgc3VjY2VzczogdHJ1ZSB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn0pO1xudmFyIEdyYXBoUUxMb2dpblVzZXJNdXRhdGlvbnMgPSBncmFwaHFsX3JlbGF5XzEubXV0YXRpb25XaXRoQ2xpZW50TXV0YXRpb25JZCh7XG4gICAgbmFtZTogXCJsb2dpblwiLFxuICAgIGlucHV0RmllbGRzOiB7XG4gICAgICAgIGVtYWlsOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMTm9uTnVsbChncmFwaHFsXzEuR3JhcGhRTFN0cmluZykgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxOb25OdWxsKGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nKSB9LFxuICAgIH0sXG4gICAgb3V0cHV0RmllbGRzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxCb29sZWFuIH0sXG4gICAgICAgIHRva2VuOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgfSxcbiAgICBtdXRhdGVBbmRHZXRQYXlsb2FkOiBmdW5jdGlvbiAoX2EsIGN0eCkge1xuICAgICAgICB2YXIgZW1haWwgPSBfYS5lbWFpbCwgcGFzc3dvcmQgPSBfYS5wYXNzd29yZCwgbmFtZSA9IF9hLm5hbWU7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGN0eC5fdXNlclJlcG9zaXRvcnkubG9naW5Vc2VyKGVtYWlsLCBwYXNzd29yZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IChfYi5zZW50KCkpLnRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHRva2VuOiB0b2tlbiwgc3VjY2VzczogdHJ1ZSB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn0pO1xudmFyIEdyYXBoUUxCb29rQXBvaW50bWVudE11dGF0aW9ucyA9IGdyYXBocWxfcmVsYXlfMS5tdXRhdGlvbldpdGhDbGllbnRNdXRhdGlvbklkKHtcbiAgICBuYW1lOiBcImJvb2tBcHBvaW50bWVudFwiLFxuICAgIGlucHV0RmllbGRzOiB7XG4gICAgICAgIHByb2JsZW06IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxOb25OdWxsKGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICBzbG90OiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMTm9uTnVsbChncmFwaHFsXzEuR3JhcGhRTFN0cmluZykgfSxcbiAgICAgICAgZG9jdG9ySWQ6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxOb25OdWxsKGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nKSB9LFxuICAgIH0sXG4gICAgb3V0cHV0RmllbGRzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxCb29sZWFuIH0sXG4gICAgfSxcbiAgICBtdXRhdGVBbmRHZXRQYXlsb2FkOiBmdW5jdGlvbiAoX2EsIGN0eCkge1xuICAgICAgICB2YXIgcHJvYmxlbSA9IF9hLnByb2JsZW0sIHNsb3QgPSBfYS5zbG90LCBkb2N0b3JJZCA9IF9hLmRvY3RvcklkO1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1c2VySWQsIHJlc3VsdDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IGN0eC5nZXRVc2VySWQoKS51c2VySWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGN0eC5fdXNlclJlcG9zaXRvcnkuYm9va0Fwb2ludG1lbnQocHJvYmxlbSwgc2xvdCwgZG9jdG9ySWQsIHVzZXJJZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59KTtcbnZhciBHcmFwaFFMVXNlck11dGF0aW9uID0ge1xuICAgIHJlZ2lzdGVyOiBHcmFwaFFMUmVnaXN0ZXJVc2VyTXV0YXRpb25zLFxuICAgIGxvZ2luOiBHcmFwaFFMTG9naW5Vc2VyTXV0YXRpb25zLFxuICAgIGJvb2tBcHBvaW50bWVudDogR3JhcGhRTEJvb2tBcG9pbnRtZW50TXV0YXRpb25zLFxufTtcbmV4cG9ydHMuR3JhcGhRTFVzZXJNdXRhdGlvbiA9IEdyYXBoUUxVc2VyTXV0YXRpb247XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiBcIjBjMTliYTczZGEzYmJhNmNkMDA2XCIiXSwic291cmNlUm9vdCI6IiJ9