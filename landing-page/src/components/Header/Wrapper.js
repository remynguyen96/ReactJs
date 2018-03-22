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
      
      }
      &-white-page {
      
      }
  }
`;
