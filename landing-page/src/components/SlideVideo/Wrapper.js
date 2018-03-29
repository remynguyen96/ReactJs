import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import color from '../../utils/color-style';
import {titlePage} from "../../utils/mixin-style";
import bgVideo from '../../images/bg-video.png';
import bgZigzag from '../../images/bg-zigzag.png';

const { innerWidth } = window;
const paddingSliderDesktop = 50;
const paddingMobileS = 75;
let widthSlider = 0;

if (innerWidth > 1024) {
  widthSlider = (innerWidth - (2 * paddingSliderDesktop)) / 3;
}
if (innerWidth <= 1024) {
  widthSlider = (innerWidth - (2 * paddingMobileS)) / 2;
}
if (innerWidth <= 414) {
  widthSlider = innerWidth;
}


export default styled.div`
  background-color: #121316;
  & .bg-barrier {
    background: url(${bgZigzag}) no-repeat center center;
    background-size: cover;
    height: 200px;
  }
  & .video-bg {
    background: url(${bgVideo}) no-repeat 100% 0;
    background-size: cover;
    background-attachment: fixed;
    margin-top: -35px;
    padding-bottom: 0;
  }
  & .video-title {
    ${titlePage};
    padding: 15rem 0 12rem;
    color: ${color.yellow};
    &::after {
      margin-top: 4.5rem;
    }
  }
  & .yt-title {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    opacity: 0.7;
    color: ${color.white};
    line-height: 4rem;
    margin-bottom: 0;
    transform: translateY(0) scale(1);
    transition: all 300ms ease;
  }
  & .yt-center {
     & .slick-arrow {
        top: 25%;
     }
     & .slick-slide {
        margin: 5rem auto 0;
        width: ${widthSlider}px;
      }
     & .yt-player {
        transform: scale(1);
        outline: none;
        transition: all 300ms ease-in-out;
        margin: 0 15%;
        border-radius: 30px 10px 30px 10px;
        height: 300px;
        width: 300px;
     }
     .slick-center {
       & .yt-title {
        color: ${color.yellow};
        transform: translateY(7rem) scale(1.2);
        opacity: 1;
       }
       & .yt-player {
          position: relative;
          z-index: 8;
          transform: scale(1.35,1.3);
       }
     }
  }
  @media only screen and (max-width: 1024px) {
    & .yt-title {
      line-height: 3rem;
      font-size: 1.8rem;
    }
    & .yt-center {
       & .slick-slide {
          margin: 5rem auto 3%;
       }
    }
  };
  @media only screen and (max-width: 414px) {
    & .yt-title {
      padding: 0 4rem;
    }
    & .yt-center {
       & .slick-slide {
          margin: 5rem -1px 5% 0;
       }
    }
  };  
  @media only screen and (max-width: 375px) {
      & .yt-center {
         & .slick-slide {
            margin: 2rem auto 5%;
         }
         .slick-center {
           & .yt-title {
            transform: translateY(7rem) scale(1);
           }
           & .yt-player {
              border-radius: 0;
              max-width: 100%;
              transform: scale(1);
              height: calc(${widthSlider}px - 25px);
              width: calc(${widthSlider}px - 25px);
              margin-left: 1rem;
           }
         }
      }
  };
`;
