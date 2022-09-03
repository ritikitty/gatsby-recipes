import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipes(sort: { fields: title, order: ASC }) {
      nodes {
        cooktime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        title
        preptime
      }
    }
  }
`

const AllRecipes = () => {
  const {
    allContentfulRecipes: { nodes: recipes },
  } = useStaticQuery(query)
  console.log(recipes)

  return (
    <section className="recipesContainer">
      <h4>all recipes</h4>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
