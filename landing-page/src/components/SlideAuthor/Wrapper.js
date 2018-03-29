import styled from 'styled-components';
import color from '../../utils/color-style';
import { titlePage } from '../../utils/mixin-style';
import bgAuthor from '../../images/bg-author.jpg';

const { innerWidth } = window;
const paddingSlider = 15;
let widthSlider = 0;

if (innerWidth > 1024) {
  widthSlider = (innerWidth - ((innerWidth * paddingSlider / 100) * 2)) / 2;
}
if (innerWidth <= 1024) {
  widthSlider = innerWidth - ((innerWidth * paddingSlider / 100) * 2);
}
if (innerWidth <= 414) {
  widthSlider = innerWidth;
}

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
        padding: 2rem 18%;
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
        margin: 4rem 2rem;
        border-radius: .5rem;
      };
    }
    
    @media only screen and (max-width: 1024px) {
        & .author {
          &-name {
            font-size: 1.8rem;
            line-height: 3.2rem;
          }
          &-desc {
            font-size: 1.6rem;
         }
          &-player {
             width: 580px;
             height: 420px;
          };
        }
    };
    @media only screen and (max-width: 768px) {
        & .author {
          &-player {
             max-width: 100%;
             width: 500px;
             height: 400px;
          };
        }
    };
    @media only screen and (max-width: 414px) {
        & .author {
          &-player {
             width: 400px;
             height: 350px;    
             margin-left: 6px;
          };
          &-info {
            padding: 2rem 2%;
          }
          &-list {
            & .slick-list {
              padding: 0;
            }
        }
    };
    @media only screen and (max-width: 375px) {
      & .author {
        &-player {
           margin-left: 0;
        };
      }
    };
`;
