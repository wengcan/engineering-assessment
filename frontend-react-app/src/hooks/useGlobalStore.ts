import { LatLngExpression } from 'leaflet';
import { create } from 'zustand';

interface GlobalState {
    loading: boolean
    page: number
    latitude?: number
    longitude?: number
    radius?: number
    foodItem?: string
    data?: FoodTruckData
    centerPos?:LatLngExpression,
    setLoadingStatus: (status: boolean) => void
    setData:(data: FoodTruckData)=> void
    setFoodItem:(item: string) => void
    setPage: (item: number) => void
    setCenterPos: (centerPos:LatLngExpression)=>void
}


export const useGlobalStore = create<GlobalState>((set) => ({
    loading: false,
    page: 0,
    setLoadingStatus: (status: boolean) => set(state=> ({...state, loading: status})),
    setData:(data: FoodTruckData)=> set(state=> ({...state, data})),
    setFoodItem: (foodItem: string) => set(state=> ({...state, foodItem, page: 0})),
    setPage: (page: number) => set(state=> ({...state, page})),
    setCenterPos: (centerPos:LatLngExpression)=>set(state=> ({...state, centerPos})),
}))