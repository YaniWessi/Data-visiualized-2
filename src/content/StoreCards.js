import React, {useContext} from 'react'
import { storeContext } from "../context/storeContext"
import GeoLocationForm from './GeoLocationForm';
import StoreCard from "../Components/StoreCard"

const StoreCards = () => {
    const {stores} = useContext(storeContext)

    return (
        <div className="form">
            <GeoLocationForm/>
      
            <div className="StoreCards"> 
                {stores?.map(store => {
                    return <StoreCard store={store} />
                })}
            </div>
        </div>  
    )
}

export default StoreCards;
