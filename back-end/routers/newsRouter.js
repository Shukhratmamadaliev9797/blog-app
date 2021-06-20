import express from "express";
import expressAsyncHandler from "express-async-handler";

import data from "../data.js";
import News from "../models/newsModel.js";
import { isAdminOrWriter, isAdmin, isAuth } from "../utils.js";

const newsRouter = express.Router();
newsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const title = req.query.title || "";
    const category = req.query.category || "";
    const writer = req.query.writer || "";
    const titleFilter = title
      ? { title: { $regex: title, $options: "i" } }
      : {};
    const writerFilter = writer ? { writer } : {};
    const categoryFilter = category ? { category } : {};
    const newsList = await News.find({
      ...writerFilter,
      ...titleFilter,
      ...categoryFilter,
    }).populate("writer");
    res.send(newsList);
  })
);

newsRouter.get(
  "/latest",
  expressAsyncHandler(async (req, res) => {
    const newsList = await News.find({});
    const latest = newsList.reverse();
    res.send(latest);
  })
);

newsRouter.get(
  "/category/:category",
  expressAsyncHandler(async (req, res) => {
    const category = req.params.category;
    const newsList = await News.find({});
    const filteredNews = newsList.filter((news) => news.category === category);
    if (filteredNews) {
      res.send(filteredNews);
    } else {
      res.status(404).send({ message: "News not found" });
    }
  })
);

newsRouter.get(
  "/related/:id",
  expressAsyncHandler(async (req, res) => {
    const newsList = await News.find({});
    const news = await News.findById(req.params.id);
    const related = newsList.filter((n) => n.category === news.category);

    res.send(related);
  })
);

newsRouter.get(
  "/notrelated/:id",
  expressAsyncHandler(async (req, res) => {
    const newsList = await News.find({});
    const news = await News.findById(req.params.id);
    const related = newsList.filter((n) => n.category !== news.category);

    res.send(related);
  })
);

newsRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await News.find().distinct("category");
    res.send(categories);
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
    const news = await News.findById(req.params.id).populate("writer");
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
  isAdminOrWriter,
  expressAsyncHandler(async (req, res) => {
    const news = new News({
      title: "Sample Title" + Date.now(),
      writer: req.user._id,
      firstName: req.user.firstName,

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
  isAdminOrWriter,
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

newsRouter.post(
  "/:id/comments",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newsId = req.params.id;
    const news = await News.findById(newsId);
    if (news) {
      const comment = {
        name: req.body.name,
        comment: req.body.comment,
      };
      news.comments.push(comment);
      const updatedNews = await news.save();
      res.status(201).send({
        message: "Comment Created",
        comment: updatedNews.comments[updatedNews.comments.length - 1],
      });
    } else {
      res.status(404).send({ message: "News Not Found" });
    }
  })
);

export default newsRouter;
