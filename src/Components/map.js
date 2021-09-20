import React from 'react'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useGoogleMap from '../customHooks/useGoogleMap';
import useLocalStorage from '../customHooks/useLocalStorage';

const MapVisiual = () => {

    const { location: position } = useLocalStorage();
    const { stores } = useGoogleMap();

   console.log("this is it", position, stores,)
   
    return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {stores.map(store => {
      return  <Marker key={store.objectid} position={[store.latitude, store.longitude]}/> 
    })}



        {/* <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
    {/* </Marker> */}
  </MapContainer>
    )
}

export default MapVisiual;