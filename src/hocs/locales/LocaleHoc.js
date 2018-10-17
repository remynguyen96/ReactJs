import React, { PureComponent, createContext } from 'react';
// import locales from './index';

export const LocaleContext = createContext({
  local: 'en',
});

export function withHocTheme(WrapperComponent) {
  return class extends PureComponent {
    render() {
      return (
        <LocaleContext.Consumer>
          {({ local }) => <WrapperComponent {...this.props} localize={local} />}
        </LocaleContext.Consumer>
      );
    }
  };
}

