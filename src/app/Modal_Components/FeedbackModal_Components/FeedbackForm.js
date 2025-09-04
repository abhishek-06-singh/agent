import React from "react";
import TrialSurvey from "./TrialSurvey";
import Rating from "./Rating";
import FeedbackButton from "./FeedbackButton";

export default function FeedbackForm({handleSubmit, rating, setRating, feedback, setFeedback, feedbackImprove, setFeedbackImprove,trialNeeds, setTrialNeeds, upgradePlan, setUpgradePlan}){
    return(
        <form onSubmit={handleSubmit}>
           <Rating rating={rating} setRating={setRating} />
            <label className="text-textnormal text-xs mb-1" htmlFor="feedback">What did you like most ?</label>
          <input
         id="feedbackLike"
          type="text"
          placeholder="E.g., dashboard, listing features, design..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full text-xs px-4 py-2 mb-3 border border-bordercolor rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-textnormal placeholder-textplaceholder"

          required
        />
          <label className="text-textnormal text-xs mb-1" htmlFor="feedback">What can we improve?</label>
          <input
          id="feedbackImprove"
          type="text"
          placeholder="E.g., speed, more integrations..."   
          value={feedbackImprove}
          onChange={(e) => setFeedbackImprove(e.target.value)}
          className="w-full px-4 py-2 text-xs mb-3 border border-bordercolor rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-textnormal placeholder-textplaceholder"
          required
        />
        <TrialSurvey trialNeeds={trialNeeds} setTrialNeeds={setTrialNeeds} upgradePlan={upgradePlan} setUpgradePlan={setUpgradePlan}/>

       <FeedbackButton/>
        </form>
    )
 }
