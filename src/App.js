import React from 'react';
import './App.css';
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  return (
    <Wrapper>
      {/* <Hello name="react" color="red" isRequired />
      <Hello color="pink" /> */}
      {/* <Counter /> */}
      <InputSample />
    </Wrapper>
  );
}

export default App;
