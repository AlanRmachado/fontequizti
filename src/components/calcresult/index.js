import { result } from "lodash";
import React, { useContext, useEffect, useState } from "react"
import { save } from 'save-file'
import Lottie from 'react-lottie';
import animationData from './../../assets/loading.json'
import { FiDownloadCloud } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"
import AResult from "./artsresults/A.js"
import BResult from "./artsresults/B.js"
import CResult from "./artsresults/C.js"


import {
  Container,
  ContainerResult,
  ImageContainer,
  Controlls,
  ContainerClose,
  ContainerDownload,
  Close
} from "./style"

function CalcResult({ questions = [], close }) {

  const [showLoading, setShowLoading] = useState(true);
  const [_result, setResult] = useState(null);
  const [numberResult, setNumberResult] = useState(null)

  useEffect(() => {
    calcResult();
    setTimeout(() => {
      setShowLoading(false);
    }, 4000)
  }, []);


  function calcResult() {
    const oneHundredPercent = questions.length;
    let auxSelecteds = {
      A: 0,
      B: 0,
      C: 0
    };

    for (let q = 0; q < oneHundredPercent; q++) {

      const options = questions[q].options;
      for (let o = 0; o < options.length; o++) {
        if (options[o].selected) auxSelecteds[options[o].number]++;
      }
    }


    let arr = Object.values(auxSelecteds);
    let maxValue = Math.max(...arr)
    let index = arr.findIndex(i => i === maxValue);
    let result = Object.entries(auxSelecteds)[index][0];


    switch (result) {
      case "A": {
        setResult(AResult);
        setNumberResult("A");
        break;
      }
      case "B": {
        setResult(BResult);
        setNumberResult("B");
        break;
      }
      case "C": {
        setResult(CResult);
        setNumberResult("C");
        break;
      }
      default: {
        return;
      }
    }

  }


  function closeResult() {
    close();
  }


  function downloadFile() {
    const title = {
      A: "TI Master.jpg",
      B: "TI Júnior.jpg",
      C: "TI da pandemia.jpg"
    }
    save(_result, title[numberResult])
  }


  return (

    <Container >
      {showLoading && <>
        <Lottie options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
        }}
          height={300}
          width={300}
        />
        <h2>Analisando resultado ...</h2>
      </>}

      {!showLoading && _result && (
        <ContainerResult>
          <Controlls>
            <ContainerDownload onClick={downloadFile}>
              <FiDownloadCloud color={"#fff"} size={25} />
              <h2>baixar resultado</h2>
            </ContainerDownload>

            <ContainerClose style={{ marginLeft: 30 }} onClick={closeResult}>
              <Close color={"#fff"} size={25} />
              <h2>fechar</h2>
            </ContainerClose>
          </Controlls>
          <ImageContainer><img src={_result} /></ImageContainer>
        </ContainerResult>
      )}
    </Container>


  );
}

export default CalcResult;
