import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateProfile } from "../actions/userAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

export default function UpdateProfile(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdateProfile;

  const updateHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm Password are not matched");
    } else {
      dispatch(
        updateProfile({
          userId: user._id,
          firstName,
          lastName,
          gender,
          city,
          country,
          email,
          password,
        })
      );
      if (successUpdate) {
        props.history.push("/profile");
      }
    }
  };
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setfirstName(user.firstName);
      setlastName(user.lastName);
      setGender(user.gender);
      setCity(user.city);
      setCountry(user.country);
      setEmail(user.email);
    }
  }, [dispatch, userInfo, user]);

  return loading ? (
    <Loading />
  ) : error ? (
    <MessageBox className="error">{error}</MessageBox>
  ) : (
    <div className="signIn">
      <form className="form" onSubmit={updateHandler}>
        <div className="form__title">
          <h1>Update Profile</h1>
        </div>
        <div className="form__inputBox">
          {loadingUpdate && <Loading />}
          {errorUpdate && (
            <MessageBox className="error">{errorUpdate}</MessageBox>
          )}
          {successUpdate && (
            <MessageBox className="success">
              Profile updated successfully
            </MessageBox>
          )}
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
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label htmlFor="gender">Gender</label>
          <select
            value={gender}
            id="gender"
            onChange={(e) => setGender(e.target.value)}
          >
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
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password..."
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form__inputBox">
          <label />
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
