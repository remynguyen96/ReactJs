import React, { PureComponent, StrictMode } from 'react';

export const StrictModeComponent = (WrapperComponent) => {
  return class extends PureComponent {
    render() {
      return (
        <StrictMode>
          <WrapperComponent {...this.props} />
        </StrictMode>
      );
    }
  };
};