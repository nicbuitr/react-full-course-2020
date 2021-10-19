import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'Peter', age: 24, message:'Random Message',
  });

  const changeMessage = (message) => {
    setPerson({...person, message});
  }

  return (<>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={() => changeMessage('New Message')}>
      Change Message
    </button>
  </>);
};

export default UseStateObject;
