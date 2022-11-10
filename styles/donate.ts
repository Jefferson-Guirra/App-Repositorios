import styled from "styled-components"

export const container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  min-height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  img {
    width: 100%;
  }
  .rocket {
    width: 300px;
    margin: 0 auto;
  }
  .vip {
    color: #fff;
    margin-top: 1.5rem;
    width: fit-content;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 6px;
    background-color: #019950;
    display: flex;
    align-items: center;
    justif-content: center;
    gap: 5px;

    img {
      width: 50px;
      height: 50px;
      vertical-align: middle;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  h1 {
    font-size: 2.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .thropy {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-left: 5px;
  }

  h3 {
    span {
      font-weight: bold;
      color: green;
    }
  }

  strong {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    background-color: #eee;
    padding: 0.8rem;
    width: fit-content;
    margin: 0 auto;
  }
  .paypal {
    width: 250px;
    margin: 0 auto;
  }
`