import styled, { keyframes } from "styled-components";
import colorStyle from "../../../utils/color-style";

const rotate = keyframes`
    0% {transform: translate(-50%, -50%) rotate(0deg);}
    100% {transform: translate(-50%, -50%) rotate(360deg);}
`;

export default styled.div`
   & .header-video {
        position: relative;
        padding-bottom: 56.25%;
        &-yt {
          position: absolute;
          z-index: 5;
          top: -8rem;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transform: skewY(5deg);
          transform-origin: bottom right;
        }
        &-btn {
          position: absolute;
          z-index: 6;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          &::after {
            content: '';
            width: 100%;
            height: 100%;
            background-color: transparent;
            border-radius: 50%;
            border: 2px solid #ffffff;
            position: absolute;
            top: 51%;
            left: 50%;
            transform: translate(-50%,-50%);
            transform-origin: 50% 100%;
            transition: border-bottom 280ms ease-in-out;
          }
          &:hover {
             &::after {
                content: '';
                top: 25%;
                height: 50%;
                border-radius: 0;
                border-top-left-radius: 100px;
                border-top-right-radius: 100px;
                border-bottom: 0;
                animation: ${rotate} 1s linear infinite;
             }
          }
        }
        &-icon {
          font-size: 8.5rem;
          color: ${colorStyle.white};
        }
   }
   
  @media only screen and (max-width: 1024px) {
    & .header-video {
      &-btn {
        top: 18%;
      }
    }
  };
`;
