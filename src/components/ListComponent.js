import React from 'react';
export default class ListComponent extends React.Component {
    
    constructor(props){
        super(props);
        this.msg = '';
        debugger;
        this.state= {
            items: props.items
        }
    }
    renderList(items) {
        return items.map((element, index, test) => {
            debugger;
            return <div>
                <p>country: {element.country}</p>
                <p>CITY: {element.city}</p>
                <hr></hr>
            </div>;
        });
            
    }
    
    render() {
        
      return <div> {this.renderList(this.props.items)}</div>;
    }
  }