import React from 'react'

import ReviewEntry from './ReviewEntry.jsx'

import { ReviewListWrapper } from './styles/staticStyles.style'

const AllReviews = (props) => {
  const { reviews, userDp, userName } = props;

  return(
    <ReviewListWrapper>
      {reviews.map((review, idx) => (
        <div key={`${review.date}${idx}`}>
          <ReviewEntry review={review} userDp={userDp} userName={userName} />
        </div>
      ))} 
    </ReviewListWrapper>
  )
}

export default AllReviews;