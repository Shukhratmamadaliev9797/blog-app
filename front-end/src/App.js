import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.scss";
import AdminRoute from "./components/AdminRouter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import BlogScreen from "./pages/BlogScreen";
import HomeScreen from "./pages/HomeScreen";
import NewsEditScreen from "./pages/NewsEditScreen";
import NewsList from "./pages/NewsList";
import ProfileScreen from "./pages/ProfileScreen";
import RegisterScree from "./pages/RegisterScreen";
import SignInScreen from "./pages/SignInScreen";
import UpdateProfile from "./pages/UpdateProfile";
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
          <PrivateRoute path="/updateprofile" component={UpdateProfile} />
          <AdminRoute path="/newslist" component={NewsList} />
        </div>
        <div className="body__footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
