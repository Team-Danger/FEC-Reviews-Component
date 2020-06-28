import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Reviews from './Reviews.jsx'

// import Overview from './Overview.jsx'
// import ReviewsSummary from './ReviewsSummary.jsx'
// import PreviewRating from './PreviewRating.jsx'
// import Modal from './Modal.jsx'

const MainWrapper = styled.div`
  height: auto;
  width: auto;
  margin: 0px;
`

// const Wrapper = styled.div`
//   font-family: Calibre;
//   margin-top: 50px;
//   margin-left: 50px;
//   margin-right: 50px;
//   padding-top: 25px;
//   padding-bottom: 25px;
//   padding-right: 50px;
//   border-top: 1px solid #B3B3B3;
//   border-bottom: 1px solid #B3B3B3;
// `

// const ModalButton = styled.button`
//   font-size: 1em;
//   margin-left: 50px;
//   border: 1px solid black;
//   border-radius: 5px;
//   padding: 1em 1em;
//   background-color: white;
//   cursor: pointer;
//   &:hover {
//     background-color: #B3B3B3;
//   }
// `

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.listing)
    axios.get(`/api/${this.props.listing}`)
      .then(({data}) => {
        console.log(data);
        this.setState({data});
        console.log(this.state.data)
      })
      .catch((err) => {
        throw new Error(`cannot retrieve: ${err}`);
      });
  }

  render() {
    console.log(this.state)
    if(this.state){
      return(
        <Switch>
          <Route path='/reviews'>
            <Reviews modalOpen data={this.state.data}/>
          </Route>

          <Route path='/'>
            <Reviews data={this.state.data}/>
          </Route>
        </Switch>
      )
    }
    return(<div>Error 404</div>)
  }
}

export default App;
