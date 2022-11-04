import styled from 'styled-components'

export const donateContainer = styled.div`
  position: absolute;
  bottom: 70px;
  right: 50px;
  z-index:99;

  button{
    border:none;
    background-color:#FFB800;
    width:80px;
    height:80px;
    font-size:1rem;
    border-radius:50%;
    filter: drop-shadow(2px 1px 5px rgba(0,0,0, 0.2));
    transition:.2s;
  }

  button:hover{
    transform:scale(1.2)
  }
`
