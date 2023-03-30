//in this file we rendered with the paginated
import React from "react";
import './Paginated.css'

const Paginated = ({recipesPerPage, allRecipes, paginated}) => {
    const pageNumbers = []
    // console.log(allRecipes);

    for (let i = 0; i <= Math.ceil(allRecipes/recipesPerPage)-1; i++) { //math.ceil rounds the result of all recipes divided by recipes per page
        pageNumbers.push(i+1) 
    }    
    return(
        <nav>
            <ul className="paginated">
                { pageNumbers?.map((number) => (
                    <button className="number" key={number} > 
                        <a href='#/' onClick={() => paginated(number)}> {number} </a>
                    </button>
                ))}
            </ul>
        </nav>
    );
}   


export default Paginated; 




