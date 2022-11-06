import Navbar from "components/navbar/Navbar";
import "layout/layout.css";
import { Outlet } from "react-router-dom";
import Input from "components/common/input/Input";
import { inputPcPreset } from "presets/custom_input_presets/input_pc";
import axios from "axios";

function Layout() {
  const testJwt = () => {
    axios({
      method: "get",
      url: "https://localhost:7066/api/jwttest/test",
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJ0ZXN0MSIsIm5iZiI6MTY2NzIzMzMwOCwiZXhwIjoxNjY3ODM4MTA4LCJpYXQiOjE2NjcyMzMzMDh9.zRUO7p2ZXxk361DQwe0LH2kLBku6b5qkZMgQFpq-BGyGDmU6Q1Kh2ZFMT4hH0dfqlJsmUmV2HhFL_J7A6alvMQ",
      },
    }).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div className="layout-container">
      <div className="layout">
        <Navbar />
        <div className="layout_outlet_container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
