import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/App';

const listing = '005';

ReactDOM.render(<Router><App listing={listing} /></Router>, document.getElementById('reviews'));

