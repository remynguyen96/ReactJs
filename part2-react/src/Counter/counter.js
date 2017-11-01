import React from 'react';
import './counter.css'

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0}
    }

    incrementCount() {
        this.setState((prevState, props) => ({
                seconds: prevState.seconds + 1
            }));
    }

    componentDidMount() {
        this.time = setInterval(() => {
            this.incrementCount();
        }, 1000)
    }

    componentWillUnmount() {
            clearInterval(this.time);
    }

    render() {
        return (
           <div className='counter'>
               <p>Time: {this.state.seconds}</p>
           </div>
        )
    }
}

