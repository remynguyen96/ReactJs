import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import Animation from './Ripple-Animation';

const Duration = 300;

class Ripple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            in: false,
            out: false,
        }
    }

    static propsTypes = {
        onRequestRemove: PropTypes.func.isRequired,
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({in: true, out: false});
          setTimeout(() => {
              this.setState({in: false, out: true});
              setTimeout(() => {
                  this.props.onRequestRemove();
              }, Duration);
          });
        }, 15)
    }

    render() {
        let className = `Ripple`;
        if(this.state.in) {
            className = `${className} Ripple--in`;
        }
        if(this.state.out) {
            className = `${className} Ripple--out`;
        }
        const style = {};
        if(this.props.left) style.left = this.props.left;
        if(this.props.top)  style.top = this.props.top;
        return (
            <Animation style={style} className={className}>
                <Helmet>
                    <title>Button Ripple</title>
                    <meta name="description" content="React Simple With Button Ripple"/>
                </Helmet>
            </Animation>
        )
    }
}
export default Ripple;