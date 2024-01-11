import React from "react";
import "./main.css";
import Schedule from "./Schedule";
import Trend from "../pages/Trend";
import Blog from "../pages/Blog";

function Main() {
  return (
    <main>
      <Schedule />
      <Trend />
      <Blog />
    </main>
  );
}

export default Main;
