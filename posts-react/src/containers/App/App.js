import React, {Component} from 'react';
// import logo from '../../assets/logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
/**
 * @Description: Tabs
 */
import Tabs from './components/tabs';
import TabContent from './components/tabs/Tab-Content';
import TabItem from './components/tabs/Tab-Item';
import TabWrapper from './components/tabs/Tab-Wrapper';

/**
 * @Description: Button Ripple Animation
 */
import IndexRipple from './components/Ripple'

/**
 * @Description: Reselect Redux Application
 */
import ReselectRedux from '../../Orthers'

/**
 * @Description: Router React Dom examble;
 */
import ExambleRouter from '../../ExambleRouter';
import ExambleRouter2 from '../../ExambleRouter2';

/**
 * @Description: Redux Form
 */
import FormRedux from '../../FormRedux';

class App extends Component {

    componentWillMount() {
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Nav>
                        <Link className="link" to="/">App Container</Link>
                        <Link className="link" to="/todo">Todo Container</Link>
                        <Link className="link" to="/posts">Posts Container</Link>
                        <Link className="link" to="/router">Router Examble</Link>
                        <Link className="link" to="/router2">Router Examble 2</Link>
                        <Link className="link" to="/redux-form">Redux Form</Link>
                    </Nav>
                    <Route exact path="/" component={props => <TabsAnimation {...props} />} />
                    <Route path="/todo" component={ReselectRedux} />
                    <Route path="/router" component={ExambleRouter} />
                    <Route path="/router2" component={ExambleRouter2} />
                    <Route path="/redux-form" component={FormRedux} />
                    <Switch>
                        <Route path="/posts" render={() => {
                                return (
                                    <h2>hello havana !!!</h2>
                                )
                        }}>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}


class TabsAnimation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 'aTab'
        }
    }

    componentWillMount() {
        // console.log(this.props);
        // this.props.history.push('/home/hello-havana')
    }

    render() {
        const {active} = this.state;
        const content = {
            aTab: `Me and my broken PC
All I need's a little meme in the dank
A little but I hope my Wi-Fi might kick start`,
            bTab: `Me and my broken PC
I need a little Biggie Cheese tonight
Hold me so I'm not shooting stars`,
            cTab: 'A little but I\'m hoping my Wi-Fi might kick start Me and my broken PC﻿',
        };
        const link = {
            aTab: 'Tab Link 1',
            bTab: 'Tab 2',
            cTab: 'Tab 3',
        }
        const tabsLink = [];
        for (let nav of Object.entries(link)) {
            const tab = <TabItem key={nav[0]}>{nav[1]}</TabItem>;
            if (nav[0] === active) {
                tabsLink.push(<TabItem key={nav[0]} className="activeTab">{nav[1]}</TabItem>);
            } else {
                tabsLink.push(tab);
            }
        }
        return (
            <div>
                <TabWrapper>
                    <Tabs active={active} onChange={active => this.setState({active})}>
                        {tabsLink.map((item) => {
                            return item
                        })}
                    </Tabs>
                </TabWrapper>
                <TabContent>
                    {content[active]}
                </TabContent>
                <hr/>
                <IndexRipple />
            </div>
        );
    }
}

export default App;
