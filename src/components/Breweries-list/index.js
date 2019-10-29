import React, { Component } from 'react';

import BrewerieItem from './../Breweries-item/index';

export default class BreweriesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: props.items
        };
    }

    renderItems(items) {
        return items.map((item) => {
            return <BrewerieItem {...item} />;
        });
    }

    render() {
        const {items} = this.state;
        return (<div className="" >
                <h1>List of Breweries</h1>
                {this.renderItems(items)}
            </div>
        );
    }
};