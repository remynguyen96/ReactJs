import styled from 'styled-components';

const Btn = styled.button`
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding: 1em;
    overflow: hidden;
    background: #ec407a;
    color: white;
    user-select: none;
    &:hover {
      background: #B4308B;
    }
`;

export default Btn;