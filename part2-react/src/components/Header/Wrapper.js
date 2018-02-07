import styled from 'styled-components';
import searchicon from '../../images/searchicon.png';

export default styled.header`
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid #949494;
    & .logo {
        width: 50px;
        height: 50px;
        align-self: center;
    }
    & .btn-login {
        padding: .5em 2.2em;
        color: #ffffff;
        background: #41e47a;
        align-self: center;
        margin-right: 25px;
    }
    
    & input[type=text] {
        width: 450px;
        align-self: center;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        background-color: #ffffff;
        background-image: url(${searchicon});
        background-position: 10px 10px; 
        background-repeat: no-repeat;
        padding: 12px 20px 14px 40px;
    }
`;