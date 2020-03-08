import React from "react"
import { Link, graphql } from "gatsby"

import Home from "../components/home"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"

const getPreviewText = description => {
  let newDescription = description
  if (description && description.length > 150) {
    newDescription = description.substring(0, 150) + "..."
  }
  return newDescription
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  console.log(data)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Home />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: "none",
                color: "black",
                flex: "1 0 40%",
              }}
              to={node.fields.slug}
              key={node.fields.slug}
            >
              <article
                style={{
                  border: "1px solid black",
                  padding: "30px",
                  margin: "20px",
                  borderRadius: "7px",
                  borderColor: "lightgray",
                  boxShadow: "lightgrey 3px 3px 7px -1px",
                }}
              >
                <header
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {node.frontmatter.featurePhoto && (
                    <div style={{ height: "300px", marginBottom: "20px" }}>
                      <Image
                        fixed={
                          node.frontmatter.featurePhoto.childImageSharp.fixed
                        }
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                  )}
                  <h3
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    {title}
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        getPreviewText(node.frontmatter.description) ||
                        node.excerpt,
                    }}
                  />
                </section>
              </article>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featurePhoto {
              childImageSharp {
                fixed(height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
