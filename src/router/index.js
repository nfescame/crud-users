import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProviders } from "../providers";
import Home from "../pages/home";

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProviders>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </AuthProviders>
    </BrowserRouter>
  );
}
