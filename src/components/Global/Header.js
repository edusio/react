import React from 'react';
import './css/Header.css';

import PropTypes from 'prop-types';

class Header extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };


    render() {
        const { title } = this.props;


    return (
      <div className="Header">
            <h2>{title}</h2>
        </div>        
    );
  }
}

export default Header;
