import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

class Navigation extends Component {
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
        <div className="Navigation">
          <div>
            Budget Selector
            <button onClick={() => this.onNavToggle(collapsed)}>
              {this.state.collapsed ? "expand" : "collapse"}
            </button>
          </div>
          <ul>
            <li>
              <NavigationItem
                icon="budget"
                title="Budget"
              />
            </li>
            <li>
              <NavigationItem
                icon="Report"
                title="Report"
              />
            </li>
            <li>
              <NavigationItem
                icon="All Accounts"
                title="All Accounts"
              />
            </li>
            <li>
              <NavigationItem
                icon="budget"
                title="Budget"
              />
            </li>
          </ul>
        </div>
    );
  }
}

export default Navigation;
