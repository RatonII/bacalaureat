import React, { Component } from 'react';
import imag from './images/crop1.jpg';
import foot from './images/foot.jpg';
import stele4 from './images/stele4.jpg';
import math1 from './images/math1.jpg';
import chemistry1 from './images/chemistry1.jpg';
import bones1 from './images/bones1.jpg';
import physic1 from './images/physic1.jpg';
import bac4 from './images/bac4.png';
import './App.css';

const divStyle = {
  position: 'fixed'
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={bac4} className="bac" alt="bac" width="162" height="63" />

        </div>
      </div>


    );
  }
}

export default App;
