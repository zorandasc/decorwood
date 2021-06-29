import React from "react";
import CanvasTest from "../components/CanvasTest";
import Cestice from "../components/Cestice";

const Test = () => {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "tomato";
    ctx.beginPath();
    ctx.arc(150, 80, 40 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(#040429, #257eb7)",
      }}
    >
      kurec palec
      {/*<CanvasTest draw={draw}></CanvasTest>*/}
      <Cestice></Cestice>
    </div>
  );
};

export default Test;
