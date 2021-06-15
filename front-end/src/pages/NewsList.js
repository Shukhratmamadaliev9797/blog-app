import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNews, listNews, writeNews } from "../actions/newsAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import {
  NEWS_DELETE_RESET,
  NEWS_WRITE_RESET,
} from "../constants/newsConstants";
import { Link } from "react-router-dom";

export default function NewsList(props) {
  const writerMode = props.match.path.indexOf("/writer") >= 0;
  const dispatch = useDispatch();
  const newsLists = useSelector((state) => state.newsLists);
  const { loading, error, newsList } = newsLists;

  const newsWrite = useSelector((state) => state.newsWrite);
  const {
    loading: loadingNews,
    error: errorNews,
    success: successNews,
    news: createdNews,
  } = newsWrite;

  const newsDelete = useSelector((state) => state.newsDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = newsDelete;

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  useEffect(() => {
    if (successNews) {
      dispatch({ type: NEWS_WRITE_RESET });
      props.history.push(`/news/${createdNews._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: NEWS_DELETE_RESET });
    }
    dispatch(listNews({ writer: writerMode ? userInfo._id : "" }));
  }, [
    dispatch,
    createdNews,
    props.history,
    successNews,
    successDelete,
    userInfo._id,
    writerMode,
  ]);

  const deleteHandler = (news) => {
    if (window.confirm("Are you sure to delete it?")) {
      dispatch(deleteNews(news._id));
    }
  };

  const renderNewsList = () => {
    return newsList.map((news) => {
      return (
        <div key={news._id} className="newsList__card">
          <Link to={`/news/${news._id}`}>
            <div className="newsList__card-img">
              <img src={news.image1} alt={news.title} />
            </div>
          </Link>

          <div className="newsList__card-category">
            <span>
              {news.category} - {news.createdAt.substring(0, 10)}
            </span>
          </div>
          <div className="newsList__card-title">
            <h2>{news.title}</h2>
          </div>
          <div className="newsList__card-buttons">
            <button
              onClick={() => props.history.push(`/news/${news._id}/edit`)}
            >
              <i className="fas fa-edit"></i>Edit
            </button>
            <button onClick={() => deleteHandler(news)}>
              <i className="far fa-trash-alt"></i>Delete
            </button>
          </div>
        </div>
      );
    });
  };

  const createHandler = () => {
    dispatch(writeNews());
  };
  return (
    <div className="newsList">
      <div className="newsList__title">
        <h1>News List</h1>
        <button type="button" onClick={createHandler}>
          Compose News
        </button>
      </div>

      {loadingNews && <Loading />}
      {errorNews && <MessageBox className="error">{errorNews}</MessageBox>}
      {loadingDelete && <Loading />}
      {errorDelete && <MessageBox className="error">{errorDelete}</MessageBox>}
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox className="error">{error}</MessageBox>
      ) : (
        <div className="newsList__box">{renderNewsList()}</div>
      )}
    </div>
  );
}
