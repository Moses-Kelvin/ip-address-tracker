import L from 'leaflet'

import url from "leaflet/dist/images/marker-icon.png"

export default L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: url,
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
})