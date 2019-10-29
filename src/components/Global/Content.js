import React from 'react';
import './css/Content.css';
import PropTypes from 'prop-types';

class Content extends React.Component {

    static propsTypes = {
        body: PropTypes.object.isRequired
    };

    render() {    
        const { body } = this.props;

        return (
            <div className="Content">
                bodyyyyyyyyyyyyyyyyyy
                {body}
            </div>
        );
    }
}

export default Content;
