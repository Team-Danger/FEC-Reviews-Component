import React from 'react'

import ReviewEntry from './ReviewEntry.jsx'
import styled from 'styled-components';

const ReviewListWrapper = styled.div`
  flex-direction: column;
  width: 50%;
  overflow-y: auto;
`
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