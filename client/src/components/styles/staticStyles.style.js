import styled, { keyframes } from 'styled-components';

// AllReviews
const ReviewListWrapper = styled.div`
  flex-direction: column;
  overflow-y: auto;
  width: 65%;
`;

// Modal
const modalSlide = keyframes`
  from {
    transform: translate(-50%, 0%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const ModalWrapper = styled.div`
  animation: ${modalSlide} 650ms;
  background-color: white;
  border-radius: 8px;
  border: 1px solid black;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 750px;
`;

const ExitButton = styled.button`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  border: white;
  font-weight: bold;
  height: 30px;
  margin-left: 20px;
  margin-top: 20px;
  width: 30px;
  &:hover {
    background-color: #B3B3B3;
    cursor: pointer;
  }
`;

const ReviewsWrapper = styled.div`
  display: flex;
  margin: 20px;
  max-height: 675px;
`;
// PreviewEntry
const PreviewWrapper = styled.div`
  margin: 50px 15px 25px 50px; 
`;

// ReviewEntry
const EntryWrapper = styled.div`
  margin: 25px 50px 25px 50px;
  padding-bottom: 30px;  
`;
const ShiftedWrapper = styled(EntryWrapper)`
  padding-left: 30px;
`;

// PreviewRating
const RatingPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-right: 50px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 15px;
  width: 100%;
`;

const RatingGrid = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  margin-right: 10px;
  width: 75%;
`;
// Rating
const RatingWrapper = styled.div`
  flex-direction: column;
  margin-right: 50px;
  padding-left: 20px;
  width: 35%;
`;

const OverviewWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 2em;
  font-weight: bolder;
`;

const OverviewText = styled.span`
  margin-left: 10px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  font-size: 15px;
`;

const RatingContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 75%;
`;

// Reviews
const Wrapper = styled.div`
  border-bottom: 1px solid #B3B3B3;
  border-top: 1px solid #B3B3B3;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  padding-bottom: 25px;
  padding-right: 50px;
  padding-top: 25px;
  width: 60vw;
`;

const ModalButton = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  font-size: 1em;
  margin-left: 50px;
  padding: 1em 1em;
  &:hover {
    background-color: #B3B3B3;
  }
`;
const MainOverviewWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.5em;
  font-weight: bolder;
  margin-bottom: 15px;
  margin-left: 50px;
`;
const MainOverviewText = styled.span`
  margin-left: 10px
`;

export {
  CategoryContainer,
  CategoryWrapper,
  EntryWrapper,
  ExitButton,
  MainOverviewText,
  MainOverviewWrapper,
  ModalButton,
  ModalWrapper,
  OverviewText,
  OverviewWrapper,
  PreviewWrapper,
  RatingContainer,
  RatingGrid,
  RatingPreviewContainer,
  RatingWrapper,
  ReviewListWrapper,
  ReviewsWrapper,
  ShiftedWrapper,
  Wrapper,
};
