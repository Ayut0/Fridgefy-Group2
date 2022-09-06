//Search by ingredients
import axios from "axios"
import FetchIngredients from "./FetchIngredients";

export const getRecipeDataViaKeyword = async (keyword, cuisine, diet, intolerance, number) =>{
    try{
        const res = await axios.get(`${process.env.REACT_APP_SPOONACULAR_RECIPES_URL}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${keyword}&number=${number}&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerance}`);
        const recipes = await res.data.results;
        console.log(recipes);
        return recipes
    }catch(e){
        console.log(e)
    }
}

export const getRecipeSummary = async (id) =>{
    try{
        const res = await axios.get(`${process.env.REACT_APP_SPOONACULAR_SUMMARY_URL}/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
        const summary = await res.data;
        return summary
    }catch(e){
        console.log(e)
    }
}



export const FetchRecipes = () => {

    return (
        <>
            <div>backendTest</div>
            <FetchIngredients />
        </>
    )
  }


