import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Counter from './Counter/counter'
// import App from './App';
import Auth from "./Auth/auth";
// import MailConfirm from "./Auth/auth";
// import registerServiceWorker from './registerServiceWorker';
// import  ListAnimals, {animals} from './listItem/list';
// import Forms from './Form';
// import Specialization, {ComponentDown, ComponentUp} from "./specialization";
import Emitter from './EventEmitter';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';

/**
 * @Description: Communicate component
 */
import ParentCommunicate from './Communication/Parent'

class IndexRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            isOn: true,
        };
        this.toggleBtn2 = this.toggleBtn2.bind(this);
    }

    incrementNumber() {
        this.setState(
            (prevState, props) => ({
                seconds: prevState.seconds + 1
            })
        );
    }

    componentDidMount() {
        this.time = setInterval(() => this.incrementNumber(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    /**
     * @Description: Method 1
     **/
     toggleBtn2() {
        this.setState(preState => ({
            isOn: !preState.isOn
        }));
        // this.setState({
        //     isOn: !this.state.isOn
        // });
    }
    /**
     * @Description: Method 2
     **/
     // toggleBtn = () => {
     //    this.setState(preState => ({
     //        isOn: !preState.isOn
     //    }));
     // };

    handlerEmiiter = (event) => {
        this.title = event.target.value;
    }

    reviewGood = () => {
        console.log(this.title);
    }

    render() {
        const style = {
            'display': 'flex',
            'justifyContent': 'center',
        }
        const style2 = {
            'marginRight': '30px'
        }
        const style3 = {
            'marginTop' : '20px',
            'display': 'block',
        }
        return (
            <Router>
               <div>
                   <div style={style}>
                       <Link to='/' style={style2}>Homepage</Link>
                       <Link to='/communicate' style={style2}>Communicate</Link>
                   </div>
                   <hr/>
                   <div style={style3}>
                       <Route exact path="/" render={() => {
                           return (
                               <div className='root'>
                                   {/*<h1 className="title">What's Going On Guys {this.state.isOn ? 'On' : 'Off'}</h1>*/}
                                   {/*<button className='btn' onClick={this.toggleBtn2}>Toggle Button {this.state.seconds}</button>*/}
                                   {/*<App />*/}
                                   {/*<Counter />*/}
                                   <Auth />
                                   {/*<MailConfirm newMessages={['goodjob', 'hey']}/>*/}
                                   {/*<ListAnimals toTalAnimals={animals} />*/}
                                   {/*<Forms />*/}
                                   {/*<Specialization up={<ComponentUp />} down={<ComponentDown />} />*/}
                                   {/*<Specialization up={<ComponentUp />} down={<ComponentDown />}>*/}
                                   {/*<h2>Good Friend, This Is A Child Composition</h2>*/}
                                   {/*</Specialization>*/}
                                   <input type="text" onChange={this.handlerEmiiter}/>
                                   <Emitter title={this.title} review={this.reviewGood} />
                               </div>
                           )
                       }}>
                       </Route>
                       <Route path='/communicate' component={ParentCommunicate} />
                   </div>
               </div>
            </Router>

        )
    }
}
ReactDOM.render(<IndexRoot />, document.getElementById('root'));
// registerServiceWorker();
