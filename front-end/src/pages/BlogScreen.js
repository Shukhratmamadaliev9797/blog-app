import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsNews } from "../actions/newsAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

export default function BlogScreen(props) {
  const dispatch = useDispatch();
  const newsDetails = useSelector((state) => state.newsDetails);
  const { loading, error, news } = newsDetails;

  useEffect(() => {
    dispatch(detailsNews(props.match.params.id));
  }, [dispatch, props]);

  return loading ? (
    <Loading />
  ) : error ? (
    <MessageBox className="error">{error}</MessageBox>
  ) : (
    <div className="blogScreen">
      <div className="blogScreen__container">
        <div className="blogScreen__container-img">
          <img src={news.image1} alt={news.title} />
        </div>
        <div className="blogScreen__container-category">{news.category}</div>
        <hr />
        <div className="blogScreen__container-title">
          <h1>{news.title}</h1>
        </div>

        <div className="blogScreen__container-paragraph">
          <p>{news.paragraph1}</p>
        </div>
        <br />
        <br />
        <br />
        {news.image2 && (
          <div className="blogScreen__container-img">
            <img src={news.image2} alt={news.title} />
          </div>
        )}
        {news.paragraph2 && (
          <div className="blogScreen__container-paragraph">
            <p>{news.paragraph2}</p>
          </div>
        )}

        <hr />
      </div>
    </div>
  );
}
