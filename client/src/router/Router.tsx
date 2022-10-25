import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "layout/Layout";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
