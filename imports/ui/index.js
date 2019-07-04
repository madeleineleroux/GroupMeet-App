import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import "./index.css"
import thunk from 'redux-thunk';
import {fetchSchedule} from "./actions/DayAction";

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

store.dispatch(fetchSchedule());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-target')
)