import express from "express";
import bodyParser from "body-parser";

const apiRouter = express.Router();
apiRouter.use(bodyParser.json());

apiRouter.get("/", (req, res, next) => {
  res.end("success");
});

apiRouter.get("/images/:imageName", (req, res, next) => {
  res.sendFile(__dirname + `/images/${req.params.imageName}`);
});

export default apiRouter;
