import styled from 'styled-components';

export default styled.form`
  background: #D5FFE8;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  div {
    margin: 15px;
    width: 100%;
    display: flex;
  }
  label {
    width: 120px;
  }
  input {
    width: 350px;
    padding: 8px 15px;
    border: 1px solid black;
  }
  input[type='file'] {
    display: none;
  } 
  .upload {
    border: 1px solid #6e6e6e;
    padding: 12px 25px;
    margin: 5px;
    border-radius: 4px;
    margin-left: 120px;
  }
  .submit {
    border: 1px solid #6e6e6e;
    padding: 12px 25px;
    width: 100%;
    border-radius: 4px;
    background: #4CFF86;
  }
`
