import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import { GraphQLUSerQuery } from "./user";
import { GraphQLUserMutation } from "./user/index";
// import { GraphQLEventMutation } from "./events/event.mutattion";
import { GraphQLDoctorMutation } from "./doctor/index";
import { connectionArgs } from "graphql-relay";
import { Icontext } from "../context";
import { GraphQLDoctorQuery } from "./doctor/doctor.query";
const RootQuery = new GraphQLObjectType({
  name: "Root",
  fields: {
    ...GraphQLUSerQuery,
    ...GraphQLDoctorQuery,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...GraphQLUserMutation,

    ...GraphQLDoctorMutation,
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
