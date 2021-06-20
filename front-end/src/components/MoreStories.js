import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listNews } from "../actions/newsAction";
import Loading from "./Loading";
import MessageBox from "./MessageBox";

export default function MoreStories() {
  const dispatch = useDispatch();
  const newsLists = useSelector((state) => state.newsLists);
  const { loading, error, newsList } = newsLists;

  useEffect(() => {
    dispatch(listNews({}));
  }, [dispatch]);
  return (
    <div className="moreStories">
      <div className="title">
        <h1>Others</h1>
        <div className="title-line"></div>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox className="error">{error}</MessageBox>
      ) : (
        <ul>
          {newsList
            .filter(
              (news) =>
                news.category !== "technology" &&
                news.category !== "Politics" &&
                news.category !== "sports" &&
                news.category !== "world"
            )
            .slice(0, 8)
            .map((news) => {
              return (
                <li>
                  <Link to={`/news/${news._id}`}>
                    <h2>{news.title}</h2>
                    <p>{news.paragraph1.substring(0, 150)}...</p>
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
