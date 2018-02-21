import styled from 'styled-components';

const focusInput = (color) => `
 &:not(:focus), &:focus {
    outline-color: ${color};
    border: 1px solid ${color};
 }
`;

export default styled.div`
  display: inline;
  & input[type=text], input[type=password], input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    &.invalid {
      ${focusInput('rgb(241, 48, 48)')}
    }
    &.valid {
      ${focusInput('rgb(46, 243, 125)')}
    }
  }
`



