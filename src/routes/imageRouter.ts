import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import { Event } from "../schemas/Event";
import { Doctor } from "../schemas/Doctor/doctor.model";

const imageRouter = express.Router();
imageRouter.use(bodyParser.json());

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    // console.log({ param: req.params, body: req.body });
    cb(null, `${file.originalname}`);
  },
});

const imageFilter = (req: Request, file: any, cb: Function) => {
  if (!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)) {
    cb(new Error("You upload only images :) "), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: Storage,
  // fileFilter: imageFilter,
});

imageRouter
  .route("/doctor/:doctorId")
  .get((req, res, next) => {
    console.log("in the get");
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end("success");
  })
  .post(upload.single("doctorImage"), async (req, res, next) => {
    console.log("post run");
    try {
      // console.log({ in: req.body.eventid });
      const event = await Doctor.findByIdAndUpdate(
        req.params.doctorId,
        { $set: { imageUrl: "images/" + req.file.originalname } },
        { new: true },
      );
      console.log({ event });
      res.status(200).send({ status: "success" });
    } catch (e) {
      console.log(e);
    }
  })
  .put(upload.single("doctorImage"), async (req, res, next) => {
    console.log("post run");
    try {
      // console.log({ in: req.body.eventid });
      const event = await Doctor.findByIdAndUpdate(
        req.params.doctorId,
        { $set: { imageUrl: "images/" + req.file.originalname } },
        { new: true },
      );
      console.log({ event });
      res.status(200).send({ status: "success" });
    } catch (e) {
      console.log(e);
    }
  });

export default imageRouter;
