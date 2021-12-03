import React, {useEffect, useState} from 'react';
import Counter from './components/Counter';
import CountView from './components/CountView';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import StepHandler from './components/StepHandler';
import { ICounter } from './interfaces/counter';
import Form from "./components/Form";
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Box, List, Tab, Tabs} from "@mui/material";
import CenterWrapper from "./components/CenterWrapper";
import {Task} from "./stores/Task";

const counter: ICounter = new Counter();
const task = new Task();

const App: React.FC = () => {
  const [value, setValue] = useState(0);

  const {loadData} = task;

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <>
    <Box sx={{ width: '100%' }}>
      <Router>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab component={Link} to={'/'} label="Home" />
            <Tab component={Link} to={'/counter'} label="Counter" />
            <Tab component={Link} to={'/form'} label="Form" />
            <Tab component={Link} to={'/tasks'} label="Tasks" />
          </Tabs>
        </Box>
        <Routes>
          <Route path="/counter" element={
            <CenterWrapper>
              <CountView counter={counter}/>
              <IncrementButton counter={counter}/>
              <DecrementButton counter={counter}/>
              <StepHandler counter={counter}/>
            </CenterWrapper>
          } />
          <Route path="/form" element={
            <CenterWrapper>
              <Form/>
            </CenterWrapper>
          } />
          <Route path="/tasks" element={
            <CenterWrapper>
              <Form/>
              <List>
              </List>
            </CenterWrapper>} />
          <Route path="/" element={
            <CenterWrapper>
              <div>App was loaded...</div>
            </CenterWrapper>} />
        </Routes>
      </Router>
    </Box>
  </>;
};

export default App;
