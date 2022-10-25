import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "../layout/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Route element={<Layout />}>
        <Route index />
      </Route>
    </BrowserRouter>
  );
}

export default Router;
