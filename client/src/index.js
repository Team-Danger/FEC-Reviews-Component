import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const listing = '001'

ReactDOM.render(<App listing={listing}/>, document.getElementById('reviews'));
