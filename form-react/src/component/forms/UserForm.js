import React from 'react';
import './UserForm.css';
import Notify from "./Notify";

export default class UserFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        });
        this.props.updateNotify(false);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.info(this.state);
        this.props.updateNotify(true);
        this.setState({
            name: '',
            email: '',
            password: '',
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.editInfo) {
            let info = this.props.editInfo;
            this.setState(info);
        }
    }
    render() {
        const {messageNotify, statusNotify, notify} = this.props
        return (
            <div>
                { notify &&
                  <Notify status={statusNotify} message={messageNotify}/>
                }
                <form className='user-form' onSubmit={e => this.onSubmit(e)} autoComplete='off'>
                    <div className='part'>
                        <label htmlFor="name">Full Name: </label>
                        <input type="text" id="name" value={this.state.name} onChange={e => this.onChange(e)}/>
                    </div>
                    <div className='part'>
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" value={this.state.email} onChange={this.onChange}/>
                    </div>
                    <div className='part'>
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div className='part'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


UserFormComponent.defaultProps = {
    notify: '',
    updateNotify: '',
    messageNotify: 'GOOD BOY !!!!',
    statusNotify: '',
    editInfo: '',
    info: '',
}

