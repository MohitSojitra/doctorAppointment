import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { Context } from "../../context";

/* Register User  */
const GraphQLRegisterUserMutations = mutationWithClientMutationId({
  name: "register",
  inputFields: {
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    mobile: { type: GraphQLString },
    age: { type: GraphQLString },
    gender: { type: GraphQLString },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
    token: { type: GraphQLString },
  },
  mutateAndGetPayload: async (
    { email, password, name, mobile, age, gender },
    ctx: Context,
  ) => {
    const { token } = await ctx._userRepository.registerUser(
      email,
      password,
      name,
      mobile,
      age,
      gender,
    );
    return { token, success: true };
  },
});

/* Login User  */
const GraphQLLoginUserMutations = mutationWithClientMutationId({
  name: "login",
  inputFields: {
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
    token: { type: GraphQLString },
  },
  mutateAndGetPayload: async ({ email, password, name }, ctx: Context) => {
    const { token } = await ctx._userRepository.loginUser(email, password);
    return { token, success: true };
  },
});

/*  book Appointment  */
const GraphQLBookApointmentMutations = mutationWithClientMutationId({
  name: "bookAppointment",
  inputFields: {
    problem: { type: GraphQLNonNull(GraphQLString) },
    slot: { type: GraphQLNonNull(GraphQLString) },
    doctorId: { type: GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async ({ problem, slot, doctorId }, ctx: Context) => {
    const { userId } = await ctx.getUserId();
    let result = await ctx._userRepository.bookApointment(
      problem,
      slot,
      doctorId,
      userId,
    );
    return result;
  },
});

const GraphQLUserMutation = {
  register: GraphQLRegisterUserMutations,
  login: GraphQLLoginUserMutations,
  bookAppointment: GraphQLBookApointmentMutations,
};

export { GraphQLUserMutation };
