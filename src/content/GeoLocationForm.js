import React, { useState, useContext } from "react"
import { geoLocationContext } from "../context/geoLocationContext"
import { storeContext } from "../context/storeContext"
import axios from "axios"
import Geocode from 'react-geocode'



const GeoLocationForm = () => {
    
    Geocode.setApiKey("AIzaSyChi4a_vUafa5SEDM1fG0JSz85e6ESxA60")


    // const [location, setLocation ] = useState({
    //     lat: null,
    //     lon: null 
    // }) 
    const [ address, setAddress ] = useState('')

    const { geoData, setGeoData } = useContext(geoLocationContext)
    const { setStores } = useContext(storeContext)
    const { lat, lon } = geoData
    console.log(lat, lon)
    // const handleChange = e => {
    //     setLocation({...location, [e.target.name]: e.target.value}) // so we using the value to set to our state 
    // }
     const handleChange = e => {
         setAddress(e.target.value)
     }

    const handleSubmit = async e => {
        e.preventDefault()
        // if (!lat || !lon){
        //    return 
        // }
        await Geocode.fromAddress(address)
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyChi4a_vUafa5SEDM1fG0JSz85e6ESxA60`)
            // .then(res => console.log(res.results[0].geometry.location))
            .then(res => setGeoData({lat: res.results[0].geometry.location.lat, lon: res.results[0].geometry.location.lng}))
            // .then(res => 
             axios.get(`https://www.easyfoodstamps.com/cms/stores?latitude=${lat}&longitude=${lon}`)
             .then(res => setStores(res?.data?.stores))
             .catch(error => console.log(error))
            // )
        
    }
  // geocode stuff starts here 

    

    return(
        <form onSubmit={handleSubmit}>
            <input
                className='input'
                name='address'
                value={address}
                placeholder='please enter an address'
                onChange={handleChange}
            />
         {/* <input
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
         /> */}
         <button type="submit">
             Submit 
         </button>

        </form>
    )
}

export default GeoLocationForm;