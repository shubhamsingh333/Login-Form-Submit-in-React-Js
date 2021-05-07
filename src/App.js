import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const [fullName, setfullName] = useState('');

  const [lastNamenew, setLastNamenew] = useState('');

  const InputEvent = event => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const InputEventTwo = event => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };

  const onSubmits = event => {
    event.preventDefault();
    setfullName(name);
    setLastNamenew(lastName);
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <h1>
            Hello {fullName}
            {lastNamenew}
          </h1>
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={InputEvent}
            value={name}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your password"
            onChange={InputEventTwo}
            value={lastName}
          />
          <button type="submit"> Submit me </button>
        </form>
      </div>
    </>
  );
};
export default App;
