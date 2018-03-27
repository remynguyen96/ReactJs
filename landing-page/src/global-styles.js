import { injectGlobal } from 'styled-components';
import 'normalize.css';

const arrowSlide = `
    position: absolute;
    font-family: FontAwesome;
    top: 0;
    font-size: 8rem;
    cursor: pointer;
    color: #ffd37f;
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&subset=vietnamese');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 10px;
  }
  body {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(1,39,63,0.5);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 0px rgba(255,222,222,1);
    background:#767777;
    border:1px solid #ccc;
  }
  
  & .slick-arrow {
    position: absolute;
    z-index: 9;
    top: 33%;
    font-size: 0;
    border: none;
    line-height: 0;
    background: transparent;
    outline: none;
  }
  & .slick-prev {
    left: 9rem;
    &::after {
      content: "\f0d9";
      ${arrowSlide};
      left: 0;
    }
  }
  & .slick-next {
    right: 9rem;
     &::after {
      content: "\f0da";
      ${arrowSlide};
      right: 0;
    }
  }
  input, textarea {
    background: none;
    color: #f3e7d0;
    font-size: 1.6rem;
    padding: 1rem 1rem 1rem .5rem;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #f3e7d0;
    &:focus {
      outline: none;
    }
    &:focus ~ label,
    &:valid ~ label {
      top: -15px;
      font-size: 1.2rem;
      color: #e7b960;
    }
    &:focus ~ .bar:before {
      width: 100%;
    }         
  }  
  input[type="password"] {
    letter-spacing: 0.3rem;
  }
  label {
    color: #f3e7d0;
    font-size: 1.6rem;
    font-weight: 600;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: all 300ms ease;
  }
  .bar {
    position: relative;
    display: block;
    &:before {
      content: '';
      height: 2px;
      width: 0;
      bottom: 0;
      position: absolute;
      background: #ffc34f;
      transition: all 300ms ease;
      left: 0;
    }
  }
  @media only screen and (max-width: 1024px) {
  }
`;
