// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}

// import { GraphQLServer } from "graphql-yoga";
import { ApolloServer } from "apollo-server";

import { schema } from "./graphql/schema";
import mongoose from "mongoose";
import { Context } from "./context";
import express from "express";
import path from "path";
import { environment } from "./environment";

const context = async (ctx: any) => new Context(ctx.req, ctx.res);

// const server = new GraphQLServer({
//   schema,
//   context,
// });
// const app = server.express;
// app.use("/", express.static(path.join("public")));

// const option = {
//   port: 3000,
//   endpoint: "/graphql",
//   subscription: "/subscription",
//   playground: "/playground",
//   cors: {
//     origin: "*",
//   },
// };

// server.start(option, ({ port }) =>
//   console.log(
//     `Server started, listening on port ${port} for incoming requests.`,
//   ),
// );

const apolloserver = new ApolloServer({
  schema,
  context,
  subscriptions: "/subscription",
  debug: true,
  playground: true,
  introspection: true,
});

apolloserver.listen({ port: 3000, path: "graphql" }).then(({ url }) => {
  console.log(`🚀 Server is running on ${url} 🔥 🔥 🔥`);
});

mongoose
  .connect(environment.mongodb.devUrl)
  .then(() => {
    console.log("mongoDb successfully connected");
  })
  .catch((e) => console.log("dosent connect mongodb , something wrong!!"));
