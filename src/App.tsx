import React from 'react';
import Counter from './components/Counter';
import CountView from './components/CountView';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import StepHandler from './components/StepHandler';
import { ICounter } from './interfaces/counter';
import Form from "./components/Form";
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Box, Tab, Tabs} from "@mui/material";
import CenterWrapper from "./components/CenterWrapper";

const counter: ICounter = new Counter();

const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

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
