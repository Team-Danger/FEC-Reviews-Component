import React from 'react';
import axios from 'axios';

import { Wrapper } from './styles/stylesheet.jsx'

import ReviewsSummary from './reviewsSummary.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {reviews: {}}

    this.getFromDB = this.getFromDB.bind(this);
  }

  componentDidMount() {
    this.getFromDB();
  }

  getFromDB() {
    const test = (Math.floor(Math.random() * (100 - 1)) + 1).toString().padStart(3, '0');

    axios.get(`/api/${test}`)
      .then((results) => {
        this.setState({reviews: results.data[0]});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Wrapper>
        <ReviewsSummary avg={this.state.reviews.avg} reviewsSize={this.state.reviews.review_size} />
      </Wrapper>
    )
  }
}

export default App;
