import React from 'react';

import {packetCategory} from './Rating';

// Styling imports
import { RatingPreviewContainer, CategoryContainer, RatingGrid } from './styles/staticStyles.style'
import { TextContainer, RatingText } from './styles/generalUse.style';
import { Bar } from './styles/propStyles.style';

const PreviewRating = ({ overview }) => {
  const { cleanAvg, commAvg, accuracyAvg, valueAvg, locationAvg, checkinAvg } = overview;

  const rating = [cleanAvg, accuracyAvg, commAvg, locationAvg, checkinAvg, valueAvg];

  const categoryData = packetCategory(rating);

  return (
    <RatingPreviewContainer>
      {categoryData.map((category) => (
        <CategoryContainer key={`preview ${category.name}`}>
          <TextContainer>{category.name}</TextContainer>
          <RatingGrid>
            <Bar margin='5px'>
              <Bar width={`${category.percent}%`} color='black' height='100%'/>
            </Bar>
          <RatingText>{category.rating}</RatingText>
          </RatingGrid>
        </CategoryContainer>
      ))}
    </RatingPreviewContainer>
  )
}

export default PreviewRating;
