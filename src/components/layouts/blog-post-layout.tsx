import * as React from "react"
import Image, { FluidObject } from "gatsby-image"
import Card from "@material-ui/core/Card"
import Responsive from "react-responsive"
import { FacebookProvider, Comments } from "react-facebook"

import THEME from "../../theme"
import FabButton from "../shared/FabButton"
import Recipe, { IRecipe } from "../recipe"
import { Link } from "gatsby"
import { Button } from "@material-ui/core"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

interface IContentAreaProps {
  children: React.ReactNode
  title: string
  description: string
  recipe: IRecipe
  location: any
}

interface IHeaderArea {
  cover: FluidObject
}

interface IBlogPostLayout {
  children: React.ReactNode
  title: string
  description: string
  cover: FluidObject
  recipe: IRecipe
  location: any
}

const ContentArea = ({
  title,
  children,
  recipe,
  location,
  description,
}: IContentAreaProps) => (
  <>
    <Default>
      <Card style={{ padding: 50 }}>
        <h1 style={{ marginBottom: 30, marginTop: 0, textAlign: "center" }}>
          {title}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Link
            to={`${location.pathname}#recipe`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined">Jump to Recipe</Button>
          </Link>
        </div>
        {children}
        {recipe && (
          <Recipe recipe={recipe} title={title} description={description} />
        )}
        <FacebookProvider appId="560650034801447">
          <Comments href={location.href} />
        </FacebookProvider>
      </Card>
    </Default>
    <Mobile>
      <Card style={{ padding: 15 }}>
        <h1
          style={{
            marginBottom: 30,
            marginTop: 0,
            marginLeft: 70,
            marginRight: 70,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Link
            to={`${location.pathname}#recipe`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined">Jump to Recipe</Button>
          </Link>
        </div>
        {children}
        {recipe && (
          <Recipe recipe={recipe} title={title} description={description} />
        )}
        <FacebookProvider appId="560650034801447">
          <Comments href={location.href} />
        </FacebookProvider>
      </Card>
    </Mobile>
  </>
)

const HeaderArea = ({ cover }: IHeaderArea) => {
  const goBack = () => window.history.back()

  return (
    <>
      <FabButton onClickHandler={goBack} />
      <div style={{ height: "auto", width: "auto" }}>
        {cover ? <Image fluid={cover} /> : null}
      </div>
    </>
  )
}

export default ({
  title,
  description,
  cover,
  children,
  recipe,
  location,
}: IBlogPostLayout) => {
  return (
    <div style={{ backgroundColor: THEME.blogPost.layout.backgroundColor }}>
      <Default>
        <div
          style={{
            maxWidth: THEME.blogPost.layout.cardMaxWidth,
            margin: "0 auto",
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 40,
          }}
        >
          <HeaderArea cover={cover} />
          <ContentArea
            title={title}
            recipe={recipe}
            location={location}
            description={description}
          >
            {children}
          </ContentArea>
        </div>
      </Default>
      <Mobile>
        <HeaderArea cover={cover} />
        <ContentArea
          title={title}
          recipe={recipe}
          location={location}
          description={description}
        >
          {children}
        </ContentArea>
      </Mobile>
    </div>
  )
}
