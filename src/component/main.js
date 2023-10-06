
import { Link } from 'react-router-dom';
import './style.css'
import React, { useState } from "react";
const Main =() =>{
    return(
        <div className='header' >
               
                   
                       <Link to="/"> Home</Link>
                       <Link to="/movie">movie</Link>
                       <Link to="/search">search</Link>
                       <Link to="/add">Addmovie</Link>
                   
                

                
        </div>
    )
}
export default Main ;