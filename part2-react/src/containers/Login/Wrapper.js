import styled from 'styled-components';

export default styled.div `
    background-color: rgba(96, 96, 96, 0.85);
    padding-top: 25px;
    width: 100%;
    height: 100%;

    & button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        &:hover {
           opacity: 0.8;
        }
    }

    & .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
        position: relative;
    }

    & img.avatar {
        width: 40%;
        border-radius: 50%;
    }

    & .container {
        padding: 16px;
    }

    & .modal-content {
        background-color: #fefefe;
        margin: 0 auto 10%;
        border: 1px solid #888;
        max-width: 435px;
    }
`;