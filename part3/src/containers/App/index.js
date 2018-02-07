import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import styled from 'styled-components';
import ContactContainer from '../Contact';
import ContextContainer from '../Context';
import * as action from './actions';


const AppWrapper = styled.div`
  max-width: calc(${window.innerWidth}px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: {}
        };
    }

    componentDidMount() {
        fetch('https://api.randomuser.me/?nat=us,gb&results=50')
            .then(response => response.json())
            .then(parsedResponse => parsedResponse.results.map(user => (
                {
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    thumbnail: user.picture.thumbnail
                }
            )))
            .then(contacts => this.setState({contacts}));
    }

    isEmpty = (prop) => (
        prop === null ||
        prop === undefined ||
        (prop.hasOwnProperty('length') && prop.length === 0) ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
    );

    cbProp = (data) => {
        this.props.getTodo(data);
    };


    render() {
        const {todo} = this.props;
        // console.log(todo);
        const {contacts} = this.state;
        if (this.isEmpty(contacts)) {
            return null;
        }
        const data = { name: 'Remy', status: 'complete', time: Date.now() };
        return (
            <AppWrapper>
                <p>{JSON.stringify(todo)}</p>
                <button style={{padding: '10px'}} onClick={() => this.cbProp(data)}>Click Dispatch</button>
                {/*<ContactContainer contacts={contacts} />*/}
                <ContextContainer/>
            </AppWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    todo: state.todo,
});

const mapDispatchToProps = dispatch => ({
    getTodo: (data) => dispatch(action.addTodo(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
