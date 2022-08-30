import React, { useContext, useEffect, useState } from "react";

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

import "leaflet/dist/leaflet.css"

import classes from '../styles/Map.module.css'

import icon from "./Constant";

import IpContext from "./store/ip-context";


const Map = () => {

    const { IpInfo } = useContext(IpContext);

    const [position, setPosition] = useState({ lat: IpInfo.lat, lng: IpInfo.lng });


    useEffect(() => {
        setPosition({ lat: IpInfo.lat, lng: IpInfo.lng });
    }, [IpInfo]);

    const LocationMaker = ({ coords }) => {
        const map = useMap();
        map.flyTo(coords, map.getZoom());

        return <Marker position={position} icon={icon}>
            <Popup>
                A pretty CSS3 popup. <br />
                Easily customizable
            </Popup>
        </Marker>
    }


    return (
        <MapContainer center={position} className={classes.map}
            zoom={13}
            scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a
           href="https://www.openstreetmap.org/copyright">
               OpenstreetMap
           </a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMaker coords={position} />
        </MapContainer>
    )
};

export default Map;