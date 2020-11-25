import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context } from "../../context";

const GraphQLEvent = new GraphQLObjectType({
  name: "event",
  fields: () => ({
    id: globalIdField("Event"),
    name: {
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
