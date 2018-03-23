import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import color from '../../utils/color-style';
// linear-gradient(180deg,#141519,#0f1014)

export default styled.div`
    h3 {
      font-size: 4rem;
      line-height: 100px;
      margin: 10px;
      padding: 2%;
      text-align: center;
    }
    //.slick-slider {
    //  margin: 30px auto 50px;
    //}
    //.center .slick-center h3 {
    //  color: #e67e22;
    //  opacity: 1;
    //  transform: scale(1.08);
    //}
    //.center h3 {
    //  opacity: 0.8;
    //  transition: all 300ms ease;
    //}
    //
    .slick-arrow {
      background-color: grey;
    }
    .slick-arrow:hover {
      background-color: grey;
    }
    .slick-prev {
      z-index: 100;
      left: 20px !important;
    }
    .slick-next {
      z-index: 100;
      right: 20px !important;
    }
`;
