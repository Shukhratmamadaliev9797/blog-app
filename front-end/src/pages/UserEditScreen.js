import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUser } from "../actions/userAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_RESET } from "../constants/userConstants";

export default function UserEditScreen(props) {
  const dispatch = useDispatch();
  const userId = props.match.params.id;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [isWriter, setIsWriter] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push("/userlist");
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setIsWriter(user.isWriter);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, user, userId, props.history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        _id: userId,
        firstName,
        lastName,
        email,
        isWriter,
        isAdmin,
      })
    );
  };

  return (
    <div className="signIn">
      <div className="form__inputBox">
        {loadingUpdate && <Loading />}
        {errorUpdate && (
          <MessageBox className="error">{errorUpdate}</MessageBox>
        )}
        {successUpdate && (
          <MessageBox className="success">Profile Updated</MessageBox>
        )}
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox className="error">{error}</MessageBox>
      ) : (
        <form className="form" onSubmit={submitHandler}>
          <div className="form__title">
            <h1>Update User</h1>
          </div>

          <div className="form__inputBox">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form__inputBox">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            <label htmlFor="isWriter">Is Writer</label>
            <input
              type="checkbox"
              checked={isWriter}
              id="isWriter"
              onChange={(e) => setIsWriter(e.target.checked)}
            />
          </div>
          <div className="form__inputBox">
            <label htmlFor="isAdmin">Is Admin</label>
            <input
              type="checkbox"
              checked={isAdmin}
              id="isAdmin"
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </div>

          <div className="form__inputBox">
            <button type="submit">Update</button>
          </div>
        </form>
      )}
    </div>
  );
}
