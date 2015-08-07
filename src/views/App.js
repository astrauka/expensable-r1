/*global __CLIENT__*/
import React from 'react';
import {load} from '../actions/infoActions';
import InfoBar from '../components/InfoBar';
import NavBar from '../components/NavBar';
if (__CLIENT__) {
  require('./App.scss');
}

export default class App {
  render() {
    return (
      <div className="container app">
        <NavBar/>
        <InfoBar/>

        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }

  static fetchData(dispatch) {
    return dispatch(load());
  }
}
