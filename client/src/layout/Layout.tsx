import Navbar from "components/navbar/Navbar";
import "layout/layout.css";
import { Outlet } from "react-router-dom";
import Input from "components/common/input/Input";
import { inputPcPreset } from "presets/custom_input_presets/input_pc";

function Layout() {
  return (
    <div className="layout-container">
      <div className="layout">
        <Navbar />
        <Input placeholder="Username" preset={inputPcPreset} name="Username" />
        <p>.</p> {/* remove when done with input  */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
