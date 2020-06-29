import React from 'react';

// Styling imports
import { 
  CategoryWrapper, 
  OverviewText, 
  OverviewWrapper, 
  RatingContainer,
  RatingWrapper, 
} from './styles/staticStyles.style'

import { TextContainer, RatingText } from './styles/generalUse.style';
import { Bar } from './styles/propStyles.style';
import { FaStar } from 'react-icons/fa';

const ratingPercent = (average) => (Math.floor((Number(average) / 5) * 100));

const packetCategory = (rating) => {
  let categoryData = [];

  const categoryNames = ['Cleaniness', 'Accuracy', 'Communication', 'Location', 'Check-in', 'Value'];

  for (let idx = 0; idx < categoryNames.length; idx += 1) {
    let categoryPack = {};

    categoryPack.rating = rating[idx];
    categoryPack.name = categoryNames[idx];
    categoryPack.percent = ratingPercent(rating[idx]);

    categoryData.push(categoryPack);
  }

  return categoryData;
}

const Rating = (props) => {
  const { cleanAvg, commAvg, accuracyAvg, valueAvg, locationAvg, checkinAvg } = props.overview;
 
  const rating = [cleanAvg, accuracyAvg, commAvg, locationAvg, checkinAvg, valueAvg];

  const categoryData = packetCategory(rating);

  return (
    <RatingWrapper>
      <OverviewWrapper><FaStar size='1em' color='#FF585D'/><OverviewText>{props.overview.avg} ({props.overview.reviewSize} reviews)</OverviewText></OverviewWrapper>
      {categoryData.map((category, idx) => (
        <CategoryWrapper key={`${category.name}`}>
          <TextContainer>{category.name}</TextContainer>
          <RatingContainer>
            <Bar margin='5px'>
              <Bar width={`${category.percent}%`} color='black' height='100%'/> 
            </Bar>
            <RatingText>{category.rating}</RatingText>
          </RatingContainer>
        </CategoryWrapper>
      ))}
    </RatingWrapper>
  )
}

export { Rating, packetCategory };
