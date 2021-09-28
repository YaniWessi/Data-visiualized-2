import {useMap} from 'react-leaflet'

const ChangeMap = geoData => {
    const coords = { lat: geoData?.geoData?.lat, lon: geoData?.geoData?.lon }
    try {
        const map = useMap()
        map.setView(coords, map.getZoom())
    } catch (error){
        console.log(error)
    }
    return null 
}

export default ChangeMap;