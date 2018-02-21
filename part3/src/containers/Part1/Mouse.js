import React from 'react';
import MouseTracker from "./MouseTracker";
import Cat from "./Cat";

class Mouse extends React.Component {
    render() {
        if (this.props.err) {
            throw new Error('I crashed!');
        }
        return (
            <div>
                {/*<MouseTracker>*/}
                    {/*{props => (<div>The mouse position is {props.x}:{props.y}</div>)}*/}
                {/*</MouseTracker>*/}
                <MouseTracker render={props => {
                    return (
                        <div>
                            The mouse position is {props.x}:{props.y}
                            <Cat mouse={props} />
                        </div>
                    )
                }} />
            </div>
        );
    }
}

export default Mouse;
