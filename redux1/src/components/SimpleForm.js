import React from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {Input, Button, Message} from 'semantic-ui-react';

class SimpleForm extends  React.Component {

    constructor(props) {
        super(props);
    }

    locationInput({input, meta:{touched, err}, ...custom}) {
        const hasError =  touched && e !== undefined;
        return (
            <div>
                {hasError &&
                    <Message error header='Error' content={err} />}
                     <Input error={hasError} fluid placeholder='Location....' {...input} {...custom}   />
            </div>
        )
    }

    submit({location}, dispatch) {
        return new Promise((resolve, reject) => {
            dispatch({
                type: 'FETCH_WEATHER',
                location,
                resolve,
                reject
            });
        }).catch((err) => {
            throw new SubmissionError(err);
        })
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))}>
                <Field name='location' component={this.locationInput} />
                <br/>
                <Button fulid type='submit'>Submit</Button>
            </form>
        )
    }
}

//ll
const validate = (value) => {
    const {locations} = value;
    const errors = {};
    if(!locations || locations.trim() === '') {
        errors.location = 'Locations required';
    }
    return errors;
}

export default reduxForm({
   form: 'simple'
})(SimpleForm)