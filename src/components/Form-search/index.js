import React, { Component } from 'react';
import { throws } from 'assert';


class FormSearch extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        const myFormData = document.myform;
        const city = myFormData.city.value;
        const state = myFormData.state.value;
        
        this.props.renderBreweriesList({
            city,
            state
        });
    }

    render() {
      return (
        <form onSubmit={ (ev) => this.onSubmit(ev)} name="myform">
            <div>
                City:
                <input type="text" name="city"/>
            </div>
            <div>
                State:
                <input type="text" name="state"/>
            </div>
            <input type="submit" value="Submit" />
      </form>
      );
    }


}

export default FormSearch;