import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {fake} from "./redux/usersReducer";
import MainApp from './App'

//TODO ESLint

ReactDOM.render(<MainApp />, document.getElementById('root'))