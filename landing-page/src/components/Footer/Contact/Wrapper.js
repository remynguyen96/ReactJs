import styled from 'styled-components';

export default styled.div`
  padding: 12rem 24rem 0;
  margin-bottom: 10rem;
  & .contact-us {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }
  & .field {
    position: relative;
    flex-basis: 45%;
    margin-bottom: 3.5rem;
  }
  & .textarea {
    flex-basis: 100%;
    padding: 0 14rem;
    label {
       left: auto;
    }
  }

  & .btn-submit {
    background: #caad3f;
    color: #f6efd0;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    letter-spacing: 0.06rem;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    margin-top: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    &:hover {
      background: #dec04d;
      color: #fbf7e8;
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.12);
    }
  }
`;
