import React from 'react';

import PropTypes from 'prop-types';


class Footer extends React.Component {
    static propTypes = {
        copyright: PropTypes.string
    };


    render() {       
        const { copyright = 'default copyright' } = this.props;

    return (
        <div className="Footer">
            {copyright}
      </div>
    );
  }
}

export default Footer;
