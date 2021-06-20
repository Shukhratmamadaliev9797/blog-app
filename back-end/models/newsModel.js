import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    writer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: { type: String, required: true },
    image1: { type: String, required: true },
    paragraph1: { type: String, required: true },
    image2: { type: String, required: false },
    paragraph2: { type: String, required: false },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);
export default News;
