import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import Reviews from './Reviews.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`/api/${this.props.listing}`)
      .then(({data}) => {
        this.setState({data});
      })
      .catch((err) => {
        throw new Error(`cannot retrieve: ${err}`);
      });
  }

  render() {
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
