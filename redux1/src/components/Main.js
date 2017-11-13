import React from 'react';
import {Link} from 'react-router-dom';
import {Header, Container} from 'semantic-ui-react'



export default class Main extends React.Component {
    render() {
        return (
            <Container text>
                <Header as='h1' textAlign='center'>
                    <Link to="/">Weather</Link>
                </Header>
                {React.cloneElement(this.props.children, this.props)}
            </Container>
        )
    }
}