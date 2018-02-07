import React, {Component} from 'react';
import Wrapper from './Wrapper';
import team2 from '../../../../images/team2.jpg';
import HeaderLink from '../../../../components/Header/HeaderLink';

class ItemProduct extends Component {
    render() {
        return (
            <Wrapper>
                <img src={team2} alt="John" className='image-product' />
                <h1>John Doe</h1>
                <p className="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <div style={{margin: '24px 0'}}>
                    <a href="#" className='social'><i className="fa fa-dribbble"></i></a>
                    <a href="#" className='social'><i className="fa fa-twitter"></i></a>
                    <a href="#" className='social'><i className="fa fa-linkedin"></i></a>
                    <a href="#" className='social'><i className="fa fa-facebook"></i></a>
                </div>
                <HeaderLink to='/products/test' className='btn-detail'>Contact</HeaderLink>
            </Wrapper>
        )
    }
}

export default ItemProduct;

