import React, {useState} from 'react';
import './App.css';
import Number from "./Number/Number";


function App() {
  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const number1 = randomNumber(5, 35);
  const number2 = randomNumber(5, 35);
  const number3 = randomNumber(5, 35);
  const number4 = randomNumber(5, 35);
  const number5 = randomNumber(5, 35);

  const [number, setNumber] = useState<number[]>([
    number1, number2, number3, number4, number5
  ])
  const compareNum = (a:number , b:number) => {
    return a - b
  }
  number.sort(compareNum)
  const newNumbers = () => {
    setNumber([number1, number2, number3, number4, number5])
  }
    return (
      <div className="App">
        <div>
          <button className="btn" onClick={newNumbers}>New numbers</button>
        </div>
        <Number number={number[0]}/>
        <Number number={number[1]}/>
        <Number number={number[2]}/>
        <Number number={number[3]}/>
        <Number number={number[4]}/>
      </div>
    );
}

export default App;
