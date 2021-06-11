import axios from "axios";
import {
  NEWS_DELETE_FAIL,
  NEWS_DELETE_REQUEST,
  NEWS_DETAILS_FAIL,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_UPDATE_FAIL,
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
  NEWS_WRITE_FAIL,
  NEWS_WRITE_REQUEST,
  NEWS_WRITE_SUCCESS,
} from "../constants/newsConstants";

export const listNews = () => {
  return async (dispatch) => {
    dispatch({ type: NEWS_LIST_REQUEST });
    try {
      const { data } = await axios.get("/api/news");
      dispatch({ type: NEWS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: NEWS_LIST_FAIL, payload: error.message });
    }
  };
};

export const detailsNews = (newsId) => {
  return async (dispatch) => {
    dispatch({ type: NEWS_DETAILS_REQUEST, payload: newsId });
    try {
      const { data } = await axios.get(`/api/news/${newsId}`);
      dispatch({ type: NEWS_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: NEWS_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const writeNews = () => {
  return async (dispatch, getState) => {
    dispatch({ type: NEWS_WRITE_REQUEST });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(
        "/api/news",
        {},
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: NEWS_WRITE_SUCCESS, payload: data.news });
    } catch (error) {
      dispatch({
        type: NEWS_WRITE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const updateNews = (news) => {
  return async (dispatch, getState) => {
    dispatch({ type: NEWS_UPDATE_REQUEST, payload: news });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.put(`/api/news/${news._id}`, news, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: NEWS_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: NEWS_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const deleteNews = (newsId) => {
  return async (dispatch, getState) => {
    dispatch({ type: NEWS_DELETE_REQUEST, payload: newsId });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/news/${newsId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: NEWS_DETAILS_SUCCESS });
    } catch (error) {
      dispatch({
        type: NEWS_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
