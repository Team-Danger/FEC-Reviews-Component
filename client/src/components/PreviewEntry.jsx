import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

// const BasicInfoStyle = styled.div`
//   display: flex;
//   flex-direction: column;
// `
// const AvatarStyle = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   flex-direction: column;
// `
// const DateStyle = styled.span`
//   color: #B3B3B3;
// `
// const BodyStyle = styled.div`
//   flex-direction: row;
// `

const TopStyle = styled.div`
  display: flex;
`
const AvatarStyle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-direction: column;
`
const TopText = styled.div`
  flex-direction: row
`
const Date = styled.span`
  color: #B3B3B3;
`
class PreviewEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { review } = this.props;
    const imageURL = `https://dteamdp.s3-us-west-2.amazonaws.com/pug${review.dp}.jpg`
    const date = moment(review.date).format('MMMM YYYY');

    return(
      <div>
        <TopStyle>
          <AvatarStyle src={imageURL} />
          <TopText>
            {review.reviewer_name}
            <br></br>
            <Date>{date}</Date>
          </TopText>
        </TopStyle>
        {review.body}
      </div>
    )
  }
}

export default PreviewEntry;