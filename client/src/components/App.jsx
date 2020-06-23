import React from 'react';
import axios from 'axios';

import ReviewsBody from './ReviewsBody.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listingSummary: {},
      reviews:[]}

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
        this.setState({
          listingSummary: rest,
          reviews: reviews});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='Reviews'>
        <div className='overview'>{this.state.listing.avg} ({this.state.listing.review_size} reviews)</div>
        <ReviewsBody reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;
