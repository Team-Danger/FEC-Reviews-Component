import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Overview from './Overview.jsx'

const Wrapper = styled.div`
  font-family: sans-serif;
`
const TestImg = styled.img`
width: 50px;
height: 50px;
border-radius: 50%`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: {},
      overview: {}}

    this.getFromDB = this.getFromDB.bind(this);
  }

  componentDidMount() {
    this.getFromDB();
  }
  
  getFromDB() { 
    
    axios.get(`/api/${this.props.listing}`) 
      .then((results) => {
        const {reviews, ...rest} = results.data;
        this.setState({
          reviews: reviews,
          overview: rest});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <OverviewWrapper>
          {this.props.overview.avg} ({this.props.overview.reviewSize} reviews)
      </OverviewWrapper>
    )
  }
}

export default App;
