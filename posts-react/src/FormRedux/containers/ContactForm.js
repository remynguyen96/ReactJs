import React from 'react';
import Proptypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';

let ContactForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom: '20px'}}>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
            </div>
            <div style={{marginBottom: '20px'}}>
                <label htmlFor="lastName">lastName</label>
                <Field placeholder="lastName...." type="text" name="lastName" component="input"/>
            </div>
            <div style={{marginBottom: '20px'}}>
                <label htmlFor="email">Email</label>
                <Field type="email" component="input" name="email"/>
            </div>
            <div style={{marginBottom: '20px'}}>
                <label htmlFor="lastName">Gender</label>
                <Field name="gender" component="select">
                    <option />
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Field>
            </div>
            <div style={{marginBottom: '20px'}}>
                <label htmlFor="favorite">Color Favorite</label>
                <label>
                    <Field type="radio" name="favorite" value="green" component="input"/>
                    Green
                </label>
                <label>
                    <Field type="radio" name="favorite" value="red" component="input"/>
                    Red
                </label>
            </div>
            <div style={{marginBottom: '20px'}}>
                <label htmlFor="employed">Employed</label>
                <Field name="employed" id="employed" component="input" type="checkbox"/>
            </div>
            <div style={{marginBottom: '20px'}}>
                <label htmlFor="notes">Notes</label>
                <Field name="notes" component="textarea"/>
            </div>
            <button type="submit" disabled={pristine || submitting} >Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
        </form>
    )
};

ContactForm.propTypes = {
    handleSubmit: Proptypes.func
};
ContactForm.defaultTypes = {
    handleSubmit: () => null,
};

ContactForm = reduxForm({
    form: 'Contact'
})(ContactForm);

export default ContactForm;


