import React from 'react';

// Styling imports
import { RatingPreviewContainer, CategoryContainer, RatingGrid } from './styles/staticStyles.style'
import { TextContainer, RatingText } from './styles/generalUse.style';
import { Bar } from './styles/propStyles.style';

const PreviewRating = ({ overview }) => {

  const { cleanAvg, commAvg, accuracyAvg, valueAvg, locationAvg, checkinAvg } = overview;
  const cleanPercent = Math.floor((Number(cleanAvg) / 5) * 100);
  const commPercent = Math.floor((Number(commAvg) / 5) * 100);
  const accuracyPercent = Math.floor((Number(accuracyAvg) / 5) * 100);
  const valuePercent = Math.floor((Number(valueAvg) / 5) * 100);
  const locationPercent = Math.floor((Number(locationAvg) / 5) * 100);
  const checkinPercent = Math.floor((Number(checkinAvg) / 5) * 100);

  return (
    <RatingPreviewContainer>
      <CategoryContainer>
        <TextContainer>Cleanliness</TextContainer>
        <RatingGrid>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${cleanPercent}%`} color='black' height='100%'/> 
          </Bar>
          <RatingText>{cleanAvg}</RatingText>
        </RatingGrid>
      </CategoryContainer>

      <CategoryContainer>
        <TextContainer padding={50}>Accuracy</TextContainer>
        <RatingGrid>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${accuracyPercent}%`} color='black' height='100%'/>
          </Bar> 
          <RatingText>{accuracyAvg}</RatingText>
        </RatingGrid>
      </CategoryContainer>

      <CategoryContainer>
        <TextContainer>Communication</TextContainer>
        <RatingGrid>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${commPercent}%`} color='black' height='100%'/> 
          </Bar>
          <RatingText>{commAvg}</RatingText>
        </RatingGrid>
      </CategoryContainer>

      <CategoryContainer>
        <TextContainer padding={50}>Location</TextContainer>
        <RatingGrid>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${locationPercent}%`} color='black' height='100%'/>
          </Bar> 
          <RatingText>{locationAvg}</RatingText>
        </RatingGrid>
      </CategoryContainer>

      <CategoryContainer>
        <TextContainer>Check-in</TextContainer>
        <RatingGrid>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${checkinPercent}%`} color='black' height='100%'/> 
          </Bar>
          <RatingText>{checkinAvg}</RatingText>
        </RatingGrid>
      </CategoryContainer>

      <CategoryContainer>
        <TextContainer padding={50}>Value</TextContainer>
        <RatingGrid>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${valuePercent}%`} color='black' height='100%'/>
          </Bar> 
          <RatingText>{valueAvg}</RatingText>
        </RatingGrid>
      </CategoryContainer>

    </RatingPreviewContainer>
  )
}

export default PreviewRating;
