import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLUSerQuery } from "./user";
import { GraphQLUserMutation } from "./user/index";

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
