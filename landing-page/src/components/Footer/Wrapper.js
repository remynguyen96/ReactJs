import styled from 'styled-components';
import color from '../../utils/color-style';
import {titlePage} from "../../utils/mixin-style";

export default styled.div`
  background-color: #141519;
  margin-top: -24px;
  & .footer {
    &-title {
      ${titlePage};
      color: ${color.yellow};
      width: 60%;
      margin: 0 auto;
      font-size: 2rem;
      padding-top: 12rem;
      line-height: 3rem;
      &::after {
        width: 45%;
        margin-top: 12rem;
      }
    }
  }
  
`;
