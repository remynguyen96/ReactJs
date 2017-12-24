import React from 'react';
import {Provider} from 'react-redux';
import Proptypes from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {createStructuredSelector} from 'reselect'
/**
 * @Description: Orther
 */
import store from './store';
import {makeSelectorMenu, makeSelectorGuard} from './selectors';
import * as actions from './actions';
/**
 * @Description: Component
 */
import NavComponent from './components/Menu/Nav';
import ContentMenuComponent from './components/Menu/ContentMenu';
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
    }}/>
)

const ExambleRouter2 = ({...props}) => {
    const { menus } = props;
    const {guard} = props.guard.toJS();
    return (
        <Router>
            <div>
                <NavComponent>
                    {menus.length > 0 && menus.map((menu) => {
                        return (
                            <CustomLink key={menu.id} label={menu.label} url={menu.url}/>
                        )
                    })}
                    {guard && <button type='button' className={`btn-logout`} onClick={() => props.logout()}>Logout</button>}
                </NavComponent>
                <ContentMenuComponent>
                    <Switch>
                        <Route path='/router2/login' component={Login}/>
                        <Route path='/router2/sign-up' component={SignUp}/>
                        <Route path='/router2/list-posts' component={Posts}/>
                        <AuthGuard path='/router2/dashboard' component={Dashboard} />
                    </Switch>
                </ContentMenuComponent>
            </div>
        </Router>
    )
}

ExambleRouter2.propTypes = {
    menus: Proptypes.oneOfType([
        Proptypes.array,
        Proptypes.object,
    ]),
}

const mapStateToProps = createStructuredSelector({
    menus: makeSelectorMenu(),
    guard: makeSelectorGuard(),
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(actions.logout()),
})

const ExambleContainer = connect(mapStateToProps, mapDispatchToProps)(ExambleRouter2);

export default () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ExambleContainer/>
        </ConnectedRouter>
    </Provider>
)

