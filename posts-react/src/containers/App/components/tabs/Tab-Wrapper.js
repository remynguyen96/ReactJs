import styled from 'styled-components';

const TabWrapper = styled.nav`
        display: flex;
        justify-content: center;
        border: 1px solid #D5E0CD;
        padding: 20px;
        position: relative;
        list-style: none;
        & .navTabs {
             display: flex;
            justify-content: center;
            border: 1px solid #D5E0CD;
            padding: 20px;
            position: relative;
            list-style: none;
        }
        & .underline {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          border-bottom: 3px solid #08b28b;
        }
        & .tabs {
           margin-right: 20px;
        }
    `;
export default TabWrapper;