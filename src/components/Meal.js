import React from "react";
import Mealitem from "./components/Mealitem";
const Meal=()=>{
    return(
        <div className="main">
           <div className="heading">
            <h1>Search Your Food Recipe</h1>
            <h4>INDIAN  ITALIAN  AMERICAN  CHINESE</h4>
            </div>
            <div className="SearchBox">
                <input type="search" className="search-bar" placeholder="Enter the food name">

                </input>
            </div>
            <div className="container">
            <Mealitem/>
            </div>
        </div>

    )
}
export default Meal;