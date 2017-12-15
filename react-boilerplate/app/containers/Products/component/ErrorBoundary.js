import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      hasError: true,
    });
    console.log(info);
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (<h1>Something went wrong.</h1>);
    };
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
}


export default ErrorBoundary;
