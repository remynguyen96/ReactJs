import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {

    createListUser() {
        return this.props.users.map(
            (user, index) => {
               return (
                   <li key={index} style={{marginRight: '30px'}}>
                       <p>{user.firstName} {user.lastName}</p>
                       <p>Age: {user.age}</p>
                   </li>
               )
            }
        )
    }

    render() {
        return (
            <ul style={{display: 'flex', justifyContent: 'center', listStyleType: 'none'}}>
                {this.createListUser()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.UserReducer
    }
}

// function mapDispatchToProps(dispatch) {
//
// }

let UserContainer = connect(mapStateToProps)(UserList);

export default UserContainer;