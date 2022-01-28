import React from 'react';

export default function Form({buttonText , inputText, handleClick, handleChange}) {
  
  return <div>
      <input placeholder={inputText} onChange={handleChange}>

      </input>
      <button onClick={handleClick}>
        {buttonText}
      </button>

  </div>;
}
