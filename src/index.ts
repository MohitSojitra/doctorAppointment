// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}

// import { GraphQLServer } from "graphql-yoga";
import { ApolloServer } from "apollo-server-express";

import { schema } from "./graphql/schema";
import mongoose from "mongoose";
import { Context } from "./context";
import express from "express";
import path from "path";
import { environment } from "./environment";

import imageRouter from "./routes/imageRouter";
import { env } from "./common/Env";
import cors from "cors";

const context = async (ctx: any) => new Context(ctx.req, ctx.res);

// const server = new GraphQLServer({
//   schema,
//   context,
// });
// const app = server.express;
// app.use("/event", imageRouter);

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

const app = express();
app.use(cors());

// serve file

app.use(express.static(__dirname + "/public"));

// console.log({ path: __dirname + "/public/" });

// end serve file

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
apolloserver.applyMiddleware({ app });

app.use("/event", imageRouter);
app.get("/eventPoster", (req, res, next) => {
  res.end("success");
});

app.get("/", (req, res, next) => {
  res.end("success");
});

// app.listen({ port: 3000, path: "graphql" }).then(({ url }) => {
//   console.log(`🚀 Server is running on ${url} 🔥 🔥 🔥`);
// });

app.listen({ port: env.port, path: "graphql" }, () =>
  console.log(
    `🚀 Server ready at ${env.siteUrl}${apolloserver.graphqlPath} 🔥 🔥 🔥`,
  ),
);

mongoose
  .connect(env.mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoDb successfully connected");
  })
  .catch((e) => console.log("dosent connect mongodb , something wrong!!"));
