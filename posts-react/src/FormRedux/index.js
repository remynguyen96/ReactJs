import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Switch, Route, Link} from 'react-router-dom';
import FormSimple from './containers/FormSimple';
import ContactForm from './containers/ContactForm';
import FormAsync from './containers/FormAsync';

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
               <Link style={this.style} to='/redux-form/form-simple'>Form Simple</Link>
               <Link style={this.style} to='/redux-form/form-async'>Form Async</Link>
               <div style={{marginTop: '30px'}}>
                   <Switch>
                       <Route path='/redux-form/contact-form' component={ContactForm}></Route>
                       <Route path='/redux-form/form-simple' component={FormSimple}></Route>
                       <Route path='/redux-form/form-async' component={FormAsync}></Route>
                   </Switch>
               </div>
           </div>
        )
    }
}

export default () => (
    <Provider store={store}>
        <FormRedux />
    </Provider>
);
