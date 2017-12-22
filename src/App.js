import React, { Component } from 'react';
import './App.css';
import Benefits from "./components/Benefits";
import Options from "./components/Options";
import Footer from "./components/Footer";
import CallsToAction from "./components/CallsToAction";

class PricingPage extends Component {
  render() {
    return (
      <div className="App">
        <Benefits />
        <Options />
        <CallsToAction />
        <Footer />
      </div>
    );
  }
}

export default PricingPage;
