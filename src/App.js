import React, { Component } from 'react';
import './App.css';
import HeaderComponent from "./header/HeaderComponent";
import BodyComponent from "./body/BodyComponent";
import Footer from "./footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100%' }}>
        <HeaderComponent/>
        <BodyComponent />
        <Footer/>
      </div>
    );
  }
}

export default App;
