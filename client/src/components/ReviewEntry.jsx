import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  margin: 25px 50px 25px 50px;  
`

const ShiftedWrapper = styled(Wrapper)`
  padding-left: 30px;
`

const TopStyle = styled.div`
  display: flex;
  margin-bottom: 10px;
`
const AvatarStyle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-direction: column;
  margin-right: 10px;
`
const TopText = styled.div`
  flex-direction: row
`
const Date = styled.span`
  color: #B3B3B3;
`


const ReviewEntry = (props) => {
  const { review, userDp, userName } = props;
  const reviewerURL = `https://dteamdp.s3-us-west-2.amazonaws.com/pug${review.dp}.jpg`
  const date = moment(review.date).format('MMMM YYYY');

  let entry;
  if (review.respond) {
    const listerURL = `https://dteamdp.s3-us-west-2.amazonaws.com/pug${userDp}.jpg`;
    entry = (
      <div>
      <Wrapper>
        <TopStyle>
          <AvatarStyle src={reviewerURL} id='reviewDp'/>
          <TopText>
            {review.reviewer_name}
            <br></br>
            <Date>{date}</Date>
          </TopText>
        </TopStyle>
        {review.body}
      </Wrapper>

      <ShiftedWrapper>
        <TopStyle>
          <AvatarStyle src={listerURL} id='listerDp'/>
          <TopText>
            Response from {userName}
            <br></br>
            <Date>{date}</Date>
          </TopText>
        </TopStyle>
        {review.respond}
      </ShiftedWrapper>
      </div>
    )
  } else {
    entry = (
      <Wrapper>
      <TopStyle>
        <AvatarStyle src={reviewerURL} id='reviewDp'/>
        <TopText>
          {review.reviewer_name}
          <br></br>
          <Date>{date}</Date>
        </TopText>
      </TopStyle>
      {review.body}
    </Wrapper>
    )
  }

  return (
    entry
  )
}

export default ReviewEntry;