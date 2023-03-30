import React from "react";
import { Link } from 'react-router-dom';

const Card = ({image, name, diets, id}) => {
    return (
        <div>
            <img src= { image } alt="recipe imagen not found" />
            <h3>{ name }</h3>
            <p>{diets + " "}</p>
            <div>
         <Link to={`/detail/${id}`}>
             <button className='btn'>View Recipe</button>
         </Link>
         </div>
     </div>
    )

}

export default Card;

//  <Link to={"/detail/" + id}>
/* <button className='btn'>View Recipe</button>
</Link> */



