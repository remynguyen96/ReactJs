import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Proptypes from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import NavComponent from './components/Nav';
import ContentMenuComponent from './components/ContentMenu';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {makeSelectorMenu} from './selectors';
import {getCallMenu} from './actions'

/**
 * @Description: Containers
 */
import Login from './containers/Login';
import Posts from './containers/Posts';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';


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
       this.props.callMenu();
    }

    componentWillUnmount() {
        this.props.callMenu([]);
    }

    render() {
        const { menus } = this.props;
        // console.log(menus);
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
                           <Route path='/router2/dashboard' component={Dashboard} />
                       </Switch>
                    </ContentMenuComponent>
                </div>
            </Router>
        )
    }
}


ExambleRouter2.propTypes = {
    // menus: Proptypes.arrayOf(Proptypes.object),
    // menus: Proptypes.array.isRequired,
    callMenu: Proptypes.func.isRequired,
}

ExambleRouter2.defaultProps = {
    menus: [],
}

const mapStateToProps = createStructuredSelector({
    menus: makeSelectorMenu(),
});

const mapDispatchToProps = dispatch => ({
    callMenu: () => dispatch(getCallMenu()),
});

const ExambleContainer = connect(mapStateToProps, mapDispatchToProps)(ExambleRouter2);


export default () => (
    <Provider store={store}>
        <ExambleContainer />
    </Provider>
)

