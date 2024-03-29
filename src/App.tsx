import React from "react";
import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
