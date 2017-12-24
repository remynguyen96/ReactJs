import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import Propstypes from 'prop-types';
import styled from 'styled-components';

const Wrapper =  styled.div`
    padding: 20px;
`;

class FormSimple extends React.Component {

    submitForm = () => {
        console.log('21321321');
    };

    locationInput = ({ input, type, label, meta: { touched, error }}) => {
        const hasError = touched && error !== undefined;
        return (
            <div>
                <label htmlFor={label}>{label}</label>
                <input type={type} {...input} />
                {hasError &&
                    <p>Error: {error}</p>
                }
            </div>
        )
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <Wrapper>
                <form onSubmit={handleSubmit(this.submitForm)}>
                     <Field name="firstName" label="FistName" component={this.locationInput}  />
                     <Field type="email" name="Email" label="Email" component={this.locationInput}  />
                     <button type="submit">Submit Form</button>
                </form>
            </Wrapper>
        )
    }
}

const validate = values => {
   const errors = {};
   if(!values.firstName || values.firstName.trim() === '') {
       errors.firstName = 'First name is required';
   }
   return errors;
};


export default reduxForm({
   form: 'simple',
    validate,
})(FormSimple);
