import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { Context } from "../../context";

/* Register Event  */
const GraphQLRegisterEventrMutations = mutationWithClientMutationId({
  name: "registerEvent",
  inputFields: {
    name: { type: GraphQLNonNull(GraphQLString) },
    date: { type: GraphQLNonNull(GraphQLString) },
    tags: { type: GraphQLList(GraphQLString) },
    mapLat: { type: GraphQLString },
    mapLag: { type: GraphQLString },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async (
    { tags, date, name, mapLag, mapLat },
    ctx: Context,
  ) => {
    const { userId } = await ctx.getUserId();
    const success = await ctx._eventRepository.registerEvent(
      tags,
      date,
      name,
      mapLag,
      mapLat,
      userId,
    );
    return { success };
  },
});

/* Register Event  */
const GraphQLUpdateEventrMutations = mutationWithClientMutationId({
  name: "updateEvent",
  inputFields: {
    eventId: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    mapLat: { type: GraphQLString },
    mapLag: { type: GraphQLString },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async (
    { tags, date, name, mapLag, mapLat, eventId },
    ctx: Context,
  ) => {
    const success = await ctx._eventRepository.updateEvent(
      eventId,
      tags,
      date,
      name,
      mapLag,
      mapLat,
    );
    return { success };
  },
});

/* Register Event  */
const GraphQLDeleteEventrMutations = mutationWithClientMutationId({
  name: "deleteEvent",
  inputFields: {
    eventId: { type: GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async (
    { tags, date, name, mapLag, mapLat, eventId },
    ctx: Context,
  ) => {
    const success = await ctx._eventRepository.deleteEvent(eventId);
    return { success };
  },
});

const GraphQLEventMutation = {
  registerEvent: GraphQLRegisterEventrMutations,
  updateEvent: GraphQLUpdateEventrMutations,
  deleteEvent: GraphQLDeleteEventrMutations,
  //   login: GraphQLLoginUserMutations,
};

export { GraphQLEventMutation };
