import { GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context } from "../../context";

const GraphQLUser = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: globalIdField("User"),
    userId: {
      type: GraphQLString,
      resolve: async (parent, args, ctx: Context, info) => {
        const { userId } = await ctx.getUserId();
        return userId;
      },
    },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  }),
});

const {
  connectionType: UserConnection,
  edgeType: GraphQLUserEdge,
} = connectionDefinitions({ nodeType: GraphQLUser });

export { GraphQLUser, UserConnection, GraphQLUserEdge };
