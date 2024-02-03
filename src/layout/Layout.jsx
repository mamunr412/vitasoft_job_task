import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { Toaster } from "react-hot-toast";
import useLoggedInCheck from "../components/hooks/useLoggedInCheck";

function Layout() {
  useLoggedInCheck();
  return (
    <div>
      <div className="min-h-screen max-w-[1500px] mx-auto">
        <Navbar />
        <Outlet />
        <Toaster position="top-center" />
      </div>
    </div>
  );
}

export default Layout;
