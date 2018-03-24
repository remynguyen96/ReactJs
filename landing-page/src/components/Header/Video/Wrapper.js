import styled from "styled-components";
import colorStyle from "../../../utils/color-style";

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
        }
        &-icon {
          font-size: 8.5rem;
          color: ${colorStyle.white};
        }
   }
`;
