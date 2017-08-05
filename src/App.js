import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';

class App extends Component {

  render() {
    return (
      <div className="App u-flex">
        <nav className="App-nav">
          <Navigation />
        </nav>
        <div className="App-mainContainer">
          <header>
            Header - contains overview month and such (other pages have different headers)
          </header>
          <main className="App-main">
            main section - all of the content
          </main>
        </div>
      </div>
    );
  }
}

export default App;
