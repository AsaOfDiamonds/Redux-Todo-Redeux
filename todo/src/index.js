import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import './index.css';
import App from './App';

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);