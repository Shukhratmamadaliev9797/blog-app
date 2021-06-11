import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

export default function RegisterScree(props) {
  const dispatch = useDispatch();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not matched");
    } else {
      dispatch(
        register(firstName, lastName, gender, city, country, email, password)
      );
    }
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
          <h1>Register</h1>
        </div>
        <div>
          {loading && <Loading />}
          {error && <MessageBox className="error">{error}</MessageBox>}
        </div>
        <div className="form__inputBox">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            required
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            required
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label htmlFor="gender">Gender</label>
          <select id="gender" onChange={(e) => setGender(e.target.value)}>
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form__inputBox">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="City"
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Country"
            required
            onChange={(e) => setCountry(e.target.value)}
          />
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password..."
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label />
          <button type="submit">Sign In</button>
        </div>
        <div className="form__inputBox">
          <label />
          <span>
            Already have an account?{" "}
            <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
