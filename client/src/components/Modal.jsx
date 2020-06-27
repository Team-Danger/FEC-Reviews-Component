import React from 'react';
import styled from 'styled-components';

import AllReviews from './AllReviews.jsx';
import Rating from './Rating.jsx'

const ModalWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  transform: translate(-50%, -50%);
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
  max-height: calc(100vh - 210px);
`

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const overview = this.props.overview;
    const reviews = this.props.reviews;

    let modal = (
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ExitButton onClick={this.props.toggleModal}>X</ExitButton>
        <ReviewsWrapper>
          <Rating overview={overview}/>
          <AllReviews reviews={reviews} userDp={overview.userDp} userName={overview.userName}/>
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