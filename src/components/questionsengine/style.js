import styled, { keyframes } from "styled-components"

const anima = keyframes`
  from{
    opacity: 0
  }to{
    opacity: 1;
  }
`


export const Container = styled.div`
  flex: 1;
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  padding-bottom: 50px;
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.div`
  width: 399px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background:  rgba(31, 126, 186, 1);
  border: 1px solid #fff;
  >img{
    max-width: 100%;
  }
  margin-bottom: 20px;
`

export const ThanksTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`

export const TitleQuestion = styled.h2`

  font-size: 24px;
  color: #fff;
  margin-bottom: 60px;
  letter-spacing: 1px;
  line-height: 34px !important;
  font-weight: bold;
  text-align: center;
  max-width: 65%;

  ${({ hasImage }) => {
    if (hasImage) {
      return `margin-bottom: 10px`
    }
  }}
`