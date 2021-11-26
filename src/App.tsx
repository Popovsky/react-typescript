import React from 'react';
import Counter from './components/Counter';
import CountView from './components/CountView';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import StepHandler from './components/StepHandler';
import { ICounter } from './interfaces/counter';

const counter: ICounter = new Counter();

const App: React.FC = () => {
  return <>
    <div>App was loaded...</div>
    <CountView counter={counter}/>
    <IncrementButton counter={counter}/>
    <DecrementButton counter={counter}/>
    <StepHandler counter={counter}/>
  </>;
};

export default App;
