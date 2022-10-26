import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "layout/Layout";
import UserTest from "components/user test/UserTest";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<UserTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
