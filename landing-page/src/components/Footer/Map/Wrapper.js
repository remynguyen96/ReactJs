import styled, { keyframes } from 'styled-components';
import color from '../../../utils/color-style';

const pulse = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
`;

export default styled.div`
   flex-basis: 60%;
   height: 400px;
   & .marker {
    position: relative;
    span {
      display: inline-block;
      font-size: 1.4rem;
      font-weight: 600;
      margin-left: -2rem;
      padding-bottom: 1rem;
      color: ${color.yellow};
      white-space: nowrap;
    }
    img {
     display: inline-block;
     animation: ${pulse} .8s linear infinite alternate;
    }
   }
`;
