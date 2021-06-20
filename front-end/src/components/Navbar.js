import React, { useEffect } from "react";
import SearchBox from "./SearchBox";
import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userAction";
import { listNewsCategories } from "../actions/newsAction";

export default function Navbar() {
  const dispatch = useDispatch();
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const newsCategoriesList = useSelector((state) => state.newsCategoriesList);
  const { loading, error, categories } = newsCategoriesList;

  const signOutHandler = () => {
    dispatch(signout());
  };

  useEffect(() => {
    dispatch(listNewsCategories());
  }, [dispatch]);

  return (
    <div className="navbar">
      <div className="navbar__top">
        <div className="navbar__top-logo">
          <div className="navbar__top-logoBox">
            <Link to="/">
              <img src="/images/navbar/logo.png" alt="logo" />
              <span>World News</span>
            </Link>
          </div>
        </div>
        <div>
          <Route
            render={({ history }) => <SearchBox history={history} />}
          ></Route>
        </div>
        <div className="navbar__top-menu">
          <ul>
            <li>
              {userInfo ? (
                <>
                  <Link to="/">
                    <i className="fas fa-user"></i> {userInfo.firstName}
                  </Link>
                  <ul className="navbar__dropdown">
                    <li style={{ animationDelay: ".3s" }}>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li style={{ animationDelay: ".9s" }}>
                      <Link to="/" onClick={signOutHandler}>
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <Link to="/signin">
                  <i className="fas fa-sign-in-alt"></i> Sign in
                </Link>
              )}
            </li>
            {userInfo && userInfo.isWriter && (
              <li>
                <Link to="/">
                  <i className="fas fa-pencil-alt"></i>Writer
                </Link>
                <ul className="navbar__dropdown">
                  <li style={{ animationDelay: ".3s" }}>
                    <Link to="/newslist/writer">Articles</Link>
                  </li>
                </ul>
              </li>
            )}
            {userInfo && userInfo.isAdmin && (
              <li>
                <Link to="/">
                  <i className="far fa-eye"></i>Admin
                </Link>
                <ul className="navbar__dropdown">
                  <li style={{ animationDelay: ".3s" }}>
                    <Link to="/newslist">News List</Link>
                  </li>
                  <li style={{ animationDelay: ".9s" }}>
                    <Link to="/userlist">Users List</Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar__bottom">
        {loading ? (
          "loading"
        ) : error ? (
          error
        ) : (
          <ul>
            {categories.map((c) => {
              return (
                <li key={c}>
                  <Link to={`/search/category/${c}`}>{c}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
