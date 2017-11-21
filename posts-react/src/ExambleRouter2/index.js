import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Proptypes from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import NavComponent from './components/Nav';
import ContentMenuComponent from './components/ContentMenu';
import {connect} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {createStructuredSelector} from 'reselect'
import {makeSelectorMenu} from './selectors';

/**
 * @Description: Containers
 */
import Login from './containers/Login';
import Posts from './containers/Posts';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';
import AuthGuard from './containers/AuthGuard';

const history = createHistory();

const CustomLink = ({...spread}) => (
    <Route path={`/${spread.url}`} children={({match}) => {
        return (
          <li className={match ? 'activeLink item-menu' : 'item-menu'}>
             <Link className={`item-link`} to={`/${spread.url}`}>{spread.label}</Link>
          </li>
        )
    }} />
)

class ExambleRouter2 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       
    }

    componentWillUnmount() {

    }

    render() {
        const { menus } = this.props;
        return (
            <Router>
                <div>
                    <NavComponent>
                        {menus.length > 0 && menus.map((menu) => {
                            return (
                               <CustomLink key={menu.id} label={menu.label} url={menu.url}  />
                            )
                        })}
                    </NavComponent>
                    <ContentMenuComponent>
                       <Switch>
                           <Route path='/router2/login' component={Login} />
                           <Route path='/router2/sign-up' component={SignUp} />
                           <Route path='/router2/list-posts' component={Posts} />
                           <AuthGuard path='/router2/dashboard' component={Dashboard}></AuthGuard>
                       </Switch>
                    </ContentMenuComponent>
                </div>
            </Router>
        )
    }
}


ExambleRouter2.propTypes = {
    menus: Proptypes.oneOfType([
        Proptypes.array,
        Proptypes.object,
    ]),
}

ExambleRouter2.defaultProps = {
    menus: [],
}

const mapStateToProps = createStructuredSelector({
    menus: makeSelectorMenu(),
});


const ExambleContainer = connect(mapStateToProps)(ExambleRouter2);


export default () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ExambleContainer />
        </ConnectedRouter>
    </Provider>
)

