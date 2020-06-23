import React from 'react';
import ReviewEntry from './ReviewEntry.jsx'

class ReviewsBody extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
       {this.props.reviews.map((entry) => (
          <ReviewEntry entry={entry} />
       ))}
      </div>
    )
  }
}

export default ReviewsBody;