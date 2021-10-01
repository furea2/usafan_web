import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { inDev } from './utils/helpers';


const app = <App />;

ReactDOM.render(app, document.getElementById('app'));

if (inDev() && module.hot) module.hot.accept();