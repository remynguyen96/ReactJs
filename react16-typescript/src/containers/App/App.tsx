import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Nav, NavMenu } from '../Nav';

class App extends React.PureComponent {
  public render() {
    const listMenu: NavMenu[] = [
      { name: 'Homepage', icon: 'mail', link: '/' },
      { name: 'Dashboard', icon: 'appstore', link: '/dashboard' },
      { name: 'Login', icon: 'setting', link: '/login' },
    ];
    return (
      <BrowserRouter>
        <Nav listMenu={listMenu} />
      </BrowserRouter>
    );
  }
}

export default App;
