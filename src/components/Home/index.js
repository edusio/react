import React, { Component } from 'react';
import axios from 'axios';

import BreweriesList from './../Breweries-list/index.js';
import FormSearch from './../Form-search/index.js';
class Home extends Component {

    constructor(props){
        super(props);
        this.state= {
            breweriesList: []
        }
    }

    componentWillMount() {
        this.retrieveList();
    }
    
    renderBreweriesList(breweriesList) {
        return <BreweriesList items={breweriesList}></BreweriesList>;
    }

    configureParams(params) {
       let query = ''
        if(params) {
            query = '?by_state=' + params.state + '&by_city=' + params.city;
        }
        return query;
    }

    retrieveList(params = null) {
        const queryParam = this.configureParams(params);
        axios.get('https://api.openbrewerydb.org/breweries'+ queryParam)
        .then(response => this.setState({breweriesList: response.data}));
    }

    render() {
        const {breweriesList} = this.state;
        console.log(breweriesList.length > 0);
        return (<div className="Home">
                <h1>Home Page</h1>
                <FormSearch renderBreweriesList={(data) => this.retrieveList(data)}></FormSearch>
                {breweriesList.length > 0 ? this.renderBreweriesList(breweriesList) : <p>LOADINGG....</p>}
        </div>);
    }
}

export default Home;