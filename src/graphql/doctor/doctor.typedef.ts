import {
  graphql,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context } from "../../context";

const GraphQLDoctor = new GraphQLObjectType({
  name: "doctor",
  fields: () => ({
    id: globalIdField("doctor"),

    name: { type: GraphQLString },
    specialization: { type: GraphQLList(GraphQLString) },
    curruntServingHospital: { type: GraphQLString },
    experience: { type: GraphQLString },
    bio: { type: GraphQLString },
    workingTime: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    slotes: {
      type: GraphQLList(
        new GraphQLObjectType({
          name: "slote",
          fields: () => ({
            time: { type: GraphQLString },
            userId: { type: GraphQLID },
          }),
        }),
      ),
    },
  }),
});

const {
  connectionType: GraphQLDoctorConnection,
  edgeType: GraphQLDoctorEdge,
} = connectionDefinitions({ nodeType: GraphQLDoctor });

export { GraphQLDoctorEdge, GraphQLDoctorConnection, GraphQLDoctor };
