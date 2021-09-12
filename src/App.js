import React, { useContext, useMemo, useState, useEffect} from 'react';
import {searchcontexts} from './context/searchcontexts';
import { storecontexts } from './context/storecontexts';
import "./App.css";
import axios from 'axios';
import MapVisiual from './Components/map';
import StoresList from './Components/storesList';
import Search from "./Components/search";
// import Data from "./Components/data"




function App() {

  const [cords, setCords ] = useState({
    lat: null,
    long: null
  })
 const [store, setStore] = useState([])
 const searchValue = useMemo(() => ({cords, setCords}), [cords, setCords] ) 
const storeValue = useMemo(()=> ({store, setStore}),[store, setStore])
  

  const lat = 39.550053
  const long = -105.782066

  const cord = [lat,long]
 
  useEffect(() =>{
    axios.get(`https://www.easyfoodstamps.com/cms/stores?latitude=${lat}&longitude=${long}`)
      .then(res => setStore(res.data.stores))
    //   .then(res => console.log(res.data))
      .catch()
    }, [setStore]);


  return ( 
    
    <searchcontexts.Provider value={searchValue}>
    <storecontexts.Provider value={storeValue}>
    <div className="App">
    <div className="under-app">
    {/* <Data/> */}
    <Search store={store} cord={cord}/>
    <StoresList store={store} cord={cord}/>
    </div>
    <MapVisiual store={store} cord={cord}/> 
    </div>
    </storecontexts.Provider>
    </searchcontexts.Provider>
    
    
  );
}

export default App;
