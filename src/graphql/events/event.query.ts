import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
} from "graphql";
import { connectionArgs } from "graphql-relay";
import { Context } from "../../context";
import { GraphQLEventConnection, GraphQLEvent } from "./event.typedef";
import { mongooseConnectionFromArray } from "../../common/common.graphQlPagination";
import { Event } from "../../schemas/Event";
const GraphQLEventQuery = {
  myEvents: {
    // type: GraphQLList(GraphQLEvent),
    type: GraphQLEventConnection,
    // type: GraphQLBoolean,
    args: { ...connectionArgs },
    resolve: async (parent: any, args: any, ctx: Context, info: any) => {
      // console.log("is it run...");
      const { userId } = await ctx.getUserId();
      // console.log({ userId });
      const events = await ctx._eventRepository.getAllEventByUserId(
        userId,
        args,
      );
      // console.log({ events });

      return await mongooseConnectionFromArray(Event, events, args);
      // return events;
    },
  },
  getEventById: {
    type: GraphQLEvent,
    args: {
      eventId: { type: GraphQLID },
    },
    resolve: async (parent: any, args: any, ctx: Context, info: any) => {
      const { eventId } = args;
      return await ctx._eventRepository.getEventById(eventId);
    },
  },
};

export { GraphQLEventQuery };
