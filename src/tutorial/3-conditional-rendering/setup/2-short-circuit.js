import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
    <h3>First Value: {firstValue}</h3>
    <h3>Second Value: {secondValue}</h3>
    </>
  );
};

export default ShortCircuit;
