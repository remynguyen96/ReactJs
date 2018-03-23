import styled from 'styled-components';
import color from '../../utils/colorStyle';

const active = `
   &::after {
    content: '';
    transform: scaleX(1);
   }
`;

export default styled.div`
  background-color: rgba(5, 5, 5, 0.7);
  & .header {
    &-nav {
      position: relative;
      z-index: 99;
      display: flex;
      padding: 1.5rem;
      background-color: transparent;
      //background-color: rgba(134, 132, 132, 0.76);
    }
    &-logo {
      margin-left: 5%;
      width: 20rem;
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
        flex-basis: 15%;
        &.active {
          .header-menu-item {
            ${active};
          }
        }
      }
      &-item {
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        color: ${color.white};
        font-weight: 700;
        font-size: 1.5rem;
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          left: 0;
          bottom: -1.2rem;
          background-color: ${color.yellowLight};
          transform: scaleX(0);
          transition: transform 250ms;
        }
        &:hover {
          ${active};
        }
      }
    }
    &-white-page {
      position: relative;
      z-index: 4;
      display: flex;
      justify-content: space-evenly;
      margin-top: -15%;
      padding-top: 7%;
      height: 260px;
      background: rgba(0, 0, 0, 0.76);
    }
    &-btn-link {
      align-self: center;
      padding: 1.3rem 5rem;
      border-radius: 5rem;
      border: 2px solid rgba(166, 166, 166, 0.4);
      outline: none;
      cursor: pointer;
      font-size: 1.4rem;
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 600;
      background-color: transparent;
      color: ${color.yellowLight};
      transition: all 280ms ease-in-out;
      box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.6);
      &:hover {
        border: 2px solid rgba(255, 255, 255, 0.9);
        background-color: rgba(146, 146, 146, 0.45);
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
