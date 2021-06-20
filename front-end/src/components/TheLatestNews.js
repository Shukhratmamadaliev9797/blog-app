import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { latestNews } from "../actions/newsAction";
import Loading from "./Loading";
import MessageBox from "./MessageBox";

export default function TheLatestNews() {
  const dispatch = useDispatch();
  const newsLatest = useSelector((state) => state.newsLatest);
  const { loading, error, topicLatest } = newsLatest;

  useEffect(() => {
    dispatch(latestNews());
  }, [dispatch]);
  return (
    <div className="latestNews">
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox classname="error">{error}</MessageBox>
      ) : (
        <ul className="latestNews__container">
          {topicLatest?.slice(0, 5).map((topic, index) => {
            return (
              <li
                key={topic._id}
                className={`latestNews__container-topic latestNews__container-topic-${
                  index + 1
                }`}
              >
                <Link to={`/news/${topic._id}`}>
                  <div className="topic-img">
                    <img src={topic.image1} alt={topic.title} />
                  </div>
                  <div className="topic-details">
                    <h1>{topic.title}</h1>
                    <p>{topic.paragraph1.substring(0, 150)}...</p>
                    <div>
                      <span>
                        <i className="far fa-clock"></i>{" "}
                        {topic.createdAt.substring(0, 10)}
                      </span>{" "}
                      | {topic.category}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
