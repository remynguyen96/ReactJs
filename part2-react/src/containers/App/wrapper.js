import styled from 'styled-components';

export default styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 5px;
  }
  .logo {
    width: 50px;
    height: 50px;
    padding-left: 30px;
  }
  .btn-login {
    text-decoration: none;
    align-self: center;
    padding: 8px 30px;
    margin-right: 20px;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    background-color: rgba(72, 210, 140, 0.9);
  }  
`;
