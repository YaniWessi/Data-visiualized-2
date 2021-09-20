import { useState } from 'react';
import { useEffect } from 'react';  // what those this react/cjs/react.development

const useLocalStorage = () => {

    const [ location, setLocation ] = useState({
        lat: localStorage.setItem('lat', 40.712776), // how those local storeage have this dot opperation this makes getItem avalible 
        lon: localStorage.setItem('lon', -74.005974)
    });
    
    // we shouldn't be getting the item we should be setting it   

    console.log("sap", localStorage)

    const setCoords = (x, y) => {
        // localStorage.setItem('lat', x);
        // localStorage.setItem('lon', y);

        setLocation({
            lat: x, 
            lon: y
        })
    }

    // useEffect(() => {
    //     if (!location.lat) {
    //         localStorage.setItem('lat', 40.712776)
    //     }
    //     if (!location.lon){
    //         localStorage.setItem('lon', -74.005974)
    //     }
    // }, []);


    return { location};
}

export default useLocalStorage;

// react/cjs/react.development