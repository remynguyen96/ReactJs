import styled from 'styled-components';

const Animation = styled.div`
      position: absolute;
      pointer-events: none;
      top: 50%;
      left: 50%;
      height: 8em;
      width: 8em;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(-50%) translateY(-50%) scale(0.4);
      transition: transform 0.3s, background 0.3s;
    
    &.Ripple--in {
      background: rgba(255, 255, 255, 0.3);
      transform: translateX(-50%) translateY(-50%) scale(0.7);
    }
    
    &.Ripple--out {
      background: rgba(255, 255, 255, 0.0);
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
`;
export default Animation;