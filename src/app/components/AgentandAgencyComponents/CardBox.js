
import React from 'react'
export default function CardBox(){
    return(
        <div className="w-full grid grid-cols-1 mt-8 md:grid-cols-4 gap-6">

            <div className="flex flex-col text-primary items-center justify-center bg-cardbg shadow-lg rounded-lg p-6 border border-gray-200">

                <span className="text-2xl font-bold">42</span>

                <span>Active Listings</span>
            </div>
             <div className="flex flex-col text-primary items-center justify-center bg-cardbg shadow-lg rounded-lg p-6 border border-gray-200">

                <span className="text-2xl font-bold">8 Years</span>

                <span>Active Since</span>
                </div>
             <div className="flex flex-col text-primary  items-center justify-center bg-cardbg shadow-lg rounded-lg p-6 border border-gray-200">
                <span className="text-2xl font-bold">156</span>

                <span>Deals Closed</span>
            </div>
             <div className="flex flex-col text-primary  items-center justify-center bg-cardbg shadow-lg rounded-lg p-6 border border-gray-200">
                <span className="text-2xl font-bold">Intermediate</span>

                <span>Expirence Level</span>
            </div>
            
        </div>

    )
}