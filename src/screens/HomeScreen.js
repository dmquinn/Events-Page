import React, { useState, useRef } from "react";
import HomeCarousel from "../components/HomeCarousel";
import News from "../components/News";

function HomeScreen(props) {
  return (
    <>
      <HomeCarousel />
      <News />
    </>
  );
}
export default HomeScreen;
