import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';


class Counter extends React.Component {

    componentDidMount() {
        // setInterval(() => {
        //     this.props.increment();
        // }, 1000)
        // setInterval(() => {
        //     this.props.decrement();
        // }, 999)
    }

    render() {
        return (
            <div>
                <h3>Counter (file Counter.js)</h3>
                <p> {this.props.count}</p>
                <button type="button" onClick={() => this.props.increment()}>Increment</button>
                <button type="button" onClick={() => this.props.decrement()}>Decrement</button>
            </div>
        )
    }
}


const makeCounterState =  createSelector(
    state => state.count,
    (count) => {
        return count;
    }
);

const mapStateToProps = (state) => {
    return {
        count: makeCounterState(state)
    }
}


const mapStateToProps2 = state => ({
    count: state.count
});
//or const mapStateToProps = (state) => ({count : state.count})

// const mapDispatchToProps = {
//     increment: () => {
//         return {
//             type: 'INCREMENT',
//         }
//     },
//     //or write the same
//     decrement: () => ({type: 'DECREMENT'})
// }

// const mapDispatchToProps = ({
//     increment: () => ({type: 'INCREMENT'}),
//     decrement: () => ({type: 'DECREMENT'}),
// })


const mapDispatchToProps = dispatch =>  ({
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
