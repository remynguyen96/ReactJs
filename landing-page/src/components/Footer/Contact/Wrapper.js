import styled, {keyframes} from 'styled-components';

const sonarEffect = keyframes`
  0% {
    opacity: .3
  }
  40% {
    opacity: .5;
  box-shadow: 0 0 0 2px rgba(203,203,203,0.1),0 0 10px 10px #484a4b,0 0 0 10px rgba(154,154,154,0.5)
  }
  100% {
    box-shadow: 0 0 0 2px rgba(203,203,203,0.1),0 0 10px 10px #484a4b,0 0 0 10px rgba(154,154,154,0.5);
  transform: scale(1.1);
  opacity: 0
  }
`;

export default styled.div`
  padding: 12rem 5% 0;
  margin-bottom: 10rem;
  display: flex;
  justify-content: space-evenly;
  & .contact {
    &-us {
      display: flex;
      flex-basis: 35%;
      justify-content: space-around;
      flex-direction: column;
      align-self: center;
    }
    &-intro {
       display: flex;
      flex-direction: column;
    }
    &-video {
       padding-bottom: 44%;
    }
    &-link {
      align-self: center;
      margin-top: -12rem;
      padding: 0 3rem;
      color: #5a5a5a;
      background-color: #eace61;
      position: relative;
      transition: box-shadow .6s ease-in-out;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 600;
      text-decoration: none;
      line-height: 38px;
      border-radius: 40px;
      box-shadow: 5px 5px 10px 0 rgba(0,0,0,.5);
      &::after {
        content: "";
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        animation: ${sonarEffect} 1s ease-out infinite;
      }
      &:hover {
        text-decoration: none;
        box-shadow: inset 5px 5px 10px 0 rgba(0, 0, 0, 0.5);
      }
    }
  }
  & .field {
    position: relative;
    flex-basis: 100%;
    margin-bottom: 6rem;
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
  @media only screen and (max-width: 1024px) {
     padding: 12rem 5% 0;
  };
  @media only screen and (max-width: 768px) {
    padding: 10rem 4% 0;
    margin-bottom: 5rem;
  };
  @media only screen and (max-width: 414px) {
     flex-direction: column;
     & .contact {
        &-us {
          margin-top: 4.5rem;
          width: 100%
        }
        &-video {
           max-width: 100%;
        }
     }
  };
`;

