import React from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FacebookProvider, Comments } from "react-facebook"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  console.log(location)
  const recipe = post.frontmatter.recipe

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: "5px",
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              display: `block`,
              marginBottom: "5px",
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        {recipe && (
          <div>
            <div style={{ fontWeight: "bold" }}>{post.frontmatter.title}</div>
            <div>Prep Time: {recipe.prepTime}</div>
            <div>Cook Time: {recipe.cookTime}</div>
            {recipe.servings && <div>Servings: recipe.servings</div>}
            <div>
              <h4>Ingredients</h4>
              <ol>
                {recipe.ingredients &&
                  recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ol>
            </div>
            <div>
              <h4>Instructions</h4>
              <ol>
                {recipe.instructions &&
                  recipe.instructions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ol>
            </div>
            <div>
              <h4>Notes</h4>
              <ul>
                {recipe.notes &&
                  recipe.notes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
        )}
        <FacebookProvider appId="560650034801447">
          <Comments href={location.href} />
        </FacebookProvider>
        <hr
          style={{
            marginBottom: "5px",
          }}
        />
        <footer></footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featurePhoto {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        recipe {
          prepTime
          cookTime
          servings
          ingredients
          instructions
          notes
        }
      }
    }
  }
`
