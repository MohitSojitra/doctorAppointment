exports.id = "main";
exports.ids = null;
exports.modules = {

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
var GraphQLUserMutation = {
    register: GraphQLRegisterUserMutations,
    login: GraphQLLoginUserMutations,
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
/******/ 		__webpack_require__.h = () => "77d928626daef3576047"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9ncmFwaHFsL3VzZXIvdXNlci5tdXRhdGlvbi50cyIsIndlYnBhY2s6Ly9NYWtlU29uZy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELDJCQUEyQjtBQUMzQixnQkFBZ0IsbUJBQU8sQ0FBQyx3QkFBUztBQUNqQyxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQTBEO0FBQzFFLG1CQUFtQiwwREFBMEQ7QUFDN0UsZUFBZSxnQ0FBZ0M7QUFDL0MsaUJBQWlCLGdDQUFnQztBQUNqRCxjQUFjLGdDQUFnQztBQUM5QyxpQkFBaUIsZ0NBQWdDO0FBQ2pELEtBQUs7QUFDTDtBQUNBLGtCQUFrQixpQ0FBaUM7QUFDbkQsZ0JBQWdCLGdDQUFnQztBQUNoRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDhCQUE4QjtBQUNsRTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQTBEO0FBQzFFLG1CQUFtQiwwREFBMEQ7QUFDN0UsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLGlDQUFpQztBQUNuRCxnQkFBZ0IsZ0NBQWdDO0FBQ2hELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsOEJBQThCO0FBQ2xFO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBMEQ7QUFDMUUsbUJBQW1CLDBEQUEwRDtBQUM3RSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsaUNBQWlDO0FBQ25ELGdCQUFnQixnQ0FBZ0M7QUFDaEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw4QkFBOEI7QUFDbEU7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7Ozs7Ozs7Ozs7OztXQzVIM0Isb0QiLCJmaWxlIjoibWFpbi5lZTBhMDM2M2I5NWQyYTIwZDBkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaFFMVXNlck11dGF0aW9uID0gdm9pZCAwO1xudmFyIGdyYXBocWxfMSA9IHJlcXVpcmUoXCJncmFwaHFsXCIpO1xudmFyIGdyYXBocWxfcmVsYXlfMSA9IHJlcXVpcmUoXCJncmFwaHFsLXJlbGF5XCIpO1xudmFyIEdyYXBoUUxSZWdpc3RlclVzZXJNdXRhdGlvbnMgPSBncmFwaHFsX3JlbGF5XzEubXV0YXRpb25XaXRoQ2xpZW50TXV0YXRpb25JZCh7XG4gICAgbmFtZTogXCJyZWdpc3RlclwiLFxuICAgIGlucHV0RmllbGRzOiB7XG4gICAgICAgIGVtYWlsOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMTm9uTnVsbChncmFwaHFsXzEuR3JhcGhRTFN0cmluZykgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxOb25OdWxsKGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICBuYW1lOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIG1vYmlsZTogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICBhZ2U6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgZ2VuZGVyOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgfSxcbiAgICBvdXRwdXRGaWVsZHM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgdG9rZW46IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICB9LFxuICAgIG11dGF0ZUFuZEdldFBheWxvYWQ6IGZ1bmN0aW9uIChfYSwgY3R4KSB7XG4gICAgICAgIHZhciBlbWFpbCA9IF9hLmVtYWlsLCBwYXNzd29yZCA9IF9hLnBhc3N3b3JkLCBuYW1lID0gX2EubmFtZSwgbW9iaWxlID0gX2EubW9iaWxlLCBhZ2UgPSBfYS5hZ2UsIGdlbmRlciA9IF9hLmdlbmRlcjtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgY3R4Ll91c2VyUmVwb3NpdG9yeS5yZWdpc3RlclVzZXIoZW1haWwsIHBhc3N3b3JkLCBuYW1lLCBtb2JpbGUsIGFnZSwgZ2VuZGVyKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gKF9iLnNlbnQoKSkudG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgdG9rZW46IHRva2VuLCBzdWNjZXNzOiB0cnVlIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG52YXIgR3JhcGhRTExvZ2luVXNlck11dGF0aW9ucyA9IGdyYXBocWxfcmVsYXlfMS5tdXRhdGlvbldpdGhDbGllbnRNdXRhdGlvbklkKHtcbiAgICBuYW1lOiBcImxvZ2luXCIsXG4gICAgaW5wdXRGaWVsZHM6IHtcbiAgICAgICAgZW1haWw6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxOb25OdWxsKGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICBwYXNzd29yZDogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTE5vbk51bGwoZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcpIH0sXG4gICAgfSxcbiAgICBvdXRwdXRGaWVsZHM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgdG9rZW46IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICB9LFxuICAgIG11dGF0ZUFuZEdldFBheWxvYWQ6IGZ1bmN0aW9uIChfYSwgY3R4KSB7XG4gICAgICAgIHZhciBlbWFpbCA9IF9hLmVtYWlsLCBwYXNzd29yZCA9IF9hLnBhc3N3b3JkLCBuYW1lID0gX2EubmFtZTtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgY3R4Ll91c2VyUmVwb3NpdG9yeS5sb2dpblVzZXIoZW1haWwsIHBhc3N3b3JkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gKF9iLnNlbnQoKSkudG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgdG9rZW46IHRva2VuLCBzdWNjZXNzOiB0cnVlIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG52YXIgR3JhcGhRTExvZ2luVXNlck11dGF0aW9ucyA9IGdyYXBocWxfcmVsYXlfMS5tdXRhdGlvbldpdGhDbGllbnRNdXRhdGlvbklkKHtcbiAgICBuYW1lOiBcImxvZ2luXCIsXG4gICAgaW5wdXRGaWVsZHM6IHtcbiAgICAgICAgZW1haWw6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxOb25OdWxsKGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICBwYXNzd29yZDogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTE5vbk51bGwoZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcpIH0sXG4gICAgfSxcbiAgICBvdXRwdXRGaWVsZHM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgdG9rZW46IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICB9LFxuICAgIG11dGF0ZUFuZEdldFBheWxvYWQ6IGZ1bmN0aW9uIChfYSwgY3R4KSB7XG4gICAgICAgIHZhciBlbWFpbCA9IF9hLmVtYWlsLCBwYXNzd29yZCA9IF9hLnBhc3N3b3JkLCBuYW1lID0gX2EubmFtZTtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgY3R4Ll91c2VyUmVwb3NpdG9yeS5sb2dpblVzZXIoZW1haWwsIHBhc3N3b3JkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gKF9iLnNlbnQoKSkudG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgdG9rZW46IHRva2VuLCBzdWNjZXNzOiB0cnVlIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG52YXIgR3JhcGhRTFVzZXJNdXRhdGlvbiA9IHtcbiAgICByZWdpc3RlcjogR3JhcGhRTFJlZ2lzdGVyVXNlck11dGF0aW9ucyxcbiAgICBsb2dpbjogR3JhcGhRTExvZ2luVXNlck11dGF0aW9ucyxcbn07XG5leHBvcnRzLkdyYXBoUUxVc2VyTXV0YXRpb24gPSBHcmFwaFFMVXNlck11dGF0aW9uO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gXCI3N2Q5Mjg2MjZkYWVmMzU3NjA0N1wiIl0sInNvdXJjZVJvb3QiOiIifQ==