import React from 'react';
import PropTypes from 'prop-types';
import Btn from './Btn';
import Ripple from './Ripple'


class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ripples: [],
        }
    }

    static propTypes  = {
        onClick: PropTypes.func,
    }

    render() {
        return(
            <Btn onClick={(e) => {
                this.props.onClick();
                //e.pageY === e.clientY;
                const left = e.clientX - e.target.offsetLeft;
                const top =  e.clientY - e.target.offsetTop;
                const id = Math.random().toString();
                const ripples = [...this.state.ripples, {left, top, id}];
                this.setState({ ripples });
            }}>
                {this.props.children}
                {this.state.ripples.map( ({left, top, id}) =>
                    <Ripple
                        left={`${left}px`}
                        top={`${top}px`}
                        key={id}
                        onRequestRemove={() => {
                            this.setState(state => ({
                                ripples: state.ripples.filter(x => x.id !== id),
                            }))
                        }}
                    />
                )}
            </Btn>
        )
    }
}

export default Button;