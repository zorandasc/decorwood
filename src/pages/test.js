import React from "react";

import Slider from "../components/Slider";
import Slider1 from "../components/Slider1";

const Test = () => {
  return (
    <>
      <div
        style={{
          border: "2px solid tomato",
          marginTop: "3rem",
          position: "relative",
          height: "100vh",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 style={{ marginBottom: "3rem", color: "whitesmoke" }}>
          JEBENI SLIDER
        </h1>
        <Slider></Slider>
      </div>
      <div
        style={{
          border: "2px solid tomato",
          marginTop: "3rem",
          marginBottom: "3rem",
          position: "relative",
          height: "100vh",
          textAlign: "center",
          //background: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 style={{ marginBottom: "3rem", color: "whitesmoke" }}>
          JEBENI SLIDER sa springom
        </h1>
        <Slider1></Slider1>
      </div>
    </>
  );
};

export default Test;
