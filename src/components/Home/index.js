import React, { Component } from 'react';
import axios from 'axios';

import BreweriesList from '../Breweries-list/index';
class Home extends Component {

    constructor(props){
        super(props);
        this.state= {
            breweriesList: []
        }
    }

    componentWillMount() {
        axios.get('https://api.openbrewerydb.org/breweries').then(response => this.setState({breweriesList: response.data}));
    }
    renderBreweriesList(breweriesList) {
        return <BreweriesList items={breweriesList}></BreweriesList>;
    }
    render() {
        const {breweriesList} = this.state;
        console.log(breweriesList.length > 0);
        return (<div className="Home">
                <h1>Home Page</h1>
                {breweriesList.length > 0 ? this.renderBreweriesList(breweriesList) : <p>LOADINGG....</p>}
        </div>);
    }
}

export default Home;