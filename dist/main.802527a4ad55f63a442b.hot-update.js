exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/graphql/schema.ts":
/*!*******************************!*\
  !*** ./src/graphql/schema.ts ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.schema = void 0;
var graphql_1 = __webpack_require__(/*! graphql */ "graphql");
var user_1 = __webpack_require__(/*! ./user */ "./src/graphql/user/index.ts");
var index_1 = __webpack_require__(/*! ./user/index */ "./src/graphql/user/index.ts");
var index_2 = __webpack_require__(/*! ./doctor/index */ "./src/graphql/doctor/index.ts");
var RootQuery = new graphql_1.GraphQLObjectType({
    name: "Root",
    fields: __assign({}, user_1.GraphQLUSerQuery),
});
var RootMutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: __assign(__assign({}, index_1.GraphQLUserMutation), index_2.GraphQLDoctorMutation),
});
var RootSubscription = new graphql_1.GraphQLObjectType({
    name: "Subscription",
    fields: {},
});
var schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
exports.schema = schema;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "ef33e37be53669cc0eb9"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYWtlU29uZy8uL3NyYy9ncmFwaHFsL3NjaGVtYS50cyIsIndlYnBhY2s6Ly9NYWtlU29uZy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGNBQWM7QUFDZCxnQkFBZ0IsbUJBQU8sQ0FBQyx3QkFBUztBQUNqQyxhQUFhLG1CQUFPLENBQUMsMkNBQVE7QUFDN0IsY0FBYyxtQkFBTyxDQUFDLGlEQUFjO0FBQ3BDLGNBQWMsbUJBQU8sQ0FBQyxxREFBZ0I7QUFDdEM7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGNBQWM7QUFDZCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGNBQWM7Ozs7Ozs7Ozs7OztXQ2xDZCxvRCIsImZpbGUiOiJtYWluLjgwMjUyN2E0YWQ1NWY2M2E0NDJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNjaGVtYSA9IHZvaWQgMDtcbnZhciBncmFwaHFsXzEgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTtcbnZhciB1c2VyXzEgPSByZXF1aXJlKFwiLi91c2VyXCIpO1xudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi91c2VyL2luZGV4XCIpO1xudmFyIGluZGV4XzIgPSByZXF1aXJlKFwiLi9kb2N0b3IvaW5kZXhcIik7XG52YXIgUm9vdFF1ZXJ5ID0gbmV3IGdyYXBocWxfMS5HcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgbmFtZTogXCJSb290XCIsXG4gICAgZmllbGRzOiBfX2Fzc2lnbih7fSwgdXNlcl8xLkdyYXBoUUxVU2VyUXVlcnkpLFxufSk7XG52YXIgUm9vdE11dGF0aW9uID0gbmV3IGdyYXBocWxfMS5HcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgbmFtZTogXCJNdXRhdGlvblwiLFxuICAgIGZpZWxkczogX19hc3NpZ24oX19hc3NpZ24oe30sIGluZGV4XzEuR3JhcGhRTFVzZXJNdXRhdGlvbiksIGluZGV4XzIuR3JhcGhRTERvY3Rvck11dGF0aW9uKSxcbn0pO1xudmFyIFJvb3RTdWJzY3JpcHRpb24gPSBuZXcgZ3JhcGhxbF8xLkdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICBuYW1lOiBcIlN1YnNjcmlwdGlvblwiLFxuICAgIGZpZWxkczoge30sXG59KTtcbnZhciBzY2hlbWEgPSBuZXcgZ3JhcGhxbF8xLkdyYXBoUUxTY2hlbWEoe1xuICAgIHF1ZXJ5OiBSb290UXVlcnksXG4gICAgbXV0YXRpb246IFJvb3RNdXRhdGlvbixcbn0pO1xuZXhwb3J0cy5zY2hlbWEgPSBzY2hlbWE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiBcImVmMzNlMzdiZTUzNjY5Y2MwZWI5XCIiXSwic291cmNlUm9vdCI6IiJ9