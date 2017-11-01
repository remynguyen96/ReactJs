import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
// class App extends React.Component {

    state = {
        persons: [
            {name: 'Chau 1', age: 10, phone: '097683064'},
            {name: 'Chau 2', age: 11, phone: '097683063'},
            {name: 'Chau 3', age: 12, phone: '097683062'},
        ],
        ortherInfomation: 'some other value !!!'
    }

    switchHandler = (newName) => {
        // console.log(this);
        // console.log(this.setState);
        this.setState({
            persons: [
                {name: newName, age: 20, phone: '00000000'},
                {name: 'Chau 2', age: 11, phone: '097683063'},
                {name: 'Remy 3', age: 23, phone: '11111111'},
            ]
        })
    }

    nameHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Remy', age: 20, phone: '00000000'},
                {name: 'Chau 2', age: 11, phone: '097683063'},
                {name: event.target.value, age: 23, phone: '11111111'},
            ]
        })
    }

    render() {
        const styleBtn = {
            border: 'none',
            borderRadius: '4px',
            color: '#fff',
            backgroundColor: '#58FF73',
            padding: '4px 20px',
            marginBottom: '25px',
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {/*<Person name={this.infomation.persons[0].name} age={this.infomation.persons[0].age} phone={this.infomation.persons[0].phone} click={this.switchHandler.bind(this, 'MARK REMY')} />*/}
                {/*<Person name={this.infomation.persons[1].name} age={this.infomation.persons[1].age} phone={this.infomation.persons[1].phone} />*/}
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} phone={this.state.persons[2].phone} changed={this.nameHandler}>
                    <h2>Hello it's children in person</h2>
                    <p>what's going on guys !!</p>
                </Person>
                <div style={{textAlign: 'center'}}>
                    <button style={styleBtn} onClick={() => this.switchHandler('REMY NGUYEN')}>Change</button>
                </div>
            </div>
        );
    }
}

export default App;
