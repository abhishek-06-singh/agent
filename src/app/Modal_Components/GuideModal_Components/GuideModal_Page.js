import React from "react"
import TutorialHeader from "./TutorialHeader"
import ProgressbarModal from "./ProgressBarModal"
import VideoTour from "./VideoTour"
import GuideIntro from "./GuideIntro"
import PaginationNav from "./PaginationNav"

export default function GuideModal_Page() {
  return (
    <div className="pt-12 mx-auto bg-cardbg rounded-lg p-4 shadow-sm">
     <TutorialHeader/>
     <hr className="mb-4 border-bordercolor" />
     <ProgressbarModal progress={33} no={1} desc="Create your account" total={3} />
     <VideoTour/>
     <GuideIntro/>
     <hr className="mb-4 border-bordercolor" />
     <PaginationNav/>
     


    </div>
  )
}