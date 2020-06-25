import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`

const AvatarStyle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-direction: column;
`
const NameStyle = styled.div`
  flex-direction: row;
`;

const TimeStyle = styled.div`
  flex-direction: row;
`

class PreviewEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { review } = this.props;
    const imageURL = `https://dteamdp.s3-us-west-2.amazonaws.com/pug${review.dp}.jpg`

    return(
      <Wrapper>
        <AvatarStyle src={imageURL} />
        <NameStyle>{review.reviewer_name}</NameStyle>
        
      </Wrapper>

    )
  }
}

export default PreviewEntry;