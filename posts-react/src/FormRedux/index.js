import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import ContactForm from '../FormRedux/containers/ContactForm'


class FormRedux extends React.Component {
    constructor(props) {
        super(props);
    }

    submitForm = (value) => {
        console.log(value)
    }

    render() {
        return (
           <div>
               <ContactForm onSubmit={this.submitForm} />
           </div>
        )
    }
}

export default () => (
    <Provider store={store}>
        <FormRedux />
    </Provider>
);
