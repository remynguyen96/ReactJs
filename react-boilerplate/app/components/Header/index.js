import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
// import Banner from './banner.jpg';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/*<A href="https://twitter.com/mxstbr">*/}
          {/*<Img src={Banner} alt="react-boilerplate - Logo" />*/}
        {/*</A>*/}
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/products">
            <FormattedMessage {...messages.products} />
          </HeaderLink>
          <HeaderLink to="/posts">
            <FormattedMessage {...messages.posts} />
          </HeaderLink>
          <HeaderLink to="/users">
            <FormattedMessage {...messages.users} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
