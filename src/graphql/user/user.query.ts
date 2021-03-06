import { GraphQLObjectType } from "graphql";
import { Context } from "../../context";
import { UserRepository } from "../../repository/user/UserRepository";
import { GraphQLDoctorQuery } from "../doctor/doctor.query";
import { GraphQLUser } from "./user.typedef";

const GraphQLUSerQuery = {
  viewer: {
    type: GraphQLUser,
    resolve: async (parent: any, args: any, ctx: Context, info: any) => {
      // console.log("is it run...");
      const { userId } = await ctx.getUserId();
      // console.log({ userId });
      const user = await ctx._userRepository.getUserById(userId);

      return user;
    },
    ...GraphQLDoctorQuery,
  },
};

export { GraphQLUSerQuery };
