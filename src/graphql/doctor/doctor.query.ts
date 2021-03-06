import { connectionArgs } from "graphql-relay";
import { Context, Icontext } from "../../context";
import { GraphQLDoctor, GraphQLDoctorConnection } from "./doctor.typedef";
import { mongooseConnectionFromArray } from "../../common/common.graphQlPagination";

import { Doctor } from "../../schemas/Doctor/doctor.model";
import { GraphQLString } from "graphql";
// import { IConnector } from "apollo-server";
const GraphQLDoctorQuery = {
  getAllDoctor: {
    type: GraphQLDoctorConnection,

    args: { ...connectionArgs },
    resolve: async (parent: any, args: any, ctx: Icontext, info: any) => {
      console.log({ run: "thys" });
      const doctors = await ctx._doctorRepository.getAllDoctors(args);
      return await mongooseConnectionFromArray(Doctor, doctors, args);
    },
  },
};

export { GraphQLDoctorQuery };
