import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { ThemedButton } from './ThemeButton';
import { ThemedButtonDark } from './ThemeButtonDark';

class ContextApiOld extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = () => {
      this.setState(prevState => ({
        bg:
          prevState.bg === '#83FF3A'
            ? '#FF433B'
            : '#83FF3A',
        bgDark:
          prevState.bgDark === '#568D5A'
            ? '#87FFA0'
            : '#568D5A',
      }));
    };

    this.state = {
      bg: '#83FF3A',
      bgDark: '#568D5A',
    };
  }

  static childContextTypes = {
    bg: PropTypes.string,
    bgDark: PropTypes.string,
    handleClick: PropTypes.func,
  };

  getChildContext() {
    const { bg, bgDark } = this.state;
    return {
      bg,
      bgDark,
      handleClick: this.handleClick,
    };
  }

  render() {
    return (
      <div>
        <Content />
      </div>
    );
  }
}

function Content() {
  return (
    <React.Fragment>
      <p>ThemedButton Old</p>
      <ThemedButton />
      <ThemedButtonDark />
    </React.Fragment>
  );
}

export {
  ContextApiOld,
};
