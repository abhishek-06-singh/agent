'use client'
import React ,{useState} from "react";
import Card_Components from '../explore_Components/Card_Components';



export default function ActiveListing({listing, liked, setliked,agentName, showMore, setShowMore}) {
    const[currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const filtered =agentName? listing.filter((item) => item.agent === agentName) : listing;

    const listingToShow = showMore ? filtered : filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

   

    return(
        <>
        <Card_Components filtered={listingToShow}
        liked={liked} setliked={setliked}/>

<div className="flex items-center justify-center">
  <button
    className={`mt-4 px-4 py-2 text-textnormal flex items-center justify-center border rounded-lg border-bordercolor
      ${filtered.length <= 6 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
    onClick={() => {
      if (filtered.length > 6) setShowMore(!showMore);
    }}
    disabled={filtered.length <= 6}
  >
    {showMore ? "Show Less" : `Show All ${filtered.length} Listings`}
  </button>
</div>

      
</>

    )
}