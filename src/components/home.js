/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      banner: file(absolutePath: { regex: "/flowersAndBerries.jpg/" }) {
        childImageSharp {
          fluid( quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  return (
    <div style={{ margin: "50px 0", position: "relative", textAlign: "center", color: "white" }}>
      <Image
        fluid={data.banner.childImageSharp.fluid}
      />
      <div style={{ position: "absolute", top: "40%", left: "29%", textAlign: "center" }}>

        <h2 style={{ fontFamily: "Montserrat", fontSize: "48px", textTransform: "uppercase" }}>
          A Pinch Of Passion
          </h2>
        <div>
          -----
        </div>
        <div style={{ fontFamily: "Lato", fontSize: "13px", fontWeight: "700" }}>Balancing Health and Happiness</div>
      </div>
    </div>
  )
}

export default Home
