import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "layout/Layout";
import UserTest from "components/user test/UserTest";
import SignInDemo from "components/sign_in_demo/SignInDemo";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<SignInDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
