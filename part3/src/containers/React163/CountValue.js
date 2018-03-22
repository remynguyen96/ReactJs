import React from 'react';
import {CountContext} from './CountContext';

class CountValue extends React.PureComponent {

  render() {
    return (
      <CountContext.Consumer>
        {({ ...child }) => console.log(`CountValue render ${child.count}`) || <div>CountValue: {child.count} </div>}
      </CountContext.Consumer>
    )
  }
}

export default CountValue;
