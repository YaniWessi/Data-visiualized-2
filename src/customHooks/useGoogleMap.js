import axios from 'axios';
import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage'


const useGoogleMap = () => {

    const [ stores, setStores ] = useState([]);
    const { location } = useLocalStorage();
    
    

    const { lat, lon } = location;

    console.log("this is that", location )
    
    useEffect(() => {
        axios.get(`https://www.easyfoodstamps.com/cms/stores?latitude=${lat}&longitude=${lon}`)
            .then(res => setStores(res.data.stores))
            .then(res => console.log(res.data))
            .catch(err => console.log('there was an error', err))
    }, [location]);

    return ({ stores, location:{lat, lon} });
}

export default useGoogleMap; 