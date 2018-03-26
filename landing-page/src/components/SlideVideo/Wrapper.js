import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import color from '../../utils/color-style';
import {titlePage} from "../../utils/mixin-style";
import bgVideo from '../../images/bg-video.png';
import bgZigzag from '../../images/bg-zigzag.png';

export default styled.div`
  background-color: #121316;
  & .bg-barrier {
    background: url(${bgZigzag}) no-repeat center center;
    background-size: cover;
    height: 200px;
  }
  & .video-bg {
    background: url(${bgVideo}) no-repeat 80% 20%;
    background-size: cover;
    background-attachment: fixed;
    margin-top: -35px;
  }
  & .video-title {
    ${titlePage};
    padding: 8rem 0 5rem;
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
    transform: translateY(0) scale(1);
    transition: all 300ms ease;
  }
  & .slick-slide {
    margin: 5rem auto 8rem;
  }
  & .yt-center {
     & .slick-track {
         padding-bottom: 18rem;
     }
     & .yt-player {
        transform: scale(1);
        outline: none;
        transition: all 300ms ease-in-out;
        margin: 0 3.3rem;
        border-radius: 30px 10px 30px 10px;
        height: 350px;
        width: 350px;
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
`;
