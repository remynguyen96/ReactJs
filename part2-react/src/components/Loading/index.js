import React, { Component } from 'react';


const LoadingHOC = (loading) => (WrapperComponent) => {
    return class extends Component {
        componentDidMount() {
            console.log(loading)
        }

        render() {
            return (
                <WrapperComponent />
            )
        }
    }
};
export default LoadingHOC;
