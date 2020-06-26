import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Overview from './Overview.jsx'
import ReviewsSummary from './ReviewsSummary.jsx'
import PreviewRating from './PreviewRating.jsx'

const Wrapper = styled.div`
  font-family: sans-serif
  display: flex;
`

const ModalButton = styled.button`
  font-size: 1em;
  margin-left: 50px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1em 1em;
  background-color: white;
`

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
    console.log();
    return (
      <Wrapper>
        <Overview overview={this.state.overview} />
        <PreviewRating overview={this.state.overview} />
        <ReviewsSummary reviews={this.state.reviews.slice(0,6)} />
        <ModalButton>Show all {this.state.overview.reviewSize} reviews</ModalButton>
      </Wrapper>
    )
  }
}

export default App;
