import * as React from 'react'
import { LatLngExpression, Map as LeafLetMap } from 'leaflet';
import { useGlobalStore } from '../../hooks/useGlobalStore'
import FoodTruck from './FoodTruck'
import Pagination from '../../components/Pagination/Index'
import SearchInput from '../../components/SearchInput';
import Loading from '../../components/Loading';
import { XMarkIcon } from '@heroicons/react/20/solid';



export default function Info() {
    const globalStore = useGlobalStore();
    return (
        <div className='flex flex-col w-full h-full pb-2'>
            <div className='w-full p-4 '>
                <SearchInput onChange={globalStore.setFoodItem} />
            </div>
            {
                globalStore.loading ? <Loading /> : (
                    <div className='flex-1 overflow-y-auto'>
                        <div className=''>
                            <div className='p-4'>
                                <div className='p-1 flex'>

                                    <div>{globalStore.data?.totalElements} items founded</div>
                                    {
                                        globalStore.foodItem && (
                                            <div className='flex flex-row justify-center items-center'>
                                                <span>&nbsp;for&nbsp;:&nbsp;</span>
                                                {globalStore.foodItem}
                                                <button onClick={()=>globalStore.setFoodItem("")}>
                                                    <XMarkIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </button>                                                
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    globalStore.data?.content && (
                                        <ul role="list" className="space-y-3">
                                            {
                                                globalStore.data.content.map((item) => (
                                                    <li 
                                                        onClick={()=>{
                                                            let pos = Array.from(item.location.coordinates).reverse() as LatLngExpression;
                                                            globalStore.setCenterPos(pos)
                                                        }}
                                                        key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                                                        <FoodTruck key={item.id} {...item} />
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </div>


                            <div className='p-4'>
                                <Pagination
                                    currentPage={globalStore.data?.number}
                                    totalPages={globalStore.data?.totalPages}
                                    onPageChange={globalStore.setPage}
                                />
                            </div>
                        </div>
                    </div>
                )
            }



        </div>
    )
}