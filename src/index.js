import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {initialState, mockReducer} from './components/reducers/reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

  
  
const store = createStore(mockReducer);
console.log('store', store);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>,
  rootElement);
