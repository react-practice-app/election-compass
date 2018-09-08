import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Router from 'react-router';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import LocalInfoContainer from './containers/LocalInfoContainer';

class App extends Component {
  render() {
    return (
      <LocalInfoContainer />
    );
  }
}

export default App;
