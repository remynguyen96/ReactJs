import styled from 'styled-components';
import color from '../../utils/colorStyle';

export default styled.div`
  & .header {
      &-nav {
        display: flex;
        padding: 1.5rem;
        background-color: rgba(134, 132, 132, 0.76);
      }
      &-logo {
        margin-left: 5%;
        width: 200px;
        &-images {
          max-width: 100%;          
        }
      }
      &-menu {
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0 4rem;
        &-items {
          color: ${color.white};
          text-align: center;
          flex-basis: 12%;
        }
        &-item {
          text-decoration: none;
          text-transform: uppercase;
          color: ${color.white};
          font-size: 1.5rem;
        }
      }
      &-video {
        &-yt {
          position: absolute;
          width: 100%;
          top: 80px;
          left: 0;
          pointer-events: none;
          @media (min-aspect-ratio: 16/9) {
            height: 300%; 
            top: 80px;
          }
          @media (max-aspect-ratio: 16/9) {
            width: 300%; 
            left: -100%;
          }
        }
      }
      &-white {
        &-page {
        
        }
      }
  }
`;
