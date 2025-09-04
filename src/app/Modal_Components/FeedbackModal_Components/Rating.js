'use client'
import React, { useState } from "react";
import FilledStar from "../../components/utilis/FilledStar";
import EmptyStar from "../../components/utilis/EmptyStar";

export default function Rating({ rating, setRating }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="w-full max-w-md mb-3">
      <label className="block text-xs text-textnormal font-medium mb-2">
        How would you rate your experience?
      </label>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => {
          const active = (hover || rating) >= star;
          return active ? (
            <FilledStar
              key={star}
              size={20}
              className="cursor-pointer text-yellow-500"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ) : (
            <EmptyStar
              key={star}
              size={20}
              className="cursor-pointer text-textnormal" // 👈 custom color
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          );
        })}
      </div>
    </div>
  );
}
