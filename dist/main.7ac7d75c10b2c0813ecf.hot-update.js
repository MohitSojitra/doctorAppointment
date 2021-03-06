exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/graphql/events/event.mutattion.ts":
/*!***********************************************!*\
  !*** ./src/graphql/events/event.mutattion.ts ***!
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
exports.GraphQLEventMutation = void 0;
var graphql_1 = __webpack_require__(/*! graphql */ "graphql");
var graphql_relay_1 = __webpack_require__(/*! graphql-relay */ "graphql-relay");
var GraphQLRegisterEventrMutations = graphql_relay_1.mutationWithClientMutationId({
    name: "registerEvent",
    inputFields: {
        name: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        category: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        gender: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        capicity: { type: graphql_1.GraphQLInt },
        date: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        tags: { type: graphql_1.GraphQLList(graphql_1.GraphQLString) },
        mapLat: { type: graphql_1.GraphQLString },
        mapLag: { type: graphql_1.GraphQLString },
    },
    outputFields: {
        eventId: { type: graphql_1.GraphQLID },
        success: { type: graphql_1.GraphQLBoolean },
    },
    mutateAndGetPayload: function (_a, ctx) {
        var name = _a.name, category = _a.category, gender = _a.gender, description = _a.description, address = _a.address, capicity = _a.capicity, date = _a.date, tags = _a.tags, mapLat = _a.mapLat, mapLag = _a.mapLag;
        return __awaiter(void 0, void 0, void 0, function () {
            var userId, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, ctx.getUserId()];
                    case 1:
                        userId = (_b.sent()).userId;
                        return [4, ctx._eventRepository.registerEvent(name, category, gender, description, address, capicity, date, tags, mapLat, mapLag, userId)];
                    case 2:
                        result = _b.sent();
                        return [2, __assign({}, result)];
                }
            });
        });
    },
});
var GraphQLUpdateEventrMutations = graphql_relay_1.mutationWithClientMutationId({
    name: "updateEvent",
    inputFields: {
        eventId: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        name: { type: graphql_1.GraphQLString },
        category: { type: graphql_1.GraphQLString },
        gender: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        capicity: { type: graphql_1.GraphQLInt },
        date: { type: graphql_1.GraphQLString },
        tags: { type: graphql_1.GraphQLList(graphql_1.GraphQLString) },
        mapLat: { type: graphql_1.GraphQLString },
        mapLag: { type: graphql_1.GraphQLString },
    },
    outputFields: {
        success: { type: graphql_1.GraphQLBoolean },
    },
    mutateAndGetPayload: function (_a, ctx) {
        var name = _a.name, category = _a.category, gender = _a.gender, description = _a.description, address = _a.address, capicity = _a.capicity, date = _a.date, tags = _a.tags, mapLat = _a.mapLat, mapLag = _a.mapLag, eventId = _a.eventId;
        return __awaiter(void 0, void 0, void 0, function () {
            var success;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, ctx._eventRepository.updateEvent(eventId, name, category, gender, description, address, capicity, date, tags, mapLat, mapLag)];
                    case 1:
                        success = _b.sent();
                        return [2, { success: success }];
                }
            });
        });
    },
});
var GraphQLDeleteEventrMutations = graphql_relay_1.mutationWithClientMutationId({
    name: "deleteEvent",
    inputFields: {
        eventId: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    },
    outputFields: {
        success: { type: graphql_1.GraphQLBoolean },
    },
    mutateAndGetPayload: function (_a, ctx) {
        var tags = _a.tags, date = _a.date, name = _a.name, mapLag = _a.mapLag, mapLat = _a.mapLat, eventId = _a.eventId;
        return __awaiter(void 0, void 0, void 0, function () {
            var success;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, ctx._eventRepository.deleteEvent(eventId)];
                    case 1:
                        success = _b.sent();
                        return [2, { success: success }];
                }
            });
        });
    },
});
var GraphQLEventMutation = {
    registerEvent: GraphQLRegisterEventrMutations,
    updateEvent: GraphQLUpdateEventrMutations,
    deleteEvent: GraphQLDeleteEventrMutations,
};
exports.GraphQLEventMutation = GraphQLEventMutation;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "0f8be2ca1bd5a0b2ed66"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9ncmFwaHFsL2V2ZW50cy9ldmVudC5tdXRhdHRpb24udHMiLCJ3ZWJwYWNrOi8vTWFrZVNvbmcvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCw0QkFBNEI7QUFDNUIsZ0JBQWdCLG1CQUFPLENBQUMsd0JBQVM7QUFDakMsc0JBQXNCLG1CQUFPLENBQUMsb0NBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwREFBMEQ7QUFDekUsbUJBQW1CLDBEQUEwRDtBQUM3RSxpQkFBaUIsZ0NBQWdDO0FBQ2pELHNCQUFzQixnQ0FBZ0M7QUFDdEQsa0JBQWtCLGdDQUFnQztBQUNsRCxtQkFBbUIsNkJBQTZCO0FBQ2hELGVBQWUsMERBQTBEO0FBQ3pFLGVBQWUsdURBQXVEO0FBQ3RFLGlCQUFpQixnQ0FBZ0M7QUFDakQsaUJBQWlCLGdDQUFnQztBQUNqRCxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDLGtCQUFrQixpQ0FBaUM7QUFDbkQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQTBEO0FBQzVFLGVBQWUsZ0NBQWdDO0FBQy9DLG1CQUFtQixnQ0FBZ0M7QUFDbkQsaUJBQWlCLGdDQUFnQztBQUNqRCxzQkFBc0IsZ0NBQWdDO0FBQ3RELGtCQUFrQixnQ0FBZ0M7QUFDbEQsbUJBQW1CLDZCQUE2QjtBQUNoRCxlQUFlLGdDQUFnQztBQUMvQyxlQUFlLHVEQUF1RDtBQUN0RSxpQkFBaUIsZ0NBQWdDO0FBQ2pELGlCQUFpQixnQ0FBZ0M7QUFDakQsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLGlDQUFpQztBQUNuRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RDtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQTBEO0FBQzVFLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixpQ0FBaUM7QUFDbkQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7Ozs7Ozs7Ozs7O1dDcko1QixvRCIsImZpbGUiOiJtYWluLjdhYzdkNzVjMTBiMmMwODEzZWNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HcmFwaFFMRXZlbnRNdXRhdGlvbiA9IHZvaWQgMDtcbnZhciBncmFwaHFsXzEgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTtcbnZhciBncmFwaHFsX3JlbGF5XzEgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZWxheVwiKTtcbnZhciBHcmFwaFFMUmVnaXN0ZXJFdmVudHJNdXRhdGlvbnMgPSBncmFwaHFsX3JlbGF5XzEubXV0YXRpb25XaXRoQ2xpZW50TXV0YXRpb25JZCh7XG4gICAgbmFtZTogXCJyZWdpc3RlckV2ZW50XCIsXG4gICAgaW5wdXRGaWVsZHM6IHtcbiAgICAgICAgbmFtZTogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTE5vbk51bGwoZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcpIH0sXG4gICAgICAgIGNhdGVnb3J5OiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMTm9uTnVsbChncmFwaHFsXzEuR3JhcGhRTFN0cmluZykgfSxcbiAgICAgICAgZ2VuZGVyOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIGFkZHJlc3M6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgY2FwaWNpdHk6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxJbnQgfSxcbiAgICAgICAgZGF0ZTogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTE5vbk51bGwoZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcpIH0sXG4gICAgICAgIHRhZ3M6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxMaXN0KGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICBtYXBMYXQ6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgbWFwTGFnOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgfSxcbiAgICBvdXRwdXRGaWVsZHM6IHtcbiAgICAgICAgZXZlbnRJZDogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTElEIH0sXG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxCb29sZWFuIH0sXG4gICAgfSxcbiAgICBtdXRhdGVBbmRHZXRQYXlsb2FkOiBmdW5jdGlvbiAoX2EsIGN0eCkge1xuICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIGNhdGVnb3J5ID0gX2EuY2F0ZWdvcnksIGdlbmRlciA9IF9hLmdlbmRlciwgZGVzY3JpcHRpb24gPSBfYS5kZXNjcmlwdGlvbiwgYWRkcmVzcyA9IF9hLmFkZHJlc3MsIGNhcGljaXR5ID0gX2EuY2FwaWNpdHksIGRhdGUgPSBfYS5kYXRlLCB0YWdzID0gX2EudGFncywgbWFwTGF0ID0gX2EubWFwTGF0LCBtYXBMYWcgPSBfYS5tYXBMYWc7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVzZXJJZCwgcmVzdWx0O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGN0eC5nZXRVc2VySWQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLnVzZXJJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY3R4Ll9ldmVudFJlcG9zaXRvcnkucmVnaXN0ZXJFdmVudChuYW1lLCBjYXRlZ29yeSwgZ2VuZGVyLCBkZXNjcmlwdGlvbiwgYWRkcmVzcywgY2FwaWNpdHksIGRhdGUsIHRhZ3MsIG1hcExhdCwgbWFwTGFnLCB1c2VySWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBfX2Fzc2lnbih7fSwgcmVzdWx0KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59KTtcbnZhciBHcmFwaFFMVXBkYXRlRXZlbnRyTXV0YXRpb25zID0gZ3JhcGhxbF9yZWxheV8xLm11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQoe1xuICAgIG5hbWU6IFwidXBkYXRlRXZlbnRcIixcbiAgICBpbnB1dEZpZWxkczoge1xuICAgICAgICBldmVudElkOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMTm9uTnVsbChncmFwaHFsXzEuR3JhcGhRTFN0cmluZykgfSxcbiAgICAgICAgbmFtZTogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICBjYXRlZ29yeTogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICBnZW5kZXI6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgYWRkcmVzczogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICBjYXBpY2l0eTogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTEludCB9LFxuICAgICAgICBkYXRlOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIHRhZ3M6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxMaXN0KGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICBtYXBMYXQ6IHsgdHlwZTogZ3JhcGhxbF8xLkdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgbWFwTGFnOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMU3RyaW5nIH0sXG4gICAgfSxcbiAgICBvdXRwdXRGaWVsZHM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiBncmFwaHFsXzEuR3JhcGhRTEJvb2xlYW4gfSxcbiAgICB9LFxuICAgIG11dGF0ZUFuZEdldFBheWxvYWQ6IGZ1bmN0aW9uIChfYSwgY3R4KSB7XG4gICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgY2F0ZWdvcnkgPSBfYS5jYXRlZ29yeSwgZ2VuZGVyID0gX2EuZ2VuZGVyLCBkZXNjcmlwdGlvbiA9IF9hLmRlc2NyaXB0aW9uLCBhZGRyZXNzID0gX2EuYWRkcmVzcywgY2FwaWNpdHkgPSBfYS5jYXBpY2l0eSwgZGF0ZSA9IF9hLmRhdGUsIHRhZ3MgPSBfYS50YWdzLCBtYXBMYXQgPSBfYS5tYXBMYXQsIG1hcExhZyA9IF9hLm1hcExhZywgZXZlbnRJZCA9IF9hLmV2ZW50SWQ7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN1Y2Nlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgY3R4Ll9ldmVudFJlcG9zaXRvcnkudXBkYXRlRXZlbnQoZXZlbnRJZCwgbmFtZSwgY2F0ZWdvcnksIGdlbmRlciwgZGVzY3JpcHRpb24sIGFkZHJlc3MsIGNhcGljaXR5LCBkYXRlLCB0YWdzLCBtYXBMYXQsIG1hcExhZyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB7IHN1Y2Nlc3M6IHN1Y2Nlc3MgfV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59KTtcbnZhciBHcmFwaFFMRGVsZXRlRXZlbnRyTXV0YXRpb25zID0gZ3JhcGhxbF9yZWxheV8xLm11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQoe1xuICAgIG5hbWU6IFwiZGVsZXRlRXZlbnRcIixcbiAgICBpbnB1dEZpZWxkczoge1xuICAgICAgICBldmVudElkOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMTm9uTnVsbChncmFwaHFsXzEuR3JhcGhRTFN0cmluZykgfSxcbiAgICB9LFxuICAgIG91dHB1dEZpZWxkczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6IGdyYXBocWxfMS5HcmFwaFFMQm9vbGVhbiB9LFxuICAgIH0sXG4gICAgbXV0YXRlQW5kR2V0UGF5bG9hZDogZnVuY3Rpb24gKF9hLCBjdHgpIHtcbiAgICAgICAgdmFyIHRhZ3MgPSBfYS50YWdzLCBkYXRlID0gX2EuZGF0ZSwgbmFtZSA9IF9hLm5hbWUsIG1hcExhZyA9IF9hLm1hcExhZywgbWFwTGF0ID0gX2EubWFwTGF0LCBldmVudElkID0gX2EuZXZlbnRJZDtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3VjY2VzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBjdHguX2V2ZW50UmVwb3NpdG9yeS5kZWxldGVFdmVudChldmVudElkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHsgc3VjY2Vzczogc3VjY2VzcyB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn0pO1xudmFyIEdyYXBoUUxFdmVudE11dGF0aW9uID0ge1xuICAgIHJlZ2lzdGVyRXZlbnQ6IEdyYXBoUUxSZWdpc3RlckV2ZW50ck11dGF0aW9ucyxcbiAgICB1cGRhdGVFdmVudDogR3JhcGhRTFVwZGF0ZUV2ZW50ck11dGF0aW9ucyxcbiAgICBkZWxldGVFdmVudDogR3JhcGhRTERlbGV0ZUV2ZW50ck11dGF0aW9ucyxcbn07XG5leHBvcnRzLkdyYXBoUUxFdmVudE11dGF0aW9uID0gR3JhcGhRTEV2ZW50TXV0YXRpb247XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiBcIjBmOGJlMmNhMWJkNWEwYjJlZDY2XCIiXSwic291cmNlUm9vdCI6IiJ9