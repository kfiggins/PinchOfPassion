import React from "react"
import { OutlinedInput, InputAdornment, FormControl } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

interface IProps {
  posts: any
  setQuery: any
  setFilteredPosts: any
}

export default function SearchRecipes(props: IProps) {
  const { posts, setQuery, setFilteredPosts } = props

  const handleInputChange = event => {
    const inputValue = event.target.value
    // const posts =
    //   props.data.allMarkdownRemark.edges.map((e: any) => e.node) || []
    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.frontmatter
      return (
        description.toLowerCase().includes(inputValue.toLowerCase()) ||
        title.toLowerCase().includes(inputValue.toLowerCase())
      )
    })
    // update state according to the latest query and results
    setQuery(inputValue)
    setFilteredPosts(filteredData)
  }

  return (
    <FormControl fullWidth variant="outlined">
      <OutlinedInput
        type="search"
        onChange={handleInputChange}
        placeholder="Search Recipes..."
        labelWidth={0}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
