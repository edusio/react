import React, { Component } from 'react';
import axios from 'axios';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail : null,
            loading: true
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        if(this.props && this.props.location && this.props.location.state) {
            const {id} =  this.props.location.state;
            this.retrieveDetail(id);
        }
    }

    retrieveDetail(id) {
        axios.get('https://api.openbrewerydb.org/breweries/'+ id )
        .then(response => this.setState({
            detail: response.data,
            loading: false
        }));
    }

    renderLabelValue(label, value){
        return <div className="col-12">
            <p>
            <span className="font-weight-bold">{label}</span> : {value}</p>
        </div>;
    }

    renderDetail(detail) {
        return (<div>
            <br></br>
            <h3>{detail.name}</h3>
            {this.serializeData(detail).map((element) => this.renderLabelValue(element.key, element.value))}
            </div>);

    }

    serializeData(detail) {
        return [
            {
                key: "Country",
                value: detail.country
            },
            {
                key: "City",
                value: detail.city
            },
            {
                key: "State",
                value: detail.state
            },
            {
                key: "Street",
                value: detail.street
            },
            {
                key: "Phone",
                value: detail.phone
            },
            {
                key: "Web Site",
                value: detail.website_url
            },
            {
                key: "Postal Code",
                value: detail.postal_code
            },
            {
                key: "Latitude",
                value: detail.latitude
            },
            {
                key: "Longitude",
                value: detail.longitude
            }
        ];
        
    }

    renderLoading() {
        return (
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        );
    }

    render() {
        const {detail, loading} = this.state;
        return (
            <div className="col-12 col-lg-6 offset-lg-3 bg-white">
                <h2>Brewerie Detail</h2>
                <a onClick={() => this.test()}>Go Back</a>
            {loading ? this.renderLoading() : this.renderDetail(detail)}
            </div>
        );
    }

    test() {
        this.props.history.push('/');
    }
}

export default Detail;