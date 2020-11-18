import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { Context } from "../../context";

/* Register User  */
const GraphQLRegisterUserMutations = mutationWithClientMutationId({
  name: "register",
  inputFields: {
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
    token: { type: GraphQLString },
  },
  mutateAndGetPayload: async ({ email, password, name }, ctx: Context) => {
    const { token } = await ctx._userRepository.registerUser(
      email,
      password,
      name,
    );
    return { token, success: true };
  },
});

const GraphQLUserMutation = {
  register: GraphQLRegisterUserMutations,
};

export { GraphQLUserMutation };
