import styled from 'styled-components';
import color from '../../utils/color-style';
import bgMenu from '../../images/bg-menu.jpg';

const active = `
   &::after {
    content: '';
    transform: scaleX(1);
   }
`;

export default styled.div`
  background-color: rgba(18, 19, 22, 0.74);
  & .header {
    &-nav {
      position: relative;
      z-index: 99;
      display: flex;
      padding: 1.5rem;
      width: 100%;
      background-color: transparent;
      transition: all 380ms ease;
      &.nav-scroll {
        position: fixed;
        padding: 0.5rem;
        background-color: rgba(33, 33, 33, 0.7);
        & .header-logo {
          width: 18rem;
          transform: translateY(7px);
        }
      }
    }
    &-logo {
      margin-left: 5%;
      width: 25rem;
      transform: translateY(0);
      transition: width 300ms ease, transform 300ms ease-in-out;
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
      transition: all 300ms ease;
      &-items {
        color: ${color.white};
        text-align: center;
        flex-basis: 18%;
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
      height: 350px;
      background: rgb(18, 19, 22);
    }
    &-btn-link {
      align-self: center;
      padding: 1.3rem 5rem;
      border-radius: 5rem;
      border: 2px solid rgba(145, 145, 145, 0.9);
      outline: none;
      cursor: pointer;
      font-size: 1.4rem;
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 600;
      background-color: transparent;
      color: ${color.yellowLight};
      transition: background-color 280ms ease-in-out;
      box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.75);
      position: relative;
      overflow: hidden;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: rgba(146, 146, 146, 0.45);
        width: calc(100% + 60px);
        transform: skewX(-45deg) translateX(calc(-100% - 30px));
        transition: transform 280ms ease;
        z-index: -1;
      }
      &:hover {
        background-color: rgba(146, 146, 146, 0.45);
        &::before {
          width: calc(100% + 60px);
          transform: skewX(-45deg) translateX(-30px);
        }
      }
    }
  }
  
  @media only screen and (max-width: 1024px) {
     & .header {
        &-white-page {
          margin-top: -25%;
          padding-top: 15%;
        }
     }
  };
  
  @media only screen and (max-width: 768px) {
      & .list-menu {
         width: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0 4rem;
        transition: all 300ms ease;
      }
     & .mobl {
        position: fixed;
        z-index: 99;
        padding: 2rem;
        width: 100%;
        &-logo {
           max-width: 25%;
        }
        &-icon {
          transition: all .3s ease-in-out;
          display: block;
          width: 22px;
          height: 2px;
          border-radius: 1px;
          background-color: #fff;
          +.mobl-icon {
             margin-top: 5px;
          }
        }
        &-btn {
          background-color: transparent;
          background-image: none;
          cursor: pointer;
          border: solid 1px transparent;
          border-radius: 4px;
          outline: 0;
          position: absolute;
          z-index: 100;
          top: 3rem;
          right: 2rem;
          &.mobl-open {
             & .mobl-icon:nth-child(1) {
                 transform: translate(-1px, 7px) rotate(-225deg);
             }
             & .mobl-icon:nth-child(2) {
                 opacity: 0;
             }
             & .mobl-icon:nth-child(3) {
                 transform: translate(-1px,-7px) rotate(225deg);
             }
          }
        }
        &-main {
          position: absolute;
          top: 0;
          right: 0;
          & .header-menu {
            position: fixed;
            flex-direction: column;
            top: 5rem;
            right: -32rem;
            width: 320px;
            height: 100vh;
            background-color: red;
            justify-content: flex-start;
            margin-top: -5rem;
            padding-top: 7rem;
            background-color: #4F4F4F;
            background: url(${bgMenu}) no-repeat center center;
            background-size: cover;
          }
          & .header-menu-items {
             line-height: 5rem;
             flex-basis: 5%;
          }
          &.mobl-main-open {
            & .header-menu {
                right: -5rem;
            }
          }
        }
     }
     
      & .header {
        &-white-page {
          margin-top: -20%;
          padding-top: 5%;
          height: 250px;
        }
     }
  };
  @media only screen and (max-width: 414px) {
     & .header {
        &-white-page {
          margin-top: -25%;
          padding-left: 2rem;
          padding-right: 2rem;
          flex-direction: column;
        }
        &-btn-link {
          &:first-child {
            align-self: flex-start;
          } 
          &:last-child {
            align-self: flex-end;
          }   
        }
     }
     & .mobl {
        &-logo {
           max-width: 40%;
        }
     }
  };
  @media only screen and (max-width: 375px) {
     & .header {
        &-white-page {
          margin-top: -26%;
        }
     }
  };
  @media only screen and (max-width: 320px) {
     & .header {
        &-white-page {
          margin-top: -30%;
        }
     }
  };
`;



