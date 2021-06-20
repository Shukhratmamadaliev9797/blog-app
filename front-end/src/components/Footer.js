import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listNewsCategories } from "../actions/newsAction";
import Loading from "./Loading";
import MessageBox from "./MessageBox";

export default function Footer() {
  const dispatch = useDispatch();
  const newsCategoriesList = useSelector((state) => state.newsCategoriesList);
  const { loading, error, categories } = newsCategoriesList;

  useEffect(() => {
    dispatch(listNewsCategories());
  }, [dispatch]);
  return (
    <div className="footer">
      <div className="footer__categories">
        <h3>Categories</h3>
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox className="error">{error}</MessageBox>
        ) : (
          <ul>
            {categories.map((c) => {
              return <li>{c}</li>;
            })}
          </ul>
        )}
      </div>
      <div className="footer__links">
        <h3>Quick links</h3>
        <ul>
          <li>Become writer</li>
          <li>Contact Us</li>
          <li>About me</li>
        </ul>
      </div>
      <div className="footer__links">
        <h3>Quick links</h3>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy & Cookies</li>
          <li>Privacy Options</li>
          <li>Accessibility</li>
        </ul>
      </div>
      <div className="footer__logo">
        <ul>
          <li>
            <Link to="/">
              <img src="/images/navbar/logo.png" alt="logo" />
              <span>World News</span>
            </Link>
          </li>
          <li>
            <input type="text" placeholder="email address..." />
            <button>Subscribe</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
