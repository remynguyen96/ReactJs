import React, { Component } from 'react';
import Wrapper from './Wrapper';
import YouNeed from "./YouNeed";
import YouSell from "./YouSell";

class Doing extends Component {
  render() {
    return (
        <Wrapper>
          <h4>Doing</h4>
          <YouNeed />
          <YouSell />
        </Wrapper>
    );
  }
}

export default Doing;
