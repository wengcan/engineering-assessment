import * as React from 'react';
import { Map as LeafLetMap } from 'leaflet';
import Info from '../Info';
import useFetchDocuments from '../../hooks/useFetchFoodTrucks';
import Loading from '../../components/Loading';
const HomeMap =  React.lazy(() => import('../HomeMap'));



export default function Home() {

    useFetchDocuments();

    return (
        <div className='flex flex-col w-screen h-screen'>

            <div className='w-full h-full flex flex-row'>
                <div className='w-2/5 flex justify-between bg-gray-100'>
                    <Info/>
                </div>
      
                <div className='w-3/5 h-full flex-1 p-4 bg-gray-100'>
                    <React.Suspense fallback={<Loading />}>
                        <HomeMap/>
                    </React.Suspense>
                </div>
            </div>
        </div>
    )
}