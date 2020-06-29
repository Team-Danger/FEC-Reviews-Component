import styled from 'styled-components';

const TopStyle = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const AvatarStyle = styled.img`
  border-radius: 50%;
  flex-direction: column;
  height: 50px;
  margin-right: 10px;
  width: 50px;
`;
const TopText = styled.div`
  flex-direction: row
`;
const Date = styled.span`
  color: #B3B3B3;
`;

const TextContainer = styled.div`
  width: 25%;
  flex-direction: column;
`;
const RatingText = styled.span`
  font-size: 13px;
  font-weight: bolder;
`;
export {
  AvatarStyle,
  Date,
  RatingText,
  TextContainer,
  TopStyle,
  TopText,
};
