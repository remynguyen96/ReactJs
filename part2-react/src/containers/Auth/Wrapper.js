import styled from 'styled-components';

export default styled.div`
    & .back-link, & .auth-link {
        display: inline-flex;
        flex-direction: column;
    }
    & .auth-link {
        float: right;
    }
    & .fa-long-arrow-left, & .fa-long-arrow-right {
        align-self: center;
        font-size: 2em;
        color: #717275;
    }  
`;
