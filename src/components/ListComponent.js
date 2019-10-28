import React from 'react';
export default class ListComponent extends React.Component {
    
    renderList(items) {
        return <div>
            {items.map((element, index) => {
                    return <div id={element.id} onClick={() => this.handleClick({id: element.id})}>
                        <p>country: {element.country}</p>
                        <p>CITY: {element.city}</p>
                        <hr></hr>
                    </div>;
                })}
        </div>;
    }
    handleClick({id}) {
            debugger;
            console.log(id);
            //TODO llamar al detalle del listado con id concreto;
    }


    render() {
      return <div>
        <h2>List of Breweries</h2>
        {this.renderList(this.props.items)}
      </div>;
    }
  }