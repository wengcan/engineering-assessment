
import { useState, useEffect } from 'react';
import { useGlobalStore } from './useGlobalStore';

const useFetchDocuments = () => {
    const globalStore = useGlobalStore()
    const pageSize = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                globalStore.setLoadingStatus(true);
                let url = `${import.meta.env.VITE_API_HOST}/api/documents?page=${globalStore.page}&size=${pageSize}`;
                if (
                    globalStore.latitude !== undefined && 
                    globalStore.longitude !== undefined && 
                    globalStore.radius !== undefined && 
                    globalStore.latitude >= -90 && 
                    globalStore.latitude <= 90 && 
                    globalStore.longitude >= -180 && 
                    globalStore.longitude <= 180
                ) {
                    url += `&latitude=${globalStore.latitude}&longitude=${globalStore.longitude}&radius=${globalStore.radius}`
                }
                if (globalStore.foodItem !== undefined) {
                    url += `&foodItem=${globalStore.foodItem}`;
                }
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error when fetching data');
                }
                const responseData = await response.json();
                globalStore.setData(responseData)
            } finally {
                globalStore.setLoadingStatus(false);
            }
        };

        fetchData();

    }, [globalStore.page, globalStore.latitude, globalStore.longitude, globalStore.radius, globalStore.foodItem]);

};

export default useFetchDocuments;