import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Switch, Route, Link} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from "history/createBrowserHistory";
import ContactForm from './containers/ContactForm';
import Login from './containers/Login';
import Homepage from './containers/Homepage';




class FormRedux extends React.Component {
    componentWillMount() {
        this.style = {
            margin: '0 25px 0 0',
            textDecoration: 'none',
            background: '#5B84FF',
            color: '#ffffff',
            padding: '8px 25px',
        }
    }
    render() {
        return (
           <div>
               <Link style={this.style} to='/redux-form/contact-form'>Contact Form</Link>
               <Link style={this.style} to='/redux-form/login'>Login</Link>
               <Link style={this.style} to='/redux-form/homepage'>Homepage</Link>
               <div style={{marginTop: '30px'}}>
                   <Switch>
                       <Route path='/redux-form/contact-form' component={ContactForm}></Route>
                       <Route path='/redux-form/login' component={Login}></Route>
                       <Route path='/redux-form/homepage' component={Homepage}></Route>
                   </Switch>
               </div>
           </div>
        )
    }
}

const history = createHistory();
export default () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <FormRedux />
        </ConnectedRouter>
    </Provider>
);
