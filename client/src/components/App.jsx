import React from 'react';
import axios from 'axios';

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
        console.log(rest);
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
      <div className='Reviews'>
        {this.state.overview.reviewSize}
      </div>
    )
  }
}

export default App;
