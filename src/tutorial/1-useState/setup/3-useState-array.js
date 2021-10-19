import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
  <>
    {people.map((person) => {
      const { id, name } = person;
      return <div key={id} className="item">
        <h4>{name}</h4>
        <button className="btn" onClick={() => setPeople(people.filter((person) => person.id !== id))}>
          Remove
        </button>
      </div>
    })}
    <button className="btn" onClick={() => setPeople([])}>
      Clear Items
    </button>
    <button className="btn" onClick={() => setPeople(data)}>
      Restore Items
    </button>
  </>
  );
};

export default UseStateArray;
