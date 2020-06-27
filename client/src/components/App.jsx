import React, { useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Overview from './Overview.jsx'
import ReviewsSummary from './ReviewsSummary.jsx'
import PreviewRating from './PreviewRating.jsx'
import Modal from './Modal.jsx'


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
  cursor: pointer;
  &:hover {
    background-color: #B3B3B3;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      overview: {},
      modalOpen: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
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

  toggleModal() {
    const toggleState = !this.state.modalOpen;
    this.setState({modalOpen: toggleState});
  }

  render() {
    return (
      <Wrapper ref={this.outsideRef} onClick={this.toggleModal}>
        <Overview overview={this.state.overview} />
        <PreviewRating overview={this.state.overview} />
        <ReviewsSummary reviews={this.state.reviews.slice(0,6)} />
        <ModalButton onClick={this.toggleModal}> Show all {this.state.overview.reviewSize} reviews</ModalButton>
        <Modal overview={this.state.overview} reviews={this.state.reviews} modalOpen={this.state.modalOpen} toggleModal={this.toggleModal}/>
      </Wrapper>
      
    )
  }
}

export default App;
