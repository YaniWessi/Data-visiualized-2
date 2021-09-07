import React, { useState, useEffect} from 'react';
import "./App.css";
import axios from 'axios';
import MapVisiual from './Components/map';
import StoresList from './Components/storesList';




function App() {

 
  const [store, setStore] = useState([])


  useEffect(() =>{
    axios.get('https://www.easyfoodstamps.com/cms/stores')
      .then(res => setStore(res.data.stores))
    //   .then(res => console.log(res.data))
      .catch()
    }, [setStore]);


  return (
    <>
    <div className="App">
    <StoresList store={store}/>
    <MapVisiual store={store}/>
    </div>
    </>
  );
}

export default App;
