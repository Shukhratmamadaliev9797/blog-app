import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import MessageBox from "./MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listNews } from "../actions/newsAction";

export default function NewsBlog() {
  const dispatch = useDispatch();
  const newsLists = useSelector((state) => state.newsLists);
  const { loading, error, newsList } = newsLists;
  useEffect(() => {
    dispatch(listNews());
  }, [dispatch]);

  const renderBlogs = () => {
    return newsList.map((news) => {
      return (
        <div key={news._id} className="newsBlog">
          <div className="newsBlog__image">
            <Link to={`/news/${news._id}`}>
              <img src={news.image1} alt={news.title} />
            </Link>
          </div>
          <div className="newsBlog__category">{news.category}</div>
          <div className="newsBlog__title">
            <h1>{news.title}</h1>
          </div>
          <div className="newsBlog__link">
            <Link to={`/news/${news._id}`}>Read article</Link>
          </div>
        </div>
      );
    });
  };

  return loading ? (
    <Loading />
  ) : error ? (
    <MessageBox className="error">{error}</MessageBox>
  ) : (
    <>{renderBlogs()}</>
  );
}
