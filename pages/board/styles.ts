import styled from 'styled-components'
type containerProps = {
  error: string
  value: string
}
export const container = styled.main(
  (props: containerProps) => `
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
      width:92%;
      height:50px;
      background-color:#20212c;
      border: 3px solid ${props.error === '' ? '#FFB800' : '#FF3636'};
      border-radius:6px;
      padding:3px 10px;
      color:#FFF;
    }

    input:hover,
    input:focus{
      outline:none;
      border-color: ${props.error === '' ? '#FFB800' : '#FF3636'};
}
    }

    button{
      margin-left:10px;
      width:8%;
      height:50px;
      border:none;
      background-color:#FFB800;
      border-radius:6px;
      opacity:${props.value === '' ? '.8' : 'initial'}
    }
  }
  .error{
    color:red;
    margin-top:0.3rem;
    font-weight:bold;
  }

  h1{
    color:#FFF;
    margin-top:1.8rem;
  }

`
)

export const taskList = styled.article`
  background-color: #20212c;
  margin: 1rem 0;
  padding: 0.7rem;
  border-radius: 6px;

  p {
    cursor: pointer;
    color: #f2f6fc;
    line-height: 150%;
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
    padding:0px;
    margin-left:0px;
    justify-content: center;
    align-items: center;
    time {
      color: #ffb800;
      margin-left: 5px;
    }
  }
  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

  
    span {
      color: #fff;
      cursor: pointer;
      margin-left: 0.2rem;
    }

    span:hover {
      filter: brightness(0.7);
    }
  }
`

export const vipContainer = styled.div`
  max-width: 1120px;
  padding: 0.7rem 1rem;
  background: #17181f;
  margin: 1rem auto;
  border-radius: 6px;

  h3 {
    color: #ffb800;
    font-size: 2rem;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 1rem;

    time {
      color: #fff;
      font-size: 1.4rem;
    }
  }
`
