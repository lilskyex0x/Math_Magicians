import React from 'react';
import '../style.css';
import CalcBtns from './CalcBtns';

const Calculator = () => (
  <>
    <div className="calc__grid">
      <h1>Let&apos;s Do Some Math!</h1>
      <CalcBtns />
    </div>
  </>
);

export default Calculator;
