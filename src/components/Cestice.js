import React, { useRef, useEffect } from "react";

const MAX_PARTICLES = 100;
const DRAW_INTERVAL = 60;

let pixies = [];
let gradient = null;
//time_to_live – used to calculate hl–or the half-life–of
//each particle
let ttl = 8000;
//defines the maximum number of pixels a particle
//can move each frame
let xmax = 5;
let ymax = 2;
//maximum radius a particle can achieve
//used in conjunction with hl to determine how the ratio of
//maximum speed and full opacity of each particle in each frame
let rmax = 10;
//let rt = 1;

//HOW THE STORY GOES:
//Definise se prvo cestica sa random, x,y,r, constama pomjeraja dx,dy
//sa iluminosity brojnom vrijednosu hl proprocionalna r, sto je veci r duzi je zivot
//rt je vrijedno koja je promjenjiva tokom zivota cestice i koja je u
//startu manja od hl, za neki random value  Math.random() * this.hl;[0~0.9]
//i sa startna dodajuca rt, this.settings.rt, koja je relativno male vrijednosti (1 - 1.9).

//I sad nakon sto su cestice definisane odlaze u fade() i kretnju() i drawing().
//u fade funkciji se mijenja rt, uvecava ili smanjuje u zvisnosti os predznaka
//this.settings.rt promjenjive, u skladu sa tim mijenja se i var newo = 1 - this.rt / this.hl
//odnosnio opacity, ako je rt =hl, newo =0, cestica nevidljiva, ako je rt=0, newo=1,
//cestica potpuno vidljiva
//Unutar move metode promjena x, y je sa rt , odnosno /(you’ll notice I have them
//moving faster as they get smaller and more transparent).
////sa povecavanjem rt povecava se ubrzanje (this.x += (this.rt / this.hl) * this.dx;)
//a u isto vrijeme smanjuje newo (var newo = 1 - this.rt / this.hl; )
//U draw funkciji se kontrolisu granicne vrijednosti rt, i odredjuje gradient svake
//cestice preko createRadialGradient methode

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
    //mjenjaj rt, dodaj na staru vrijednost konstantnu promjenu this.settings.rt
    this.rt += this.settings_rt;
  }

  draw(ctx) {
    //rt ide od nula do hl, jer na tim granicama se mijenja predznak this.settings.rt
    if (this.rt <= 0 || this.rt >= this.hl) {
      //promjeni predznak konstane promjene
      this.settings_rt = this.settings_rt * -1;
    }
    //rt ide od nula do hl, jer na tim granicama se mijenja predznak this.settings.rt
    //kad je this.rt = this.hl, newo je 0, inisible, kade je rt=0, newo je=1 full visible
    //calculate opacity values betwen 0-1
    var newo = 1 - this.rt / this.hl;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.closePath();

    var cr = this.r * newo;

    //Then you can call createRadialGradient() to fill in the circles
    //we just created with color, which I have set with three color stops
    //at various opacities to really make the particles look like they’re glowing.
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
  //just moves the particle according to the settings
  //(you’ll notice I have them moving faster as they
  //get smaller and more transparent).
  move(WIDTH, HEIGHT) {
    //ovdije se samo rt mijenjea u zivotnom cilklusu cestice
    //sa povecavanjem rt povecava se ubrzanje a smanjuje newo
    this.x += (this.rt / this.hl) * this.dx;
    this.y += (this.rt / this.hl) * this.dy;
    if (this.x > WIDTH || this.x < 0) this.dx *= -1;
    if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
  }
}

const Cestice = (props) => {
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

        //life of the particle direktno proporciaonalno radiusu
        let hl = (ttl / DRAW_INTERVAL) * (r / rmax);

        //ovo je startna rt ove cestice, startna vrijednost
        //manja od this.hl za random value
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
        position: "fixed",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100%",
        display: "block",
        //background: linear-gradient(var(--deep-scy),#040429, var(--clr-complement), var(--clr-white));
        background:
          "radial-gradient(farthest-corner at 50% 100%,var(--clr-white),var(--clr-complement),#040429,var(--deep-scy))",
        zIndex: "-1",
      }}
      ref={canvasRef}
      {...props}
    ></canvas>
  );
};

export default Cestice;
