import React from "react";

const StoreCard = store => 
    <div class="card">
        <h3 class="title">{store?.store?.store_name}</h3>
        <p>Address: {store?.store?.address}, {store?.store?.city}, {store?.store?.state} {store?.store?.zip5}</p>
        {store?.store?.county &&  <p>County: {store?.store?.county}</p>}
        <p>Geolocation: {store?.store?.latitude}, {store?.store?.longitude}</p>
    </div>


export default StoreCard; 