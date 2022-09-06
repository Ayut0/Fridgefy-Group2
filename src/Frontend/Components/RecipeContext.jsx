import React, { createContext, useState } from "react"
import { onSnapshot } from "firebase/firestore";
import { dataBaseService } from '../../Backend/FirebaseUtils';

export const RecipeContext = createContext();

export function RecipeProvider({children}){

  const [recipes,setRecipe] = useState([])
  const[myRecipes,setMyRecipes] = useState([])
  const [ingredients, setIngredients] = useState('')
  const [myIngredients, setMyIngredients] = useState([])


  const addRecipe=(data)=>{
      const recipes = Promise.resolve(data)
      recipes.then(value => {
        setRecipe(value)
        console.log(value)
      }).catch(err => {
        console.log(err)
      })
  }

  const getMyRecipes = () => {
      dataBaseService.get().then((QuerySnapshot) => {
        setMyRecipes(QuerySnapshot.docs.map((doc) => (doc.data())))
    })
  }


  // const addModal=(summary)=>{
  //   const sum=Promise.resolve(summary)
  //     sum.then(value=>{
  //       setRecipeModal(value)
  //     }).catch(err=>{
  //       console.log(err)
  //     })
  // }

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

  const getMyIngredients = (userId) =>{
    dataBaseService.getIngredient(userId).then((QuerySnapshot) => {
      setMyIngredients(QuerySnapshot.docs.map((doc) => (doc.data())))
    })
  }

  return(
    <RecipeContext.Provider value={{

      recipes:recipes, addRecipe, myRecipes:myRecipes, getMyRecipes, onTimeUpdate, ingredients:ingredients, setIngredients, getMyIngredients, myIngredients:myIngredients, setMyIngredients

    }}>
        {children}
    </RecipeContext.Provider>
  )
}