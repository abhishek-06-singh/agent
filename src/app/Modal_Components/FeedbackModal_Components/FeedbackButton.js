import React from "react";

export default function FeedbackButton() {
    return (
  <div className="w-full flex flex-col gap-2">
    <button type="submit"  className="w-full px-4 py-2.5 text-xs bg-buttonbg text-background rounded-lg font-medium hover:bg-primary transition-colors duration-200">


      Submit Feedback
    </button>

    <button className="w-full px-4 py-2.5 text-xs bg-cardbg border border-bordercolor text-primary rounded-lg font-medium  transition-colors duration-200">
      Submit & go to upgrade options
    </button>
  </div>
);
}