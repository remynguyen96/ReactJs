import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

/*It's not working with PureComponent*/
class ThemedButtonDark extends Component {
  static contextTypes = {
    bgDark: PropTypes.string,
    handleClick: PropTypes.func,
  };

  render() {
    const { handleClick, bgDark } = this.context;
    return (
      <button onClick={handleClick} style={{ backgroundColor: bgDark }}>
        Button Old Here
      </button>
    );
  }
};

export { ThemedButtonDark };

