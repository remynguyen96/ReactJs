import React from 'react';
import Mouse from "./Mouse";
import ErrorBoundary from "../ErrBoundaries";

class Part1 extends React.Component {
    state = {
        show: false,
    }

    changeState = () => {
        this.setState(prevState => ({
            show: !prevState.show,
        }))
    }

    render() {
        return (
            <ErrorBoundary>
                <Mouse err={this.state.show} />
                <button onClick={this.changeState}>Show Error</button>
            </ErrorBoundary>
        );
    }
}

export default Part1;