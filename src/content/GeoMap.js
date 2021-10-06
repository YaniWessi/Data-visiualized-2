import React, {useContext} from "react";
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {geoLocationContext} from '../context/geoLocationContext';
import {storeContext} from "../context/storeContext"
import ChangeMap from '../Components/ChangeMap';


const GeoMap = () => {
    const { stores } = useContext(storeContext)
    const { geoData } = useContext(geoLocationContext)
    const zoom = 4; // city level

    return (
        <MapContainer center={geoData} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeMap geoData={geoData}/>
            {stores?.map(store => <Marker key={store?.objectid} position={[store?.latitude, store?.longitude]}>
                <Popup>
                    <strong>{store?.store_name}</strong><br/>
                    {store?.address}, {store?.city}, {store?.state} {store?.zip5}
                </Popup>
            </Marker>)}
        </MapContainer>
    )

}

export default GeoMap;