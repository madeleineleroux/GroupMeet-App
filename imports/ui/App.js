import React from 'react';
import CalendarView from "./containers/CalendarView";
import './components/App.css'
import NavbarA from './components/NavbarA'

const App = () => (
  <div>
    <NavbarA />
    <CalendarView />
  </div>
)

export default App