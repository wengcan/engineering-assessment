import * as React from 'react';
import {  MapPinIcon } from '@heroicons/react/20/solid';


export default function FoodTruck(props: FoodTruckItem) {
    return (
        <div>
            <h5 className='font-bold'>{props.applicant}</h5>
            <div className='w-full flex flex-wrap gap-1'>
                {props.foodItems && props.foodItems.split(":").map((item,index) => {
                    return (
                        <span 
                            key={`${props.id}_${index}`} 
                            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                        >
                            {item}
                        </span>
                    )
                })}
            </div>
            <div>
                <div className='w-full flex flex-row items-center bg-gray-100 my-2 p-4 rounded-lg'>
                    <div className='p-1'>
                        <MapPinIcon 
                            className="h-8 w-8 text-blue-600"
                            aria-hidden="true" 
                        />
                    </div>
                    <div>
                    <p className='text-sm font-mono'>
                        {props.address}
                    </p>
                    <p className='text-sm font-mono font-light'>
                        {props.locationDescription}
                    </p>
                    </div>
                </div>
                <p className='flex gap-1'>
                    {
                        props.facilityType && (
                            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                {props.facilityType}
                            </span>
                        )
                    }
                    {
                        props.dayshours && (
                            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                {props.dayshours}
                            </span>
                        )
                    }
                </p>
            </div>
        </div>
    )
}