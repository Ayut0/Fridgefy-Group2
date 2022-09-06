import React from 'react'
import { RecipeContext } from "./RecipeContext";
import { useContext,useEffect } from "react";
import UserRecipe from './UserRecipe';
export default function MyRecipes() {
    const {myRecipes,getMyRecipes}=useContext(RecipeContext)
    useEffect(() => {
      getMyRecipes()
    },[])
    
  return (
    <section>
        <div>
            <h3>My Recipes</h3>
        </div>
        <ul>
          {myRecipes.map((recipe)=><UserRecipe  id={recipe.id} name={recipe.title}/>)}
        </ul>
    </section>
  )
}
