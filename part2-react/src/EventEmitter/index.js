import React, {Component} from 'react';

class Emitter extends Component {
    constructor(props) {
        super(props);
    }

    good = () => {
        console.log('asdsadsa');
    }

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <button onClick={this.props.review}>Reviewed Title</button>
            </div>
        )
    }
}

export default Emitter