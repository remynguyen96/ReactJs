import React from 'react';
import PropTypes from 'prop-types';

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }

    static propTypes = {
        // children: PropTypes.func.isRequired,
        render: PropTypes.func.isRequired,
    };

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    }



    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
                {/*{this.props.children(this.state)}*/}
            </div>
        );
    }
}

export default MouseTracker;