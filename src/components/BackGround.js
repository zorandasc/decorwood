import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

//TRENUTNO SE NIGDJE NE KORISTI
//VEC OBICAN GATBY IMAG SA CCSS GRID
const BackGround = ({ children }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mainBcg.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const pluginImage = getImage(image);
  return <BgImage image={pluginImage}>{children}</BgImage>;
};

export default BackGround;
