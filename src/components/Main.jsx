import React from "react";
import "./main.css";
import Schedule from "./Schedule";
import Trend from "../pages/Trend";
import Blog from "../pages/Blog";
import Footer from "../pages/Footer";

function Main() {
  return (
    <main>
      <Schedule />
      <Trend />
      <Blog />
      <Footer />
    </main>
  );
}

export default Main;
