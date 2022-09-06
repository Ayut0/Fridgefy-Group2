import React from 'react'
import { RecipeContext } from "./RecipeContext";
import { useContext } from "react";
import { dataBaseService } from '../../Backend/FirebaseUtils';
import{ useAuthContext } from '../../AuthContext'
import { getRecipeSummary } from '../../Backend/FetchRecipes';
import { StyledCard } from "./Styles/Card.styles";


export default function SingleRecipe(recipe) {
  const {getMyRecipes,addModal}=useContext(RecipeContext);
  const {user}=useAuthContext();

  const handleAdd=()=>{
    const myrecipes = {
      userId:user.uid,
      id:recipe.recipe.id,
      image:recipe.recipe.image,
      imageType:recipe.recipe.imageType,
      title:recipe.recipe.title
    };
    dataBaseService.add(myrecipes)
    getMyRecipes()
  };

  // const handleMore=()=>{
  //   addModal(getRecipeSummary(recipe.recipe.id))
  // }



  return (
    <StyledCard>
    <div className='recipecard'>
    <div className='prueba'>

    <div>
      <h4>{recipe.recipe.title}</h4>
      </div>
      <div>
      <figure><img src={`${recipe.recipe.image}`} alt="" /></figure>
      <button type='button' onClick={handleAdd}>Add</button>
      <button type='button'  >More</button>
      </div>   
       </div>

    </div>
    </StyledCard>
  )
}
