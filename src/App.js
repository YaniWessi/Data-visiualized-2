import React, { useState } from 'react';
import "./App.css";
import { geoLocationContext } from './context/geoLocationContext';
import { storeContext } from './context/storeContext';
import GeoMap from "./content/GeoMap";
import StoreCards from './content/StoreCards'



function App() {
  const [geoData, setGeoData] = useState({ lat: null, lon: null })
  const [stores, setStores] = useState([])



  return (
   <div className="App">
      <geoLocationContext.Provider value={{geoData, setGeoData}}>
      <storeContext.Provider value={{stores, setStores}}>
        <StoreCards/>
        <GeoMap/>
      </storeContext.Provider>
    </geoLocationContext.Provider>
   </div>
  )
}

export default App;
