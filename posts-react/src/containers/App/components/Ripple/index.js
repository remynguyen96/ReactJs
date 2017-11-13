import React from 'react';
import Button from './Button'

class IndexRipple extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            x: 0
        }
    }

    render() {
        return (
            <div>
                <Button onClick={() => {
                    this.setState({
                        x: this.state.x + 1
                    });
                }}>
                    Click Here <strong>{this.state.x}</strong>
                </Button>
            </div>
        )
    }
}

export default IndexRipple;
