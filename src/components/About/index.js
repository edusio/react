import React, { Component } from 'react';
import axios from 'axios';
import { throws } from 'assert';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail : null
        };
        //this.detail = {};
    }
    componentWillMount() {
        if(this.props && this.props.location && this.props.location.state) {
            const {id} =  this.props.location.state;
            this.retrieveDetail(id);
        }
    }

    retrieveDetail(id) {
        axios.get('https://api.openbrewerydb.org/breweries/'+ id )
        .then(response => this.setState({
            detail: response.data
        }));
    }

    renderLabelValue(label, value){
        return <div>
            <span>{label} : {value}</span>
        </div>;
    }

    renderDetail(detail) {
        const {country, city, name, street, phone} = detail;
        return this.renderLabelValue("Country", country);
    }

    render() {
        console.log(this.props.location.state.id);
        const {detail} = this.state;
        return (
            <div className="About" >
                <h1>About Page</h1>
                {detail && this.renderDetail(detail)}
                <button onClick={() => this.test()}>IR HOME</button>
            </div>
        );
    }

    test() {
        this.props.history.push('/');
    }
}

export default About;