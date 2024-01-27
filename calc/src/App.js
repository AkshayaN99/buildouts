
import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      const result = eval(input);
      setOutput(result.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  return (
    <div>
    <h1 className="he">React Calculator</h1>
    <div className="calculator-container">
      
      <input type="text" value={input} readOnly />
      {output && <p>{output}</p>}
      <div className="button-grid">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
         
        <button onClick={handleClear} >C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

        
      </div>
    </div>
    </div>
  );
}

export default App;