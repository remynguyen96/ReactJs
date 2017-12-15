import styled from 'styled-components';
export default styled.form`
  padding: 10px 20px;
  width: 650px;
  margin: 0 auto;
  border: 1px solid #C0E6C8;
  padding: 8px 20px;
  & .part {
    margin: 12px;
    display: flex;
    align-items: center;
    label {
      flex-basis: 120px;
    }
    input {
      padding: 8px 20px;
      flex-basis: 420px;
      border: 1px solid #6D6D6D;
      color: #2B2B2B;
    }
  }
  input[type='file'] {
    display: none;
  }
  & .btn {
    padding: 8px 20px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 1.1em;
    &-file  {
      background: #717FFF;
    }
    &-submit {
      background: #8BFF8D;
    }
  }
  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
`;
