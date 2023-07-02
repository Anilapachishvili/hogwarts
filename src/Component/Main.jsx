import React, { useState } from 'react';
import './Main.css';

function Main() {
  const [myArray, setMyArray] = useState(['ani', 'mariami', 'salome', 'nini', ]);
  const [emptyLists, setEmptyLists] = useState([]);

  function handleClick() {
    const rand = myArray[(Math.random() * myArray.length) | 0];
    const updatedArray = myArray.filter((name) => name !== rand);
    const updatedLists = emptyLists.concat(rand);
    setMyArray(updatedArray);
    setEmptyLists(updatedLists);
  }
  return (
    <div>
      <div>
         </div>
      <div className="lists">
        <ul>
          {myArray.map((name) => (
            <li key={name}>{name}</li>
            
          ))}
        </ul>
      </div>
      <div className='fl'>
        <ul>
          {emptyLists.map((name) => (
            <li className='top' key={name}>{name}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleClick}>გამანაწილებელი ქუდი</button>
      <div className='txt'>
        <p>გრიფინდორი</p>
        <p>ჰაფლფაპი</p>
        <p>რეივენქლო</p>
        <p>სლიზერინი</p>
      </div>
    </div>
  );
}

export default Main;
