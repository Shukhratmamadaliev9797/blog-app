import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

export default function SignInScreen(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, loading, error } = userSignIn;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div className="signIn">
      <form className="form" onSubmit={submitHandler}>
        <div className="form__title">
          <h1>Sign In</h1>
        </div>
        <div>
          {loading && <Loading />}
          {error && <MessageBox className="error">{error}</MessageBox>}
        </div>
        <div className="form__inputBox">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password..."
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label />
          <button type="submit">Sign In</button>
        </div>
        <div className="form__inputBox">
          <label />
          <span>
            don't have account?{" "}
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
