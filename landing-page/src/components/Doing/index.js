import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';
import You from "./You";

const infomationYou1 = [
  'Chia sẻ về ước mơ của bạn.',
  'Dream cung cấp những giải pháp tài chính phù hợp.',
  'Lên kế hoạch và thực hiện. Bạn nên kiểm tra tiến độ thường xuyên.',
  'Và chúng tôi tin rằng đó chỉ là bước khởi đầu cho những ước mơ lớn hơn …',
];
const infomationYou2 = [
  'Hơn 4 mét vuông không gian xanh trên đầu người',
  'Không gian sống thoáng đãng',
  'Được cấp chứng chỉ của Singapore Building',
  'Giá cả hợp lý, ưu đãi hấp dẫn và chế độ thanh toán linh hoạt …',
];

class Doing extends Component {

  constructor(props) {
    super(props);
    this.elementBg = null;
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
    const { top } = this.elementBg.getBoundingClientRect();
    console.log(this.elementBg.getBoundingClientRect());
    // if ((window.scrollY + 300) > top) {
    //    this.setState({ scrolling: true });
    // }
    // if (top <= -200 || top ) {
    //   this.setState({ scrolling: false });
    // }
  };

  render() {
    return (
        <Wrapper id="part2">
          <div className={this.state.scrolling ? 'you-bg scrolling' : 'you-bg'}
               ref={(ref) => this.elementBg = ref}
          >
          </div>
          <You title='Why do i need this' infomation={infomationYou1} />
          <You title='Why are you selling' infomation={infomationYou2} />
        </Wrapper>
    );
  }
}

export default Doing;
