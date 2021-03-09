import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const renderEntireTree = store => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

store.subscribe(() => {
    renderEntireTree(store);
});

renderEntireTree(store);