import React from "react";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userAction";

export default function Navbar() {
  const dispatch = useDispatch();
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const signOutHandler = () => {
    dispatch(signout());
  };
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
          <SearchBox />
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
                    <Link to="/">Users</Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar__bottom">
        <ul>
          <li>
            <Link to="/">Latest</Link>
          </li>
          <li>
            <Link to="/">Popular</Link>
          </li>
          <li>
            <Link to="/">Business</Link>
          </li>
          <li>
            <Link to="/">Politics</Link>
          </li>
          <li>
            <Link to="/">Tech</Link>
          </li>
          <li>
            <Link to="/">Science</Link>
          </li>
          <li>
            <Link to="/">More...</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
