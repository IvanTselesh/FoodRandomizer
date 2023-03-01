import React, { useState } from 'react';
import './App.css';
import { variables } from './api/variables';


function App() {
  const [result, setResult] = useState(0)
  const [food, setFood] = useState('')
  const randomNumber = () => {
    let min = 1;
    let max = 8;
  return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getFood = () => {
    setResult(randomNumber)
    const newArr = variables.find((item) => {
      if (result - 1 === variables.indexOf(item)) {
        setFood(item)
      }
    })
  };

  return (
    <div>
      <h1>Food Randomizer</h1>
      <div className='wrap'>
        <div className='button-wrap'>
          <button onClick={getFood}>Push Me!</button>
        </div>
        <div className='result'>{food}</div>
      </div>
    </div>
  );
}

export default App;
