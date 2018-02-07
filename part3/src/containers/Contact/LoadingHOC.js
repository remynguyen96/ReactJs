import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';

const loader = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
 .loader {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.loader:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 500rem;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
}

.loader:after {
  position: absolute;
  content: '';
  top: 0%;
  left: 50%;
  width: 100%;
  height: 100%;
  animation: ${loader} 0.6s linear;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #767676 transparent transparent;
  border-style: solid;
  border-width: 0.2em;
  box-shadow: 0px 0px 0px 1px transparent;
}


.loader:before,
.loader:after {
  width: 2.28571429rem;
  height: 2.28571429rem;
  margin: 0em;
}   
`;

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
);

const LoadingHOC = (loadingProp) => (WrapperComponent) => {
    return class extends Component {
        componentDidMount(){
            this.startTimer = Date.now();
        }

        componentWillUpdate(nextProps){
            if(!isEmpty(nextProps[loadingProp])) {
                this.endTimer = Date.now();
            }
        }

        render() {
            const myProps = {
                loadingTime: ((this.endTimer - this.startTimer)/1000).toFixed(2),
            };
            return (
                isEmpty(this.props[loadingProp]) ? <Wrapper>Loading...</Wrapper> : <WrapperComponent {...this.props} {...myProps} />
            )
        }
    }
};

export default LoadingHOC;