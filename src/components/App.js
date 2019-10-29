
//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';



class App extends Component {

    static PropTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        const { children } = this.props;

        return (
            <div className="App">
                <Header title="Title Code Jobs" />
                <Content body={children} />
                <Footer copyright="Copyright & 2019"/>
            </div>
        );
    }
}

export default App;
