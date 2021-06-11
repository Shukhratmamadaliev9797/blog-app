import {
  NEWS_DELETE_FAIL,
  NEWS_DELETE_REQUEST,
  NEWS_DELETE_RESET,
  NEWS_DETAILS_FAIL,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_UPDATE_FAIL,
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_RESET,
  NEWS_UPDATE_SUCCESS,
  NEWS_WRITE_FAIL,
  NEWS_WRITE_REQUEST,
  NEWS_WRITE_RESET,
  NEWS_WRITE_SUCCESS,
} from "../constants/newsConstants";

export const newsListReducer = (state = { newsList: [] }, action) => {
  switch (action.type) {
    case NEWS_LIST_REQUEST:
      return { loading: true };
    case NEWS_LIST_SUCCESS:
      return { loading: false, newsList: action.payload };
    case NEWS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case NEWS_DETAILS_REQUEST:
      return { loading: true };
    case NEWS_DETAILS_SUCCESS:
      return { loading: false, news: action.payload };
    case NEWS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsWriteReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_WRITE_REQUEST:
      return { loading: true };
    case NEWS_WRITE_SUCCESS:
      return { loading: false, success: true, news: action.payload };
    case NEWS_WRITE_FAIL:
      return { loading: false, error: action.payload };
    case NEWS_WRITE_RESET:
      return {};
    default:
      return state;
  }
};
export const newsUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_UPDATE_REQUEST:
      return { loading: true };
    case NEWS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case NEWS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case NEWS_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const newsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_DELETE_REQUEST:
      return { loading: true };
    case NEWS_DETAILS_SUCCESS:
      return { loading: false, success: true };
    case NEWS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case NEWS_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
