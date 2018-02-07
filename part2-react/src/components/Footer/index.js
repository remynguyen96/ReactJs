import React, {Component} from 'react';
import Wrapper from './Wrapper';

class Footer extends Component {
    render() {
        return (
            <Wrapper>
               <p className='copyright'>Created with azeroth.js</p>
            </Wrapper>
        )
    }
}

export default Footer;
