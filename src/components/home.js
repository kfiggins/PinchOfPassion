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
    <div style={{ margin: "50px 0" }}>
      <Image
        fluid={data.banner.childImageSharp.fluid}
      />
    </div>
  )
}

export default Home
