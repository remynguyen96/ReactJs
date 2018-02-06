import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Wrapper from './wrapper';
import Products from '../Products'
import logo from '../../images/nodejs.png';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Wrapper>
                    <nav className='header'>
                        <Link to='/'><img src={logo} className='logo' alt="logo"/></Link>
                        <Link to='/login' className='btn-login'>Login</Link>
                    </nav>
                    <div className='content'>
                        <Switch>
                            {/*<IndexRoute component={ProductProfile} />*/}
                            <Route exact path='/' component={Products} />
                            <Route path='/login' render={() => (
                                <div>
                                    <h1>Login Page</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto asperiores atque aut beatae, dignissimos dolores, earum eligendi enim et eveniet facere impedit minus molestias obcaecati placeat quibusdam rem tempore.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto asperiores atque aut beatae, dignissimos dolores, earum eligendi enim et eveniet facere impedit minus molestias obcaecati placeat quibusdam rem tempore.</p>
                                </div>
                            )} />
                        </Switch>
                    </div>
                </Wrapper>
            </BrowserRouter>

        )
    }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    // login(infoUser) {
    //     loginUser(dispatch, infoUser)
    // },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


