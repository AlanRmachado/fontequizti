import React, { useContext, useEffect, useState } from "react"

import MockQuetions from "./mock"

import ProgressBar from "./components/progressbar"
import Logo from "./assets/mercado_eletronico_2-04-white.png"
import QuestionsEngine from "./components/questionsengine"
import ProgressContext from "./contexts/progress"
import Button from "./components/button"
import {
  ContainerApp,
  Header,
} from "./style"

function App() {
  const { numPage, totalPage, setNumPage, setTotalPage, percent } = useContext(ProgressContext);

  useEffect(() => {
    setTotalPage(MockQuetions.length);
  }, [])

  return (
    <>
      <ContainerApp >
        <Header>
          <img src={Logo} />
          <h2>{`${numPage} / ${totalPage}`}</h2>
        </Header>

        <ProgressBar percent={0} />
        <h1>Quiz dia do TI</h1>
        <QuestionsEngine questions={MockQuetions} />
      </ContainerApp>
    </>
  );
}

export default App;
