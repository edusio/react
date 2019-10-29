import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="About" >
                <h1>About Page</h1>
                <button onClick={() => this.test()}>IR HOME</button>
            </div>
        );
    }

    test() {
        this.props.history.push('/');
    }
}

export default About;