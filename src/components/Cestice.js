import React, { useRef, useEffect } from "react";

const MAX_PARTICLES = 100;
const DRAW_INTERVAL = 60;

let pixies = [];
let gradient = null;
let ttl = 8000;
let xmax = 5;
let ymax = 2;
let rmax = 10;
let rt = 1;

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
    gradient.addColorStop(this.stop, "rgba(77,101,181," + newo * 0.6 + ")");
    gradient.addColorStop(1.0, "rgba(77,101,181,0)");
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

const resizeCanvasToDisplaySize = (canvas) => {
  //canvas.getBoundingClientRect() ce nam dati css-om definisane
  //vrijednosti canvasa (cijeli viewport).
  //Inicijalno ctx.canvas.width ili cnavas.width je oko 300px
  const { width, height } = canvas.getBoundingClientRect();
  //console.log(width, height);
  if (canvas.width !== width || canvas.height !== height) {
    console.log("kurec");
    canvas.width = width;
    canvas.height = height;
    return true;
  }
  return false;
};

const init = (WIDTH, HEIGHT) => {
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

const Cestice = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (var i = 0; i < pixies.length; i++) {
        pixies[i].fade();
        pixies[i].move(ctx.canvas.width, ctx.canvas.height);
        pixies[i].draw(ctx);
      }
      resizeCanvasToDisplaySize(canvas);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    init(ctx.canvas.width, ctx.canvas.height);

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas
      style={{
        position: "absolute",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100%",
        border: "2px solid blue",
        zIndex: "100",
      }}
      ref={canvasRef}
      {...props}
    ></canvas>
  );
};

export default Cestice;
