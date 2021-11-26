import React from 'react';
import {observer} from 'mobx-react';
import {ICounterFields} from '../interfaces/counter';

const IncrementButton: React.FC<ICounterFields> = observer(({counter}) => <button onClick={() => counter.increaseCount()}>+</button>);

export default IncrementButton;
