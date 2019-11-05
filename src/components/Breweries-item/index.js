import React, { Component } from 'react';
import './BrewerieItem.css';
import {
    withRouter
  } from 'react-router-dom';

class BrewerieItem extends Component {
    
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
        this.props.history.push({
            pathname:'/detail',
            state: {
                id
            }
        });
   }

    render() {
        const {id, city, country, name, phone, state} = this.props;
        return (
            <div>
                <div id= {id} className="container col-12" onClick={(ev) => this.retrieveBrewerie(ev,id)}>
                    <div class="container-item col-6 col-md-6">
                        <p><span className="font-weight-bold">Name: </span>{name}</p>
                        <p><span className="font-weight-bold">Phone: </span>{phone}</p>
                    </div>
                    <div className="container-item col-6 col-md-6">
                        <p><span className="font-weight-bold">City (country): </span>{city} ({country})</p>
                        <p><span className="font-weight-bold">State : </span>{state}</p>
                    </div>
                    
                    
                </div>
                <hr></hr>
            </div>
        );
    }
};
export default withRouter(BrewerieItem);