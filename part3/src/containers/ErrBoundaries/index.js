import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            errorInfo: '',
        }
    }

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
        ]),
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        const {error, errorInfo} = this.state;
        if (errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        return this.props.children;
    }
};

export default ErrorBoundary;