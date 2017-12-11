import styled from 'styled-components';

export default styled.div`
  .product-item {
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    border: 1px solid #797979;
    padding: 10px;
    background: #eceaea;
    border-radius: 4px;
    cursor: pointer;
    img {
      width: 120px;
      height: 120px;
    }
    span {
      align-self: center;
      font-weight: 500;
      font-size: 1.1em;
      padding: 12px;
    }
  }
`;
