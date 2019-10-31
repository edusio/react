import React from 'react';

import PropTypes from 'prop-types';


class Footer extends React.Component {
    static propTypes = {
        copyright: PropTypes.string
    };


    render() {       
        const { copyright = 'default copyright' } = this.props;

    return (
        <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="https://github.com/edusio/react"> Eduardo López</a>
            </div>
        </footer>);
  }
}

export default Footer;
