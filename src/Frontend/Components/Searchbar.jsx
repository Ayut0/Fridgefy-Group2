import React,{ useState,useRef,useEffect} from 'react'
import {getRecipeDataViaKeyword} from '../../Backend/FetchRecipes';
import { RecipeContext } from "./RecipeContext";
import { useContext } from "react";
import { StyledSearch } from "./Styles/Searchbar.styles";


import SingleRecipe from './Card';
import axios from 'axios';

export default function Searchbar() {
    const searchInput=useRef();
    const [option,setOption]=useState("5");
    const [cuisine,setCuisine]=useState("");
    const[diet,setDiet]=useState("");
    const[intolerance,setIntolerance]=useState("")
    const {recipes,addRecipe}=useContext(RecipeContext)

    // useEffect(()=>{async function fetchApi(){
    //     const response=await axios.get(`${process.env.REACT_APP_SPOONACULAR_RANDOM_URL}?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=10&tags=dessert`);
    //     console.log(response.data.recipes)
    //     addRecipe(response.data.recipes)
    // }
    // fetchApi()
    // },[]);
    const handleCuisine=(e)=>{
      setCuisine(e.target.value)
    }
    const handleDiet=(e)=>{
      setDiet(e.target.value)
    }
    const handleIntolerance=(e)=>{
      setIntolerance(e.target.value)
    }
    const handleNumber=(e)=>{
        setOption(Number(e.target.value))
    }
    const searchHandler=(e)=>{
        const search=searchInput.current.value
        e.preventDefault()
        addRecipe(getRecipeDataViaKeyword(search,cuisine,diet,intolerance,option))
    }
  return (
    
    <>

    <StyledSearch>

    <form onSubmit={searchHandler}>
    <div className='search'>

      
      <input ref={searchInput} type="text" />
      <button>Search</button>
      </div>


      <div>
      <select onChange={handleNumber} name="numbers" id="">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </select>
      <select onChange={handleDiet} name="filterDiet" id="">
        <option value="">None</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="paleo">Paleo</option>
        <option value="glutenfree">GlutenFree</option>
      </select>
      <select onChange={handleCuisine} name="filterCuisine" id="">
        <option value="">None</option>
        <option value="american">American</option>
        <option value="italian">Italian</option>
        <option value="french">French</option>
        <option value="korean">Korean</option>
        <option value="chinese">Chinese</option>
      </select>
      <select onChange={handleIntolerance} name="filterIntolerance" id="">
        <option value="">None</option>
        <option value="egg">Egg</option>
        <option value="peanut">Peanut</option>
        <option value="gluten">Gluten</option>
        <option value="grain">Grain</option>
        <option value="sesame">Sesame</option>
      </select>
      </div>

    </form>

    </StyledSearch>
  
    {recipes.map((recipe)=>(<SingleRecipe recipe={recipe} key={recipe.id} />))}
    </>
  )
}
