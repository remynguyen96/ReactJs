import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import ExpParser from 'mathjs-expression-parser';
import {Route, Switch, Link} from 'react-router-dom';
import ContactForm from './containers/ContactForm';
import FormSimple from './containers/FormSimple';

class FormRedux extends React.Component {
    evaluate = (expr, scope)  => {
        const result = ExpParser.eval(expr, scope || {}).toFixed(2);
        console.log(result);
        return ExpParser.eval(expr, scope || {}).toFixed(2);
    }

    render() {
        const value = {
            $E: '31.74',
            $C: 10.58,
            $D: '3.00',
            $F: '31.73',
        };
        this.evaluate('$F / $C', value);
        this.evaluate('$C * $D', value);
        return (
           <div>
               <Link to='/redux-form/contact-form'>Contact Form</Link>
               <Link to='/redux-form/form-simple'>Form Simple</Link>
               <Switch>
                    <Route path='/redux-form/contact-form' component={ContactForm} />
                    <Route path='/redux-form/form-simple' component={FormSimple} />
               </Switch>
           </div>
        )
    }
}

export default () => (
    <Provider store={store}>
        <FormRedux />
    </Provider>
);
