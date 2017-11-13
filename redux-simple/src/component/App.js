import React, {Component} from 'react';
import './App.css';
import FoodContainer from '../containers/food-list';
import UserContainer from '../containers/user-list';
import FoodDetailContainer from '../containers/food-detail';
import {Switch, Route, Link} from 'react-router-dom'

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dom1: '',
            type: 'desktop',
        };
    }

    
    componentDidMount() {
        let diamon = this.domBg;
        let currenPos = 0;
        let requestAnimationFrame = window.requestAnimationFrame ||
                                    window.mozRequestAnimationFramell ||
                                    window.webkitRequestAnimationFrame ||
                                    window.msRequestAnimationFrame;

        const moveDiamon = () => {
            currenPos += 5;
            diamon.style.left = `${currenPos}px`;
            if(Math.abs(currenPos) >= 300) {
                currenPos -= 250
            }
            requestAnimationFrame(moveDiamon);
        }
        moveDiamon();
        const checkMediaQuery = () => {
            const type = window.matchMedia("(min-width: 1025px)").matches ? 'desktop' : 'mobile';
            if (type !== this.state.type) {
                this.setState({type});
            }
        };
        window.addEventListener('resize', checkMediaQuery);
        checkMediaQuery();
    }

    render() {
        return (
            <div className='about-us'>
                <h2>{this.state.type}</h2>
               <div className='about-us-bg'ref={bgAbout => this.domBg = bgAbout}>

               </div>
            </div>
        )
    }
}


class ContactMe extends React.Component {


    componentDidMount() {
        const btn = this.btnMove;
        const btn2 = this.btnMove2;
        const container = this.container;
        window.addEventListener("click", getClickPosition, false);
        function getClickPosition(e) {
            let parentPosition = getPosition(container);
            let xPos = e.clientX - parentPosition.x - (btn.offsetWidth / 2);
            let yPos = e.clientY - parentPosition.y - (btn.offsetHeight / 2);
            let transformValue = `translate3d(${xPos}px, ${yPos}px, 0)`;
            btn.style.transform = transformValue;


            setTimeout(() => {
                let xPos2 = e.clientX - (btn2.offsetWidth / 2);
                let yPos2 = e.clientY - (btn2.offsetHeight / 2);
                let transformValue2 = `translate3d(${xPos2}px, ${yPos2}px, 0)`;
                btn2.style.transform = transformValue2;
            }, 400)
        }



        function getPosition(element) {
          let xPos = 0 ;
          let yPos = 0 ;
          while(element) {
            xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPos += (element.offsetTop - element.offsetTop + element.clientTop);
            element= element.offsetParent;
          }
          return {
             x: xPos,
             y: yPos,
          }
        }

    }



    render() {
        return (
            <div className='contact-me' ref={container => this.container = container}>
                <div className='contact-me-btn' ref={btn => this.btnMove = btn}></div>
                <div className='contact-me-btn' style={{background: '#FF3835'}} ref={btn2 => this.btnMove2 = btn2}></div>
            </div>
        )
    }
}

class Home extends React.Component {

    componentWillMount() {
        console.log("HEHEHE Home");
    }


    componentDidMount() {
        console.log("HEHEHE Home 2");
    }

    componentWillUnmount() {
        console.log("HEHEHE Exit Home");
    }

    render() {
        return (
            <div>
                <div className='App-redux'>
                    <h2>List Of Foods :</h2>
                    <FoodContainer/>
                </div>
                <hr/>
                <div className='App-redux'>
                    <h2>List Food Detail :</h2>
                    <FoodDetailContainer/>
                </div>
                <hr/>
                <div className='App-redux'>
                    <h2>List Of Users :</h2>
                    <UserContainer/>
                </div>
            </div>
        )
    }
}

const NotFound = () => {
    return (
        <h2>This is NotFound</h2>
    )
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className='menu'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/contact-me'>Contact Me</Link></li>
                    <li><Link to='/sadklas'>NotFound</Link></li>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/contact-me' component={ContactMe}></Route>
                    <Route path='/about-us' component={AboutUs}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;
