import React from 'react';
import { CountContext } from './CountContext';

class CounterButton extends React.PureComponent {

  render() {
    return (
        <CountContext.Consumer>
          {({ increment }) => <button onClick={increment}>Increment With CounterButton</button>}
        </CountContext.Consumer>
    )
  }
}

export default CounterButton;
