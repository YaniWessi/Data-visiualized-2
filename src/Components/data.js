import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { storecontexts } from "../context/storecontexts";
import { searchcontexts } from "../context/searchcontexts";

const GoogleData = () => {

    const { coords } = useContext(searchcontexts)
    const { setStore } = useContext(storecontexts)

    const [location, setLocation] = useState({
        lat:40.712776,
        long:-74.005974
    })

    useEffect(() => {
        console.log('these cords', coords.lat, coords.long)
        if(coords.lat && coords.long){
            console.log('these cord', coords.lat, coords.long)
            setLocation({
                lat:coords.lat, 
                long: coords.long
            })
        }
    },[coords])

   const {lat, long} = location

  
    useEffect(() =>{
        console.log("this data", lat,long)
        // axios.get(`https://www.easyfoodstamps.com/cms/stores?latitude=${lat}&longitude=${long}`)
        //   .then(res => setStore(res.data.stores))
        //   .then(res => console.log('Res',res))

        //   .catch(error => console.log("flag", error))
        if (lat && long){
            console.log('diffrent',lat,long)
            axios.get(`https://www.easyfoodstamps.com/cms/stores?latitude=${lat}&longitude=${long}`)
            .then(res => setStore(res))
            .then(res => console.log('Res',res))
            
           

          .catch(error => console.log("flag", error)) 
        }
        }, [location]);
    return (
   <>
   </>
    )
}

export default GoogleData;