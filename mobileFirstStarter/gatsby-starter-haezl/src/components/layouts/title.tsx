import * as React from "react"
import { Link } from "gatsby"

import Grid from "@material-ui/core/Grid"
import THEME from "../../theme"

interface IProps {
  title: string
}

export default ({ title }: IProps) => {
  return (
    <Grid
      container={true}
      justify="center"
      alignItems="center"
      direction={"column"}
    >
      <h1
        style={{
          color: THEME.author.title.color,
          fontSize: THEME.author.title.fontSize,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {title}
      </h1>
    </Grid>
  )
}
