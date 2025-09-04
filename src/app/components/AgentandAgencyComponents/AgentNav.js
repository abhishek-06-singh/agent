'use client';
import React, { useState } from "react";
import ActiveListings from "./ActiveListing"
import About from "./AboutAgent";

export default function AgentDetails({listing, agentName}) {
  const [activeTab, setActiveTab] = useState("listings");
  const[liked,setliked] = useState([]);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-6 my-10">
      {/* Tabs */}
      <div className="flex gap-4 mb-6 text-textnormal">
        <button
          className={`px-2 py-2  ${
            activeTab === "listings" ? "border-b border-textnormal" : ""
          }`}
          onClick={() => setActiveTab("listings")}
        >
          Active Listings
        </button>

        <button
          className={`px-2 py-2  ${
            activeTab === "about" ? "border-b border-textnormal" : ""

          }`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
      </div>



      {/* Content */}
      {activeTab === "listings" && <ActiveListings listing={listing} liked={liked} setliked={setliked} showMore={showMore} setShowMore={setShowMore} agentName={agentName}  />}


      {activeTab === "about" && <About />}
    </div>
  );
}
