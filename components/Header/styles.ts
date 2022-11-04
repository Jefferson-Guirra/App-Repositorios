import styled from "styled-components";

export const headerContainer = styled.header`
  height:6rem;
  background-color:#141a29;

`
export const headerContent = styled.div`
  max-width:1120px;
  height:6rem;
  margin:0 auto;
  display:flex;
  align-items:center;

  img{
    cursor:pointer;
  }

  nav{
    margin-left: 5rem;
    hight:5rem;
  }
  nav a:not(:first-child){
    margin-left:2rem;
  }
  
  a{
    display:inline-block;
    position:relative;
    padding: 0 0 0.5rem;
    height: 5rem;
    line-height:5rem;
    color:#FFF;
  }

  button{
    margin-left:auto;
  }
`