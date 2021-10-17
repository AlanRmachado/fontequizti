import styled, { keyframes } from "styled-components"
import { FiDownloadCloud } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

const anima = keyframes`
  from{
    opacity: 0;
  }to{
    opacity: 1;
  }
`

export const Close = styled(IoMdClose)`
  &:hover{
    color: #2bd0bc
  }
`


export const Container = styled.div`
  z-index: 999999;
  overflow-y: auto;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: linear-gradient(90deg, #0a8ccc, #2bd0bc);  
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >h2{
    color: #fff;
    font-size: 22px;
  }
`

export const ImageContainer = styled.div`
  animation: ${anima} 2s;
  animation-fill-mode: forwards;  
  opacity: 0;
  width: 75%;
  >img{
    max-width: 100%;
  }
`

export const Controlls = styled.div`
  cursor: pointer;
  padding: 0 30px;
  display: flex;
  width: 100%;
  height: 50px;
  background: #0a8ccc;
  margin-bottom: 20px;
  justify-content: flex-end;
  align-items: center;  
`


export const ContainerDownload = styled.div`
opacity: 0;
  animation: ${anima} 2s;
  animation-fill-mode: forwards;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 50px;
  transition: all .7s;
  &:hover{
    background: #2bd0bc
  }
  
  >h2{
    color: #fff;
    font-size: 12px;
    
  }
`



export const ContainerClose = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 50px;
  
  transition: all .7s;
  &:hover{
    background: #2bd0bc
  }
  >h2{
    color: #fff;
    font-size: 12px;
  }
`



export const ContainerResult = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`