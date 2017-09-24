import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar.js'
import Footer from './Footer.js'
import Content from './Content.js'

class App extends Component {
  render() {
    return (
      <div className="App">
         <NavigationBar />
         <Content />
         <Footer />
      </div>
    );
  }
}

export default App;
