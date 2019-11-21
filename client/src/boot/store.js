import React, { Component } from 'react';
import { Provider } from 'react-redux';
import config from './config';
import App from '../App';

const STORE = config();

function Store(){
    return (
        <Provider store={ STORE }>
            <App />
        </Provider>
    );
}
export const store = STORE;
export default Store;