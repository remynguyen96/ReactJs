import React, { PureComponent } from 'react';
import { ThemedButton } from './ThemeButton';
import { themes, ButtonContext } from './constants';

class ContextApi extends PureComponent {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <ButtonContext.Provider value={this.state}>
        <ThemedButton />
      </ButtonContext.Provider>
    );
  }
}
export {
  ContextApi
}
