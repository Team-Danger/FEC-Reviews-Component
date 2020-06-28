import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import Overview from './Overview.jsx'
import ReviewsSummary from './ReviewsSummary.jsx'
import PreviewRating from './PreviewRating.jsx'
import Modal from './Modal.jsx'

const Wrapper = styled.div`
  font-family: Calibre;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 50px;
  border-top: 1px solid #B3B3B3;
  border-bottom: 1px solid #B3B3B3;
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

const Reviews = (props) => {
  const { data, modalOpen, listing } = props;
  const { reviews, ...rest } = data;

  return (
    <Wrapper>
      <Modal overview={rest} reviews={reviews} modalOpen={modalOpen} />
      <Overview overview={rest} />
      <PreviewRating overview={rest} />
      <ReviewsSummary reviews={reviews.slice(0, 6)} />
      <Link to='/reviews'><ModalButton> Show all {rest.reviewSize} reviews</ModalButton></Link>
    </Wrapper>
  )
}

Reviews.defaultProps = {modalOpen: false};

export default Reviews;
