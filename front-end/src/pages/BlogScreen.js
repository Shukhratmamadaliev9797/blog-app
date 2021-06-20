import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsNews,
  latestNews,
  notRelatedNews,
  relatedNews,
  writeComment,
} from "../actions/newsAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import { Link } from "react-router-dom";
import { NEWS_WRITE_COMMENT_RESET } from "../constants/newsConstants";

export default function BlogScreen(props) {
  const dispatch = useDispatch();
  const newsId = props.match.params.id;

  const newsDetails = useSelector((state) => state.newsDetails);
  const { loading, error, news } = newsDetails;

  const newsLatest = useSelector((state) => state.newsLatest);
  const { loading: loadingLatest, errorLatest, topicLatest } = newsLatest;

  const newsCommentWrite = useSelector((state) => state.newsCommentWrite);
  const {
    loading: loadingComment,
    error: errorComment,
    success: successComment,
  } = newsCommentWrite;

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const newsRelated = useSelector((state) => state.newsRelated);
  const {
    loading: loadingRelated,
    error: errorRelated,
    topicRelated,
  } = newsRelated;

  const newsNotRelated = useSelector((state) => state.newsNotRelated);
  const {
    loading: loadingNotRelated,
    error: errorNotRelated,
    notTopicRelated,
  } = newsNotRelated;

  const [comment, setComment] = useState("");
  const [name, setName] = useState(
    userInfo ? userInfo.firstName + " " + userInfo.lastName : ""
  );

  useEffect(() => {
    if (successComment) {
      setComment("");
      dispatch({ type: NEWS_WRITE_COMMENT_RESET });
    }
    dispatch(detailsNews(newsId));
    dispatch(latestNews());
    dispatch(relatedNews(newsId));
    dispatch(notRelatedNews(newsId));
  }, [dispatch, props, newsId, successComment]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment) {
      dispatch(writeComment(newsId, { comment, name: name }));
    } else {
      alert("Please enter comment");
    }
  };

  return loading ? (
    <Loading />
  ) : error ? (
    <MessageBox className="error">{error}</MessageBox>
  ) : (
    <div className="blogScreen">
      <div className="blogScreen__container">
        <div className="blogScreen__article">
          <div className="blogScreen__article-title">
            <h1>{news.title}</h1>
          </div>
          <div className="blogScreen__article-writer">
            By {news.writer.firstName}
          </div>
          <div className="blogScreen__article-category">
            {news.category} - {news.createdAt.substring(0, 10)}
          </div>
          <hr />
          <div className="blogScreen__article-img">
            <img src={news.image1} alt={news.title} />
          </div>

          <div className="blogScreen__article-paragraph">
            <p>{news.paragraph1}</p>
          </div>
          <br />
          <br />
          <br />
          {news.image2 && (
            <div className="blogScreen__article-img">
              <img src={news.image2} alt={news.title} />
            </div>
          )}
          {news.paragraph2 && (
            <div className="blogScreen__article-paragraph">
              <p>{news.paragraph2}</p>
            </div>
          )}
          <br />
        </div>
        <hr />
        <div className="blogScreen__comment">
          <div className="blogScreen__comment-title">
            <h1>Comments</h1>
          </div>
          {news.comments.length === 0 && (
            <MessageBox className="success">There is no comments</MessageBox>
          )}

          <ul>
            {news.comments.map((comment) => {
              return (
                <li key={comment._id}>
                  <div className="blogScreen__comment-user">
                    <span>
                      <i className="fas fa-user-circle"></i> {comment.name}
                    </span>
                  </div>
                  <div className="blogScreen__comment-createTime">
                    <span>{comment.createdAt.substring(0, 10)}</span>
                  </div>
                  <div className="blogScreen__comment-text">
                    <p>{comment.comment}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          {userInfo ? (
            <form onSubmit={submitHandler}>
              {loadingComment && <Loading />}
              {errorComment && (
                <MessageBox className="error">{errorComment}</MessageBox>
              )}

              <div>
                <label htmlFor="comment">Write comment</label>
                <textarea
                  id="comment"
                  type="text"
                  rows="5"
                  placeholder="Write Comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          ) : (
            <MessageBox className="info">
              Please <Link to="/signin">Sign in</Link> to write comment
            </MessageBox>
          )}
        </div>
      </div>
      <div className="blogScreen__topics">
        <hr />
        <div className="blogScreen__topics-latest">
          <h1>Top stories</h1>
          {loadingLatest ? (
            <Loading />
          ) : errorLatest ? (
            <MessageBox className="error">{errorLatest}</MessageBox>
          ) : (
            <ul>
              {topicLatest.slice(0, 4).map((topic) => {
                return (
                  <li key={topic._id}>
                    <Link to={`/news/${topic._id}`}>
                      <h2>{topic.title}</h2>
                      <p>
                        {topic.paragraph1.substring(0, 100)}
                        ...
                      </p>
                      <span>
                        <i className="far fa-clock"></i>{" "}
                        {topic.createdAt.substring(0, 10)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <hr />
        <div className="blogScreen__topics-latest">
          <h1>Features</h1>
          {loadingRelated ? (
            <Loading />
          ) : errorRelated ? (
            <MessageBox className="error">{errorRelated}</MessageBox>
          ) : (
            <ul>
              {topicRelated?.map((topic) => {
                return (
                  <li key={topic._id}>
                    <Link to={`/news/${topic._id}`}>
                      <img src={topic.image1} alt={topic.title} />
                      <h2>{topic.title}</h2>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <hr />
        <div className="blogScreen__topics-latest">
          <h1>Others</h1>
          {loadingNotRelated ? (
            <Loading />
          ) : errorNotRelated ? (
            <MessageBox className="error">{errorNotRelated}</MessageBox>
          ) : (
            <ul>
              {notTopicRelated.slice(0, 3).map((topic) => {
                return (
                  <li key={topic._id}>
                    <Link to={`/news/${topic._id}`}>
                      <img src={topic.image1} alt={topic.title} />
                      <h2>{topic.title}</h2>
                      <p>
                        {topic.paragraph1.substring(0, 100)}
                        ...
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
}
