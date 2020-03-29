import React from "react"
import TimerIcon from "@material-ui/icons/Timer"
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms"
import RestaurantIcon from "@material-ui/icons/Restaurant"
import Helmet from "react-helmet"

import styles from "./index.module.css"

export interface IRecipe {
  prepTime: number
  cookTime: number
  servings: number
  ingredients: string[]
  instructions: string[]
  notes: string[]
}

export default function Recipe(props: {
  recipe: IRecipe
  title: string
  description: string
}) {
  const { recipe, title, description } = props
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          async
          defer
          src="//assets.pinterest.com/js/pinit.js"
        ></script>
      </Helmet>
      <div id={"recipe"}>
        <hr />
        <h2 style={{ fontWeight: "bold" }}>{title}</h2>
        <hr />
        <div style={{ display: "flex", alignItems: "center" }}>
          <TimerIcon className={styles.recipeLogo} /> Prep Time:{" "}
          {recipe.prepTime} minutes
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AccessAlarmsIcon className={styles.recipeLogo} /> Cook Time:{" "}
          {recipe.cookTime} minutes
        </div>
        {recipe.servings && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <RestaurantIcon className={styles.recipeLogo} /> Servings:{" "}
            {recipe.servings}
          </div>
        )}
        <a
          href="https://www.pinterest.com/pin/create/button/"
          data-pin-do="buttonBookmark"
        ></a>
        <div style={{ marginTop: 20 }}>
          <div>{description}</div>
        </div>
        <div style={{ paddingTop: 20 }}>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients &&
              recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
        <div>
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions &&
              recipe.instructions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ol>
        </div>
        <div>
          <h3>Notes</h3>
          <ul>
            {recipe.notes &&
              recipe.notes.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
}
