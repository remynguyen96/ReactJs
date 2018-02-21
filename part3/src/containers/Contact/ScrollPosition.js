import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScrollPosition extends Component {
    state = {
        position: null
    };

    static propTypes = {
        children: PropTypes.func.isRequired,
    }

    static defaultProps = {
        children: {}
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    getBounds = (element) => {
        if (this.bounds) return;
        this.bounds = element && element.getBoundingClientRect();
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset;
        const windowSize = window.innerHeight;
        const {bottom, height, top} = this.bounds;
        const visibleSpace = windowSize + (bottom - height);
        let visibleRatio = ((windowSize + scrollTop) - top + height) / visibleSpace;
        if (visibleRatio < 0) visibleRatio = 0;
        if (visibleRatio > 1) visibleRatio = 1;
        this.setState({
            position: visibleRatio,
        });
    };

    render() {
        return (
            <div ref={this.getBounds}>{this.props.children(this.state.position)}</div>
        )
    }
}
export default ScrollPosition;