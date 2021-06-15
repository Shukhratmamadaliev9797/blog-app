import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../actions/userAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import { USER_DETAILS_RESET } from "../constants/userConstants";

export default function UserListScreen(props) {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
    dispatch({ type: USER_DETAILS_RESET });
  }, [dispatch, successDelete]);

  const deleteHandler = (user) => {
    if (window.confirm("Are you sure to delete this user?")) {
      dispatch(deleteUser(user._id));
    }
  };

  const renderUserList = () => {
    return users.map((user) => {
      return (
        <div key={user._id} className="userList__user">
          <div className="userList__user-img">
            <img
              src={
                user.gender === "male"
                  ? "/images/profile/male.png"
                  : user.gender === "female"
                  ? "/images/profile/female.png"
                  : ""
              }
              alt="userAvatar"
            />
          </div>
          <div className="userList__user-info">
            <span>Full Name</span>
            <span>
              {user.firstName} {user.lastName}
            </span>
          </div>
          <div className="userList__user-info">
            <span>Gender</span>
            <span>{user.gender}</span>
          </div>
          <div className="userList__user-info">
            <span>Email</span>
            <span>{user.email}</span>
          </div>
          <div className="userList__user-info">
            <span>City</span>
            <span>{user.city}</span>
          </div>
          <div className="userList__user-info">
            <span>Country</span>
            <span>{user.country}</span>
          </div>
          <div className="userList__user-info">
            <span>is Admin</span>
            <span>{user.isAdmin ? "Yes" : "No"}</span>
          </div>
          <div className="userList__user-info">
            <span>is Writer</span>
            <span>{user.isWriter ? "Yes" : "No"}</span>
          </div>
          <div className="userList__user-info">
            <span>Account created at</span>
            <span>{user.createdAt.substring(0, 10)}</span>
          </div>
          <div className="userList__user-action">
            <button
              type="button"
              onClick={() => props.history.push(`/user/${user._id}/edit`)}
            >
              Edit
            </button>
            <button type="button" onClick={() => deleteHandler(user)}>
              Delete
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="userList">
      <div className="userList__title">
        <h1>User List</h1>
      </div>
      <div>
        {loadingDelete && <Loading />}
        {errorDelete && (
          <MessageBox className="error">{errorDelete}</MessageBox>
        )}
        {successDelete && (
          <MessageBox className="success">User successfully deleted</MessageBox>
        )}
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox className="error">{error}</MessageBox>
      ) : (
        <div>{renderUserList()}</div>
      )}
    </div>
  );
}
