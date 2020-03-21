import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Registration from './components/registration'
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Route path="/" component={Registration} />
      </Router>
    </Fragment>
  );
}

export default App;
