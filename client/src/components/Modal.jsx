import React from 'react';
import styled, {keyframes} from 'styled-components';
import {useHistory} from 'react-router-dom';
import { GoX } from "react-icons/go";

import AllReviews from './AllReviews.jsx';
import Rating from './Rating.jsx'

const modalSlide = keyframes`
  from {
    transform: translate(-50%, 0%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const ModalDisplay = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: ${(props) => (props.modalOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);  
`

const ModalWrapper = styled.div`
  width: 1000px;
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  animation: ${modalSlide} 1500ms;
  transform: translate(-50%, -50%);
`

const ExitButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: bold;
  background-color: white;
  border: white;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
  &:hover {
    background-color: #B3B3B3;
    cursor: pointer;
  }
`

const ReviewsWrapper = styled.div`
  display: flex;
  margin: 20px;
  max-height: calc(100vh - 210px);
`

const Modal = (props) => {
  const { overview, reviews, modalOpen } = props;
  const history = useHistory();
  const back = () => history.replace('/');

  return(
    <ModalDisplay modalOpen={modalOpen} onClick={back}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ExitButton onClick={back}><GoX size='1.5em'/></ExitButton>
        <ReviewsWrapper>
          <Rating overview={overview}/>
          <AllReviews reviews={reviews} userDp={overview.userDp} userName={overview.userName}/>
        </ReviewsWrapper>
      </ModalWrapper>
    </ModalDisplay>
  )
}

export default Modal;