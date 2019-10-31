import React, { Component } from 'react';
import axios from 'axios';

import BreweriesList from './../Breweries-list/index.js';
import FormSearch from './../Form-search/index.js';
class Home extends Component {

    constructor(props){
        super(props);
        this.state= {
            breweriesList: [],
            loading: true
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
        this.setState({
            loading: true
        });
        const queryParam = this.configureParams(params);
        axios.get('https://api.openbrewerydb.org/breweries'+ queryParam)
        .then(response => this.setState({
            breweriesList: response.data,
            loading: false
        }));
    }

    renderLoading() {
        return (
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        );
    }

    render() {
        const {breweriesList, loading} = this.state;
        return (<div className="Home col-12 col-lg-6 offset-lg-3 bg-white">
                <h1>Home Page</h1>
                <FormSearch renderBreweriesList={(data) => this.retrieveList(data)}></FormSearch>
                <br></br>
                {loading ? this.renderLoading() : this.renderBreweriesList(breweriesList)}
        </div>);
    }
}

export default Home;