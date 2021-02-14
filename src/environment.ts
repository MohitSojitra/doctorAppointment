import { env } from "./common/Env";

const defaultPort = 3000;

export const environment = {
  port: process.env.PORT || defaultPort,
  mongodb: {
    devUrl: `${env.mongoUrl}`,
  },
  jwt: {
    secreat: env.jwtSecreat,
  },
};
