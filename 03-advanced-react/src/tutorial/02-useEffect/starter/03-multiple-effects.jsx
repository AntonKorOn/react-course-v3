import { useState, useEffect } from 'react';

const MultipleEffectsStarter = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // useEffect(() => {
  //   console.log('hello from first useEffect');
  // }, []);

  useEffect(() => {
    console.log('hello from second useEffect');
  }, [secondValue]);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>

      {/* will not work as it just updates a value rather than works with React Virtual DOM? */}
      <button className='btn' onClick={() => secondValue + 1}> 
        second value
      </button>
    </div>
  );
};
export default MultipleEffectsStarter;
