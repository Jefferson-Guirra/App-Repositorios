import styled from "styled-components";

export const Container = styled.article`
  max-width: 1120px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 6px;
  background: #17181f;

  div {
    color: #f2f6fc;
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin-bottom:2rem;
    div {
      display: flex;
      align-items: center;
      span {
        font-size:1.5rem;
        margin-left: 10px;
        font-weight: bold;
      }
      time {
        font-weight: bold;
        font-size:1.5rem;
        color: #ffb800;
        margin-left: 2px;
      }
    }
  }
  p {
    color: #f2f6fc;
    font-weight: bold;
    line-height: 150%;
  }
`
