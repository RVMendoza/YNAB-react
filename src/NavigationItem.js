import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavigationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {collapsed : true}
  }

  onNavToggle(collapsed) {
    this.setState({ collapsed: !collapsed });
  } 

  render() {
    var {icon, title} = this.props;
    return (
      <div className="Navigation-item u-flex u-paddingAm">
        <div className="u-marginRm">
          {icon}
        </div>
        <div>
          {title}
        </div>
      </div>
    );
  }
}

NavigationItem.proptypes = {
  title: PropTypes.string,
  icon: PropTypes.string
};

export default NavigationItem;
