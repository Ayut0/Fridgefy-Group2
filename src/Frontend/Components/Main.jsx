import React from 'react'
import Searchbar from './Searchbar';
import { RecipeProvider } from './RecipeContext';
import { FetchRecipes } from '../../Backend/FetchRecipes';
import MyRecipes from './MyRecipes';
import { MyFridge } from './MyFridge';
import { StyledMain } from "./Styles/Main.styles";


export default function Main() {
  return (
    <>
    <StyledMain>
    <div className='content'>
        <RecipeProvider>
        <div className='myfridge'>
            <MyFridge />
            </div>
          <div className='searchbar'>
            <Searchbar/>
         </div>
         <div className='myrecipies'>
            <MyRecipes/>
            </div>
            
        </RecipeProvider>
        </div>
        </StyledMain>

    </>
  )
}
