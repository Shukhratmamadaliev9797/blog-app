import axios from "axios";
import React, { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsNews, updateNews } from "../actions/newsAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import { NEWS_UPDATE_RESET } from "../constants/newsConstants";
export default function NewsEditScreen(props) {
  const newsId = props.match.params.id;
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image1, setImage1] = useState("");
  const [paragraph1, setParagraph1] = useState("");
  const [image2, setImage2] = useState("");
  const [paragraph2, setParagraph2] = useState("");

  const newsDetails = useSelector((state) => state.newsDetails);
  const { loading, error, news } = newsDetails;

  const newsUpdate = useSelector((state) => state.newsUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = newsUpdate;

  useEffect(() => {
    if (successUpdate) {
      props.history.push("/newslist");
    }
    if (!news || news._id !== newsId || successUpdate) {
      dispatch({ type: NEWS_UPDATE_RESET });
      dispatch(detailsNews(newsId));
    } else {
      setTitle(news.title);
      setCategory(news.category);
      setImage1(news.image1);
      setParagraph1(news.paragraph1);
      setImage2(news.image2);
      setParagraph2(news.paragraph2);
    }
  }, [dispatch, news, newsId, props.history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateNews({
        _id: newsId,
        title,
        category,
        image1,
        paragraph1,
        image2,
        paragraph2,
      })
    );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const uploadImageHandler1 = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage1(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  const uploadImageHandler2 = async (e) => {
    const file = e.target.files[0];
    const bodyFormatData = new FormData();
    bodyFormatData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads", bodyFormatData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage2(data);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  return (
    <div className="newsEdit">
      <div className="newsEdit__newsform__inputBox">
        {loadingUpdate && <Loading />}
        {errorUpdate && (
          <MessageBox className="error">{errorUpdate}</MessageBox>
        )}
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox className="error">{error}</MessageBox>
      ) : (
        <form className="newsEdit__newsForm" onSubmit={submitHandler}>
          <div className="newsEdit__newsForm__title">
            <h1>Update News</h1>
          </div>
          <div className="newsEdit__newsForm__inputBox">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="newsEdit__newsForm__inputBox">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(category)}
              required
            >
              <option value="" disabled selected>
                Select category
              </option>
              <option value="business">Business</option>
              <option value="cars">Cars</option>
              <option value="entertainment">Entertainment</option>
              <option value="family">Family</option>
              <option value="health">Health</option>
              <option value="Politics">Politics</option>
              <option value="religion">Religion</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="travel">Travel</option>
              <option value="world">World</option>
              <option value="nature">Nature</option>
              <option value="animals">Animals</option>
              <option value="crime">Crime</option>
              <option value="famous">Famous</option>
            </select>
          </div>

          <div className="newsEdit__newsForm__inputBox">
            <label htmlFor="image1">Image 1</label>
            <input
              id="image1"
              type="text"
              placeholder="Image 1"
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
              required
            />
          </div>
          <div className="newsEdit__newsForm__inputBox">
            <label htmlFor="imageFile1">Image file 1</label>
            <input
              id="imageFile1"
              type="file"
              onChange={uploadImageHandler1}
              required
            />
          </div>
          <div className="newsEdit__newsForm__inputBox">
            {loadingUpload && "Image Uploading"}
            {errorUpload && (
              <MessageBox className="error">{errorUpload}</MessageBox>
            )}
          </div>
          <div className="newsEdit__newsForm__inputBox">
            <label htmlFor="paragraph1">Paragraph 1</label>
            <textarea
              id="paragraph1"
              type="text"
              placeholder="Paragraph 1"
              value={paragraph1}
              onChange={(e) => setParagraph1(e.target.value)}
              required
            />
          </div>
          <div className="newsEdit__newsForm__inputBox">
            <label htmlFor="imageFile2">Image file 2 (optional)</label>
            <input id="imageFile2" type="file" onChange={uploadImageHandler2} />
          </div>
          <div className="newsEdit__newsForm__inputBox">
            <label htmlFor="image2">Image 2 (optional)</label>
            <input
              id="image2"
              type="text"
              placeholder="Image 2"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
            />
          </div>
          <div className="newsEdit__newsForm__inputBox">
            <label htmlFor="paragraph2">Paragraph 2 (optional)</label>
            <textarea
              id="paragraph2"
              type="text"
              placeholder="Paragraph 2"
              value={paragraph2}
              onChange={(e) => setParagraph2(e.target.value)}
            />
          </div>
          <div className="newsEdit__newsForm__inputBox">
            <button type="submit">Update</button>
          </div>
        </form>
      )}
    </div>
  );
}
