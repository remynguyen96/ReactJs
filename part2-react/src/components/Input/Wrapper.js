import styled from 'styled-components';

export default styled.div`
  display: inline;
  
  & input[type=text], input[type=password], input[type=email] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    
    & input.dirty:not(:focus):invalid {
        background-color: #FF5156;
    }
        
    & input.dirty:not(:focus):valid {
      background-color: #D9FFD9;
    }
`;
