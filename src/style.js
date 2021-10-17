import styled from "styled-components";

export const ContainerApp = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  >h1{
    margin:10px;
    color: #fff;
    font-size: 16px;
  }
  /* background: linear-gradient(175deg, rgba(31, 126, 186, 1) 2%, rgba(37, 142, 192, 0.5326505602240896) 100%) no-repeat; */ */
`

export const Header = styled.header`
  width: 100%;
  height: 45px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  >h2{
    color: #fff;
    font-weight: bold;
  }
  >img{
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`

export const ContainerQuiz = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`