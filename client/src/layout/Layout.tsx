import Navbar from "components/navbar/Navbar";
import React, { useState } from "react";
import "layout/layout.css";
import { Outlet } from "react-router-dom";
import { closeModal } from "redux/slices/ModalSlice";
import store from "redux/store";
import Modal from "components/modal/Modal";
import SignInDemo from "components/sign_in_demo/SignInDemo";
import Backdrop from "components/backdrop/Backdrop";
import UserTest from "components/user test/UserTest";

function Layout() {
  return (
    <div className="layout-container">
      <div className="layout">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
