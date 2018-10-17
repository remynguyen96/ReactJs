import React, { PureComponent } from 'react';
import { StrictModeComponent } from './StrictModeComponent';

const ListOfWords = ({ words }) => <div>{words.join(',')}</div>;

class Hocs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar'],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(prevState => ({
      words: prevState.words.concat(['marklar'])
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleChange}>Click here !</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export default StrictModeComponent(Hocs);