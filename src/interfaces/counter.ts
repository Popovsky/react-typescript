export interface ICounter {
  count: number,
  step: number,
  increaseCount: Function,
  decreaseCount: Function,
  setStep: Function,
}

export interface ICounterFields {
  counter: ICounter
}
