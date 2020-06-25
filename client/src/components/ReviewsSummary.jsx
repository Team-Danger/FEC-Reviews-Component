import React from 'react';
import styled from 'styled-components';

import PreviewEntry from './PreviewEntry.jsx'

const ReviewSummaryStyle = styled.div`
  display: flex;
`
const ReviewsSummary = (props) => {
  const { reviews } = props;

  return (
    <div>
      {reviews.map((review, idx) => (
        <PreviewEntry review={review} />
      ))}   
    </div>
  )
}

export default ReviewsSummary;
