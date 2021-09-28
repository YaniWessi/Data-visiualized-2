import React, {useContext} from 'react'
import { storeContext } from "../context/storeContext"
import GeoLocationForm from './GeoLocationForm';
import StoreCard from "../components/StoreCard"

const StoreCards = () => {
    const {stores} = useContext(storeContext)

    return (
        <div className="store-card">
            <GeoLocationForm/>
            {stores?.map(store => {
                return <StoreCard store={store}/>
            })}
        </div>
    )
}

export default StoreCards;
