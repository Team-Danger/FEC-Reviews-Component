import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

import ReviewsSummary from './ReviewsSummary.jsx'
import PreviewRating from './PreviewRating.jsx'
import Modal from './Modal.jsx'

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 60vw;
  margin: 0 auto;
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
const OverviewWrapper = styled.div`
  font-size: 1.5em;
  font-weight: bolder;
  margin-left: 50px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`
const OverviewText = styled.span`
  margin-left: 10px
`

const Reviews = (props) => {
  const { data, modalOpen } = props;
  const { reviews, ...rest } = data;

  return (
    <Wrapper>
      <Modal overview={rest} reviews={reviews} modalOpen={modalOpen} />
      <OverviewWrapper><FaStar size='1em' color='#FF585D'/><OverviewText>{rest.avg} ({rest.reviewSize} reviews)</OverviewText></OverviewWrapper>
      <PreviewRating overview={rest} />
      <ReviewsSummary reviews={reviews.slice(0, 6)} />
      <Link to='/reviews'><ModalButton> Show all {rest.reviewSize} reviews</ModalButton></Link>
    </Wrapper>
  )
}

Reviews.defaultProps = {modalOpen: false};

export default Reviews;
