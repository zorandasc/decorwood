import React from 'react';
import BackGround from './BackGround'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled, { keyframes } from "styled-components"

const Hero = () => {
    return ( 
        <Wrapper>
            {/* You can use a GatsbyImage component if the image is dynamic */}
            <StaticImage
                className="bcg"
                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                aspectRatio=""
                // This is a presentational image, so the alt should be an empty string
                alt=""
                placeholder="blurred"
                src={"../images/47677.jpg"}
                formats={["auto", "webp", "avif"]}
            />
            <div className='content'>
                {/* Any content here will be centered in the component */}
                <article>
                    <h3>If you can dream it we can created</h3>
                    <h1>let your gift be uniq and stylish</h1>
                    <Link to="/galerija">Galerija</Link>
                </article>
            </div>
    </Wrapper>
        
    );
};

const fadeIn = keyframes`
  from{
    background-color:rgb(0,0,0,0.8);
  }
  to{
    background-color:rgba(0,0,0,0.4);
  }

`



const Wrapper = styled.section`
    display: grid;
    .bcg{
        grid-area: 1/1;
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
        max-height: 100vh,
        
    }
    .content{
        // By using the same grid area for both, they are stacked on top of each other
        grid-area: 1/1;
        position: relative;
          // This centers the other elements inside the hero component
        place-items: center;
        display: grid;
        article {
            color: var(--clr-white);
            width: 85vw;
            max-width: 800px;
            text-align: center;
            h1 {
                text-transform: uppercase;
                font-weight: 500;
                line-height: 1.25;
                margin: 2rem 0 3rem 0;
                letter-spacing: 3px;
            }
            h3 {
                font-weight: 400;
                font-family: "Caveat", cursive;
            }
            a {
                background: transparent;
                border: 2px solid var(--clr-white);
                color: var(--clr-white);
                padding: 0.25rem 1rem;
                text-transform: capitalize;
                letter-spacing: 5px;
                font-size: 1rem;
                cursor: pointer;
                transition: var(--transition);
            }
            a:hover {
                background: var(--clr-white);
                color: var(--clr-black);
            }
        }
        animation: ${fadeIn} 2s ease-in-out 1 forwards;
    }
`

export default Hero;