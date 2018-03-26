import React, {Component} from 'react';
import logo from '../../images/netleaders-logo.png';
import Link from "./Link";

const scrollStepIn = 50;
const scrollSpeed = 20;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.navMenu = null;
    this.state = {
      scrolling: false,
      intervalScroll: 0,
      pointerScroll: 0,
    };
  }

  componentDidMount() {
    const positionScroll = window.scrollY;
    window.addEventListener('scroll', this.handleScroll);
    // console.log(positionScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const heightMenu = this.navMenu.offsetHeight;
    this.setState({
      scrolling: ((window.scrollY - 10) > heightMenu) ? true : false,
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

  render() {
    const { scrolling } = this.state;
    const { listMenu } = this.props;
    return (
        <div className={scrolling ? 'header-nav nav-scroll': 'header-nav'} ref={(ref) => { this.navMenu = ref }}>
          <div className="header-logo" >
            <a href="/">
              <img src={logo} alt="netleaders" className='header-logo-images' />
            </a>
          </div>
          <ul className="header-menu">
            {listMenu.map((menu) => (
                <Link
                    key={menu.name}
                    name={menu.name}
                    link={menu.link}
                    active={menu.active}
                    handleClick={this.scrollToPoint}
                />
            ))}
          </ul>
        </div>
    );
  }
}

export default Nav;



