import React, { Component } from 'react';
import Header from './components/header';
import Products from './components/products';

import './App.css';

class App extends Component {
  state = {
    products: []
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData(){
    fetch('https://bojwbhw97e.execute-api.us-east-2.amazonaws.com/Production/eshop-challenge/products')
    .then(response => response.json())
    .then(parsedJSON => this.setState({ products: parsedJSON.body }))
    .catch(error => console.log('parssing faild', error))
  }
  render() {
    return (

      <div>
        <Header />
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
