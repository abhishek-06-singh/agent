"use client";

import React, { useState } from "react";
import MainHeading from "../Shared/MainHeading";
import TopBar from "./TopBar";
import ExpirenceFilter from "./ExpirenceFilter";
import ProfileCard from "./ProfileCard";
import Pagination from "../explore_Components/Pagination"

export default function ListingsGrid({ listing }) {
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 6;

  // Calculate visible listings
  const indexOfLast = currentPage * listingsPerPage;
  const indexOfFirst = indexOfLast - listingsPerPage;
  const currentListings = Array.isArray(listing)
  ? listing.slice(indexOfFirst, indexOfLast)
  : [];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-2 sm:px-3 lg:px-6 bg-background">
      <MainHeading
        title="Explore Properties Listed by Trusted Agents & Agencies"
        desc="Discover your next home from our network of verified real estate professionals"
      />

      <TopBar />

      <ExpirenceFilter listing={listing} listingperpage={listingsPerPage} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentListings.map((item) => (
          <ProfileCard key={item.id} listing={item} />
        ))}
      </div>

     <Pagination
  currentpage={currentPage}
  setCurrentpage={setCurrentPage}
  filtered={listing}
  listingperpage={listingsPerPage}
/>

    </div>
  );
}
