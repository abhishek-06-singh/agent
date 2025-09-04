import React from 'react';
import DetailsHeading from './DetailsHeading';
import Description from './Description';
import AgentBox from './AgentBox';

export default  function DetailTop({ property }) {
    return (
        <div className='max-w-7xl flex flex-col md:flex-row gap-6 py-6  rounded-lg'>
            <DetailsHeading property={property} />

            <AgentBox property={property} />

        </div>
    );
}