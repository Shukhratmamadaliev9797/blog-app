import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import News from "../models/newsModel.js";
import { isAdmin, isAuth } from "../utils.js";

const newsRouter = express.Router();
newsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const newsList = await News.find({});
    res.send(newsList);
  })
);
newsRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await News.remove({});
    const createdNews = await News.insertMany(data.blogs);
    res.send({ createdNews });
  })
);

newsRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const news = await News.findById(req.params.id);
    if (news) {
      res.send(news);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

newsRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const news = new News({
      title: "Sample Title" + Date.now(),
      category: "Category",
      image1: "/images/news/news1.jpeg",
      paragraph1: "Paragraph 1",
      image2: "",
      paragraph2: "",
    });
    const createdNews = await news.save();
    res.send({ message: "News Created", news: createdNews });
  })
);

newsRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newsId = req.params.id;
    const news = await News.findById(newsId);
    if (news) {
      news.title = req.body.title;
      news.category = req.body.category;
      news.image1 = req.body.image1;
      news.paragraph1 = req.body.paragraph1;
      news.image2 = req.body.image2;
      news.paragraph2 = req.body.paragraph2;
      const updatedNews = await news.save();
      res.send({ message: "Product Updated", news: updatedNews });
    } else {
      res.status(404).send({ message: "News Not Found" });
    }
  })
);

newsRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newsId = req.params.id;
    const news = await News.findById(newsId);
    if (news) {
      const deleteNews = await news.remove();
      res.send({ message: "News Deleted", news: deleteNews });
    } else {
      res.status(404).send({ message: "News Not Found" });
    }
  })
);
export default newsRouter;
