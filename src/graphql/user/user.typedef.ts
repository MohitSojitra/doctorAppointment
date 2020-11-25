import { GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context } from "../../context";
import { GraphQLEventQuery } from "../events/event.query";

const GraphQLUser = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: globalIdField("User"),
    userId: {
      type: GraphQLString,
      resolve: async (parent: any, args: any, ctx: Context, info: any) => {
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
    ...GraphQLEventQuery,
  }),
});

const {
  connectionType: UserConnection,
  edgeType: GraphQLUserEdge,
} = connectionDefinitions({ nodeType: GraphQLUser });

export { GraphQLUser, UserConnection, GraphQLUserEdge };
