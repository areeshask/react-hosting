import React, { useState } from 'react';
import './App.css';

export default function TossApp() {
  const [result, setResult] = useState(null);
  const [choice, setChoice] = useState(null);  

  const tossCoin = (userChoice) => {
    const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
    setResult(outcome);
    if (outcome === userChoice) {
      alert('You win!🎉😎');
    } else {
      alert('You lose!😫😭');
    }
  };

  // Handle user's choice and update the choice state
  const handleChoice = (userChoice) => {
    setChoice(userChoice); 
    tossCoin(userChoice);   
  };

  return (
<div className="toss-container">
      <h1>Heads or Tails?</h1>
      <button onClick={() => handleChoice('Heads')}>Heads</button>
      <button onClick={() => handleChoice('Tails')}>Tails</button>
      {choice && <p>Your Choice: {choice}</p>} 
      {result && <p>Result: {result}</p>}      
    </div>
  );
}

//learning json and API ::::
// import React, { useEffect , useState} from 'react';

// function setUser(){
//  const [user,userData] = useState(null);
// useEffect(function(){
// fetch("https://jsonplaceholder.typicode.com/users/1")
// },[])
// return()
// }
