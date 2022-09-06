import React, { useRef, useContext} from 'react';
import { RecipeContext } from "./RecipeContext";
import { useAuthContext } from '../../AuthContext';
import { dataBaseService } from '../../Backend/FirebaseUtils';
import { getIngredientsData } from '../../Backend/FetchIngredients';
import FridgeContents from './FridgeContents';


export const MyFridge = () => {
    const searchRef = useRef();
    const { setIngredients, getMyIngredients} = useContext(RecipeContext)
    const { user }=useAuthContext();

    const submitHandler = async (e) =>{
        e.preventDefault();
        const keyword = await searchRef.current.value;
        //Set ingredient data to the state
        const result = await getIngredientsData(keyword)
        setIngredients(result)

        //Store a data to firebase
        //New ingredient
        const newIngredient = {
            name: result,
            userId: user.uid
        }
        await dataBaseService.addIngredient(newIngredient)
        await getMyIngredients(user.uid)

        //Reset form
        searchRef.current.value = '';
    }

  return (
    <>
        <h3>My Fridge</h3>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='search ingredients' ref={searchRef} />
            <input type="submit" value="Add" />
        </form>
        <FridgeContents />
    </>
  )
}