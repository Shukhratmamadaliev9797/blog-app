import {
  NEWS_CATEGORY_FAIL,
  NEWS_CATEGORY_LIST_FAIL,
  NEWS_CATEGORY_LIST_REQUEST,
  NEWS_CATEGORY_LIST_SUCCESS,
  NEWS_CATEGORY_REQUEST,
  NEWS_CATEGORY_SUCCESS,
  NEWS_DELETE_FAIL,
  NEWS_DELETE_REQUEST,
  NEWS_DELETE_RESET,
  NEWS_DETAILS_FAIL,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_LATEST_FAIL,
  NEWS_LATEST_REQUEST,
  NEWS_LATEST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_NOT_RELATED_FAIL,
  NEWS_NOT_RELATED_REQUEST,
  NEWS_NOT_RELATED_SUCCESS,
  NEWS_RELATED_FAIL,
  NEWS_RELATED_REQUEST,
  NEWS_RELATED_SUCCESS,
  NEWS_UPDATE_FAIL,
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_RESET,
  NEWS_UPDATE_SUCCESS,
  NEWS_WRITE_COMMENT_FAIL,
  NEWS_WRITE_COMMENT_REQUEST,
  NEWS_WRITE_COMMENT_RESET,
  NEWS_WRITE_COMMENT_SUCCESS,
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

export const newsLatestReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_LATEST_REQUEST:
      return { loading: true };
    case NEWS_LATEST_SUCCESS:
      return { loading: false, topicLatest: action.payload };
    case NEWS_LATEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsRelatedReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_RELATED_REQUEST:
      return { loading: true };
    case NEWS_RELATED_SUCCESS:
      return { loading: false, topicRelated: action.payload };
    case NEWS_RELATED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const notNewsRelatedReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_NOT_RELATED_REQUEST:
      return { loading: true };
    case NEWS_NOT_RELATED_SUCCESS:
      return { loading: false, notTopicRelated: action.payload };
    case NEWS_NOT_RELATED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsCategoriesListReducer = (
  state = { loading: true, newsList: [] },
  action
) => {
  switch (action.type) {
    case NEWS_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case NEWS_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case NEWS_CATEGORY_LIST_FAIL:
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

export const newsCommentWriteReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_WRITE_COMMENT_REQUEST:
      return { loading: true };
    case NEWS_WRITE_COMMENT_SUCCESS:
      return { loading: false, success: true, comment: action.payload };
    case NEWS_WRITE_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case NEWS_WRITE_COMMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const newsCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_CATEGORY_REQUEST:
      return { loading: true };
    case NEWS_CATEGORY_SUCCESS:
      return { loading: false, categoryTopic: action.payload };
    case NEWS_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
