import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    static propTypes = {
        type: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        required: PropTypes.bool,
        className: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    };

    static defaultProps = {
        type: 'text',
        placeholder: '',
        required: false,
        name: '',
        className: '',
        value: '',
    };

    changeValue = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const {type, placeholder, name, className, required, value} = this.props;
        return (
            <Wrapper>
                <input type={type}
                       name={name}
                       className={className}
                       placeholder={placeholder}
                       defaultValue={value}
                       required={required}
                       onChange={this.changeValue}
                       autoComplete="off"
                />
            </Wrapper>
        )
    }
}

export default Input;