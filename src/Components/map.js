import React from 'react'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const MapVisiual = () => {

    const position = [40.712776, -74.005974]

    return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
        <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>
  </MapContainer>
    )
}

export default MapVisiual;