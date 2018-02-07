import styled from 'styled-components';

export default styled.div `
    background-color: rgba(96, 96, 96, 0.85);
    padding-top: 25px;
    width: 100%;
    height: 100%;
    
    & input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

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

    & .btn-register {
        padding: 8px 20px;
        margin-top: -20px;
        display: flex;
        justify-content: flex-end;
        color: #0b83ff;
        font-weight: 600;  
    }

    & .modal-content {
        background-color: #fefefe;
        margin: 0 auto 10%;
        border: 1px solid #888;
        max-width: 435px;
    }
`;