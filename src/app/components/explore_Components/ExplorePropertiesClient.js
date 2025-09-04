'use client'
import React, { useState,useEffect} from 'react'
import Card_Components from './Card_Components'
import Filter from './Filter'
import SearchBar from './Search'
import Pagination from './Pagination'
import ListingSummaryBar from './ListingSummaryBar'
import FilterLogic from './filtersComponents/FIlterLogic'
import MapView from './MapView'
import Trial_Modal from '../Modal/Trial_Modal'
import GuideModal from '../Modal/GuideModal'
import FeedbackModal from '../Modal/FeedbackModal'
import FeedbackSubmittedModal from '../Modal/FeedbackSubmittedModal'
import TrialEndedModal from '../Modal/TrialEndedModal'
import listing from '../../Data/Real_Estate.json'


export default function ExplorePropertiesClient() {
  const [filtered, setFiltered] = useState(listing)
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    priceRange: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    status: '',
    sortBy: '',
  })
  const [MapActive, setMapActive] = useState(false)
  const [liked, setLiked] = useState([])
  const [currentpage, setCurrentpage] = useState(1)
  const listingperpage = MapActive ? 4 : 6
  const indexofLast = currentpage * listingperpage
  const indexofFirst = indexofLast - listingperpage
  const currentlistings = filtered.slice(indexofFirst, indexofLast)

  const [trialOpen, SetTrialOpen] = useState(false)
  const [GuideOpen, SetGuideOpen] = useState(false)
  const [FeedbackOpen, SetFeedbackOpen] = useState(false)
  const [FeedbackSubmittedOpen, SetFeedbackSubmittedOpen] = useState(false)

  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [feedbackImprove, setFeedbackImprove] = useState("")
  const [trialNeeds, setTrialNeeds] = useState("")
  const [upgradePlan, setUpgradePlan] = useState("")
  const [trialEnded, SetTrialEnded] = useState(false)
     const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Only true after first render
    setMounted(true)
  }, [])

useEffect(() => {
  const result = FilterLogic({filters, listing})  

  console.log("Filtered result:", result)
  setFiltered(Array.isArray(result) ? result : [])
  setCurrentpage(1)
}, [filters, listing])


  return (
    <>
      <SearchBar
        search={filters.search}
        setSearch={(search) => setFilters((prev) => ({ ...prev, search }))}
      />
      <Filter filters={filters} setFilters={setFilters} listings={listing} />

      <ListingSummaryBar
        listing={listing}
        listingsPerPage={listingperpage}
        currentPage={currentpage}
        onMapClick={() => { setMapActive((prev) => !prev); setCurrentpage(1) }}
        MapActive={MapActive}
      />

      <div className={`flex ${MapActive ? 'flex-col md:flex-row' : 'flex-col'} gap-4`}>
        {MapActive && (
          <div className="w-full md:w-6/12 lg:w-5/12 my-6 md:mb-4">
            <MapView
              listings={filtered}
              liked={liked}
              setLiked={setLiked}
              setCurrentPage={setCurrentpage}
            />
          </div>
        )}

        <div className={`${MapActive ? 'w-full md:w-6/12 lg:w-8/12' : 'w-full'}`}>
          <Card_Components
            filtered={currentlistings}
            liked={liked}
            setLiked={setLiked}
            MapActive={MapActive}
          />
        </div>
      </div>

     {mounted && (
      <Pagination
        currentpage={currentpage}
        setCurrentpage={setCurrentpage}
        filtered={filtered}
        listingperpage={listingperpage}
      />)}

      {/* Modals */}
      <Trial_Modal trialOpen={trialOpen} SetTrialOpen={SetTrialOpen} />
      <GuideModal GuideOpen={GuideOpen} SetGuideOpen={SetGuideOpen} />
      <FeedbackModal
        feedback={feedback}
        setFeedback={setFeedback}
        feedbackImprove={feedbackImprove}
        setFeedbackImprove={setFeedbackImprove}
        trialNeeds={trialNeeds}
        setTrialNeeds={setTrialNeeds}
        upgradePlan={upgradePlan}
        setUpgradePlan={setUpgradePlan}
        rating={rating}
        setRating={setRating}
        FeedbackOpen={FeedbackOpen}
        SetFeedbackOpen={SetFeedbackOpen}
        SetFeedbackSubmittedOpen={SetFeedbackSubmittedOpen}
      />
      <FeedbackSubmittedModal
        feedback={feedback}
        setFeedback={setFeedback}
        feedbackImprove={feedbackImprove}
        setFeedbackImprove={setFeedbackImprove}
        trialNeeds={trialNeeds}
        setTrialNeeds={setTrialNeeds}
        upgradePlan={upgradePlan}
        setUpgradePlan={setUpgradePlan}
        rating={rating}
        FeedbackSubmittedOpen={FeedbackSubmittedOpen}
        SetFeedbackSubmittedOpen={SetFeedbackSubmittedOpen}
      />
      <TrialEndedModal trialEnded={trialEnded} SetTrialEnded={SetTrialEnded} />
    </>
  )
}
