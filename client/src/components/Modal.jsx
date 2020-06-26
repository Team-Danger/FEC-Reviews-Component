import React from 'react';
import styled from 'styled-components';

import AllReviews from './AllReviews.jsx';
import Rating from './Rating.jsx'

const ModalWrapper = styled.div`
  width: 800px;
  maxWidth: 100%;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  zIndex: 999;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`

const ExitButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: bold;
  background-color: white;
  border: white;
  margin-left: 20px;
  margin-top: 20px;
  &:hover {
    background-color: #B3B3B3;
  }
`

const ReviewsWrapper = styled.div`
  display: flex;
  margin: 20px;
`

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const overview = this.props.overview;

    let modal = (
      <ModalWrapper>
        <ExitButton onClick={this.props.toggleModal}>X</ExitButton>
        <ReviewsWrapper>
          <Rating overview={overview}/>
          <AllReviews />
        </ReviewsWrapper>
      </ModalWrapper>
    )

    if(this.props.modalOpen){
      return modal;
    } else {
      return null;
    }
  }
}

export default Modal;