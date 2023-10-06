import MovieCard from "./MovieCard";



const MovieList =({film })=>{
    
    return(
        <div  className="model" >

{film.map((el,index)=>{return(<div><MovieCard filmKids={el}/></div>)
})
}


        </div>
    )
}
export default MovieList ;