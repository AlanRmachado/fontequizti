import React, { useState } from "react"




import {
  ButtonComponent
} from "./style"

function Button({ children, leftMargin, backButton, onClick, style = {} }) {
  return (
    <ButtonComponent onClick={onClick} leftMargin={leftMargin} backButton={backButton} style={style}>
      {children}
    </ButtonComponent>
  );
}

export default Button;
