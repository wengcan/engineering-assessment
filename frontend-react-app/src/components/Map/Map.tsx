import * as React from 'react';
import {
    LayerGroup,
    LayersControl,
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    ZoomControl,
    useMapEvents
} from "react-leaflet";
import { LatLngExpression } from 'leaflet';
import { Map as LeafLetMap } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "./map.css";


export interface Marker{
    text: string
    position: LatLngExpression
}

interface MapProps{
    center: LatLngExpression
    positions: Marker[]
}


function MyComponent() {
    const map = useMapEvents({
        click() {
          map.locate()
        },
        // locationfound(e) {
        //   map.flyTo(e.latlng, map.getZoom())
        // },
      })
    return null
}
  



const MyMap = ({center, positions}: MapProps, mapRef) =>  {
    return (
        <MapContainer 
            style={{ width: '100%', height: '100%' }} 
            center={center} 
            zoom={13} zoomControl={false} 
            scrollWheelZoom={true}
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                {
                    positions.map(pos=>{
                        return (
                            <Marker position={pos.position}>
                                <Popup>
                                   {pos.text}
                                </Popup>
                            </Marker> 
                        )
                    })
                }
       

            <ZoomControl position='topright' />
            <MyComponent />
        </MapContainer>
    )
}


export default React.forwardRef(MyMap);