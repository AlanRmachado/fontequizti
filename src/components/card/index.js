import React from "react"


import {
  CardBody,
  NumberQuestion
} from "./style"

function Card({ number = 0, text = "Essa é uma alternativa", onClick, active }) {
  return (
    <CardBody onClick={onClick} active={active}>
      <NumberQuestion active={active}>
        <h1>{number}</h1>
      </NumberQuestion>
      <h1>{text}</h1>
    </CardBody>
  );
}

export default Card;
