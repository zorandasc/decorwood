import React from "react";
import styled from "styled-components";

//nasa custom made hook funkcija koja se trigeruje samo
//na aktivnoj slici, offset=0
function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    //ne radi nista ili ako nije aktivan ili ako kompneneta
    //uopste nije inicijalzovana
    if (!ref.current || !active) {
      return;
    }

    //objekat koji definise parametre aktivne slike
    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    //refence slike koja je aktivna
    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        //dobavi granice trenutne aktivne slike
        state.rect = el.getBoundingClientRect();
      }
      //DOBAVI POLOZAJ MISA
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;

      //px i py su brojevi od 0 do 1
      //relativni polazaji misa u odnosu na kartu
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      //a onda ih dalje sutenom prem css, kao css promjenjive
      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };
    //PRATI POLOZAJ MISA NA AKTIVNOJ KARTI
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const Slida = ({ slide, offset }) => {
  const zyndex = offset === 0 ? 100 : 100 - Math.abs(offset);

  //AKO JE OFSET 0 ONA JE ACTIV CLAS AKTIVNA
  const active = offset === 0 ? true : null;

  const dir = offset === 0 ? 0 : offset > 0 ? 1 : -1;

  //for Triggering imperative animations samo u slucaju offset === 0
  //nas custom hook useTilt()
  const ref = useTilt(active);

  return (
    <>
      <BcgImage
        data-active={active}
        style={{ backgroundImage: `url('${slide.image}')`, "--dir": dir }}
      ></BcgImage>
      <Wrapper
        ref={ref}
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": dir,
          zIndex: `${zyndex}`,
        }}
      >
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        >
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const BcgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s linear, transform 0.3s ease-in-out;
  pointer-events: none;
  transform: translateX(calc(10% * var(--dir)));
  &[data-active] {
    opacity: 0.7;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  .slideContent {
    width: 30vw;
    max-width: 22rem;
    height: 60vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: grid;
    align-content: center;
    transform-style: preserve-3d;
    //ovo je inicijalna transformacija pojedinacnih slika u odnosu na offset
    transform: perspective(1000px) translateX(calc(100% * var(--offset)))
      rotateY(calc(-45deg * var(--dir)));
    transition: transform 0.5s ease-in-out;

    .slideContentInner {
      transform-style: preserve-3d;
      transform: translateZ(2rem);
      transition: opacity 0.3s linear;
      text-shadow: 0 0.1rem 1rem #000;
      opacity: 0;
      .slideSubtitle,
      .slideTitle {
        color: whitesmoke;
        font-size: 2rem;
        font-weight: normal;
        letter-spacing: 0.2ch;
        text-transform: uppercase;
        margin: 0;
      }
      .slideSubtitle::before {
        content: "— ";
      }
      .slideDescription {
        color: whitesmoke;
        margin: 0;
        font-size: 0.8rem;
        letter-spacing: 0.2ch;
      }
    }
  }
  &[data-active] {
    pointer-events: auto;
  }

  &[data-active] .slideContent {
    /*POSTO SU px i py KOJE DOBIJAMO OD REACTA IZMEDJU 0 i 1  
    mi oduzimamo od tig brojeva 0.5, da bi opseg bio imedju 
    -0.5 i 0.5
    */
    --x: calc(var(--px) - 0.5);
    --y: calc(var(--py) - 0.5);
    opacity: 1;
    transform: perspective(1000px);
    &:hover {
      transition: none;
      //ovo je trannsformacija koja se dogadja na hover
      //i to samo kod aktiven slike
      transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))
        rotateX(calc(var(--y) * 45deg));
    }
  }

  &[data-active] .slideContentInner {
    opacity: 1;
  }
`;

export default Slida;
