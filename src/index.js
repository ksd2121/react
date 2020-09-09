import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {register} from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//CHANGES: I think you wanted to register your service here
register();
