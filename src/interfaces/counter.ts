export interface ICounter {
  count: number,
  step: number,
  increaseCount(): void,
  decreaseCount(): void,
  setStep(step: number): void,
}

export interface ICounterFields {
  counter: ICounter
}
