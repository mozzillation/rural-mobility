import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Immagine = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
         allImageSharp {
           edges {
             node {
               fluid(maxWidth: 500) {
                 ...GatsbyImageSharpFluid
                 originalName
               }
             }
           }
         }
       }
  `)



   const image = data.allImageSharp.edges.find(
     edge => edge.node.fluid.originalName === src
   )

   if (!image) {
     return null
   }
   return (
    <div className="imageWrapper">
    <Img fluid={image.node.fluid} />
    </div>
   )
}

export default Immagine
