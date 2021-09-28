import React, {useContext} from "react";
import {MapContainer, TileLayer, Marker } from 'react-leaflet';
import {geoLocationContext} from '../context/geoLocationContext';
import {storeContext} from "../context/storeContext"
import ChangeMap from '../Components/ChangeMap';


const GeoMap = () => {
    const { stores } = useContext(storeContext)
    const { geoData } = useContext(geoLocationContext)

    return (
        <MapContainer center={geoData} zoom={13} scrollWheelZoom={true}>
            <TileLayer 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeMap geoData={geoData}/>
            {stores?.map(store => <Marker key={store?.objectid} position={[store?.latitude, store?.longitude]} />)}
        </MapContainer>
    )

}

export default GeoMap;