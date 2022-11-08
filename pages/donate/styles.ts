import styled from "styled-components"

export const container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 3rem;
  min-height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img{
    width:100%;
  }
  .rocket{
    width:280px;
    margin: 0 auto;
  }
  .vip {
    color:#FFF;
    margin-top: 1.5rem;
    width: fit-content;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 6px;
    background-color: #019950;

    img {
      width: 50px;
      height: 50px;
      vertical-align:middle;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  h1 {
    margin: 1rem 0;
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
    margin-bottom: 1rem;
    span {
      font-weight: bold;
      color:#19950;
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
  .paypal{
    width:150px;
    margin:0 auto;
  }
`