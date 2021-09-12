import React,{useContext, useState} from "react";
import {searchcontexts} from "../context/searchcontexts";



const Search = (props) => {

    const {cords, setCords} = useContext(searchcontexts)

    const [ state, setState ] = useState('')

    console.log(cords)

    const handleChange = e => {
        setState(e.target.value)
    }

    const handleSubmit = (e) => {
     e.preventDefault();
     const values = state.split(" ")

     setCords({lat:values[0], long:values[1]})
    }
   
    // console.log("this are the props", props.store)
   

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
             ClassName="LatandLong"
             name="latAndLong"
             type="search"
             value={state}
             onChange={handleChange}
            /><br/>
            <button
                ClassName="submitButton"
                type="submit"
                value='Search'
            >
            submit
            </button>
        </form>
    )
}


export default Search;