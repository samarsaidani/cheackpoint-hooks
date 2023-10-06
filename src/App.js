
import Main from "./component/main";
import "./component/style.css";

import AddMovie from "./component/addMovie"
import MovieList from "./component/MovieList";
import { useEffect, useState } from "react";
import Search from "./component/searsh";
import { Route, Routes } from "react-router-dom";
import Details from "./component/Details";




function App() {
  const filmKids=[{id:1,titre:"Maléfique",description:"Maléfique est méchante, diabolique, parlante et élégante, et a deux motivations possibles pour ses crimes, soit par orgueil, considérant qu'elle maudit la Princesse Aurore, la Belle au bois dormant, parce que son père, le Roi Stéphane, ne l'a pas invitée au baptême, ",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTjiv6HnTrMjiOJCp7Ds9VPnJGiQJW21ug&usqp=CAU",rating:3 , Link:"https://www.youtube.com/embed/3q7aZX_bqAw?si=XB8QiRx-TiGBuksG"},
              {id:2,titre:"Descendants",description:"1. Personne issue de quelqu'un, d'un ancêtre : Un descendant des croisés. 2. Personne qui se rattache par ses idées à quelqu'un : Un descendant des surréalistes.",image:"https://resizing.flixster.com/HkNPihhEXRX1BjpWmv_-1NoQoeA=/300x300/v2/https://flxt.tmsimg.com/assets/p16961090_v_v13_be.jpg",rating:2 ,Link:"https://www.youtube.com/embed/i8pK6qmtllU?si=Pz3FTZP8L5ozMZZv"},
              {id:3,titre:"la belle et la béte",description:"La Belle et la BêteLeprince de Beaumont, 1757 Inspiré d un conte d Apulée, La Belle et la Bête raconte une histoire de rédemption par l amour sur fond de rivalités entre fées et propose des réflexions très fines sur l amour, les liens familiaux et toutes les formes de pouvoir. L ouvrage rencontre un vif succès.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgN5fTrly0k50RK-TxNeXgdB4gfLZD92BjoP0X5Cb5XbROyVLt-OeGw1MGe29aRem1bUY&usqp=CAU",rating:"4" ,Link:"https://www.youtube.com/embed/v02raiHNZRM?si=zhVtpoF6S8zN3-Tt"},
              {id:4,titre:"Aladdin",description:"In the movie, they often describe him as a street rat. Aladdin is portrayed as quick-witted, and ultimately a caring person. Like most Disney male protagonists, he is a heroic young man who seeks to win the affection of many other characters, which demonstrates his insecurity.",image:"https://cdn.idntimes.com/content-images/community/2019/05/aladdin-movie-banner-disney-min-c887c6e9e9a74f3000d4d43ed556e0af_600x400.jpg",rating:1,Link:"https://www.youtube.com/embed/H1Fv67HKdkQ?si=FUftIDrfU44kO7Rr"},
              {id:5,titre:"Luca",description:"Luca, un jeune monstre marin qui vit un été inoubliable sur la Riviera italienne.",image:"https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",rating:5 , Link:"https://www.youtube.com/embed/dnaQXLzqGwU?si=bnAOjP4J-yq71Ma5"}
]

const[film,setFilm]= useState(filmKids) ;


// search with title
const handelSearch=(val)=>{
  setFilm(film.filter((el)=>el.titre === val))

}

// search with rating stars
const searchWithRate =(value)=>{
  if(value === null) {
    return film
  }
   setFilm(film.filter((el)=>el.rating === value))
}
const AddNewMovie =(movie)=>{
  setFilm([...film,movie])
}
// useEffect(()=>{
//   console.log(film)
// },[film])

  return (
    <div >
      <Main />
     <div className="main">
      <Routes>
      
        <Route  path="/movie" element={<MovieList film={film} />}/>
        <Route path="/search" element={<Search handelSearch={handelSearch}  searchWithRate={searchWithRate}/>}/>
        <Route path="/add" element={ <AddMovie  AddNewMovie={AddNewMovie}  />}/>
        <Route  path="/details/:id" element={<Details film={film}/>}/>
      
      </Routes>
      {/* <button onClick={}></button> */}
   
     
      </div> 
      
    
     
      


     

      
      
  
  
    </div>
  );
}

export default App;
