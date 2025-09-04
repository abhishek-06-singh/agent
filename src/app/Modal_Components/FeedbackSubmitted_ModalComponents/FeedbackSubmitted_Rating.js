import React from "react";
import FilledStar from '../../components/utilis/FilledStar'
import EmptyStar from '../../components/utilis/EmptyStar'

export default function FeedbackSubmitted_Rating({ rating }) {
  return (
    <div className="flex flex-col justify-center mb-5 items-center  ">
        <div className="flex  justify-center  items-center space-x-2">
      {[1, 2, 3, 4, 5].map((star) => rating >= star ? (
        <FilledStar
      key={star}
      size={20}
      className="w-4 h-4 cursor-pointer text-yellow-400 fill-current"
    />
  ) : (
    <EmptyStar
      key={star}
      size={20}
      className="w-4 h-4 cursor-pointer text-textnormal fill-current"
    />
      ))}
      <span className="text-sm text-textnormal pl-2">{rating}/5 stars</span>
      </div>
      <p className="text-sm mt-2 text-textnormal">Your input helps us make Alianza Black Dog even better.</p>
    </div>
  );
}
