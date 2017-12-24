import React from 'react';
import PropTypes from 'prop-types'

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sizes: {},
        }
        this.els = {};
    }

    componentDidMount() {
        this.transitionStyle = 'left .4s, right .4s';
        this.getSizes();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.children !== this.props.children && prevProps.active !== this.props.active) {
            this.getSizes();
        }
    }

    getSizes() {
        const rootBounds = this.rootNav.getBoundingClientRect();
        const sizes = {};
        Object.keys(this.els).forEach((item) => {
            const el = this.els[item];
            const bounding = el.getBoundingClientRect();
            const left = bounding.left - rootBounds.left;
            const right = rootBounds.right - bounding.right;
            sizes[item] = { left, right };
        });
        this.setState({sizes});
        return sizes;
    }

    getUnderlineStyle = () =>  {
        if(this.props.active === null || Object.keys(this.state.sizes).length === 0) {
            return { left: 0, right: '100%' }
        }
        const size = this.state.sizes[this.props.active];
        return {
            left: `${size.left}px`,
            right: `${size.right}px`,
            transition: this.transitionStyle,
        };
    }

    render() {
        // console.log(JSON.stringify(this.state, null, 2));
        return (
            <nav className="navTabs" ref={el => this.rootNav = el}>
                {React.Children.map(this.props.children, (child, i) => {
                    // let classTab = `tabs`;
                    // if (child.key === this.props.active) {
                    //     classTab = `${classTab} activeTab`;
                    // }
                    return (
                      <li className="tabs"
                          onClick={()  => {
                              this.props.onChange(child.key);
                          }}
                          ref={el => this.els[child.key] = el}
                      >
                          {child}
                      </li>
                    )
                })}
                <span className="underline" style={this.getUnderlineStyle()} />
            </nav>
        )
    }
}

Tabs.PropTypes = {
    active: PropTypes.string
}

Tabs.defaultProps = {
    active: 'cTab'
}

export default Tabs;