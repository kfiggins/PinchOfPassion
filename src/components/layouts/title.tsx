import * as React from "react"
import { Link } from "gatsby"

import Grid from "@material-ui/core/Grid"
import THEME from "../../theme"

interface IProps {
  title: string
  subTitle: string
}

export default ({ title, subTitle }: IProps) => {
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
          fontWeight: 100,
          letterSpacing: 10,
          textSizeAdjust: "100%",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          color: THEME.author.desc.color,
          fontSize: THEME.author.desc.fontSize,
          maxWidth: THEME.author.desc.maxWidth,
          margin: "20px 0 0 0",
          textAlign: "center",
          fontFamily: "Caveat"
        }}>{subTitle}</p>
    </Grid>
  )
}
