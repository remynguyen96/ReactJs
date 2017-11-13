import styled from 'styled-components';

const TabNav = styled.a`
    border: 1px solid #979797;
    padding: 8px 25px;
    position: relative;
    background: #dddddd;
    cursor: pointer;
    -webkit-transition: background .25s, color .3s; 
    -moz-transition: background .25s, color .3s; 
    -ms-transition: background .25s, color .3s; 
    transition: background .25s, color .3s;
    &:hover {
       background: #5C5BFF;
       text-decoration: none;
       color: #ffffff;
    }
     &.activeTab {
       background: #5C5BFF;
       color: #ffffff; 
    }
`;
export default TabNav;
