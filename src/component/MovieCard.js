import React from "react";
import ReactStars from "react-stars";

import { useNavigate } from "react-router-dom";
const MovieCard =(props)=>{
    const navigate = useNavigate();
   
    return(
        // houni lCard
        <div className="card">
            <div className="image">
                <img src={props.filmKids.image} alt="erreur" width="280px" height="200px" style={{borderRadius:"30px"}} />
            </div>
            <div>
                <h1>{props.filmKids.titre}</h1>
                <div>
                    {/* 3malet houni les stars */}
                    {<ReactStars
                        
                        count={6}
                        value={props.filmKids.rating}
                        size={24}
                        color={"#ffd700"}
                        edit={false}
                        
                        
                        />
                    }
                </div>
                <div> <p>{props.filmKids.description}</p></div>
               
                <div className="btn-play">
      
      <button className="button" onClick={()=>navigate(`/details/${props.filmKids.id}`)} >Play</button>
      </div>
            </div>

        </div>
    )
}
export default MovieCard;