import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import Thunk from 'redux-thunk';
import RootReducer from './Redux/Reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store= createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(Thunk))
);


ReactDom.render(
    <Provider store= {Store}>
        <App />
    </Provider>, 
document.getElementById('root'));