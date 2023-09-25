import React from "react";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom"; // Import Outlet and useNavigate
import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminPannel from "./AdminPannel";
import AdminLogin from "./customer/Auth/AdminLogin";

function App() {
  const navigate = useNavigate(); // Use useNavigate hook

  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
        <Route path="/admin" element={<AdminPannel />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            localStorage.getItem("admin") ? <Outlet /> : navigate("/adminlogin")
          }
        />
      </Routes>
    </div>
  );
}

export default App;
