import styled from 'styled-components'

export const donateContainer = styled.div`
  position: absolute;
  bottom: 70px;
  right: 50px;
  z-index: 99;

  button {
    border: none;
    background-color: #ffb800;
    width: 80px;
    height: 80px;
    font-size: 1rem;
    border-radius: 50%;
    filter: drop-shadow(2px 1px 5px rgba(0, 0, 0, 0.2));
    transition: 0.2s;
    animation: show-pop 1s infinite linear;
  }



  @media (max-width: 40rem) {
    position: absolute;
    top: 100%;
    right: 3px;

    button {
      width: 60px;
      height: 60px;
    }
  }

  @keyframes show-pop {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`
