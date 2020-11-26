// import { ConnectionCursor } from "graphql-relay";
// import { Base64 } from "js-base64";

// const objectIdToCursor = (objectId: any): ConnectionCursor => {
//   return Base64.btoa(objectId.toString());
// };
// const cursorToobjectId = (cursor: any): ConnectionCursor => {
//   return Base64.atob(cursor.toString());
// };

// const hasPage = async (
//   query: any,
//   type: any,
//   cursor: any,
//   args: any,
//   //   whereFilters,
// ) => {
//   const { after, first } = args;
//   let where = {};
//   if (cursor && type == "previous") {
//     where["_id"] = { $gt: cursor };
//   }
//   if (cursor && type == "next") {
//     where["_id"] = { $lt: cursor };
//   }
//   const list = await query.count({ ...where });

//   return list > 0;
// };

// const mongooseConnectionFromArray = async (
//   query: any,
//   //   edges: Array<Object>,
//   edges: any,
//   args: any,
//   //   where = {},
// ) => {
//   const { before, after, first, last } = args;
//   const firstEdge = edges?.length > 0 ? edges[0] : null;
//   const lastEdge = edges?.length > 0 ? edges[edges.length - 1] : null;
//   const prevCursor = firstEdge && firstEdge._id;
//   const nextCursor = lastEdge && lastEdge["_id"];

//   const [hasPreviousPage, hasNextPage] = await Promise.all([
//     hasPage(query, "previous", prevCursor, args),
//     hasPage(query, "next", nextCursor, args),
//   ]);
//   // const hasPreviousPage = await hasPage(
//   //     query,
//   //     'previous',
//   //     prevCursor,
//   //     args,
//   //     where
//   // )
//   // const hasNextPage = await hasPage(query, 'next', nextCursor, args, where)
//   const cursorEdges = edges?.map((value: Object, index: any) => {
//     return { cursor: objectIdToCursor(value["_id"]), node: value };
//   });
//   return {
//     edges: cursorEdges,
//     pageInfo: {
//       startCursor:
//         firstEdge && firstEdge["_id"]
//           ? objectIdToCursor(firstEdge["_id"])
//           : null,
//       endCursor:
//         lastEdge && lastEdge["_id"] ? objectIdToCursor(lastEdge["_id"]) : null,
//       hasPreviousPage: hasPreviousPage,
//       hasNextPage: hasNextPage,
//     },
//   };
// };

// export { mongooseConnectionFromArray, objectIdToCursor, cursorToobjectId };
