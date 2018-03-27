import React, { Component } from 'react';
import Wrapper from './Wrapper';
import You from "./You";
import { componentDoing } from '../../utils/mockData';

const infomationYou1 = [
  'Chia sẻ về ước mơ của bạn.',
  'Dream cung cấp những giải pháp tài chính phù hợp.',
  'Lên kế hoạch và thực hiện. Bạn nên kiểm tra tiến độ thường xuyên.',
  'Và chúng tôi tin rằng đó chỉ là bước khởi đầu cho những ước mơ lớn hơn',
];
const infomationYou2 = [
  'Hơn 4 mét vuông không gian xanh trên đầu người',
  'Không gian sống thoáng đãng',
  'Được cấp chứng chỉ của Singapore Building',
  'Giá cả hợp lý, ưu đãi hấp dẫn và chế độ thanh toán linh hoạt',
];

class Doing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollImage);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollImage);
  };

  scrollImage = () => {
    // const elementBg = document.querySelector('#part2');
    // console.dir(elementBg);
    // const { top } = this.elementBg.getBoundingClientRect();
    // const { top } = this.elementBg;
    // console.dir(this.elementBg)
    // console.log(this.elementBg.getBoundingClientRect());
    // console.log(window.scrollY, top);
    // if ((window.scrollY + 300) > top) {
    //    this.setState({ scrolling: true });
    // }
    // if (top <= -200 || top ) {
    //   this.setState({ scrolling: false });
    // }
  };

  render() {
    return (
        <Wrapper id={componentDoing}>
          <div className={this.state.scrolling ? 'you-bg scrolling' : 'you-bg'}>
          </div>
          <You title='Why do i need this' infomation={infomationYou1} />
          <You title='Why are you selling' infomation={infomationYou2} />
        </Wrapper>
    );
  }
}

export default Doing;
