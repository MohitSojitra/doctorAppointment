const developMent = {
  siteUrl: "http://localhost:3000",
  mongoUrl: "mongodb://localhost:27017/Plumpy",
  jwtSecreat: "mohit-sojitra-pravinbhai-1234-5678-0987",
};

const production = {
  siteUrl: "http://localhost:3000",
  mongoUrl:
    "mongodb+srv://MohitSojitra:Mr@379983123@plumpy.otsh6.mongodb.net/plumpy?retryWrites=true&w=majority",
  jwtSecreat: "mohit-sojitra-pravinbhai-1234-5678-0987",
};

// export const env = developMent;

export const env = production;
