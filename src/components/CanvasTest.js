import React from "react";
import useCanvas from "../tools/useCanvas";

//SAMO TERST NIGDJE SE NE KORISTI
const CanvasTest = (props) => {
  const { draw, ...rest } = props;

  const canvasRef = useCanvas(draw);

  return (
    <canvas
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "2px solid blue",
      }}
      ref={canvasRef}
      {...rest}
    ></canvas>
  );
};

export default CanvasTest;
