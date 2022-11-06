import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "layout/Layout";
import SignInDemo from "components/sign_in_demo/SignInDemo";
import ProfilePage from "pages/profile/ProfilePage";
import { myProfileNavigator } from "./routerHelpers";

function Router() {
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
