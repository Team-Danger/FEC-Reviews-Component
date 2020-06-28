import React from 'react';
import moment from 'moment';

//Styling imports
import { TopStyle, AvatarStyle, TopText, Date } from './styles/generalUse.style';
import {EntryWrapper, ShiftedWrapper} from './styles/staticStyles.style';

const ReviewEntry = (props) => {
  const { review, userDp, userName } = props;
  const reviewerURL = `https://dteamdp.s3-us-west-2.amazonaws.com/pug${review.dp}.jpg`
  const date = moment(review.date).format('MMMM YYYY');

  let entry;
  if (review.respond) {
    const listerURL = `https://dteamdp.s3-us-west-2.amazonaws.com/pug${userDp}.jpg`;
    entry = (
      <div>
        <EntryWrapper>
          <TopStyle>
            <AvatarStyle src={reviewerURL} />
            <TopText>
              {review.reviewer_name}
              <br></br>
              <Date>{date}</Date>
            </TopText>
          </TopStyle>
          {review.body}
        </EntryWrapper>

        <ShiftedWrapper>
          <TopStyle>
            <AvatarStyle src={listerURL} />
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
      <EntryWrapper>
        <TopStyle>
          <AvatarStyle src={reviewerURL} />
          <TopText>
            {review.reviewer_name}
            <br></br>
            <Date>{date}</Date>
          </TopText>
        </TopStyle>
        {review.body}
    </EntryWrapper>
    )
  }

  return (
    entry
  )
}

export default ReviewEntry;