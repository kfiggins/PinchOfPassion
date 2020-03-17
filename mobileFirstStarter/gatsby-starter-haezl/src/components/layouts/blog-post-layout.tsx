import * as React from "react"
import Image, { FluidObject } from "gatsby-image"
import Card from "@material-ui/core/Card"
import Responsive from "react-responsive"
import { FacebookProvider, Comments } from "react-facebook"

import THEME from "../../theme"
import FabButton from "../shared/FabButton"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

interface IContentAreaProps {
  children: React.ReactNode
  title: string
  recipe: any
  location: any
}

interface IHeaderArea {
  cover: FluidObject
}

interface IBlogPostLayout {
  children: React.ReactNode
  title: string
  cover: FluidObject
  recipe: any
  location: any
}

const ContentArea = ({ title, children, recipe, location }: IContentAreaProps) => (
  <>
    <Default>
      <Card style={{ padding: 50 }}>
        <h1 style={{ marginBottom: 30, marginTop: 0, textAlign: "center" }}>
          {title}
        </h1>
        {children}
        {recipe && (
          <div>
            <div style={{ fontWeight: "bold" }}>{title}</div>
            <div>Prep Time: {recipe.prepTime}</div>
            <div>Cook Time: {recipe.cookTime}</div>
            {recipe.servings && <div>Servings: recipe.servings</div>}
            <div>
              <h4>Ingredients</h4>
              <ul>
                {recipe.ingredients &&
                  recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
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
        {children}
        {recipe && (
          <div>
            <div style={{ fontWeight: "bold" }}>{title}</div>
            <div>Prep Time: {recipe.prepTime}</div>
            <div>Cook Time: {recipe.cookTime}</div>
            {recipe.servings && <div>Servings: recipe.servings</div>}
            <div>
              <h4>Ingredients</h4>
              <ul>
                {recipe.ingredients &&
                  recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
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

export default ({ title, cover, children, recipe, location }: IBlogPostLayout) => {
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
          <ContentArea title={title} recipe={recipe} location={location}>{children}</ContentArea>
        </div>
      </Default>
      <Mobile>
        <HeaderArea cover={cover} />
        <ContentArea title={title} recipe={recipe} location={location}>{children}</ContentArea>
      </Mobile>
    </div>
  )
}
