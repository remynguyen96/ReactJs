import React from 'react';
import Proptypes from 'prop-types'
import {Field, reduxForm} from 'redux-form';

let ContactForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="lastName">lastName</label>
                <Field type="text" name="lastName" component="input" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field type="email" component="input" name="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
};

ContactForm.propTypes = {
    handleSubmit: Proptypes.func
}

ContactForm = reduxForm({
    form: 'Contact'
})(ContactForm);

export default ContactForm;


