import React, { useState, useContext, useEffect } from "react"

import Card from "./../card"
import ProgressContext from "../../contexts/progress";
import { CSSTransition } from "react-transition-group"
import { cloneDeep } from "lodash";
import ProgressBar from "../progressbar"
import {
  Container,
  TitleQuestion,
  ImageContainer,
  ContainerButtons,
  ThanksTitle
} from "./style"
import Button from "../button";

import CalcResult from "../calcresult"


function QuestionsEngine({ questions = [] }) {
  const { setNumPercent, setNumPage, percent } = useContext(ProgressContext)
  const [currentPage, setCurrentPage] = useState(0);
  const [_questions, setQuestions] = useState([]);
  const [showCalcResult, setShowCalcResult] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentPage(0);
      setQuestions(questions);
    }
  }, []);



  useEffect(() => {
    const oneHundredPercent = _questions.length;
    let auxSelecteds = 0;

    for (let q = 0; q < oneHundredPercent; q++) {
      const options = _questions[q].options;
      for (let o = 0; o < options.length; o++) {
        if (options[o].selected) auxSelecteds++;
      }
    }

    setNumPercent(calcPercent(oneHundredPercent, auxSelecteds));
  }, [_questions])



  function calcPercent(hundredPercet, value) {
    if (hundredPercet < value)
      return Math.floor((hundredPercet / value) * 100)
    else
      return Math.floor((value / hundredPercet) * 100)
  }



  function NextQuestion() {
    const oneHundredPercent = _questions.length;
    const aux = currentPage + 1;
    if (aux < oneHundredPercent) {
      setNumPage(aux + 1);
      setCurrentPage(aux);
    }
  }


  function lessQuestion() {
    const aux = currentPage - 1;

    if (aux >= 0) {
      setNumPage(aux + 1);
      setCurrentPage(aux);
    }
  }


  function selectOption(index) {
    const newData = cloneDeep(_questions);
    const aux_select = newData[currentPage].options[index].selected;
    newData[currentPage].options.map(i => i.selected = false);
    newData[currentPage].options[index].selected = !aux_select;
    setQuestions(newData);
  }


  function goToCalc() {
    setShowCalcResult(true);
  }

  function closeCalcResult() {
    setShowCalcResult(false);
    setQuestions(questions);
    setCurrentPage(0);
    setNumPage(1);
    setShowThanks(true)
  }


  return (
    <>
      <Container>
        {showCalcResult && <CalcResult questions={_questions} close={closeCalcResult} />}
        {showThanks && <ThanksTitle>Obrigada por participar :D</ThanksTitle>}
        {!showThanks && <>
          {
            _questions.length > 0 && (
              <>
                <TitleQuestion hasImage={_questions[currentPage].img}>{_questions[currentPage].title}</TitleQuestion>
                {
                  _questions[currentPage].img ? <ImageContainer><img src={_questions[currentPage].img} /></ImageContainer> : null
                }
                {
                  _questions[currentPage].options.map((i, index) => {
                    return <Card text={i.text} number={i.number} onClick={() => selectOption(index)} active={i.selected} />
                  })
                }
              </>
            )
          }
          <ContainerButtons ContainerButtons >
            {currentPage > 0 && <Button backButton onClick={lessQuestion}>&larr; Voltar</Button>}
            {currentPage < (_questions.length - 1) && <Button leftMargin={currentPage > 0 && 20} onClick={NextQuestion}>Próxima &rarr;</Button>}
            {percent === 100 && <Button leftMargin={20} onClick={goToCalc} style={{ border: "1px solid #fff" }}>
              Calcular resultado
            </Button>}
          </ContainerButtons>
        </>}
      </Container >
    </>
  );
}

export default QuestionsEngine;
