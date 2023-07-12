import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/font-awesome/css/all.css';
import './css/font-awesome/js/all.js';
import './css/Commons/AiStyle.css';
import './css/Commons/Bootstrap-Modified.css';
import './css/Commons/Background-Color.css';
import './css/Commons/ImageStyle.css';
import './css/Commons/Tooltip-Style.css';
import './css/Commons/Slider-Style.css';
import './css/drawing-canvas/Schedule-Table.css';

import Router from './routes/Router';

class MainApp extends React.Component {

  render() {

    return (
      <Router />
    );
  }

}

export default MainApp;
