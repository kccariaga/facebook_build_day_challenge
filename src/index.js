import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

registerServiceWorker();

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));