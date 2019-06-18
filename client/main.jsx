import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../imports/ui/reducers/index'
import './main.css';
//Import css later!!

const store = createStore(
  reducers
);


Meteor.startup(() => {
  render(
    <Provider store = {store}>
      <App />
    </Provider>, document.getElementById('react-target')
  );
});

