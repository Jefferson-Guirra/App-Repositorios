import styled from "styled-components";



export const button = styled.button`
  color: #fff;
  height: 2.5rem;
  border-radius: 3rem;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  font-weight: bold;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
  svg {
    width: 25px;
    height: 25px;
  }
  div {
    margin-right: 1rem;
  }
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  svg.closeIcon {
    margin-left: 1rem;
  }
`

