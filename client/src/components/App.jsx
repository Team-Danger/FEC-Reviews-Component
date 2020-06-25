import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Overview from './Overview.jsx'
import ReviewsSummary from './ReviewsSummary.jsx'

const Wrapper = styled.div`
  font-family: sans-serif
  display: flex;
`
// const TestImg = styled.img`
// width: 50px;
// height: 50px;
// border-radius: 50%`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      overview: {}}
  }

  componentDidMount() {
    axios.get(`/api/${this.props.listing}`) 
    .then((results) => {
      const {reviews, ...rest} = results.data;
      this.setState({
        reviews: reviews,
        overview: rest});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    console.log(this.state)
    return (
      <Wrapper>
        <Overview overview={this.state.overview} />
        <ReviewsSummary reviews={this.state.reviews} />
      </Wrapper>
    )
  }
}

export default App;
