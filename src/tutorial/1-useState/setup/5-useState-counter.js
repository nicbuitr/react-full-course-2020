import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <section style={{ margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
      <button className='btn' onClick={() => setValue(0)}>Reset</button>
      <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
      <button className='btn' onClick={() => setTimeout(() => setValue(value + 1), 2000)}>
        Delayed Increase A
      </button>
      <button className='btn' onClick={() => setTimeout(() => setValue((prevState) => prevState + 1), 2000)}>
        Delayed Increase B
      </button>
    </section>
  );
};

export default UseStateCounter;
