import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

class FormRedux extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at aut culpa delectus dolores, error fugit necessitatibus neque nesciunt obcaecati odio perspiciatis quam repellat rerum sunt. Dolores dolorum mollitia repellendus!</div>
        )
    }
}

export default () => (
    <Provider store={store}>
        <FormRedux />
    </Provider>
);

