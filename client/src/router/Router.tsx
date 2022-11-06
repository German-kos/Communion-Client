import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "layout/Layout";
import UserTest from "components/user test/UserTest";
import SignInDemo from "components/sign_in_demo/SignInDemo";
import ProfilePage from "pages/profile/ProfilePage";
import MyProfilePage from "pages/my_profile/MyProfilePage";
import { IUser } from "interfaces/UserInterface";
import store from "redux/store";
import { current } from "@reduxjs/toolkit";
function Router() {
  const myProfileNavigator = () => {
    const userJson = localStorage.getItem("currentUser");
    if (userJson) return <MyProfilePage />;
    return <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<SignInDemo />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/myprofile" element={myProfileNavigator()} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
