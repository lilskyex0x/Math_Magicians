import React from 'react';
import './style.css';
import Calculator from './components/Calculator';
import DisplayQuote from './components/Quotes';

function App() {
  return (
    <>
      <DisplayQuote />
      <Calculator />
    </>
  );
}

export default App;
