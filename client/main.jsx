import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../imports/ui/reducers/index'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer
);

Meteor.startup(() => {
  render(
    <Provider store = {store}>
      <App />
    </Provider>, document.getElementById('react-target')
  );
});
