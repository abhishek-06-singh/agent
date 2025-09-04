import FeedbackCard from './FeedbackCard'
import FeedbackForm from './FeedbackForm'

export default function FeedbackModal_page({
  feedback,
  setFeedback,
  feedbackImprove,
  setFeedbackImprove,
  trialNeeds,
  setTrialNeeds,
  upgradePlan,
  setUpgradePlan,
  SetFeedbackOpen,
  SetFeedbackSubmittedOpen,
  rating,
  setRating,
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    SetFeedbackOpen(false)
    SetFeedbackSubmittedOpen(true)
  }

  return (
    <div className="w-full bg-cardbg rounded-lg  p-4 md:p-6 lg:p-8 shadow-sm ">
      <div className="w-full flex flex-col items-center space-y-3 justify-center ">
        <FeedbackCard
          feedback={feedback}
          setFeedback={setFeedback}
          feedbackImprove={feedbackImprove}
          setFeedbackImprove={setFeedbackImprove}
         

        />

        <FeedbackForm
          handleSubmit={handleSubmit}
          rating={rating}
          setRating={setRating}
          feedback={feedback}
          setFeedback={setFeedback}
          feedbackImprove={feedbackImprove}
          setFeedbackImprove={setFeedbackImprove}
          trialNeeds={trialNeeds}
          setTrialNeeds={setTrialNeeds}
          upgradePlan={upgradePlan}
          setUpgradePlan={setUpgradePlan}
        />
      </div>
    </div>
  )
}
