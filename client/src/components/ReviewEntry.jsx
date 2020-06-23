import React from 'react';

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      readMore: null,
      body:''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    if (this.props.entry.body.length > 180) {
      this.setState({
        readMore: true,
        body: this.props.entry.body.slice(0, 180)
      })
    } else {
      this.setState({
        readMore: false,
        body:this.props.entry.body})
    }
  }

  handleClick() {
    this.setState({
      body: this.props.entry.body,
    readMore: false})
  }

  render() {
    if (this.state.readMore) {
      return (
        <div>
          {this.props.entry.reviewer_name}
          <br></br>
          {this.state.body}
          <a href="#" onClick={this.handleClick}> ...Read more</a>
        </div>
      )
    } else {
      return (
        <div>
          {this.props.entry.reviewer_name}
          <br></br>
          {this.state.body}
        </div>
      )
    }
    
  }
}

export default ReviewEntry;