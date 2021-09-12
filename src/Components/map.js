import React from 'react'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapVisiual = (props) => {

    const position = props.cords

    return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    {props.store.map(stores => {
      return  <Marker key={stores.objectid} position={[stores.latitude, stores.longitude]}/> 
    })}



        {/* <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
    {/* </Marker> */}
  </MapContainer>
    )
}

export default MapVisiual;