import React, { useContext } from "react"

import ProgressContext from "../../contexts/progress";

import {
  Progress,
  ProgressOffset,
} from "./style"

function ProgressBar() {

  const { percent, sumPercent } = useContext(ProgressContext)

  return (
    <Progress percent={percent}>
      <ProgressOffset percent={percent}>

      </ProgressOffset>
    </Progress>
  );
}

export default ProgressBar;
