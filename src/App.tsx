import React from 'react';
import Counter from './components/Counter';
import CountView from './components/CountView';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import StepHandler from './components/StepHandler';
import { ICounter } from './interfaces/counter';
import Form from "./components/Form";
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';

const counter: ICounter = new Counter();

const App: React.FC = () => {
  return <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/counter" element={<>
            <CountView counter={counter}/>
            <IncrementButton counter={counter}/>
            <DecrementButton counter={counter}/>
            <StepHandler counter={counter}/></>} />
          <Route path="/users" element={<Form/>} />
          <Route path="/" element={<div>App was loaded...</div>} />
        </Routes>
      </div>
    </Router>
  </>;
};

export default App;
