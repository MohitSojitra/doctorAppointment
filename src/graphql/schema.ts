import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import { GraphQLUSerQuery } from "./user";
import { GraphQLUserMutation } from "./user/index";
import { GraphQLEventMutation } from "./events/event.mutattion";
const RootQuery = new GraphQLObjectType({
  name: "Root",
  fields: {
    ...GraphQLUSerQuery,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...GraphQLUserMutation,
    ...GraphQLEventMutation,
    // ...GraphQLOrganizerMutation,
  },
});

const RootSubscription = new GraphQLObjectType({
  name: "Subscription",
  fields: {},
});

const schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
  //   subscription: RootSubscription,
});

export { schema };
