import React from "react";





const Search = (props) => {


    const handleSubmit = (e) => {

    }
   
    console.log("this are the props", props)
    console.log("again", props)

    return (
        <form className="search" onSubmit="">
            <input
             ClassName="LatandLong"
             name="latAndLong"
             type="search"
            /><br/>
            <input
                ClassName="submitButton"
                type="submit"
                value='Search'
            />
        </form>
    )
}


export default Search;