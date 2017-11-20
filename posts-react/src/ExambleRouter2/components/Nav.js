import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    list-style: none;
    & .item-menu {
        margin-right: 30px;
        padding: 20px;
    }
    & .activeLink {
         background: #cef8ed;
    }
    & .item-link {
        text-decoration: none;
        font-size: 1.2em;
        color: #3561FF;
    }
`;

export default Nav;

