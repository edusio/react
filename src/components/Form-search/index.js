import React, { Component } from 'react';

class FormSearch extends Component {

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
      <div className="col-12">
            <form onSubmit={ (ev) => this.onSubmit(ev)} name="myform">
            <div className="form-group">
                <div className="col-sm-12 col-lg-6">
                    <label for="exampleInputEmail1">State</label>
                    <input type="text" className="form-control" name="state" placeholder="ej: Alaska"/>
                </div><br/>
                <div className="col-sm-12 col-lg-6">
                    <label for="exampleInputPassword1">City</label>
                    <input type="text" className="form-control" name="city" placeholder="ej: Birmingham"/>
                </div>  
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      );
    }


}

export default FormSearch;