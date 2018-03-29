import styled from 'styled-components';
import color from '../../utils/color-style';
import bgMap from '../../images/bg-map.png';

export default styled.div`
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   padding: 9% 10% 5%;
   background-color: rgba(0, 0, 0, 0.899);
   position: relative;
   & .you {
      flex-basis: 35%;
      max-width: 35%;
      position: relative;
      z-index: 3;
      box-shadow: 7px 7px 40px 0 rgba(0,0,0,.4);
      padding: 2rem;
      border: 1px solid rgba(130, 130, 130, 0.59);
      border-radius: 1rem;
      &:first-child {
         align-self: flex-start;
      }
      &:last-child {
         align-self: flex-end;
         margin-top: -5%;
      }
      &-video {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &-bg {
        background: url(${bgMap}) no-repeat 55% 100%;
        opacity: .7;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        &.scrolling {
          background-attachment: fixed;
        }
      }
      &-til {
        font-size: 2.2rem;
        font-weight: 600;
        text-transform: capitalize;
        text-align: center;  
        color: ${color.yellow};
        margin: 2rem 0 .5rem;
      }
      &-desc {
        display: flex;
      }
      &-img {
         align-self: center;
         img {
           max-width: 100%;
         }
      }
      &-list {
        display: flex;
        flex-direction: column;
      }
      &-item {
         line-height: 3rem;
         font-size: 1.4rem;
         font-weight: 400;
         list-style-type: decimal;
         color: ${color.white};
      }
      &-more {
         font-size: 2.4rem;
         font-weight: 600;
         color: ${color.white};
         align-self: flex-end;
         cursor: pointer;
      }
   }
  @media only screen and (max-width: 1024px) {
   padding-left: 5%;
   padding-right: 5%;
   & .you {
      flex-basis: 45%;
      max-width: 45%;
      &:last-child {
         margin-top: 2%;
      }
   } 
  };
  @media only screen and (max-width: 768px) {
  background-color: rgb(18,19,22);
   & .you {
      flex-basis: 60%;
      max-width: 60%;
      &:last-child {
         margin-top: 5%;   
      }
      &-video {
        position: relative;
        align-self: center;
        left: 0;
        transform: translate(0);
        margin-top: 3.5rem;
        max-width: 100%;
      }
      &-bg {
        background-size: cover;
      }
   } 
  };
  @media only screen and (max-width: 414px) {
     & .you {
        flex-basis: 100%;
        max-width: 100%;
        &:last-child {
           margin-top: 10%;   
        }
     } 
  };
`;

