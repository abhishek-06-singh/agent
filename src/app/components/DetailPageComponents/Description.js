
import React from 'react'
export default function Description({ property }) {
    return(
        <div className='w-full md:w-9/12 flex flex-col gap-4 mb-8 text-xs md:text-sm item-center text-textnormal'>
            <h2 className='text-lg font-semibold pb-2'>Description</h2>
            <p>{property.description}</p>

        </div>
    )
}