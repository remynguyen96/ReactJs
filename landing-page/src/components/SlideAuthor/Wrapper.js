import styled from 'styled-components';
import color from '../../utils/color-style';
import { titlePage } from '../../utils/mixin-style';
import bgAuthor from '../../images/bg-author.jpg';

const widthSlider = ((window.innerWidth/2) - 45);

export default styled.div`
    background-color: #0F1014;
    & .author {
      background: url(${bgAuthor}) center center no-repeat;
      background-size: cover;
      &-barrier {
        background-color: #0F1014;
        height: 120px;
        transform: skewY(-5deg);
        transform-origin: top left;
      }
      &-title {
        ${titlePage};
        padding-bottom: 5rem;
        color: ${color.yellow};
      }
      &-info {
            position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 8rem -10rem;
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
        color: ${color.whiteDark};
        padding: 0 5rem;
      }
      &-list {
        & .slick-prev {
          &::after {
            content: "\f104";
          }
        }
        & .slick-next {
          &::after {
            content: "\f105";
          }
        }
        & .slick-list {
          padding: 0 16rem;
        }
      }
      &-slide {
        position: relative;
        width: ${widthSlider}px;
        margin: 0 auto;
      }
      &-player {
        width: 380px;
        height: 435px;
        margin: 4rem 2rem;
        padding-bottom: 35%;
        border-radius: .5rem;
      };
    }
`;
