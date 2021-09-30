import {useMap} from 'react-leaflet'

const ChangeMap = geoData => {
    var coords = { lat: geoData?.geoData?.lat, lon: geoData?.geoData?.lon}
   
    try {
        const map = useMap()
        var zoom = 7; // Set initial zoom on map change to city level
   
        if (coords === null || coords.lat === null) {
            // If no localtion is given - set the center to US and zoom level to state level
            coords = {lat: 44, lon: -79};
            zoom = 3;
        }
        
        map.setView(coords, zoom)
    } catch (error){
        console.log(error)
    }
    return null 
}

export default ChangeMap;