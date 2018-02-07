import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, fetchRooms } from './actions';
import { selectUserName, selectUserRoom } from './reducers';

class App extends Component {
    componentDidMount() {
        const { login, fetchRooms } = this.props;
        login();
        fetchRooms();
    }

    render() {
        const { isFetching, userName, accomodation } = this.props;
        if (isFetching || isFetching === undefined) return <div className="loader" />;
        return (
            <div className="App">
                <div className="main">
                    <h1>Your Reservation</h1>
                    <p>Name: {userName}</p>
                    <h2>Accomodation</h2>
                    <p><em>{accomodation.name}</em></p>
                    <p><img src={accomodation.image} width={300} alt="accomodation"/></p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth, rooms } = state;
    console.log(state);
    const isFetching = auth.isFetching;
    return {
        isFetching,
        userName: selectUserName(state),
        accomodation: selectUserRoom(state)
    };
};

const mapDispatchToProps = (dispatch) => ({
    login: () => login(dispatch),
    fetchRooms: () =>  fetchRooms(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);