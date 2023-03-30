import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getRecipes, 
    filterRecipesByDietName,
} from "../../redux/actions.js";
import { Link } from 'react-router-dom';
import Paginated from '../../components/Paginated/Paginated';

import Card from "../../components/Card/Card";

const Home = () => {  
    //hooks
    const dispatch = useDispatch(); //use this const for dispatch actions
    const allRecipes = useSelector ((state) => state.recipes) //this array of state, brings from reducer, all the things that are in state.recipes in this const - replaces mapStateToProps
    // const [filter, setFilter] = useState({ //we set a initial state for every filter
    //     abc: 'default',
    //     score: 'default',
    //     diets: 'All',
    //     origin: 'All'
    // })

    //Paginated
    const [order, setOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1); //1 is the current page, starts in 1
    const [recipesPerPage] = useState(9); //9 recipes per page
    const indexOfLastRecipe = currentPage * recipesPerPage; //index of last is in position 9
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; // the index of the first recipe is 0
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe) //slice takes a part of array according to the passed parameter - slice(start, end (this end dosent count))

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    } //sets de currentpage in the numerpage that we are

  
    const handleClick = (event) => { //the function of the event always comes before the button 
        event.preventDefault(); //prevents reload by default 
        dispatch(getRecipes()) //reset the page, and brings all again
    }

    const handleFilterDietName = (event) =>{
        // setFilter({...filter, diets: event.target.value}) 
        dispatch(filterRecipesByDietName(event.target.value))
        // setCurrentPage(1)
        // setOrder (`${event.target.value}`)
    }

    const handleFilterByCreateIn = (event) =>{
        // setFilter({...filter, origin: event.target.value})   
    }

    useEffect(() => { //component didmount (method that is called after the component is rendered) 
        dispatch(getRecipes()) //this dispatch replaces mapDispatchToProps - brings the recipes when the component is assembled
    }, [dispatch]) //here goes the dependencies between both models (in this case is empty)

    // console.log(currentRecipes);
    return (
        <div>
            <h1>PI FOOD</h1>
            <Link to = '/recipes'>Recipes</Link>
            <button onClick={(event) => {handleClick(event)}}>
                Reload all recipes
            </button>
            <div className="filters">
                <select>
                    <option value="default">Order By</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
                <select >
                    <option value="default">Score</option>
                    <option value="Higher Score">Highest Score</option>
                    <option value="Lower Score">Lowest Score</option>
                </select>
                <select onChange={event => handleFilterDietName(event)}>
                    <option value="All">All Diets</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="vegan">Vegan</option>
                    <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                    <option value="dairy free">Dairy Free</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="fodmap friendly">Fodmap Friendly</option>
                    <option value="ketogenic">Keto</option>
                    <option value="whole 30">Whole 30</option>
                </select>
                <select onChange={event => handleFilterByCreateIn(event)}>
                    <option value="All">Create In</option>
                    <option value="database">DataBase</option>
                    <option value="api">Api</option>
                </select>
                <Paginated
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}
                paginated={paginated}
                />
                <div className="cards-container">
                    {currentRecipes?.map ((item, index) => {
                    return (
                        <Card 
                        key={index.id}
                        id={item.id}
                        name={item.name} 
                        image={item.image}
                        diets={item.diets} 
                        />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}




export default Home;