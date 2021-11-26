import React from 'react';
import {makeAutoObservable} from 'mobx';

class Counter {
  count: number = 0;
  step: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  increaseCount = () => {
    this.count += this.step;
  };

  decreaseCount = () => {
    this.count -= this.step;
  };

  setStep = (step: number) => {
    this.step = +step;
  }
}

export default Counter;
