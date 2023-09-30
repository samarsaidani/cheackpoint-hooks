
import { useState } from "react";
import "./style.css"
const AddMovie =({AddNewMovie})=>{
  const [Titre,setTitre] = useState('')
  const [description,setDescription]= useState('')
  const [image,setImage]= useState('')
  const [rating,setRating]= useState('')

// Add new movie
   const handelAdd =()=>{
     
    AddNewMovie({titre:Titre,description,image,rating})
   }
    
    return (
        
          <div className="form">
         <div>
         <h1>Add Movie</h1>
                <h3> Nom du film :</h3><input type="text" placeholder="Titre de la film" onChange={(event)=> setTitre(event.target.value)}/> 
                <h3> Description:</h3>
                <textarea type="text" placeholder="description de la film "  onChange={(event)=> setDescription(event.target.value)}/>
                <h3> Url image:</h3>
                <input type="text" placeholder="lien de l'image" onChange={(event)=>setImage(event.target.value)}/> 
                <h3> votre Rating:</h3>
                <input type="text" placeholder="Rating" onChange={(event)=>setRating(event.target.value)}/>
                <div className="btnAdd">

                <button className="Btn-Add"  onClick={()=>handelAdd()} > Add Movie++</button>
                    </div>
         </div>
                
            
           </div>

      
        
    )
}
export default AddMovie;