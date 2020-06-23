import React from 'react';
import {StyledReviewSummary} from './styles/stylesheet.jsx'

class ReviewsSummary extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <StyledReviewSummary>
        {this.props.avg} ({this.props.reviewsSize} reviews)
      </StyledReviewSummary>
    )
  }
}

export default ReviewsSummary;