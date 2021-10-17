import styled from "styled-components"

export const ButtonComponent = styled.button`
  background: #0a8ccc;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 10px;
  transition: all .3s;
  color: #fff;


  &:hover{
    ${({ backButton }) => {
    if (!backButton) {
      return `
      background: #3286BF;
      color: #fff;
      `
    } else {
      return `
      background: rgba(255,255,255, .7);      
      `
    }
  }}
  }



  ${({ leftMargin }) => {
    if (leftMargin) {
      return `margin-left: ${leftMargin}px`
    }
  }}


  ${({ backButton }) => {
    if (backButton) {
      return `
      background: #fff;
       color: #0a8ccc;
      `
    }
  }}
  
`