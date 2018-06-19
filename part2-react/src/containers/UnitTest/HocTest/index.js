import React from 'react';
import LoadingPage from '../../Homepage/index';

export default (loader, collection) => (
  class AsyncComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.Component = null;
      this.state = {
        Component: AsyncComponent.Component,
      }
    }
    
    componentDidMount() {
      if (!this.state.Component) {
        loader().then((module) => {
          const Component = module.default;
          AsyncComponent.Component = Component;
          this.setState({ Component });
        })
      }
    }
    
    render() {
      return this.state.Component
        ? (<this.state.Component {...this.props} {...collection} />)
        : (<LoadingPage/>)
    }
  }
)
