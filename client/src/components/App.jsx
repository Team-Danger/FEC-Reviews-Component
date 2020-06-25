import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: sans-serif;
`

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
      <Wrapper>
        
      </Wrapper>
    )
  }
}

export default App;
