import React from "react";

export default function TrialSurvey({trialNeeds, setTrialNeeds, upgradePlan, setUpgradePlan}) {

  return (
    <div className="space-y-3 mb-7 text-textnormal ">

      {/* Question 1 */}
      <div >
        <p className="text-textnormal text-xs mb-2">Did the trial meet your needs?</p>
        <div className="space-y-1">
          <label className="flex text-textnormal text-xs items-center space-x-2">
            <input
              type="radio"
              name="trialNeeds"
              value="Yes fully"
              checked={trialNeeds === "Yes fully"}
              onChange={(e) => setTrialNeeds(e.target.value)}
              className="text-primary focus:ring-primary"
            />
            <span>Yes, fully</span>
          </label>
          <label className="flex text-textnormal text-xs items-center space-x-2">
            <input
              type="radio"
              name="trialNeeds"
              value="Partially"
              checked={trialNeeds === "Partially"}
              onChange={(e) => setTrialNeeds(e.target.value)}
              className="text-primary focus:ring-primary"
            />
            <span>Partially</span>
          </label>
          <label className="flex text-textnormal text-xs items-center space-x-2">
            <input
              type="radio"
              name="trialNeeds"
              value="No"
              checked={trialNeeds === "No"}
              onChange={(e) => setTrialNeeds(e.target.value)}
              className="text-primary focus:ring-primary"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      {/* Question 2 */}
      <div >
        <p className="text-textnormal mb-2 text-xs">
          Would you consider upgrading to a paid plan?
        </p>
        <div className="space-y-1">
          <label className="flex text-textnormal text-xs items-center space-x-2">

            <input
              type="radio"
              name="upgradePlan"
              value="Yes I’m ready"
              checked={upgradePlan === "Yes I’m ready"}
              onChange={(e) => setUpgradePlan(e.target.value)}
              className="text-primary focus:ring-primary"
            />
            <span>Yes, I’m ready</span>
          </label>
          <label className="flex text-textnormal text-xs items-center space-x-2">

            <input
              type="radio"
              name="upgradePlan"
              value="Maybe later"
              checked={upgradePlan === "Maybe later"}
              onChange={(e) => setUpgradePlan(e.target.value)}
              className="text-primary focus:ring-primary"
            />
            <span>Maybe later</span>
          </label>
          <label className="flex text-textnormal text-xs items-center space-x-2">

            <input
              type="radio"
              name="upgradePlan"
              value="No"
              checked={upgradePlan === "No"}
              onChange={(e) => setUpgradePlan(e.target.value)}
              className="text-primary focus:ring-primary"
            />
            <span>No</span>
          </label>
        </div>
      </div>
    </div>
  );
}
