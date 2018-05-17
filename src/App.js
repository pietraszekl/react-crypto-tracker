import React, { Component } from 'react';
import './App.css';
import Coin from './components/CoinList/Coin/Coin';
class App extends Component {
  render() {
    return (
      <div>
        <Coin name="Bitcoin" acronym="BTC" value={11000} cap={188698026949} />
        <Coin name="Etherum" acronym="ETH" value={842} cap={82581287147} />
        <Coin name="NEO" acronym="NEO" value={117} cap={7624760000} />
        <Coin name="EOS" acronym="EOS" value={7} cap={5513844716} />
      </div>
    );
  }
}

export default App;
