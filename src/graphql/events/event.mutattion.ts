// import { GraphQLUpload } from "apollo-server";
// import { GraphQLUpload } from "apollo-server";
import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
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
    category: { type: GraphQLNonNull(GraphQLString) },
    gender: { type: GraphQLString },
    description: { type: GraphQLString },
    address: { type: GraphQLString },
    capicity: { type: GraphQLInt },

    date: { type: GraphQLNonNull(GraphQLString) },
    tags: { type: GraphQLList(GraphQLString) },
    mapLat: { type: GraphQLString },
    mapLag: { type: GraphQLString },
    // photos: { type: GraphQLUpload! },
  },
  outputFields: {
    eventId: { type: GraphQLID },
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async (
    {
      name,
      category,
      gender,
      description,
      address,
      capicity,
      date,
      tags,
      mapLat,
      mapLag,
    },
    ctx: Context,
  ) => {
    const { userId } = await ctx.getUserId();
    const result = await ctx._eventRepository.registerEvent(
      name,
      category,
      gender,
      description,
      address,
      capicity,
      date,
      tags,
      mapLat,
      mapLag,
      userId,
    );
    return { ...result };
  },
});

/* Register Event  */
const GraphQLUpdateEventrMutations = mutationWithClientMutationId({
  name: "updateEvent",
  inputFields: {
    eventId: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    gender: { type: GraphQLString },
    description: { type: GraphQLString },
    address: { type: GraphQLString },
    capicity: { type: GraphQLInt },
    date: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    mapLat: { type: GraphQLString },
    mapLag: { type: GraphQLString },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async (
    {
      name,
      category,
      gender,
      description,
      address,
      capicity,
      date,
      tags,
      mapLat,
      mapLag,
      eventId,
    },
    ctx: Context,
  ) => {
    const success = await ctx._eventRepository.updateEvent(
      eventId,
      name,
      category,
      gender,
      description,
      address,
      capicity,
      date,
      tags,
      mapLat,
      mapLag,
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
