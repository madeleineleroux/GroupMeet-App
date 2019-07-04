import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../imports/ui/reducers/index'
import {applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import './main.css';
import {fetchSchedule} from "../imports/ui/actions/DayAction";
//Import css later!!

const store = createStore(reducers,
  compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

store.dispatch(fetchSchedule());


Meteor.startup(() => {
  render(
    <Provider store = {store}>
      <App />
    </Provider>, document.getElementById('react-target')
  );
});

