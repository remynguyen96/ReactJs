import styled from 'styled-components';
import color from '../../utils/color-style';
import { titlePage } from '../../utils/mixin-style';
import bgAuthor from '../../images/bg-author.jpg';

const { innerWidth } = window;
const paddingSlider = 15;
const widthSlider = (innerWidth - ((innerWidth * paddingSlider / 100) * 2)) / 2;

export default styled.div`
    background-color: #0F1014;
    & .author {
      background: url(${bgAuthor}) center center no-repeat;
      background-size: cover;
      &-barrier {
        background-color: #0F1014;
        height: 120px;
        transform: skewY(-3deg);
        transform-origin: top left;
      }
      &-title {
        ${titlePage};
        padding-bottom: 5rem;
        color: ${color.yellow};
      }
      &-info {
        //position: absolute;
        //top: 50%;
        //left: 50%;
        //transform: translate(-50%, -50%);
        //margin: 15rem -4%;
        padding: 4rem 18%;
      }
      &-name {
        text-transform: capitalize;
        font-weight: 600;
        margin: 2rem 0;
        font-size: 1.5rem;
        text-align: center;
        color: ${color.yellow};
      }
      &-desc {
        font-weight: 600;
        line-height: 2.8rem;
        font-size: 1.4rem;
        text-align: center;
        color: #cfcfcf;
      }
      &-list {
        & .slick-prev {
          left: 12%;
          &::after {
            content: "\f104";
          }
        }
        & .slick-next {
          right: 12%;
          &::after {
            content: "\f105";
          }
        }
        & .slick-list {
          padding: 0 ${paddingSlider}%;
        }
      }
      &-slide {
        position: relative;
        width: ${widthSlider}px;
        margin: 0 auto;
        text-align: center;
      }
      &-player {
        //width: 380px;
        //height: 435px;
        //padding-bottom: 20%;
        margin: 4rem 2rem;
        border-radius: .5rem;
      };
    }
`;
