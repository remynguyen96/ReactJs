import React, {Component} from 'react';
import './form.css'
class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            age: 0
        };
    }

    handlerInput = (event) => {
        // console.log(event);
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        // console.log(event);
        event.preventDefault();
        console.log(`Hello ${this.state.fullname}, you ${this.state.age} years old`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <div className='part'>
                   <label htmlFor="name">Your name: </label>
                   <input type="text" value={this.state.fullname} name='fullname' onChange={this.handlerInput} />
               </div>
                <div className='part'>
                    <label htmlFor="name">Your age: </label>
                    <input type="text" value={this.state.age} name='age' onChange={this.handlerInput} />
                </div>
                <div className='part'>
                    <button type='submit'>Submit Name</button>
                </div>
            </form>
        )
    }
}

export default FormComponent