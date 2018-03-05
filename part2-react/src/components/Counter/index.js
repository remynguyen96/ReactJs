import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    increment = () => {
        this.setState(preState => ({
            counter: preState.counter + 1
        }))
    };

    render() {
        const { counter } = this.state;
        return (
            <div>
                <h4>Current Counter: {counter}</h4>
                <button onClick={this.increment}>Increment Counter</button>
            </div>
        )
    }
}

export default Counter;
