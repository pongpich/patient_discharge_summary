import React, { Component } from 'react';

import "./css/image.css";
import { magnify } from './libs/Magnifying-Glass';

class TestEMR extends React.Component {

  componentDidMount() {
    magnify("myimage", 3);
  }

  render() {

    return (
      <div>
        <div className="img-magnifier-container">
          <img id="myimage" src="https://www.jotform.com/blog/wp-content/uploads/2011/08/best-File-Comparison-Tools.jpeg" width="800" height="600" alt="Girl" />
        </div>
      </div>
    );
  }
}

export default TestEMR;
