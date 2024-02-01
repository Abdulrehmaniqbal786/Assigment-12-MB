import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Public_Routes = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};