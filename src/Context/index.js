import React, { PureComponent, StrictMode } from 'react';
import ContentTheme from './ToggleTheme';
import { Provider, Consumer, themes, UserContext } from './ThemeContext';
import { LocaleContext } from '../hocs/locales/LocaleHoc';
import Styles from './Styles.scss';

const ThemedButton = (props) => (
  <Consumer>
    {({ theme, toggleTheme }) => (
      <button
        type="button"
        style={{ backgroundColor: theme.background }}
        className={Styles.btn}
        onClick={toggleTheme}
        {...props}
      />
    )}
  </Consumer>
);
const Toolbar = () => <ThemedButton>Click Here Onsite</ThemedButton>;

class ContextApi extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      local: 'en',
      contextState: {
        role: 'Guest',
        theme: themes.light,
        toggleTheme: this.toggleTheme,
      },
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => {
      const { contextState } = prevState;
      const { theme, role } = contextState;
      return {
        contextState: {
          ...contextState,
          theme: theme === themes.light ? themes.dark : themes.light,
          role: role === 'Guest' ? 'Author' : 'Guest',
        },
      };
    });
  };

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  changeLanguage = () => {
    this.setState(({ local }) => ({
      local: local === 'en' ? 'vi' : 'en'
    }));
  };

  render() {
    const { email, contextState, local } = this.state;
    const { role } = contextState;
    return (
      <StrictMode>
        <input type="email" className={Styles.input} name="email" value={email} onChange={this.onChange} />

        <Provider value={contextState}>
          <Toolbar />

          <UserContext.Provider value={role}>
              <ContentTheme>Button Content Theme</ContentTheme>
          </UserContext.Provider>

        </Provider>
        <LocaleContext.Provider value={local}></LocaleContext.Provider>
        <button
          type="button"
          style={{ backgroundColor: '#737FFF' }}
          className={Styles.btn}
          onClickCapture={this.changeLanguage}
        >
          Change Languages
        </button>

      </StrictMode>
    );
  }
}

export default ContextApi;
