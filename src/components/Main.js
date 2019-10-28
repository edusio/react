import React from 'react';
import axios from 'axios';
import ListComponent from './ListComponent.js';
export default class Main extends React.Component {
    
    constructor(props){
        super(props);
        this.msg = '';
        this.state= {
            breweriesList: []
        }
    }
    componentDidMount() {
        axios.get('https://api.openbrewerydb.org/breweries').then(respuesta => {
           this.setState({
            breweriesList: respuesta.data
           });
        });
    }
    render() {
        console.log(this.state.breweriesList);
      return <div>HOLA {this.state.msg}
        {this.state.breweriesList && this.renderListcomponent(this.state.breweriesList)}
      </div>;
    }

    renderListcomponent(breweriesList) {
        console.log("****************" + breweriesList+ '******');
        return <ListComponent items={breweriesList}></ListComponent>
    }
  }