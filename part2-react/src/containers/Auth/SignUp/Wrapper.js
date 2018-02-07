import styled from 'styled-components';

export default styled.div `
    width: 100%;
    height: 100%;
    overflow: auto; 
    background-color: #474e5d;
    padding-top: 50px;
    
   & input[type=text], input[type=password] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
    }

    & input[type=text]:focus, input[type=password]:focus {
        background-color: #ddd;
        outline: none;
    }

    & h1 {
     text-align: center;
         margin: 0;
    }

    & button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
        &:hover {
           opacity:1;
        }
    }
    
    .container {
        padding: 16px;
    }

    .modal-content {
        background-color: #fefefe;
        margin: 0 auto 10%;
        border: 1px solid #888;
        max-width: 450px;
    }

    hr {
        border: 1px solid #f1f1f1;
        margin-bottom: 25px;
    }
`