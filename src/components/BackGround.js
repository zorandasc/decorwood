import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

const BackGround = ({children}) => {
    const {image} = useStaticQuery(graphql`
        query{
            image:file(relativePath: {eq: "mainBcg.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    `)
    const pluginImage = getImage(image);
    return (
        <BgImage image={pluginImage}>
            {children}
        </BgImage>
            
        
    );
};

export default BackGround;