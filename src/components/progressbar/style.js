import styled, { keyframes } from "styled-components";

export const Progress = styled.div`
  width: 100%;
  height: 4px;  
  background: #fff;
  overflow: hidden;
 
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const ProgressOffset = styled.div`
  width: ${({ percent }) => {
    if (percent > 100) return `100%`
    else return `${percent}%`
  }};


  transition: all 1s;
  background-image: linear-gradient(
    90deg, #0a8ccc, #2bd0bc);
  height: 15px;  
  position: relative;
`
export const Separate = styled.div`
  width: 4px;
  height: 15px;
  position: absolute;
  left: 25%;
  background: #fff;
`
