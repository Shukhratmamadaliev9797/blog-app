import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listNews } from "../actions/newsAction";
import Loading from "./Loading";
import MessageBox from "./MessageBox";

export default function Technology() {
  const dispatch = useDispatch();
  const newsLists = useSelector((state) => state.newsLists);
  const { loading, error, newsList } = newsLists;

  useEffect(() => {
    dispatch(listNews({}));
  }, [dispatch]);

  return (
    <div className="categoricalNews">
      <div className="title">
        <h1>Technology</h1>
        <div className="title-line"></div>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox className="error">{error}</MessageBox>
      ) : (
        <ul>
          {newsList
            .filter((news) => news.category === "technology")
            .map((news) => {
              return (
                <li key={news._id}>
                  <Link to={`/news/${news._id}`}>
                    <img src={news.image1} alt={news.title} />
                    <h2>{news.title}</h2>
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
