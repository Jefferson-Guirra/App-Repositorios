import styled from "styled-components";

export const container = styled.main`
  max-width:1120px;
  min-height: calc(100vh - 6rem);
  margin:0 auto;
  padding:0 2rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify:content:center;

  .img{
    padding:none;
    display:flex;
    margin-top:2rem;
    align-items:center;
    justiry:content:center;
    height:300px;
  }

    h3{
    margin-top:1.5rem;
    margin-bottom:1.5rem;
  }
`
export const callToAction = styled.section`
  max-width: 700px;

  h1 {
    font-size: 1.8rem;
    margin-top: 1rem;
    font-weight: bold;
    text-align: center;
    color: #141a29;
  }


  p {
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: center;
    color: #141a29;

    span{
      color:#04dd75;
      font-weight:bold;
    }
  }
`
export const donaters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  gap: 10px;

  
  img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 2px solid #141a29;
    transition: 0.2s;
    background-color:red;
  }

  img:hover {

    transform: scale(1.2);
  }
`
