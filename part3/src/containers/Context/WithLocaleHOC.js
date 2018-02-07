import React, { Component } from 'react';
import PropTypes from 'prop-types';

const WithLocaleHOC = (WrapperComponent) => {
    return class WithLocaleHOC extends Component {
        static contextTypes = {
            locale: PropTypes.object,
        };

        componentDidMount() {
           this.context.locale.subscribe(() => this.forceUpdate());
        }

        render() {
            const { locale } = this.context;
            return (
                <WrapperComponent { ...this.props } locale={locale} />
            )
        }
    };
};

export default WithLocaleHOC;

