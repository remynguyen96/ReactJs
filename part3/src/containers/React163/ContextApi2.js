import React from 'react';
import Container1 from './Container1';
import Container2 from './Container2';
import { CountContext } from './CountContext';

class ContextApi2 extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      contextState: {
        count: 0,
        increment: this.increment
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
  }

  increment = () => {
    this.setState((prevState) => ({
       contextState: {
         ...prevState.contextState,
         count: prevState.contextState.count + 1
       }
    }))
  };

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({
        [name]: value,
    });
  };


  render() {
    const { contextState, text } = this.state;
    return (
        <CountContext.Provider value={contextState}>
          <div style={{textAlign: 'center'}}>
            <input type="text" name="text" value={text} onChange={this.onChange} />
            <div>CountContainer: {contextState.count}</div>
            <Container1 />
            <Container2 />
          </div>
        </CountContext.Provider>
    )
  }
}

export default ContextApi2;
