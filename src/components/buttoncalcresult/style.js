import { keyframes } from "styled-components"
import styled from "styled-components"

const anima = keyframes`
  from{
    background: none;
 
  }to{
    background:  #05668d;
 
  }
`


export const ButtonComponent = styled.button`
  color: #fff;
  background: none;
  animation: ${anima} 2s infinite;
  cursor: pointer;
  border: none;
  padding: 10px;
  font-size: 22px;
  position: absolute;
  width: 100%;
  bottom: 0;
  animation-fill-mode: forwards;  
  font-weight: bold;
`