import styled from "styled-components";
type Props = {
  activeMenu: boolean
}
export const headerContainer = styled.header`
  height: 6rem;
  background-color: #141a29;
  position: relative;
`
export const headerContent = styled.div`
  max-width: 1120px;
  height: 6rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: 40rem) {
    padding-inline: 2rem;
  }

  img {
    cursor: pointer;
  }

  nav {
    margin-left: 5rem;
    hight: 5rem;
  }
  nav a:not(:first-child) {
    margin-left: 2rem;
  }

  a {
    display: inline-block;
    position: relative;
    padding: 0 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: #fff;
  }

  @media (max-width: 40rem) {
    nav {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap:2rem;
    }
    a {
      height:fit-content;
      padding:1rem;
      line-height: 0rem;
    }
    nav a:not(:first-child) {
      margin-left: 0rem;
      margin-bottom:2rem;
    }
    button{
      margin: 0 auto;
    }
  }
`


export const hamburguer = styled.span(
  (props: Props) => `
  display: none;
  width: 40px;
  height: 28px;
  z-index:600;
  margin-left:auto;
  position: relative;
  cursor:pointer;
  span {
    display: block;
    width: 100%;
    height: 3px;
    width: 40px;
    background-color: #FFF;
    transition:1s;
  }

  .line1 {
    position: absolute;
    top:${props.activeMenu ? '12px' : '0'};
    transform:${props.activeMenu ? 'rotate(45deg)' : 'initial'};
  }
  .line2 {
    opacity:${props.activeMenu ? '0' : 'initial'};
    position: absolute;
    top: 12px;
  }
  .line3 {
    position: absolute;
    top: 24px;
    top:${props.activeMenu ? '12px' : '24px'};
    transform:${props.activeMenu ? 'rotate(-45deg)' : 'initial'}
  }
    @media (max-width: 40rem) {
    display:block;
  }
`
)
export const actions = styled.div(
  (props: Props) => `
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 40rem) {
    opacity: ${props.activeMenu ? 'initial' : '0'};
    pointer-events:${props.activeMenu ? 'initial' : 'none'};
    transform: ${props.activeMenu ? 'initial' : 'translate3d(0px,-50px,0)'};
    background-color: #141a29;
    position: absolute;
    top: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 500;
    flex-direction: column;
    right: 0px;
    padding: 1rem;
    width: fit-content;
    transition: all 1s ease;
  }
`
)