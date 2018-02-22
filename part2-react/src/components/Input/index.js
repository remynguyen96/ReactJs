import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import {debounce} from '../../utils/helper';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validationStarted: false,
        };
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
        validate: PropTypes.bool,
        onChange: PropTypes.func,
        // refInput: PropTypes.func,
    };

    static defaultProps = {
        type: 'text',
        value: '',
        name: '',
        required: false,
        validate: false,
        onChange: () => {},
        // refInput: () => {},
    };

    componentWillMount() {
        this.observableInput = new Subject();
        // const { value } = this.props;
        // if (value && value !== '') {
        //     this.startValidation();
        // } else {
        //     this.prepareToValidate = debounce(this.startValidation, 250);
        // }
    }

    componentDidMount() {
        this.subscription = this.observableInput.pipe(
            debounceTime(300),
            distinctUntilChanged(),
        ).subscribe((value) => {
            console.log(value);
            this.startValidation();
            const { onChange, name } = this.props;
            onChange(name, value);
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    prepareToValidate = () => {};

    startValidation = () => {
        this.setState({ validationStarted: true });
    };

    // changeValue = (e) => {
    //     const { value, name } = e.target;
    //     const { onChange, type } = this.props;
    //     //
    //     if (!this.state.validationStarted) {
    //         this.prepareToValidate();
    //     }
    //     onChange(name, value);
    // };

    blurValue = () => {
        if (!this.state.validationStarted) {
            this.prepareToValidate();
        }
    };

    render() {
        const {type, placeholder, name, className, required, value, validate} = this.props;
        let classValid;
        classValid = className && className;
        if (this.state.validationStarted) {
            classValid += validate ? ' valid' : ' invalid';
        }
        return (
            <Wrapper>
                <input type={type}
                       name={name}
                       className={classValid}
                       placeholder={placeholder}
                       defaultValue={value}
                       required={required}
                       onChange={(e) => this.observableInput.next(e.target.value)}
                       onBlur={this.blurValue}
                       autoComplete="off"
                />
            </Wrapper>
        )
    }
}

export default Input;
