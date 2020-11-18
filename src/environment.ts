const defaultPort = 3000;

export const environment = {
  port: process.env.PORT || defaultPort,
  mongodb: {
    devUrl: "mongodb://localhost:27017/JSOM",
  },
  jwt: {
    secreat: "mohit-sojitra-pravinbhai-1234-5678-0987",
  },
};
