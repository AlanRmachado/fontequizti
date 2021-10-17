import React, { createContext, useState } from "react";


const ProgressContext = createContext();

export const ProgressContextProvider = ({ children }) => {

  const [percent, setPercent] = useState(0);
  const [numPage, setNumPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0)

  function setNumPercent(number) {
    setPercent(number)
  }

  function sumPercent() {
    setPercent(old => {
      if ((old + 20) > 100) {
        return 100
      } else {
        return old + 20;
      }
    })
  }

  return (
    <ProgressContext.Provider value={{ percent, sumPercent, setNumPercent, numPage, totalPage, setNumPage, setTotalPage }} >
      {children}
    </ProgressContext.Provider>
  );
}

export default ProgressContext