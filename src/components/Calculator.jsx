import React from 'react';
import '../style.css';
import CalcBtns from './CalcBtns';

const Calculator = () => (
  <>
    <div className="calc__grid">
      <div className="output">
        <div className="previous__num">354 +</div>
        <div className="current__num">521,879</div>
      </div>
      <CalcBtns />
    </div>
  </>
);

export default Calculator;
