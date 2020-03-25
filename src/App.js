import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Registration from './components/registration'

function App() {
  return (
    <>
      <Router>
        <Route path="/registration" component={Registration} />
      </Router>
    </>
  );
}

export default App;