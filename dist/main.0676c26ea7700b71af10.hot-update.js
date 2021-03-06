exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/*! CommonJS bailout: this is used directly at 38:23-27 */
/***/ (function(module, exports, __webpack_require__) {

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
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return console.log("Module disposed. "); });
}
var apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
var schema_1 = __webpack_require__(/*! ./graphql/schema */ "./src/graphql/schema.ts");
var mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
var context_1 = __webpack_require__(/*! ./context */ "./src/context.ts");
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var imageRouter_1 = __importDefault(__webpack_require__(/*! ./routes/imageRouter */ "./src/routes/imageRouter.ts"));
var apiRoutes_1 = __importDefault(__webpack_require__(/*! ./routes/apiRoutes */ "./src/routes/apiRoutes.ts"));
var Env_1 = __webpack_require__(/*! ./common/Env */ "./src/common/Env.ts");
var cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
var context = function (ctx) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2, new context_1.Context(ctx.req, ctx.res)];
}); }); };
var apolloserver = new apollo_server_express_1.ApolloServer({
    schema: schema_1.schema,
    context: context,
    subscriptions: "/subscription",
    debug: true,
    playground: true,
    introspection: true,
});
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.static(__dirname + "/public"));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
apolloserver.applyMiddleware({ app: app });
app.use("/", apiRoutes_1.default);
app.use("/event", imageRouter_1.default);
app.listen({ port: Env_1.env.port, path: "graphql" }, function () {
    return console.log("\uD83D\uDE80 Server ready at " + Env_1.env.siteUrl + apolloserver.graphqlPath + " \uD83D\uDD25 \uD83D\uDD25 \uD83D\uDD25");
});
mongoose_1.default
    .connect(Env_1.env.mongoUrl, { useNewUrlParser: true })
    .then(function () {
    console.log("mongoDb successfully connected");
})
    .catch(function (e) { return console.log("dosent connect mongodb , something wrong!!"); });


/***/ }),

/***/ "./src/repository/jwt/JWTRepository.ts":
/*!*********************************************!*\
  !*** ./src/repository/jwt/JWTRepository.ts ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/*! CommonJS bailout: this is used directly at 9:26-30 */
/*! CommonJS bailout: this is used directly at 14:20-24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JWTRepository = void 0;
var jwt = __importStar(__webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"));
var Env_1 = __webpack_require__(/*! ../../common/Env */ "./src/common/Env.ts");
var JWTRepository = (function () {
    function JWTRepository() {
    }
    JWTRepository.prototype.generateToken = function (userId) {
        return "JWT " + jwt.sign({ payload: userId }, "" + Env_1.env.jwtSecreat, {
            expiresIn: 60 * 60 * 60 * 2,
        });
    };
    JWTRepository.prototype.invalidToken = function () {
        throw new Error("Invalid Token");
    };
    JWTRepository.prototype.extractToken = function (token) {
        return token.split(" ")[1];
    };
    JWTRepository.prototype.verifyToken = function (token) {
        return jwt.verify(token, "" + Env_1.env.jwtSecreat);
    };
    JWTRepository.prototype.extractUserIdfromReq = function (req) {
        if (req) {
            var headers = req && req.headers;
            if (headers &&
                headers["authorization"] &&
                headers["authorization"] != "null") {
                try {
                    var authorization = headers["authorization"];
                    var extractedToken = this.extractToken(authorization.toString());
                    var jwtPayload = this.verifyToken(extractedToken);
                    return {
                        userId: jwtPayload && jwtPayload.payload,
                        token: authorization,
                    };
                }
                catch (error) {
                    throw this.invalidToken();
                }
            }
            else {
                throw new Error("No header found!");
            }
        }
        else {
            throw this.invalidToken();
        }
    };
    JWTRepository.getInstance = function () {
        if (!JWTRepository.instance) {
            JWTRepository.instance = new JWTRepository();
        }
        return JWTRepository.instance;
    };
    return JWTRepository;
}());
exports.JWTRepository = JWTRepository;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "968b69d5f7e532957310"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9yZXBvc2l0b3J5L2p3dC9KV1RSZXBvc2l0b3J5LnRzIiwid2VicGFjazovL01ha2VTb25nL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsSUFBSSxJQUFVO0FBQ2QsSUFBSSxpQkFBaUI7QUFDckIsSUFBSSxVQUFVLHNCQUFzQix5Q0FBeUMsRUFBRTtBQUMvRTtBQUNBLDhCQUE4QixtQkFBTyxDQUFDLG9EQUF1QjtBQUM3RCxlQUFlLG1CQUFPLENBQUMsaURBQWtCO0FBQ3pDLGlDQUFpQyxtQkFBTyxDQUFDLDBCQUFVO0FBQ25ELGdCQUFnQixtQkFBTyxDQUFDLG1DQUFXO0FBQ25DLGdDQUFnQyxtQkFBTyxDQUFDLHdCQUFTO0FBQ2pELG9DQUFvQyxtQkFBTyxDQUFDLHlEQUFzQjtBQUNsRSxrQ0FBa0MsbUJBQU8sQ0FBQyxxREFBb0I7QUFDOUQsWUFBWSxtQkFBTyxDQUFDLHlDQUFjO0FBQ2xDLDZCQUE2QixtQkFBTyxDQUFDLGtCQUFNO0FBQzNDLDhCQUE4Qix1REFBdUQ7QUFDckY7QUFDQSxDQUFDLEVBQUUsRUFBRSxFQUFFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDhCQUE4QixXQUFXO0FBQ3pDO0FBQ0E7QUFDQSxZQUFZLHdDQUF3QztBQUNwRDtBQUNBLENBQUM7QUFDRDtBQUNBLGtDQUFrQyx3QkFBd0I7QUFDMUQ7QUFDQTtBQUNBLENBQUM7QUFDRCx5QkFBeUIsa0VBQWtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZoRjtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCLHVCQUF1QixtQkFBTyxDQUFDLGtDQUFjO0FBQzdDLFlBQVksbUJBQU8sQ0FBQyw2Q0FBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCO0FBQ3BEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscUJBQXFCOzs7Ozs7Ozs7Ozs7V0M1RXJCLG9EIiwiZmlsZSI6Im1haW4uMDY3NmMyNmVhNzcwMGI3MWFmMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uc29sZS5sb2coXCJNb2R1bGUgZGlzcG9zZWQuIFwiKTsgfSk7XG59XG52YXIgYXBvbGxvX3NlcnZlcl9leHByZXNzXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpO1xudmFyIHNjaGVtYV8xID0gcmVxdWlyZShcIi4vZ3JhcGhxbC9zY2hlbWFcIik7XG52YXIgbW9uZ29vc2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9uZ29vc2VcIikpO1xudmFyIGNvbnRleHRfMSA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG52YXIgZXhwcmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJleHByZXNzXCIpKTtcbnZhciBpbWFnZVJvdXRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlcy9pbWFnZVJvdXRlclwiKSk7XG52YXIgYXBpUm91dGVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcm91dGVzL2FwaVJvdXRlc1wiKSk7XG52YXIgRW52XzEgPSByZXF1aXJlKFwiLi9jb21tb24vRW52XCIpO1xudmFyIGNvcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY29yc1wiKSk7XG52YXIgY29udGV4dCA9IGZ1bmN0aW9uIChjdHgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICByZXR1cm4gWzIsIG5ldyBjb250ZXh0XzEuQ29udGV4dChjdHgucmVxLCBjdHgucmVzKV07XG59KTsgfSk7IH07XG52YXIgYXBvbGxvc2VydmVyID0gbmV3IGFwb2xsb19zZXJ2ZXJfZXhwcmVzc18xLkFwb2xsb1NlcnZlcih7XG4gICAgc2NoZW1hOiBzY2hlbWFfMS5zY2hlbWEsXG4gICAgY29udGV4dDogY29udGV4dCxcbiAgICBzdWJzY3JpcHRpb25zOiBcIi9zdWJzY3JpcHRpb25cIixcbiAgICBkZWJ1ZzogdHJ1ZSxcbiAgICBwbGF5Z3JvdW5kOiB0cnVlLFxuICAgIGludHJvc3BlY3Rpb246IHRydWUsXG59KTtcbnZhciBhcHAgPSBleHByZXNzXzEuZGVmYXVsdCgpO1xuYXBwLnVzZShjb3JzXzEuZGVmYXVsdCgpKTtcbmFwcC51c2UoZXhwcmVzc18xLmRlZmF1bHQuc3RhdGljKF9fZGlybmFtZSArIFwiL3B1YmxpY1wiKSk7XG5hcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuICAgIG5leHQoKTtcbn0pO1xuYXBvbGxvc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcDogYXBwIH0pO1xuYXBwLnVzZShcIi9cIiwgYXBpUm91dGVzXzEuZGVmYXVsdCk7XG5hcHAudXNlKFwiL2V2ZW50XCIsIGltYWdlUm91dGVyXzEuZGVmYXVsdCk7XG5hcHAubGlzdGVuKHsgcG9ydDogRW52XzEuZW52LnBvcnQsIHBhdGg6IFwiZ3JhcGhxbFwiIH0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coXCJcXHVEODNEXFx1REU4MCBTZXJ2ZXIgcmVhZHkgYXQgXCIgKyBFbnZfMS5lbnYuc2l0ZVVybCArIGFwb2xsb3NlcnZlci5ncmFwaHFsUGF0aCArIFwiIFxcdUQ4M0RcXHVERDI1IFxcdUQ4M0RcXHVERDI1IFxcdUQ4M0RcXHVERDI1XCIpO1xufSk7XG5tb25nb29zZV8xLmRlZmF1bHRcbiAgICAuY29ubmVjdChFbnZfMS5lbnYubW9uZ29VcmwsIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwibW9uZ29EYiBzdWNjZXNzZnVsbHkgY29ubmVjdGVkXCIpO1xufSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGNvbnNvbGUubG9nKFwiZG9zZW50IGNvbm5lY3QgbW9uZ29kYiAsIHNvbWV0aGluZyB3cm9uZyEhXCIpOyB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkpXVFJlcG9zaXRvcnkgPSB2b2lkIDA7XG52YXIgand0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIikpO1xudmFyIEVudl8xID0gcmVxdWlyZShcIi4uLy4uL2NvbW1vbi9FbnZcIik7XG52YXIgSldUUmVwb3NpdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSldUUmVwb3NpdG9yeSgpIHtcbiAgICB9XG4gICAgSldUUmVwb3NpdG9yeS5wcm90b3R5cGUuZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiSldUIFwiICsgand0LnNpZ24oeyBwYXlsb2FkOiB1c2VySWQgfSwgXCJcIiArIEVudl8xLmVudi5qd3RTZWNyZWF0LCB7XG4gICAgICAgICAgICBleHBpcmVzSW46IDYwICogNjAgKiA2MCAqIDIsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSldUUmVwb3NpdG9yeS5wcm90b3R5cGUuaW52YWxpZFRva2VuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFRva2VuXCIpO1xuICAgIH07XG4gICAgSldUUmVwb3NpdG9yeS5wcm90b3R5cGUuZXh0cmFjdFRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHJldHVybiB0b2tlbi5zcGxpdChcIiBcIilbMV07XG4gICAgfTtcbiAgICBKV1RSZXBvc2l0b3J5LnByb3RvdHlwZS52ZXJpZnlUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgXCJcIiArIEVudl8xLmVudi5qd3RTZWNyZWF0KTtcbiAgICB9O1xuICAgIEpXVFJlcG9zaXRvcnkucHJvdG90eXBlLmV4dHJhY3RVc2VySWRmcm9tUmVxID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICBpZiAocmVxKSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVycyA9IHJlcSAmJiByZXEuaGVhZGVycztcbiAgICAgICAgICAgIGlmIChoZWFkZXJzICYmXG4gICAgICAgICAgICAgICAgaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl0gJiZcbiAgICAgICAgICAgICAgICBoZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXSAhPSBcIm51bGxcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdXRob3JpemF0aW9uID0gaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHRyYWN0ZWRUb2tlbiA9IHRoaXMuZXh0cmFjdFRva2VuKGF1dGhvcml6YXRpb24udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqd3RQYXlsb2FkID0gdGhpcy52ZXJpZnlUb2tlbihleHRyYWN0ZWRUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGp3dFBheWxvYWQgJiYgand0UGF5bG9hZC5wYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IGF1dGhvcml6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmludmFsaWRUb2tlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGhlYWRlciBmb3VuZCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmludmFsaWRUb2tlbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKV1RSZXBvc2l0b3J5LmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUpXVFJlcG9zaXRvcnkuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEpXVFJlcG9zaXRvcnkuaW5zdGFuY2UgPSBuZXcgSldUUmVwb3NpdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKV1RSZXBvc2l0b3J5Lmluc3RhbmNlO1xuICAgIH07XG4gICAgcmV0dXJuIEpXVFJlcG9zaXRvcnk7XG59KCkpO1xuZXhwb3J0cy5KV1RSZXBvc2l0b3J5ID0gSldUUmVwb3NpdG9yeTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IFwiOTY4YjY5ZDVmN2U1MzI5NTczMTBcIiJdLCJzb3VyY2VSb290IjoiIn0=