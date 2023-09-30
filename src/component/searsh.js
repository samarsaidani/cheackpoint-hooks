import { useState ,useEffect} from "react";
import ReactStars from "react-stars";
import "./style.css"

const Search =({handelSearch, searchWithRate })=>{
    const [input,setInput] = useState(null);
    console.log(typeof(input))
// add new rating of search  in the input
    const ratingChanged = (newRating) => {
        setInput(newRating);
      };
  

      useEffect (()=>{
        searchWithRate(input)
      },[input])
    return(
        <div className="search">
             <input type="text" placeholder="search..." className="inputText"  onChange={(event)=>setInput(event.target.value)} ></input>
            <button className="btnsearch" onClick={()=>handelSearch(input)}>Search</button>
            
             {<ReactStars
                        
                    count={6}
                    size={24}
                    color2={'#ffd700'}
                    edit={true}
                   onChange = {ratingChanged}
                        
                        />
                    }
        </div>
    )
}
export default Search;