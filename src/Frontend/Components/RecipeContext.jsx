import React, { createContext, useState } from "react"
import MyRecipes from "./MyRecipes";
import { onSnapshot } from "firebase/firestore";
import { dataBaseService } from '../../Backend/FirebaseUtils';

export const RecipeContext=createContext();

export function RecipeProvider({children}){
  const [recipes,setRecipe]=useState([])
  const[myRecipes,setMyRecipes]=useState([])
  const [recipeModal,setRecipeModal]=useState([])

  const addRecipe=(data)=>{
      const recipes=Promise.resolve(data)
      recipes.then(value=>{
        setRecipe(value)
        console.log(value)
      }).catch(err=>{
        console.log(err)
      })
  }

  const getMyRecipes=()=>{
      dataBaseService.get().then((QuerySnapshot) =>{
        setMyRecipes(QuerySnapshot.docs.map((doc) =>(doc.data())))
    })
    console.log(myRecipes)
  }

  const addModal=(summary)=>{
    const sum=Promise.resolve(summary)
      sum.then(value=>{
        setRecipeModal(value)
      }).catch(err=>{
        console.log(err)
      })
  }

  const onTimeUpdate = (ref) =>{
    const updatedData = onSnapshot(ref, (QuerySnapshot)=>{
        setMyRecipes(
            QuerySnapshot.docs.map((doc) => ({
                ...doc.data(),
            }))
        )
    })
    return updatedData;
}

  return(
    <RecipeContext.Provider value={{
      recipes:recipes,addRecipe,myRecipes:myRecipes,getMyRecipes, onTimeUpdate,addModal,recipeModal
    }}>
        {children}
    </RecipeContext.Provider>
  )
}