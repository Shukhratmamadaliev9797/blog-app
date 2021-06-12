import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import newsRouter from "./routers/newsRouter.js";
import userRouter from "./routers/userRouter.js";
import uploadRouter from "./routers/uploadRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/blog-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/news", newsRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/uploads", uploadRouter);
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });
app.user(express.static(path.join(__dirname, "/front-end/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/front-end/build/index.html"));
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
