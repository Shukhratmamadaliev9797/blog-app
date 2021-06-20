import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  newsCategoriesListReducer,
  newsCategoryReducer,
  newsCommentWriteReducer,
  newsDeleteReducer,
  newsDetailsReducer,
  newsLatestReducer,
  newsListReducer,
  newsRelatedReducer,
  newsUpdateReducer,
  newsWriteReducer,
  notNewsRelatedReducer,
} from "./reducers/newsReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducer,
  userSignInReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  newsLists: newsListReducer,
  newsDetails: newsDetailsReducer,
  userSignIn: userSignInReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  newsWrite: newsWriteReducer,
  newsUpdate: newsUpdateReducer,
  newsDelete: newsDeleteReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  newsCategoriesList: newsCategoriesListReducer,
  newsCommentWrite: newsCommentWriteReducer,
  newsLatest: newsLatestReducer,
  newsRelated: newsRelatedReducer,
  newsNotRelated: notNewsRelatedReducer,
  newsCategory: newsCategoryReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
