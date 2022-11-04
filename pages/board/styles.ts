import styled from "styled-components";

export const container = styled.main`
  max-width:1120px;
  margin: 2rem auto;
  padding:2rem;
  background:#17181f;
  border-radius:6px;

  form{
    display:flex;
    align-items:center;
    justify-content:center;

    input{
      width:90%;
      height:50px;
      background-color:#20212c;
      border: 1px solid #424242;
      border-radius:6px;
      padding:3px 10px;
      color:#FFF;
    }

    button{
      margin-left:10px;
      width:8%;
      height:50px;
      border:none;
      background-color:#FFB800;
      border-radius:6px;
    }
  }

  h1{
    color:#FFF;
    margin-top:1.8rem;
  }

`

export const taskList = styled.article`
  background-color:#20212c;
  margin:1rem 0;
  padding:0.7rem;
  border-radius:6px;

  p{
    cursor:pointer;
    color:#F2f6fc;
    line-height:150%;
  }

`

export const actions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    time {
      color: #ffb800;
      margin-left: 5px;
      margin-right: 1rem;
    }
  }
  button {
    background-color: transparent;
    border: none;
    display:flex;
    align-items:center;
    justify-content:center;

    button:not(:first-child){
      margin-left:10px;
    }
    span {
      color: #FFF;
      cursor:pointer;
      margin-left:.2rem;
    }

    span:hover{
      filter: brightness(0.7)
    }
  }
`

export const vipContainer = styled.div`
  max-width: 1120px;
  padding: 0.7rem 1rem;
  background: #17181f;
  margin:1rem auto;
  border-radius:6px;

  h3{
    color:#FFB800;
    font-size:2rem;
    font-weight:bold;
  }

  div{
    display:flex;
    align-items:center;
    gap:10px;
    margin-top:1rem;

    time{
      color:#FFF;
      font-size:1.4rem;
    }
  }
`