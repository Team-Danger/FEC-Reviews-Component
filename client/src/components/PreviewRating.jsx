import React from 'react';
import styled from 'styled-components';

const RatingPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-right: 50px;
`

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 15px;
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
const TextContainer = styled.div`
  width: 25%;
  flex-direction: column;
`
const Rating = styled.span`
  font-size: 15px;
  font-weight: bolder;
`

const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 75%;
  margin-right: 10px;
`
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
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${cleanPercent}%`} color='black' height='100%'/> 
          </Bar>
          <Rating>{cleanAvg}</Rating>
        </RatingContainer>
      </CategoryContainer>

      <CategoryContainer>
        <TextContainer padding={50}>Accuracy</TextContainer>
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${accuracyPercent}%`} color='black' height='100%'/>
          </Bar> 
          <Rating>{accuracyAvg}</Rating>
        </RatingContainer>
      </CategoryContainer>

      <CategoryContainer>
        <TextContainer>Communication</TextContainer>
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${commPercent}%`} color='black' height='100%'/> 
          </Bar>
          <Rating>{commAvg}</Rating>
        </RatingContainer>
      </CategoryContainer>

      <CategoryContainer>
        <TextContainer padding={50}>Location</TextContainer>
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${locationPercent}%`} color='black' height='100%'/>
          </Bar> 
          <Rating>{locationAvg}</Rating>
        </RatingContainer>
      </CategoryContainer>

      <CategoryContainer>
        <TextContainer>Check-in</TextContainer>
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${checkinPercent}%`} color='black' height='100%'/> 
          </Bar>
          <Rating>{checkinAvg}</Rating>
        </RatingContainer>
      </CategoryContainer>

      <CategoryContainer>
        <TextContainer padding={50}>Value</TextContainer>
        <RatingContainer>
          <Bar width='33%' color='#B3B3B3' height='0.5em' margin='5px'>
            <Bar width={`${valuePercent}%`} color='black' height='100%'/>
          </Bar> 
          <Rating>{valueAvg}</Rating>
        </RatingContainer>
      </CategoryContainer>

    </RatingPreviewContainer>
  )
}

export default PreviewRating;
