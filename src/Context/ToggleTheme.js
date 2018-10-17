import React, { PureComponent, Fragment } from 'react';
import { Consumer, UserContext } from './ThemeContext';
import { withHocTheme } from '../hocs/locales/LocaleHoc';
import Styles from './Styles.scss';

const ThemeTogglerButton = ({ localize, ...props }) => (
  <Consumer>
    {({ theme, toggleTheme }) => (
      <UserContext.Consumer>
        {role => {
          const { background } = theme;
          return (
            <Fragment>
              <p style={{ marginLeft: '20px', fontSize: '20px' }}>
                User Role: <strong>{role} --- {localize}</strong>
              </p>
              <button
                type="button"
                style={{ backgroundColor: background }}
                className={Styles.btn}
                onClickCapture={toggleTheme}
                {...props}
              />
            </Fragment>
          );
        }}
      </UserContext.Consumer>
    )}
  </Consumer>
);

class ContentTheme extends PureComponent {
  render() {
    return (
      <ThemeTogglerButton {...this.props} />
    );
  }
}

export default withHocTheme(ContentTheme);


