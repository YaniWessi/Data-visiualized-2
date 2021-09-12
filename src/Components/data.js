import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { storecontexts } from "../context/storecontexts";
import { searchcontexts } from "../context/searchcontexts";
const GoogleData = () => {

    const { cords } = useContext(searchcontexts)
    const { setStore } = useContext(storecontexts)

    const [location, setLocation] = useState({
        lat:39.550053,
        long:-105.782066
    })

    useEffect(() => {
        console.log('these cords', cords.lat, cords.long)
        if(cords.lat && cords.long){
            console.log('these cord', cords.lat, cords.long)
            setLocation({
                lat:cords.lat, 
                long: cords.long
            })
        }
    },[cords])

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