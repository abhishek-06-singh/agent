import React from 'react'
import { MapPin } from 'lucide-react'
import PropertyStats from './PropertyStats'
export default function DetailsHeading({property}){
    return(
        <div className='w-full md:w-9/12 flex flex-col text-textnormal'>
             <div className=' flex  md:flex-row md:justify-between text-textnormal'>
            <div className='flex flex-col  gap-2 mb-4'>
            <h1 className='text-xl md:text-2xl'>{property.title}</h1>

            <p><MapPin className='inline-block text-xs mr-2'/>{property.city}</p>
            </div>

            <div>
                <h2 className='text-xl md:text-2xl'>${property.price ||`${property.rent} /mo`}</h2>

            </div>
            </div>
            <PropertyStats property={property} />


        </div>
    )
}