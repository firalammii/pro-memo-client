import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import App from './App';
import ContextPovider from './context/ContextPovider';
import './index.css';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <ContextPovider>
            <App />
        </ContextPovider>
    </Provider>
);