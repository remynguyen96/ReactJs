export const titlePage = `
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.4rem;
    text-align: center;
    &::after {
      content: "";
      position: absolute;
      background-color: #ffffff;
      width: 9rem;
      height: 0.2rem;
      margin-top: 0.5rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
`;
