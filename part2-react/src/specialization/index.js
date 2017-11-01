import React, {Component} from 'react';

class Composition extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.up}
                {this.props.children}
                {this.props.down}
            </div>
        )
    }
}

const styleDown = {
    background: '#EEE819',
    color: '#3F3F3F',
    fontSize: '20px',
    padding: '20px',
}
const styleUp = {
    background: '#FF524B',
    fontSize: '20px',
    color: '#FBFFFF',
    padding: '20px',
}

export function ComponentUp() {
    return (
        <div style={styleUp}>
            This is component Up
        </div>
    )
}

export function ComponentDown() {
    return (
        <div style={styleDown}>
            This is component Down
        </div>
    )
}

export default Composition;