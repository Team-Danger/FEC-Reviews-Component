import React from 'react';

// Styling imports
import { RatingWrapper, OverviewWrapper, OverviewText, CategoryWrapper, RatingContainer} from './styles/staticStyles.style'
import { TextContainer, RatingText } from './styles/generalUse.style';
import { Bar } from './styles/propStyles.style';
import { FaStar } from "react-icons/fa";

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
          <Bar width='33%' color='#B3B3B3' height='0.25em' margin='5px'>
            <Bar width={`${cleanPercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{cleanAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <TextContainer>Accuracy</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.25em' margin='5px'>
            <Bar width={`${accuracyPercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{accuracyAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <TextContainer>Communication</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.25em' margin='5px'>
            <Bar width={`${commPercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{commAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <TextContainer>Location</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.25em' margin='5px'>
            <Bar width={`${locationPercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{locationAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <TextContainer>Check-in</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.25em' margin='5px'>
            <Bar width={`${checkinPercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{checkinAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <TextContainer>Value</TextContainer> 
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.25em' margin='5px'>
            <Bar width={`${valuePercent}%`} color='black' height='100%'/> 
          </Bar>
        <RatingText>{valueAvg}</RatingText>
        </RatingContainer>
      </CategoryWrapper>

    </RatingWrapper>
  )
}

export default Rating;
