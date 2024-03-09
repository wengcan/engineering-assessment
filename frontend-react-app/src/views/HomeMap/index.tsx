import * as React from 'react';
import Map, {Marker} from '../../components/Map/Map';
import { useGlobalStore } from '../../hooks/useGlobalStore';
import { LatLngExpression } from 'leaflet';
import { Map as LeafLetMap } from 'leaflet';


export default  function HomeMap(){
    const mapRef = React.useRef<LeafLetMap>()
    const globalStore = useGlobalStore();
    const [center, setCenter] = React.useState<LatLngExpression>([37.74530, -122.4034])
    const [positions, setPositions] = React.useState<Marker[]>([])
    React.useLayoutEffect(()=>{
        if (globalStore.data?.content){
            let _positions = globalStore.data?.content.map(item=> {
                let pos = Array.from(item.location.coordinates);
                return {
                    id: item.id,
                    text: item.applicant,
                    position: pos.reverse() as LatLngExpression
                }
            })
            setPositions(_positions)
            if (_positions.length > 0) {
                globalStore.setCenterPos(_positions[0].position)
                setCenter(_positions[0].position)
            }
        }
    },[globalStore.data?.content])

    React.useEffect(()=>{
        if (globalStore.centerPos){
            mapRef?.current?.flyTo(globalStore.centerPos)
        }
    },[globalStore.centerPos])


    return (
        <div className='w-full h-full rounded-2xl overflow-hidden'>
            <Map center={center} positions={positions} ref={mapRef} />
        </div>
    )
}

