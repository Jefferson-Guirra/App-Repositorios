import styled from "styled-components";

export const container = styled.main`
  max-width:1120px;
  margin:0 auto;
  padding:0 2rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify:content:center;

  img{
    margin-top:2rem;
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
  gap:10px;

  img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 2px solid #141a29;
    transition:.2s;
  }

  img:hover{
    transform:scale(1.2)
  }
  
`
