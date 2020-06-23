import React from 'react';
import axios from 'axios';

import ReviewsBody from './ReviewsBody.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listingSummary: {},
      reviewsPreview:[],
      allReviews:[] //to prep for modal
    }

    this.getFromDB = this.getFromDB.bind(this);
  }

  componentDidMount() {
    this.getFromDB();
  }
  
  getFromDB() {
    const test = (Math.floor(Math.random() * (100 - 1)) + 1).toString().padStart(3, '0');

    axios.get(`/api/${test}`)
      .then((results) => {
        const {reviews, ...rest} = results.data[0];

        if(reviews.length > 6) {
          this.setState({
            listingSummary: rest,
            reviewsPreview: reviews.slice(0,6),
            allReviews: reviews
          })
        } else {
          this.setState({
            listingSummary: rest,
            reviewsPreview: reviews,
            allReviews: reviews
          })
        }
      })
      .catch((err) => { 
        console.log(err);
      });
  }

  render() {
    return (
      <div className='Reviews'>
        <div className='overview'>{this.state.listingSummary.avg} ({this.state.listingSummary.review_size} reviews)</div>
        <ReviewsBody reviews={this.state.reviewsPreview}/>
      </div>
    )
  }
}

export default App;
