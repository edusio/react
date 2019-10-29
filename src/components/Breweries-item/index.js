import React, { Component } from 'react';

import './BrewerieItem.css';
import { browserHistory } from 'react-router'

export default class BrewerieItem extends Component {
    
    constructor(props){
        super(props);
        this.id= this.props.id;
        this.city = this.props.city;
        this.country = this.props.country;
        this.name = this.props.name;
        this.phone = this.props.phone;
   }
   retrieveBrewerie(ev,id) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log(id);
        browserHistory.push('/about');
        //this.props.history.push('/about');
   }

    render() {
        const {id, city, country, name, phone} = this.props;
        return (
            <div>
                <div id= {id} className="container" onClick={(ev) => this.retrieveBrewerie(ev,id)}>
                    <div class="container-item">
                        <p>{name}</p>
                        <p>{phone}</p>
                    </div>
                    <div className="container-item">
                        {city} ({country})
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
};