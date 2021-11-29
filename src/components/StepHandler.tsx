import React from 'react';
import {observer} from 'mobx-react';
import {ICounterFields} from '../interfaces/counter';

const StepHandler: React.FC<ICounterFields> = observer(({counter}) => <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => counter.setStep(+event.target.value)} type="number"/>);

export default StepHandler;
