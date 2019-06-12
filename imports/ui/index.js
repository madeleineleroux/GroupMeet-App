import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import "./index.css"
import { combineReducers } from "redux";
import CalendarReducer from './CalendarReducer';
import DayReducer from './DayReducer';
import CellReducer from './CellReducer';

const store = createStore({
    DayReducer
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-target')
)