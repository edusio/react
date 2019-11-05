import React, { Component } from 'react';

import BrewerieItem from './../Breweries-item/index';

export default class BreweriesList extends Component {

    renderItems(items) {
        return items.map((item) => {
            return <BrewerieItem {...item} />;
        });
    }

    render() {
        const {items} = this.props;
        return (<div className="col-12" >
                <h1>List of Breweries</h1>
                {this.renderItems(items)}
            </div>
        );
    }
};