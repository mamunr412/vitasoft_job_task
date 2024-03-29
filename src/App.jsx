import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./layout/router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
