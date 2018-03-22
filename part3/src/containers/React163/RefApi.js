import React, { createRef } from 'react';
import MyRef from "./MyRef";

class RefApi extends React.PureComponent {
  inputRef = createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <MyRef style={{width: '300px', padding: '8px 25px'}} ref={this.inputRef} defaultValue={'This is tutorial about ref api in react 16.3'} />
      </div>
    )
  }
}

export default RefApi;
