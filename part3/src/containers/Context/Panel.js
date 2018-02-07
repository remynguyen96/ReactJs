import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WithLocaleHOC from './WithLocaleHOC';
import InternalPanel from "./InternalPanel";

class Panel extends Component {

    render() {
        const { locale } = this.props;
        return (
            <div>
                <InternalPanel />
                <footer>{locale.strings.footer} Panel.js</footer>
            </div>
        )
    }
};



Panel.propTypes = {
    locale: PropTypes.object,
};

Panel.defaultProps = {
    locale: {},
};

export default WithLocaleHOC(Panel)
