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
        <nav class="navbar navbar-light bg-white">
            <a class="navbar-brand" href="#">
                React APP
            </a>
      </nav>    
    );
  }
}

export default Header;
