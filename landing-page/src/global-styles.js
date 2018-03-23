import { injectGlobal } from 'styled-components';
import 'normalize.css';

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
`;
