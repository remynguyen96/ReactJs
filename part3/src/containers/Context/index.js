import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel';
import Locale from './locales/Locale';


class Context extends Component {

    constructor(props, context) {
        super(props, context);
        this.locale = new Locale('en');
    }

    componentWillUpdate(nextProps, nextState) {
        this.locale.setLanguague(nextState.currentLanguage);
    }

    static childContextTypes = {
        locale: PropTypes.object,
    };

    state = {
        currentLanguage: 'en',
    };


    getChildContext() {
        return {locale: this.locale}
    }

    changeLocale = (lang) => {
        this.setState({currentLanguage: lang});
    }

    render() {
        return (
            <div style={{padding: '30px', background: '#6CE1FD'}}>
                <a style={{display: 'inline-block', padding: '15px', background: '#6FFD61'}}
                   onClick={() => this.changeLocale('en')}>EN</a>
                <br/>
                <a style={{display: 'inline-block', padding: '15px', background: '#FD5F56'}}
                   onClick={() => this.changeLocale('vi')}>VI</a>
                <hr/>
                <Panel/>
            </div>
        )
    }
};


export default Context
