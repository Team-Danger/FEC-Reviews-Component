import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {reviews: {}}

    this.getFromDB = this.getFromDB.bind(this);
  }

  componentDidMount() {
    this.getFromDB();
  }

  getFromDB() {
    const test = (Math.floor(Math.random() * (100 - 1)) + 1).toString().padStart(3, '0');

    axios.get(`/api/${test}`)
      .then((results) => {
        this.setState({reviews: results.data[0]});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='Reviews'>
        <div className='overview'>{this.state.reviews.avg} ({this.state.reviews.review_size} reviews)</div>
      </div>
    )
  }
}

export default App;
