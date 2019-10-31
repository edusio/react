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
            pathname:'/about',
            state: {
                id
            }
        });
   }

    render() {
        const {id, city, country, name, phone} = this.props;
        return (
            <div>
                <div id= {id} className="container col-12" onClick={(ev) => this.retrieveBrewerie(ev,id)}>
                    <div class="container-item col-12  col-md-6">
                        <p>{name}</p>
                        <p>{phone}</p>
                    </div>
                    <div className="container-item col-12 col-md-6">
                        {city} ({country})
                    </div>
                    
                    
                </div>
                <hr></hr>
            </div>
        );
    }
};
export default withRouter(BrewerieItem);