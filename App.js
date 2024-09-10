import React, { useState, useReducer } from 'react';
import Resturant from './component/basics/resturant';
import Header from './component/basics/Header';

const App = () => {
  const [text, setText] = useState('');

  const change = (eventt) => {
    const newValue = eventt.target.value;
    setText(newValue);
  };

  const reducer = (state, action) => {
    if (action.type === 'INCR') {
      return state + 1;
    }
    if (state > 0 && action.type === 'DECR') {
      return state - 1;
    }
    return state;
  };

  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <Header />
      <Resturant />
      
      <br />
      <br />
      
    </>
  );
};

export default App;