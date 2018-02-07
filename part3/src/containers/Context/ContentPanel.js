import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WithLocaleHOC from './WithLocaleHOC';

class ContentPanel extends Component {
    static propTypes = {
        locale: PropTypes.object,
    };
    static defaultProps = {
        locale: {},
    };
    render() {
        const { locale } = this.props;
        return (
            <div>
                <h1>{locale.strings.header}</h1>
                <p>{locale.strings.text}</p>
                <button style={{textAlign: 'center', color: '#FD7887'}}>{locale.strings.button.toUpperCase()}</button>
                <footer>ContentPanel</footer>
            </div>
        )
    }
};


export default WithLocaleHOC(ContentPanel);
