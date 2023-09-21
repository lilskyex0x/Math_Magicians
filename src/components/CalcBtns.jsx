import React, { useState } from 'react';
import '../style.css';
import calculate from '../logic/calculate';

const CalcBtns = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const myinputValue = (buttonName) => {
    const data = calculate(calculatorData, buttonName);
    setCalculatorData(data);
  };

  const inputValue = calculatorData.next || calculatorData.total || '0';

  return (
    <>
      <div className="output">
        <div className="current__num">{inputValue}</div>
      </div>
      <div className="calc__btn">
        <button type="button" onClick={() => myinputValue('AC')} value="AC">AC</button>
        <button type="button" onClick={() => myinputValue('+/-')} value="+/-">+/-</button>
        <button type="button" onClick={() => myinputValue('%')} value="%">%</button>
        <button type="button" onClick={() => myinputValue('÷')} value="÷" className="ops__btn">
          ÷
        </button>
        <button type="button" onClick={() => myinputValue('7')} value="7">7</button>
        <button type="button" onClick={() => myinputValue('8')} value="8">8</button>
        <button type="button" onClick={() => myinputValue('9')} value="9">9</button>
        <button type="button" onClick={() => myinputValue('x')} value="x" className="ops__btn">
          x
        </button>
        <button type="button" onClick={() => myinputValue('4')} value="4">4</button>
        <button type="button" onClick={() => myinputValue('5')} value="5">5</button>
        <button type="button" onClick={() => myinputValue('6')} value="6">6</button>
        <button type="button" onClick={() => myinputValue('-')} value="-" className="ops__btn">
          -
        </button>
        <button type="button" onClick={() => myinputValue('1')} value="1">1</button>
        <button type="button" onClick={() => myinputValue('2')} value="2">2</button>
        <button type="button" onClick={() => myinputValue('3')} value="3">3</button>
        <button type="button" onClick={() => myinputValue('+')} value="+" className="ops__btn">
          +
        </button>
        <button type="button" onClick={() => myinputValue('0')} value="0" className="span__two">
          0
        </button>
        <button type="button" onClick={() => myinputValue('.')} value=".">.</button>
        <button type="button" onClick={() => myinputValue('=')} value="=" className="ops__btn">
          =
        </button>
      </div>
    </>
  );
};

export default CalcBtns;
