import styled from "styled-components"


export const CardBody = styled.div`
  cursor: pointer;
  width: 400px;
  padding: 14px 20px;
  background-color: #000;
  border-radius: 10px;
  margin-bottom: 15px;
  align-items: center;
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: all .8s;
  background: #fff;


  >h1{
    color: #0a8ccc;
    padding-left: 10px;
    ${({ active }) => {
    if (active) {
      return `    
      transition: all .8s;    
        color: #fff;       
      `
    }
  }}
  }

  
  ${({ active }) => {
    if (active) {
      return ` 
      transition: all .8s;    
      background: linear-gradient(90deg, #0a8ccc, #2bd0bc);    
      `
    }
  }}

&:hover{
  
    transform: translateY(-5px);
  }

`

export const NumberQuestion = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a8ccc;
  
  >h1{
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  ${({ active }) => {
    if (active) {
      return `
        background: #0a8ccc;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
       `
    }
  }}

`
