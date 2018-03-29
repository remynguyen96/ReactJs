import React, {Component} from 'react';
import logo from '../../images/netleaders-logo.png';
import Link from "./Link";
import { componentApp, componentAuthor, componentDoing, componentFooter, componentVideo } from '../../utils/mockData';

const scrollStepIn = 40;
const scrollSpeed = 15;
const arrComponent = [componentApp, componentDoing, componentVideo, componentAuthor, componentFooter];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.navMenu = null;
    this.state = {
      scrolling: false,
      intervalScroll: 0,
      pointerScroll: 0,
      openMenu: false,
      activeMenu: componentApp,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.scrollPoint();
    const { offsetHeight } = this.navMenu;
    this.setState({
      scrolling: ((window.scrollY - 10) > offsetHeight) ? true : false,
    });
  };

  scrollStep = () => {
    let pointStop = 0;
    const { scrollY, scroll } = window;
    const { pointerScroll, intervalScroll } = this.state;
    if (scrollY > pointerScroll) {
      pointStop = scrollY - scrollStepIn;
      if (pointStop <= pointerScroll) {
        clearInterval(intervalScroll);
      }
      scroll(0, pointStop);
    } else {
      pointStop = scrollY + scrollStepIn;
      if (pointStop >= pointerScroll) {
        clearInterval(intervalScroll);
      }
      scroll(0, pointStop);
    }
  };

  scrollToPoint = (event) => {
    event.preventDefault();
    clearInterval(this.state.intervalScroll);
    const {pathname, hostname, hash} = event.target;
    const {pathname: windowPathname, hostname: windowHostname} = window.location;
    if (windowPathname.replace(/^\//, '') === pathname.replace(/^\//, '') && windowHostname === hostname) {
      const element = document.querySelector('[id=' + hash.slice(1) + ']');
      if (!!element) {
        const interval = setInterval(this.scrollStep, scrollSpeed);
        this.setState({
          pointerScroll: element.offsetTop,
          intervalScroll: interval,
        });
        return false;
      }
    }
  };

  scrollPoint = () => {
    const { offsetTop: app } = document.querySelector(`#${componentApp}`);
    const { offsetTop: doing } = document.querySelector(`#${componentDoing}`);
    const { offsetTop: video } = document.querySelector(`#${componentVideo}`);
    const { offsetTop: author } = document.querySelector(`#${componentAuthor}`);
    const { offsetTop: footer } = document.querySelector(`#${componentFooter}`);
    const { scrollY } = window;
    switch (true) {
      case (0 <= scrollY && scrollY <= app) || (app <= scrollY && scrollY <= doing) :
        return this.setState({ activeMenu: componentApp });
      case doing <= scrollY && scrollY <= video :
        return this.setState({ activeMenu: componentDoing });
      case  video <= scrollY && scrollY <= author:
        return this.setState({ activeMenu: componentVideo });
      case  author <= scrollY && scrollY <= footer:
        return this.setState({ activeMenu: componentAuthor });
      case  footer <= scrollY:
        return this.setState({ activeMenu: componentFooter });
      default:
        return this.setState({ activeMenu: componentApp });
    }
  };

  openNav = () => {
    this.setState((prevState) => ({
      openMenu: !prevState.openMenu
    }));
  };

  render() {
    const {scrolling, activeMenu, openMenu} = this.state;
    const {listMenu} = this.props;
    if (window.innerWidth <= 768) {
      return (
          <div className="mobl" ref={(ref) => {
            this.navMenu = ref
          }}>
            <div className="mobl-logo">
              <a href="/">
                <img src={logo} alt="netleaders" className='header-logo-images'/>
              </a>
            </div>
            <button className={openMenu ? 'mobl-btn mobl-open' : 'mobl-btn'} onClick={this.openNav}>
              <span className="mobl-icon"></span>
              <span className="mobl-icon"></span>
              <span className="mobl-icon"></span>
            </button>
            <div className={`mobl-main ${openMenu ? 'mobl-main-open' : ''}`}>
              <ul class="header-menu">
                {listMenu.map(({name}, index) => (
                    <Link
                        key={arrComponent[index]}
                        name={name}
                        link={arrComponent[index]}
                        activeMenu={activeMenu}
                        handleClick={this.scrollToPoint}
                    />
                ))}
              </ul>
            </div>
          </div>
      )
    }
    return (
        <div className={scrolling ? 'header-nav nav-scroll': 'header-nav'} ref={(ref) => { this.navMenu = ref }}>
          <div className="header-logo" >
            <a href="/">
              <img src={logo} alt="netleaders" className='header-logo-images' />
            </a>
          </div>
          <ul className="header-menu">
            {listMenu.map(({ name }, index) => (
                <Link
                    key={arrComponent[index]}
                    name={name}
                    link={arrComponent[index]}
                    activeMenu={activeMenu}
                    handleClick={this.scrollToPoint}
                />
            ))}
          </ul>
        </div>
    );
  }
}

export default Nav;




