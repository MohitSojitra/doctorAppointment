import {
  graphql,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context } from "../../context";

const GraphQLEvent = new GraphQLObjectType({
  name: "event",
  fields: () => ({
    id: globalIdField("Event"),
    eventId: {
      type: GraphQLString,
      resolve: async (parent, args, ctx, info) => {
        return parent._id;
      },
    },
    name: {
      type: GraphQLString,
    },
    category: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    capicity: {
      type: GraphQLInt,
    },
    eventPic: {
      type: GraphQLString,
    },

    tags: {
      type: GraphQLList(GraphQLString),
    },
    date: {
      type: GraphQLString,
    },
    mapLat: {
      type: GraphQLString,
    },
    mapLag: {
      type: GraphQLString,
    },
  }),
});

const {
  connectionType: GraphQLEventConnection,
  edgeType: GraphQLEventEdge,
} = connectionDefinitions({ nodeType: GraphQLEvent });

export { GraphQLEventEdge, GraphQLEventConnection, GraphQLEvent };
