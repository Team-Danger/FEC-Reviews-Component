import React from 'react';
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";

const RatingWrapper = styled.div`
  flex-direction: column;
  width: 50%;
  margin-right: 50px;
  padding-left: 20px
`

const OverviewWrapper = styled.div`
  font-size: 2em;
  font-weight: bolder;
  display: flex;
  align-items: center;
`

const OverviewText = styled.span`
  margin-left: 10px
`

const CategoryWrapper = styled.div`
  margin-top: 16px;
  display: flex;
`

const TextContainer = styled.span`
  width: 25%;
`
const RatingText = styled.span`
  font-size: 15px;
  font-weight: bolder;
`
const RatingContainer = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: flex-end;
`

const Bar = styled.div`
  margin-top: ${props => props.margin ? props.margin : 0};
  width: ${props => props.width};
  height: ${props => props.height};
  float: left;
  border-radius: 15%;
  background-color: ${props => props.color};
  margin-right: 5px;
`

const Rating = (props) => {
  const { cleanAvg, commAvg, accuracyAvg, valueAvg, locationAvg, checkinAvg } = props.overview;
  const cleanPercent = Math.floor((Number(cleanAvg) / 5) * 100);
  const commPercent = Math.floor((Number(commAvg) / 5) * 100);
  const accuracyPercent = Math.floor((Number(accuracyAvg) / 5) * 100);
  const valuePercent = Math.floor((Number(valueAvg) / 5) * 100);
  const locationPercent = Math.floor((Number(locationAvg) / 5) * 100);
  const checkinPercent = Math.floor((Number(checkinAvg) / 5) * 100);

  return(
    <RatingWrapper>

      <OverviewWrapper><FaStar size='1em' color='#FF585D'/><OverviewText>{props.overview.avg} ({props.overview.reviewSize} reviews)</OverviewText></OverviewWrapper>

      <CategoryWrapper>
        <TextContainer>Cleaniness</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${cleanPercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{cleanAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <TextContainer>Accuracy</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${accuracyPercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{accuracyAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <TextContainer>Communication</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${commPercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{commAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <TextContainer>Location</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${locationPercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{locationAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <TextContainer>Check-in</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${checkinPercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{checkinAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <TextContainer>Value</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${valuePercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{valueAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

    </RatingWrapper>
  )
}

export default Rating;