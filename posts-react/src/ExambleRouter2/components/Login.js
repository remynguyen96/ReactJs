import styled from 'styled-components';

const Login = styled.div`
          & .part-login {
              margin: 20px;
              label {
               width: 100px;
                color: #444444;
                display: inline-block;
                text-align: left;
              }
              input {
                width: 260px;
                padding: 8px 20px;
                border-radius: 4px;
                border: 1px solid #A7A7A7;
              }
              button {
                    padding: 6px 20px;
                    background: #33d582;
                    color: #f4f4f4;
                    border: none;
                    border-radius: 2px;
                    font-size: .9em;
                    margin-left: 25px;
                    &:disabled {
                       background: #cbcbcb;
                       color: #181818;
                    }
              }
          }
          & .loading {
             transition: all .3s;
             opacity: 0;
             font-size: 1.1em;
             animation: loading .85s cubic-bezier(0.4, 0, 0.21, 1.04) infinite;
          }
          @-webkit-keyframes loading {
            0% { opacity: 0; transform: scale(.8)}
            50% { opacity: 1; transform: scale(1.1)}
          }
          @keyframes loading {
           0% { opacity: 0; transform: scale(.8)}
            50% { opacity: 1; transform: scale(1.1)}
          }
    `;

export default Login;