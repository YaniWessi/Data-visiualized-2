import React, { useState, useContext } from "react"
import { geoLocationContext } from "../context/geoLocationContext"
import { storeContext } from "../context/storeContext"
import axios from "axios"

const GeoLocationForm = () => {
    const [location, setLocation ] = useState({
        lat: null,
        lon: null 
    }) 
    const { setGeoData } = useContext(geoLocationContext)
    const { setStores } = useContext(storeContext)
    const { lat, lon } = location

    const handleChange = e => {
        setLocation({...location, [e.target.name]: e.target.value}) // so we using the value to set to our state 
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!lat || !lon){
           return 
        }

        axios.get(`https://www.easyfoodstamps.com/cms/stores?latitude=${lat}&longitude=${lon}`)
            .then(res => setStores(res?.data?.stores))
            .then(() => setGeoData(location))
            .catch(error => console.log(error))
    }

    return(
        <form onSubmit={handleSubmit}>
         <input
             className='input'
             name="lat"
             value={lat}
             placeholder="please enter a latitude"
             onChange={handleChange}
         />
         <input
             className='input'
             name="lon"
             value={lon}
             placeholder="please enter a longitude"
             onChange={handleChange}
         />
         <button type="submit">
             Submit 
         </button>

        </form>
    )
}

export default GeoLocationForm;