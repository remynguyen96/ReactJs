import React, { Component } from 'react';
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
  render() {
    return (
        <Wrapper>
          <div className="you-bg"></div>
          <You title='Why do i need this' infomation={infomationYou1} />
          <You title='Why are you selling' infomation={infomationYou2} />
        </Wrapper>
    );
  }
}

export default Doing;
