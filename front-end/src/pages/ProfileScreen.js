import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser } from "../actions/userAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

export default function ProfileScreen(props) {
  const dispatch = useDispatch();
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo]);
  return loading ? (
    <Loading />
  ) : error ? (
    <MessageBox className="error">{error}</MessageBox>
  ) : (
    <div>
      <div className="profile">
        <div className="profile__pictureBox">
          <img
            className="profile__picture"
            src={
              user.gender === "male"
                ? "/images/profile/male.png"
                : user.gender === "female"
                ? "/images/profile/female.png"
                : ""
            }
            alt="userAvatar"
          />
          <h1>
            {user.firstName} {user.lastName}
          </h1>
        </div>
        <div className="profile__detailsBox">
          <div className="profile__personalBox">
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> {user.city},{" "}
                {user.country}
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                {user.email}
              </li>
              <li>
                <i className="fas fa-user-circle"></i> Created at:{" "}
                {user.createdAt.substring(0, 10)}
              </li>
              <li>
                <button onClick={() => props.history.push("/updateprofile")}>
                  Edit Profile
                </button>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
