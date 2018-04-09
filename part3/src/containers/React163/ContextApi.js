import React from 'react';
import Container1 from './Container1';
import Container2 from './Container2';
import { CountContext } from './CountContext';

class ContextApi extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({
        [name]: value,
    });
  };


  render() {
    return (
        <CountContext.Provider value={{ count: this.state.count, increment: this.increment }}>
          <div style={{textAlign: 'center'}}>
            <input type="text" name="text"  value={this.state.text} onChange={this.onChange} />
            <div>Count: {this.state.count}</div>
            <Container1 />
            <Container2 />
          </div>
        </CountContext.Provider>
    )
  }
}

export default ContextApi;
