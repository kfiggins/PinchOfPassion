import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/blog-post-layout"
import { FluidObject } from "gatsby-image"

interface IBlogPost {
  location: any
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        description: string
        cover: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
        recipe: {
          prepTime: number
          cookTime: number
          servings: number
          ingredients: []
          instructions: []
          notes: []
        }
      }
    }
  }
}

export default ({ data, location }: IBlogPost) => {
  console.log(location)
  const node = data.markdownRemark
  const cover =
    node.frontmatter.cover && node.frontmatter.cover.childImageSharp
      ? node.frontmatter.cover.childImageSharp.fluid
      : null

  return (
    <Layout
      title={node.frontmatter.title}
      description={node.frontmatter.description}
      cover={cover}
      recipe={node.frontmatter.recipe}
      location={location}
    >
      {
        // tslint:disable:react-no-dangerous-html
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
        // tslint:enable:react-no-dangerous-html
      }
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $coverImageMaxWidth: Int!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        cover {
          childImageSharp {
            ... on ImageSharp {
              fluid(maxWidth: $coverImageMaxWidth) {
                ...GatsbyImageSharpFluid_withWebp
              }
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

// featurePhoto {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
