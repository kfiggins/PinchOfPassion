import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/index-layout"
import BlogList from "../components/blog-list/blog-list"
import { FluidObject } from "gatsby-image"
import {
  TextField,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import SearchRecipes from "../components/layouts/search-recipes"

interface IProps {
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: {
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
            description: string
            cover: {
              childImageSharp: {
                fluid: FluidObject
              }
            }
            fields: {
              slug: string
            }
            excerpt: string
          }
        }
      }[]
    }
  }
}

function Index(props) {
  const [filteredPosts, setFilteredPosts] = useState([])
  const [query, setQuery] = useState("")

  const posts = props.data.allMarkdownRemark.edges.map((e: any) => e.node)
  const totalCount = props.data.allMarkdownRemark.totalCount

  const hasSearchResults = filteredPosts && query !== ""
  const finalPosts = hasSearchResults ? filteredPosts : posts
  return (
    <Layout>
      <SearchRecipes {...{ posts, setQuery, setFilteredPosts }} />
      <BlogList posts={finalPosts} totalCount={totalCount} />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            cover {
              childImageSharp {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            coverList {
              childImageSharp {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
