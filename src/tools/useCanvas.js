import { useRef, useEffect } from "react";

//Nas custom made canvas hook takes a draw funkciju
//i vraca ref od canvas elementa
const useCanvas = (draw) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      draw(ctx, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };

    resizeCanvasPixelRatio(canvas);
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return canvasRef;
};
/*
// track the canvas size
const resizeCanvasToDisplaySize = (canvas) => {
  const { width, height } = canvas.getBoundingClientRect();
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }
  return false;
};
*/
//High pixel density devices
const resizeCanvasPixelRatio = (canvas) => {
  const { width, height } = canvas.getBoundingClientRect();
  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext("2d");
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }
  return false;
};

export default useCanvas;
