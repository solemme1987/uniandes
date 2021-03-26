import React, { useContext, useEffect, useState } from 'react'
import { Context } from './context/Context';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

export const GraficMap = () => {

    // const map = u


    const [data, setData] = useState([]);
    const {urlMapa} = useContext(Context)

    useEffect(() => {
      asyncFetch(urlMapa);
    }, [urlMapa]);

    const asyncFetch = (urlMapa) => {

    fetch(urlMapa)
    .then((response) => response.json())
    // .then((json) => console.log('Data mapa birns',json))
        .then((json) => setData(json))
        // .catch((error) => {
        //   console.log('fetch data failed', error);
        // });
    };
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer 
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
