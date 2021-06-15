import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.scss";
import AdminRoute from "./components/AdminRouter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import WriterRoute from "./components/WriterRoute";
import BlogScreen from "./pages/BlogScreen";
import HomeScreen from "./pages/HomeScreen";
import NewsEditScreen from "./pages/NewsEditScreen";
import NewsList from "./pages/NewsList";
import ProfileScreen from "./pages/ProfileScreen";
import RegisterScree from "./pages/RegisterScreen";
import SignInScreen from "./pages/SignInScreen";
import UpdateProfile from "./pages/UpdateProfile";
import UserEditScreen from "./pages/UserEditScreen";
import UserListScreen from "./pages/UserListScreen";
export default function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="body__navbar">
          <Navbar />
        </div>
        <div className="body__content">
          <Route path="/" exact component={HomeScreen} />
          <Route path="/news/:id" exact component={BlogScreen} />
          <Route path="/signin" exact component={SignInScreen} />
          <Route path="/register" exact component={RegisterScree} />
          <Route path="/profile" exact component={ProfileScreen} />
          <Route path="/news/:id/edit" exact component={NewsEditScreen} />
          <Route path="/userlist" exact component={UserListScreen} />
          <WriterRoute path="/newslist/writer" component={NewsList} />
          <AdminRoute path="/user/:id/edit" exact component={UserEditScreen} />
          <PrivateRoute path="/updateprofile" exact component={UpdateProfile} />
          <AdminRoute path="/newslist" exact component={NewsList} />
        </div>
        <div className="body__footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
