import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <h1>MERN Full Stack!</h1>
      </div>
    );
  }
}

export default App;