import { useParams } from "react-router-dom";
import ReactStars from "react-stars";

const Details =({film})=>{
    const value = useParams();
    console.log(film)
    const recherche  = film.find((el)=>{
        return  el.id === Number(value.id)
    } )
    console.log(recherche)

    return(
        <div style={{marginTop:50,marginLeft:50, marginRight:50}} >
            <center>
            <ReactStars 
                        
                        count={6}
                        value={recherche.rating}
                        size={24}
                        color={"#ffd700"}
                        edit={false}
                        
                        
                        
                        />
            <iframe src={recherche.Link} />
            
            
            <h1>{recherche.titre}</h1> 
            <h4>{recherche.description}</h4>
            
            
            </center>

        </div>
    )
} 
export default Details ;