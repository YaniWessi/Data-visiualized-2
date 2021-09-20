import React,{ useState } from "react";
import useLocalStorage from "../customHooks/useLocalStorage"


const Search = () => {

    const {setCoords} = useLocalStorage();

    const [ state, setState ] = useState({
        lat: null, 
        lon: null
    })


    const handleChange = e => {
        setState({...state,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
     e.preventDefault();

     setCoords(state.lat, state.lon)
    }
   
    console.log("this are the props", state.lat, state.lon)
   

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
             className="LatandLong"
             name="lat"
             type="search"
             value={state.lat}
             onChange={handleChange}
            /><input
             className="LatandLong"
             name="lon"
             type="search"
             value={state.lon}
             onChange={handleChange}
            /><br/>
            <button
                className="submitButton"
                type="submit"
            >
            submit
            </button>
        </form>
    )
}


export default Search;