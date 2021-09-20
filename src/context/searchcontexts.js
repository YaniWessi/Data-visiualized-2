import { createContext } from "react";

const coords = {
    lat: 39.550053, 
    long: -105.782066
}

const setCoords = (x, y) => {
    return ({
        lat: x, 
        long: y
    })
}
export const searchcontexts = createContext({
    coords,
    setCoords
})



