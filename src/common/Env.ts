const developMent = {
  siteUrl: "http://localhost:3000",
  mongoUrl: "mongodb://localhost:27017/futureX",
  jwtSecreat: "mohit-sojitra-pravinbhai-1234-5678-0987",
  port: 3000,
};

const production = {
  siteUrl: "http://localhost:3000",
  mongoUrl:
    "mongodb+srv://Mohit:Sojitra@cluster0.luxws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  jwtSecreat: "mohit-sojitra-pravinbhai-1234-5678-0987",
  port: 3000,
};

// export const env = developMent;

export const env = production;
