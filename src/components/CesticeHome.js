import React, { useRef, useEffect } from "react";

const MAX_PARTICLES = 80;
const DRAW_INTERVAL = 60;

let pixies = [];
let gradient = null;
let ttl = 8000;
let xmax = 2;
let ymax = 2;
let rmax = 3;
//let rt = 1;

class Circle {
  constructor(x, y, r, dx, dy, hl, rt, settings_rt, stop) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.hl = hl;
    this.rt = rt;
    this.settings_rt = settings_rt;
    this.stop = stop;
  }

  fade() {
    this.rt += this.settings_rt;
  }

  draw(ctx) {
    if (this.rt <= 0 || this.rt >= this.hl) {
      this.settings_rt = this.settings_rt * -1;
    }

    var newo = 1 - this.rt / this.hl;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.closePath();

    var cr = this.r * newo;

    gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      cr <= 0 ? 1 : cr
    );
    gradient.addColorStop(0.0, "rgba(255,255,255," + newo + ")");
    gradient.addColorStop(this.stop, "rgba(126,101,83," + newo * 0.6 + ")");
    gradient.addColorStop(1.0, "rgba(126,101,83,0)");
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  move(WIDTH, HEIGHT) {
    this.x += (this.rt / this.hl) * this.dx;
    this.y += (this.rt / this.hl) * this.dy;
    if (this.x > WIDTH || this.x < 0) this.dx *= -1;
    if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
  }
}

const CesticeHome = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    let animationFrameId;

    const init = () => {
      pixies = [];
      for (var i = 0; i < MAX_PARTICLES; i++) {
        let x = WIDTH * Math.random();
        let y = HEIGHT * Math.random();

        let r = (rmax - 1) * Math.random() + 10;

        let dx = Math.random() * xmax * (Math.random() < 0.5 ? -1 : 1);
        let dy = Math.random() * ymax * (Math.random() < 0.5 ? -1 : 1);

        let hl = (ttl / DRAW_INTERVAL) * (r / rmax);

        let rt = Math.random() * hl;

        let settings_rt = Math.random() + 1;

        let stop = Math.random() * 0.2 + 0.4;

        pixies.push(new Circle(x, y, r, dx, dy, hl, rt, settings_rt, stop));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      for (var i = 0; i < pixies.length; i++) {
        pixies[i].fade();
        pixies[i].move(WIDTH, HEIGHT);
        pixies[i].draw(ctx);
      }
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const handleResize = (e) => {
      ctx.canvas.height = window.innerHeight;
      ctx.canvas.width = window.innerWidth;
    };

    //DEFINISE CANVAS SIZE INICIJALNO
    handleResize();

    //GENERISI PARTICLES
    init();

    //START ANIMATE
    animate();

    //HANDLE RESIZE
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas
      style={{
        position: "absolute",
        top: "0%",
        left: "0%",
        width: "100vw",
        height: "100vh",
        display: "block",
        //background: "linear-gradient(#040429, #257eb7)",
        zIndex: "1",
      }}
      ref={canvasRef}
      {...props}
    ></canvas>
  );
};

export default CesticeHome;
