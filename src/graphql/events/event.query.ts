import { GraphQLBoolean, GraphQLObjectType } from "graphql";
import { connectionArgs } from "graphql-relay";
import { Context } from "../../context";
import { GraphQLEventConnection } from "./event.typedef";
import { mongooseConnectionFromArray } from "../../common/common.graphQlPagination";
import { Event } from "../../schemas/Event";
const GraphQLEventQuery = {
  myEvents: {
    type: GraphQLEventConnection,
    // type: GraphQLBoolean,
    args: { ...connectionArgs },
    resolve: async (parent: any, args: any, ctx: Context, info: any) => {
      // console.log("is it run...");
      const { userId } = await ctx.getUserId();
      // console.log({ userId });
      const events = await ctx._eventRepository.getAllEventByUserId(userId);

      return await mongooseConnectionFromArray(Event, events, args);
    },
  },
};

export { GraphQLEventQuery };
