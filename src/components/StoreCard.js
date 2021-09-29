import React from "react";

const StoreCard = store => 
    <div class="cards">
        <h3 class="cards">{store?.store?.store_name}</h3>
        <p>Location: {store?.store?.city}, {store?.store?.state}</p>
        {store?.store?.county &&  <p>County: {store?.store?.county}</p>}
        <p>Geolocation:</p>
        <p>{store?.store?.latitude}, {store?.store?.longitude}</p>
    </div>


export default StoreCard; 