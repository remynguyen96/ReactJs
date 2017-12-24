import styled from 'styled-components';
export default styled.div`
    padding: 35px 20px;
    font-size: 2.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 350px;
    background: ${props => props.bg ? props.bg : '#4AA7FF'};
`;


