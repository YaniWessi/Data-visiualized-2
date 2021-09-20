import React from 'react';
import "./App.css";
import MapVisiual from './Components/map';
import StoresList from './Components/storesList';
import Search from "./Components/search";
import useGoogleMap from './customHooks/useGoogleMap'
// import Data from "./Components/data"




function App() {
  const { stores, location } = useGoogleMap();
  
  

  return ( 

    <div className="App">
    <div className="under-app">
    {/* <Data/> */}
    <Search store={stores} cord={location}/>
    <StoresList store={stores} cord={location}/>
    </div>
    <MapVisiual store={stores} cord={location}/> 
    </div>
    
  );
}

export default App;
