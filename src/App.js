import React, { Fragment } from 'react';
import Sidebar from './components/sidebar'
import Main from './components/main'
import './App.css';

function App() {
  return (
    <Fragment>
      <section className="app">
        <Sidebar />
        <Main />
      </section>
    </Fragment>
  )
}

export default App;