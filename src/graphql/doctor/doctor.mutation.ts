// import { GraphQLUpload } from "apollo-server";
// import { GraphQLUpload } from "apollo-server";
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { Context } from "../../context";
import { Doctor } from "../../schemas/Doctor/doctor.model";
import { GraphQLDoctor } from "./doctor.typedef";

/* Add doctor  */
const GraphQLAddDoctor = mutationWithClientMutationId({
  name: "addDoctor",
  inputFields: {
    name: { type: GraphQLNonNull(GraphQLString) },
    specialization: { type: GraphQLList(GraphQLString) },
    curruntServingHospital: { type: GraphQLString },
    experience: { type: GraphQLString },
    bio: { type: GraphQLString },
    workingTime: { type: GraphQLString },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async (
    {
      name,
      specialization,
      curruntServingHospital,
      experience,
      bio,
      workingTime,
    },
    ctx: Context,
  ) => {
    const result = await ctx._doctorRepository.addDoctor({
      name,
      specialization,
      curruntServingHospital,
      experience,
      bio,
      workingTime,
    });
    return result;
  },
});

/* Add doctor  */
const GraphQLEditDoctor = mutationWithClientMutationId({
  name: "editDoctor",
  inputFields: {
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    specialization: { type: GraphQLString },
    curruntServingHospital: { type: GraphQLString },
    experience: { type: GraphQLString },
    bio: { type: GraphQLString },
    workingTime: { type: GraphQLString },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async (
    {
      id,
      name,
      specialization,
      curruntServingHospital,
      experience,
      bio,
      workingTime,
    },
    ctx: Context,
  ) => {
    const result = await ctx._doctorRepository.editDoctor({
      id,
      name,
      specialization,
      curruntServingHospital,
      experience,
      bio,
      workingTime,
    });
    return result;
  },
});

/* Add doctor  */
const GraphQLDeleteDoctor = mutationWithClientMutationId({
  name: "deleteDoctor",
  inputFields: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async ({ id }, ctx: Context) => {
    const result = await ctx._doctorRepository.deleteDoctor({ id });
    return result;
  },
});
/* findDoctorByName  */
const GraphQLFilterDoctorByName = mutationWithClientMutationId({
  name: "findDoctorByName",
  inputFields: {
    name: { type: GraphQLString },
  },
  outputFields: {
    doctor: { type: GraphQLList(GraphQLDoctor) },
  },
  mutateAndGetPayload: async ({ name }, ctx: Context) => {
    const result = await ctx._doctorRepository.findDoctorByName(name);
    return result;
  },
});

/* findDoctorBySpecialization  */
const GraphQLFilterDoctorBySpecialization = mutationWithClientMutationId({
  name: "findDoctorBySpacilization",
  inputFields: {
    specialization: { type: GraphQLString },
  },
  outputFields: {
    doctor: { type: GraphQLList(GraphQLDoctor) },
  },
  mutateAndGetPayload: async ({ specialization }, ctx: Context) => {
    const result = await ctx._doctorRepository.findDoctorBySpacialization(
      specialization,
    );
    return result;
  },
});

const GraphQLDoctorMutation = {
  addDoctor: GraphQLAddDoctor,
  editDoctor: GraphQLEditDoctor,
  deleteDoctor: GraphQLDeleteDoctor,
  findDoctorByName: GraphQLFilterDoctorByName,
  findDoctorBySpacilization: GraphQLFilterDoctorBySpecialization,
};

export { GraphQLDoctorMutation };
