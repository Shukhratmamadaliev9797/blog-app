import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { listNews } from "../actions/newsAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

export default function SearchScreen(props) {
  const { title = "all", category = "all" } = useParams();
  const dispatch = useDispatch();
  const newsLists = useSelector((state) => state.newsLists);
  const { loading, error, newsList } = newsLists;

  useEffect(() => {
    dispatch(
      listNews({
        title: title !== "all" ? title : "",
        category: category !== "all" ? category : "",
      })
    );
  }, [dispatch, title, category]);

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

  return (
    <div className="searchScreen">
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox className="error">{error}</MessageBox>
      ) : (
        <div className="searchScreen__results">{newsList.length} Results</div>
      )}
      <div>
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox className="error">{error}</MessageBox>
        ) : (
          <>
            {newsList.length === 0 && (
              <MessageBox className="info">No news found</MessageBox>
            )}
            <div className="searchScreen__news">{renderBlogs()}</div>
          </>
        )}
      </div>
    </div>
  );
}
