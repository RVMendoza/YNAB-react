import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {collapsed : true}
  }

  onNavToggle(collapsed) {
    this.setState({ collapsed: !collapsed });
  } 

  render() {
    var {collapsed} = this.state;
    return (
      <div className="App u-flex">
        <nav className="App-nav">
          {collapsed ?
            "Navigation collapsed"
            :
            "Navigation expanded"
          }
          <button onClick={() => this.onNavToggle(collapsed)}>
            {this.state.collapsed ? "expand" : "collapse"}
          </button>
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
