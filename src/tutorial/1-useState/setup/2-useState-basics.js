import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Random Title');
  const [initial, setInitial] = useState(false);

  return <>
    <h1>{text}</h1>
    <button className='btn' onClick={() => {
        setText(initial? 'Random Title':'Hello people');
        setInitial(!initial);
      }}>
      Change title
    </button>
  </>
};

export default UseStateBasics;
