import React from 'react';
import './css/Content.css';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            number1: 0,
            number2: 0,
            result: 0
        };

        //this.handleClicked = this.handleClicked.bind(this);
    }

    updateState(count) {
        this.setState({
            count: count
        });
    }

    componentDidMount() {
        this.updateState(1);
    }

    handleAddClicked() {
        this.updateState(this.state.count + 1);
    }

    handleSubtractClicked() {
        if (this.state.count > 0) {
            this.updateState(this.state.count - 1);
        }        
    }

    sumNumbers() {
        this.setState({
            result: this.state.number2 + this.state.number1
        });
    }

    handleNum1Changed(e) {
        this.setState({
            number1: Number(e.target.value)
        });
    }

    handleNum2Changed(e) {
        this.setState({
            number2: Number(e.target.value)
        });
    }

    render() {      
        return (
            <div className="Content">
                <h2>Counter: {this.state.count}</h2>
                <p>
                    <button onClick={() => this.handleAddClicked()}>+</button>
                    <button onClick={() => this.handleSubtractClicked()}>-</button>
                    <button onClick={() => this.updateState(0)}>Reset</button>
                </p>
                <p>
                    <input type="number" value={this.state.number1} onChange={(e) => this.handleNum1Changed(e)} />

                    <input type="number" value={this.state.number2} onChange={(e) => this.handleNum2Changed(e)} />

                    <button onClick={() => this.sumNumbers()}>=</button>
                </p>
                <p>
                    Result: {this.state.result}
                </p>
            </div>
        );
    }
}

export default Content;
